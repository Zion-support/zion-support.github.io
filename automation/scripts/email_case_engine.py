#!/usr/bin/env python3
"""Case-by-case email intelligence for Zion responders.

Fast, local, no LLM: score every inbound message, pick one primary intent,
and map it to the safest appropriate action (draft, escalate, archive,
suppress, route). Reply copy is intent-specific so an RFQ does not get a
Discovery upsell and a verification code is never answered.
"""

from __future__ import annotations

import json
import re
import unicodedata
from dataclasses import asdict, dataclass, field
from typing import Iterable

BOOK_URL = "https://ziontechgroup.com/book/"
SITE_URL = "https://ziontechgroup.com"
CALENDLY_URL = "https://calendly.com/kleber-ziontechgroup"
COMMERCIAL = "commercial@ziontechgroup.com"
FROM_NAME = "Kleber Garcia Alcatrão"
FROM_EMAIL = "kleber@ziontechgroup.com"
COMPANY = "Zion Tech Group"

OWN_DOMAINS = frozenset({"ziontechgroup.com", "ziontech.com.br"})

SKIP_DOMAINS = frozenset({
    "github.com", "notifications.github.com", "gitlab.com", "jira.atlassian.com",
    "trello.com", "linear.app", "figma.com", "netlify.com", "vercel.com",
    "docs.google.com", "calendar.google.com", "meet.google.com",
    "x.ai", "grok.com",
    "email.samsung.com", "br.email.samsung.com",
    "e.bluehost.com", "bluehost.com",
    "service.tiktok.com", "automailer.io",
    "linkedin.com", "facebookmail.com",
    "mkt.agilize.com.br", "agilize.com.br",
    "pncalifornia.com", "nvidia.com", "stackblitz.com", "cloudflare.com",
    "news.kilocode.ai", "homer.com.br", "e.stripe.com", "e.atlassian.com",
    "firecrawl.dev", "groups.linkedin.com", "vresp.com", "mail.vresp.com",
})

SKIP_SENDERS_SUBSTR = (
    "noreply", "no-reply", "mailer-daemon", "notifications@", "bounce",
    "newsletter@", "marketing@", "promo@", "donotreply", "do-not-reply",
    "groups-noreply@", "messages-noreply@",
)

SECURITY_SENDERS = frozenset({
    "notifications@stripe.com", "security@stripe.com",
    "no-reply@accounts.google.com", "no-reply@google.com",
    "account-alerts@t.brevo.com",
    "google-workspace-alerts-noreply@google.com",
})

ACCOUNTING_DOMAINS = frozenset({
    "nibo.com.br", "contabilvieira.com.br", "sieg.com.br", "emkt.b3.com.br",
})

VOICEMAIL_DOMAINS = frozenset({"voicemail.goto.com", "goto.com"})

TICKET_LOCAL_PARTS = frozenset({
    "meajuda", "suporte", "support", "helpdesk", "help", "noreply-support",
    "tickets", "servicedesk", "atendimento",
})

# Hard-override intents, highest priority first.
HARD_INTENTS = (
    "unsubscribe_suppress",
    "otp_verification",
    "security_alert",
    "bounce",
    "delivery_delay",
    "voicemail",
    "own_outbound",
    "internal",
    "github_noise",
    "automation_quiet",
    "automation_action",
    "automation_status",
    "accounting",
    "legal_compliance",
    "ticket_auto_ack",
    "vendor_offer",
    "gov_tender",
    "newsletter",
    "noreply_noise",
)

INTENT_TO_LABEL = {
    "unsubscribe_suppress": "suppress",
    "otp_verification": "otp",
    "security_alert": "security",
    "bounce": "bounce",
    "delivery_delay": "delivery_delay",
    "voicemail": "voicemail",
    "own_outbound": "own_outbound",
    "internal": "internal",
    "github_noise": "noise",
    "automation_quiet": "automation_quiet",
    "automation_action": "automation_action",
    "automation_status": "automation_status",
    "accounting": "accounting",
    "legal_compliance": "legal",
    "ticket_auto_ack": "ticket_ack",
    "vendor_offer": "vendor_offer",
    "gov_tender": "gov_tender",
    "newsletter": "noise",
    "noreply_noise": "noise",
    "pricing_rfq": "rfq",
    "hot_lead": "lead_opportunity",
    "meeting_request": "inbound_reply",
    "partnership": "lead_opportunity",
    "inbound_reply_positive": "inbound_reply",
    "inbound_reply_objection": "inbound_reply",
    "inbound_reply_question": "inbound_reply",
    "information_request": "inbound_reply",
    "support_incident": "support",
    "follow_up_nudge": "inbound_reply",
    "other": "other",
}

# Policy: primary_action, extra actions, auto-send (never for money/legal/auth).
POLICY = {
    "unsubscribe_suppress": ("suppress_contact", ["suppress_thread"], False, "high", 15),
    "otp_verification": ("hold_secret", ["needs_human"], False, "critical", 5),
    "security_alert": ("escalate_human", ["needs_human"], False, "critical", 10),
    "bounce": ("suppress_bad_address", ["archive"], False, "low", None),
    "delivery_delay": ("log_delay", ["archive"], False, "low", None),
    "voicemail": ("escalate_human", ["needs_human"], False, "high", 30),
    "own_outbound": ("skip", [], False, "low", None),
    "internal": ("route_internal", ["needs_human"], False, "medium", 120),
    "github_noise": ("archive_noise", ["archive"], False, "low", None),
    "automation_quiet": ("archive_noise", ["archive"], False, "low", None),
    "automation_action": ("store_history", ["store_history"], False, "medium", None),
    "automation_status": ("archive_noise", ["archive"], False, "low", None),
    "accounting": ("route_finance", ["route_finance"], False, "medium", 240),
    "legal_compliance": ("escalate_human", ["needs_human"], False, "high", 60),
    "ticket_auto_ack": ("log_outreach_hit", ["store_history"], False, "low", None),
    "vendor_offer": ("archive_noise", ["archive"], False, "low", None),
    "gov_tender": ("route_sales", ["needs_human"], False, "high", 180),
    "newsletter": ("archive_noise", ["archive"], False, "low", None),
    "noreply_noise": ("archive_noise", ["archive"], False, "low", None),
    "pricing_rfq": ("draft_quote_ack", ["draft_reply", "store_history", "create_deal"], False, "high", 60),
    "hot_lead": ("draft_fast_path", ["draft_reply", "store_history", "create_deal"], False, "critical", 30),
    "meeting_request": ("draft_meeting", ["draft_reply", "store_history"], True, "high", 60),
    "partnership": ("draft_partnership", ["draft_reply", "store_history"], True, "high", 120),
    "inbound_reply_positive": ("draft_continue", ["draft_reply", "store_history"], True, "high", 60),
    "inbound_reply_objection": ("draft_objection", ["draft_reply", "store_history"], False, "medium", 180),
    "inbound_reply_question": ("draft_answer", ["draft_reply", "store_history"], False, "high", 90),
    "information_request": ("draft_info", ["draft_reply", "store_history"], True, "medium", 180),
    "support_incident": ("ack_and_route", ["route_support", "draft_reply"], False, "high", 30),
    "follow_up_nudge": ("draft_nudge", ["draft_reply", "store_history"], True, "medium", 120),
    "other": ("human_review", ["needs_human"], False, "low", None),
}

GMAIL_LABELS = {
    "unsubscribe_suppress": ["Zion/Leads"],
    "otp_verification": ["Needs-Response"],
    "security_alert": ["Zion/Finance"],
    "bounce": ["Auto-Archived"],
    "delivery_delay": ["Auto-Archived"],
    "voicemail": ["Needs-Response"],
    "github_noise": ["GitHub/Archived"],
    "automation_quiet": ["Zion/Grok-Automations", "Auto-Archived"],
    "automation_action": ["Zion/Grok-Automations"],
    "automation_status": ["Zion/Grok-Automations", "Auto-Archived"],
    "accounting": ["Zion/Finance"],
    "legal_compliance": ["Needs-Response", "Zion/Leads"],
    "vendor_offer": ["Vendor"],
    "newsletter": ["Newsletter"],
    "pricing_rfq": ["Zion/Leads", "Needs-Response"],
    "hot_lead": ["Zion/Leads", "Needs-Response"],
    "meeting_request": ["Zion/Leads", "Needs-Response"],
    "partnership": ["Zion/Leads"],
    "inbound_reply_positive": ["Zion/Leads", "Needs-Response"],
    "gov_tender": ["Zion/Leads"],
    "support_incident": ["Needs-Response"],
}


def fold(text: str) -> str:
    normalized = unicodedata.normalize("NFKD", text or "")
    return "".join(c for c in normalized if not unicodedata.combining(c)).lower()


def extract_email(from_header: str) -> str:
    if not from_header:
        return ""
    m = re.search(r"<([^>]+)>", from_header)
    return (m.group(1) if m else from_header).strip().lower()


def extract_name(from_header: str) -> str:
    if not from_header:
        return "there"
    m = re.match(r'"?([^"<@]+)"?\s*<', from_header.strip())
    if m:
        token = m.group(1).strip().split()[0]
        if token:
            return token
    local = extract_email(from_header).split("@")[0]
    cleaned = re.sub(r"[._+\-]+", " ", local).strip()
    return cleaned.title() if cleaned else "there"


def sender_domain(contact: str) -> str:
    if "@" not in contact:
        return ""
    return contact.rsplit("@", 1)[-1].lower().strip(">. ")


def domain_matches(contact: str, domains: frozenset[str]) -> bool:
    host = sender_domain(contact)
    if not host:
        return False
    return any(host == d or host.endswith("." + d) for d in domains)


def detect_lang(text: str) -> str:
    t = fold(text)
    pt_hits = sum(w in t for w in (
        "obrigado", "projeto", "servicos", "abraco", "ola", "voce", "voces",
        "orcamento", "parceria", "proposta", "reuniao", "assunto",
        "solicitacao", "segue", "avaliacao", "bom dia", "boa tarde", "boa noite",
    ))
    es_hits = sum(w in t for w in (
        "gracias", "oportunidad", "proyecto", "servicios", "saludos", "reunion",
    ))
    if pt_hits >= 1 and pt_hits >= es_hits and not _hit(t, ("thanks", "please", "schedule")):
        return "pt"
    if pt_hits >= 2 or (pt_hits and es_hits == 0 and "obrigado" in t):
        return "pt"
    if "ola" in t or "orcamento" in t or "parceria" in t or "solicitacao" in t:
        return "pt"
    if es_hits >= 2 or "gracias" in t:
        return "es"
    return "en"


def _hit(blob: str, needles: Iterable[str]) -> list[str]:
    return [n for n in needles if n in blob]


@dataclass
class CaseDecision:
    intent: str
    label: str
    confidence: float
    priority: str
    language: str
    primary_action: str
    actions: list[str]
    should_reply: bool
    auto_send_allowed: bool
    human_review: bool
    reason: str
    signals_hit: list[str] = field(default_factory=list)
    gmail_labels: list[str] = field(default_factory=list)
    reply_body: str | None = None
    urgency_score: int = 0
    sla_minutes: int | None = None
    scores: dict[str, float] = field(default_factory=dict)
    sender_email: str = ""
    sender_name: str = ""

    def to_legacy_dict(self) -> dict:
        out = {
            "label": self.label,
            "priority": self.priority,
            "actions": list(self.actions),
            "reason": self.reason,
            "intent": self.intent,
            "confidence": round(self.confidence, 3),
            "language": self.language,
            "primary_action": self.primary_action,
            "should_reply": self.should_reply,
            "auto_send_allowed": self.auto_send_allowed,
            "human_review": self.human_review,
            "signals_hit": list(self.signals_hit),
            "gmail_labels": list(self.gmail_labels),
            "urgency_score": self.urgency_score,
            "sla_minutes": self.sla_minutes,
            "sender_email": self.sender_email,
            "sender_name": self.sender_name,
        }
        if self.reply_body:
            out["reply_body"] = self.reply_body
        if self.scores:
            out["scores"] = self.scores
        return out

    def to_json(self) -> dict:
        return asdict(self)


def _signoff(lang: str) -> str:
    if lang == "es":
        return (
            f"Saludos,\n{FROM_NAME}\nCEO, {COMPANY}\n"
            f"{SITE_URL}\n{FROM_EMAIL}"
        )
    if lang == "pt":
        return (
            f"Um abraço,\n{FROM_NAME}\nCEO, {COMPANY}\n"
            f"{SITE_URL}\n{FROM_EMAIL}"
        )
    return (
        f"Best,\n{FROM_NAME}\nCEO, {COMPANY}\n"
        f"{SITE_URL}\n{FROM_EMAIL}"
    )


def _opt_out(lang: str) -> str:
    if lang == "es":
        return "Para salir de la lista, responde BAJA o STOP."
    if lang == "pt":
        return "Para sair da lista, responda SAIR ou STOP."
    return "Reply STOP to opt out."


def build_reply_for_intent(intent: str, name: str, lang: str, subject: str = "") -> str | None:
    """Intent-specific draft. None means do not reply."""
    first = name or "there"
    if intent in {
        "unsubscribe_suppress", "otp_verification", "security_alert", "bounce",
        "delivery_delay", "voicemail", "own_outbound", "internal", "github_noise",
        "automation_quiet", "automation_action", "automation_status", "accounting",
        "legal_compliance", "ticket_auto_ack", "vendor_offer", "gov_tender",
        "newsletter", "noreply_noise",
    }:
        return None

    if intent == "pricing_rfq":
        if lang == "es":
            body = (
                f"{first},\n\n"
                "Recibimos la solicitud de propuesta y vamos a revisar el alcance con el equipo comercial.\n"
                f"Retornamos en 24–48h hábiles con una cotización. Si hay plazo, volumen o anexo técnico, responda este hilo o escriba a {COMMERCIAL}.\n\n"
                f"Si prefiere alinear en una llamada corta: {BOOK_URL}\n\n"
            )
        elif lang == "en":
            body = (
                f"{first},\n\n"
                "We received the quote request and will review the scope with our commercial team.\n"
                f"Expect a proposal within 24–48 business hours. If you have a deadline, volume, or spec sheet, reply here or email {COMMERCIAL}.\n\n"
                f"Optional 15-min alignment call: {BOOK_URL}\n\n"
            )
        else:
            body = (
                f"{first},\n\n"
                "Recebemos a solicitação de proposta e vamos analisar o escopo com o time comercial.\n"
                f"Retornamos em 24–48h úteis com a cotação. Se houver prazo, volume ou anexo técnico, responda este fio ou escreva para {COMMERCIAL}.\n\n"
                f"Se preferir alinhar em uma chamada curta: {BOOK_URL}\n\n"
            )
        return body + _signoff(lang)

    if intent == "meeting_request":
        if lang == "es":
            body = (
                f"{first},\n\n"
                "Perfecto — podemos agendar. Reserve 20 minutos aquí (o proponga otro horario en este hilo):\n"
                f"{BOOK_URL}\n{CALENDLY_URL}\n\n"
            )
        elif lang == "en":
            body = (
                f"{first},\n\n"
                "Happy to meet. Grab 20 minutes here (or reply with two times that work):\n"
                f"{BOOK_URL}\n{CALENDLY_URL}\n\n"
            )
        else:
            body = (
                f"{first},\n\n"
                "Perfeito — vamos agendar. Reserve 20 minutos aqui (ou sugira dois horários neste fio):\n"
                f"{BOOK_URL}\n{CALENDLY_URL}\n\n"
            )
        return body + _opt_out(lang) + "\n\n" + _signoff(lang)

    if intent == "hot_lead":
        if lang == "pt":
            body = (
                f"{first},\n\n"
                "Obrigado — vamos tratar isso com prioridade. Para avançar hoje:\n"
                f"1) Agende Discovery: {BOOK_URL}\n"
                f"2) Ou descreva escopo, prazo e orçamento neste fio que o comercial ({COMMERCIAL}) responde em seguida.\n\n"
            )
        elif lang == "es":
            body = (
                f"{first},\n\n"
                "Gracias — lo tomamos con prioridad. Para avanzar hoy:\n"
                f"1) Reserve Discovery: {BOOK_URL}\n"
                f"2) O describa alcance, plazo y presupuesto en este hilo.\n\n"
            )
        else:
            body = (
                f"{first},\n\n"
                "Thanks — we will treat this as priority. To move today:\n"
                f"1) Book Discovery: {BOOK_URL}\n"
                f"2) Or reply with scope, timeline, and budget and commercial will follow.\n\n"
            )
        return body + _signoff(lang)

    if intent == "inbound_reply_objection":
        if lang == "pt":
            body = (
                f"{first},\n\n"
                "Entendi, obrigado pela transparência. Sem pressão — se o momento mudar, estamos aqui.\n"
                f"Se quiser só um diagnóstico curto sem compromisso: {BOOK_URL}\n\n"
            )
        elif lang == "es":
            body = (
                f"{first},\n\n"
                "Entendido, gracias por la sinceridad. Sin presión — si el momento cambia, estamos aquí.\n"
                f"Si quiere un diagnóstico corto: {BOOK_URL}\n\n"
            )
        else:
            body = (
                f"{first},\n\n"
                "Understood — thank you for the honesty. No pressure. If timing changes, we are here.\n"
                f"A short no-commitment diagnostic is at {BOOK_URL}\n\n"
            )
        return body + _opt_out(lang) + "\n\n" + _signoff(lang)

    if intent == "support_incident":
        if lang == "pt":
            body = (
                f"{first},\n\n"
                "Recebemos o relato e o time de suporte já foi acionado. Responda este fio com horário do incidente, impacto e prints se tiver — isso acelera o diagnóstico.\n\n"
            )
        elif lang == "es":
            body = (
                f"{first},\n\n"
                "Recibimos el reporte y el equipo de soporte ya está en ello. Responda con horario, impacto y capturas si las hay.\n\n"
            )
        else:
            body = (
                f"{first},\n\n"
                "We received the report and support is on it. Reply with time of incident, impact, and screenshots if you have them.\n\n"
            )
        return body + _signoff(lang)

    if intent == "inbound_reply_question":
        if lang == "pt":
            body = (
                f"{first},\n\n"
                f"Ótima pergunta. Em resumo: a {COMPANY} entrega automação com IA, cloud e TI gerenciada sob medida — sem empurrar pacote genérico.\n"
                f"Posso responder com precisão numa chamada de 20 min: {BOOK_URL}\n"
                f"Site: {SITE_URL}\n\n"
            )
        elif lang == "es":
            body = (
                f"{first},\n\n"
                f"Buena pregunta. {COMPANY} entrega automatización con IA, cloud y TI gestionada a medida.\n"
                f"Lo afinamos en 20 min: {BOOK_URL}\n{SITE_URL}\n\n"
            )
        else:
            body = (
                f"{first},\n\n"
                f"Good question. {COMPANY} delivers tailored AI automation, cloud, and managed IT — not a generic package.\n"
                f"A 20-min call is the fastest way to be precise: {BOOK_URL}\n{SITE_URL}\n\n"
            )
        return body + _opt_out(lang) + "\n\n" + _signoff(lang)

    # partnership, inbound_positive, information_request, follow_up_nudge, default commercial
    if lang == "es":
        body = (
            f"{first},\n\n"
            "Gracias por el contacto. Veo potencial para avanzar juntos.\n\n"
            f"Servicios de IA y automatización: {SITE_URL}\n"
            f"Agenda Discovery ($99): {BOOK_URL}\n"
            f"Calendly: {CALENDLY_URL}\n\n"
        )
    elif lang == "en":
        body = (
            f"{first},\n\n"
            "Thanks for reaching out. I see strong potential to move forward together.\n\n"
            f"AI & automation services: {SITE_URL}\n"
            f"Book Discovery ($99): {BOOK_URL}\n"
            f"Calendly: {CALENDLY_URL}\n\n"
        )
    else:
        body = (
            f"{first},\n\n"
            "Obrigado pelo contato. Vejo potencial para avançarmos juntos.\n\n"
            f"Serviços de IA e automação: {SITE_URL}\n"
            f"Agende o Discovery (US$99): {BOOK_URL}\n"
            f"Calendly: {CALENDLY_URL}\n\n"
        )
    return body + _opt_out(lang) + "\n\n" + _signoff(lang)


def _is_github(contact: str, subject: str, blob: str) -> bool:
    if domain_matches(contact, frozenset({"github.com", "notifications.github.com"})):
        return True
    subj = fold(subject)
    return subj.startswith("[zion-support") or "left a comment" in blob or "workflow run" in blob


def _is_otp(subj: str, blob: str) -> bool:
    needles = (
        "verification code", "codigo de verificacao",
        "one-time password", "one-time code", "otp", "2fa", "2-factor",
        "enter this code", "verification codes expire",
        "partner center verification",
    )
    if _hit(blob, needles) or _hit(subj, (
        "verification code", "codigo de verificacao", "codigo de verificacao",
        "verification code",
    )):
        return True
    if "verification" in blob and "code" in blob and "do not forward" in blob:
        return True
    return False


def _hard_intent(contact: str, sender: str, subject: str, body: str) -> tuple[str, list[str], float] | None:
    blob = fold(f"{subject}\n{body}\n{sender}\n{contact}")
    subj = fold(subject)
    host = sender_domain(contact)
    local = contact.split("@")[0] if "@" in contact else ""

    if _hit(blob, ("unsubscribe", "remove me", "do not contact", "please stop",
                   "parar de receber", "sair da lista", "stop contacting")):
        if "unsubscribe" in blob and any(n in blob for n in ("newsletter", "promo", "view in browser", "visualizar este")):
            pass  # footer unsubscribe on a promo — not an inbound suppress request
        elif _hit(fold(body), ("unsubscribe me", "remove me", "do not contact", "please stop",
                               "parar de receber", "sair da lista")) or subj in {"please stop", "unsubscribe", "stop"}:
            return "unsubscribe_suppress", ["explicit opt-out"], 0.99

    if _is_otp(subj, blob):
        return "otp_verification", ["otp/verification code"], 0.99

    if contact in SECURITY_SENDERS or _hit(subj, (
        "alerta de seguranca", "security alert", "unrecognized device",
        "new sign-in", "dispositivo nao reconhecido", "verificar um novo ip",
        "google workspace status alert",
    )):
        return "security_alert", ["security sender or subject"], 0.97

    if "mailer-daemon" in contact or "undeliverable" in subj or "delivery status notification" in subj:
        if "delay" in subj or "delivery incomplete" in blob:
            return "delivery_delay", ["delivery delay"], 0.95
        return "bounce", ["bounce/undeliverable"], 0.99

    if domain_matches(contact, VOICEMAIL_DOMAINS) or "correio de voz" in subj or "voicemail" in subj:
        return "voicemail", ["voicemail"], 0.98

    if domain_matches(contact, OWN_DOMAINS) and local in {"kleber", "ceo"}:
        return "own_outbound", ["sent by kleber"], 0.99
    if domain_matches(contact, OWN_DOMAINS):
        return "internal", ["internal zion sender"], 0.95

    if _is_github(contact, subject, blob):
        return "github_noise", ["github/ci notification"], 0.99

    if domain_matches(contact, frozenset({"x.ai", "grok.com"})):
        quiet = any(m in blob for m in (
            "quiet inbox", "quiet day", "no replies", "no new client",
            "no new emails", "no new replies", "sent: none", "nothing to send",
        ))
        if quiet:
            return "automation_quiet", ["grok quiet report"], 0.96
        if re.search(r"sent\s*\(\s*[1-9]", blob) or "needs kleber" in blob:
            return "automation_action", ["grok sent or needs kleber"], 0.9
        return "automation_status", ["grok status"], 0.85

    if domain_matches(contact, ACCOUNTING_DOMAINS) or "novos documentos" in subj:
        return "accounting", ["accounting/fiscal docs"], 0.95

    if _hit(blob, ("due diligence", "dd questionnaire", "security questionnaire",
                   "iso 27001", "soc 2", "lgpd questionnaire")):
        return "legal_compliance", ["legal/compliance questionnaire"], 0.93
    if re.search(r"\b(nda|dpa)\b", blob):
        return "legal_compliance", ["nda/dpa"], 0.9

    if local in TICKET_LOCAL_PARTS and _hit(blob, (
        "solicitacao recebida", "sua solicitacao", "ticket", "we've received your",
        "we have received your request", "ja esta analisando",
    )):
        return "ticket_auto_ack", ["vendor ticket auto-ack"], 0.92
    if "solicitacao recebida" in subj or subj.startswith("solicitacao recebida"):
        return "ticket_auto_ack", ["ticket received subject"], 0.9

    if subj.startswith("wts:") or "we have the following laptops" in blob or "used hardware" in blob \
            or "line of credit" in blob or "submit your application" in blob:
        return "vendor_offer", ["hardware/financing vendor offer"], 0.94

    if _hit(subj, ("alerta de licitacoes", "portal de compras publicas", "pregao")) or \
            domain_matches(contact, frozenset({"portaldecompraspublicas.com.br"})):
        return "gov_tender", ["public procurement alert"], 0.92

    if "seguro de vida" in blob or domain_matches(contact, frozenset({"prudentialonline.com.br"})):
        return "noreply_noise", ["personal insurance notice"], 0.88

    blob_sender = f"{contact} {sender}".lower()
    if any(s in blob_sender for s in SKIP_SENDERS_SUBSTR) and contact not in SECURITY_SENDERS:
        if not domain_matches(contact, VOICEMAIL_DOMAINS):
            return "noreply_noise", ["noreply/marketing local-part"], 0.9
    if domain_matches(contact, SKIP_DOMAINS):
        return "newsletter", [f"skip-domain:{host}"], 0.9
    if _hit(blob, ("visualizar este e-mail como pagina web", "view this email in your browser",
                   "tech week", "% off", "voce tem mais")) and local in {"hi", "news", "info", "ajuda", "comunica", "contato"}:
        return "newsletter", ["promo/newsletter markers"], 0.8

    return None


def _score_commercial(blob: str, subj: str, is_reply: bool) -> dict[str, float]:
    scores: dict[str, float] = {}

    def add(intent: str, weight: float, needles: tuple[str, ...]) -> None:
        hits = _hit(blob, needles)
        if hits:
            scores[intent] = scores.get(intent, 0.0) + weight * min(len(hits), 4)

    add("pricing_rfq", 3.2, (
        "orcamento", "orçamento", "rfq", "solicitacao de proposta",
        "request for quote", "request for proposal", "pedido de orcamento",
        "workstation", "cotacao", "quote request",
    ))
    add("hot_lead", 3.0, (
        "vamos fechar", "purchase order", "ordem de compra", "contratar agora",
        "can start immediately", "pronto para contratar", "enviar contrato",
    ))
    add("meeting_request", 2.4, (
        "agendar", "reuniao", "calendly", "zoom", "teams", "disponivel",
        "can we talk", "vamos marcar", "horario", "thursday", "terca", "quarta",
        "call this week", "book a call",
    ))
    add("partnership", 2.0, (
        "parceria", "partnership", "collaboration", "colaboracao",
        "white label", "channel partner",
    ))
    add("inbound_reply_objection", 2.6, (
        "nao tenho interesse", "not interested", "too expensive", "muito caro",
        "not now", "agora nao", "already have a vendor", "ja temos fornecedor",
    ))
    add("inbound_reply_question", 1.8, (
        "como funciona", "how does", "how much", "quanto custa",
        "voces fazem", "do you also", "pode explicar",
    ))
    add("information_request", 1.6, (
        "send more info", "envie mais", "material", "one pager", "case study",
        "portfolio", "tell me more",
    ))
    add("support_incident", 2.2, (
        "abrir ticket", "support ticket", "chamado de suporte", "incidente",
        "outage", "downtime", "sistema fora", "producao caiu",
    ))
    add("follow_up_nudge", 1.5, (
        "seguindo o contato", "just checking in", "circling back",
        "ainda aguardo", "qualquer atualizacao",
    ))
    if is_reply:
        scores["inbound_reply_positive"] = scores.get("inbound_reply_positive", 0.0) + 1.2
        if _hit(blob, ("thanks", "obrigado", "obrigada", "interested", "faz sentido", "vamos sim")):
            scores["inbound_reply_positive"] = scores.get("inbound_reply_positive", 0.0) + 1.5
    return scores


def analyze_email(
    subject: str = "",
    sender: str = "",
    body: str = "",
    message_id: str = "",
    to: str = "",
    snippet: str = "",
) -> CaseDecision:
    """Analyze one email and return the single best action plan."""
    del message_id, to  # reserved for future thread-aware scoring
    contact = extract_email(sender)
    name = extract_name(sender)
    text = body or snippet or ""
    blob = fold(f"{subject}\n{text}")
    subj = fold(subject)
    lang = detect_lang(f"{subject}\n{text}")
    is_reply = subj.startswith("re:") or subj.startswith("res:") or subj.startswith("enc:") or subj.startswith("fwd:")

    hard = _hard_intent(contact, sender, subject, text)
    scores: dict[str, float] = {}
    if hard:
        intent, signals, confidence = hard
    else:
        scores = _score_commercial(blob, subj, is_reply)
        if scores:
            intent = max(scores, key=scores.get)
            top = scores[intent]
            second = sorted(scores.values(), reverse=True)[1] if len(scores) > 1 else 0.0
            confidence = min(0.97, 0.45 + top / 8.0 + (0.08 if top - second >= 1.5 else 0.0))
            if confidence < 0.52:
                intent, confidence, signals = "other", 0.4, ["low-confidence commercial scores"]
            else:
                signals = [f"score:{intent}={top:.1f}"]
        elif is_reply:
            intent, confidence, signals = "inbound_reply_positive", 0.62, ["subject is a reply"]
        else:
            intent, confidence, signals = "other", 0.35, ["no commercial signals"]

    # Reply threads about quotes should stay RFQ even if "parceria" appears.
    if not hard and scores.get("pricing_rfq", 0) >= 3.0:
        intent = "pricing_rfq"
        confidence = max(confidence, 0.8)
        signals = ["rfq keywords dominate"]

    label = INTENT_TO_LABEL.get(intent, "other")
    primary, extra, auto_ok, priority, sla = POLICY.get(
        intent, ("human_review", ["needs_human"], False, "low", None),
    )
    # Never auto-send below high confidence.
    if confidence < 0.8:
        auto_ok = False
    should_reply = "draft_reply" in extra
    human = "needs_human" in extra or intent == "other"
    urgency = {"critical": 10, "high": 7, "medium": 4, "low": 1}.get(priority, 1)
    reply = build_reply_for_intent(intent, name, lang, subject) if should_reply else None

    return CaseDecision(
        intent=intent,
        label=label,
        confidence=confidence,
        priority=priority,
        language=lang,
        primary_action=primary,
        actions=list(extra),
        should_reply=should_reply,
        auto_send_allowed=bool(auto_ok and should_reply and reply),
        human_review=human,
        reason=_reason(intent, signals),
        signals_hit=signals,
        gmail_labels=list(GMAIL_LABELS.get(intent, [])),
        reply_body=reply,
        urgency_score=urgency,
        sla_minutes=sla,
        scores=scores,
        sender_email=contact,
        sender_name=name,
    )


def _reason(intent: str, signals: list[str]) -> str:
    reasons = {
        "unsubscribe_suppress": "explicit stop/unsubscribe request",
        "otp_verification": "verification / OTP — never reply or forward",
        "security_alert": "security / login / verification",
        "bounce": "bounce / delivery failure",
        "delivery_delay": "temporary delivery delay",
        "voicemail": "inbound voicemail",
        "own_outbound": "our own sent mail",
        "internal": "internal Zion sender",
        "github_noise": "GitHub/CI notification",
        "automation_quiet": "Grok/x.ai quiet-status report",
        "automation_action": "Grok agent sent mail or flagged CEO action",
        "automation_status": "Grok/x.ai status mail",
        "accounting": "accounting / Nibo documents",
        "legal_compliance": "legal / partner questionnaire — human only",
        "ticket_auto_ack": "their ticket system acked our outreach — do not re-pitch",
        "vendor_offer": "hardware vendor offer",
        "gov_tender": "public procurement / licitação alert",
        "newsletter": "newsletter/promo noise",
        "noreply_noise": "noreply/marketing local-part",
        "pricing_rfq": "budget/quote request",
        "hot_lead": "ready-to-buy signal",
        "meeting_request": "wants to schedule a conversation",
        "partnership": "partnership/collaboration signal",
        "inbound_reply_positive": "existing conversation reply",
        "inbound_reply_objection": "objection / not now",
        "inbound_reply_question": "inbound question to answer",
        "information_request": "asked for more information",
        "support_incident": "support/systems signal",
        "follow_up_nudge": "they nudged for a follow-up",
        "other": "default catch-all",
    }
    base = reasons.get(intent, intent)
    if signals:
        return f"{base} ({', '.join(signals[:3])})"
    return base


def classify_message(message_id: str, subject: str, sender: str, body: str) -> dict:
    """Backward-compatible classifier used by email_autopilot tests."""
    decision = analyze_email(subject=subject, sender=sender, body=body, message_id=message_id)
    out = decision.to_legacy_dict()
    out["message_id"] = message_id
    return out


def analyze_batch(messages: list[dict]) -> list[CaseDecision]:
    out = []
    for msg in messages:
        out.append(analyze_email(
            subject=msg.get("subject", ""),
            sender=msg.get("sender") or msg.get("from", ""),
            body=msg.get("body") or msg.get("snippet", ""),
            message_id=str(msg.get("id") or msg.get("message_id") or ""),
            to=msg.get("to", ""),
            snippet=msg.get("snippet", ""),
        ))
    return out


# Representative cases from the live Kleber inbox + commercial threads (2026-09).
DEMO_CASES: list[dict] = [
    {
        "id": "github-ci",
        "subject": "[Zion-support/zion-support.github.io] Run failed: Catalog health watchdog - main",
        "sender": "notifications@github.com",
        "body": "Catalog health watchdog: All jobs have failed. kilo-code-bot left a comment on this pull request ticket.",
        "expect": "github_noise",
    },
    {
        "id": "otp-tiktok",
        "subject": "TikTok Shop Partner Center verification code",
        "sender": "partner@email.tiktok.com",
        "body": "To verify your account, enter this code in TikTok Shop Partner Center : YBSM62 Verification codes expire after 2 hours. Do not forward or give this code to anyone.",
        "expect": "otp_verification",
    },
    {
        "id": "stripe-security",
        "subject": "Um dispositivo não reconhecido entrou na sua conta Stripe",
        "sender": "notifications@stripe.com",
        "body": "Se você fez isso, não é preciso fazer nada.",
        "expect": "security_alert",
    },
    {
        "id": "brevo-ip",
        "subject": "Alerta de segurança: Verificar um novo IP",
        "sender": "account-alerts@t.brevo.com",
        "body": "Verificar um novo IP",
        "expect": "security_alert",
    },
    {
        "id": "nibo",
        "subject": "Novos documentos para Kleber (Protocolo 070501-1/26)",
        "sender": "obrigacoes@nibo.com.br",
        "body": "Existem novos documentos da empresa ZION COMERCIO E SERVICOS DE INFORMATICA LTDA",
        "expect": "accounting",
    },
    {
        "id": "bounce",
        "subject": "Delivery Status Notification (Failure)",
        "sender": "mailer-daemon@googlemail.com",
        "body": "Address not found. Your message wasn't delivered to saude@incuca.com.br",
        "expect": "bounce",
    },
    {
        "id": "delay",
        "subject": "Delivery Status Notification (Delay)",
        "sender": "mailer-daemon@googlemail.com",
        "body": "Delivery incomplete There was a temporary problem delivering your message.",
        "expect": "delivery_delay",
    },
    {
        "id": "clara-ticket",
        "subject": "Solicitação Recebida! Parceria Zion Tech Group — crescimento para Clara",
        "sender": "meajuda@clara.com.br",
        "body": "Sua solicitação (1039168) foi recebida, e nosso time já está analisando.",
        "expect": "ticket_auto_ack",
    },
    {
        "id": "elastic-dd",
        "subject": "Re: Elastic Partner DD Questionnaire — refreshed link request (Zion Tech Group)",
        "sender": "melissa.garre@elastic.co",
        "body": "We are resending Elastic's Due Diligence Questionnaire for your review and completion.",
        "expect": "legal_compliance",
    },
    {
        "id": "rfq-funcate",
        "subject": "ENC: Solicitação de proposta - Workstations de alto desempenho",
        "sender": "Paulo Sergio Blotto <pauloblotto@somaticabrasil.com>",
        "body": "Boa tarde Kleber, Segue em anexo outra demanda da FUNCATE para sua avaliação, solicitação de proposta de workstations.",
        "expect": "pricing_rfq",
    },
    {
        "id": "internal-carlos",
        "subject": "Fwd: Solicitação de proposta - Workstations de alto desempenho",
        "sender": "Carlos <carlos@ziontechgroup.com>",
        "body": "Oi Kleber, segue a proposta pronta já com 35% de margem para a Zion.",
        "expect": "internal",
    },
    {
        "id": "meeting-thursday",
        "subject": "Re: Discovery next step",
        "sender": "Carla <carla@kenlo.com.br>",
        "body": "Thanks, can we talk Thursday?",
        "expect": "meeting_request",
    },
    {
        "id": "voicemail",
        "subject": "Correio de voz de (13) 98137-0461 em 11/09/2026",
        "sender": "noreply@voicemail.goto.com",
        "body": "Você recebeu uma nova mensagem do correio de voz",
        "expect": "voicemail",
    },
    {
        "id": "gov-tender",
        "subject": "Alerta de Licitações - ZION COMERCIO E SERVICOS DE INFORMATICA LTDA",
        "sender": "falecom@portaldecompraspublicas.com.br",
        "body": "hoje temos 43 oportunidades para você no Portal de Compras Públicas.",
        "expect": "gov_tender",
    },
    {
        "id": "linkedin-promo",
        "subject": "Don’t miss conversations in Search Engine Land",
        "sender": "groups-noreply@linkedin.com",
        "body": "View recommended posts from Search Engine Land",
        "expect": "noreply_noise",
    },
    {
        "id": "vendor-hascon",
        "subject": "Hascon buys complete datacenters",
        "sender": "sales@hascon.de",
        "body": "We have for sale this used hardware ex stock / Lager Deutschland: 54 x Intel switches",
        "expect": "vendor_offer",
    },
    {
        "id": "partnership",
        "subject": "Parceria comercial",
        "sender": "João <joao@msp.com.br>",
        "body": "Gostaríamos de discutir uma parceria em automação.",
        "expect": "partnership",
    },
    {
        "id": "rfq-pt",
        "subject": "Pedido de orçamento",
        "sender": "Ana Costa <ana@industria.com.br>",
        "body": "Podem enviar um orçamento de automação para a planta?",
        "expect": "pricing_rfq",
    },
    {
        "id": "suppress",
        "subject": "Please stop",
        "sender": "Ada <ada@acme.com>",
        "body": "unsubscribe me from your list",
        "expect": "unsubscribe_suppress",
    },
    {
        "id": "quiet-grok",
        "subject": "Quiet day — no client replies",
        "sender": "noreply@x.ai",
        "body": "Zion Client Email Agent is ready\n(a) SENT: none (0/5)",
        "expect": "automation_quiet",
    },
]


def replay_demo_cases() -> dict:
    results = []
    misses = []
    for case in DEMO_CASES:
        decision = analyze_email(
            subject=case["subject"],
            sender=case["sender"],
            body=case["body"],
            message_id=case["id"],
        )
        ok = decision.intent == case["expect"]
        row = {
            "id": case["id"],
            "expect": case["expect"],
            "got_intent": decision.intent,
            "label": decision.label,
            "action": decision.primary_action,
            "should_reply": decision.should_reply,
            "auto_send": decision.auto_send_allowed,
            "confidence": round(decision.confidence, 3),
            "ok": ok,
        }
        results.append(row)
        if not ok:
            misses.append(row)
    return {
        "total": len(results),
        "passed": len(results) - len(misses),
        "failed": len(misses),
        "results": results,
        "misses": misses,
    }


def main(argv: list[str] | None = None) -> int:
    import argparse
    parser = argparse.ArgumentParser(description="Zion email case engine")
    parser.add_argument("--replay", action="store_true", help="Replay built-in inbox cases")
    parser.add_argument("--subject", default="")
    parser.add_argument("--from", dest="sender", default="")
    parser.add_argument("--body", default="")
    args = parser.parse_args(argv)
    if args.replay or not (args.subject or args.sender or args.body):
        report = replay_demo_cases()
        print(json.dumps(report, indent=2, ensure_ascii=False))
        return 0 if report["failed"] == 0 else 1
    decision = analyze_email(subject=args.subject, sender=args.sender, body=args.body)
    print(json.dumps(decision.to_legacy_dict(), indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

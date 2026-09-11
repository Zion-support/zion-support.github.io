#!/usr/bin/env python3
"""
Zion Email Autopilot — triage + reply/follow-up drafts + memory extraction.

Safe-by-default unless `ZION_EMAIL_SEND_ENABLED=1`:
- send off → Gmail drafts + memory only
- send on → live replies, max 5 per run, skip noise domains, 7-day cooldown
- Quiet Grok/x.ai status mail, GitHub bots, newsletters, vendor WTS, and
  accounting docs are skipped so the CEO inbox stays for humans.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
if str(REPO) not in sys.path:
    sys.path.insert(0, str(REPO))

SEND_ENABLED = os.environ.get("ZION_EMAIL_SEND_ENABLED", "0") == "1"
GMAIL_DRAFTS = os.environ.get("ZION_EMAIL_GMAIL_DRAFTS", "1") == "1"
try:
    MAX_SENDS = max(0, int(os.environ.get("ZION_EMAIL_MAX_SENDS", "5")))
except ValueError:
    MAX_SENDS = 5
ACCOUNT = os.environ.get("ZION_EMAIL_ACCOUNT", "kleber@ziontechgroup.com")
BOOK_URL = "https://ziontechgroup.com/book/"
DISCOVERY_URL = "https://ziontechgroup.com/discovery/"
SITE_URL = "https://ziontechgroup.com"
CALENDLY_URL = "https://calendly.com/kleber-ziontechgroup"
MEMORY_MD = REPO / "Zion-Tech-Group" / "MEMORY.md"
CEO_STATUS = REPO / "ceo-status.json"
CONTENT_DIR = REPO / "automation" / "content" / "generated"
EMAIL_MEMORY_DIR = REPO / "automation" / "email_memory"
KNOWN_DEALS = EMAIL_MEMORY_DIR / "known_deals.json"
AGENT_STATE = EMAIL_MEMORY_DIR / "agent_state.json"
MEMORY_BEGIN = "<!-- ZION-EMAIL-OPS:BEGIN -->"
MEMORY_END = "<!-- ZION-EMAIL-OPS:END -->"
KNOWN_DEAL_COOLDOWN_S = 7 * 24 * 3600

MEMORY_INBOX = EMAIL_MEMORY_DIR / "inbox_sightings.jsonl"
MEMORY_CLASSIFICATIONS = EMAIL_MEMORY_DIR / "classifications.jsonl"
MEMORY_HISTORY = EMAIL_MEMORY_DIR / "success_history.jsonl"
MEMORY_CONTENT_IDEAS = EMAIL_MEMORY_DIR / "content_ideas.jsonl"
MEMORY_LATEST = EMAIL_MEMORY_DIR / "latest_summary.json"
LEDGER_REPLY = REPO / "outreach_monitor" / "processed" / "reply_to_revenue_ledger.jsonl"
PENDING_QUEUE = REPO / "outreach_monitor" / "processed" / "pending_ceo_drafts.jsonl"
HOT_FOLLOWUP_LEDGER = REPO / "outreach_monitor" / "processed" / "hot_followup_reply_ledger.jsonl"
HOT_FOLLOWUP_SENT = REPO / "hot-followup-sent.json"

_DIRS_READY = False
_sends_this_run = 0

SKIP_DOMAINS = frozenset({
    "github.com", "notifications.github.com", "gitlab.com", "jira.atlassian.com",
    "trello.com", "linear.app", "figma.com", "netlify.com", "vercel.com",
    "docs.google.com", "calendar.google.com", "meet.google.com",
    "x.ai", "grok.com",
    "email.samsung.com", "br.email.samsung.com",
    "e.bluehost.com", "bluehost.com",
    "service.tiktok.com", "email.tiktok.com", "tiktok.com",
    "automailer.io",
    "linkedin.com", "facebookmail.com",
    "mkt.agilize.com.br", "agilize.com.br",
    "pncalifornia.com",
    "nvidia.com",
    "stackblitz.com",
    "cloudflare.com",
    "news.kilocode.ai", "kilocode.ai",
    "emkt.b3.com.br", "b3.com.br",
    "comunicacao.serasaexperian.com.br", "serasaexperian.com.br",
    "marketing.valr.com", "valr.com",
    "t.brevo.com",
})

SKIP_SENDERS_SUBSTR = (
    "noreply", "no-reply", "mailer-daemon", "notifications@", "bounce",
    "newsletter@", "marketing@", "promo@", "donotreply", "do-not-reply",
    "calendar-notification@",
)

ACCOUNTING_DOMAINS = frozenset({
    "nibo.com.br", "contabilvieira.com.br", "sieg.com.br",
})

SECURITY_SENDERS = frozenset({
    "notifications@stripe.com", "security@stripe.com",
    "no-reply@accounts.google.com", "no-reply@google.com",
})

VOICEMAIL_DOMAINS = frozenset({
    "voicemail.goto.com", "goto.com",
})

SERVICE_LINES = [
    "AI Automation & Integration",
    "Cloud Migration & FinOps",
    "Zero Trust Cybersecurity",
    "Computer Vision Inspection",
    "Platform Modernization",
    "Data Analytics & BI",
    "IoT & Edge Solutions",
    "Blockchain & Smart Contracts",
]


def ensure_dirs() -> None:
    global _DIRS_READY
    if _DIRS_READY:
        return
    EMAIL_MEMORY_DIR.mkdir(parents=True, exist_ok=True)
    for p in [
        MEMORY_INBOX, MEMORY_CLASSIFICATIONS, MEMORY_HISTORY, MEMORY_CONTENT_IDEAS,
        LEDGER_REPLY, PENDING_QUEUE, HOT_FOLLOWUP_LEDGER,
    ]:
        p.parent.mkdir(parents=True, exist_ok=True)
        if not p.exists():
            p.touch()
    _DIRS_READY = True


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


def is_noise_sender(contact: str, sender: str = "") -> tuple[bool, str]:
    blob = f"{contact} {sender}".lower()
    if any(s in blob for s in SKIP_SENDERS_SUBSTR):
        if contact.lower() not in SECURITY_SENDERS:
            return True, "noreply/marketing local-part"
    if domain_matches(contact, SKIP_DOMAINS):
        return True, f"skip-domain:{sender_domain(contact)}"
    return False, ""


def is_quiet_automation_report(subject: str, body: str, contact: str) -> bool:
    if not domain_matches(contact, frozenset({"x.ai", "grok.com"})):
        return False
    text = f"{subject}\n{body}".lower()
    quiet_markers = (
        "quiet inbox", "quiet day", "no replies", "no new client",
        "no new emails", "no new replies", "sent: none", "sent:* none",
        "(a) sent: none", "nothing to send",
    )
    return any(m in text for m in quiet_markers)


def classify_message(message_id: str, subject: str, sender: str, body: str) -> dict:
    contact = extract_email(sender)
    text = f"{subject}\n{body}".lower()
    subj = (subject or "").lower()

    if any(k in text for k in ["unsubscribe", "remove me", "do not contact", "please stop", "parar de receber", "sair da lista"]):
        return {
            "label": "suppress",
            "priority": "high",
            "actions": ["suppress_thread"],
            "reason": "explicit stop/unsubscribe request",
        }

    if "mailer-daemon" in contact or "delivery status notification" in subj or "undeliverable" in subj:
        return {
            "label": "bounce",
            "priority": "low",
            "actions": ["archive"],
            "reason": "bounce / delivery failure",
        }

    if contact.lower() in SECURITY_SENDERS or any(
        k in subj for k in ["verification code", "unrecognized device", "new sign-in", "security alert"]
    ):
        return {
            "label": "security",
            "priority": "high",
            "actions": ["needs_human"],
            "reason": "security / login / verification",
        }

    if domain_matches(contact, VOICEMAIL_DOMAINS) or "correio de voz" in subj or "voicemail" in subj:
        return {
            "label": "voicemail",
            "priority": "high",
            "actions": ["needs_human"],
            "reason": "inbound voicemail",
        }

    if (
        "ai/it discovery" in text
        or "discovery $99" in text
        or "pago $99" in text
        or "paid $99" in text
    ) and (
        "calendly" in contact
        or "calendar-notification" in contact
        or "accepted" in subj
        or "new event" in subj
    ):
        return {
            "label": "success_win",
            "priority": "high",
            "actions": ["store_history"],
            "reason": "Discovery booked / paid — store as successful case",
        }

    if "solicitação recebida" in subj or "solicitacao recebida" in subj:
        return {
            "label": "inbound_reply",
            "priority": "high",
            "actions": ["draft_reply", "store_history"],
            "reason": "vendor acknowledged our partnership outreach",
        }

    if (
        subj.startswith("accepted:")
        and "calendar-notification" not in contact
        and not domain_matches(contact, frozenset({"calendar.google.com"}))
    ):
        return {
            "label": "success_win",
            "priority": "high",
            "actions": ["draft_reply", "store_history"],
            "reason": "meeting accepted — follow up and store as a win",
        }

    if "portaldecompraspublicas" in contact or "alerta de licitações" in subj or "alerta de licitacoes" in subj:
        return {
            "label": "procurement_digest",
            "priority": "medium",
            "actions": ["needs_human", "store_history"],
            "reason": "public-procurement digest — pick real RFQs by hand",
        }

    if is_quiet_automation_report(subject, body, contact):
        return {
            "label": "automation_quiet",
            "priority": "low",
            "actions": ["archive"],
            "reason": "Grok/x.ai quiet-status report",
        }

    if domain_matches(contact, frozenset({"x.ai", "grok.com"})):
        sent_hit = bool(re.search(r"sent\s*\(\s*[1-9]", text)) or "needs kleber" in text
        if sent_hit:
            return {
                "label": "automation_action",
                "priority": "medium",
                "actions": ["store_history"],
                "reason": "Grok agent sent mail or flagged CEO action",
            }
        return {
            "label": "automation_status",
            "priority": "low",
            "actions": ["archive"],
            "reason": "Grok/x.ai status mail",
        }

    noise, noise_reason = is_noise_sender(contact, sender)
    if noise:
        return {
            "label": "noise",
            "priority": "low",
            "actions": ["archive"],
            "reason": noise_reason,
        }

    if domain_matches(contact, ACCOUNTING_DOMAINS) or "novos documentos" in subj:
        return {
            "label": "accounting",
            "priority": "medium",
            "actions": ["route_finance"],
            "reason": "accounting / Nibo documents",
        }

    if subj.startswith("wts:") or "we have the following laptops" in text:
        return {
            "label": "vendor_offer",
            "priority": "low",
            "actions": ["archive"],
            "reason": "hardware vendor offer",
        }

    if any(k in text for k in ["orçamento", "orcamento", "rfq", "solicitação de proposta", "solicitacao de proposta", "request for quote", "request for proposal"]):
        return {
            "label": "rfq",
            "priority": "high",
            "actions": ["draft_reply", "store_history"],
            "reason": "budget/quote request",
        }

    if re.search(r"\b(partnership|collaboration|parceria|proposta|projeto)\b", text):
        return {
            "label": "lead_opportunity",
            "priority": "high",
            "actions": ["draft_reply", "store_history"],
            "reason": "partnership/collaboration signal",
        }

    if subj.startswith("re:") or subj.startswith("res:"):
        return {
            "label": "inbound_reply",
            "priority": "high",
            "actions": ["draft_reply", "store_history"],
            "reason": "existing conversation reply",
        }

    if any(k in text for k in ["quote", "budget"]) and any(k in text for k in ["need", "preciso", "can you", "vocês", "voces"]):
        return {
            "label": "rfq",
            "priority": "high",
            "actions": ["draft_reply", "store_history"],
            "reason": "budget/quote request",
        }

    if any(k in text for k in ["abrir ticket", "support ticket", "chamado de suporte"]) or (
        any(k in text for k in ["incidente", "outage", "downtime"]) and "client" in text
    ):
        return {
            "label": "support",
            "priority": "medium",
            "actions": ["route_support"],
            "reason": "support/systems signal",
        }

    if any(k in text for k in ["unsubscribe", "newsletter", "promotions", "tech week", "% off", "você tem mais"]):
        return {
            "label": "noise",
            "priority": "low",
            "actions": ["archive"],
            "reason": "newsletter/promo noise",
        }

    return {
        "label": "other",
        "priority": "low",
        "actions": [],
        "reason": "default catch-all",
        "message_id": message_id,
    }


def detect_lang(text: str) -> str:
    t = (text or "").lower()
    if any(w in t for w in ["obrigado", "projeto", "serviços", "servicos", "abraço", "abraco", "olá", "ola ", "oi,", "vocês", "voces"]):
        return "pt"
    if any(w in t for w in ["gracias", "oportunidad", "proyecto", "servicios", "saludos"]):
        return "es"
    return "en"


def build_reply_draft(name: str, subject: str, lang: str = "pt") -> str:
    first = name or "there"
    if lang == "es":
        return (
            f"{first},\n\n"
            "Gracias por el contacto. Veo potencial para avanzar juntos.\n\n"
            f"Servicios de IA y automatización: {SITE_URL}\n"
            f"Agenda Discovery ($99): {BOOK_URL}\n"
            f"Calendly: {CALENDLY_URL}\n\n"
            "Saludos,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n"
            f"{SITE_URL}\nkleber@ziontechgroup.com"
        )
    if lang == "pt":
        return (
            f"{first},\n\n"
            "Obrigado pelo contato. Vejo potencial para avançarmos juntos.\n\n"
            f"Serviços de IA e automação: {SITE_URL}\n"
            f"Agende o Discovery (US$99): {BOOK_URL}\n"
            f"Calendly: {CALENDLY_URL}\n\n"
            "Para sair da lista, responda SAIR ou STOP.\n\n"
            "Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n"
            f"{SITE_URL}\nkleber@ziontechgroup.com"
        )
    return (
        f"{first},\n\n"
        "Thanks for reaching out. I see strong potential to move forward together.\n\n"
        f"AI & automation services: {SITE_URL}\n"
        f"Book Discovery ($99): {BOOK_URL}\n"
        f"Calendly: {CALENDLY_URL}\n\n"
        "Reply STOP to opt out.\n\n"
        "Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n"
        f"{SITE_URL}\nkleber@ziontechgroup.com"
    )


def build_deal_followup(deal: dict) -> str:
    name = deal.get("name") or "there"
    lang = deal.get("lang") or "pt"
    kind = deal.get("kind") or ""
    if kind == "partnership_ticket" and lang == "pt":
        return (
            f"{name},\n\n"
            "Obrigado pela confirmação. O ticket de parceria já está com o time de vocês.\n\n"
            "Enquanto a análise segue, o caminho mais rápido para um piloto conjunto é o Discovery (US$99):\n"
            f"{DISCOVERY_URL}\n"
            f"Agenda: {BOOK_URL}\n\n"
            "Zion cobre automação de IA, integrações, cloud/FinOps e operação de campo. "
            "Se quiserem um comentário extra no ticket (escopo, SLA, cobertura), respondam este fio.\n\n"
            "Para sair da lista, responda SAIR ou STOP.\n\n"
            "Um abraço,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n"
            f"{SITE_URL}\nkleber@ziontechgroup.com"
        )
    if kind == "discovery_booked":
        return (
            f"{name},\n\n"
            "Thank you for accepting the Zion AI/IT Discovery. I want to lock the next step while it is fresh.\n\n"
            "Typical follow-on after Discovery:\n"
            "- AI automation for ops (intake, triage, reporting)\n"
            "- Cloud / FinOps on the stack you already run\n"
            "- A scoped SOW only after we agree the process and ROI\n\n"
            f"Book the follow-up or send the workflow you want automated:\n{DISCOVERY_URL}\n{BOOK_URL}\n\n"
            "Reply STOP to opt out.\n\n"
            "Best,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group\n"
            f"{SITE_URL}\nkleber@ziontechgroup.com"
        )
    return build_reply_draft(name, deal.get("subject") or "", lang)


def gog(*args: str, timeout: int = 60) -> str:
    cmd = ["gog", *args]
    try:
        out = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout,
            cwd=str(REPO),
        )
        return out.stdout or ""
    except (subprocess.TimeoutExpired, FileNotFoundError, OSError):
        return ""


def gog_json(*args: str, timeout: int = 60):
    out = gog(*args, "--json", "--no-input", timeout=timeout)
    if not out.strip():
        return []
    try:
        return json.loads(out)
    except json.JSONDecodeError:
        return []


def bootstrap_gog_tokens() -> None:
    raw = (os.environ.get("GOG_TOKENS_JSON") or "").strip()
    if not raw:
        return
    dest = Path.home() / ".openclaw" / "workspace" / "gog_tokens.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(raw, encoding="utf-8")


def _gmail_api():
    bootstrap_gog_tokens()
    try:
        from commands.google_workspace import gog_headers, gmail_search, gmail_get, gmail_create_draft
        gog_headers()
        return gmail_search, gmail_get, gmail_create_draft
    except Exception:
        return None


def search_hits(query: str, limit: int) -> tuple[list, str]:
    api = _gmail_api()
    if api:
        gmail_search, _, _ = api
        try:
            return gmail_search(query, limit=limit, all_folders=True) or [], "gmail_api"
        except Exception as e:
            return [], f"gmail_api_error:{e}"
    hits = _normalize_hits(gog_json("gmail", "search", query, f"--max={limit}", "--account", ACCOUNT))
    return hits, "gog" if hits else "none"


def fetch_message(mid: str) -> dict:
    api = _gmail_api()
    if api:
        _, gmail_get, _ = api
        try:
            msg = gmail_get(mid)
            return msg if isinstance(msg, dict) else {}
        except Exception:
            return {}
    msg = gog_json("gmail", "get", str(mid), "--account", ACCOUNT)
    return msg if isinstance(msg, dict) else {}


def maybe_create_gmail_draft(tid: str, subject: str, body: str, to_addr: str) -> str | None:
    if not GMAIL_DRAFTS:
        return None
    api = _gmail_api()
    if not api:
        return None
    _, _, gmail_create_draft = api
    try:
        return gmail_create_draft(tid, subject, body, to_addr)
    except Exception:
        return None


def can_send_to(contact: str, sender: str = "") -> bool:
    addr = (contact or "").strip().lower()
    if not addr or "@" not in addr:
        return False
    if addr in SECURITY_SENDERS:
        return False
    if is_noise_sender(addr, sender or contact)[0]:
        return False
    if domain_matches(addr, SKIP_DOMAINS):
        return False
    return True


def record_sent(contact: str, thread_id: str, message_id: str, subject: str) -> None:
    append_jsonl(LEDGER_REPLY, {
        "ts": int(time.time()),
        "to": contact,
        "thread_id": thread_id,
        "message_id": message_id,
        "subject": subject,
        "mode": "live_send",
    })


def maybe_send_reply(tid: str, subject: str, body: str, to_addr: str) -> str | None:
    global _sends_this_run
    if not SEND_ENABLED or _sends_this_run >= MAX_SENDS or not can_send_to(to_addr):
        return None
    bootstrap_gog_tokens()
    try:
        from commands.google_workspace import gmail_send_reply_fixed
        result = gmail_send_reply_fixed(tid, subject, body, to_addr)
    except Exception:
        return None
    if not isinstance(result, dict) or not result.get("success"):
        return None
    mid = str(result.get("message_id") or "")
    _sends_this_run += 1
    record_sent(to_addr, tid, mid, subject)
    return mid or "sent"


def deliver_reply(tid: str, subject: str, body: str, to_addr: str) -> tuple[str, str | None]:
    sent_id = maybe_send_reply(tid, subject, body, to_addr)
    if sent_id:
        return "sent", sent_id
    draft_id = maybe_create_gmail_draft(tid, subject, body, to_addr)
    if draft_id:
        return "draft", draft_id
    return "queued", None


def load_jsonl(path: Path):
    if not path.exists():
        return []
    out = []
    for line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = line.strip()
        if line:
            try:
                out.append(json.loads(line))
            except json.JSONDecodeError:
                pass
    return out


def append_jsonl(path: Path, entry: dict):
    ensure_dirs()
    with path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")


def already_sent_to(contact: str, within_seconds: int = 48 * 3600) -> bool:
    now = int(time.time())
    ledger = load_jsonl(LEDGER_REPLY)[-200:]
    return any(
        (now - int(r.get("ts", 0) or 0)) < within_seconds
        and (r.get("to") or "").lower() == contact.lower()
        for r in ledger
    )


def pending_thread_ids() -> set[str]:
    ids: set[str] = set()
    for row in load_jsonl(PENDING_QUEUE)[-500:]:
        tid = str(row.get("thread_id") or "")
        if tid:
            ids.add(tid)
    return ids


def store_classification(message_id: str, classification: dict):
    append_jsonl(MEMORY_CLASSIFICATIONS, {
        "ts": int(time.time()),
        "message_id": message_id,
        "classification": classification,
    })


def store_history(contact: str, subject: str, classification: dict, body_snippet: str = ""):
    append_jsonl(MEMORY_HISTORY, {
        "ts": int(time.time()),
        "contact": contact,
        "subject": subject,
        "label": classification.get("label"),
        "snippet": body_snippet[:500],
    })


def store_content_idea(source_thread_id: str, title_hint: str, body_hint: str):
    append_jsonl(MEMORY_CONTENT_IDEAS, {
        "ts": int(time.time()),
        "source_thread_id": source_thread_id,
        "title_hint": title_hint,
        "body_hint": body_hint[:800],
    })


def write_latest_summary(summary: dict):
    ensure_dirs()
    summary["updatedAt"] = datetime.now(timezone.utc).isoformat()
    MEMORY_LATEST.write_text(json.dumps(summary, indent=2, ensure_ascii=False))


def load_agent_state() -> dict:
    try:
        data = json.loads(AGENT_STATE.read_text(encoding="utf-8") or "{}")
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}


def save_agent_state(state: dict) -> None:
    ensure_dirs()
    AGENT_STATE.write_text(json.dumps(state, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def recently_drafted(thread_id: str, within_seconds: int = KNOWN_DEAL_COOLDOWN_S) -> bool:
    if not thread_id:
        return False
    drafted = load_agent_state().get("drafted_threads") or {}
    row = drafted.get(thread_id) if isinstance(drafted, dict) else None
    if not isinstance(row, dict):
        return False
    try:
        ts = int(row.get("ts") or 0)
    except (TypeError, ValueError):
        return False
    return (int(time.time()) - ts) < within_seconds


def recently_sent(thread_id: str, within_seconds: int = KNOWN_DEAL_COOLDOWN_S) -> bool:
    if not thread_id:
        return False
    drafted = load_agent_state().get("drafted_threads") or {}
    row = drafted.get(thread_id) if isinstance(drafted, dict) else None
    if not isinstance(row, dict) or not row.get("sent"):
        return False
    try:
        ts = int(row.get("ts") or 0)
    except (TypeError, ValueError):
        return False
    return (int(time.time()) - ts) < within_seconds


def mark_thread_drafted(
    thread_id: str,
    contact: str,
    kind: str,
    gmail_draft_id: str | None = None,
    sent: bool = False,
    gmail_message_id: str | None = None,
) -> None:
    if not thread_id:
        return
    state = load_agent_state()
    drafted = state.get("drafted_threads") if isinstance(state.get("drafted_threads"), dict) else {}
    prev = drafted.get(thread_id) if isinstance(drafted.get(thread_id), dict) else {}
    drafted[thread_id] = {
        **prev,
        "ts": int(time.time()),
        "contact": contact,
        "kind": kind,
        "gmail_draft_id": gmail_draft_id or prev.get("gmail_draft_id"),
        "gmail_message_id": gmail_message_id or prev.get("gmail_message_id"),
        "sent": bool(sent or prev.get("sent")),
        "iso": datetime.now(timezone.utc).isoformat(),
    }
    state["drafted_threads"] = drafted
    save_agent_state(state)


def load_hot_sent() -> dict:
    try:
        data = json.loads(HOT_FOLLOWUP_SENT.read_text(encoding="utf-8") or "{}")
        if isinstance(data, list):
            return {str(item.get("thread_id")): item for item in data if isinstance(item, dict)}
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}


def save_hot_sent(state: dict):
    HOT_FOLLOWUP_SENT.write_text(json.dumps(state, ensure_ascii=False, indent=2))


def record_hot_sent(thread_id: str, message_id: str, contact: str, subject: str, mode: str):
    state = load_hot_sent()
    state[thread_id] = {
        "thread_id": thread_id,
        "message_id": message_id,
        "contact": contact,
        "subject": subject,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "mode": mode,
    }
    save_hot_sent(state)


def generate_service_content(classification: dict, body_hint: str) -> dict:
    title = "How AI Automation Drives Real Efficiency — Zion Tech Group"
    body = (
        "At Zion Tech Group, we help companies turn AI into measurable operational results. "
        "Our teams work across AI automation, cloud, cybersecurity, data analytics, IoT, and blockchain. "
        f"This note was inspired by recent client conversations about {classification.get('reason', 'practical AI delivery')}. "
        f"If this matches your current priorities, book Discovery: {BOOK_URL}"
    )
    return {
        "title": title,
        "body": body,
        "services_mentioned": SERVICE_LINES[:4],
        "cta": BOOK_URL,
        "source": "email_autopilot",
    }


def _extract_body(msg: dict) -> str:
    import base64
    if isinstance(msg.get("body"), str) and msg.get("body"):
        return msg["body"]
    pl = msg.get("payload", {}) or {}
    if pl.get("body", {}).get("data"):
        return base64.urlsafe_b64decode(pl["body"]["data"]).decode("utf-8", errors="ignore")
    for part in pl.get("parts", []) or []:
        if part.get("mimeType") == "text/plain" and part.get("body", {}).get("data"):
            return base64.urlsafe_b64decode(part["body"]["data"]).decode("utf-8", errors="ignore")
        if "parts" in part:
            nested = _extract_body({"payload": part})
            if nested:
                return nested
    return msg.get("snippet") or ""


def _normalize_hits(hits) -> list:
    if isinstance(hits, list):
        return hits
    if isinstance(hits, dict):
        return hits.get("threads") or hits.get("messages") or []
    return []


def _headers_from_msg(msg: dict) -> tuple[str, str]:
    headers = msg.get("headers") or {}
    if isinstance(headers, dict) and (headers.get("Subject") or headers.get("From")):
        return headers.get("Subject", "") or "", headers.get("From", "") or ""
    raw = msg.get("payload", {}).get("headers", []) or []
    parsed = {h.get("name", ""): h.get("value", "") for h in raw if isinstance(h, dict)}
    return parsed.get("Subject", "") or "", parsed.get("From", "") or ""


def queue_draft(mid: str, tid: str, contact: str, name: str, subject: str, lang: str, draft_body: str, extra: dict | None = None):
    row = {
        "lead_id": mid,
        "thread_id": tid,
        "message_id": mid,
        "from": contact,
        "name": name,
        "subject": f"Re: {subject}" if subject and not subject.lower().startswith("re:") else subject,
        "lang": lang,
        "draft": draft_body,
        "status": "ready_to_send" if SEND_ENABLED else "draft_only",
        "dedup_key": re.sub(r"[^a-z0-9]", "", contact),
        "created_at": datetime.now(timezone.utc).isoformat(),
        "mode": "live_send" if SEND_ENABLED else "dry_run",
        "cta": BOOK_URL,
    }
    if extra:
        row.update(extra)
    append_jsonl(PENDING_QUEUE, row)


def run_inbox_scan(max_results: int = 25) -> dict:
    ensure_dirs()
    summary = {
        "scanned": 0,
        "skipped_noise": 0,
        "skipped_sent": 0,
        "skipped_dup": 0,
        "classified": {},
        "drafts_created": 0,
        "needs_human": 0,
        "memory_written": 0,
        "content_ideas": 0,
        "sent": 0,
        "errors": [],
    }

    try:
        hits, backend = search_hits("in:inbox newer_than:2d", max_results)
        summary["backend"] = backend
    except Exception as e:
        summary["errors"].append({"search": str(e)})
        write_latest_summary(summary)
        return summary

    hits = _normalize_hits(hits)
    seen_ids: set[str] = set()
    seen_threads: set[str] = set()
    queued = pending_thread_ids()
    summary["scanned"] = len(hits)

    for hit in hits:
        if not isinstance(hit, dict):
            continue
        mid = str(hit.get("id") or hit.get("messageId") or "")
        tid = str(hit.get("threadId") or mid)
        if not mid or mid in seen_ids:
            continue
        seen_ids.add(mid)
        if tid in seen_threads:
            continue
        seen_threads.add(tid)

        try:
            msg = fetch_message(str(mid))
        except Exception as e:
            summary["errors"].append({"gmail_get": str(e)})
            continue
        if not isinstance(msg, dict) or not msg:
            continue

        subject, sender = _headers_from_msg(msg)
        contact = extract_email(sender)
        body = _extract_body(msg)

        append_jsonl(MEMORY_INBOX, {
            "ts": int(time.time()),
            "message_id": mid,
            "thread_id": tid,
            "from": contact,
            "subject": subject,
            "snippet": body[:300],
        })

        classification = classify_message(mid, subject, sender, body)
        store_classification(mid, classification)
        label = classification.get("label", "other")
        summary["classified"][label] = summary["classified"].get(label, 0) + 1
        actions = classification.get("actions", [])

        if "archive" in actions:
            summary["skipped_noise"] += 1
            continue

        if "suppress_thread" in actions:
            append_jsonl(PENDING_QUEUE, {
                "lead_id": mid,
                "thread_id": tid,
                "message_id": mid,
                "from": contact,
                "subject": subject,
                "status": "suppress_request",
                "mode": "manual_review",
                "created_at": datetime.now(timezone.utc).isoformat(),
            })
            store_history(contact, subject, classification, body)
            summary["memory_written"] += 1
            continue

        if "needs_human" in actions or "route_finance" in actions or "route_support" in actions:
            append_jsonl(PENDING_QUEUE, {
                "lead_id": mid,
                "thread_id": tid,
                "message_id": mid,
                "from": contact,
                "subject": subject,
                "status": classification.get("label"),
                "mode": "manual_review",
                "reason": classification.get("reason"),
                "created_at": datetime.now(timezone.utc).isoformat(),
            })
            summary["needs_human"] += 1
            summary["memory_written"] += 1
            continue

        if already_sent_to(contact) or recently_sent(tid):
            summary["skipped_sent"] += 1
            continue

        if "store_history" in actions:
            store_history(contact, subject, classification, body)
            summary["memory_written"] += 1

        if classification.get("label") in {"lead_opportunity", "rfq", "inbound_reply", "success_win"}:
            content = generate_service_content(classification, body)
            store_content_idea(tid, content["title"], content["body"])
            summary["content_ideas"] += 1

        if tid in queued or (not SEND_ENABLED and recently_drafted(tid)):
            summary["skipped_dup"] += 1
            continue

        if "draft_reply" in actions:
            name = extract_name(sender)
            lang = detect_lang(f"{subject}\n{body}")
            draft_body = build_reply_draft(name, subject, lang)
            queue_draft(mid, tid, contact, name, subject, lang, draft_body)
            mode, delivered_id = deliver_reply(tid, subject, draft_body, contact)
            mark_thread_drafted(
                tid,
                contact,
                label,
                gmail_draft_id=delivered_id if mode == "draft" else None,
                sent=mode == "sent",
                gmail_message_id=delivered_id if mode == "sent" else None,
            )
            queued.add(tid)
            if mode == "sent":
                summary["sent"] += 1
            else:
                summary["drafts_created"] += 1

    write_latest_summary(summary)
    return summary


def run_hot_followup_scan(max_results: int = 8) -> dict:
    ensure_dirs()
    summary = {
        "hot_threads_found": 0,
        "drafts_created": 0,
        "sent": 0,
        "skipped_sent": 0,
        "skipped_noise": 0,
        "errors": [],
    }

    try:
        hits, backend = search_hits('label:"!!!!HOT FOLLOW-UP" newer_than:14d -from:me', max_results)
        if not hits:
            alt, backend2 = search_hits("label:!!!hot-follow-up newer_than:14d -from:me", max_results)
            if alt:
                hits, backend = alt, backend2
        summary["backend"] = backend
    except Exception as e:
        summary["errors"].append({"hot_search": str(e)})
        return summary

    hits = _normalize_hits(hits)
    hot_sent = load_hot_sent()
    queued = pending_thread_ids()

    for hit in hits:
        if not isinstance(hit, dict):
            continue
        tid = str(hit.get("threadId") or hit.get("id") or "")
        mid = str(hit.get("id") or "")
        if not mid or not tid:
            continue
        summary["hot_threads_found"] += 1

        if tid in hot_sent or tid in queued or recently_sent(tid) or (not SEND_ENABLED and recently_drafted(tid)):
            summary["skipped_sent"] += 1
            continue

        try:
            msg = fetch_message(str(mid))
        except Exception:
            continue
        if not isinstance(msg, dict) or not msg:
            continue

        subject, sender = _headers_from_msg(msg)
        contact = extract_email(sender)
        body = _extract_body(msg)
        if is_noise_sender(contact, sender)[0] or domain_matches(contact, SKIP_DOMAINS):
            summary["skipped_noise"] += 1
            continue

        lang = detect_lang(f"{subject}\n{body}")
        name = extract_name(sender)
        draft_body = build_reply_draft(name, subject, lang)
        queue_draft(mid, tid, contact, name, subject or "Following up — Zion Tech Group", lang, draft_body, extra={"hot_followup": True})
        mode, delivered_id = deliver_reply(tid, subject, draft_body, contact)
        mark_thread_drafted(
            tid,
            contact,
            "hot_followup",
            gmail_draft_id=delivered_id if mode == "draft" else None,
            sent=mode == "sent",
            gmail_message_id=delivered_id if mode == "sent" else None,
        )
        record_hot_sent(tid, mid, contact, subject, "live_send" if mode == "sent" else "dry_run")
        append_jsonl(HOT_FOLLOWUP_LEDGER, {
            "ts": int(time.time()),
            "thread_id": tid,
            "message_id": mid,
            "contact": contact,
            "subject": subject,
            "status": "sent" if mode == "sent" else "drafted",
            "avoid_duplicate": True,
            "dedup_key": re.sub(r"[^a-z0-9]", "", contact),
            "mode": "live_send" if mode == "sent" else "dry_run",
        })
        queued.add(tid)
        if mode == "sent":
            summary["sent"] += 1
        else:
            summary["drafts_created"] += 1

    return summary


SERVICE_ARTICLES = [
    (
        "ai-automation-for-ops",
        "AI automation that cuts operational hours",
        "Zion maps one process in the $99 Discovery, then automates the repeatable steps — intake, triage, handoff, and reporting — without a packaged SKU.",
    ),
    (
        "healthcare-intake-and-charting",
        "Healthcare intake, scheduling, and charting",
        "Clinics lose hours on intake and documentation. Zion scopes healthcare work after Discovery: triage, appointments, and charting workflows with measurable ROI.",
    ),
    (
        "finops-and-cloud-cost",
        "FinOps and cloud cost control",
        "Cloud waste shows up as idle capacity and unused reservations. Zion's FinOps work starts with a cost map in Discovery, then automation on the waste that pays back.",
    ),
    (
        "partnership-and-field-coverage",
        "Partnership coverage for field and IT services",
        "MSPs and operators need coverage and SLAs, not another tool. Zion partners after a paid Discovery so the delivery model is explicit before any SOW.",
    ),
]


def write_service_article(summary: dict) -> str | None:
    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    day = datetime.now(timezone.utc)
    topic, title, body = SERVICE_ARTICLES[day.timetuple().tm_yday % len(SERVICE_ARTICLES)]
    path = CONTENT_DIR / f"{day.date().isoformat()}-{topic}.md"
    if path.exists():
        return str(path)
    wins = [r for r in load_jsonl(MEMORY_HISTORY)[-20:] if r.get("label") in {"success_win", "lead_opportunity", "rfq", "inbound_reply"}]
    win_lines = "\n".join(
        f"- {w.get('contact')} — {w.get('subject')}" for w in wins[-5:]
    ) or "- (no commercial threads stored yet this cycle)"
    path.write_text(
        f"# {title}\n\n"
        f"**Date:** {day.date().isoformat()}\n"
        f"**Author:** Zion Tech Group (continuous agent)\n\n"
        f"{body}\n\n"
        f"Book Discovery: {DISCOVERY_URL} · Calendar: {BOOK_URL}\n\n"
        f"## Recent commercial memory\n\n{win_lines}\n",
        encoding="utf-8",
    )
    summary["content_file"] = str(path.relative_to(REPO))
    return str(path)


def write_ops_memory(combined: dict) -> None:
    inbox = combined.get("inbox") or {}
    hot = combined.get("hot_followup") or {}
    deals = []
    if KNOWN_DEALS.exists():
        try:
            deals = json.loads(KNOWN_DEALS.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            deals = []
    deal_lines = "\n".join(
        f"- **{d.get('name')}** ({d.get('contact')}): {d.get('kind')} — {d.get('status')}"
        for d in deals if isinstance(d, dict)
    ) or "- none listed"
    block = (
        f"{MEMORY_BEGIN}\n"
        f"## Email ops (continuous agent)\n\n"
        f"- Updated: {datetime.now(timezone.utc).isoformat()}\n"
        f"- Send enabled: {SEND_ENABLED} (max {MAX_SENDS}/run)\n"
        f"- Inbox scanned: {inbox.get('scanned', 0)}; sent: {inbox.get('sent', 0)}; "
        f"drafts: {inbox.get('drafts_created', 0)}; "
        f"needs human: {inbox.get('needs_human', 0)}; backend: {inbox.get('backend', 'n/a')}\n"
        f"- Hot follow-up drafts: {hot.get('drafts_created', 0)}\n"
        f"- Classified: {json.dumps(inbox.get('classified') or {}, ensure_ascii=False)}\n"
        f"- CTA: {DISCOVERY_URL} / {BOOK_URL}\n\n"
        f"### Open commercial memory\n\n{deal_lines}\n"
        f"{MEMORY_END}\n"
    )
    if MEMORY_MD.exists():
        text = MEMORY_MD.read_text(encoding="utf-8")
        if MEMORY_BEGIN in text and MEMORY_END in text:
            text = re.sub(
                re.escape(MEMORY_BEGIN) + r".*?" + re.escape(MEMORY_END),
                block.strip(),
                text,
                flags=re.S,
            )
        else:
            text = text.rstrip() + "\n\n" + block
        MEMORY_MD.write_text(text, encoding="utf-8")
    if CEO_STATUS.exists():
        try:
            status = json.loads(CEO_STATUS.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            status = {}
        status["email_ops"] = {
            "status": "running",
            "send_enabled": SEND_ENABLED,
            "max_sends": MAX_SENDS,
            "last_inbox_scanned": inbox.get("scanned", 0),
            "last_sent": inbox.get("sent", 0),
            "last_drafts": inbox.get("drafts_created", 0),
            "backend": inbox.get("backend"),
            "cta": DISCOVERY_URL,
            "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M UTC"),
        }
        outreach = status.get("outreach") if isinstance(status.get("outreach"), dict) else {}
        if inbox.get("backend") not in {None, "none", "gmail_api_error"}:
            outreach["monitor_inbox_interest"] = inbox.get("scanned", 0)
        outreach["hot_followup_drafts"] = hot.get("drafts_created", 0)
        outreach["hot_followup_sent"] = hot.get("sent", 0)
        if SEND_ENABLED:
            outreach["status"] = "autopilot_live"
        elif outreach.get("status") == "blocked_by_config_or_env":
            outreach["status"] = "autopilot_dry_run"
        status["outreach"] = outreach
        CEO_STATUS.write_text(json.dumps(status, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def run_known_deal_followups() -> dict:
    summary = {"queued": 0, "sent": 0, "skipped": 0, "errors": []}
    if not KNOWN_DEALS.exists():
        return summary
    try:
        deals = json.loads(KNOWN_DEALS.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        summary["errors"].append(str(e))
        return summary
    queued = pending_thread_ids()
    for deal in deals:
        if not isinstance(deal, dict) or deal.get("cta") != "followup":
            summary["skipped"] += 1
            continue
        tid = str(deal.get("thread_id") or "")
        contact = (deal.get("contact") or "").lower()
        if not tid or tid in queued or already_sent_to(contact) or recently_sent(tid):
            summary["skipped"] += 1
            continue
        if not SEND_ENABLED and recently_drafted(tid):
            summary["skipped"] += 1
            continue
        name = deal.get("name") or extract_name(contact)
        lang = deal.get("lang") or "pt"
        subject = deal.get("subject") or f"Follow-up — {name}"
        draft = build_deal_followup(deal)
        queue_draft(tid, tid, contact, name, subject, lang, draft, extra={"known_deal": True})
        mode, delivered_id = deliver_reply(tid, subject, draft, contact)
        mark_thread_drafted(
            tid,
            contact,
            deal.get("kind") or "known_deal",
            gmail_draft_id=delivered_id if mode == "draft" else None,
            sent=mode == "sent",
            gmail_message_id=delivered_id if mode == "sent" else None,
        )
        if mode == "sent":
            summary["sent"] += 1
        else:
            summary["queued"] += 1
    return summary


def main(argv: list[str] | None = None):
    parser = argparse.ArgumentParser(description="Zion email autopilot")
    parser.add_argument("--max", type=int, default=25, help="Max inbox threads to scan")
    parser.add_argument("--hot-max", type=int, default=8, help="Max HOT FOLLOW-UP threads")
    parser.add_argument("--inbox-only", action="store_true")
    parser.add_argument("--no-content", action="store_true")
    args = parser.parse_args(argv)

    global _sends_this_run
    _sends_this_run = 0
    bootstrap_gog_tokens()
    mode = "LIVE SEND" if SEND_ENABLED else "DRY RUN"
    print(f"[email_autopilot] mode={mode} max_sends={MAX_SENDS} account={ACCOUNT} repo={REPO}")

    inbox = run_inbox_scan(max_results=args.max)
    hot = {"skipped": True} if args.inbox_only else run_hot_followup_scan(max_results=args.hot_max)
    deals = run_known_deal_followups()
    if not args.no_content:
        write_service_article(inbox)

    combined = {
        "inbox": inbox,
        "hot_followup": hot,
        "known_deals": deals,
        "sendEnabled": SEND_ENABLED,
        "cta": DISCOVERY_URL,
    }
    write_ops_memory(combined)
    write_latest_summary({"inbox": inbox, "hot_followup": hot, "known_deals": deals, "sendEnabled": SEND_ENABLED})
    print(json.dumps(combined, indent=2, ensure_ascii=False, default=str))
    return combined


if __name__ == "__main__":
    main()

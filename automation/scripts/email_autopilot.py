#!/usr/bin/env python3
"""
Zion Email Autopilot — triage + reply/follow-up drafts + memory extraction.

Safe-by-default:
- sendEnabled=False → no live sends, only drafts and memory updates.
- Uses gog CLI for Gmail access when present.
- Writes structured outputs under automation/email_memory/ and outreach_monitor/processed/.

Quiet Grok/x.ai status mail, GitHub bots, newsletters, vendor WTS, and
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
ACCOUNT = os.environ.get("ZION_EMAIL_ACCOUNT", "kleber@ziontechgroup.com")
BOOK_URL = "https://ziontechgroup.com/book/"
SITE_URL = "https://ziontechgroup.com"
CALENDLY_URL = "https://calendly.com/kleber-ziontechgroup"

EMAIL_MEMORY_DIR = REPO / "automation" / "email_memory"
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
})

SKIP_SENDERS_SUBSTR = (
    "noreply", "no-reply", "mailer-daemon", "notifications@", "bounce",
    "newsletter@", "marketing@", "promo@", "donotreply", "do-not-reply",
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
        "errors": [],
    }

    try:
        hits = gog_json(
            "gmail", "search", "in:inbox newer_than:2d",
            f"--max={max_results}", "--account", ACCOUNT,
        )
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
            msg = gog_json("gmail", "get", str(mid), "--account", ACCOUNT)
        except Exception as e:
            summary["errors"].append({"gmail_get": str(e)})
            continue
        if not isinstance(msg, dict):
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

        if already_sent_to(contact):
            summary["skipped_sent"] += 1
            continue

        if tid in queued:
            summary["skipped_dup"] += 1
            continue

        if "draft_reply" in actions:
            name = extract_name(sender)
            lang = detect_lang(f"{subject}\n{body}")
            draft_body = build_reply_draft(name, subject, lang)
            queue_draft(mid, tid, contact, name, subject, lang, draft_body)
            queued.add(tid)
            summary["drafts_created"] += 1

        if "store_history" in actions:
            store_history(contact, subject, classification, body)
            summary["memory_written"] += 1

        if classification.get("label") in {"lead_opportunity", "rfq", "inbound_reply"}:
            content = generate_service_content(classification, body)
            store_content_idea(tid, content["title"], content["body"])
            summary["content_ideas"] += 1

    write_latest_summary(summary)
    return summary


def run_hot_followup_scan(max_results: int = 8) -> dict:
    ensure_dirs()
    summary = {
        "hot_threads_found": 0,
        "drafts_created": 0,
        "skipped_sent": 0,
        "skipped_noise": 0,
        "errors": [],
    }

    try:
        hits = gog_json(
            "gmail", "search",
            'label:"!!!!HOT FOLLOW-UP" newer_than:14d -from:me',
            f"--max={max_results}", "--account", ACCOUNT,
        )
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

        if tid in hot_sent or tid in queued:
            summary["skipped_sent"] += 1
            continue

        try:
            msg = gog_json("gmail", "get", str(mid), "--account", ACCOUNT)
        except Exception:
            continue
        if not isinstance(msg, dict):
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
        record_hot_sent(tid, mid, contact, subject, "dry_run" if not SEND_ENABLED else "live_send")
        append_jsonl(HOT_FOLLOWUP_LEDGER, {
            "ts": int(time.time()),
            "thread_id": tid,
            "message_id": mid,
            "contact": contact,
            "subject": subject,
            "status": "drafted",
            "avoid_duplicate": True,
            "dedup_key": re.sub(r"[^a-z0-9]", "", contact),
            "mode": "dry_run" if not SEND_ENABLED else "live_send",
        })
        queued.add(tid)
        summary["drafts_created"] += 1

    return summary


def main(argv: list[str] | None = None):
    parser = argparse.ArgumentParser(description="Zion email autopilot")
    parser.add_argument("--max", type=int, default=25, help="Max inbox threads to scan")
    parser.add_argument("--hot-max", type=int, default=8, help="Max HOT FOLLOW-UP threads")
    parser.add_argument("--inbox-only", action="store_true")
    args = parser.parse_args(argv)

    mode = "LIVE SEND" if SEND_ENABLED else "DRY RUN"
    print(f"[email_autopilot] mode={mode} account={ACCOUNT} repo={REPO}")

    inbox = run_inbox_scan(max_results=args.max)
    hot = {"skipped": True} if args.inbox_only else run_hot_followup_scan(max_results=args.hot_max)

    combined = {
        "inbox": inbox,
        "hot_followup": hot,
        "sendEnabled": SEND_ENABLED,
        "cta": BOOK_URL,
    }
    print(json.dumps(combined, indent=2, ensure_ascii=False))
    return combined


if __name__ == "__main__":
    main()

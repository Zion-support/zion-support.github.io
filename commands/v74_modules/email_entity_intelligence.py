#!/usr/bin/env python3
"""
V74 – Email Entity Intelligence Engine

Extracts structured facts from free-form email text:
  - Company names (via capitalization + context heuristics)
  - People (first/last names, titles)
  - Dates  (relative + absolute, multiple formats)
  - Money amounts (USD/EUR/GBP/BRL with currency symbols)
  - Contract terms (renewal dates, SLA durations, commitments)
  - URLs and domains
  - Phone numbers
  - Ticket / case IDs (formats: #1234, TK-XXXXX, Ticket-12345, CASE-999)

Data stored in: data/v74_entities.jsonl

API:
  extract_entities(email_dict)  → {companies[], people[], dates[], amounts[],
                                   urls[], phones[], ticket_ids[], contract_terms[]}
  enrich_email(email_dict)       → email_dict enriched with .entities field
  search_entities(field, value) → list of matching entity records
"""

from __future__ import annotations
import json, re, os
from pathlib import Path
from datetime import datetime, timezone
from typing import Optional

DATA_DIR = Path("data")
ENTITY_LOG = DATA_DIR / "v74_entities.jsonl"
os.makedirs(DATA_DIR, exist_ok=True)

# ── Patterns ──────────────────────────────────────────────────────────────────

PAT_MONEY = re.compile(
    r'(?:USD|R\$|EUR|EUR|GBP|\\xe2\\x82\\xac)\s*[\\d,]+\\.?\\d*'
    r'|\\$[\\d,]+\\.?\\d*'
    r'|[\\d,]+\\.?\\d*\\s*(?:USD|EUR|GBP|BRL)'
)

PAT_PHONE = re.compile(
    r'(?:\+1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}'
    r'|(?:\+55[-.\s]?)?\d{2}[-.\s]?\d{4,5}[-.\s]?\d{4}'
    r'|(?:\+49[-.\s]?)?\d{2,4}[-.\s]?\d{3,4}[-.\s]?\d{4}'
)

PAT_URL = re.compile(
    r'https?://[^\\s<>"\']+'
    r'|www\\.[^\\s<>"\']+'
)

TICKET_RE = re.compile(
    r'(?:ticket[:\s#]*|case[:\s#]*|ref[:\s#]*|'
    r'TK[-\s]|CASE[-\s]|#[0-9]{4,10}|'
    r'order[:\s#]*|invoice[:\s#]*|'
    r'ID[:\s]*|Lead-ID[:\s]*)[0-9A-Za-z-]{3,20}',
    re.IGNORECASE
)

DATE_PATTERNS = [
    (r'\\b\\d{1,2}/\\d{1,2}/\\d{2,4}\\b',        'MM/DD/YYYY'),
    (r'\\b\\d{4}-\\d{2}-\\d{2}\\b',              'YYYY-MM-DD'),
    (r'\\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \\d{1,2},? \\d{4}\\b', 'MON D, YYYY'),
    (r'\\bby\\s+(?:end\\s+of|next\\s+)?(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|week|month)\\b', 'relative'),
    (r'\\bwithin\\s+\\d+\\s+(?:days?|weeks?|hours?)\\b', 'relative'),
    (r'\\b\\d+\\s+(?:days?|weeks?|months?)\\b', 'relative'),
]

TITLE_KEYWORDS = {
    "CEO", "CTO", "CFO", "COO", "CMO", "CISO", "CPO",
    "Founder", "Co-Founder", "President", "Vice-President", "VP",
    "Director", "Head", "Lead", "Manager", "Engineer",
    "Analyst", "Consultant", "Architect", "Associate",
    "Partner", "Principal", "Senior", "Junior",
}

CURRENCY_MAP = {"usd":"$","eur":"€","gbp":"£","r$":"R$","$":"$"}

MONTHS = {
    "jan":1,"feb":2,"mar":3,"apr":4,"may":5,"jun":6,
    "jul":7,"aug":8,"sep":9,"oct":10,"nov":11,"dec":12
}


# ── Core extraction ───────────────────────────────────────────────────────────

def extract_entities(email: dict) -> dict:
    """
    Extract structured entities from an email.
    Returns dict with lists of found entities, each annotated with value + match position.
    """
    subject = email.get("subject", "")
    snippet = email.get("snippet", "")
    body    = email.get("body", "")
    text    = f"{subject} {snippet} {body}"

    return {
        "companies":     _extract_companies(text),
        "people":        _extract_people(text),
        "dates":         _extract_dates(text),
        "amounts":       _extract_amounts(text),
        "urls":          _extract_urls(text),
        "phones":        _extract_phones(text),
        "ticket_ids":    _extract_tickets(text),
        "contract_terms": _extract_contract_terms(text, body),
        "domains":       _extract_domains(text),
    }


def _extract_companies(text: str) -> list[dict]:
    """Extract company names via capitalized word sequences."""
    out  = []
    seen = set()
    tokens = re.findall(r'[A-Z][a-z]+(?:[A-Z][a-z]*){0,3}', text)
    skip  = {"The","This","That","Hello","Best","Dear","Thank","Please","Monday",
             "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
             "January","February","March","April","May","June","July","August",
             "September","October","November","December","Inc","Ltd","Corp",
             "Group","Co","LLC","GmbH","Email","Subject","From","To","Re","Fw"}
    for tok in tokens:
        if tok in skip or len(tok) < 3:
            continue
        # suffix check
        suffix = ""
        for s in [" Inc"," Ltd"," LLC"," Corp"," Group"," Co"," GmbH"]:
            if tok.endswith(s.strip()):
                suffix = s.strip()
                tok_clean = tok[:-len(s)]
                break
        else:
            tok_clean = tok
        if tok_clean not in seen and len(tok_clean) >= 3:
            seen.add(tok_clean)
            out.append({"value": tok_clean, "type": "company", "suffix": suffix})
    return out[:20]


def _extract_people(text: str) -> list[dict]:
    out = []
    tokens = text.split()
    for i, tok in enumerate(tokens):
        clean = tok.strip(",.;:")
        if re.match(r'^[A-Z][a-z]+$', clean) and i+1 < len(tokens):
            nxt = tokens[i+1].strip(",.;:")
            if re.match(r'^[A-Z][a-z]+$', nxt):
                title = ""
                if i+2 < len(tokens):
                    t = tokens[i+2].strip(",.;:")
                    if t in TITLE_KEYWORDS or re.match(r'^[A-Z][a-z]+\.?$', t):
                        title = t
                out.append({"value": f"{clean} {nxt}", "title": title, "type": "person"})
    return out[:15]


def _extract_dates(text: str) -> list[dict]:
    out = []
    for pat, fmt in DATE_PATTERNS:
        for m in re.finditer(pat, text, re.IGNORECASE):
            out.append({"value": m.group(), "format": fmt, "span": m.span()})
    return out[:15]


def _extract_amounts(text: str) -> list[dict]:
    out = []
    patterns = [
        r'\\$[\\d,]+\\.?\\d*',
        r'[\\d,]+\\.?\\d*\\s*(?:USD|EUR|GBP)',
        r'(?:USD|EUR|GBP|R\\$)\\s*[\\d,]+\\.?\\d*',
    ]
    for pat in patterns:
        for m in re.finditer(pat, text):
            raw = m.group()
            currency = "$"
            for sym, code in CURRENCY_MAP.items():
                if sym in raw.upper():
                    currency = code
                    break
            digits = re.sub(r'[^\\d.]', '', raw)
            try:
                value = float(digits)
            except ValueError:
                value = 0.0
            out.append({"value": value, "currency": currency, "raw": raw})
    return out[:20]


def _extract_urls(text: str) -> list[dict]:
    urls = []
    for m in PAT_URL.finditer(text):
        v = m.group()
        if v not in [u.get("value") for u in urls]:
            urls.append({"value": v, "type": "url"})
    return urls[:10]


def _extract_phones(text: str) -> list[dict]:
    return [{"value": p.group(), "type": "phone"} for p in PAT_PHONE.finditer(text)][:5]


def _extract_tickets(text: str) -> list[dict]:
    out = []
    for m in TICKET_RE.finditer(text):
        out.append({"value": m.group().strip(), "type": "ticket_id"})
    return out[:10]


def _extract_contract_terms(text: str, body: str = "") -> list[dict]:
    out = []
    for term, kw in [
        ("renewal",   ["renewal","auto-renew","contract expir","agreement expir","term of"]),
        ("sla",       ["sla","uptime","guarantee","99.","response time"]),
        ("penalty",   ["penalty","late fee","overdue","late payment"]),
    ]:
        pat = r'(?:' + '|'.join(kw) + r')[^\n.,;]{0,60}'
        for m in re.finditer(pat, text, re.IGNORECASE):
            val = m.group().strip()
            if len(val) > 5:
                out.append({"value": val, "category": term})
    return out[:10]


def _extract_domains(text: str) -> list[dict]:
    domains = re.findall(r'@([a-z0-9][-a-z0-9]*\\.[a-z]{2,}(?:\\.[a-z]{2,})?)', text.lower())
    return [{"value": d, "type": "domain"} for d in sorted(set(domains))][:10]


# ── Enrichment ─────────────────────────────────────────────────────────────────

def enrich_email(email: dict) -> dict:
    """Shallow-copy email with .entities field added."""
    email = dict(email)
    email["entities"] = extract_entities(email)
    return email


# ── Persistence ───────────────────────────────────────────────────────────────

def log_entity(email_id: str, thread_id: str, sender: str, entities: dict) -> None:
    """Append entity extraction to entity log for future query."""
    try:
        with ENTITY_LOG.open("a") as f:
            f.write(json.dumps({
                "ts": datetime.now(timezone.utc).isoformat(),
                "email_id": email_id,
                "thread_id": thread_id,
                "sender": sender,
                "entities": entities,
            }, ensure_ascii=False) + "\n")
    except Exception:
        pass


def search_entities(field: str, value: str) -> list[dict]:
    """Search entity log for entities matching field=value."""
    results = []
    if not ENTITY_LOG.exists():
        return results
    try:
        with ENTITY_LOG.open("r") as f:
            for line in f:
                try:
                    rec = json.loads(line)
                    if field in rec.get("entities", {}):
                        for item in rec["entities"][field]:
                            if value.lower() in str(item.get("value","")).lower():
                                results.append({**item, "_email_id": rec["email_id"], "_sender": rec["sender"]})
                except Exception:
                    continue
    except Exception:
        pass
    return results
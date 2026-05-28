#!/usr/bin/env python3
"""
V73 – Port of V64 email_auto_categorizer.ts → Pure Python

14-category email intent classifier + routing + priority scoring.

Categories:
  billing / support / sales / legal / hr / executive / meeting /
  newsletter / spam / transactional / procurement / inquiry / automatic / general

Features:
  - Keyword frequency scoring per category
  - Per-category department routing
  - Priority score formula: urgency × category_weight × attachment_bonus × thread_breadth
  - Gmail-compatible auto-labeling
  - Reply-All decision per category
  - Spam detection (unsubscribe phrases + CAPS + pattern analysis)

API:
  categorize_email(email_dict)              → dict with category, routing, priority, labels, reply_all
  classify_bulk(list_of_emails)            → list[result]
  get_default_reply_all(category)           → bool
  get_routing_department(category)           → str
"""

from __future__ import annotations
import re
from typing import Optional

# ── Category keyword fingerprints ──────────────────────────────────────────────

CATEGORY_KEYWORDS = {
    "billing": [
        "invoice", "payment", "charged", "billing", "subscription", "fee",
        "charge", "price", "cost", "quote", "receipt", "overdue", "past due",
        "refund", "credit", "debit", "amount due", "remit", "pay",
        "finance", "account", "balance", "statement", "vendor", "supplier",
        "purchase order", "po ", "budget", "expense", "reimbursement",
    ],
    "support": [
        "help", "issue", "bug", "error", "problem", "not working", "broken",
        "failed", "crash", "support", "technical", "defect", "malfunction",
        "fix", "resolve", "troubleshoot", "assistance",
    ],
    "sales": [
        "pricing", "demo", "trial", "interest", "purchase", "buy", "enterprise",
        "sales", "quote", "proposal", "cost", "方案", " presupuesto",
        "interested in", "would like to", "explore", "options", "custom",
    ],
    "legal": [
        "contract", "agreement", "legal", "nda", "sow", "terms", "compliance",
        "liability", "clause", "law", "jurisdiction", "arbitration",
        "indemnification", "intellectual property", "confidential",
    ],
    "hr": [
        "job", "career", "hiring", "resume", "cv", "interview", "vacancy",
        "position", "apply", "recruit", "candidate", "hiring", "payroll",
        "benefits", "leave", "vacation", "sick",
    ],
    "executive": [
        "ceo", "executive", "board", "investor", "founder", "leadership",
        "strategic", "enterprise", "c-suite", "chief", "director", "vp ",
    ],
    "meeting": [
        "meeting", "call", "schedule", "calendar", "available", "demo",
        "webinar", "session", "zoom", "teams call", "google meet", "schedule",
        "book a call", "quick call", "30 min", "60 min",
    ],
    "newsletter": [
        "newsletter", "update", "digest", "weekly", "monthly", "notification",
        "unsubscribe", "mailing list", "subscribers", "email series",
        "you are receiving", "click here to unsubscribe",
    ],
    "spam": [
        "click here", "act now", "limited time", "free money", "crypto",
        "lottery", "winner", "congratulations", "you have won", "urgent act",
        "nigerian prince", "wire transfer", "miracle", "make money fast",
    ],
    "transactional": [
        " receipt", "order confirmation", "shipping", "tracking", "delivered",
        "thank you for your order", "package", "delivery", "courier",
        "invoice attached", "payment received", "renewed",
    ],
    "procurement": [
        "purchase order", "po ", "vendor", "supplier", "rfq", "rfp", "rfi",
        "procurement", "bid", "tender", "contract award", "vendor selection",
        "proposal", "sourcing", "supply chain",
    ],
    "inquiry": [
        "can you", "could you", "would you", "what is", "how do i",
        "looking for", "need to know", "enquiry", "question about",
        "information", "clarification", "wondering if",
    ],
    "automatic": [
        "auto-reply", "out of office", "vacation reply", "away from my desk",
        "thank you for your email", "i will be away", " autorespond",
        "auto response", "currently on leave",
    ],
    "general": [],
}

# Fallback weights
CATEGORY_WEIGHTS = {
    "billing": 8, "support": 7, "sales": 6, "legal": 9, "hr": 5,
    "executive": 9, "meeting": 5, "newsletter": 2, "spam": 10,
    "transactional": 6, "procurement": 6, "inquiry": 4, "automatic": 3, "general": 3,
}

CATEGORY_ROUTING = {
    "billing": "Finance", "support": "Technical Support", "sales": "Sales",
    "legal": "Legal", "hr": "People Ops", "executive": "Executive",
    "meeting": "Operations", "newsletter": "Marketing", "spam": "Security",
    "transactional": "Finance", "procurement": "Procurement",
    "inquiry": "General", "automatic": "Automation", "general": "General",
}

CATEGORY_REPLY_ALL = {
    "billing": False, "support": True, "sales": True, "legal": False,
    "hr": True, "executive": True, "meeting": True, "newsletter": False,
    "spam": False, "transactional": False, "procurement": True,
    "inquiry": True, "automatic": False, "general": False,
}


# ── Spam detection ──────────────────────────────────────────────────────────────

SPAM_PATTERNS = [
    r"click here to", r"act now", r"limited time offer", r"free.*money",
    r"you have won", r"congratulations", r"nirako", r"wire transfer",
    r" nigerian", r"crypto (gift|win)",
]

CAPS_SPAM_THRESHOLD = 0.25   # ≥25% caps in subject → likely spam
EXCLAM_SPAM_THRESHOLD = 0.05  # ≥5% exclamation → spam risk


def _is_spam_by_pattern(subject: str, body: str) -> bool:
    combined = f"{subject} {body}".lower()
    for pat in SPAM_PATTERNS:
        if re.search(pat, combined, re.IGNORECASE):
            return True
    return False


def _spam_score(subject: str, body: str) -> float:
    """0–100 spam score based on structural signals."""
    text = f"{subject} {body}"
    if not text.strip():
        return 0
    caps_ratio = len(re.findall(r"[A-Z]", text)) / max(len(text), 1)
    exclam_ratio = text.count("!") / max(len(text), 1)
    link_count = len(re.findall(r"https?://|www\.", text.lower()))
    score = caps_ratio * 60 + exclam_ratio * 40 + min(link_count * 10, 30)
    if _is_spam_by_pattern(subject, body):
        score += 30
    return min(100, score)


# ── Core classifier ────────────────────────────────────────────────────────────

def categorize_email(email: dict) -> dict:
    """
    Classify a single email into one of 14 categories.

    Returns:
        {
            category:        str,
            confidence:      float 0–1,
            routing_dept:    str,
            priority_score:  float,
            labels:          list[str],
            reply_all:       bool,
            spam_score:      float,
            reasoning:       str,
        }
    """
    subject = email.get("subject", "")
    snippet = email.get("snippet", "")
    body    = email.get("body", "")
    all_text = f"{subject} {snippet} {body}".lower()

    # Spam pre-check
    spam_score_val = _spam_score(subject, body)
    if spam_score_val >= 70:
        return {
            "category": "spam",
            "confidence": 0.95,
            "routing_dept": "Security",
            "priority_score": 100,
            "labels": ["spam", "auto-blocked"],
            "reply_all": False,
            "spam_score": spam_score_val,
            "reasoning": f"spam_score={spam_score_val} — auto-classified as spam",
        }

    # Keyword scoring
    best_category = "general"
    best_score   = 0
    hit_details  = []

    for cat, keywords in CATEGORY_KEYWORDS.items():
        if cat == "general":
            continue
        hits = [kw for kw in keywords if kw in all_text]
        if not hits:
            continue
        weight   = CATEGORY_WEIGHTS.get(cat, 3)
        raw_score = len(hits) * weight
        if raw_score > best_score:
            best_score   = raw_score
            best_category = cat
            hit_details  = hits

    confidence = min(0.9, 0.3 + best_score * 0.06) if best_score else 0.4
    if len(hit_details) == 0:
        confidence = 0.3
        best_category = "general"

    # Priority components
    urgency_kw = re.findall(
        r"urgent|emergency|critical|asap|overdue|immediately|priority|important",
        all_text
    )
    urgency_score  = len(urgency_kw) * 15
    att_count      = email.get("attachments", 0)
    att_bonus      = min(att_count * 10, 30)
    thread_len     = min(len(body or snippet) / 500, 2) * 10
    priority       = min(100, best_score * 8 + urgency_score + att_bonus + thread_len)

    routing_dept = CATEGORY_ROUTING.get(best_category, "General")
    reply_all    = CATEGORY_REPLY_ALL.get(best_category, False)

    labels = [best_category]
    if priority > 70:
        labels.append("high_priority")
    elif priority < 30:
        labels.append("low_priority")
    if "urgent" in all_text or "emergency" in all_text:
        labels.append("urgent")

    return {
        "category":        best_category,
        "confidence":      round(confidence, 2),
        "routing_dept":    routing_dept,
        "priority_score":  round(priority, 1),
        "labels":          labels,
        "reply_all":       reply_all,
        "spam_score":      round(spam_score_val, 1),
        "reasoning":       f"best={best_category} hits={hit_details} priority={priority:.0f}",
    }


def classify_bulk(emails: list[dict]) -> list[dict]:
    """Classify a list of emails — returns list of categorize_email results."""
    return [categorize_email(e) for e in emails]


def get_default_reply_all(category: str) -> bool:
    return CATEGORY_REPLY_ALL.get(category, False)


def get_routing_department(category: str) -> str:
    return CATEGORY_ROUTING.get(category, "General")

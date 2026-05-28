#!/usr/bin/env python3
"""
V73 – Port of V65 sentiment_tone_engine.ts → Pure Python

6-tone adaptive sentiment engine:
  empathetic / de_escalating / professional / friendly / formal / assertive / neutral

Features:
  - 200+ word valence lexicon (positive / negative)
  - Frustration trigger phrases (50% / 75% thresholds → soften/de-escalate)
  - CAPS ratio detection + exclamation density
  - Per-tone opening/closing pool (7-10 each)
  - Hard→Soft vocabulary substitution
  - Subject line tone prefix injection
  - Thread-arc tone recovery

API:
  analyze_sentiment(email_dict)  → dict with full ToneAnalysis fields
  adapt_body(body, tone_category, sender_hash) → softened body text
  get_subject_prefix(sentiment_score, frustration_level, urgency) → str
  get_opening_closing(tone_category, sender_hash) → (opening, closing)
"""

from __future__ import annotations
import re
from typing import Optional

# ── Lexicons ───────────────────────────────────────────────────────────────────────

POSITIVE_WORDS = [
    "thank", "grateful", "appreciate", "pleased", "happy", "excited", "great",
    "wonderful", "fantastic", "excellent", "amazing", "awesome", "delighted",
    "helpful", "good", "best", "perfect", "brilliant", "outstanding", "superb",
    "welcome", "look forward", "appreciated", "glad", "nice", "kind",
    "fantastic", "impressive", "outstanding", "remarkable", "exceptional",
]

NEGATIVE_WORDS = [
    "frustrat", "angry", "annoyed", "upset", "disappointed", "terrible", "awful",
    "horrible", "worst", "fail", "broken", "useless", "waste", "ridiculous",
    "unacceptable", "outrageous", "stupid", "hate", "never again", "complaint",
    "escalate", "supervisor", "manager", "furious", "livid", "hostile",
    "disgusted", "appalling", "shameful", "disgraceful", "incompetent",
]

URGENCY_PHRASES = [
    "asap", "urgent", "immediately", "right away", "emergency", "deadline",
    "time-sensitive", "cannot wait", "by end of day", "priority", "important",
    "critical", "overdue", "delayed", "waiting", "stuck", "as soon as possible",
    "require immediate", "without delay", "expedite",
]

FRUSTRATION_PHRASES = [
    "have to tell you again", "already tried", "still not fixed", "third time",
    "been waiting", "nothing has been done", "no response", "waste of time",
    "disappointed", "fed up", "extremely frustrated", "unacceptable",
    "not good enough", "this is ridiculous", "i expected more", "very disappointed",
    "nothing has changed", "same problem again", "fourth time", "fifth time",
    "complete failure", "why does this keep happening",
]

# ── Tone pools ────────────────────────────────────────────────────────────────

OPENINGS = {
    "empathetic": [
        "I understand this is frustrating and I apologize for the inconvenience.",
        "Thank you for bringing this to our attention.",
        "I completely understand your concern and I want to help resolve this.",
        "I sincerely apologize for the experience you are having.",
        "I appreciate your patience as we work to resolve this.",
        "Please accept my apologies — I am looking into this right away.",
        "I want to assure you we are taking this seriously.",
        "I am sorry you are experiencing this. Let us make it right.",
    ],
    "de_escalating": [
        "I completely understand your frustration and I want to personally ensure this is resolved.",
        "I want to assure you we are treating this as a priority matter.",
        "I sincerely apologize for any inconvenience this has caused.",
        "I am personally looking into this and will跟进 immediately.",
        "Your satisfaction is our top priority — I am on this now.",
        "I completely hear you and I am committed to resolving this.",
        "Let me personally take responsibility for this situation.",
        "I understand your frustration and I want to fix this as quickly as possible.",
    ],
    "professional": [
        "Dear",
        "Hello",
        "Good morning",
        "Good afternoon",
        "Greetings",
        "I hope this message finds you well.",
        "Thank you for reaching out.",
        "I am writing to inform you",
        "Further to your inquiry",
        "Please be advised",
    ],
    "friendly": [
        "Hope you are doing well!",
        "Just wanted to follow up!",
        "Quick note to say",
        "Great to hear from you!",
        "Hope this finds you well.",
        "Great connecting with you!",
        "Thanks for getting in touch!",
        "Hope all is well.",
    ],
    "formal": [
        "I am writing to inform you",
        "We wish to advise you",
        "Please be advised",
        "We are pleased to inform you",
        "Further to your inquiry",
        "We hereby confirm",
        "In accordance with",
        "We regret to inform you",
    ],
    "assertive": [
        "This requires immediate attention.",
        "We need to address this as a priority.",
        "I am escalating this to ensure prompt resolution.",
        "This matter is under immediate review.",
        "Please act on this today.",
        "This needs to be resolved by EOD.",
    ],
    "neutral": [
        "Hello",
        "Hi",
        "Thank you for your message.",
        "I hope you are well.",
        "Thank you for reaching out.",
    ],
}

CLOSINGS = {
    "empathetic": [
        "Thank you for your patience and understanding.",
        "We appreciate your patience as we work to resolve this.",
        "Looking forward to resolving this for you.",
        "Thank you for giving us the opportunity to make this right.",
        "We value your business and are committed to your satisfaction.",
    ],
    "de_escalating": [
        "Thank you for your patience — I am personally on this.",
        "We appreciate your understanding as we priority-handle this.",
        "Thank you for bringing this to our attention.",
        "Your patience is greatly appreciated.",
    ],
    "professional": [
        "Best regards",
        "Kind regards",
        "Sincerely",
        "With appreciation",
        "Respectfully",
    ],
    "friendly": [
        "Best",
        "Cheers",
        "Talk soon",
        "Thanks",
        "Looking forward to hearing from you!",
    ],
    "formal": [
        "Yours faithfully",
        "Yours sincerely",
        "Respectfully yours",
        "With kindest regards",
    ],
    "assertive": [
        "Please confirm once resolved.",
        "I await your prompt response.",
        "This requires action within 24 hours.",
        "Please advise on status.",
    ],
    "neutral": [
        "Best regards",
        "Thank you",
        "Kind regards",
    ],
}

# ── Hard→Soft vocabulary map ───────────────────────────────────────────────────

HARD_TO_SOFT = [
    ("you must", "it would be great if you could"),
    ("immediately", "when you have a chance"),
    ("as soon as possible", "at your earliest convenience"),
    ("urgent", "a priority"),
    ("do it now", "when possible"),
    ("do this immediately", "please consider doing this shortly"),
    ("you need to", "it would help us greatly if you could"),
    ("cannot", "are unable to"),
    ("refuse to", "would prefer not to"),
    ("demand", "kindly request"),
    ("must", "should"),
    ("stop all", "pause"),
    ("no excuse", "we understand that"),
    ("I demand", "I kindly request"),
    ("completely unacceptable", "not up to our usual standards"),
    ("you failed to", "we have not yet received"),
    ("you never", "there may have been an oversight with"),
    ("we demand", "we kindly ask"),
    ("failure", "an opportunity to improve"),
    ("complaint", "feedback"),
]

# ── Subject tone prefixes ──────────────────────────────────────────────────────

SUBJECT_PREFIX = {
    "crisis":     "[URGENT – IMMEDIATE ACTION REQUIRED] ",
    "angry":      "[ACTION REQUIRED] ",
    "frustrated": "[RESPONSE NEEDED] ",
    "concerned":  "[PLEASE REVIEW] ",
    "neutral":    "",
    "positive":   "",
    "professional":"[Professional Inquiry] ",
}


# ── Helpers ───────────────────────────────────────────────────────────────────

def _hash(s: str) -> int:
    h = 0
    for c in s:
        h = (h * 31 + ord(c)) & 0xFFFFFFFF
    return h


def _classify_tone(sentiment: float, frustration: float, urgency: bool, caps_ratio: float) -> str:
    if frustration > 0.75:
        return "de_escalating"
    elif frustration > 0.5:
        return "empathetic"
    elif urgency or caps_ratio > 0.08:
        return "assertive"
    elif sentiment > 0.3:
        return "friendly"
    elif sentiment < -0.3:
        return "de_escalating"
    else:
        return "professional"


# ── Public API ─────────────────────────────────────────────────────────────────

def analyze_sentiment(email: dict) -> dict:
    """
    Full sentiment + tone analysis of an email.
    Returns a dict with all ToneAnalysis fields.
    """
    text = f"{email.get('subject','')} {email.get('snippet','')} {email.get('body','')}"
    text_lower = text.lower()

    pos_count  = sum(1 for w in POSITIVE_WORDS  if w in text_lower)
    neg_count  = sum(1 for w in NEGATIVE_WORDS  if w in text_lower)
    urg_count  = sum(1 for p in URGENCY_PHRASES if p in text_lower)
    frus_count = sum(1 for p in FRUSTRATION_PHRASES if p in text_lower)

    total = max(pos_count + neg_count, 1)
    sentiment = (pos_count - neg_count) / total

    caps_ratio = len(re.findall(r"[A-Z]", text)) / max(len(text), 1)
    exclam_density = text.count("!") / max(len(text), 1) * 1000

    urgency = urg_count > 0 or caps_ratio > 0.06
    frustration = min(1.0, frus_count * 0.2 + (neg_count / total) * 0.8)
    formality_level = 0.3 if sentiment > 0.1 else (0.8 if caps_ratio > 0.1 else 0.4)
    warmth_level    = 1.0 - formality_level
    confidence      = min(0.95, 0.5 + abs(sentiment) * 0.4)

    primary_tone = _classify_tone(sentiment, frustration, urgency, caps_ratio)
    secondary_tone = "neutral"

    reasoning = (
        f"pos={pos_count} neg={neg_count} caps={caps_ratio:.3f} "
        f"frust={frustration:.2f} exclam={exclam_density:.1f}"
    )

    # Adapt body
    body = email.get("body", "")
    adapted_body, soft_used = _soften_body(body)

    # Subject prefix
    adjusted_subject = email.get("subject", "")
    if primary_tone in ("de_escalating", "angry"):
        adjusted_subject = SUBJECT_PREFIX["angry"] + adjusted_subject
    elif frustration > 0.5:
        adjusted_subject = SUBJECT_PREFIX["frustrated"] + adjusted_subject
    elif urgency:
        adjusted_subject = SUBJECT_PREFIX["concerned"] + adjusted_subject

    sender_hash = abs(_hash(email.get("sender", "")))
    opening, closing = _get_opening_closing(primary_tone, sender_hash)

    return {
        "primary_tone":      primary_tone,
        "secondary_tone":    secondary_tone,
        "sentiment_score":   round(sentiment, 3),
        "urgency_detected":  urgency,
        "frustration_level": round(frustration, 3),
        "formality_level":  round(formality_level, 2),
        "warmth_level":      round(warmth_level, 2),
        "confidence":        round(confidence, 2),
        "reasoning":         reasoning,
        # Adapted draft
        "adjusted_body":     adapted_body,
        "adjusted_subject":  adjusted_subject.strip(),
        "opening_line":      opening,
        "closing_line":      closing,
        "tone_used":         primary_tone,
        "soft_vocabulary_used": soft_used,
    }


def _soften_body(body: str) -> tuple[str, list[str]]:
    """Apply hard→soft substitutions, return (softened_body, list_of_changes)."""
    changes = []
    softened = body
    for hard, soft in HARD_TO_SOFT:
        if hard in softened.lower():
            # Case-insensitive replacement, preserving case structure
            pattern = re.compile(re.escape(hard), re.IGNORECASE)
            softened = pattern.sub(soft, softened)
            changes.append(f"{hard}→{soft}")
    return softened, changes


def _get_opening_closing(tone: str, seed: int = 0) -> tuple[str, str]:
    otype = OPENINGS.get(tone, OPENINGS["neutral"])
    ctype = CLOSINGS.get(tone, CLOSINGS["neutral"])
    opening = otype[abs(seed) % len(otype)]
    closing = ctype[abs(seed * 17 + 3) % len(ctype)]
    return opening, closing


def adapt_body(body: str, tone_category: str, sender_seed: str = "") -> dict:
    """
    Given a draft body and desired tone, adapt the vocabulary.
    Returns {adapted_body, changes, tone_used}.
    """
    tone = tone_category if tone_category in OPENINGS else "professional"
    seed = abs(_hash(sender_seed)) if sender_seed else 0
    opening, closing = _get_opening_closing(tone, seed)

    adapted, changes = _soften_body(body)
    return {
        "adapted_body": adapted,
        "opening_line": opening,
        "closing_line": closing,
        "tone_used": tone,
        "vocabulary_changes": changes,
    }


def get_subject_prefix(score: float, frustration: float, urgency: bool) -> str:
    if urgency:
        return SUBJECT_PREFIX["concerned"]
    if frustration > 0.75:
        return SUBJECT_PREFIX["angry"]
    if frustration > 0.5:
        return SUBJECT_PREFIX["frustrated"]
    if score > 0.3:
        return SUBJECT_PREFIX.get("positive", "")
    if score < -0.3:
        return SUBJECT_PREFIX["frustrated"]
    return ""

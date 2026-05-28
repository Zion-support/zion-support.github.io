#!/usr/bin/env python3
"""
_response_quality — V25: Grammar + Intent + Style Scoring
Scores email responses 0-100 on grammar, intent alignment, and professional tone.
Used to gate auto-send vs review-queue decisions.
"""
import re, json
from typing import Dict, Any, Optional

_SPELLING_ERRORS = [
    (r"\b(their|there|they're)\b", "their/there/they're"),
    (r"\b(your|you're)\b", "your/you're"),
    (r"\b(its|it's)\b", "its/it's"),
    (r"\b(affect|effect)\b", "affect/effect"),
    (r"\b(than|then)\b", "than/then"),
    (r"\b(recieve|receive)\b", "recieve"),
    (r"\b(occured|occurred)\b", "occured"),
    (r"\b(Definately|Definitely)\b", "Definately"),
    (r"\b(seperate|separate)\b", "seperate"),
    (r"\b(accomodate|accommodate)\b", "accomodate"),
]

_BAD_PHRASES = [
    "asap", "as soon as possible", "kindly", "please do the needful",
    "per our conversation", "please find attached", "further to our call",
    "we wish to inform", "revert back", "do the needful",
]

_URGENT_PHRASES = [
    "immediately", "right now", "without delay", "urgent attention",
    "priority", "critical", "emergency", "asap",
]

_PROFESSIONAL_OPENERS = [
    "thank you for", "i appreciate", "regarding your",
    "following up on", "it was great", "hope this message",
    "thank you for reaching out", "thank you for your patience",
]

_INFORMAL_OPENERS = [
    "hey", "hiya", "yo", "what's up", "sup", "heya",
    "gonna", "wanna", "kinda", "gotta", "lemme", "dunno",
]


def _score_response_quality(response: str, intent: str = "default",
                            sentiment: str = "neutral") -> float:
    """
    Score a response 0-100 on grammar, intent alignment, and tone.

    Returns: quality_score (0.0 to 100.0)
    """
    if not response or len(response.strip()) < 5:
        return 0.0

    score = 85.0  # Start at baseline
    text = response

    # ── 1. Spelling errors (most impactful) ─────────────────────────────────
    for pattern, _ in _SPELLING_ERRORS:
        matches = re.findall(pattern, text, re.IGNORECASE)
        for _ in matches:
            score -= 6

    # ── 2. Bad phrases ─────────────────────────────────────────────────────
    for phrase in _BAD_PHRASES:
        if phrase.lower() in text.lower():
            score -= 3

    # ── 3. Informal openers ────────────────────────────────────────────────
    opener_lower = text.lower()[:100]
    for op in _INFORMAL_OPENERS:
        if op in opener_lower:
            score -= 4
            break

    # ── 4. ALL CAPS abuse ──────────────────────────────────────────────────
    words = text.split()
    caps_words = [w for w in words if len(w) > 3 and w.isupper()]
    if len(caps_words) > len(words) * 0.3:
        score -= 8

    # ── 5. Excessive punctuation ───────────────────────────────────────────
    if text.count("!") > 5:
        score -= 4
    if text.count("...") > 2:
        score -= 2
    if re.search(r"\.{4,}", text):
        score -= 3

    # ── 6. Placeholder text ────────────────────────────────────────────────
    if re.search(r"\b(TODO|FIXME|XXX|REPLACE|INSERT|YOUR NAME|HIS/HER)\b", text, re.I):
        score -= 15

    # ── 7. Length check ───────────────────────────────────────────────────
    word_count = len(text.split())
    if word_count < 8:
        score -= 15  # Way too short
    elif word_count > 600:
        score -= 5  # Way too long

    # ── 8. Intent alignment bonus/penalty ────────────────────────────────
    intent_keywords = {
        "urgent":      ["immediately", "priority", "handling", "investigating"],
        "sales_lead":  ["schedule", "demo", "call", "discuss", "proposal"],
        "support_issue": ["fix", "resolved", "team", "investigation", "assistance"],
        "meeting":     ["calendar", "schedule", "available", "meeting", "call"],
        "financial":   ["invoice", "payment", "receipt", "billing", "amount"],
        "partnership": ["collaborat", "discuss", "explore", "proposal", "next steps"],
        "cancellation":["understand", "cancel", "refund", "process", "account"],
        "invoice":     ["invoice", "payment", "due", "receipt", "billing"],
        "billing":     ["billing", "charge", "subscription", "plan", "account"],
    }
    expected = intent_keywords.get(intent, [])
    if expected:
        matches = sum(1 for kw in expected if kw.lower() in text.lower())
        if matches == 0 and score > 50:
            score -= 8  # Missing intent keywords
        elif matches >= 3:
            score += 5  # Strong intent signal

    # ── 9. Sentiment tone alignment ────────────────────────────────────────
    if sentiment == "negative":
        if "apologize" not in text.lower() and "understand" not in text.lower() and "sorry" not in text.lower():
            score -= 5  # Needs empathy
    elif sentiment == "positive":
        if not any(op in text.lower()[:80] for op in ["thank", "great", "appreciate", "excited"]):
            score -= 3  # Missing positive tone
    elif sentiment == "urgent":
        if not any(ph in text.lower() for ph in _URGENT_PHRASES):
            score -= 8  # Missing urgency signal

    # ── 10. No signature / closing ─────────────────────────────────────────
    if not re.search(r"(best|regards|sincerely|thanks|cheers)", text[-200:], re.I):
        score -= 4

    # ── 11. No greeting ───────────────────────────────────────────────────
    if not re.search(r"(dear|hi|hello|good morning|good afternoon|hi there)", text[:100], re.I):
        score -= 3

    return max(0.0, min(100.0, round(score, 1)))


class ResponseVerifier:
    """
    Verifies response quality and decides: send / review / discard.
    Also logs scores to quality history for training.
    """

    def __init__(self):
        self._stats = {"verified": 0, "send": 0, "review": 0, "discard": 0}

    def verify(self, email: Dict[str, Any], response: str,
               intent: str = "default",
               sentiment: str = "neutral",
               urgency: float = 0.0) -> Dict[str, Any]:
        """Verify a single response and return decision + score breakdown."""
        quality = _score_response_quality(response, intent, sentiment)
        self._stats["verified"] += 1

        # Decision thresholds
        if quality >= 75 and urgency < 0.8:
            decision = "send"
            self._stats["send"] += 1
        elif quality >= 55 or urgency >= 0.9:
            decision = "review"
            self._stats["review"] += 1
        else:
            decision = "discard"
            self._stats["discard"] += 1

        # Generate specific feedback
        feedback = self._generate_feedback(response, intent, quality)

        return {
            "quality_score": quality,
            "decision": decision,
            "intent": intent,
            "sentiment": sentiment,
            "urgency": urgency,
            "feedback": feedback,
            "should_send": decision == "send",
            "should_review": decision == "review",
            "should_discard": decision == "discard",
        }

    def _generate_feedback(self, response: str, intent: str, score: float) -> list:
        feedback = []
        if score < 75:
            feedback.append(f"Quality score {score:.0f} below 75 — needs review")
        if len(response.split()) < 8:
            feedback.append("Response is too short — add more detail")
        if re.search(r"\b(TODO|FIXME|XXX)\b", response, re.I):
            feedback.append("Contains placeholder text — must remove before send")
        if score >= 85:
            feedback.append("High quality — good to send")
        if intent in ("sales_lead",) and "schedule" not in response.lower() and "call" not in response.lower():
            feedback.append("Sales intent — include scheduling CTA")
        if intent == "support_issue" and "team" not in response.lower() and "fix" not in response.lower():
            feedback.append("Support intent — mention action being taken")
        return feedback

    def get_stats(self) -> Dict[str, Any]:
        return dict(self._stats)


def _score_response_quality_wrapper(response: str, intent: str = "default",
                                    sentiment: str = "neutral") -> float:
    """Alias for backward compatibility."""
    return _score_response_quality(response, intent, sentiment)


if __name__ == "__main__":
    test_responses = [
        ("Hi Kleber, thanks for getting back to me. We're interested in the demo. Can we schedule a call?", "sales_lead", "positive"),
        ("Hey we need this fixed ASAP!!! PLEASE DO THE NEEDFUL!!!!", "support_issue", "negative"),
        ("Dear Sir, Thank you for your email. We will look into the matter. Best Regards.", "default", "neutral"),
    ]
    verifier = ResponseVerifier()
    for text, intent, sent in test_responses:
        r = verifier.verify({"from": "test@test.com", "subject": "Test"}, text, intent, sent)
        print(f"[{r['decision'].upper()}] score={r['quality_score']} | {text[:60]}...")
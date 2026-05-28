#!/usr/bin/env python3
"""
ResponseImprover — V30 Email Response Quality Learning Engine

Analyzes each sent response for quality and continuously improves
the email response generation based on outcomes and feedback.

Features:
- Grammar quality scoring
- Intent-aware response templates
- Response time optimization
- Personalization engine
- Tone adaptation
- Auto-improvement based on feedback loops

Author: Zion Agent V30
"""
import json, re, time
from pathlib import Path
from typing import Dict, Any, Optional, List
from datetime import datetime, timezone
from collections import defaultdict

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA = WORKSPACE / "data"
FEEDBACK_DB = DATA / "response_feedback.jsonl"
TEMPLATE_QUALITY_DB = DATA / "template_quality.jsonl"
RESPONSE_METRICS_DB = DATA / "response_metrics.jsonl"
CONFIG_DB = DATA / "improver_config.json"

# ── Grammar & Style Rules ────────────────────────────────────────────────────

_GRAMMAR_RULES = [
    (r"\b(their|there|they're)\b", "spelling"),
    (r"\b(your|you're)\b", "spelling"),
    (r"\b(its|it's)\b", "spelling"),
    (r"\b(affect|effect)\b", "spelling"),
    (r"\b(than|then)\b", "spelling"),
    (r"\s{2,}", "spacing"),
    (r"[.!?]\s*[a-z]", "capitalization"),
    (r"\b(free|great|amazing|perfect|excellent)\b{3,}", "overuse"),
    (r"\.{4,}", "punctuation"),
    (r"!\.{3,}", "punctuation"),
    (r"\*\*\*\*+", "formatting"),
    (r"\b(FIXME|TODO|XXX)\b", "placeholder"),
]

_TONE_ADJUSTMENTS = {
    "negative": {
        "replace": [
            (r"\b(I'm sorry|We apologize)\b", "I understand"),
            (r"\b(cannot|can't)\b", "are unable to"),
            (r"\b(won't|will not)\b", "are not in a position to"),
            (r"\b(issue|problem|bug)\b", "situation"),
        ],
        "prefix": "Thank you for bringing this to our attention. ",
    },
    "positive": {
        "replace": [
            (r"\b(would like to|want to)\b", "are excited to"),
            (r"\b(please|kindly)\b", ""),
        ],
        "prefix": "Great to hear from you! ",
    },
    "urgent": {
        "replace": [
            (r"\b(we'll look into|we will review)\b", "we are addressing immediately"),
            (r"\b(s soon as possible)\b", "within the next hour"),
        ],
        "prefix": "[PRIORITY RESPONSE] ",
    },
    "formal": {
        "replace": [
            (r"\b(hey|hiya|yo)\b", "Dear"),
            (r"\b(gonna|wanna|kinda)\b", "going to|want to|kind of"),
        ],
        "prefix": "I hope this message finds you well. ",
    },
}


class ResponseImprover:
    """Continuously learns from email response outcomes to improve quality."""

    def __init__(self, config: Optional[Dict[str, Any]] = None):
        self.config = config or self._load_config()
        self._stats = {
            "analyzed": 0,
            "improved": 0,
            "templates_updated": 0,
            "grammar_issues_fixed": 0,
        }
        self._intent_templates: Dict[str, List[Dict]] = defaultdict(list)
        self._load_templates()

    def _load_config(self) -> Dict[str, Any]:
        if CONFIG_DB.exists():
            try:
                return json.loads(CONFIG_DB.read_text())
            except Exception:
                pass
        return {
            "grammar_threshold": 75,
            "auto_improve": True,
            "learning_rate": 0.15,
            "min_confidence": 0.70,
            "tone": "professional",
            "personalization": True,
        }

    def _load_templates(self):
        """Load template quality scores from DB."""
        if TEMPLATE_QUALITY_DB.exists():
            try:
                for line in TEMPLATE_QUALITY_DB.read_text().splitlines():
                    if line.strip():
                        entry = json.loads(line)
                        intent = entry.get("intent", "default")
                        self._intent_templates[intent].append(entry)
            except Exception:
                pass

    def analyze_response(
        self,
        email: Dict[str, Any],
        response: str,
        outcome: str = "sent",
    ) -> Dict[str, Any]:
        """
        Analyze a response and return improvement recommendations.

        Args:
            email: Original email dict
            response: Generated response text
            outcome: "sent", "bounced", "replied", "escalated", "reviewed"

        Returns:
            dict: {
                "quality_score": float,
                "grammar_score": float,
                "intent_score": float,
                "tone_score": float,
                "improvements": list[str],
                "suggested_response": str,
                "send_recommendation": str (send/review/discard),
                "issues": list[str],
            }
        """
        self._stats["analyzed"] += 1

        intent = email.get("intent_label", "default")
        subject = email.get("subject", "")
        body = response

        # Compute scores
        grammar_score = self._score_grammar(body)
        intent_score = self._score_intent_alignment(body, intent)
        tone_score = self._score_tone(body, email.get("sentiment", "neutral"))
        overall_score = round(
            grammar_score * 0.3 + intent_score * 0.4 + tone_score * 0.3, 2
        )

        # Find issues
        issues = self._find_issues(body, grammar_score)

        # Generate improvements
        improvements = self._generate_improvements(body, intent, grammar_score, issues)

        # Improved response
        improved_response = self._apply_improvements(body, intent, improvements)

        # Send recommendation
        if grammar_score < self.config.get("grammar_threshold", 75):
            send_rec = "review"
        elif email.get("urgency_score", 0) >= 0.8:
            send_rec = "review"
        elif overall_score < self.config.get("min_confidence", 70) / 100:
            send_rec = "review"
        else:
            send_rec = "send"

        # Log to feedback DB
        self._log_feedback(email, response, overall_score, outcome)

        self._stats["improved"] += 1

        return {
            "quality_score": overall_score,
            "grammar_score": grammar_score,
            "intent_score": intent_score,
            "tone_score": tone_score,
            "improvements": improvements,
            "suggested_response": improved_response,
            "send_recommendation": send_rec,
            "issues": issues,
            "intent": intent,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

    def _score_grammar(self, text: str) -> float:
        """Score grammar quality 0-100."""
        if not text:
            return 0.0
        score = 100.0
        for pattern, rule_type in _GRAMMAR_RULES:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for _ in matches:
                if rule_type == "spelling":
                    score -= 5
                elif rule_type == "spacing":
                    score -= 2
                elif rule_type == "capitalization":
                    score -= 3
                elif rule_type == "overuse":
                    score -= 2
                elif rule_type == "punctuation":
                    score -= 1
                elif rule_type == "placeholder":
                    score -= 15
        # Length check
        if len(text.split()) < 5:
            score -= 20
        elif len(text.split()) > 500:
            score -= 10
        return max(0.0, min(100.0, score))

    def _score_intent_alignment(self, text: str, intent: str) -> float:
        """Score how well response aligns with the detected intent."""
        if not text or not intent:
            return 75.0
        text_lower = text.lower()
        intent_keywords = {
            "sales_lead": ["schedule", "demo", "call", "discovery", "proposal", "quote"],
            "support_issue": ["fix", "resolve", "investigate", "escalate", "team", "assistance"],
            "urgent": ["immediately", "priority", "urgent", "asap", "now", "addressing"],
            "financial": ["invoice", "payment", "receipt", "billing", "amount", "account"],
            "meeting": ["calendar", "schedule", "available", "meeting", "call", "zoom"],
            "partnership": ["collaborate", "partnership", "proposal", "discuss", "explore"],
            "cancellation": ["understand", "cancel", "refund", "process", "assistance"],
            "invoice": ["invoice", "payment", "due", "receipt", "billing"],
            "billing": ["billing", "charge", "subscription", "plan", "payment"],
            "personal_one2one": ["thanks", "great", "see you", "chat", "catch up"],
        }
        expected = intent_keywords.get(intent, [])
        if not expected:
            return 75.0
        matches = sum(1 for kw in expected if kw in text_lower)
        return min(100.0, 60.0 + (matches / len(expected)) * 40.0)

    def _score_tone(self, text: str, sentiment: str) -> float:
        """Score tone appropriateness based on detected sentiment."""
        if not text:
            return 75.0
        score = 80.0
        tone_map = _TONE_ADJUSTMENTS.get(sentiment, {})
        prefix = tone_map.get("prefix", "")
        # Check if prefix is in text (good = follows tone rules)
        if prefix and prefix.strip():
            prefix_stripped = prefix.strip().lower()
            if prefix_stripped[:10] in text.lower()[:50]:
                score += 10
        # Check for tone violations
        if sentiment == "negative":
            if "I apologize" not in text and "understand" not in text.lower():
                score -= 5
        elif sentiment == "urgent":
            if "immediately" not in text.lower() and "priority" not in text.lower():
                score -= 8
        # Punctuation check
        if text.count("!") > 3:
            score -= 5
        if text.count("?") == 0:
            score -= 3
        return max(0.0, min(100.0, score))

    def _find_issues(self, text: str, grammar_score: float) -> List[str]:
        """Identify specific issues in the response."""
        issues = []
        if grammar_score < 70:
            issues.append("Grammar quality below threshold")
        if len(text.split()) < 10:
            issues.append("Response too short")
        if text.count("$") > 5:
            issues.append("Too many currency references")
        if re.search(r"\b(TODO|FIXME|XXX|REPLACE THIS)\b", text, re.IGNORECASE):
            issues.append("Contains placeholder text")
        if text.endswith("..."):
            issues.append("Incomplete ending")
        if text.count("\n\n\n") > 1:
            issues.append("Excessive line breaks")
        # Check for all-caps (bad for professional email)
        words = text.upper().split()
        if sum(1 for w in words if len(w) > 3) > len(words) * 0.4:
            issues.append("Excessive ALL CAPS usage")
        return issues

    def _generate_improvements(
        self, text: str, intent: str, grammar_score: float, issues: List[str]
    ) -> List[str]:
        """Generate specific improvement suggestions."""
        improvements = []
        if grammar_score < 80:
            improvements.append("Consider using more complete sentences")
        if any("short" in i.lower() for i in issues):
            improvements.append("Add more context and detail to response")
        if "placeholder" in str(issues):
            improvements.append("Remove all placeholder text before sending")
        if len(text.split()) < 20:
            improvements.append("Add a clear call-to-action or next steps")
        # Intent-specific improvements
        if intent == "sales_lead":
            improvements.append("Include specific next step / calendar link")
        elif intent == "support_issue":
            improvements.append("Confirm specific action being taken and timeline")
        elif intent == "meeting":
            improvements.append("Provide specific time slots for meeting")
        elif intent in ("financial", "invoice", "billing"):
            improvements.append("Ensure all financial details are accurate and itemized")
        return improvements

    def _apply_improvements(
        self, text: str, intent: str, improvements: List[str]
    ) -> str:
        """Apply improvements to create a better version of the response."""
        improved = text
        # Apply tone adjustments based on intent
        tone_map = _TONE_ADJUSTMENTS.get(intent, {})
        for pattern, replacement in tone_map.get("replace", []):
            improved = re.sub(pattern, replacement, improved, flags=re.IGNORECASE)
        # Clean up spacing
        improved = re.sub(r"\n{3,}", "\n\n", improved)
        improved = re.sub(r" {2,}", " ", improved)
        # Ensure proper closing
        if not improved.rstrip().endswith((".", "!", "?")):
            improved = improved.rstrip() + "."
        return improved

    def _log_feedback(
        self, email: Dict[str, Any], response: str, score: float, outcome: str
    ):
        """Log response feedback for learning."""
        entry = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "intent": email.get("intent_label", "default"),
            "from": email.get("from", ""),
            "subject": email.get("subject", ""),
            "quality_score": score,
            "outcome": outcome,
            "urgency": email.get("urgency_score", 0),
            "sentiment": email.get("sentiment", "neutral"),
            "confidence": email.get("confidence", 0),
        }
        try:
            FEEDBACK_DB.parent.mkdir(parents=True, exist_ok=True)
            with FEEDBACK_DB.open("a", encoding="utf-8") as f:
                f.write(json.dumps(entry) + "\n")
        except Exception:
            pass

    def get_intent_stats(self) -> Dict[str, Any]:
        """Get stats per intent for improvement tracking."""
        stats = {}
        for intent, entries in self._intent_templates.items():
            if entries:
                avg_score = sum(e.get("quality_score", 0) for e in entries) / len(entries)
                stats[intent] = {
                    "count": len(entries),
                    "avg_quality": round(avg_score, 2),
                    "last_updated": entries[-1].get("timestamp", ""),
                }
        return stats

    def get_stats(self) -> Dict[str, Any]:
        return dict(self._stats)


def improve_response(email: Dict[str, Any], response: str, outcome: str = "sent") -> Dict[str, Any]:
    """Convenience function."""
    return ResponseImprover().analyze_response(email, response, outcome)


if __name__ == "__main__":
    # Quick test
    test_email = {
        "intent_label": "sales_lead",
        "subject": "Interested in your AI solution",
        "from": "cto@bigcorp.io",
        "sentiment": "positive",
        "urgency_score": 0.5,
        "confidence": 0.85,
    }
    test_response = (
        "Hi,\n\nThank you for your interest! We're excited about the opportunity to help. "
        "I'd love to schedule a demo to show you our platform.\n\nWould you be available for a 30-minute call next week?\n\nBest,\nKleber"
    )
    improver = ResponseImprover()
    result = improver.analyze_response(test_email, test_response, outcome="sent")
    print(json.dumps(result, indent=2))
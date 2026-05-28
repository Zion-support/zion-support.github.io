#!/usr/bin/env python3
"""
CaseRouter — V30 Email Intent Classification & Routing Engine

Classifies each incoming email into a handler category and returns:
- intent_label, confidence, routing_policy, suggested_actions

Handles: sales_lead, support_issue, urgent, financial, meeting,
         partnership, cancellation, invoice, billing, personal_one2one, default

Author: Zion Agent V30
"""
import json, re
from typing import Dict, Any, Optional, Tuple
from datetime import datetime

# ── Intent Pattern Library ────────────────────────────────────────────────────

_INTENT_PATTERNS: Dict[str, list] = {
    "sales_lead": [
        r"\b(interest|enquire|learn more|demo|trial|quote|pricing)\b",
        r"\b(buy|purchase|contract|proposal|propos[a-z]+)\b",
        r"\b(collaborat|partner|synerg|strategic)\b",
        r"\b(our company|we're|we are)\s+(looking|seeking|exploring)\b",
        r"\b(automate|AI|ML|solution|platform)\b.*?\b(need|want|require)\b",
    ],
    "support_issue": [
        r"\b(bug|error|crash|fail|broken|not working|issue|problem)\b",
        r"\b(stuck|hang|freeze|slow|timeout)\b",
        r"\b(urgent|asap|immediately|critical)\b",
        r"\b(won't|can't|cannot|couldn't)\b.*?\b(access|log|use)\b",
        r"\bneed help|help me|support|assist\b",
    ],
    "urgent": [
        r"\bURGENT|ASAP|CRITICAL|EMERGENCY|IMMEDIATE\b",
        r"\bdeadline|by (end of )?today|within (the )?hour\b",
        r"\bexecutive|CEO|CFO|director\b.*?\bcall|meeting\b",
        r"\bboard\s+meeting|pitch|presentation\b.*?\btonight|today\b",
    ],
    "financial": [
        r"\b(invoice|bill|receipt|payment|amount|total|due)\b",
        r"\b(USD|\$|dollar|euro|£|EUR|USD)\b",
        r"\b(bank|wire|transfer|account|balance)\b",
        r"\b(purchase\s+order|PO|contract\s+value|quote|pricing)\b",
        r"\b(refund|cancel.*?charge|dispute|overcharge)\b",
    ],
    "meeting": [
        r"\b(meeting|call|conference|zoom|teams|google meet)\b",
        r"\b(schedule|set up|book|arrange)\s+(a\s+)?(call|meeting)\b",
        r"\b(available|free|open)\s+(monday|tuesday|wednesday|thursday|friday)\b",
        r"\b(30 min|15 min|1 hour|hour\s+long)\b",
        r"\b(propose|time|slot)\b.*?\b(tomorrow|next week|Monday)\b",
    ],
    "partnership": [
        r"\b(partnership|collaborat|joint\s+venture|reseller|affiliate)\b",
        r"\b(white\s+label|OEM|integration|API)\b",
        r"\b(enterprise|licensing|volume|discount)\b",
        r"\b(become\s+(a\s+)?(partner|reseller))\b",
    ],
    "cancellation": [
        r"\b(cancel|terminate|end\s+(our\s+)?(subscription|service|contract))\b",
        r"\b(downgrade|remove|delete\s+(my\s+)?account)\b",
        r"\b(no longer|not\s+(interested|needed))\b",
        r"\b(refund|get\s+(my\s+)?(money|funds|back))\b",
    ],
    "invoice": [
        r"\b(invoice|inv[#]?|billing|receipt|statement)\b",
        r"\b(due\s+date|payment\s+terms|net\s+30|net\s+60)\b",
        r"\b(purchase\s+order|PO|contract|agreement)\b",
        r"\b(amount|total|subtotal|tax|discount)\b.*?\$",
    ],
    "billing": [
        r"\b(billing|charge|subscription|fee|plan)\b",
        r"\b(upgrade|downgrade|change\s+(my\s+)?plan)\b",
        r"\b(credit\s+card|payment\s+method|invoice)\b",
        r"\b(recurring\s+payment|monthly|annual|billed)\b",
    ],
    "personal_one2one": [
        r"\b(hey|hi|hello|yo)\s+(kleber|karim|john|mike|tom)\b",
        r"\b(see\s+you|let me know|let's\s+chat|catch up)\b",
        r"\b(weekend|tonight|tomorrow|lunch|dinner)\b.*?\b(meet|get|together)\b",
        r"\b(one\s+on\s+one|1:1|coffee|drinks)\b",
    ],
}

# ── Urgency Keywords ──────────────────────────────────────────────────────────

_URGENCY_KEYWORDS = [
    "urgent", "asap", "critical", "emergency", "immediately",
    "right now", "time-sensitive", "high priority", "priority",
    "blocking", "can't wait", "deadline today", "end of day",
]

_SENTIMENT_POSITIVE = [
    "thank", "great", "excellent", "amazing", "perfect",
    "love", "happy", "excited", "fantastic", "wonderful",
    "appreciate", "grateful", "wonderful", "brilliant",
]

_SENTIMENT_NEGATIVE = [
    "frustrated", "angry", "disappointed", "terrible", "awful",
    "poor", "worst", "horrible", "unacceptable", "annoyed",
    "upset", "concerned", "worried", "problem", "issue",
]

_HIGH_VALUE_COMPANIES = [
    "enterprise", "fortune 500", "fortune 1000", "inc 5000",
    "bigdata", "ai-first", "cloud-native", "saas",
]


class CaseRouter:
    """Routes each email to the correct handler with policy metadata."""

    def __init__(self, config: Optional[Dict[str, Any]] = None):
        self.config = config or {}
        self._stats = {"calls": 0, "intent_counts": {}}

    def classify(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """
        Classify an email and return routing decision.

        Args:
            email: {
                "subject": str,
                "body": str,
                "from": str,
                "cc": list[str],
                "snippet": str,
                "has_attachment": bool,
            }

        Returns:
            dict: {
                "intent_label": str,
                "confidence": float (0-1),
                "policy": dict,
                "suggested_actions": list[str],
                "urgency_score": float,
                "sentiment": str,
                "is_high_value_lead": bool,
                "needs_reply_all": bool,
                "needs_cc_manager": bool,
                "language": str,
                "reasoning": str,
            }
        """
        subject = (email.get("subject") or "").lower()
        body = (email.get("body") or "").lower()
        snippet = (email.get("snippet") or "").lower()
        cc = email.get("cc") or []
        from_addr = (email.get("from") or "").lower()

        combined = f"{subject} {snippet} {body[:500]}"

        self._stats["calls"] += 1

        # 1. Detect language
        lang = self._detect_language(email.get("body") or "")

        # 2. Score each intent
        intent_scores = self._score_all_intents(combined, email)

        # 3. Pick best intent
        best_intent, confidence = max(intent_scores.items(), key=lambda x: x[1])

        # 4. Compute urgency
        urgency = self._compute_urgency(combined, subject, email)

        # 5. Detect sentiment
        sentiment = self._compute_sentiment(combined)

        # 6. High-value lead detection
        is_high_value = self._is_high_value_lead(combined, from_addr)

        # 7. Reply-All logic
        needs_reply_all = len(cc) > 0 and confidence >= 0.75

        # 8. Manager CC trigger
        needs_cc_manager = (
            urgency >= 0.8 or
            best_intent in ("financial", "invoice", "cancellation") or
            is_high_value
        )

        # 9. Build policy
        policy = self._get_policy(best_intent, confidence, urgency)

        # 10. Suggested actions
        actions = self._suggest_actions(best_intent, email)

        # Track stats
        self._stats["intent_counts"][best_intent] = \
            self._stats["intent_counts"].get(best_intent, 0) + 1

        reasoning_parts = [
            f"Top intent: {best_intent} ({confidence:.0%})",
            f"Urgency: {urgency:.0%}",
            f"Sentiment: {sentiment}",
            f"Reply-All: {'Yes' if needs_reply_all else 'No'}",
            f"Language: {lang}",
            f"High-value: {'Yes' if is_high_value else 'No'}",
        ]

        return {
            "intent_label": best_intent,
            "confidence": round(confidence, 3),
            "policy": policy,
            "suggested_actions": actions,
            "urgency_score": round(urgency, 3),
            "sentiment": sentiment,
            "is_high_value_lead": is_high_value,
            "needs_reply_all": needs_reply_all,
            "needs_cc_manager": needs_cc_manager,
            "language": lang,
            "reasoning": " | ".join(reasoning_parts),
        }

    def _score_all_intents(self, text: str, email: Dict[str, Any]) -> Dict[str, float]:
        scores = {}
        for intent, patterns in _INTENT_PATTERNS.items():
            score = 0.0
            for pat in patterns:
                matches = re.findall(pat, text, re.IGNORECASE)
                if matches:
                    # More matches = higher score, with diminishing returns
                    score += min(0.3, 0.08 * len(matches))
            # Attachment bonus
            if email.get("has_attachment") and intent in ("support_issue", "financial", "invoice"):
                score += 0.15
            # CC bonus for meeting/support
            if email.get("cc") and len(email.get("cc", [])) > 1:
                if intent in ("meeting", "support_issue"):
                    score += 0.1
            scores[intent] = min(0.98, score)
        return scores

    def _compute_urgency(self, text: str, subject: str, email: Dict[str, Any]) -> float:
        score = 0.0
        # Check urgency keywords
        for kw in _URGENCY_KEYWORDS:
            if kw in text:
                score += 0.2
            if kw in subject:
                score += 0.15
        # Attachment with urgent keywords
        if email.get("has_attachment") and any(k in text for k in _URGENCY_KEYWORDS):
            score += 0.1
        # CC count (more CCs = more visible = higher urgency)
        cc_count = len(email.get("cc") or [])
        if cc_count >= 3:
            score += 0.15
        elif cc_count >= 1:
            score += 0.05
        # All-caps subject bonus
        if subject.isupper() and len(subject) > 10:
            score += 0.25
        return min(1.0, score)

    def _compute_sentiment(self, text: str) -> str:
        pos = sum(1 for w in _SENTIMENT_POSITIVE if w in text)
        neg = sum(1 for w in _SENTIMENT_NEGATIVE if w in text)
        if neg > pos:
            return "negative"
        elif pos > neg:
            return "positive"
        return "neutral"

    def _is_high_value_lead(self, text: str, from_addr: str) -> bool:
        score = 0.0
        for kw in _HIGH_VALUE_COMPANIES:
            if kw in text:
                score += 0.2
        # Enterprise domain indicators
        enterprise_tlds = [".com", ".io", ".ai", ".co"]
        if any(tld in from_addr for tld in enterprise_tlds) and len(from_addr) > 15:
            score += 0.1
        return score >= 0.3

    def _detect_language(self, body: str) -> str:
        # Simple heuristic: check common words
        sample = (body or "")[:300].lower()
        pt_br = ["olá", "obrigado", "bom dia", "prezado", "att", "saudações"]
        es = ["hola", "gracias", "buenos días", "estimado", "saludos"]
        de = ["hallo", "danke", "guten tag", "sehr geehrte"]
        fr = ["bonjour", "merci", "salutations", "chère"]

        for lang, words in [("pt-BR", pt_br), ("es", es), ("de", de), ("fr", fr)]:
            if sum(1 for w in words if w in sample) >= 2:
                return lang
        return "en"

    def _get_policy(self, intent: str, confidence: float, urgency: float) -> Dict[str, Any]:
        """Get routing policy for the intent."""
        policies = {
            "urgent": {
                "grammar_threshold": 55, "reply_all_default": True,
                "send_on": "send", "fwd_on": None, "auto_ack_depth": 30,
                "priority": 1, "sla_minutes": 15,
            },
            "sales_lead": {
                "grammar_threshold": 70, "reply_all_default": False,
                "send_on": "send", "fwd_on": "sales_manager", "auto_ack_depth": 15,
                "priority": 2, "sla_minutes": 120,
            },
            "support_issue": {
                "grammar_threshold": 65, "reply_all_default": True,
                "send_on": "send", "fwd_on": "support_lead", "auto_ack_depth": 20,
                "priority": 1, "sla_minutes": 60,
            },
            "financial": {
                "grammar_threshold": 80, "reply_all_default": False,
                "send_on": "review", "fwd_on": "finance", "auto_ack_depth": 5,
                "priority": 1, "sla_minutes": 30,
            },
            "meeting": {
                "grammar_threshold": 65, "reply_all_default": True,
                "send_on": "send", "fwd_on": None, "auto_ack_depth": 15,
                "priority": 2, "sla_minutes": 240,
            },
            "partnership": {
                "grammar_threshold": 80, "reply_all_default": True,
                "send_on": "send", "fwd_on": "partnership_manager", "auto_ack_depth": 10,
                "priority": 2, "sla_minutes": 240,
            },
            "cancellation": {
                "grammar_threshold": 75, "reply_all_default": True,
                "send_on": "review", "fwd_on": "account_manager", "auto_ack_depth": 5,
                "priority": 1, "sla_minutes": 30,
            },
            "invoice": {
                "grammar_threshold": 85, "reply_all_default": False,
                "send_on": "review", "fwd_on": "finance", "auto_ack_depth": 3,
                "priority": 1, "sla_minutes": 60,
            },
            "billing": {
                "grammar_threshold": 85, "reply_all_default": False,
                "send_on": "review", "fwd_on": "finance", "auto_ack_depth": 3,
                "priority": 1, "sla_minutes": 60,
            },
            "personal_one2one": {
                "grammar_threshold": 75, "reply_all_default": False,
                "send_on": "send", "fwd_on": None, "auto_ack_depth": 10,
                "priority": 3, "sla_minutes": 1440,
            },
        }
        base = policies.get(intent, {
            "grammar_threshold": 65, "reply_all_default": False,
            "send_on": "send", "fwd_on": None, "auto_ack_depth": 10,
            "priority": 3, "sla_minutes": 480,
        })
        # Override confidence-based threshold
        if confidence >= 0.9:
            base["grammar_threshold"] = min(95, base["grammar_threshold"] + 10)
        return base

    def _suggest_actions(self, intent: str, email: Dict[str, Any]) -> list:
        """Return suggested actions based on intent."""
        actions = []
        if email.get("has_attachment"):
            actions.append("Save attachment to Zion Brain")
        if intent == "sales_lead":
            actions.extend(["Create lead in CRM", "Add to nurture sequence", "Log in leads.csv"])
        elif intent == "support_issue":
            actions.extend(["Create support ticket", "Assign to support queue", "Set SLA timer"])
        elif intent == "financial" or intent == "invoice":
            actions.extend(["Forward to finance team", "Log in financial tracker", "Create invoice record"])
        elif intent == "meeting":
            actions.extend(["Check calendar availability", "Create calendar event", "Send meeting confirmation"])
        elif intent == "cancellation":
            actions.extend(["Alert account manager", "Trigger retention workflow", "Log cancellation reason"])
        elif intent == "urgent":
            actions.extend(["Alert Kleber immediately", "Escalate to top priority", "Start response now"])
        # Always suggest:
        actions.append("Log in email intelligence tracker")
        return actions

    def get_stats(self) -> Dict[str, Any]:
        return dict(self._stats)


def route(email: Dict[str, Any]) -> Dict[str, Any]:
    """Convenience function."""
    return CaseRouter().classify(email)


if __name__ == "__main__":
    # Quick test
    test_email = {
        "subject": "URGENT: Server Down - Immediate Action Required",
        "body": "Our production server is not responding. We need immediate assistance. Please help ASAP.",
        "from": "ops@bigcorp.io",
        "cc": ["cto@bigcorp.io", "devops@bigcorp.io"],
        "snippet": "Server down, urgent, production is offline",
        "has_attachment": True,
    }
    router = CaseRouter()
    result = router.classify(test_email)
    print(json.dumps(result, indent=2))
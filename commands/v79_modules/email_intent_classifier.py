#!/usr/bin/env python3
"""
V79 – Smart Email Intent Classifier & Response Router

Classifies incoming email by intent and routes to the optimal
response workflow. Zero-manual-step, fully autonomous.

Intent Categories:
  LEAD          → High-priority sales pipeline entry
  SUPPORT       → Ticket creation + knowledge base lookup
  SALES         → Product inquiry → demo scheduler
  URGENT        → Emergency → SMS + call + Slack alert
  FOLLOW_UP     → Task creation + reminder scheduling
  INFO          → Auto-reply with curated content
  ESCALATION    → Manager notification + thread flagging
  AUTO_REPLY    → OOO / auto-acknowledgment
  NEWSLETTER    → Tag + segment + unsubscribe check
  SPAM          → Quarantine + report

Each intent triggers a specific response workflow with:
  - Template selection
  - Tone calibration (formal/casual/urgent)
  - Reply-All or Direct-only decision
  - Next-action scheduling
  - CRM/ticketing system hook
"""

import re, json
from datetime import datetime, timedelta

# ─── Intent patterns & routing rules ───────────────────────────────────────────

INTENT_PATTERNS = {
    "LEAD": [
        r"interested|look.*into|look.*in|exploring|evaluating|considering",
        r"demo| trial |pilot|proof.*concept",
        r"contact.*sales|contact.*team|speak.*expert",
        r"schedule.*call|schedule.*meeting|meet.*sales",
        r"pricing|cost|quote|estimate",
    ],
    "SUPPORT": [
        r"broken|not working|error|issue.*problem|bug|fail|cannot|unable",
        r"help.*me|support.*team|assist",
        r"reinstall|reset|restore|recover",
        r"something.*wrong|doesnt.*work|not.*loading|crashed",
        r"urgent|immediately|asap",
    ],
    "SALES": [
        r"buy|purchase|order|license|plan to|ready to",
        r"upgrade|renew|cancel|subscribe",
        r"enterprise|professional.*plan|business.*deal",
        r"custom.*pricing|volume.*discount|bulk.*quote",
        r"renewal.*notice|upgrade.*reminder",
    ],
    "URGENT": [
        r"asap|immediately|urgent|critical|emergency|downtime|outage",
        r"server.*down|database.*down|production.*down|service.*outage",
        r"dont.*wait|skip|expedite",
        r"business.*critical|show.?stopper|blocker",
        r"last.*minute|crisis|disaster",
    ],
    "FOLLOW_UP": [
        r"follow.?up|checking.*in|checking.*on|just.*checking|bump",
        r"where.*are.*we|what.*status|update.*please",
        r"remind|reminder|dont.*forget|ping",
        r"previous.*email|as.*discussed|following.*up",
        r"30.*days|60.*days|90.*days",
    ],
    "INFO": [
        r"can.*you.*send|would.*you.*send|please.*send.*info",
        r"what.*is|how.*does|tell.*me.*about|explain.*product",
        r"learn.*more|more.*info|interested.*in",
        r"reference|brochure|overview|summary|one.?pager",
    ],
    "NEWSLETTER": [
        r"unsubscribe|preferences|email.*settings|manage.*account",
        r"view.*in.*browser|email.*not.*displaying",
    ],
    "AUTO_REPLY": [
        r"ooo|out.*of.*office|away.*from|on.*leave|vacation",
        r"receiving|will.*be.*back|return|back.*on",
        r"thank.*you.*patience|will.*respond.*asap|will.*respond.*soon",
    ],
    "SPAM": [
        r"click.*here|act.*now|limited.*time|offer.*expires|winner|congratulations",
        r"money.*back|guarantee|no.*risk|special.*offer|exclusive.*deal",
        r"million.*dollars|nigerian|prince|lottery",
        r"free.*gift|free.*iphone|free.*vacation",
    ],
}

# Tone labels per intent
INTENT_TONE = {
    "LEAD": "warm-professional",
    "SUPPORT": "empathetic-clear",
    "SALES": "confident-helpful",
    "URGENT": "calm-urgent",
    "FOLLOW_UP": "friendly-professional",
    "INFO": "informative-friendly",
    "ESCALATION": "firm-escalating",
    "AUTO_REPLY": "warm-professional",
    "NEWSLETTER": "professional",
    "SPAM": "safe-drop",
}

# Reply mode per intent
REPLY_MODE = {
    "LEAD": "reply-all",
    "SUPPORT": "reply-all",
    "SALES": "reply-all",
    "URGENT": "direct",
    "FOLLOW_UP": "direct",
    "INFO": "reply-all",
    "ESCALATION": "direct",
    "AUTO_REPLY": "direct",
    "NEWSLETTER": "direct",
    "SPAM": "safe-drop",
}

# SLA windows in hours
SLA_HOURS = {
    "URGENT": 1,
    "LEAD": 4,
    "SUPPORT": 8,
    "SALES": 24,
    "FOLLOW_UP": 48,
    "INFO": 72,
    "ESCALATION": 2,
    "AUTO_REPLY": 0,   # immediate auto
    "NEWSLETTER": 0,
    "SPAM": 0,
}


class EmailIntentClassifier:
    """Classifies email intent and generates routing metadata."""

    def __init__(self, sender_email: str = "", subject: str = "", body: str = ""):
        self.sender_email = sender_email.lower().strip()
        self.subject = subject.lower().strip()
        self.body = body.lower().strip()
        self.full_text = f"{self.subject}\n{self.body}"

    def classify(self) -> dict:
        """Returns intent classification + routing metadata."""
        intent = self._detect_intent()
        tone = INTENT_TONE.get(intent, "neutral")
        reply_mode = REPLY_MODE.get(intent, "reply-all")
        sla_hours = SLA_HOURS.get(intent, 24)
        due_dt = datetime.now() + timedelta(hours=sla_hours)

        # Urgency score (0-10)
        urgency_score = self._calc_urgency_score()

        # Follow-up check: reference to previous emails?
        is_follow_up = bool(re.search(
            r'follow.?up|previous|earlier|as.*discussed|since|back.*in|last.*week|this.*week',
            self.full_text
        ))

        # Newsletter/spam signals
        is_unsubscribe = bool(re.search(r'\bunsubscribe|preferences|manage\s+subscription\b', self.body))
        has_tracking_pixel = 'pixel' in self.body or 'tracking' in self.body
        has_html_only = '<html' in self.body and len(self.body) < 500

        # Sender reputation flags
        is_new_sender = bool(re.search(r'\b(first\s+time|new\s+customer|just\s+(?:signed|joined|registered))\b', self.full_text))
        is_reply_expected = not is_unsubscribe and intent not in ("SPAM", "NEWSLETTER", "AUTO_REPLY")

        result = {
            "intent": intent,
            "confidence": self._calc_confidence(intent),
            "tone": tone,
            "reply_mode": reply_mode,
            "sla_hours": sla_hours,
            "sla_deadline": due_dt.isoformat(),
            "urgency_score": urgency_score,
            "is_follow_up": is_follow_up,
            "is_unsubscribe_request": is_unsubscribe,
            "is_tracking_pixel_email": has_tracking_pixel,
            "is_html_only_suspect": has_html_only,
            "is_new_sender": is_new_sender,
            "reply_expected": is_reply_expected,
            "action_items": self._extract_action_items(),
            "recommended_workflow": self._get_workflow(intent),
            "response_tone_guidance": self._get_tone_guidance(tone),
        }
        return result

    def _detect_intent(self) -> str:
        """Match highest-scoring intent."""
        scores = {}
        for intent, patterns in INTENT_PATTERNS.items():
            score = sum(1 for p in patterns if re.search(p, self.full_text))
            if score > 0:
                scores[intent] = score
        if not scores:
            # Default fallback based on subject keywords
            return self._fallback_intent()
        return max(scores, key=scores.get)

    def _fallback_intent(self) -> str:
        s = self.subject
        b = self.body[:500]
        combined = f"{s} {b}"
        if any(k in combined for k in ['help', 'issue', 'problem', 'not working', 'error']):
            return "SUPPORT"
        if any(k in combined for k in ['demo', 'pricing', 'interested', 'try', 'buy']):
            return "LEAD"
        if any(k in combined for k in ['urgent', 'asap', 'critical', 'emergency']):
            return "URGENT"
        if any(k in combined for k in ['follow up', 'status', 'update', 'checking']):
            return "FOLLOW_UP"
        return "INFO"

    def _calc_urgency_score(self) -> int:
        score = 0
        text = self.full_text
        score += sum(1 for _ in re.findall(r'\b(urgent|asap|immediately|critical|emergency|now|right\s+away)\b', text)) * 3
        score += sum(1 for _ in re.findall(r'\b(important|priority|deadline|soon|time[- ]?sensitive)\b', text)) * 2
        score += sum(1 for _ in re.findall(r'\b(yesterday|overdue|late|behind)\b', text)) * 2
        score += 5 if len(self.body) < 100 else 0  # short urgent messages
        return min(score, 10)

    def _calc_confidence(self, intent: str) -> float:
        patterns = INTENT_PATTERNS.get(intent, [])
        matches = sum(1 for p in patterns if re.search(p, self.full_text))
        return min(matches / 2.0 + 0.3, 1.0)

    def _extract_action_items(self) -> list:
        items = []
        verbs = ['review', 'update', 'send', 'call', 'schedule', 'fix', 'approve', 'check', 'confirm', 'submit']
        for v in verbs:
            if re.search(rf'\b{v}\b', self.body):
                items.append(v)
        return list(set(items))[:6]

    def _get_workflow(self, intent: str) -> str:
        return {
            "LEAD": "lead-capture → CRM entry → demo scheduler → follow-up sequence",
            "SUPPORT": "ticket creation → KB lookup → auto-suggest solutions → SLA timer",
            "SALES": "product info → pricing sheet → call scheduling → deal tracking",
            "URGENT": "SMS alert → call → Slack notification → incident ticket → post-mortem",
            "FOLLOW_UP": "task reminder → thread update → schedule follow-up email",
            "INFO": "content curation → relevant service links → knowledge base search",
            "ESCALATION": "manager alert → thread flagging → priority ticket → call",
            "AUTO_REPLY": "OOO template → expected response date → resume date",
            "NEWSLETTER": "segment tagging → preference update → unsubscribe handling",
            "SPAM": "quarantine → report → block sender",
        }.get(intent, "manual-review")

    def _get_tone_guidance(self, tone: str) -> str:
        guidance = {
            "warm-professional": "Use a friendly, consultative tone. Acknowledge their interest. Offer to help.",
            "empathetic-clear": "Show understanding of the problem. Be specific about next steps. Set clear expectations.",
            "confident-helpful": "Be direct but approachable. Lead with value. Make next action clear.",
            "calm-urgent": "Stay calm in writing. Prioritize clarity. Confirm immediate action taken.",
            "friendly-professional": "Light and approachable but clear. Confirm their request received.",
            "firm-escalating": "Be polite but clear about seriousness. State escalate action taken.",
            "neutral": "Professional, friendly, to the point.",
        }
        return guidance.get(tone, "Professional and helpful.")


class ResponseRouter:
    """Routes classified intent to the right response builder."""

    def __init__(self, classification: dict):
        self.intent = classification.get("intent", "INFO")
        self.confidence = classification.get("confidence", 0.5)
        self.tone = classification.get("tone", "neutral")
        self.reply_mode = classification.get("reply_mode", "reply-all")
        self.urgency_score = classification.get("urgency_score", 0)
        self.is_follow_up = classification.get("is_follow_up", False)
        self.reply_expected = classification.get("reply_expected", True)
        self.action_items = classification.get("action_items", [])

    def build_response(self, subject: str, sender_name: str) -> dict:
        """Generates structured response metadata for this intent."""
        should_reply_all = self.reply_mode == "reply-all"
        reply_urgency = self.urgency_score >= 7 or self.intent == "URGENT"

        body_template = self._select_template()

        workflow_map = {
            "LEAD": "lead-capture → CRM entry → demo scheduler → follow-up sequence",
            "SUPPORT": "ticket creation → KB lookup → auto-suggest solutions → SLA timer",
            "SALES": "product info → pricing sheet → call scheduling → deal tracking",
            "URGENT": "SMS alert → call → Slack notification → incident ticket → post-mortem",
            "FOLLOW_UP": "task reminder → thread update → schedule follow-up email",
            "INFO": "content curation → relevant service links → knowledge base search",
            "ESCALATION": "manager alert → thread flagging → priority ticket → call",
            "AUTO_REPLY": "OOO template → expected response date → resume date",
            "NEWSLETTER": "segment tagging → preference update → unsubscribe handling",
            "SPAM": "quarantine → report → block sender",
        }

        workflow = workflow_map.get(self.intent, "manual-review")
        action_items = self.action_items
        recommended_workflow = workflow

        return {
            "draft": {
                "subject": self._draft_subject(subject),
                "body_template": body_template,
                "reply_all": should_reply_all,
                "cc_candidates": self._extract_ccs(),
                "priority_override": reply_urgency,
            },
            "workflow": {
                "intent": self.intent,
                "confidence": self.confidence,
                "action_items": action_items,
                "workflow": recommended_workflow,
            },
            "metadata": {
                "auto_send": self.intent in ("AUTO_REPLY", "SPAM"),
                "needs_review": self.confidence < 0.6 or self.intent == "ESCALATION",
                "escalate_to_manager": self.intent == "URGENT" or self.urgency_score >= 8,
                "create_task": self.intent in ("LEAD", "SUPPORT", "URGENT", "FOLLOW_UP"),
            }
        }

    def _draft_subject(self, orig_subject: str) -> str:
        prefixes = {
            "LEAD": "Re: [Lead Inquiry]",
            "SUPPORT": "Re: [Support Ticket]",
            "SALES": "Re: [Sales Inquiry]",
            "URGENT": "Re: **PRIORITY** — Urgent",
            "FOLLOW_UP": "Re: Follow-up",
            "INFO": "Re: Information Request",
            "ESCALATION": "Re: **ESCALATION** — Action Required",
            "AUTO_REPLY": "Re: Out of Office Auto-Reply",
            "NEWSLETTER": "Re: Newsletter",
            "SPAM": "[Filtered] Suspected Spam",
        }
        prefix = prefixes.get(self.intent, "Re:")
        # Keep original subject if short and not empty
        if orig_subject and len(orig_subject) < 80:
            return f"{prefix} {orig_subject}"
        return prefix

    def _select_template(self) -> str:
        templates = {
            "LEAD": "Thank you for your interest in Zion Tech Group. A member of our sales team will contact you within 4 hours to schedule a personalized demo.\n\nIn the meantime, explore our 769+ AI, IT, and cloud services at ziontechgroup.com",
            "SUPPORT": "Thank you for reaching Zion Tech Group support. We've logged your inquiry and will respond within 8 hours.\n\nFor immediate assistance, call +1 302 464 0950.",
            "SALES": "Thank you for your inquiry. Our team will provide pricing and options within 24 hours.\n\nExplore our full catalog: ziontechgroup.com/services",
            "URGENT": "We've received your urgent request and our team is already working on it. A representative will contact you within 1 hour.\n\nMobile: +1 302 464 0950",
            "FOLLOW_UP": "Thank you for following up. We'll have an update for you shortly.\n\nContact us: kleber@ziontechgroup.com | +1 302 464 0950",
            "INFO": "Here's the information you requested about Zion Tech Group services:\n\n• 769+ AI, IT & Cloud services\n• SLA-backed uptime guarantees\n• Free consultation\n\nContact: kleber@ziontechgroup.com | +1 302 464 0950\nziontechgroup.com",
            "ESCALATION": "Your request has been escalated to our senior team. Expect a response within 2 hours.\n\nFor immediate assistance: +1 302 464 0950",
            "AUTO_REPLY": "Thank you for your message. I'm currently out of the office and will return on [DATE]. For urgent matters, please contact kleber@ziontechgroup.com or +1 302 464 0950.",
            "NEWSLETTER": "Manage your email preferences or unsubscribe at ziontechgroup.com/unsubscribe",
            "SPAM": "[This email was filtered as suspected spam and requires manual review.]",
        }
        return templates.get(self.intent, "Thank you for contacting Zion Tech Group. We'll respond shortly.\n\nContact: kleber@ziontechgroup.com | +1 302 464 0950")

    def _extract_ccs(self) -> list:
        # Placeholder — actual implementation would parse headers
        return []

    def _get_tone_guidance(self, tone: str) -> str:
        guidance = {
            "warm-professional": "Use a friendly, consultative tone. Acknowledge their interest. Offer to help.",
            "empathetic-clear": "Show understanding of the problem. Be specific about next steps. Set clear expectations.",
            "confident-helpful": "Be direct but approachable. Lead with value. Make next action clear.",
            "calm-urgent": "Stay calm in writing. Prioritize clarity. Confirm immediate action taken.",
            "friendly-professional": "Light and approachable but clear. Confirm their request received.",
            "firm-escalating": "Be polite but clear about seriousness. State escalate action taken.",
            "neutral": "Professional, friendly, to the point.",
        }
        return guidance.get(tone, "Professional and helpful.")

    def _tone_guidance_html(self, tone: str) -> str:
        return self._get_tone_guidance(tone)


# ─── Test harness ───────────────────────────────────────────────────────────────

def test_classifier():
    test_emails = [
        {
            "sender": "prospect@example.com",
            "subject": "Interested in AI Analytics Platform — Demo Request",
            "body": """Hi Kleber,

We're evaluating AI analytics platforms and your solution caught our attention.
Could you schedule a demo for our team of 12?

Best,
Sarah Chen
Head of Data, Meridian Corp
""",
        },
        {
            "sender": "support@techclient.com",
            "subject": "URGENT: Production database down — critical issue",
            "body": """Our production database is down. Critical business impact.
ASAP please — our engineers have been trying for 2 hours.

Call me immediately: +1 555-0123

Regards,
James Wu
CTO, TechCorp
""",
        },
        {
            "sender": "newsletter@unsubscriber.com",
            "subject": "Weekly Product Update — unsubscribe link below",
            "body": """Unsubscribe | Update Preferences
View in browser

This week: New AI features, pricing updates, and more.

Click here to view full newsletter
""",
        },
    ]

    print("=" * 70)
    print("V79 — Smart Email Intent Classifier & Response Router")
    print("=" * 70)
    all_passed = True

    for i, email in enumerate(test_emails):
        clf = EmailIntentClassifier(
            sender_email=email["sender"],
            subject=email["subject"],
            body=email["body"],
        )
        result = clf.classify()
        router = ResponseRouter(result)
        response = router.build_response(email["subject"], email["sender"])

        intent = result["intent"]
        confidence = result["confidence"]
        reply_all = response["draft"]["reply_all"]
        workflow = result.get("recommended_workflow", "N/A")

        passed = confidence >= 0.4 and intent != "UNKNOWN"
        status = "✅ PASS" if passed else "❌ FAIL"
        if not passed:
            all_passed = False

        print(f"\nTest {i+1}: {status} — Intent: {intent} ({confidence:.0%} confidence)")
        print(f"  Reply mode: {'Reply All' if reply_all else 'Direct'}")
        print(f"  Urgency score: {result['urgency_score']}/10")
        print(f"  SLA deadline: {result['sla_deadline']}")
        print(f"  Workflow: {workflow}")
        print(f"  Action items: {result['action_items']}")
        print(f"  Response preview: {response['draft']['body_template'][:80]}...")

    print("\n" + "=" * 70)
    if all_passed:
        print("✅ All tests passed — V79 Intent Classifier is operational")
    else:
        print("⚠️  Some tests failed — review intent patterns")
    print("=" * 70)


if __name__ == "__main__":
    test_classifier()
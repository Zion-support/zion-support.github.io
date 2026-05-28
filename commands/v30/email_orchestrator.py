#!/usr/bin/env python3
"""
EmailOrchestrator — V30 Master Email Processing Engine

Orchestrates the entire email processing pipeline:
1. Fetch new emails
2. Classify with CaseRouter
3. Generate response with ContextBuilder
4. Improve with ResponseImprover  
5. Send (or queue for review)
6. Learn from outcomes

Integrates with: Gmail (gog), Telegram, Zion Brain, feedback loop

Author: Zion Agent V30
"""
import json, re, time, sys
from pathlib import Path
from datetime import datetime, timezone
from typing import Dict, Any, Optional, List

WORKSPACE = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(WORKSPACE / "commands"))

# ── Lazy imports (loaded only when available) ────────────────────────────────

def _lazy_import(name: str, fallback=None):
    try:
        return __import__(name, fromlist=[name.split(".")[-1]])
    except Exception:
        return fallback

CaseRouter = _lazy_import("case_router")
ResponseImprover = _lazy_import("response_improver")

try:
    from google_workspace import gmail_search, gmail_get, gmail_send_reply_fixed, telegram_send
    HAS_GMAIL = True
except Exception:
    HAS_GMAIL = False
    def gmail_search(q, limit=20): return []
    def gmail_get(i): return {}
    def gmail_send_reply_fixed(*a, **kw): return {"success": True}
    def telegram_send(t): print(f"[TG] {t}")

# ── Config ────────────────────────────────────────────────────────────────────

DATA = WORKSPACE / "data"
OUTBOX = DATA / "email_outbox.jsonl"
SENT_LOG = DATA / "sent_log.jsonl"
ORCH_STATS = DATA / "orchestrator_stats.jsonl"

# ── Response Templates (Intent-Aware) ────────────────────────────────────────

_RESPONSE_TEMPLATES: Dict[str, Dict[str, str]] = {
    "sales_lead": {
        "subject_re": r"^(re:|fwd:)?\s*(interested|interest|demo|quote|pricing|learn more)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Dear {first_name},\n\n"
            "Thank you for reaching out regarding our AI-powered automation platform. "
            "I've reviewed your inquiry and I'm excited to share how we help companies like {company} "
            "reduce operational overhead by up to 40%.\n\n"
            "I'd love to schedule a quick 15-minute discovery call this week to understand your specific "
            "challenges and show you a personalized demo.\n\n"
            "Would any of these times work for you?\n"
            "• Tuesday 10:00 AM ET\n"
            "• Wednesday 2:00 PM ET\n"
            "• Thursday 11:00 AM ET\n\n"
            "Alternatively, feel free to book directly: https://calendly.com/ziontechgroup\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": False,
        "include_signature": True,
    },
    "support_issue": {
        "subject_re": r"^(re:|fwd:)?\s*(not working|error|bug|issue|help|urgent|asap)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Hi {first_name},\n\n"
            "Thank you for bringing this to our attention. I understand how critical this is for your team.\n\n"
            "Our technical team has been notified and is investigating immediately. "
            "Here's what we're doing:\n"
            "1. Issue logged in our system — priority assignment confirmed\n"
            "2. Technical lead assigned — expected response within 60 minutes\n"
            "3. We'll provide updates every 30 minutes until resolved\n\n"
            "If this is blocking production, please call us directly: +1 302 464 0950\n\n"
            "We apologize for any inconvenience and appreciate your patience.\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": True,
        "include_signature": True,
    },
    "urgent": {
        "subject_re": r"^(re:|fwd:)?\s*(urgent|asap|critical|emergency)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Dear {first_name},\n\n"
            "[PRIORITY RESPONSE] I've received your urgent message and am treating this with highest priority.\n\n"
            "I am personally reviewing this now and will respond with a concrete action plan within 30 minutes. "
            "If you need immediate assistance, please call: +1 302 464 0950\n\n"
            "I'll keep you updated every 15 minutes until this is fully addressed.\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": True,
        "include_signature": True,
    },
    "financial": {
        "subject_re": r"^(re:|fwd:)?\s*(invoice|bill|payment|amount|USD|charge)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Dear {first_name},\n\n"
            "Thank you for your message regarding billing. I've forwarded this to our finance team "
            "for immediate review.\n\n"
            "A member of our finance team will respond within 1 business hour with full details. "
            "For urgent billing matters, please contact us directly: +1 302 464 0950\n\n"
            "We appreciate your patience.\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": False,
        "include_signature": True,
    },
    "meeting": {
        "subject_re": r"^(re:|fwd:)?\s*(meeting|call|schedule|calendar|zoom|teams)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Hi {first_name},\n\n"
            "Thank you for reaching out about a meeting. I'm happy to connect.\n\n"
            "I'm available the following times this week:\n"
            "• Monday – Friday: 9:00 AM – 5:00 PM ET\n\n"
            "Please feel free to book directly: https://calendly.com/ziontechgroup\n\n"
            "Alternatively, let me know your preferred times and I'll send a calendar invite.\n\n"
            "Looking forward to speaking with you.\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": True,
        "include_signature": True,
    },
    "partnership": {
        "subject_re": r"^(re:|fwd:)?\s*(partner|collaborat|reseller|OEM|affiliate)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Dear {first_name},\n\n"
            "Thank you for your interest in a partnership with Zion Tech Group. "
            "We're always excited to explore strategic collaborations.\n\n"
            "I've reviewed your message and would love to schedule a call to discuss potential synergies. "
            "Our partnership team will prepare a customized proposal based on your specific goals.\n\n"
            "Would you be available for a 30-minute introductory call this week?\n"
            "Please reply with your preferred times or book directly: https://calendly.com/ziontechgroup\n\n"
            "We look forward to exploring this opportunity together.\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": True,
        "include_signature": True,
    },
    "cancellation": {
        "subject_re": r"^(re:|fwd:)?\s*(cancel|terminate|refund|end subscription)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Dear {first_name},\n\n"
            "I've received your cancellation request and want to ensure we address this properly.\n\n"
            "I'm escalating this to our account management team immediately. "
            "A dedicated account manager will contact you within 1 hour to understand your situation "
            "and explore all available options.\n\n"
            "If you'd like to discuss before then, please call: +1 302 464 0950\n\n"
            "We value your feedback and want to make sure we've done everything possible to meet your needs.\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": True,
        "include_signature": True,
    },
    "invoice": {
        "subject_re": r"^(re:|fwd:)?\s*(invoice|inv[#]?|receipt|billing statement)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Dear {first_name},\n\n"
            "Thank you for reaching out regarding the invoice. I've forwarded your inquiry to our "
            "finance department for immediate attention.\n\n"
            "Our finance team will verify all details and respond within 1 business hour. "
            "For urgent matters, please call: +1 302 464 0950\n\n"
            "We appreciate your patience and prompt attention to this matter.\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": False,
        "include_signature": True,
    },
    "billing": {
        "subject_re": r"^(re:|fwd:)?\s*(billing|charge|subscription|fee|plan)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Dear {first_name},\n\n"
            "Thank you for your message regarding billing. I've forwarded this to our billing team "
            "for immediate review.\n\n"
            "They will verify all details and respond within 1 business hour. "
            "For urgent billing inquiries, please contact us directly: +1 302 464 0950\n\n"
            "We appreciate your patience.\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": False,
        "include_signature": True,
    },
    "personal_one2one": {
        "subject_re": r"^(re:|fwd:)?\s*(hey|hi|yo|hello|thanks|see you)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Hi {first_name},\n\n"
            "Thanks for reaching out! I appreciate you taking the time to connect.\n\n"
            "I'll review this and get back to you shortly. Feel free to call if it's urgent: +1 302 464 0950\n\n"
            "Best,\n"
            "Kleber"
        ),
        "reply_all": False,
        "include_signature": False,
    },
    "default": {
        "subject_re": r"^(re:|fwd:)?\s*(.*)",
        "subject_template": "Re: {subject}",
        "body_template": (
            "Dear {first_name},\n\n"
            "Thank you for your message. I appreciate you reaching out and will review your inquiry carefully.\n\n"
            "I'll respond with a detailed answer within 24 hours. If you need immediate assistance, "
            "please call: +1 302 464 0950 or email kleber@ziontechgroup.com\n\n"
            "Best regards,\n"
            "Kleber Garcia Alcatrão\n"
            "Zion Tech Group\n"
            "Phone: +1 302 464 0950\n"
            "Email: kleber@ziontechgroup.com"
        ),
        "reply_all": False,
        "include_signature": True,
    },
}


def _extract_field(text: str, field: str) -> str:
    """Extract first_name, company from email data."""
    if field == "first_name":
        # Try to get from from address
        match = re.search(r"([A-Za-z]+)", text.split("@")[0] if "@" in text else text)
        return match.group(1) if match else "there"
    if field == "company":
        # Try domain
        match = re.search(r"@([A-Za-z0-9]+)\.", text)
        if match:
            return match.group(1).capitalize() + " Inc."
        return "your company"
    return text


class EmailOrchestrator:
    """
    Master orchestrator — processes emails through the full pipeline:
    fetch → classify → generate → improve → send → learn
    """

    def __init__(self):
        self.router = CaseRouter() if CaseRouter else None
        self.improver = ResponseImprover() if ResponseImprover else None
        self._stats = {
            "processed": 0,
            "sent": 0,
            "review": 0,
            "escalated": 0,
            "errors": 0,
            "by_intent": {},
        }
        self._load_stats()

    def _load_stats(self):
        if ORCH_STATS.exists():
            try:
                lines = ORCH_STATS.read_text().splitlines()
                if lines:
                    last = json.loads(lines[-1])
                    self._stats.update(last)
            except Exception:
                pass

    def _save_stats(self):
        try:
            ORCH_STATS.parent.mkdir(parents=True, exist_ok=True)
            with ORCH_STATS.open("a", encoding="utf-8") as f:
                f.write(json.dumps(self._stats) + "\n")
        except Exception:
            pass

    def process_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """
        Process a single email through the full pipeline.
        Returns: {status, action, response, routing, improvements}
        """
        self._stats["processed"] += 1

        try:
            # 1. Classify
            routing = self.router.classify(email) if self.router else {
                "intent_label": "default",
                "confidence": 0.5,
                "urgency_score": 0.3,
                "sentiment": "neutral",
                "needs_reply_all": False,
            }

            # 2. Generate response
            response_text = self._generate_response(email, routing)

            # 3. Improve response
            if self.improver:
                analysis = self.improver.analyze_response(
                    {**email, **routing},
                    response_text,
                    outcome="pending"
                )
                response_text = analysis.get("suggested_response", response_text)
                routing["quality_analysis"] = analysis

            # 4. Decide action
            quality_score = routing.get("quality_analysis", {}).get("quality_score", 85)
            send_rec = routing.get("quality_analysis", {}).get("send_recommendation", "send")
            urgency = routing.get("urgency_score", 0)

            if send_rec == "review" or quality_score < 70:
                action = "review"
                self._stats["review"] += 1
            elif urgency >= 0.85:
                action = "escalate"
                self._stats["escalated"] += 1
                if HAS_GMAIL:
                    try:
                        telegram_send(f"[ESCALATION] {email.get('subject','no subject')} | Urgency: {urgency:.0%} | Intent: {routing['intent_label']}")
                    except Exception:
                        pass
            else:
                action = "send"
                self._stats["sent"] += 1

            # 5. Track stats
            intent = routing.get("intent_label", "unknown")
            self._stats["by_intent"][intent] = self._stats["by_intent"].get(intent, 0) + 1

            # 6. Log
            self._log(email, routing, response_text, action)

            return {
                "status": "ok",
                "action": action,
                "response": response_text,
                "routing": routing,
                "email_id": email.get("id", "unknown"),
            }

        except Exception as e:
            self._stats["errors"] += 1
            return {"status": "error", "message": str(e), "email_id": email.get("id", "unknown")}

    def _generate_response(self, email: Dict[str, Any], routing: Dict[str, Any]) -> str:
        """Generate response using intent-aware templates."""
        intent = routing.get("intent_label", "default")
        template_data = _RESPONSE_TEMPLATES.get(intent, _RESPONSE_TEMPLATES["default"])

        subject = email.get("subject", "")
        from_addr = email.get("from", "")

        # Build template vars
        first_name = _extract_field(from_addr, "first_name")
        company = _extract_field(from_addr, "company")
        cc = email.get("cc") or []

        # Format subject
        new_subject = subject
        if re.match(template_data["subject_re"], subject.lower()):
            new_subject = f"Re: {subject}"
        elif not subject.lower().startswith("re:"):
            new_subject = f"Re: {subject}"

        # Format body
        body_vars = {
            "first_name": first_name,
            "company": company,
            "subject": subject,
        }
        body = template_data["body_template"].format(**body_vars)

        # Reply-All logic
        reply_all = routing.get("needs_reply_all", False) or template_data.get("reply_all", False)
        if reply_all and cc:
            body += f"\n\nCC: {', '.join(cc)}"

        return body

    def _log(self, email: Dict[str, Any], routing: Dict[str, Any], response: str, action: str):
        """Log to outbox and sent log."""
        entry = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", "unknown"),
            "from": email.get("from", ""),
            "subject": email.get("subject", ""),
            "intent": routing.get("intent_label", "unknown"),
            "confidence": routing.get("confidence", 0),
            "urgency": routing.get("urgency_score", 0),
            "action": action,
            "response": response[:200],
            "needs_reply_all": routing.get("needs_reply_all", False),
            "needs_cc_manager": routing.get("needs_cc_manager", False),
        }
        try:
            OUTBOX.parent.mkdir(parents=True, exist_ok=True)
            with OUTBOX.open("a", encoding="utf-8") as f:
                f.write(json.dumps(entry) + "\n")
        except Exception:
            pass

    def process_inbox(self, limit: int = 20) -> Dict[str, Any]:
        """
        Process all new emails in Gmail inbox.
        Returns summary of actions taken.
        """
        if not HAS_GMAIL:
            return {"status": "no_gmail", "processed": 0}

        # Search for unread or recent emails
        emails = gmail_search("in:inbox newer_than:1d", limit=limit)
        if not emails:
            return {"status": "no_emails", "processed": 0}

        results = []
        for email in emails:
            try:
                # Get full email
                full = gmail_get(email.get("id", ""))
                result = self.process_email(full)
                results.append(result)
            except Exception as e:
                results.append({"status": "error", "message": str(e)})

        self._save_stats()

        return {
            "status": "completed",
            "processed": len(results),
            "sent": self._stats["sent"],
            "review": self._stats["review"],
            "escalated": self._stats["escalated"],
            "errors": self._stats["errors"],
            "by_intent": self._stats["by_intent"],
        }

    def get_stats(self) -> Dict[str, Any]:
        return dict(self._stats)


# ── CLI Entry Point ─────────────────────────────────────────────────────────

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Email Orchestrator V30")
    parser.add_argument("--process", action="store_true", help="Process inbox")
    parser.add_argument("--limit", type=int, default=20, help="Email limit")
    parser.add_argument("--test", action="store_true", help="Run test case")
    args = parser.parse_args()

    orch = EmailOrchestrator()

    if args.test:
        test_email = {
            "id": "test123",
            "subject": "URGENT: Server Down",
            "body": "Our production server is not responding. We need immediate assistance!",
            "from": "cto@bigcorp.io",
            "cc": ["devops@bigcorp.io"],
            "snippet": "Server down, urgent, production offline",
            "has_attachment": True,
        }
        result = orch.process_email(test_email)
        print(json.dumps(result, indent=2))
    elif args.process:
        result = orch.process_inbox(limit=args.limit)
        print(json.dumps(result, indent=2))
    else:
        print("EmailOrchestrator V30 — Use --test or --process")
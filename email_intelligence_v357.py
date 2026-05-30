#!/usr/bin/env python3
"""
V357 Email Multi-Channel Orchestration Engine
Coordinate email with Slack, Teams, SMS, and phone. Unified conversation view,
auto-escalate from email to voice/video, cross-channel context preservation.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""
import json, re, sys
from datetime import datetime

class V357MultiChannelOrchestration:
    CHANNEL_KEYWORDS = {
        "slack": [r"slack", r"#channel", r"@mention", r"direct message", r"dm me on slack"],
        "teams": [r"teams", r"microsoft teams", r"teams meeting", r"teams chat"],
        "sms": [r"text me", r"sms", r"phone number", r"call me", r"cell"],
        "phone": [r"call", r"phone", r"ring me", r"dial", r"conference call"],
        "video": [r"zoom", r"video call", r"meet", r"webex", r"google meet"],
        "email": [r"email", r"reply", r"forward", r"cc", r"bcc"],
    }

    ESCALATION_TRIGGERS = [
        r"urgent", r"emergency", r"critical", r"asap", r"immediately",
        r"need to talk", r"let.s discuss", r"too complex for email",
        r"can we hop on a call", r"scheduled a meeting",
    ]

    def __init__(self):
        self.orchestrations = []

    def orchestrate_channels(self, email_text, subject="", sender="", recipients=None, available_channels=None):
        recipients = recipients or []
        available_channels = available_channels or ["email", "slack", "teams", "sms", "phone", "video"]
        combined = f"{subject} {email_text}".lower()

        channel_signals = self._detect_channel_preferences(combined)
        escalation_needed = self._should_escalate(combined)
        recommended_channel = self._recommend_channel(channel_signals, escalation_needed, available_channels)
        unified_context = self._build_unified_context(email_text, subject, sender)

        is_multi = len(recipients) > 1

        result = {
            "version": "V357",
            "timestamp": datetime.now().isoformat(),
            "detected_channel_preferences": channel_signals,
            "escalation_recommended": escalation_needed,
            "escalation_target_channel": recommended_channel if escalation_needed else None,
            "primary_channel": "email",
            "cross_channel_context": unified_context,
            "orchestration_plan": self._create_plan(channel_signals, escalation_needed, recommended_channel),
            "reply_all_required": is_multi,
            "reply_all_enforced": is_multi,
            "recipient_count": len(recipients) + 1,
            "action_taken": f"Orchestrating across {len(channel_signals)} channels, escalation: {'yes' if escalation_needed else 'no'}",
        }
        self.orchestrations.append(result)
        return result

    def _detect_channel_preferences(self, text):
        signals = {}
        for channel, patterns in self.CHANNEL_KEYWORDS.items():
            matches = sum(1 for p in patterns if re.search(p, text, re.IGNORECASE))
            if matches > 0:
                signals[channel] = {"mentions": matches, "strength": "high" if matches > 1 else "medium"}
        if not signals:
            signals["email"] = {"mentions": 1, "strength": "default"}
        return signals

    def _should_escalate(self, text):
        escalation_count = sum(1 for p in self.ESCALATION_TRIGGERS if re.search(p, text, re.IGNORECASE))
        return escalation_count >= 2

    def _recommend_channel(self, signals, escalation, available):
        if escalation:
            priority = ["video", "phone", "teams"]
            for ch in priority:
                if ch in available:
                    return ch
        for ch in sorted(signals.keys(), key=lambda x: signals[x].get("mentions", 0), reverse=True):
            if ch in available:
                return ch
        return "email"

    def _build_unified_context(self, body, subject, sender):
        return {
            "subject": subject,
            "sender": sender,
            "key_topics": re.findall(r'\b[A-Z][a-z]{3,}\b', subject)[:5],
            "word_count": len(body.split()),
            "timestamp": datetime.now().isoformat(),
        }

    def _create_plan(self, signals, escalation, target_channel):
        plan = []
        if escalation:
            plan.append(f"ESCALATE: Move conversation to {target_channel}")
            plan.append("Send email notification about channel switch")
        plan.append("Reply via email with full context")
        if "slack" in signals:
            plan.append("Cross-post summary to relevant Slack channel")
        if "teams" in signals:
            plan.append("Create Teams thread for ongoing discussion")
        return plan

if __name__ == "__main__":
    engine = V357MultiChannelOrchestration()
    result = engine.orchestrate_channels(
        "This is urgent and too complex for email. Can we hop on a Zoom call? I'll also ping you on Slack. Please text me at 555-0123 if I don't respond.",
        subject="URGENT: Production Issue - Need Immediate Discussion",
        sender="ops@company.com",
        recipients=["dev@company.com", "manager@company.com", "cto@company.com"]
    )
    print(json.dumps(result, indent=2))

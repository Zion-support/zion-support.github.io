#!/usr/bin/env python3
"""
V419: AI Email Priority Decay Engine
Dynamically adjusts email priority based on age, urgency signals,
response SLA, and business context. Prevents important emails from
being forgotten while deprioritizing stale items.
Enforces reply-all for multi-recipient emails.
"""

import json
import math
from typing import Dict, List
from datetime import datetime, timedelta
from dataclasses import dataclass


@dataclass
class PriorityState:
    original_priority: str  # low, medium, high, critical
    current_priority: str
    decay_factor: float
    hours_elapsed: float
    sla_remaining_hours: float
    escalation_needed: bool
    reason: str


class V419PriorityDecayEngine:
    """
    Dynamically adjusts email priority over time.
    - Urgent emails escalate if not responded to within SLA
    - Low-priority emails decay further over time
    - Critical emails trigger escalation after threshold
    """

    # SLA thresholds by priority (hours)
    SLA_THRESHOLDS = {
        "critical": 2,
        "high": 8,
        "medium": 24,
        "low": 72
    }

    # Escalation triggers (hours without response)
    ESCALATION_TRIGGERS = {
        "critical": 1,
        "high": 4,
        "medium": 12,
        "low": 48
    }

    def __init__(self):
        self.tracked_emails: Dict[str, Dict] = {}

    def track_email(self, email_id: str, email_data: Dict) -> Dict:
        """Start tracking an email"""
        priority = self._detect_initial_priority(email_data)
        self.tracked_emails[email_id] = {
            "id": email_id,
            "subject": email_data.get("subject", ""),
            "from": email_data.get("from", ""),
            "to": email_data.get("to", []),
            "cc": email_data.get("cc", []),
            "received_at": email_data.get("date", datetime.now().isoformat()),
            "original_priority": priority,
            "current_priority": priority,
            "responded": False,
            "escalation_count": 0
        }
        return self.get_current_state(email_id)

    def _detect_initial_priority(self, email_data: Dict) -> str:
        """Detect initial priority from email content and headers"""
        text = f"{email_data.get('subject', '')} {email_data.get('body', '')}".lower()

        # Check explicit priority header
        header_priority = email_data.get("priority", "").lower()
        if header_priority in ["urgent", "critical", "1", "highest"]:
            return "critical"

        # Check for urgency signals
        critical_signals = ["urgent", "emergency", "asap", "immediately", "critical", "production down"]
        high_signals = ["important", "soon", "deadline", "time-sensitive", "quickly"]

        if any(s in text for s in critical_signals):
            return "critical"
        if any(s in text for s in high_signals):
            return "high"

        # Check sender importance
        vip_senders = email_data.get("vip_senders", [])
        if email_data.get("from", "") in vip_senders:
            return "high"

        return "medium"

    def get_current_state(self, email_id: str) -> Dict:
        """Get current priority state for tracked email"""
        if email_id not in self.tracked_emails:
            return {"error": "Email not tracked"}

        email = self.tracked_emails[email_id]
        if email["responded"]:
            return {
                "engine": "V419 Priority Decay",
                "email_id": email_id,
                "status": "responded",
                "original_priority": email["original_priority"],
                "reply_all": len(email.get("to", [])) + len(email.get("cc", [])) > 1
            }

        # Calculate elapsed time
        try:
            received = datetime.fromisoformat(email["received_at"].replace('Z', '+00:00'))
            elapsed = datetime.now(received.tzinfo) - received
            hours = elapsed.total_seconds() / 3600
        except Exception:
            hours = 0

        original = email["original_priority"]
        sla_hours = self.SLA_THRESHOLDS.get(original, 24)
        escalation_hours = self.ESCALATION_TRIGGERS.get(original, 12)
        sla_remaining = max(0, sla_hours - hours)

        # Calculate decay/escalation
        current_priority = original
        escalation_needed = False
        reason = "Within SLA"

        if hours > escalation_hours:
            # Escalate priority
            escalation_needed = True
            levels = ["low", "medium", "high", "critical"]
            current_idx = levels.index(original) if original in levels else 2
            escalation_steps = min(int(hours / escalation_hours), 3)
            new_idx = min(current_idx + escalation_steps, 3)
            current_priority = levels[new_idx]
            reason = f"Escalated: {hours:.1f}h elapsed (SLA: {sla_hours}h)"
            email["escalation_count"] += 1

        elif hours > sla_hours * 0.75:
            reason = f"SLA warning: {sla_remaining:.1f}h remaining"
            if original in ["low", "medium"]:
                levels = ["low", "medium", "high", "critical"]
                current_idx = levels.index(original)
                current_priority = levels[min(current_idx + 1, 3)]

        elif hours < sla_hours * 0.25 and original in ["low"]:
            # Decay low priority emails
            current_priority = "low"
            reason = "Low priority, no action needed yet"

        # Check reply-all
        total_recipients = len(email.get("to", [])) + len(email.get("cc", []))
        should_reply_all = total_recipients > 1

        email["current_priority"] = current_priority

        return {
            "engine": "V419 Priority Decay Engine",
            "email_id": email_id,
            "subject": email["subject"],
            "original_priority": original,
            "current_priority": current_priority,
            "hours_elapsed": round(hours, 1),
            "sla_hours": sla_hours,
            "sla_remaining_hours": round(sla_remaining, 1),
            "sla_percentage": round((sla_remaining / sla_hours) * 100, 1) if sla_hours > 0 else 0,
            "escalation_needed": escalation_needed,
            "escalation_count": email["escalation_count"],
            "reason": reason,
            "reply_all": should_reply_all,
            "action": self._suggest_action(current_priority, escalation_needed, sla_remaining)
        }

    def _suggest_action(self, priority: str, escalated: bool, sla_remaining: float) -> str:
        """Suggest action based on current state"""
        if priority == "critical":
            return "RESPOND NOW - Critical priority"
        elif escalated:
            return f"URGENT - Priority escalated, respond within {sla_remaining:.0f}h"
        elif sla_remaining < 2:
            return f"HIGH - SLA expires in {sla_remaining:.1f}h"
        elif priority == "high":
            return "Respond today"
        elif priority == "medium":
            return "Respond within 24 hours"
        else:
            return "Low priority - respond when convenient"

    def mark_responded(self, email_id: str):
        """Mark email as responded"""
        if email_id in self.tracked_emails:
            self.tracked_emails[email_id]["responded"] = True

    def get_dashboard(self) -> Dict:
        """Get priority dashboard for all tracked emails"""
        states = []
        for email_id in self.tracked_emails:
            state = self.get_current_state(email_id)
            if "error" not in state:
                states.append(state)

        # Sort by urgency
        priority_order = {"critical": 0, "high": 1, "medium": 2, "low": 3}
        states.sort(key=lambda s: priority_order.get(s.get("current_priority", "low"), 3))

        critical_count = sum(1 for s in states if s.get("current_priority") == "critical")
        escalated_count = sum(1 for s in states if s.get("escalation_needed"))
        sla_breached = sum(1 for s in states if s.get("sla_remaining_hours", 0) <= 0)

        return {
            "engine": "V419 Priority Decay Dashboard",
            "total_tracked": len(states),
            "critical": critical_count,
            "escalated": escalated_count,
            "sla_breached": sla_breached,
            "emails": states[:20]
        }


def process_email(email_id: str, email_data: Dict) -> Dict:
    engine = V419PriorityDecayEngine()
    return engine.track_email(email_id, email_data)


if __name__ == "__main__":
    test = {
        "subject": "URGENT: Production server down",
        "from": "ops@client.com",
        "to": ["support@ziontechgroup.com"],
        "cc": ["cto@ziontechgroup.com", "manager@ziontechgroup.com"],
        "body": "Our production server is down. Need immediate assistance!",
        "date": "2026-05-30T08:00:00"
    }
    result = process_email("email-001", test)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V407 - AI Email Priority Decay Engine
=======================================
Dynamically adjusts email priority based on age, thread activity, sender
importance, and deadline proximity. Auto-escalates overdue responses.

REPLY-ALL ENFORCEMENT: All send/reply methods automatically include all
original recipients to prevent accidental exclusion in multi-recipient threads.
"""

import json
import re
import logging
import hashlib
import math
from datetime import datetime, timedelta
from enum import Enum
from collections import defaultdict
from typing import Dict, List, Optional, Set, Tuple, Any

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V407_PriorityDecayEngine")


class PriorityLevel(Enum):
    """Email priority levels from lowest to highest."""
    LOW = 1
    NORMAL = 2
    ELEVATED = 3
    HIGH = 4
    CRITICAL = 5
    ESCALATED = 6


class SenderTier(Enum):
    """Sender importance classification."""
    UNKNOWN = 0
    EXTERNAL = 1
    COLLEAGUE = 2
    MANAGER = 3
    DIRECTOR = 4
    EXECUTIVE = 5
    VIP = 6


class DecayModel:
    """Defines how priority decays over time."""

    def __init__(
        self,
        base_half_life_hours: float = 48.0,
        min_priority: PriorityLevel = PriorityLevel.LOW,
        activity_boost_factor: float = 1.5,
        deadline_urgency_multiplier: float = 2.0,
    ):
        self.base_half_life_hours = base_half_life_hours
        self.min_priority = min_priority
        self.activity_boost_factor = activity_boost_factor
        self.deadline_urgency_multiplier = deadline_urgency_multiplier

    def compute_decay_factor(self, age_hours: float, thread_activity: int) -> float:
        """
        Compute exponential decay factor.
        More thread activity slows decay (keeps priority higher).
        """
        effective_half_life = self.base_half_life_hours * (1 + 0.1 * thread_activity)
        decay = math.exp(-0.693 * age_hours / effective_half_life)
        return max(0.05, min(1.0, decay))

    def compute_deadline_urgency(self, deadline: Optional[datetime], now: datetime) -> float:
        """Compute urgency multiplier based on deadline proximity."""
        if deadline is None:
            return 1.0
        hours_remaining = (deadline - now).total_seconds() / 3600
        if hours_remaining <= 0:
            return self.deadline_urgency_multiplier * 3.0
        elif hours_remaining <= 2:
            return self.deadline_urgency_multiplier * 2.5
        elif hours_remaining <= 8:
            return self.deadline_urgency_multiplier * 2.0
        elif hours_remaining <= 24:
            return self.deadline_urgency_multiplier * 1.5
        elif hours_remaining <= 72:
            return self.deadline_urgency_multiplier * 1.2
        else:
            return 1.0


class TrackedEmail:
    """An email being tracked by the priority decay engine."""

    def __init__(
        self,
        message_id: str,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
        received_at: datetime,
        initial_priority: PriorityLevel = PriorityLevel.NORMAL,
        deadline: Optional[datetime] = None,
        thread_id: Optional[str] = None,
        labels: Optional[List[str]] = None,
    ):
        self.message_id = message_id
        self.sender = sender
        self.recipients = recipients
        self.cc = cc
        self.subject = subject
        self.body = body
        self.received_at = received_at
        self.initial_priority = initial_priority
        self.current_priority = initial_priority
        self.deadline = deadline
        self.thread_id = thread_id or hashlib.md5(
            re.sub(r"^(Re|Fwd):\s*", "", subject, flags=re.IGNORECASE).strip().lower().encode()
        ).hexdigest()[:16]
        self.labels = labels or []
        self.is_read = False
        self.is_replied = False
        self.reply_count = 0
        self.last_activity_at = received_at
        self.priority_history: List[Tuple[datetime, PriorityLevel, str]] = []
        self.escalation_count = 0
        self.sender_tier = SenderTier.UNKNOWN

    @property
    def all_recipients(self) -> Set[str]:
        """All recipients including CC."""
        return set(self.recipients + self.cc)

    @property
    def age_hours(self) -> float:
        """Hours since email was received."""
        return (datetime.now() - self.received_at).total_seconds() / 3600

    @property
    def is_overdue(self) -> bool:
        """Check if deadline has passed without reply."""
        if self.deadline and not self.is_replied:
            return datetime.now() > self.deadline
        return False

    def record_activity(self):
        """Record new activity on this email thread."""
        self.last_activity_at = datetime.now()
        self.reply_count += 1

    def mark_read(self):
        self.is_read = True

    def mark_replied(self):
        self.is_replied = True
        self.record_activity()


class PriorityDecayEngine:
    """
    Main engine that dynamically adjusts email priorities.
    Enforces reply-all for all multi-recipient emails.
    """

    def __init__(
        self,
        sender_tier_map: Optional[Dict[str, SenderTier]] = None,
        decay_model: Optional[DecayModel] = None,
        escalation_check_interval_minutes: int = 30,
    ):
        self.tracked_emails: Dict[str, TrackedEmail] = {}
        self.sender_tier_map: Dict[str, SenderTier] = sender_tier_map or {}
        self.decay_model = decay_model or DecayModel()
        self.escalation_interval = timedelta(minutes=escalation_check_interval_minutes)
        self.last_escalation_check = datetime.now()
        self.escalation_log: List[Dict[str, Any]] = []
        self.reply_all_log: List[Dict[str, Any]] = []
        self.priority_rules: List[Dict[str, Any]] = []
        logger.info("V407 AI Email Priority Decay Engine initialized")

    def track_email(self, email: TrackedEmail) -> Dict[str, Any]:
        """Start tracking an email for priority management."""
        email.sender_tier = self.sender_tier_map.get(email.sender, SenderTier.UNKNOWN)
        self.tracked_emails[email.message_id] = email
        self._recalculate_priority(email)
        logger.info(
            "Tracking email %s from %s | Priority: %s | Deadline: %s",
            email.message_id[:8],
            email.sender,
            email.current_priority.name,
            email.deadline or "None",
        )
        return {
            "status": "tracked",
            "message_id": email.message_id,
            "current_priority": email.current_priority.name,
            "sender_tier": email.sender_tier.name,
        }

    def _recalculate_priority(self, email: TrackedEmail) -> PriorityLevel:
        """Recalculate the effective priority of an email."""
        age_hours = (datetime.now() - email.last_activity_at).total_seconds() / 3600
        decay_factor = self.decay_model.compute_decay_factor(age_hours, email.reply_count)

        base_score = email.initial_priority.value
        tier_bonus = email.sender_tier.value * 0.3
        deadline_urgency = self.decay_model.compute_deadline_urgency(email.deadline, datetime.now())

        raw_score = (base_score + tier_bonus) * decay_factor * deadline_urgency

        if email.is_read and not email.is_replied:
            raw_score *= 1.1
        if email.is_replied:
            raw_score *= 0.3

        if email.is_overdue:
            raw_score = max(raw_score, PriorityLevel.ESCALATED.value)
            if email.escalation_count == 0:
                self._escalate_email(email, reason="deadline_overdue")

        for rule in self.priority_rules:
            if self._matches_rule(email, rule):
                raw_score = max(raw_score, rule.get("min_priority", 0))

        final_priority = self._score_to_priority(raw_score)
        old_priority = email.current_priority
        email.current_priority = final_priority

        if final_priority != old_priority:
            email.priority_history.append(
                (datetime.now(), final_priority, f"recalculated (score={raw_score:.2f})")
            )
            logger.info(
                "Priority changed for %s: %s -> %s (score=%.2f)",
                email.message_id[:8],
                old_priority.name,
                final_priority.name,
                raw_score,
            )

        return final_priority

    @staticmethod
    def _score_to_priority(score: float) -> PriorityLevel:
        """Convert a numeric score to a PriorityLevel."""
        if score >= 5.5:
            return PriorityLevel.ESCALATED
        elif score >= 4.5:
            return PriorityLevel.CRITICAL
        elif score >= 3.5:
            return PriorityLevel.HIGH
        elif score >= 2.5:
            return PriorityLevel.ELEVATED
        elif score >= 1.5:
            return PriorityLevel.NORMAL
        else:
            return PriorityLevel.LOW

    def _escalate_email(self, email: TrackedEmail, reason: str):
        """Escalate an email and log the event."""
        email.escalation_count += 1
        email.current_priority = PriorityLevel.ESCALATED
        escalation_record = {
            "message_id": email.message_id,
            "sender": email.sender,
            "subject": email.subject,
            "reason": reason,
            "escalation_number": email.escalation_count,
            "escalated_at": datetime.now().isoformat(),
            "age_hours": email.age_hours,
            "deadline": email.deadline.isoformat() if email.deadline else None,
        }
        self.escalation_log.append(escalation_record)
        logger.warning(
            "ESCALATION #%d for email %s (%s): %s",
            email.escalation_count,
            email.message_id[:8],
            email.subject[:40],
            reason,
        )

    @staticmethod
    def _matches_rule(email: TrackedEmail, rule: Dict[str, Any]) -> bool:
        """Check if an email matches a priority rule."""
        if "sender_pattern" in rule:
            if not re.search(rule["sender_pattern"], email.sender):
                return False
        if "subject_pattern" in rule:
            if not re.search(rule["subject_pattern"], email.subject, re.IGNORECASE):
                return False
        if "label" in rule:
            if rule["label"] not in email.labels:
                return False
        return True

    def add_priority_rule(self, rule: Dict[str, Any]):
        """Add a custom priority rule."""
        self.priority_rules.append(rule)
        logger.info("Added priority rule: %s", rule.get("name", "unnamed"))

    def run_decay_cycle(self) -> List[Dict[str, Any]]:
        """
        Run a full decay cycle on all tracked emails.
        Returns list of priority changes.
        """
        changes = []
        for msg_id, email in self.tracked_emails.items():
            if email.is_replied:
                continue
            old_priority = email.current_priority
            new_priority = self._recalculate_priority(email)
            if new_priority != old_priority:
                changes.append({
                    "message_id": msg_id,
                    "sender": email.sender,
                    "subject": email.subject,
                    "old_priority": old_priority.name,
                    "new_priority": new_priority.name,
                    "age_hours": round(email.age_hours, 1),
                    "is_overdue": email.is_overdue,
                })
        logger.info("Decay cycle complete: %d priority changes", len(changes))
        return changes

    def check_escalations(self) -> List[Dict[str, Any]]:
        """Check all emails for overdue escalations."""
        new_escalations = []
        for email in self.tracked_emails.values():
            if email.is_replied:
                continue
            if email.is_overdue and email.current_priority != PriorityLevel.ESCALATED:
                self._escalate_email(email, reason="overdue_check")
                new_escalations.append({
                    "message_id": email.message_id,
                    "sender": email.sender,
                    "subject": email.subject,
                    "deadline": email.deadline.isoformat() if email.deadline else None,
                })
            elif not email.is_read and email.age_hours > 24:
                if email.current_priority.value < PriorityLevel.HIGH.value:
                    self._escalate_email(email, reason="unread_24h")
                    new_escalations.append({
                        "message_id": email.message_id,
                        "reason": "unread_24h",
                    })
        return new_escalations

    def reply_to_email(
        self,
        message_id: str,
        my_email: str,
        reply_body: str,
    ) -> Dict[str, Any]:
        """
        Reply to a tracked email with reply-all enforcement.
        All original recipients are automatically included.
        """
        email = self.tracked_emails.get(message_id)
        if not email:
            logger.error("Cannot reply: email %s not tracked", message_id)
            return {"status": "error", "reason": "Email not tracked"}

        all_original = set(email.recipients + email.cc + [email.sender])
        all_original.discard(my_email)

        primary_recipients = list(set(email.recipients + [email.sender]) - {my_email})
        cc_recipients = list(all_original - set(primary_recipients))

        reply_id = hashlib.md5(
            f"reply_{message_id}_{datetime.now().isoformat()}".encode()
        ).hexdigest()[:16]

        email.mark_replied()

        self.reply_all_log.append({
            "reply_id": reply_id,
            "original_id": message_id,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
            "timestamp": datetime.now().isoformat(),
        })

        logger.info(
            "REPLY-ALL ENFORCED: Reply %s to %s sent to %d To + %d CC",
            reply_id[:8],
            message_id[:8],
            len(primary_recipients),
            len(cc_recipients),
        )

        return {
            "status": "replied",
            "reply_id": reply_id,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
            "original_priority": email.current_priority.name,
        }

    def send_new_email(
        self,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
        priority: PriorityLevel = PriorityLevel.NORMAL,
        deadline: Optional[datetime] = None,
    ) -> Dict[str, Any]:
        """
        Send a new email with reply-all enforcement for existing threads.
        If the subject matches an existing thread, prior participants are auto-added.
        """
        thread_key = re.sub(r"^(Re|Fwd):\s*", "", subject, flags=re.IGNORECASE).strip().lower()
        thread_hash = hashlib.md5(thread_key.encode()).hexdigest()[:16]

        enforced_cc = list(cc)
        for tracked in self.tracked_emails.values():
            if tracked.thread_id == thread_hash:
                prior_participants = tracked.all_recipients - {sender} - set(recipients) - set(cc)
                if prior_participants:
                    enforced_cc.extend(prior_participants)
                    logger.warning(
                        "REPLY-ALL ENFORCEMENT (new): Added %d prior participants to CC",
                        len(prior_participants),
                    )
                break

        msg_id = hashlib.md5(f"new_{sender}_{subject}_{datetime.now().isoformat()}".encode()).hexdigest()[:16]

        new_email = TrackedEmail(
            message_id=msg_id,
            sender=sender,
            recipients=recipients,
            cc=enforced_cc,
            subject=subject,
            body=body,
            received_at=datetime.now(),
            initial_priority=priority,
            deadline=deadline,
            thread_id=thread_hash,
        )
        self.track_email(new_email)

        return {
            "status": "sent",
            "message_id": msg_id,
            "to": recipients,
            "cc": enforced_cc,
            "priority": priority.name,
            "reply_all_enforced": len(enforced_cc) > len(cc),
        }

    def get_priority_dashboard(self) -> Dict[str, Any]:
        """Get a dashboard view of all tracked email priorities."""
        summary = defaultdict(list)
        for email in self.tracked_emails.values():
            summary[email.current_priority.name].append({
                "message_id": email.message_id[:8],
                "sender": email.sender,
                "subject": email.subject[:50],
                "age_hours": round(email.age_hours, 1),
                "is_overdue": email.is_overdue,
                "replied": email.is_replied,
            })
        return {
            "timestamp": datetime.now().isoformat(),
            "total_tracked": len(self.tracked_emails),
            "by_priority": dict(summary),
            "total_escalations": len(self.escalation_log),
            "pending_replies": sum(
                1 for e in self.tracked_emails.values() if not e.is_replied
            ),
        }

    def detect_deadline_from_body(self, body: str) -> Optional[datetime]:
        """Attempt to extract a deadline from email body text."""
        patterns = [
            r"(?:due|deadline|by|before)\s+(?:on\s+)?(\w+\s+\d{1,2}(?:st|nd|rd|th)?)",
            r"(?:due|deadline|by|before)\s+(\d{4}-\d{2}-\d{2})",
            r"(?:due|deadline|by|before)\s+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)",
        ]
        for pattern in patterns:
            match = re.search(pattern, body, re.IGNORECASE)
            if match:
                date_str = match.group(1)
                for fmt in ["%Y-%m-%d", "%m/%d/%Y", "%m/%d/%y", "%B %d"]:
                    try:
                        parsed = datetime.strptime(date_str, fmt)
                        if parsed.year < 2000:
                            parsed = parsed.replace(year=datetime.now().year)
                        return parsed
                    except ValueError:
                        continue
        return None


if __name__ == "__main__":
    engine = PriorityDecayEngine(
        sender_tier_map={
            "ceo@company.com": SenderTier.EXECUTIVE,
            "manager@company.com": SenderTier.MANAGER,
            "client@external.com": SenderTier.VIP,
        }
    )

    email1 = TrackedEmail(
        message_id="pri001",
        sender="ceo@company.com",
        recipients=["me@company.com", "team@company.com"],
        cc=["assistant@company.com"],
        subject="URGENT: Board presentation review",
        body="Please review the attached deck by tomorrow morning.",
        received_at=datetime.now() - timedelta(hours=26),
        initial_priority=PriorityLevel.HIGH,
        deadline=datetime.now() + timedelta(hours=2),
    )
    engine.track_email(email1)

    email2 = TrackedEmail(
        message_id="pri002",
        sender="colleague@company.com",
        recipients=["me@company.com"],
        cc=[],
        subject="Lunch plans?",
        body="Want to grab lunch this week?",
        received_at=datetime.now() - timedelta(hours=72),
        initial_priority=PriorityLevel.NORMAL,
    )
    engine.track_email(email2)

    changes = engine.run_decay_cycle()
    print(f"Priority changes: {json.dumps(changes, indent=2)}")

    escalations = engine.check_escalations()
    print(f"\nEscalations: {json.dumps(escalations, indent=2)}")

    reply = engine.reply_to_email("pri001", "me@company.com", "Reviewed and approved!")
    print(f"\nReply result: {json.dumps(reply, indent=2)}")

    dashboard = engine.get_priority_dashboard()
    print(f"\nDashboard: {json.dumps(dashboard, indent=2, default=str)}")

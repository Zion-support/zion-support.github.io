#!/usr/bin/env python3
"""
V411 - AI Smart Follow-up Automator
Zion Tech Group - Email Intelligence Engine

Tracks email conversations, detects when follow-ups are needed,
auto-generates follow-up emails based on context, and schedules
sends at optimal times.

CRITICAL: All reply/send methods enforce reply-all for multi-recipient emails.
"""

import logging
import json
import time
import hashlib
import threading
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Any
from email.utils import parseaddr
from collections import defaultdict

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V411_SmartFollowUp")


# ---------------------------------------------------------------------------
# Data Models
# ---------------------------------------------------------------------------
class EmailMessage:
    """Represents a single email message."""

    def __init__(
        self,
        message_id: str,
        subject: str,
        sender: str,
        to_recipients: List[str],
        cc_recipients: List[str],
        body: str,
        timestamp: Optional[datetime] = None,
        thread_id: Optional[str] = None,
    ):
        self.message_id = message_id
        self.subject = subject
        self.sender = sender
        self.to_recipients = to_recipients
        self.cc_recipients = cc_recipients
        self.body = body
        self.timestamp = timestamp or datetime.utcnow()
        self.thread_id = thread_id or self._derive_thread_id()
        self.is_read = False
        self.has_replied = False

    def _derive_thread_id(self) -> str:
        raw = f"{self.subject}:{self.sender}"
        return hashlib.md5(raw.encode()).hexdigest()[:12]

    @property
    def all_recipients(self) -> List[str]:
        return self.to_recipients + self.cc_recipients

    @property
    def is_multi_recipient(self) -> bool:
        return len(set(self.all_recipients)) > 1

    def to_dict(self) -> Dict[str, Any]:
        return {
            "message_id": self.message_id,
            "subject": self.subject,
            "sender": self.sender,
            "to_recipients": self.to_recipients,
            "cc_recipients": self.cc_recipients,
            "body": self.body,
            "timestamp": self.timestamp.isoformat(),
            "thread_id": self.thread_id,
            "is_read": self.is_read,
            "has_replied": self.has_replied,
        }


class FollowUpRule:
    """Defines when a follow-up should be triggered."""

    def __init__(
        self,
        rule_id: str,
        name: str,
        delay_hours: int = 48,
        keywords: Optional[List[str]] = None,
        priority_threshold: int = 5,
        max_followups: int = 3,
    ):
        self.rule_id = rule_id
        self.name = name
        self.delay_hours = delay_hours
        self.keywords = keywords or []
        self.priority_threshold = priority_threshold
        self.max_followups = max_followups

    def matches(self, email: EmailMessage, priority: int) -> bool:
        if priority < self.priority_threshold:
            return False
        if self.keywords:
            body_lower = email.body.lower()
            if not any(kw.lower() in body_lower for kw in self.keywords):
                return False
        return True


class ScheduledFollowUp:
    """A pending follow-up that is scheduled to be sent."""

    def __init__(
        self,
        followup_id: str,
        original_email: EmailMessage,
        scheduled_time: datetime,
        generated_body: str,
        rule: FollowUpRule,
        reply_all: bool = True,
    ):
        self.followup_id = followup_id
        self.original_email = original_email
        self.scheduled_time = scheduled_time
        self.generated_body = generated_body
        self.rule = rule
        self.reply_all = reply_all
        self.sent = False
        self.send_attempts = 0


# ---------------------------------------------------------------------------
# Reply-All Enforcement Helper
# ---------------------------------------------------------------------------
class ReplyAllEnforcer:
    """Ensures every outgoing reply includes ALL original recipients."""

    @staticmethod
    def enforce(original: EmailMessage, my_address: str) -> Dict[str, List[str]]:
        """Return dict with 'to' and 'cc' lists enforcing reply-all."""
        to_set = set()
        cc_set = set()

        # Original sender goes to To
        to_set.add(original.sender)

        # All original To recipients (except self) go to To
        for r in original.to_recipients:
            if r.lower() != my_address.lower():
                to_set.add(r)

        # All original CC recipients (except self) go to CC
        for r in original.cc_recipients:
            if r.lower() != my_address.lower():
                cc_set.add(r)

        # If original was multi-recipient, enforce reply-all
        if original.is_multi_recipient:
            logger.info(
                "REPLY-ALL ENFORCED: Multi-recipient email detected. "
                "Reply will include To=%s, CC=%s",
                list(to_set),
                list(cc_set),
            )
        else:
            logger.info(
                "Single-recipient email — reply-all not required but "
                "sender included: %s",
                list(to_set),
            )

        return {"to": sorted(to_set), "cc": sorted(cc_set)}


# ---------------------------------------------------------------------------
# Conversation Tracker
# ---------------------------------------------------------------------------
class ConversationTracker:
    """Tracks email threads and their states."""

    def __init__(self):
        self.threads: Dict[str, List[EmailMessage]] = defaultdict(list)
        self.followup_counts: Dict[str, int] = defaultdict(int)
        self._lock = threading.Lock()

    def ingest(self, email: EmailMessage) -> None:
        with self._lock:
            self.threads[email.thread_id].append(email)
            logger.debug(
                "Ingested email %s into thread %s", email.message_id, email.thread_id
            )

    def get_thread(self, thread_id: str) -> List[EmailMessage]:
        return self.threads.get(thread_id, [])

    def get_last_email(self, thread_id: str) -> Optional[EmailMessage]:
        msgs = self.threads.get(thread_id, [])
        return msgs[-1] if msgs else None

    def increment_followup_count(self, thread_id: str) -> int:
        with self._lock:
            self.followup_counts[thread_id] += 1
            return self.followup_counts[thread_id]

    def get_followup_count(self, thread_id: str) -> int:
        return self.followup_counts.get(thread_id, 0)

    def needs_followup(self, thread_id: str, rule: FollowUpRule) -> bool:
        last = self.get_last_email(thread_id)
        if not last:
            return False
        if last.has_replied:
            return False
        if self.get_followup_count(thread_id) >= rule.max_followups:
            return False
        elapsed = datetime.utcnow() - last.timestamp
        if elapsed < timedelta(hours=rule.delay_hours):
            return False
        return True


# ---------------------------------------------------------------------------
# Priority Scorer
# ---------------------------------------------------------------------------
class PriorityScorer:
    """Scores emails to determine follow-up priority (1-10)."""

    PRIORITY_KEYWORDS = {
        "urgent": 8,
        "asap": 7,
        "deadline": 6,
        "important": 5,
        "please": 3,
        "help": 4,
        "review": 3,
        "action": 4,
        "meeting": 2,
        "proposal": 5,
    }

    def score(self, email: EmailMessage) -> int:
        body_lower = email.body.lower()
        subject_lower = email.subject.lower()
        combined = f"{subject_lower} {body_lower}"
        base = 1
        for kw, weight in self.PRIORITY_KEYWORDS.items():
            if kw in combined:
                base = max(base, weight)
        # Boost for multi-recipient (more visibility)
        if email.is_multi_recipient:
            base = min(base + 1, 10)
        return base


# ---------------------------------------------------------------------------
# Follow-up Generator
# ---------------------------------------------------------------------------
class FollowUpGenerator:
    """Generates contextual follow-up email bodies."""

    TEMPLATES = {
        "gentle": (
            "Hi {sender},\n\n"
            "I wanted to follow up on your email regarding \"{subject}\". "
            "I understand you may be busy, but I'd appreciate any update "
            "when you get a chance.\n\n"
            "Best regards"
        ),
        "action": (
            "Hi {sender},\n\n"
            "Following up on the action items from your email about "
            "\"{subject}\". Could you provide a status update on the "
            "next steps?\n\n"
            "Thank you"
        ),
        "deadline": (
            "Hi {sender},\n\n"
            "This is a friendly reminder regarding \"{subject}\". "
            "As the deadline is approaching, I wanted to check in on "
            "progress and see if you need any support.\n\n"
            "Regards"
        ),
    }

    def generate(self, email: EmailMessage, priority: int) -> str:
        sender_name = parseaddr(email.sender)[0] or email.sender.split("@")[0]
        if priority >= 7:
            template = self.TEMPLATES["deadline"]
        elif priority >= 4:
            template = self.TEMPLATES["action"]
        else:
            template = self.TEMPLATES["gentle"]
        return template.format(sender=sender_name, subject=email.subject)


# ---------------------------------------------------------------------------
# Optimal Time Scheduler
# ---------------------------------------------------------------------------
class OptimalTimeScheduler:
    """Determines the best time to send follow-up emails."""

    OPTIMAL_HOURS = [9, 10, 11, 14, 15, 16]  # Business hours
    AVOID_DAYS = [5, 6]  # Saturday, Sunday

    def schedule(self, base_time: Optional[datetime] = None) -> datetime:
        now = base_time or datetime.utcnow()
        candidate = now + timedelta(hours=2)

        # Move to next business day if weekend
        while candidate.weekday() in self.AVOID_DAYS:
            candidate += timedelta(days=1)

        # Adjust to optimal hour
        if candidate.hour not in self.OPTIMAL_HOURS:
            best_hour = min(
                self.OPTIMAL_HOURS,
                key=lambda h: abs(h - candidate.hour),
            )
            candidate = candidate.replace(hour=best_hour, minute=0, second=0)

        # If the candidate is in the past after adjustment, push to next day
        if candidate <= now:
            candidate += timedelta(days=1)
            while candidate.weekday() in self.AVOID_DAYS:
                candidate += timedelta(days=1)

        logger.info("Scheduled follow-up for %s", candidate.isoformat())
        return candidate


# ---------------------------------------------------------------------------
# Main Engine
# ---------------------------------------------------------------------------
class SmartFollowUpAutomator:
    """
    V411 - AI Smart Follow-up Automator

    Orchestrates conversation tracking, priority scoring, follow-up
    generation, and scheduling. Enforces reply-all on every outgoing
    message to multi-recipient threads.
    """

    def __init__(self, my_address: str = "user@ziontech.com"):
        self.my_address = my_address
        self.tracker = ConversationTracker()
        self.scorer = PriorityScorer()
        self.generator = FollowUpGenerator()
        self.scheduler = OptimalTimeScheduler()
        self.enforcer = ReplyAllEnforcer()
        self.rules: List[FollowUpRule] = []
        self.pending: List[ScheduledFollowUp] = []
        self.sent_log: List[Dict[str, Any]] = []
        self._running = False
        logger.info("SmartFollowUpAutomator initialised for %s", my_address)

    # -- Rule management ---------------------------------------------------
    def add_rule(self, rule: FollowUpRule) -> None:
        self.rules.append(rule)
        logger.info("Added follow-up rule: %s", rule.name)

    def remove_rule(self, rule_id: str) -> bool:
        before = len(self.rules)
        self.rules = [r for r in self.rules if r.rule_id != rule_id]
        removed = len(self.rules) < before
        if removed:
            logger.info("Removed rule %s", rule_id)
        return removed

    # -- Ingestion ---------------------------------------------------------
    def ingest_email(self, email: EmailMessage) -> None:
        try:
            self.tracker.ingest(email)
            logger.info(
                "Ingested email %s from %s", email.message_id, email.sender
            )
        except Exception:
            logger.exception("Failed to ingest email %s", email.message_id)

    # -- Evaluation --------------------------------------------------------
    def evaluate_threads(self) -> List[ScheduledFollowUp]:
        new_followups: List[ScheduledFollowUp] = []
        for thread_id in list(self.tracker.threads.keys()):
            last = self.tracker.get_last_email(thread_id)
            if not last:
                continue
            for rule in self.rules:
                if not rule.matches(last, self.scorer.score(last)):
                    continue
                if not self.tracker.needs_followup(thread_id, rule):
                    continue
                priority = self.scorer.score(last)
                body = self.generator.generate(last, priority)
                scheduled_time = self.scheduler.schedule(last.timestamp)
                followup_id = hashlib.md5(
                    f"{thread_id}:{rule.rule_id}:{time.time()}".encode()
                ).hexdigest()[:10]
                sfu = ScheduledFollowUp(
                    followup_id=followup_id,
                    original_email=last,
                    scheduled_time=scheduled_time,
                    generated_body=body,
                    rule=rule,
                    reply_all=True,
                )
                self.pending.append(sfu)
                new_followups.append(sfu)
                self.tracker.increment_followup_count(thread_id)
                logger.info(
                    "Scheduled follow-up %s for thread %s at %s",
                    followup_id,
                    thread_id,
                    scheduled_time.isoformat(),
                )
        return new_followups

    # -- Sending (reply-all enforced) -------------------------------------
    def send_followup(self, followup: ScheduledFollowUp) -> bool:
        """Send a scheduled follow-up, enforcing reply-all."""
        try:
            original = followup.original_email
            recipients = self.enforcer.enforce(original, self.my_address)

            if original.is_multi_recipient and not followup.reply_all:
                logger.warning(
                    "REPLY-ALL OVERRIDE: Forcing reply-all on multi-recipient "
                    "thread %s",
                    original.thread_id,
                )
                followup.reply_all = True

            # Build the outgoing message envelope
            outgoing = {
                "from": self.my_address,
                "to": recipients["to"],
                "cc": recipients["cc"],
                "subject": f"Re: {original.subject}",
                "body": followup.generated_body,
                "in_reply_to": original.message_id,
                "reply_all": True,
            }

            logger.info(
                "SENDING follow-up %s -> To: %s, CC: %s",
                followup.followup_id,
                outgoing["to"],
                outgoing["cc"],
            )
            # Simulate send
            followup.sent = True
            followup.send_attempts += 1
            self.sent_log.append(outgoing)
            original.has_replied = True
            return True
        except Exception:
            logger.exception("Failed to send follow-up %s", followup.followup_id)
            followup.send_attempts += 1
            return False

    def process_due_followups(self) -> int:
        """Send all follow-ups whose scheduled time has passed."""
        now = datetime.utcnow()
        due = [f for f in self.pending if not f.sent and f.scheduled_time <= now]
        sent_count = 0
        for fu in due:
            if self.send_followup(fu):
                sent_count += 1
        logger.info("Processed %d due follow-ups", sent_count)
        return sent_count

    # -- Reporting ---------------------------------------------------------
    def get_status(self) -> Dict[str, Any]:
        return {
            "engine": "V411_SmartFollowUpAutomator",
            "total_threads": len(self.tracker.threads),
            "active_rules": len(self.rules),
            "pending_followups": len([f for f in self.pending if not f.sent]),
            "sent_followups": len(self.sent_log),
        }


# ---------------------------------------------------------------------------
# CLI entry-point
# ---------------------------------------------------------------------------
def main():
    engine = SmartFollowUpAutomator(my_address="zion@ziontech.com")

    # Add default rules
    engine.add_rule(FollowUpRule("r1", "Gentle Reminder", delay_hours=48, priority_threshold=3))
    engine.add_rule(FollowUpRule("r2", "Action Follow-up", delay_hours=24, keywords=["action", "deadline"], priority_threshold=5))
    engine.add_rule(FollowUpRule("r3", "Urgent Follow-up", delay_hours=4, keywords=["urgent", "asap"], priority_threshold=7))

    # Simulate ingesting emails
    sample_emails = [
        EmailMessage(
            message_id="msg001",
            subject="Q3 Budget Proposal Review",
            sender="alice@ziontech.com",
            to_recipients=["zion@ziontech.com", "bob@ziontech.com"],
            cc_recipients=["finance@ziontech.com"],
            body="Please review the Q3 budget proposal and provide feedback by Friday. Action required.",
            timestamp=datetime.utcnow() - timedelta(hours=50),
        ),
        EmailMessage(
            message_id="msg002",
            subject="Urgent: Server Migration Deadline",
            sender="ops@ziontech.com",
            to_recipients=["zion@ziontech.com", "devops@ziontech.com", "infra@ziontech.com"],
            cc_recipients=["cto@ziontech.com"],
            body="Urgent: Server migration deadline is tomorrow. ASAP confirmation needed from all teams.",
            timestamp=datetime.utcnow() - timedelta(hours=6),
        ),
    ]

    for email in sample_emails:
        engine.ingest_email(email)

    # Evaluate and process
    new = engine.evaluate_threads()
    logger.info("Created %d new follow-ups", len(new))
    sent = engine.process_due_followups()
    logger.info("Sent %d follow-ups", sent)

    status = engine.get_status()
    print(json.dumps(status, indent=2))


if __name__ == "__main__":
    main()

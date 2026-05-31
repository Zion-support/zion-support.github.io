#!/usr/bin/env python3
"""
V412 - AI Email Thread Summarizer Pro
Zion Tech Group - Email Intelligence Engine

Condenses long email threads into executive summaries with key decisions,
action items, open questions, and timeline.

CRITICAL: All reply/send methods enforce reply-all for multi-recipient emails.
"""

import logging
import json
import re
import hashlib
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Any, Tuple
from email.utils import parseaddr
from collections import defaultdict, OrderedDict

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V412_ThreadSummarizer")


# ---------------------------------------------------------------------------
# Data Models
# ---------------------------------------------------------------------------
class ThreadEmail:
    """Single email in a thread."""

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
        self.thread_id = thread_id or hashlib.md5(subject.encode()).hexdigest()[:10]

    @property
    def all_recipients(self) -> List[str]:
        return self.to_recipients + self.cc_recipients

    @property
    def is_multi_recipient(self) -> bool:
        return len(set(self.all_recipients)) > 1


class ActionItem:
    """An identified action item from a thread."""

    def __init__(self, description: str, assignee: str, due: Optional[str] = None, source_msg: str = ""):
        self.description = description
        self.assignee = assignee
        self.due = due
        self.source_msg = source_msg
        self.completed = False

    def to_dict(self) -> Dict[str, Any]:
        return {
            "description": self.description,
            "assignee": self.assignee,
            "due": self.due,
            "source_msg": self.source_msg,
            "completed": self.completed,
        }


class Decision:
    """A decision made in the thread."""

    def __init__(self, description: str, decided_by: str, timestamp: datetime, context: str = ""):
        self.description = description
        self.decided_by = decided_by
        self.timestamp = timestamp
        self.context = context

    def to_dict(self) -> Dict[str, Any]:
        return {
            "description": self.description,
            "decided_by": self.decided_by,
            "timestamp": self.timestamp.isoformat(),
            "context": self.context,
        }


class OpenQuestion:
    """An unresolved question from the thread."""

    def __init__(self, question: str, asked_by: str, timestamp: datetime):
        self.question = question
        self.asked_by = asked_by
        self.timestamp = timestamp
        self.answered = False

    def to_dict(self) -> Dict[str, Any]:
        return {
            "question": self.question,
            "asked_by": self.asked_by,
            "timestamp": self.timestamp.isoformat(),
            "answered": self.answered,
        }


class TimelineEntry:
    """A chronological event in the thread."""

    def __init__(self, timestamp: datetime, event: str, actor: str):
        self.timestamp = timestamp
        self.event = event
        self.actor = actor

    def to_dict(self) -> Dict[str, Any]:
        return {
            "timestamp": self.timestamp.isoformat(),
            "event": self.event,
            "actor": self.actor,
        }


class ThreadSummary:
    """Complete executive summary of a thread."""

    def __init__(self, thread_id: str, subject: str):
        self.thread_id = thread_id
        self.subject = subject
        self.executive_summary: str = ""
        self.key_decisions: List[Decision] = []
        self.action_items: List[ActionItem] = []
        self.open_questions: List[OpenQuestion] = []
        self.timeline: List[TimelineEntry] = []
        self.participants: List[str] = []
        self.total_messages: int = 0
        self.date_range: Tuple[Optional[datetime], Optional[datetime]] = (None, None)
        self.generated_at: datetime = datetime.utcnow()

    def to_dict(self) -> Dict[str, Any]:
        return {
            "thread_id": self.thread_id,
            "subject": self.subject,
            "executive_summary": self.executive_summary,
            "key_decisions": [d.to_dict() for d in self.key_decisions],
            "action_items": [a.to_dict() for a in self.action_items],
            "open_questions": [q.to_dict() for q in self.open_questions],
            "timeline": [t.to_dict() for t in self.timeline],
            "participants": self.participants,
            "total_messages": self.total_messages,
            "date_range": [
                self.date_range[0].isoformat() if self.date_range[0] else None,
                self.date_range[1].isoformat() if self.date_range[1] else None,
            ],
            "generated_at": self.generated_at.isoformat(),
        }


# ---------------------------------------------------------------------------
# Reply-All Enforcement
# ---------------------------------------------------------------------------
class ReplyAllEnforcer:
    """Enforces reply-all for multi-recipient emails."""

    @staticmethod
    def build_recipient_lists(original: ThreadEmail, my_address: str) -> Dict[str, List[str]]:
        to_set = set()
        cc_set = set()

        to_set.add(original.sender)
        for r in original.to_recipients:
            if r.lower() != my_address.lower():
                to_set.add(r)
        for r in original.cc_recipients:
            if r.lower() != my_address.lower():
                cc_set.add(r)

        if original.is_multi_recipient:
            logger.info(
                "REPLY-ALL ENFORCED: Multi-recipient thread — To=%s CC=%s",
                sorted(to_set), sorted(cc_set),
            )

        return {"to": sorted(to_set), "cc": sorted(cc_set)}


# ---------------------------------------------------------------------------
# NLP-lite extractors (standard library only)
# ---------------------------------------------------------------------------
class ActionItemExtractor:
    """Extracts action items from email bodies."""

    PATTERNS = [
        r"(?:please|kindly)\s+(.+?)(?:\.|$)",
        r"(?:action\s*item|todo|task)[:\s]+(.+?)(?:\.|$)",
        r"(?:need(?:s)?|should|must)\s+(.+?)(?:\.|$)",
        r"(?:@(\w+))\s+(?:please|can you|could you)\s+(.+?)(?:\.|$)",
        r"(?:deadline|due)[:\s]+(.+?)(?:\.|$)",
    ]

    def extract(self, body: str, sender: str) -> List[ActionItem]:
        items = []
        for pattern in self.PATTERNS:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for m in matches:
                desc = m.group(0).strip()
                if len(desc) > 5:
                    items.append(ActionItem(
                        description=desc,
                        assignee=sender,
                        source_msg=body[:80],
                    ))
        return items


class DecisionExtractor:
    """Extracts decisions from email bodies."""

    PATTERNS = [
        r"(?:decided|decision|agreed|approved|confirmed)[:\s]+(.+?)(?:\.|$)",
        r"(?:we will|we shall|going with|selected)[:\s]*(.+?)(?:\.|$)",
        r"(?:final|conclusion)[:\s]+(.+?)(?:\.|$)",
    ]

    def extract(self, body: str, sender: str, timestamp: datetime) -> List[Decision]:
        decisions = []
        for pattern in self.PATTERNS:
            for m in re.finditer(pattern, body, re.IGNORECASE):
                decisions.append(Decision(
                    description=m.group(0).strip(),
                    decided_by=sender,
                    timestamp=timestamp,
                    context=body[:100],
                ))
        return decisions


class QuestionExtractor:
    """Extracts open questions from email bodies."""

    def extract(self, body: str, sender: str, timestamp: datetime) -> List[OpenQuestion]:
        questions = []
        sentences = re.split(r'[.!?]+', body)
        for sent in sentences:
            sent = sent.strip()
            if sent.endswith("?") or re.match(r'^(?:what|who|when|where|why|how|can|could|would|should|is|are|do|does)\b', sent, re.IGNORECASE):
                if len(sent) > 10:
                    questions.append(OpenQuestion(
                        question=sent + "?",
                        asked_by=sender,
                        timestamp=timestamp,
                    ))
        return questions


# ---------------------------------------------------------------------------
# Summarizer
# ---------------------------------------------------------------------------
class ExecutiveSummarizer:
    """Generates executive summary text from thread data."""

    def summarize(self, emails: List[ThreadEmail], actions: List[ActionItem],
                  decisions: List[Decision], questions: List[OpenQuestion]) -> str:
        if not emails:
            return "No emails in thread."

        parts = []
        parts.append(
            f"This thread contains {len(emails)} messages from "
            f"{len(set(e.sender for e in emails))} participants "
            f"regarding \"{emails[0].subject}\"."
        )

        if decisions:
            parts.append(f"{len(decisions)} decision(s) were made.")
        if actions:
            pending = [a for a in actions if not a.completed]
            parts.append(f"{len(pending)} action item(s) are pending.")
        if questions:
            open_q = [q for q in questions if not q.answered]
            parts.append(f"{len(open_q)} question(s) remain open.")

        # Highlight most recent activity
        latest = max(emails, key=lambda e: e.timestamp)
        parts.append(
            f"Most recent activity: {latest.sender} at {latest.timestamp.strftime('%Y-%m-%d %H:%M')}."
        )

        return " ".join(parts)


# ---------------------------------------------------------------------------
# Main Engine
# ---------------------------------------------------------------------------
class EmailThreadSummarizer:
    """
    V412 - AI Email Thread Summarizer Pro

    Ingests email threads and produces executive summaries with decisions,
    action items, open questions, and timelines. All reply/send operations
    enforce reply-all for multi-recipient emails.
    """

    def __init__(self, my_address: str = "user@ziontech.com"):
        self.my_address = my_address
        self.threads: Dict[str, List[ThreadEmail]] = defaultdict(list)
        self.summaries: Dict[str, ThreadSummary] = {}
        self.action_extractor = ActionItemExtractor()
        self.decision_extractor = DecisionExtractor()
        self.question_extractor = QuestionExtractor()
        self.summarizer = ExecutiveSummarizer()
        self.enforcer = ReplyAllEnforcer()
        logger.info("EmailThreadSummarizer initialised for %s", my_address)

    def ingest(self, email: ThreadEmail) -> None:
        self.threads[email.thread_id].append(email)
        logger.info("Ingested %s into thread %s", email.message_id, email.thread_id)

    def analyze_thread(self, thread_id: str) -> Optional[ThreadSummary]:
        emails = self.threads.get(thread_id, [])
        if not emails:
            logger.warning("Thread %s not found or empty", thread_id)
            return None

        emails_sorted = sorted(emails, key=lambda e: e.timestamp)

        all_actions: List[ActionItem] = []
        all_decisions: List[Decision] = []
        all_questions: List[OpenQuestion] = []
        timeline: List[TimelineEntry] = []
        participants = set()

        for email in emails_sorted:
            participants.add(email.sender)
            participants.update(email.to_recipients)
            participants.update(email.cc_recipients)

            all_actions.extend(self.action_extractor.extract(email.body, email.sender))
            all_decisions.extend(self.decision_extractor.extract(email.body, email.sender, email.timestamp))
            all_questions.extend(self.question_extractor.extract(email.body, email.sender, email.timestamp))

            timeline.append(TimelineEntry(
                timestamp=email.timestamp,
                event=f"Email: {email.subject[:60]}",
                actor=email.sender,
            ))

        summary = ThreadSummary(thread_id=thread_id, subject=emails_sorted[0].subject)
        summary.participants = sorted(participants)
        summary.total_messages = len(emails_sorted)
        summary.date_range = (emails_sorted[0].timestamp, emails_sorted[-1].timestamp)
        summary.key_decisions = all_decisions
        summary.action_items = all_actions
        summary.open_questions = all_questions
        summary.timeline = timeline
        summary.executive_summary = self.summarizer.summarize(
            emails_sorted, all_actions, all_decisions, all_questions
        )
        summary.generated_at = datetime.utcnow()

        self.summaries[thread_id] = summary
        logger.info("Generated summary for thread %s (%d messages)", thread_id, len(emails_sorted))
        return summary

    def analyze_all(self) -> Dict[str, ThreadSummary]:
        results = {}
        for tid in self.threads:
            s = self.analyze_thread(tid)
            if s:
                results[tid] = s
        return results

    def reply_with_summary(self, thread_id: str) -> Optional[Dict[str, Any]]:
        """Send a summary email to the thread, enforcing reply-all."""
        summary = self.summaries.get(thread_id)
        if not summary:
            summary = self.analyze_thread(thread_id)
        if not summary:
            return None

        emails = self.threads.get(thread_id, [])
        if not emails:
            return None
        last_email = max(emails, key=lambda e: e.timestamp)

        recipients = self.enforcer.build_recipient_lists(last_email, self.my_address)

        # Enforce reply-all if multi-recipient
        if last_email.is_multi_recipient:
            logger.info(
                "REPLY-ALL ENFORCED for summary reply on thread %s", thread_id
            )

        body_lines = [
            f"Thread Summary: {summary.subject}",
            f"{'=' * 50}",
            "",
            summary.executive_summary,
            "",
        ]

        if summary.key_decisions:
            body_lines.append("KEY DECISIONS:")
            for d in summary.key_decisions:
                body_lines.append(f"  - {d.description} (by {d.decided_by})")
            body_lines.append("")

        if summary.action_items:
            body_lines.append("ACTION ITEMS:")
            for a in summary.action_items:
                status = "DONE" if a.completed else "PENDING"
                body_lines.append(f"  [{status}] {a.description} -> {a.assignee}")
            body_lines.append("")

        if summary.open_questions:
            open_qs = [q for q in summary.open_questions if not q.answered]
            if open_qs:
                body_lines.append("OPEN QUESTIONS:")
                for q in open_qs:
                    body_lines.append(f"  ? {q.question} (asked by {q.asked_by})")
                body_lines.append("")

        outgoing = {
            "from": self.my_address,
            "to": recipients["to"],
            "cc": recipients["cc"],
            "subject": f"Summary: {summary.subject}",
            "body": "\n".join(body_lines),
            "reply_all": True,
        }

        logger.info(
            "Sent summary reply -> To: %s, CC: %s",
            outgoing["to"], outgoing["cc"],
        )
        return outgoing

    def get_status(self) -> Dict[str, Any]:
        return {
            "engine": "V412_EmailThreadSummarizer",
            "total_threads": len(self.threads),
            "summaries_generated": len(self.summaries),
        }


# ---------------------------------------------------------------------------
# CLI entry-point
# ---------------------------------------------------------------------------
def main():
    engine = EmailThreadSummarizer(my_address="zion@ziontech.com")

    tid = "thread_budget_q3"
    emails = [
        ThreadEmail(
            message_id="e1", subject="Q3 Budget Review",
            sender="alice@ziontech.com",
            to_recipients=["zion@ziontech.com", "bob@ziontech.com"],
            cc_recipients=["finance@ziontech.com"],
            body="Team, we need to finalize the Q3 budget. Please review the attached proposal and provide feedback by Friday.",
            timestamp=datetime.utcnow() - timedelta(days=3),
            thread_id=tid,
        ),
        ThreadEmail(
            message_id="e2", subject="Re: Q3 Budget Review",
            sender="bob@ziontech.com",
            to_recipients=["alice@ziontech.com", "zion@ziontech.com"],
            cc_recipients=["finance@ziontech.com"],
            body="Reviewed. I think we should increase the R&D allocation by 15%. Decision: R&D budget increased to $2.3M. @zion please approve the revised numbers.",
            timestamp=datetime.utcnow() - timedelta(days=2),
            thread_id=tid,
        ),
        ThreadEmail(
            message_id="e3", subject="Re: Q3 Budget Review",
            sender="zion@ziontech.com",
            to_recipients=["alice@ziontech.com", "bob@ziontech.com"],
            cc_recipients=["finance@ziontech.com"],
            body="Approved. Agreed on the R&D increase. What about the marketing budget? Can we reduce it by 5%?",
            timestamp=datetime.utcnow() - timedelta(days=1),
            thread_id=tid,
        ),
    ]

    for email in emails:
        engine.ingest(email)

    summary = engine.analyze_thread(tid)
    if summary:
        print(json.dumps(summary.to_dict(), indent=2))

    reply = engine.reply_with_summary(tid)
    if reply:
        print("\n--- Reply-All Summary Email ---")
        print(json.dumps(reply, indent=2))

    print("\nStatus:", json.dumps(engine.get_status(), indent=2))


if __name__ == "__main__":
    main()

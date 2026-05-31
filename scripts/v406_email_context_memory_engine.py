#!/usr/bin/env python3
"""
V406 - AI Email Context Memory Engine
======================================
Remembers conversation history across email threads, builds context profiles
for each contact, and uses memory to generate contextually-aware responses.

REPLY-ALL ENFORCEMENT: All send/reply methods automatically include all
original recipients to prevent accidental exclusion in multi-recipient threads.
"""

import json
import re
import logging
import hashlib
from datetime import datetime, timedelta
from collections import defaultdict
from typing import Dict, List, Optional, Set, Tuple, Any

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V406_ContextMemoryEngine")


class EmailMessage:
    """Represents a single email message with full metadata."""

    def __init__(
        self,
        message_id: str,
        sender: str,
        recipients: List[str],
        cc: List[str],
        bcc: List[str],
        subject: str,
        body: str,
        timestamp: datetime,
        thread_id: Optional[str] = None,
        in_reply_to: Optional[str] = None,
        references: Optional[List[str]] = None,
    ):
        self.message_id = message_id
        self.sender = sender
        self.recipients = recipients
        self.cc = cc
        self.bcc = bcc
        self.subject = subject
        self.body = body
        self.timestamp = timestamp
        self.thread_id = thread_id or self._generate_thread_id()
        self.in_reply_to = in_reply_to
        self.references = references or []

    def _generate_thread_id(self) -> str:
        """Generate a thread ID from subject normalization."""
        clean_subject = re.sub(r"^(Re|Fwd|Fw):\s*", "", self.subject, flags=re.IGNORECASE)
        return hashlib.md5(clean_subject.strip().lower().encode()).hexdigest()[:16]

    @property
    def all_recipients(self) -> Set[str]:
        """Get all recipients including CC and BCC."""
        return set(self.recipients + self.cc + self.bcc)

    def to_dict(self) -> dict:
        return {
            "message_id": self.message_id,
            "sender": self.sender,
            "recipients": self.recipients,
            "cc": self.cc,
            "bcc": self.bcc,
            "subject": self.subject,
            "body": self.body,
            "timestamp": self.timestamp.isoformat(),
            "thread_id": self.thread_id,
            "in_reply_to": self.in_reply_to,
            "references": self.references,
        }


class ContactProfile:
    """Builds and maintains a context profile for each contact."""

    def __init__(self, email: str):
        self.email = email
        self.name = self._extract_name(email)
        self.first_seen: Optional[datetime] = None
        self.last_seen: Optional[datetime] = None
        self.total_emails_sent: int = 0
        self.total_emails_received: int = 0
        self.topics_discussed: Dict[str, int] = defaultdict(int)
        self.sentiment_history: List[Tuple[datetime, float]] = []
        self.response_times: List[float] = []
        self.preferred_greetings: List[str] = []
        self.common_phrases: Dict[str, int] = defaultdict(int)
        self.relationship_score: float = 0.5
        self.threads_participated: Set[str] = set()
        self.communication_style: str = "unknown"

    @staticmethod
    def _extract_name(email: str) -> str:
        """Extract display name from email address."""
        match = re.match(r"^(.+?)\s*<(.+?)>$", email)
        if match:
            return match.group(1).strip()
        local = email.split("@")[0]
        return local.replace(".", " ").replace("_", " ").title()

    def update_sentiment(self, timestamp: datetime, sentiment: float):
        """Record sentiment score for a message."""
        self.sentiment_history.append((timestamp, sentiment))

    def update_topics(self, topics: List[str]):
        """Increment topic frequency counters."""
        for topic in topics:
            self.topics_discussed[topic] += 1

    def analyze_communication_style(self) -> str:
        """Determine communication style from message patterns."""
        if not self.common_phrases:
            return "unknown"
        avg_length = sum(len(p) for p in self.common_phrases) / max(len(self.common_phrases), 1)
        if avg_length > 200:
            self.communication_style = "verbose"
        elif avg_length < 50:
            self.communication_style = "concise"
        else:
            self.communication_style = "balanced"
        return self.communication_style

    def get_top_topics(self, n: int = 5) -> List[Tuple[str, int]]:
        """Return top N topics discussed with this contact."""
        sorted_topics = sorted(self.topics_discussed.items(), key=lambda x: x[1], reverse=True)
        return sorted_topics[:n]


class ThreadMemory:
    """Stores and manages memory for an email thread."""

    def __init__(self, thread_id: str):
        self.thread_id = thread_id
        self.messages: List[EmailMessage] = []
        self.participants: Set[str] = set()
        self.all_recipients_ever: Set[str] = set()
        self.key_decisions: List[str] = []
        self.action_items: List[Dict[str, Any]] = []
        self.context_summary: str = ""

    def add_message(self, message: EmailMessage):
        """Add a message to the thread memory."""
        self.messages.append(message)
        self.participants.add(message.sender)
        self.all_recipients_ever.update(message.all_recipients)
        self.all_recipients_ever.add(message.sender)

    @property
    def full_recipient_set(self) -> Set[str]:
        """All unique recipients who have ever been part of this thread."""
        all_r = set()
        for msg in self.messages:
            all_r.update(msg.all_recipients)
            all_r.add(msg.sender)
        return all_r

    def get_conversation_context(self, max_messages: int = 10) -> str:
        """Generate a contextual summary of recent thread activity."""
        recent = sorted(self.messages, key=lambda m: m.timestamp)[-max_messages:]
        context_lines = []
        for msg in recent:
            snippet = msg.body[:150].replace("\n", " ")
            context_lines.append(f"[{msg.timestamp.strftime('%Y-%m-%d %H:%M')}] {msg.sender}: {snippet}...")
        return "\n".join(context_lines)


class ContextMemoryEngine:
    """
    Main engine that remembers conversation history and builds context profiles.
    Enforces reply-all for all multi-recipient emails.
    """

    def __init__(self, storage_path: Optional[str] = None):
        self.storage_path = storage_path
        self.contact_profiles: Dict[str, ContactProfile] = {}
        self.threads: Dict[str, ThreadMemory] = {}
        self.message_index: Dict[str, EmailMessage] = {}
        self.reply_all_log: List[Dict[str, Any]] = []
        logger.info("V406 AI Email Context Memory Engine initialized")

    def ingest_email(self, email: EmailMessage) -> Dict[str, Any]:
        """Process and store an incoming email in memory."""
        self.message_index[email.message_id] = email

        if email.thread_id not in self.threads:
            self.threads[email.thread_id] = ThreadMemory(email.thread_id)
        self.threads[email.thread_id].add_message(email)

        self._update_contact_profile(email)
        topics = self._extract_topics(email)
        sentiment = self._analyze_sentiment(email.body)

        if email.sender in self.contact_profiles:
            self.contact_profiles[email.sender].update_sentiment(email.timestamp, sentiment)
            self.contact_profiles[email.sender].update_topics(topics)

        logger.info(
            "Ingested email %s from %s | Thread: %s | Topics: %s",
            email.message_id[:8],
            email.sender,
            email.thread_id[:8],
            topics,
        )

        return {
            "status": "ingested",
            "thread_id": email.thread_id,
            "topics": topics,
            "sentiment": sentiment,
            "participants": list(self.threads[email.thread_id].participants),
        }

    def _update_contact_profile(self, email: EmailMessage):
        """Update or create contact profile for the sender."""
        if email.sender not in self.contact_profiles:
            self.contact_profiles[email.sender] = ContactProfile(email.sender)
        profile = self.contact_profiles[email.sender]
        profile.total_emails_sent += 1
        profile.threads_participated.add(email.thread_id)

        if profile.first_seen is None or email.timestamp < profile.first_seen:
            profile.first_seen = email.timestamp
        if profile.last_seen is None or email.timestamp > profile.last_seen:
            profile.last_seen = email.timestamp

        phrases = re.findall(r"\b\w{4,}\b", email.body.lower())
        for phrase in phrases[:50]:
            profile.common_phrases[phrase] += 1

    @staticmethod
    def _extract_topics(email: EmailMessage) -> List[str]:
        """Extract topic keywords from email content."""
        text = f"{email.subject} {email.body}".lower()
        stop_words = {
            "the", "a", "an", "is", "are", "was", "were", "be", "been",
            "have", "has", "had", "do", "does", "did", "will", "would",
            "could", "should", "may", "might", "can", "shall", "to", "of",
            "in", "for", "on", "with", "at", "by", "from", "as", "into",
            "this", "that", "these", "those", "it", "its", "we", "our",
        }
        words = re.findall(r"\b[a-z]{4,}\b", text)
        filtered = [w for w in words if w not in stop_words]
        freq = defaultdict(int)
        for w in filtered:
            freq[w] += 1
        sorted_words = sorted(freq.items(), key=lambda x: x[1], reverse=True)
        return [w for w, _ in sorted_words[:8]]

    @staticmethod
    def _analyze_sentiment(text: str) -> float:
        """Simple sentiment analysis returning score between -1.0 and 1.0."""
        positive_words = {
            "great", "excellent", "wonderful", "thank", "thanks", "appreciate",
            "happy", "glad", "pleased", "good", "love", "fantastic", "perfect",
            "agree", "accept", "confirm", "approve", "delighted",
        }
        negative_words = {
            "terrible", "awful", "bad", "disappointed", "frustrated", "angry",
            "reject", "disagree", "cancel", "problem", "issue", "concern",
            "unfortunately", "sorry", "regret", "complain", "unacceptable",
        }
        words = set(re.findall(r"\b\w+\b", text.lower()))
        pos_count = len(words & positive_words)
        neg_count = len(words & negative_words)
        total = pos_count + neg_count
        if total == 0:
            return 0.0
        return (pos_count - neg_count) / total

    def generate_contextual_response(
        self,
        reply_to_message_id: str,
        my_email: str,
        response_body: str,
        subject_override: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Generate a contextually-aware reply, enforcing reply-all.
        Automatically includes all original recipients.
        """
        original = self.message_index.get(reply_to_message_id)
        if not original:
            logger.error("Cannot reply: message %s not found in memory", reply_to_message_id)
            return {"status": "error", "reason": "Original message not found"}

        thread = self.threads.get(original.thread_id)
        all_original_recipients = set(original.recipients + original.cc)
        all_original_recipients.add(original.sender)
        all_original_recipients.discard(my_email)

        if thread:
            thread_ever_recipients = thread.full_recipient_set
            thread_ever_recipients.discard(my_email)
            missing = thread_ever_recipients - all_original_recipients
            if missing:
                logger.warning(
                    "REPLY-ALL ENFORCEMENT: Adding %d missing thread participants: %s",
                    len(missing),
                    missing,
                )
                all_original_recipients.update(missing)

        primary_recipients = list(set(original.recipients + [original.sender]) - {my_email})
        cc_recipients = list(all_original_recipients - set(primary_recipients))

        context_snippet = ""
        if thread:
            context_snippet = thread.get_conversation_context(max_messages=5)

        sender_profile = self.contact_profiles.get(original.sender)
        greeting = "Hi"
        if sender_profile and sender_profile.preferred_greetings:
            greeting = sender_profile.preferred_greetings[0]
        elif sender_profile:
            greeting = f"Hi {sender_profile.name}"

        reply_subject = subject_override or (
            original.subject
            if original.subject.lower().startswith("re:")
            else f"Re: {original.subject}"
        )

        reply_id = hashlib.md5(
            f"{my_email}{reply_to_message_id}{datetime.now().isoformat()}".encode()
        ).hexdigest()[:16]

        reply_msg = EmailMessage(
            message_id=reply_id,
            sender=my_email,
            recipients=primary_recipients,
            cc=cc_recipients,
            bcc=[],
            subject=reply_subject,
            body=f"{greeting},\n\n{response_body}",
            timestamp=datetime.now(),
            thread_id=original.thread_id,
            in_reply_to=reply_to_message_id,
            references=original.references + [reply_to_message_id],
        )

        self.ingest_email(reply_msg)

        self.reply_all_log.append({
            "reply_id": reply_id,
            "original_id": reply_to_message_id,
            "primary_recipients": primary_recipients,
            "cc_recipients": cc_recipients,
            "enforced_at": datetime.now().isoformat(),
            "thread_participants_added": list(
                (thread.full_recipient_set if thread else set()) - set(original.recipients + original.cc + [original.sender])
            ),
        })

        logger.info(
            "REPLY-ALL ENFORCED: Reply %s sent to %d recipients + %d CC | Thread: %s",
            reply_id[:8],
            len(primary_recipients),
            len(cc_recipients),
            original.thread_id[:8],
        )

        return {
            "status": "sent",
            "reply_id": reply_id,
            "subject": reply_subject,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
            "context_used": bool(context_snippet),
            "greeting_personalized": greeting != "Hi",
        }

    def send_new_email(
        self,
        sender: str,
        recipients: List[str],
        cc: List[str],
        bcc: List[str],
        subject: str,
        body: str,
    ) -> Dict[str, Any]:
        """
        Send a new email with reply-all enforcement for any existing thread context.
        If a related thread exists, ensures all prior participants are included.
        """
        clean_subject = re.sub(r"^(Re|Fwd|Fw):\s*", "", subject, flags=re.IGNORECASE).strip()
        thread_id = hashlib.md5(clean_subject.lower().encode()).hexdigest()[:16]

        enforced_cc = list(cc)
        if thread_id in self.threads:
            thread = self.threads[thread_id]
            all_prior = thread.full_recipient_set - {sender} - set(recipients) - set(cc) - set(bcc)
            if all_prior:
                enforced_cc.extend(all_prior)
                logger.warning(
                    "REPLY-ALL ENFORCEMENT (new email): Added %d prior thread participants to CC",
                    len(all_prior),
                )

        msg_id = hashlib.md5(
            f"{sender}{subject}{datetime.now().isoformat()}".encode()
        ).hexdigest()[:16]

        email = EmailMessage(
            message_id=msg_id,
            sender=sender,
            recipients=recipients,
            cc=enforced_cc,
            bcc=bcc,
            subject=subject,
            body=body,
            timestamp=datetime.now(),
            thread_id=thread_id,
        )

        self.ingest_email(email)

        return {
            "status": "sent",
            "message_id": msg_id,
            "to": recipients,
            "cc": enforced_cc,
            "reply_all_enforced": len(enforced_cc) > len(cc),
            "thread_id": thread_id,
        }

    def get_contact_summary(self, email: str) -> Optional[Dict[str, Any]]:
        """Retrieve a full context profile summary for a contact."""
        profile = self.contact_profiles.get(email)
        if not profile:
            return None
        return {
            "email": profile.email,
            "name": profile.name,
            "first_seen": profile.first_seen.isoformat() if profile.first_seen else None,
            "last_seen": profile.last_seen.isoformat() if profile.last_seen else None,
            "total_emails": profile.total_emails_sent,
            "top_topics": profile.get_top_topics(),
            "communication_style": profile.analyze_communication_style(),
            "threads_count": len(profile.threads_participated),
            "relationship_score": profile.relationship_score,
        }

    def get_thread_summary(self, thread_id: str) -> Optional[Dict[str, Any]]:
        """Get a summary of a thread's full context."""
        thread = self.threads.get(thread_id)
        if not thread:
            return None
        return {
            "thread_id": thread_id,
            "message_count": len(thread.messages),
            "participants": list(thread.participants),
            "all_recipients": list(thread.full_recipient_set),
            "date_range": (
                f"{min(m.timestamp for m in thread.messages).isoformat()} to "
                f"{max(m.timestamp for m in thread.messages).isoformat()}"
            ),
            "context": thread.get_conversation_context(),
        }

    def export_memory(self) -> str:
        """Export the full memory state as JSON."""
        data = {
            "exported_at": datetime.now().isoformat(),
            "contacts": {
                email: {
                    "name": p.name,
                    "emails": p.total_emails_sent,
                    "topics": dict(p.topics_discussed),
                    "style": p.communication_style,
                }
                for email, p in self.contact_profiles.items()
            },
            "threads": {
                tid: {
                    "messages": len(t.messages),
                    "participants": list(t.participants),
                }
                for tid, t in self.threads.items()
            },
            "reply_all_enforcements": len(self.reply_all_log),
        }
        return json.dumps(data, indent=2, default=str)


if __name__ == "__main__":
    engine = ContextMemoryEngine()

    sample_email = EmailMessage(
        message_id="msg001",
        sender="alice@example.com",
        recipients=["bob@example.com", "carol@example.com"],
        cc=["dave@example.com"],
        bcc=[],
        subject="Q3 Budget Review",
        body="Hi team, please review the attached Q3 budget proposal. "
             "We need to finalize by Friday. Great work last quarter!",
        timestamp=datetime.now(),
    )

    result = engine.ingest_email(sample_email)
    print(f"Ingest result: {json.dumps(result, indent=2, default=str)}")

    reply_result = engine.generate_contextual_response(
        reply_to_message_id="msg001",
        my_email="bob@example.com",
        response_body="Thanks Alice, I've reviewed the proposal and have some feedback.",
    )
    print(f"\nReply result: {json.dumps(reply_result, indent=2, default=str)}")

    profile = engine.get_contact_summary("alice@example.com")
    print(f"\nContact profile: {json.dumps(profile, indent=2, default=str)}")

#!/usr/bin/env python3
"""
V409 - AI Email Knowledge Distiller
=====================================
Extracts key facts, decisions, and action items from long email threads into
concise summaries. Builds a searchable knowledge base from email communications.

REPLY-ALL ENFORCEMENT: All send/reply methods automatically include all
original recipients to prevent accidental exclusion in multi-recipient threads.
"""

import json
import re
import logging
import hashlib
from datetime import datetime
from collections import defaultdict
from typing import Dict, List, Optional, Set, Tuple, Any

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V409_KnowledgeDistiller")


class FactType:
    """Categories of extracted facts."""
    DECISION = "decision"
    ACTION_ITEM = "action_item"
    DEADLINE = "deadline"
    COMMITMENT = "commitment"
    QUESTION = "question"
    DECISION_POINT = "decision_point"
    KEY_NUMBER = "key_number"
    CONTACT_INFO = "contact_info"
    REFERENCE = "reference"
    REQUIREMENT = "requirement"


class ExtractedFact:
    """A single fact extracted from an email."""

    def __init__(
        self,
        fact_type: str,
        content: str,
        source_message_id: str,
        source_sender: str,
        confidence: float = 0.8,
        assigned_to: Optional[str] = None,
        due_date: Optional[datetime] = None,
        status: str = "open",
    ):
        self.fact_type = fact_type
        self.content = content
        self.source_message_id = source_message_id
        self.source_sender = source_sender
        self.confidence = confidence
        self.assigned_to = assigned_to
        self.due_date = due_date
        self.status = status
        self.extracted_at = datetime.now()
        self.tags: List[str] = []

    def to_dict(self) -> dict:
        return {
            "type": self.fact_type,
            "content": self.content,
            "source": self.source_message_id[:8],
            "sender": self.source_sender,
            "confidence": self.confidence,
            "assigned_to": self.assigned_to,
            "due_date": self.due_date.isoformat() if self.due_date else None,
            "status": self.status,
            "tags": self.tags,
            "extracted_at": self.extracted_at.isoformat(),
        }


class EmailDigest:
    """A distilled summary of an email thread."""

    def __init__(self, thread_id: str, subject: str):
        self.thread_id = thread_id
        self.subject = subject
        self.summary: str = ""
        self.key_facts: List[ExtractedFact] = []
        self.decisions: List[str] = []
        self.action_items: List[Dict[str, Any]] = []
        self.open_questions: List[str] = []
        self.participants: Set[str] = set()
        self.all_recipients: Set[str] = set()
        self.message_count: int = 0
        self.date_range: Tuple[Optional[datetime], Optional[datetime]] = (None, None)
        self.word_count_original: int = 0
        self.word_count_digest: int = 0
        self.generated_at: Optional[datetime] = None

    @property
    def compression_ratio(self) -> float:
        """Ratio of digest words to original words."""
        if self.word_count_original == 0:
            return 0.0
        return self.word_count_digest / self.word_count_original

    def to_dict(self) -> dict:
        return {
            "thread_id": self.thread_id,
            "subject": self.subject,
            "summary": self.summary,
            "key_facts": [f.to_dict() for f in self.key_facts],
            "decisions": self.decisions,
            "action_items": self.action_items,
            "open_questions": self.open_questions,
            "participants": list(self.participants),
            "message_count": self.message_count,
            "compression_ratio": round(self.compression_ratio, 3),
            "generated_at": self.generated_at.isoformat() if self.generated_at else None,
        }


class KnowledgeBase:
    """Searchable knowledge base built from email communications."""

    def __init__(self):
        self.facts: List[ExtractedFact] = []
        self.digests: Dict[str, EmailDigest] = {}
        self.tag_index: Dict[str, List[ExtractedFact]] = defaultdict(list)
        self.sender_index: Dict[str, List[ExtractedFact]] = defaultdict(list)
        self.type_index: Dict[str, List[ExtractedFact]] = defaultdict(list)
        self.search_log: List[Dict[str, Any]] = []

    def add_fact(self, fact: ExtractedFact):
        """Index a fact for search."""
        self.facts.append(fact)
        self.sender_index[fact.source_sender].append(fact)
        self.type_index[fact.fact_type].append(fact)
        for tag in fact.tags:
            self.tag_index[tag].append(fact)

    def search(
        self,
        query: str = "",
        fact_type: Optional[str] = None,
        sender: Optional[str] = None,
        tag: Optional[str] = None,
        status: Optional[str] = None,
        limit: int = 20,
    ) -> List[Dict[str, Any]]:
        """Search the knowledge base with multiple filters."""
        results = self.facts

        if fact_type:
            results = [f for f in results if f.fact_type == fact_type]
        if sender:
            results = [f for f in results if sender.lower() in f.source_sender.lower()]
        if tag:
            results = [f for f in results if tag.lower() in [t.lower() for t in f.tags]]
        if status:
            results = [f for f in results if f.status == status]
        if query:
            query_lower = query.lower()
            query_terms = query_lower.split()
            results = [
                f for f in results
                if all(term in f.content.lower() for term in query_terms)
            ]

        results = sorted(results, key=lambda f: f.confidence, reverse=True)[:limit]

        self.search_log.append({
            "query": query,
            "filters": {"type": fact_type, "sender": sender, "tag": tag, "status": status},
            "result_count": len(results),
            "timestamp": datetime.now().isoformat(),
        })

        return [f.to_dict() for f in results]


class KnowledgeDistiller:
    """
    Main engine that extracts and distills knowledge from email threads.
    Enforces reply-all for all multi-recipient emails.
    """

    DECISION_PATTERNS = [
        r"(?:we(?:'ve|\s+have)\s+)?(?:decided|agreed|chosen|selected|approved|confirmed)",
        r"(?:the\s+)?decision\s+(?:is|was)\s+(?:to\s+)?",
        r"(?:we(?:'ll|\s+will))\s+(?:go\s+with|proceed\s+with|move\s+forward\s+with)",
        r"(?:let'?s|we\s+should)\s+(?:go\s+ahead|proceed|finalize)",
        r"(?:approved|authorized|greenlit|signed\s+off)",
    ]

    ACTION_ITEM_PATTERNS = [
        r"(?:please|could\s+you|can\s+you)\s+(?:send|prepare|review|update|create|schedule|follow\s+up)",
        r"(?:action\s*item|todo|task|next\s+step)[:\s]",
        r"(?:assigned\s+to|responsible\s+(?:for|is)|owner)[:\s]",
        r"(?:we\s+need\s+(?:to|you\s+to))\s+",
        r"(?:deadline|due\s+(?:date|by)|due)[:\s]",
    ]

    QUESTION_PATTERNS = [
        r"(?:can|could|would|should)\s+(?:you|we|they)\s+",
        r"(?:what|when|where|who|how|why)\s+(?:is|are|was|were|do|does|did|will|would)",
        r"\?$",
    ]

    NUMBER_PATTERNS = [
        r"\$[\d,]+(?:\.\d{2})?",
        r"\d+\s*%",
        r"\d{4}-\d{2}-\d{2}",
        r"\d{1,2}[/-]\d{1,2}[/-]\d{2,4}",
    ]

    def __init__(self):
        self.knowledge_base = KnowledgeBase()
        self.thread_messages: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
        self.thread_recipients: Dict[str, Set[str]] = defaultdict(set)
        self.reply_all_log: List[Dict[str, Any]] = []
        logger.info("V409 AI Email Knowledge Distiller initialized")

    def ingest_email(
        self,
        message_id: str,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
        timestamp: Optional[datetime] = None,
    ) -> Dict[str, Any]:
        """Ingest an email and extract knowledge."""
        ts = timestamp or datetime.now()
        thread_id = hashlib.md5(
            re.sub(r"^(Re|Fwd|Fw):\s*", "", subject, flags=re.IGNORECASE).strip().lower().encode()
        ).hexdigest()[:16]

        msg_data = {
            "message_id": message_id,
            "sender": sender,
            "recipients": recipients,
            "cc": cc,
            "subject": subject,
            "body": body,
            "timestamp": ts.isoformat(),
        }
        self.thread_messages[thread_id].append(msg_data)
        self.thread_recipients[thread_id].add(sender)
        self.thread_recipients[thread_id].update(recipients)
        self.thread_recipients[thread_id].update(cc)

        facts = self._extract_all_facts(message_id, sender, body)
        for fact in facts:
            self.knowledge_base.add_fact(fact)

        logger.info(
            "Ingested email %s | Thread: %s | Facts extracted: %d",
            message_id[:8],
            thread_id[:8],
            len(facts),
        )

        return {
            "status": "ingested",
            "thread_id": thread_id,
            "facts_extracted": len(facts),
            "fact_types": defaultdict(int, {f.fact_type: 1 for f in facts}),
        }

    def _extract_all_facts(
        self, message_id: str, sender: str, body: str
    ) -> List[ExtractedFact]:
        """Extract all fact types from an email body."""
        facts = []
        facts.extend(self._extract_decisions(message_id, sender, body))
        facts.extend(self._extract_action_items(message_id, sender, body))
        facts.extend(self._extract_questions(message_id, sender, body))
        facts.extend(self._extract_numbers(message_id, sender, body))
        facts.extend(self._extract_deadlines(message_id, sender, body))
        facts.extend(self._extract_commitments(message_id, sender, body))

        for fact in facts:
            fact.tags = self._auto_tag(fact.content)

        return facts

    def _extract_decisions(self, msg_id: str, sender: str, body: str) -> List[ExtractedFact]:
        """Extract decisions from email body."""
        facts = []
        for pattern in self.DECISION_PATTERNS:
            for match in re.finditer(pattern, body, re.IGNORECASE):
                start = max(0, match.start() - 10)
                end = min(len(body), match.end() + 80)
                context = body[start:end].strip().replace("\n", " ")
                facts.append(ExtractedFact(
                    fact_type=FactType.DECISION,
                    content=context,
                    source_message_id=msg_id,
                    source_sender=sender,
                    confidence=0.85,
                ))
        return facts

    def _extract_action_items(self, msg_id: str, sender: str, body: str) -> List[ExtractedFact]:
        """Extract action items from email body."""
        facts = []
        for pattern in self.ACTION_ITEM_PATTERNS:
            for match in re.finditer(pattern, body, re.IGNORECASE):
                start = max(0, match.start())
                end = min(len(body), match.end() + 100)
                context = body[start:end].strip().replace("\n", " ")
                assigned = self._extract_assignee(context)
                facts.append(ExtractedFact(
                    fact_type=FactType.ACTION_ITEM,
                    content=context,
                    source_message_id=msg_id,
                    source_sender=sender,
                    confidence=0.75,
                    assigned_to=assigned,
                ))
        return facts

    def _extract_questions(self, msg_id: str, sender: str, body: str) -> List[ExtractedFact]:
        """Extract questions from email body."""
        facts = []
        sentences = re.split(r'[.!]\s+', body)
        for sentence in sentences:
            sentence = sentence.strip()
            if sentence.endswith("?") or any(
                re.search(p, sentence, re.IGNORECASE) for p in self.QUESTION_PATTERNS
            ):
                if len(sentence) > 10:
                    facts.append(ExtractedFact(
                        fact_type=FactType.QUESTION,
                        content=sentence[:200],
                        source_message_id=msg_id,
                        source_sender=sender,
                        confidence=0.7,
                    ))
        return facts[:5]

    def _extract_numbers(self, msg_id: str, sender: str, body: str) -> List[ExtractedFact]:
        """Extract key numbers and dates."""
        facts = []
        for pattern in self.NUMBER_PATTERNS:
            for match in re.finditer(pattern, body):
                start = max(0, match.start() - 30)
                end = min(len(body), match.end() + 30)
                context = body[start:end].strip().replace("\n", " ")
                facts.append(ExtractedFact(
                    fact_type=FactType.KEY_NUMBER,
                    content=context,
                    source_message_id=msg_id,
                    source_sender=sender,
                    confidence=0.9,
                ))
        return facts[:5]

    def _extract_deadlines(self, msg_id: str, sender: str, body: str) -> List[ExtractedFact]:
        """Extract deadline mentions."""
        facts = []
        deadline_patterns = [
            r"(?:due|deadline|by|before)\s+(?:on\s+)?(?:\w+\s+)?\w+\s+\d{1,2}(?:st|nd|rd|th)?",
            r"(?:due|deadline|by|before)\s+\d{4}-\d{2}-\d{2}",
            r"(?:EOD|COB|end\s+of\s+(?:day|week|month|quarter))",
            r"(?:ASAP|as\s+soon\s+as\s+possible)",
            r"(?:this|next)\s+(?:week|month|quarter|Monday|Tuesday|Wednesday|Thursday|Friday)",
        ]
        for pattern in deadline_patterns:
            for match in re.finditer(pattern, body, re.IGNORECASE):
                start = max(0, match.start() - 20)
                end = min(len(body), match.end() + 40)
                context = body[start:end].strip().replace("\n", " ")
                due = self._parse_deadline(match.group())
                facts.append(ExtractedFact(
                    fact_type=FactType.DEADLINE,
                    content=context,
                    source_message_id=msg_id,
                    source_sender=sender,
                    confidence=0.8,
                    due_date=due,
                ))
        return facts

    def _extract_commitments(self, msg_id: str, sender: str, body: str) -> List[ExtractedFact]:
        """Extract commitments and promises."""
        facts = []
        commitment_patterns = [
            r"I(?:'ll|\s+will)\s+(?:send|deliver|prepare|complete|finish|handle|take\s+care)",
            r"(?:we|I)\s+(?:promise|commit|guarantee|ensure|make\s+sure)",
            r"(?:count\s+on\s+(?:me|us))",
            r"(?:my\s+(?:responsibility|task|job))",
        ]
        for pattern in commitment_patterns:
            for match in re.finditer(pattern, body, re.IGNORECASE):
                start = max(0, match.start())
                end = min(len(body), match.end() + 80)
                context = body[start:end].strip().replace("\n", " ")
                facts.append(ExtractedFact(
                    fact_type=FactType.COMMITMENT,
                    content=context,
                    source_message_id=msg_id,
                    source_sender=sender,
                    confidence=0.8,
                ))
        return facts

    @staticmethod
    def _extract_assignee(text: str) -> Optional[str]:
        """Try to extract who an action item is assigned to."""
        patterns = [
            r"(?:@|assigned\s+to|for)\s+(\w+(?:\s+\w+)?)",
            r"(?:please|could|can)\s+(\w+)\s+",
        ]
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        return None

    @staticmethod
    def _parse_deadline(text: str) -> Optional[datetime]:
        """Try to parse a deadline date from text."""
        date_patterns = [
            (r"(\d{4}-\d{2}-\d{2})", "%Y-%m-%d"),
        ]
        for pattern, fmt in date_patterns:
            match = re.search(pattern, text)
            if match:
                try:
                    return datetime.strptime(match.group(1), fmt)
                except ValueError:
                    continue
        return None

    @staticmethod
    def _auto_tag(content: str) -> List[str]:
        """Auto-generate tags from content."""
        tags = []
        tag_keywords = {
            "budget": ["budget", "cost", "price", "expense", "spend"],
            "timeline": ["deadline", "schedule", "timeline", "due", "date"],
            "technical": ["API", "server", "database", "code", "deploy", "bug"],
            "legal": ["contract", "agreement", "legal", "compliance", "liability"],
            "hiring": ["hire", "interview", "candidate", "position", "resume"],
            "sales": ["deal", "revenue", "client", "prospect", "pipeline"],
        }
        content_lower = content.lower()
        for tag, keywords in tag_keywords.items():
            if any(kw in content_lower for kw in keywords):
                tags.append(tag)
        return tags

    def generate_digest(self, thread_id: str) -> Optional[Dict[str, Any]]:
        """Generate a distilled digest for an email thread."""
        messages = self.thread_messages.get(thread_id)
        if not messages:
            return None

        digest = EmailDigest(thread_id, messages[0]["subject"])
        digest.message_count = len(messages)
        digest.participants = self.thread_recipients.get(thread_id, set())
        digest.all_recipients = digest.participants.copy()

        total_words = 0
        all_decisions = []
        all_actions = []
        all_questions = []
        thread_facts = []

        for msg in messages:
            total_words += len(msg["body"].split())
            facts = self._extract_all_facts(msg["message_id"], msg["sender"], msg["body"])
            thread_facts.extend(facts)

            for fact in facts:
                if fact.fact_type == FactType.DECISION:
                    all_decisions.append(fact.content)
                elif fact.fact_type == FactType.ACTION_ITEM:
                    all_actions.append({
                        "content": fact.content,
                        "assigned_to": fact.assigned_to,
                        "source": msg["sender"],
                    })
                elif fact.fact_type == FactType.QUESTION:
                    all_questions.append(fact.content)

        digest.word_count_original = total_words
        digest.decisions = all_decisions
        digest.action_items = all_actions
        digest.open_questions = all_questions
        digest.key_facts = thread_facts

        summary_parts = []
        summary_parts.append(f"Thread: {digest.subject} ({len(messages)} messages)")
        summary_parts.append(f"Participants: {', '.join(sorted(digest.participants))}")
        if all_decisions:
            summary_parts.append(f"\nDECISIONS ({len(all_decisions)}):")
            for i, d in enumerate(all_decisions[:5], 1):
                summary_parts.append(f"  {i}. {d[:120]}")
        if all_actions:
            summary_parts.append(f"\nACTION ITEMS ({len(all_actions)}):")
            for i, a in enumerate(all_actions[:5], 1):
                assignee = f" [{a['assigned_to']}]" if a['assigned_to'] else ""
                summary_parts.append(f"  {i}. {a['content'][:100]}{assignee}")
        if all_questions:
            summary_parts.append(f"\nOPEN QUESTIONS ({len(all_questions)}):")
            for i, q in enumerate(all_questions[:3], 1):
                summary_parts.append(f"  {i}. {q[:120]}")

        digest.summary = "\n".join(summary_parts)
        digest.word_count_digest = len(digest.summary.split())
        digest.generated_at = datetime.now()

        self.knowledge_base.digests[thread_id] = digest

        logger.info(
            "Generated digest for thread %s | %d messages -> %.1f%% compression | %d facts",
            thread_id[:8],
            len(messages),
            digest.compression_ratio * 100,
            len(thread_facts),
        )

        return digest.to_dict()

    def reply_to_thread(
        self,
        thread_id: str,
        my_email: str,
        reply_body: str,
    ) -> Dict[str, Any]:
        """
        Reply to a thread with reply-all enforcement.
        All original recipients are automatically included.
        """
        messages = self.thread_messages.get(thread_id)
        if not messages:
            return {"status": "error", "reason": "Thread not found"}

        all_recipients = self.thread_recipients.get(thread_id, set())
        all_recipients.discard(my_email)

        last_msg = messages[-1]
        primary_recipients = list(
            set(last_msg["recipients"] + [last_msg["sender"]]) - {my_email}
        )
        cc_recipients = list(all_recipients - set(primary_recipients))

        reply_id = hashlib.md5(
            f"reply_{thread_id}_{datetime.now().isoformat()}".encode()
        ).hexdigest()[:16]

        subject = last_msg["subject"]
        if not subject.lower().startswith("re:"):
            subject = f"Re: {subject}"

        reply_data = {
            "message_id": reply_id,
            "sender": my_email,
            "recipients": primary_recipients,
            "cc": cc_recipients,
            "subject": subject,
            "body": reply_body,
            "timestamp": datetime.now().isoformat(),
        }
        self.thread_messages[thread_id].append(reply_data)
        self.thread_recipients[thread_id].add(my_email)

        self.reply_all_log.append({
            "reply_id": reply_id,
            "thread_id": thread_id,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
            "timestamp": datetime.now().isoformat(),
        })

        logger.info(
            "REPLY-ALL ENFORCED: Reply %s to thread %s | %d To + %d CC",
            reply_id[:8],
            thread_id[:8],
            len(primary_recipients),
            len(cc_recipients),
        )

        return {
            "status": "replied",
            "reply_id": reply_id,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
        }

    def send_new_email(
        self,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
    ) -> Dict[str, Any]:
        """Send a new email with reply-all enforcement for existing threads."""
        thread_key = re.sub(r"^(Re|Fwd):\s*", "", subject, flags=re.IGNORECASE).strip().lower()
        thread_id = hashlib.md5(thread_key.encode()).hexdigest()[:16]

        enforced_cc = list(cc)
        if thread_id in self.thread_recipients:
            prior = self.thread_recipients[thread_id] - {sender} - set(recipients) - set(cc)
            if prior:
                enforced_cc.extend(prior)
                logger.warning(
                    "REPLY-ALL ENFORCEMENT (new): Added %d prior thread participants to CC",
                    len(prior),
                )

        msg_id = hashlib.md5(f"new_{sender}_{datetime.now().isoformat()}".encode()).hexdigest()[:16]

        self.ingest_email(
            message_id=msg_id,
            sender=sender,
            recipients=recipients,
            cc=enforced_cc,
            subject=subject,
            body=body,
        )

        return {
            "status": "sent",
            "message_id": msg_id,
            "to": recipients,
            "cc": enforced_cc,
            "reply_all_enforced": len(enforced_cc) > len(cc),
            "thread_id": thread_id,
        }

    def search_knowledge(
        self,
        query: str = "",
        fact_type: Optional[str] = None,
        sender: Optional[str] = None,
        tag: Optional[str] = None,
        status: Optional[str] = None,
        limit: int = 20,
    ) -> List[Dict[str, Any]]:
        """Search the knowledge base."""
        return self.knowledge_base.search(
            query=query,
            fact_type=fact_type,
            sender=sender,
            tag=tag,
            status=status,
            limit=limit,
        )

    def get_all_digests(self) -> List[Dict[str, Any]]:
        """Get all generated digests."""
        return [d.to_dict() for d in self.knowledge_base.digests.values()]


if __name__ == "__main__":
    distiller = KnowledgeDistiller()

    distiller.ingest_email(
        message_id="kd001",
        sender="pm@company.com",
        recipients=["dev@company.com", "design@company.com"],
        cc=["lead@company.com"],
        subject="Sprint Planning - Q4 Launch",
        body="Team, we've decided to launch on December 15th. The budget is $50,000 "
             "for the marketing campaign. Dev team, please prepare the release candidate "
             "by December 10th. Design, could you finalize the landing page by Dec 8? "
             "We need to ensure all API endpoints are stable. Deadline: 2026-12-15.",
    )

    distiller.ingest_email(
        message_id="kd002",
        sender="dev@company.com",
        recipients=["pm@company.com", "design@company.com"],
        cc=["lead@company.com"],
        subject="Re: Sprint Planning - Q4 Launch",
        body="I'll have the RC ready by Dec 10. We need to fix 3 critical bugs first. "
             "The server migration is 80% complete. Can we push the API freeze to Dec 12?",
    )

    digest = distiller.generate_digest(distiller.ingest_email(
        message_id="kd001",
        sender="pm@company.com",
        recipients=["dev@company.com"],
        cc=[],
        subject="Sprint Planning - Q4 Launch",
        body="Test",
    )["thread_id"])
    print(f"Digest: {json.dumps(digest, indent=2, default=str) if digest else 'None'}")

    results = distiller.search_knowledge(query="deadline")
    print(f"\nSearch results: {json.dumps(results, indent=2, default=str)}")

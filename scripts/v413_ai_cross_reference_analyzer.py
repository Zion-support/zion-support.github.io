#!/usr/bin/env python3
"""
V413 - AI Cross-Reference Analyzer
Zion Tech Group - Email Intelligence Engine

Cross-references incoming emails against company knowledge base,
CRM data, and previous conversations to provide context-rich responses.

CRITICAL: All reply/send methods enforce reply-all for multi-recipient emails.
"""

import logging
import json
import hashlib
import re
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Any, Set
from email.utils import parseaddr
from collections import defaultdict

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V413_CrossRefAnalyzer")


# ---------------------------------------------------------------------------
# Data Models
# ---------------------------------------------------------------------------
class IncomingEmail:
    """An incoming email to be analyzed."""

    def __init__(
        self,
        message_id: str,
        subject: str,
        sender: str,
        to_recipients: List[str],
        cc_recipients: List[str],
        body: str,
        timestamp: Optional[datetime] = None,
    ):
        self.message_id = message_id
        self.subject = subject
        self.sender = sender
        self.to_recipients = to_recipients
        self.cc_recipients = cc_recipients
        self.body = body
        self.timestamp = timestamp or datetime.utcnow()

    @property
    def all_recipients(self) -> List[str]:
        return self.to_recipients + self.cc_recipients

    @property
    def is_multi_recipient(self) -> bool:
        return len(set(self.all_recipients)) > 1


class CRMRecord:
    """A CRM contact / deal record."""

    def __init__(self, contact_id: str, name: str, email: str, company: str,
                 deal_stage: str = "", deal_value: float = 0.0,
                 last_interaction: Optional[datetime] = None, tags: Optional[List[str]] = None):
        self.contact_id = contact_id
        self.name = name
        self.email = email
        self.company = company
        self.deal_stage = deal_stage
        self.deal_value = deal_value
        self.last_interaction = last_interaction or datetime.utcnow()
        self.tags = tags or []

    def to_dict(self) -> Dict[str, Any]:
        return {
            "contact_id": self.contact_id,
            "name": self.name,
            "email": self.email,
            "company": self.company,
            "deal_stage": self.deal_stage,
            "deal_value": self.deal_value,
            "last_interaction": self.last_interaction.isoformat(),
            "tags": self.tags,
        }


class KnowledgeArticle:
    """An article in the company knowledge base."""

    def __init__(self, article_id: str, title: str, content: str,
                 category: str = "", tags: Optional[List[str]] = None,
                 updated_at: Optional[datetime] = None):
        self.article_id = article_id
        self.title = title
        self.content = content
        self.category = category
        self.tags = tags or []
        self.updated_at = updated_at or datetime.utcnow()

    def to_dict(self) -> Dict[str, Any]:
        return {
            "article_id": self.article_id,
            "title": self.title,
            "category": self.category,
            "tags": self.tags,
            "updated_at": self.updated_at.isoformat(),
        }


class PreviousConversation:
    """A record of a previous conversation with a contact."""

    def __init__(self, conv_id: str, contact_email: str, subject: str,
                 summary: str, date: datetime, outcome: str = ""):
        self.conv_id = conv_id
        self.contact_email = contact_email
        self.subject = subject
        self.summary = summary
        self.date = date
        self.outcome = outcome

    def to_dict(self) -> Dict[str, Any]:
        return {
            "conv_id": self.conv_id,
            "contact_email": self.contact_email,
            "subject": self.subject,
            "summary": self.summary,
            "date": self.date.isoformat(),
            "outcome": self.outcome,
        }


class CrossRefResult:
    """Result of cross-referencing an email."""

    def __init__(self, email_id: str):
        self.email_id = email_id
        self.crm_matches: List[CRMRecord] = []
        self.kb_articles: List[KnowledgeArticle] = []
        self.previous_conversations: List[PreviousConversation] = []
        self.suggested_response: str = ""
        self.context_notes: List[str] = []
        self.confidence_score: float = 0.0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "email_id": self.email_id,
            "crm_matches": [c.to_dict() for c in self.crm_matches],
            "kb_articles": [a.to_dict() for a in self.kb_articles],
            "previous_conversations": [c.to_dict() for c in self.previous_conversations],
            "suggested_response": self.suggested_response,
            "context_notes": self.context_notes,
            "confidence_score": self.confidence_score,
        }


# ---------------------------------------------------------------------------
# Reply-All Enforcement
# ---------------------------------------------------------------------------
class ReplyAllEnforcer:
    """Ensures reply-all for multi-recipient emails."""

    @staticmethod
    def enforce(original: IncomingEmail, my_address: str) -> Dict[str, List[str]]:
        to_set: Set[str] = set()
        cc_set: Set[str] = set()

        to_set.add(original.sender)
        for r in original.to_recipients:
            if r.lower() != my_address.lower():
                to_set.add(r)
        for r in original.cc_recipients:
            if r.lower() != my_address.lower():
                cc_set.add(r)

        if original.is_multi_recipient:
            logger.info(
                "REPLY-ALL ENFORCED: Multi-recipient email — To=%s CC=%s",
                sorted(to_set), sorted(cc_set),
            )

        return {"to": sorted(to_set), "cc": sorted(cc_set)}


# ---------------------------------------------------------------------------
# Knowledge Sources
# ---------------------------------------------------------------------------
class CRMDatabase:
    """In-memory CRM database for cross-referencing."""

    def __init__(self):
        self.records: Dict[str, CRMRecord] = {}

    def add_record(self, record: CRMRecord) -> None:
        self.records[record.email.lower()] = record
        logger.debug("CRM: added %s", record.email)

    def search_by_email(self, email: str) -> Optional[CRMRecord]:
        return self.records.get(email.lower())

    def search_by_company(self, company: str) -> List[CRMRecord]:
        return [r for r in self.records.values() if r.company.lower() == company.lower()]

    def search_by_tags(self, tags: List[str]) -> List[CRMRecord]:
        results = []
        tag_set = set(t.lower() for t in tags)
        for r in self.records.values():
            if tag_set.intersection(set(t.lower() for t in r.tags)):
                results.append(r)
        return results


class KnowledgeBase:
    """In-memory knowledge base for cross-referencing."""

    def __init__(self):
        self.articles: List[KnowledgeArticle] = []

    def add_article(self, article: KnowledgeArticle) -> None:
        self.articles.append(article)
        logger.debug("KB: added %s", article.title)

    def search(self, query: str, max_results: int = 5) -> List[KnowledgeArticle]:
        query_lower = query.lower()
        words = set(re.findall(r'\w+', query_lower))
        scored = []
        for article in self.articles:
            text = f"{article.title} {article.content} {' '.join(article.tags)}".lower()
            score = sum(1 for w in words if w in text)
            if score > 0:
                scored.append((score, article))
        scored.sort(key=lambda x: x[0], reverse=True)
        return [a for _, a in scored[:max_results]]


class ConversationHistory:
    """Stores previous conversation records."""

    def __init__(self):
        self.conversations: List[PreviousConversation] = []

    def add(self, conv: PreviousConversation) -> None:
        self.conversations.append(conv)

    def search_by_contact(self, email: str, limit: int = 10) -> List[PreviousConversation]:
        matches = [c for c in self.conversations if c.contact_email.lower() == email.lower()]
        return sorted(matches, key=lambda c: c.date, reverse=True)[:limit]

    def search_by_keywords(self, keywords: List[str], limit: int = 5) -> List[PreviousConversation]:
        results = []
        kw_lower = [k.lower() for k in keywords]
        for c in self.conversations:
            text = f"{c.subject} {c.summary}".lower()
            if any(kw in text for kw in kw_lower):
                results.append(c)
        return results[:limit]


# ---------------------------------------------------------------------------
# Context Builder
# ---------------------------------------------------------------------------
class ContextBuilder:
    """Builds context-rich response suggestions."""

    def build_suggestion(self, email: IncomingEmail, result: CrossRefResult) -> str:
        sender_name = parseaddr(email.sender)[0] or email.sender.split("@")[0]
        parts = [f"Hi {sender_name},\n"]

        # Add CRM context
        if result.crm_matches:
            crm = result.crm_matches[0]
            parts.append(
                f"I see from our records that you're with {crm.company} "
                f"and your current deal is at the {crm.deal_stage} stage."
            )

        # Add KB context
        if result.kb_articles:
            parts.append(f"\nRegarding your question, I found some relevant information:")
            for article in result.kb_articles[:2]:
                parts.append(f"- {article.title} ({article.category})")

        # Add previous conversation context
        if result.previous_conversations:
            last = result.previous_conversations[0]
            parts.append(
                f"\nLast time we discussed \"{last.subject}\" on "
                f"{last.date.strftime('%Y-%m-%d')}. "
                f"The outcome was: {last.outcome}"
            )

        # Generic closing
        parts.append(
            f"\nThank you for reaching out. I'll get back to you "
            f"with more details shortly.\n\nBest regards"
        )

        return "\n".join(parts)


# ---------------------------------------------------------------------------
# Main Engine
# ---------------------------------------------------------------------------
class CrossRefAnalyzer:
    """
    V413 - AI Cross-Reference Analyzer

    Cross-references incoming emails against CRM, knowledge base,
    and conversation history to produce context-rich responses.
    Enforces reply-all on all outgoing replies to multi-recipient emails.
    """

    def __init__(self, my_address: str = "user@ziontech.com"):
        self.my_address = my_address
        self.crm = CRMDatabase()
        self.kb = KnowledgeBase()
        self.history = ConversationHistory()
        self.context_builder = ContextBuilder()
        self.enforcer = ReplyAllEnforcer()
        self.results: Dict[str, CrossRefResult] = {}
        self.sent_replies: List[Dict[str, Any]] = []
        logger.info("CrossRefAnalyzer initialised for %s", my_address)

    def analyze(self, email: IncomingEmail) -> CrossRefResult:
        """Cross-reference an incoming email against all data sources."""
        result = CrossRefResult(email.message_id)

        # CRM lookup
        crm_match = self.crm.search_by_email(email.sender)
        if crm_match:
            result.crm_matches.append(crm_match)
            result.context_notes.append(
                f"CRM: Contact found — {crm_match.name} at {crm_match.company}, "
                f"deal stage: {crm_match.deal_stage}"
            )

        # Also check by company name mentioned in body
        body_words = re.findall(r'[A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*', email.body)
        for word in body_words[:10]:
            company_matches = self.crm.search_by_company(word)
            for cm in company_matches:
                if cm not in result.crm_matches:
                    result.crm_matches.append(cm)
                    result.context_notes.append(f"CRM: Company match — {cm.company}")

        # Knowledge base search
        search_text = f"{email.subject} {email.body}"
        kb_matches = self.kb.search(search_text)
        result.kb_articles = kb_matches
        if kb_matches:
            result.context_notes.append(
                f"KB: Found {len(kb_matches)} relevant article(s)"
            )

        # Previous conversations
        prev_convs = self.history.search_by_contact(email.sender)
        if prev_convs:
            result.previous_conversations = prev_convs
            result.context_notes.append(
                f"History: {len(prev_convs)} previous conversation(s) with {email.sender}"
            )

        # Also keyword-search conversations
        keywords = re.findall(r'\w{4,}', email.subject)
        kw_convs = self.history.search_by_keywords(keywords)
        for kc in kw_convs:
            if kc not in result.previous_conversations:
                result.previous_conversations.append(kc)

        # Build suggested response
        result.suggested_response = self.context_builder.build_suggestion(email, result)

        # Confidence score
        score = 0.0
        if result.crm_matches:
            score += 0.3
        if result.kb_articles:
            score += 0.3
        if result.previous_conversations:
            score += 0.2
        score += min(len(result.context_notes) * 0.05, 0.2)
        result.confidence_score = min(score, 1.0)

        self.results[email.message_id] = result
        logger.info(
            "Analyzed email %s — confidence: %.2f, notes: %d",
            email.message_id, result.confidence_score, len(result.context_notes),
        )
        return result

    def send_contextual_reply(self, email: IncomingEmail, custom_body: Optional[str] = None) -> Dict[str, Any]:
        """Send a context-rich reply, enforcing reply-all."""
        result = self.results.get(email.message_id)
        if not result:
            result = self.analyze(email)

        recipients = self.enforcer.enforce(email, self.my_address)

        # Enforce reply-all for multi-recipient
        if email.is_multi_recipient:
            logger.info(
                "REPLY-ALL ENFORCED for contextual reply to %s", email.message_id
            )

        body = custom_body or result.suggested_response

        outgoing = {
            "from": self.my_address,
            "to": recipients["to"],
            "cc": recipients["cc"],
            "subject": f"Re: {email.subject}",
            "body": body,
            "in_reply_to": email.message_id,
            "reply_all": True,
            "cross_ref_confidence": result.confidence_score,
        }

        self.sent_replies.append(outgoing)
        logger.info(
            "Sent contextual reply -> To: %s, CC: %s (confidence: %.2f)",
            outgoing["to"], outgoing["cc"], result.confidence_score,
        )
        return outgoing

    def get_status(self) -> Dict[str, Any]:
        return {
            "engine": "V413_CrossRefAnalyzer",
            "crm_records": len(self.crm.records),
            "kb_articles": len(self.kb.articles),
            "conversations_stored": len(self.history.conversations),
            "emails_analyzed": len(self.results),
            "replies_sent": len(self.sent_replies),
        }


# ---------------------------------------------------------------------------
# CLI entry-point
# ---------------------------------------------------------------------------
def main():
    engine = CrossRefAnalyzer(my_address="zion@ziontech.com")

    # Populate CRM
    engine.crm.add_record(CRMRecord(
        "c1", "Alice Johnson", "alice@acmecorp.com", "AcmeCorp",
        deal_stage="Negotiation", deal_value=150000.0,
        tags=["enterprise", "q3-target"],
    ))
    engine.crm.add_record(CRMRecord(
        "c2", "Bob Smith", "bob@techstart.io", "TechStart",
        deal_stage="Proposal", deal_value=75000.0,
        tags=["startup", "ai-ml"],
    ))

    # Populate KB
    engine.kb.add_article(KnowledgeArticle(
        "kb1", "Enterprise Pricing Guide",
        "Enterprise pricing starts at $100K/year with volume discounts...",
        category="Sales", tags=["pricing", "enterprise"],
    ))
    engine.kb.add_article(KnowledgeArticle(
        "kb2", "API Integration Documentation",
        "Our REST API supports OAuth2 authentication and rate limits of 1000 req/min...",
        category="Technical", tags=["api", "integration"],
    ))

    # Populate conversation history
    engine.history.add(PreviousConversation(
        "conv1", "alice@acmecorp.com", "Initial Discovery Call",
        "Discussed AcmeCorp's needs for AI automation. Interested in enterprise tier.",
        datetime.utcnow() - timedelta(days=14), outcome="Scheduled demo",
    ))

    # Analyze an incoming email
    incoming = IncomingEmail(
        message_id="inc001",
        subject="Follow-up on Enterprise Pricing",
        sender="alice@acmecorp.com",
        to_recipients=["zion@ziontech.com", "sales@ziontech.com"],
        cc_recipients=["procurement@acmecorp.com"],
        body="Hi Zion, following up on our call about enterprise pricing. "
             "Can you share the API integration documentation? "
             "Our team at AcmeCorp needs to evaluate technical requirements.",
        timestamp=datetime.utcnow(),
    )

    result = engine.analyze(incoming)
    print("=== Cross-Reference Result ===")
    print(json.dumps(result.to_dict(), indent=2))

    reply = engine.send_contextual_reply(incoming)
    print("\n=== Contextual Reply (Reply-All) ===")
    print(json.dumps(reply, indent=2))

    print("\nStatus:", json.dumps(engine.get_status(), indent=2))


if __name__ == "__main__":
    main()

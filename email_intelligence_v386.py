"""
V386 - Email Thread Context Memory
Remember key facts, commitments, and context from previous emails in a thread.
Surface relevant past information when composing replies.
"""

import json
import re
from datetime import datetime, timedelta


class EmailThreadContextMemory:
    """Engine for remembering and surfacing context from email threads."""

    def __init__(self):
        self.thread_store = {}
        self.context_facts = []
        self.commitments = []

    def ingest_email(self, email):
        """Ingest an email into the thread memory store."""
        thread_id = email.get("thread_id", "unknown")
        if thread_id not in self.thread_store:
            self.thread_store[thread_id] = {
                "emails": [],
                "key_facts": [],
                "commitments": [],
                "participants": set(),
                "topics": [],
            }

        thread = self.thread_store[thread_id]
        thread["emails"].append({
            "from": email["from"],
            "to": email["to"],
            "cc": email.get("cc", []),
            "subject": email["subject"],
            "body": email["body"],
            "timestamp": email["timestamp"],
        })

        # Track participants
        thread["participants"].add(email["from"])
        for recipient in email["to"]:
            thread["participants"].add(recipient)
        for cc in email.get("cc", []):
            thread["participants"].add(cc)

        # Extract key facts
        facts = self._extract_facts(email["body"])
        thread["key_facts"].extend(facts)

        # Extract commitments
        commitments = self._extract_commitments(email["body"])
        thread["commitments"].extend(commitments)

        # Extract topics
        topics = self._extract_topics(email["body"])
        thread["topics"].extend(topics)

        return {
            "thread_id": thread_id,
            "facts_extracted": len(facts),
            "commitments_extracted": len(commitments),
            "total_emails_in_thread": len(thread["emails"]),
        }

    def _extract_facts(self, body):
        """Extract key facts from email body."""
        facts = []
        # Look for factual statements with numbers, dates, names
        patterns = [
            (r'(?:deadline|due|by)\s+[:\s]*(\w+\s+\d+)', 'deadline'),
            (r'(?:budget|cost|price)\s+[:\s]*\$?([\d,]+(?:\.\d+)?)', 'budget'),
            (r'(?:meeting|call|sync)\s+(?:on|at)\s+(\w+\s+\w+)', 'meeting'),
            (r'(?:approved|confirmed|agreed)\s+(?:that\s+)?(.+?)(?:\.|$)', 'approval'),
        ]
        for pattern, fact_type in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            for match in matches:
                facts.append({"type": fact_type, "value": match, "source": body[:50]})

        # Extract named entities (simple approach)
        capitalized_words = re.findall(r'\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b', body)
        for entity in capitalized_words[:5]:
            if len(entity) > 3:
                facts.append({"type": "entity", "value": entity, "source": body[:50]})

        return facts

    def _extract_commitments(self, body):
        """Extract commitments and action items from email body."""
        commitments = []
        commitment_patterns = [
            r'I (?:will|shall|can|promise to) (.+?)(?:\.|$)',
            r'(?:we|I) (?:agree to|commit to|plan to) (.+?)(?:\.|$)',
            r'(?:action item|todo|task)[:\s]*(.+?)(?:\.|$)',
            r'(?:please|kindly)\s+(.+?)(?:\.|$)',
            r'(?:responsible for|in charge of) (.+?)(?:\.|$)',
        ]
        for pattern in commitment_patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            for match in matches:
                commitments.append({
                    "commitment": match.strip(),
                    "detected_at": datetime.now().isoformat(),
                })
        return commitments

    def _extract_topics(self, body):
        """Extract topics from email body."""
        # Simple keyword-based topic extraction
        topic_keywords = {
            "project": ["project", "milestone", "deliverable", "sprint"],
            "finance": ["budget", "cost", "revenue", "invoice", "payment"],
            "hr": ["hiring", "interview", "onboarding", "salary"],
            "technical": ["bug", "feature", "deployment", "server", "API"],
            "meeting": ["meeting", "agenda", "minutes", "calendar"],
        }
        detected_topics = []
        body_lower = body.lower()
        for topic, keywords in topic_keywords.items():
            if any(kw in body_lower for kw in keywords):
                detected_topics.append(topic)
        return detected_topics

    def surface_context(self, thread_id, new_email_draft):
        """Surface relevant context when composing a reply."""
        if thread_id not in self.thread_store:
            return {"context_available": False, "suggestions": []}

        thread = self.thread_store[thread_id]
        participants = list(thread["participants"])
        reply_all_required = len(participants) > 1

        # Determine relevant facts based on draft content
        relevant_facts = []
        draft_lower = new_email_draft.lower()
        for fact in thread["key_facts"]:
            if any(word in draft_lower for word in fact["value"].lower().split()):
                relevant_facts.append(fact)

        # Outstanding commitments
        outstanding = [c for c in thread["commitments"]]

        return {
            "thread_id": thread_id,
            "context_available": True,
            "total_emails": len(thread["emails"]),
            "participants": participants,
            "reply_all_required": reply_all_required,
            "reply_all_enforced": reply_all_required,
            "relevant_facts": relevant_facts[:5],
            "outstanding_commitments": outstanding[:5],
            "detected_topics": list(set(thread["topics"])),
            "suggestions": self._generate_suggestions(relevant_facts, outstanding, thread),
        }

    def _generate_suggestions(self, facts, commitments, thread):
        """Generate context-aware suggestions for the reply."""
        suggestions = []
        if commitments:
            suggestions.append(f"Reference {len(commitments)} outstanding commitment(s) from previous emails")
        if facts:
            suggestions.append(f"Consider mentioning {len(facts)} relevant fact(s) from thread history")
        if len(thread["emails"]) > 3:
            suggestions.append("Thread is getting long - consider summarizing key points")
        if "deadline" in [f["type"] for f in facts]:
            suggestions.append("A deadline was mentioned previously - confirm status")
        return suggestions


def main():
    engine = EmailThreadContextMemory()

    # Sample thread data
    sample_emails = [
        {
            "thread_id": "thread-001",
            "from": "alice@company.com",
            "to": ["bob@company.com", "carol@company.com"],
            "cc": ["dave@company.com"],
            "subject": "Q3 Project Budget Review",
            "body": "Hi team, The budget for Q3 is $150,000. We need to finalize the allocation by June 15. I will prepare the breakdown document. Please review the attached proposal.",
            "timestamp": "2026-05-28T09:00:00Z",
        },
        {
            "thread_id": "thread-001",
            "from": "bob@company.com",
            "to": ["alice@company.com", "carol@company.com"],
            "cc": ["dave@company.com"],
            "subject": "Re: Q3 Project Budget Review",
            "body": "Thanks Alice. I agree to handle the marketing portion of the budget. The meeting on Thursday should cover the technical allocation. Action item: Carol to provide engineering estimates.",
            "timestamp": "2026-05-28T11:30:00Z",
        },
        {
            "thread_id": "thread-001",
            "from": "carol@company.com",
            "to": ["alice@company.com", "bob@company.com"],
            "cc": ["dave@company.com"],
            "subject": "Re: Q3 Project Budget Review",
            "body": "I will provide the engineering estimates by Wednesday. The server migration cost is approximately $45,000. We also need to budget for the new API integration.",
            "timestamp": "2026-05-29T08:15:00Z",
        },
    ]

    # Ingest all emails
    ingestion_results = []
    for email in sample_emails:
        result = engine.ingest_email(email)
        ingestion_results.append(result)

    # Now simulate composing a reply
    draft_reply = "Hi everyone, I wanted to follow up on the budget discussion and the deadline for Q3."
    context = engine.surface_context("thread-001", draft_reply)

    output = {
        "version": "V386",
        "engine": "Email Thread Context Memory",
        "timestamp": datetime.now().isoformat(),
        "reply_all_required": context.get("reply_all_required", False),
        "reply_all_enforced": context.get("reply_all_enforced", False),
        "ingestion_results": ingestion_results,
        "context_surface": context,
        "sample_draft": draft_reply,
    }

    print(json.dumps(output, indent=2, default=str))
    return output


if __name__ == "__main__":
    main()

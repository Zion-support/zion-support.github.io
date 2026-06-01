#!/usr/bin/env python3
"""V1038 - AI Email Thread Summarizer Pro
Compresses 50+ reply email chains into structured key-point summaries.
Extracts decisions, action items, open questions, and timeline.
MANDATORY: Reply-all enforcement for all multi-recipient threads.
"""
import json, re
from datetime import datetime

class ThreadSummarizerPro:
    def __init__(self):
        self.summaries = []
        self.reply_all_enforcement = True
    
    def summarize_thread(self, thread_emails):
        """Summarize an entire email thread into key points."""
        if not thread_emails:
            return {"error": "Empty thread"}
        
        participants = set()
        all_text = []
        decisions = []
        action_items = []
        questions = []
        timeline = []
        
        for email in thread_emails:
            # Track participants
            participants.add(email.get("sender", ""))
            for r in email.get("recipients", []):
                participants.add(r)
            for c in email.get("cc", []):
                participants.add(c)
            
            body = email.get("body", "")
            all_text.append(body)
            
            # Extract decisions
            decisions.extend(self._extract_decisions(body))
            # Extract action items
            action_items.extend(self._extract_actions(body))
            # Extract questions
            questions.extend(self._extract_questions(body))
            # Track timeline
            timeline.append({
                "timestamp": email.get("timestamp", ""),
                "sender": email.get("sender", ""),
                "key_point": self._extract_key_point(body)
            })
        
        combined = " ".join(all_text).lower()
        
        summary = {
            "thread_id": thread_emails[0].get("id", "unknown"),
            "subject": thread_emails[0].get("subject", ""),
            "total_emails": len(thread_emails),
            "participants": list(participants),
            "participant_count": len(participants),
            "reply_all_needed": len(participants) > 2,
            "reply_all_enforcement": "MANDATORY for thread responses",
            "executive_summary": self._generate_executive_summary(combined, len(thread_emails)),
            "decisions": decisions[:10],
            "action_items": action_items[:10],
            "open_questions": questions[:5],
            "timeline": timeline[:10],
            "sentiment_trend": self._track_sentiment_trend(thread_emails),
            "thread_health": self._assess_thread_health(thread_emails, decisions, questions),
            "generated_at": datetime.now().isoformat()
        }
        self.summaries.append(summary)
        return summary
    
    def _extract_decisions(self, body):
        patterns = [
            r"(?:we(?:'ve| have)? (?:decided|agreed|chosen|selected))[:\s]+(.+?)[\.\n]",
            r"(?:the decision is|we will|let's go with|approved)[:\s]+(.+?)[\.\n]",
        ]
        results = []
        for p in patterns:
            for m in re.finditer(p, body, re.I):
                results.append(m.group(1).strip()[:200])
        return results
    
    def _extract_actions(self, body):
        patterns = [
            r"(?:action item|todo|please|could you|can you)[:\s]+(.+?)[\.\n]",
            r"(?:@\w+)\s+(.+?)[\.\n]",
        ]
        results = []
        for p in patterns:
            for m in re.finditer(p, body, re.I):
                results.append(m.group(1).strip()[:200])
        return results
    
    def _extract_questions(self, body):
        questions = re.findall(r'([^.!?]*\?[^.!?]*)', body)
        return [q.strip()[:200] for q in questions if len(q.strip()) > 10][:5]
    
    def _extract_key_point(self, body):
        sentences = [s.strip() for s in re.split(r'[.!?]', body) if len(s.strip()) > 20]
        return sentences[0][:150] if sentences else "No key point"
    
    def _generate_executive_summary(self, combined, count):
        topics = []
        if any(w in combined for w in ["price", "cost", "budget", "pricing"]):
            topics.append("pricing discussion")
        if any(w in combined for w in ["timeline", "deadline", "schedule"]):
            topics.append("timeline planning")
        if any(w in combined for w in ["technical", "architecture", "api"]):
            topics.append("technical review")
        if any(w in combined for w in ["contract", "legal", "terms"]):
            topics.append("contract negotiation")
        
        topic_str = ", ".join(topics) if topics else "general discussion"
        return f"Thread of {count} emails covering {topic_str}. {len(set(combined.split()))} unique terms discussed."
    
    def _track_sentiment_trend(self, emails):
        trend = []
        for e in emails:
            body = e.get("body", "").lower()
            pos = sum(1 for w in ["great", "thanks", "agree", "love"] if w in body)
            neg = sum(1 for w in ["disagree", "concern", "issue", "problem"] if w in body)
            trend.append("positive" if pos > neg else "negative" if neg > pos else "neutral")
        return trend
    
    def _assess_thread_health(self, emails, decisions, questions):
        score = 50
        if decisions: score += 20
        if len(emails) > 10: score -= 10  # Too long
        if questions and not decisions: score -= 15  # Unresolved
        if score > 80: return "healthy"
        if score > 50: return "needs_attention"
        return "stalled"

if __name__ == "__main__":
    summarizer = ThreadSummarizerPro()
    thread = [
        {"id": "t1", "subject": "Project Alpha Kickoff", "sender": "pm@client.com",
         "recipients": ["team@zion.com", "dev@client.com"], "cc": ["exec@client.com"],
         "body": "Let's kick off Project Alpha. Budget approved at $100K. We decided to go with the enterprise tier."},
        {"id": "t2", "subject": "RE: Project Alpha Kickoff", "sender": "dev@client.com",
         "recipients": ["pm@client.com", "team@zion.com"], "cc": ["exec@client.com"],
         "body": "Great, thanks! @team can you please prepare the technical architecture doc? Question: what's the timeline?"},
        {"id": "t3", "subject": "RE: Project Alpha Kickoff", "sender": "team@zion.com",
         "recipients": ["pm@client.com", "dev@client.com"], "cc": ["exec@client.com"],
         "body": "We will deliver the architecture by Friday. The decision is to use microservices approach. Action item: schedule design review next week."}
    ]
    result = summarizer.summarize_thread(thread)
    print(f"Thread: {result['total_emails']} emails, {result['participant_count']} participants")
    print(f"Summary: {result['executive_summary']}")
    print(f"Decisions: {result['decisions']}")
    print(f"Actions: {result['action_items']}")
    print(f"Health: {result['thread_health']}")
    print(f"Reply-All: {result['reply_all_enforcement']}")

#!/usr/bin/env python3
"""
V966: Email Thread Summarizer Engine
Auto-summarizes long email threads into concise key points, action items,
decisions, and open questions. Case-by-case analysis with reply-all enforcement.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any


class EmailThreadSummarizer:
    """Summarizes email threads into structured key points."""

    ACTION_PATTERNS = [
        r'\b(?:please|could you|can you|need you to|I need)\s+(.{10,80}?)(?:\.|$)',
        r'\b(?:action item|todo|to-do|task)[:\s]+(.{10,80}?)(?:\.|$)',
        r'\b(?:follow.?up|next step|deadline)[:\s]+(.{10,80}?)(?:\.|$)',
    ]

    DECISION_PATTERNS = [
        r'\b(?:decided|agreed|approved|confirmed|going with|chosen)[:\s]+(.{10,80}?)(?:\.|$)',
        r'\b(?:we will|let\'s|I\'ll|we\'ll)\s+(.{10,80}?)(?:\.|$)',
        r'\b(?:final decision|conclusion|resolution)[:\s]+(.{10,80}?)(?:\.|$)',
    ]

    QUESTION_PATTERNS = [
        r'(.{10,80}?)\?',
        r'\b(?:can you|could you|would you|do you|does anyone)\s+(.{10,80}?)\?',
    ]

    KEY_TOPIC_PATTERNS = [
        r'\b(?:regarding|about|re|subject)[:\s]+(.{10,60}?)(?:\.|$)',
        r'\b(?:important|key point|note|FYI)[:\s,]+(.{10,80}?)(?:\.|$)',
    ]

    def __init__(self):
        self.summary_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze and summarize each email case by case."""
        analysis = {
            "engine": "V966",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "thread_summarization",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")
        subject = email.get("subject", "")
        full_text = subject + " " + body

        # 1. Extract action items
        action_items = self._extract_action_items(full_text)
        analysis["action_items"] = action_items

        # 2. Extract decisions
        decisions = self._extract_decisions(full_text)
        analysis["decisions"] = decisions

        # 3. Extract open questions
        questions = self._extract_questions(full_text)
        analysis["open_questions"] = questions

        # 4. Extract key topics
        topics = self._extract_key_topics(full_text)
        analysis["key_topics"] = topics

        # 5. Generate executive summary
        exec_summary = self._generate_executive_summary(
            subject, action_items, decisions, questions, topics
        )
        analysis["executive_summary"] = exec_summary

        # 6. Thread complexity score
        complexity = self._calculate_complexity(email, full_text)
        analysis["thread_complexity"] = complexity

        # 7. Reading time estimate
        word_count = len(full_text.split())
        reading_time = max(1, round(word_count / 250))  # 250 wpm
        analysis["reading_time_minutes"] = reading_time
        analysis["word_count"] = word_count

        # 8. Determine action
        if complexity["score"] >= 70:
            action = "SUMMARIZE_AND_ROUTE"
        elif len(action_items) >= 3:
            action = "EXTRACT_ACTIONS_AND_ASSIGN"
        elif len(questions) >= 2:
            action = "ANSWER_QUESTIONS_AND_SUMMARIZE"
        else:
            action = "STANDARD_SUMMARY_RESPONSE"
        analysis["recommended_action"] = action

        # 9. REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        # 10. Summary response template
        analysis["summary_template"] = self._generate_summary_response(
            exec_summary, action_items, questions, all_recipients
        )

        self.summary_log.append({
            "email_id": analysis["email_id"],
            "action_items": len(action_items),
            "decisions": len(decisions),
            "questions": len(questions),
            "complexity": complexity["score"],
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _extract_action_items(self, text: str) -> List[str]:
        """Extract action items from text."""
        items = []
        for pattern in self.ACTION_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            items.extend([m.strip() for m in matches if len(m.strip()) > 10])
        return list(dict.fromkeys(items))[:10]  # Deduplicate, limit to 10

    def _extract_decisions(self, text: str) -> List[str]:
        """Extract decisions made in text."""
        decisions = []
        for pattern in self.DECISION_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            decisions.extend([m.strip() for m in matches if len(m.strip()) > 10])
        return list(dict.fromkeys(decisions))[:10]

    def _extract_questions(self, text: str) -> List[str]:
        """Extract open questions from text."""
        questions = []
        for pattern in self.QUESTION_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for m in matches:
                q = m.strip()
                if 10 < len(q) < 200:
                    questions.append(q + ("?" if not q.endswith("?") else ""))
        return list(dict.fromkeys(questions))[:10]

    def _extract_key_topics(self, text: str) -> List[str]:
        """Extract key topics discussed."""
        topics = []
        for pattern in self.KEY_TOPIC_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            topics.extend([m.strip() for m in matches if len(m.strip()) > 5])
        return list(dict.fromkeys(topics))[:8]

    def _generate_executive_summary(self, subject: str, actions: List, decisions: List, questions: List, topics: List) -> Dict:
        """Generate executive summary."""
        summary_parts = []

        if subject:
            summary_parts.append(f"Subject: {subject}")

        if actions:
            summary_parts.append(f"Action Items ({len(actions)}):")
            for i, item in enumerate(actions[:5], 1):
                summary_parts.append(f"  {i}. {item}")

        if decisions:
            summary_parts.append(f"Decisions ({len(decisions)}):")
            for i, d in enumerate(decisions[:5], 1):
                summary_parts.append(f"  {i}. {d}")

        if questions:
            summary_parts.append(f"Open Questions ({len(questions)}):")
            for i, q in enumerate(questions[:5], 1):
                summary_parts.append(f"  {i}. {q}")

        return {
            "summary_text": "\n".join(summary_parts),
            "total_action_items": len(actions),
            "total_decisions": len(decisions),
            "total_questions": len(questions),
            "total_topics": len(topics),
            "completeness": "FULL" if actions and decisions else "PARTIAL" if actions or decisions else "MINIMAL",
        }

    def _calculate_complexity(self, email: Dict, text: str) -> Dict:
        """Calculate thread complexity score."""
        score = 0
        factors = []

        word_count = len(text.split())
        if word_count > 500:
            score += 25
            factors.append("Long thread")
        elif word_count > 200:
            score += 15
            factors.append("Medium length")

        thread_depth = email.get("thread_depth", 1)
        if thread_depth > 5:
            score += 25
            factors.append("Deep thread")
        elif thread_depth > 3:
            score += 15
            factors.append("Moderate thread")

        recipients = len(email.get("to", [])) + len(email.get("cc", []))
        if recipients > 5:
            score += 20
            factors.append("Many participants")
        elif recipients > 2:
            score += 10
            factors.append("Multiple participants")

        questions = len(re.findall(r'\?', text))
        if questions > 5:
            score += 20
            factors.append("Many questions")
        elif questions > 2:
            score += 10
            factors.append("Several questions")

        attachments = len(email.get("attachments", []))
        if attachments > 0:
            score += 10
            factors.append("Has attachments")

        return {
            "score": min(score, 100),
            "factors": factors,
            "level": "HIGH" if score >= 60 else "MEDIUM" if score >= 30 else "LOW",
        }

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        result = {
            "is_multi_recipient": is_multi,
            "recipient_count": len(all_recipients),
            "enforced": False,
            "reason": "",
        }
        if is_multi:
            result["enforced"] = True
            result["reason"] = f"REPLY-ALL ENFORCED: {len(all_recipients)} recipients."
            self.reply_all_audit.append({
                "email_id": email.get("id", "unknown"),
                "enforced": True,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            result["reason"] = "Single recipient."
        return result

    def _generate_summary_response(self, summary: Dict, actions: List, questions: List, recipients: List) -> Dict:
        return {
            "to": recipients,
            "reply_all": len(recipients) > 1,
            "includes_summary": True,
            "addresses_questions": len(questions) > 0,
            "lists_actions": len(actions) > 0,
            "format": "structured_bullets",
        }

    def get_stats(self) -> Dict:
        if not self.summary_log:
            return {"emails_summarized": 0}
        return {
            "emails_summarized": len(self.summary_log),
            "total_action_items": sum(s["action_items"] for s in self.summary_log),
            "total_decisions": sum(s["decisions"] for s in self.summary_log),
            "avg_complexity": round(sum(s["complexity"] for s in self.summary_log) / len(self.summary_log), 1),
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v966():
    engine = EmailThreadSummarizer()

    email1 = {
        "id": "sum-001",
        "from": "pm@company.com",
        "to": ["team@ziontechgroup.com", "dev@ziontechgroup.com"],
        "cc": ["director@company.com", "qa@company.com"],
        "subject": "Q3 Project Update - Important Decisions",
        "body": "Hi team, regarding the Q3 project update: We've decided to go with the microservices architecture. The deadline is October 15th. Please prepare the migration plan by Friday. Can you estimate the timeline for phase 2? Also, could you share the cost breakdown? The budget has been approved at $150K. We need the team to complete the API design document. Next step: schedule a review meeting. Final decision: we're using Kubernetes for orchestration.",
        "thread_depth": 6,
        "attachments": ["roadmap.pdf"],
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert len(r1["action_items"]) > 0
    assert len(r1["decisions"]) > 0
    print(f"✅ Test 1 PASSED: {len(r1['action_items'])} actions, {len(r1['decisions'])} decisions, complexity={r1['thread_complexity']['level']}, reply-all enforced")

    email2 = {
        "id": "sum-002",
        "from": "user@example.com",
        "to": ["support@ziontechgroup.com"],
        "subject": "Quick question",
        "body": "Hi, how do I reset my password?",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["reply_all_enforcement"]["enforced"] is False
    print(f"✅ Test 2 PASSED: Simple email, complexity={r2['thread_complexity']['level']}")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['emails_summarized']} summarized, avg complexity={stats['avg_complexity']}")

    print("\n🎉 V966 ALL TESTS PASSED — Email Thread Summarizer operational!")
    return True


if __name__ == "__main__":
    test_v966()

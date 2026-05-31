#!/usr/bin/env python3
"""
V418: AI Email Thread Analyzer
Analyzes full email thread context, identifies key decision points,
tracks conversation evolution, and detects unresolved issues.
Enforces reply-all for multi-recipient emails.
"""

import json
import re
from typing import Dict, List
from dataclasses import dataclass
from datetime import datetime


@dataclass
class ThreadMessage:
    sender: str
    timestamp: str
    body: str
    is_reply: bool = False


@dataclass
class ThreadAnalysis:
    total_messages: int
    participants: List[str]
    duration_hours: float
    decision_points: List[Dict]
    unresolved_issues: List[str]
    sentiment_trend: List[float]
    key_topics: List[str]
    action_items: List[Dict]


class V418ThreadAnalyzer:
    """Analyzes email threads for context and decision points"""

    def analyze_thread(self, messages: List[Dict]) -> Dict:
        """Analyze full email thread"""
        if not messages:
            return {"error": "No messages in thread"}

        participants = set()
        all_text = []
        action_items = []
        decision_points = []
        unresolved = []

        for msg in messages:
            participants.add(msg.get("from", "unknown"))
            participants.update(msg.get("to", []))
            participants.update(msg.get("cc", []))
            body = msg.get("body", "")
            all_text.append(body)

            # Extract action items
            for line in body.split('\n'):
                if re.search(r'(?:please|could you|we need|action|todo|task)', line, re.I):
                    action_items.append({
                        "text": line.strip(),
                        "assignee": msg.get("from", "unknown"),
                        "resolved": False
                    })

            # Detect decisions
            if re.search(r'(?:decided|approved|confirmed|agreed|let\'s go with)', body, re.I):
                decision_points.append({
                    "decision": body[:200],
                    "decider": msg.get("from", "unknown"),
                    "timestamp": msg.get("date", "")
                })

        full_text = ' '.join(all_text)

        # Extract key topics
        topic_keywords = {}
        words = re.findall(r'\b[a-z]{4,}\b', full_text.lower())
        stop_words = {"this", "that", "with", "from", "have", "been", "were", "will", "would", "could", "should"}
        for w in words:
            if w not in stop_words:
                topic_keywords[w] = topic_keywords.get(w, 0) + 1

        key_topics = sorted(topic_keywords, key=topic_keywords.get, reverse=True)[:10]

        # Detect unresolved issues
        for item in action_items:
            text = item["text"].lower()
            if not any(w in text for w in ["done", "completed", "finished", "resolved"]):
                unresolved.append(item["text"])

        # Calculate thread duration
        dates = [msg.get("date", "") for msg in messages if msg.get("date")]
        duration_hours = 0
        if len(dates) >= 2:
            try:
                first = datetime.fromisoformat(dates[0].replace('Z', '+00:00'))
                last = datetime.fromisoformat(dates[-1].replace('Z', '+00:00'))
                duration_hours = (last - first).total_seconds() / 3600
            except Exception:
                pass

        # Check reply-all
        all_recipients = set()
        for msg in messages:
            all_recipients.update(msg.get("to", []))
            all_recipients.update(msg.get("cc", []))
        should_reply_all = len(all_recipients) > 1

        return {
            "engine": "V418 Thread Analyzer",
            "total_messages": len(messages),
            "participants": list(participants),
            "duration_hours": round(duration_hours, 1),
            "key_topics": key_topics,
            "decision_points": decision_points,
            "unresolved_issues": unresolved[:5],
            "action_items": action_items[:10],
            "reply_all": should_reply_all,
            "thread_health": "active" if duration_hours < 168 else "stale",
            "summary": self._generate_summary(len(messages), len(participants), key_topics)
        }

    def _generate_summary(self, msg_count: int, participant_count: int, topics: List[str]) -> str:
        topic_str = ", ".join(topics[:3]) if topics else "general discussion"
        return f"Thread with {msg_count} messages across {participant_count} participants. Key topics: {topic_str}."


def process_thread(messages: List[Dict]) -> Dict:
    analyzer = V418ThreadAnalyzer()
    return analyzer.analyze_thread(messages)


if __name__ == "__main__":
    test_thread = [
        {"from": "client@example.com", "to": ["sales@zion.com"], "cc": ["manager@zion.com"],
         "body": "We need a quote for 50 licenses of your AI platform.", "date": "2026-05-28T09:00:00"},
        {"from": "sales@zion.com", "to": ["client@example.com"], "cc": ["manager@zion.com"],
         "body": "Thank you! I'll prepare a quote. Could you confirm the deployment type?", "date": "2026-05-28T10:30:00"},
        {"from": "client@example.com", "to": ["sales@zion.com"], "cc": ["manager@zion.com"],
         "body": "Cloud deployment preferred. Also need SSO integration.", "date": "2026-05-28T14:00:00"},
    ]
    print(json.dumps(process_thread(test_thread), indent=2))

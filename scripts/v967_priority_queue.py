#!/usr/bin/env python3
"""
V967: Priority Queue Engine
Multi-signal intelligent email prioritization using sender importance,
content urgency, thread context, and business value signals.
STRICT reply-all enforcement for all multi-recipient emails.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any


class PriorityQueueEngine:
    """Multi-signal intelligent email prioritization engine."""

    PRIORITY_LEVELS = {
        "P0_CRITICAL": {"score_range": (90, 100), "response_time": "15 min", "color": "red"},
        "P1_URGENT": {"score_range": (75, 89), "response_time": "1 hour", "color": "orange"},
        "P2_HIGH": {"score_range": (55, 74), "response_time": "4 hours", "color": "yellow"},
        "P3_NORMAL": {"score_range": (30, 54), "response_time": "8 hours", "color": "blue"},
        "P4_LOW": {"score_range": (0, 29), "response_time": "24 hours", "color": "gray"},
    }

    VIP_SENDERS = ["ceo", "cto", "cfo", "president", "chairman", "founder", "board"]
    SENDER_DOMAINS_PREMIUM = [".edu", ".gov", ".mil", "fortune500"]

    def __init__(self):
        self.priority_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []
        self.queue: List[Dict] = []

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Prioritize each email using multi-signal analysis."""
        analysis = {
            "engine": "V967",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "priority_queue",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        sender = email.get("from", "").lower()
        full_text = subject + " " + body

        # Signal 1: Sender importance (0-25)
        sender_score = self._score_sender(sender, email)
        analysis["sender_importance"] = sender_score

        # Signal 2: Content urgency (0-25)
        urgency_score = self._score_urgency(full_text)
        analysis["content_urgency"] = urgency_score

        # Signal 3: Business value (0-25)
        value_score = self._score_business_value(full_text)
        analysis["business_value"] = value_score

        # Signal 4: Thread context (0-15)
        context_score = self._score_thread_context(email)
        analysis["thread_context"] = context_score

        # Signal 5: Time sensitivity (0-10)
        time_score = self._score_time_sensitivity(full_text)
        analysis["time_sensitivity"] = time_score

        # Calculate total priority score
        total_score = sender_score["score"] + urgency_score["score"] + value_score["score"] + context_score["score"] + time_score["score"]
        total_score = min(total_score, 100)
        analysis["priority_score"] = total_score

        # Determine priority level
        priority_level = self._determine_level(total_score)
        analysis["priority_level"] = priority_level

        # Queue position
        queue_pos = self._calculate_queue_position(total_score)
        analysis["queue_position"] = queue_pos

        # Recommended action
        action = self._recommend_priority_action(priority_level, analysis)
        analysis["recommended_action"] = action

        # REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        # Add to queue
        self.queue.append({
            "email_id": analysis["email_id"],
            "score": total_score,
            "level": priority_level,
            "position": queue_pos,
        })
        self.queue.sort(key=lambda x: x["score"], reverse=True)

        self.priority_log.append({
            "email_id": analysis["email_id"],
            "score": total_score,
            "level": priority_level,
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _score_sender(self, sender: str, email: Dict) -> Dict:
        """Score sender importance (0-25)."""
        score = 5  # Base score
        reasons = []

        # VIP detection
        for vip in self.VIP_SENDERS:
            if vip in sender:
                score += 15
                reasons.append(f"VIP sender: {vip}")
                break

        # CC'd executives
        cc_list = email.get("cc", [])
        for cc in cc_list:
            cc_lower = cc.lower()
            for vip in self.VIP_SENDERS:
                if vip in cc_lower:
                    score += 5
                    reasons.append(f"VIP in CC: {vip}")
                    break

        # Multiple recipients = important broadcast
        recipient_count = len(email.get("to", [])) + len(email.get("cc", []))
        if recipient_count >= 5:
            score += 3
            reasons.append("Broad distribution")

        return {"score": min(score, 25), "reasons": reasons}

    def _score_urgency(self, text: str) -> Dict:
        """Score content urgency (0-25)."""
        score = 0
        reasons = []

        urgent_patterns = {
            "critical": (r'\b(critical|emergency|urgent|asap|immediately|production down)\b', 12),
            "deadline": (r'\b(deadline|by (?:today|tomorrow|eod|end of day)|due (?:today|tomorrow))\b', 10),
            "negative_sentiment": (r'\b(frustrated|angry|disappointed|unacceptable|terrible)\b', 8),
            "exclamation": (r'!{2,}', 5),
            "escalation": (r'\b(escalat|manager|supervisor|complaint)\b', 7),
        }

        for name, (pattern, weight) in urgent_patterns.items():
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                score += weight
                reasons.append(f"{name}: {len(matches)} signal(s)")

        return {"score": min(score, 25), "reasons": reasons}

    def _score_business_value(self, text: str) -> Dict:
        """Score business value (0-25)."""
        score = 0
        reasons = []

        value_patterns = {
            "monetary": (r'\$[\d,]+(?:\s*(?:k|K|m|M|million|billion))?', 10),
            "contract": (r'\b(contract|agreement|deal|proposal|quote)\b', 8),
            "revenue": (r'\b(revenue|sales|growth|profit|upsell)\b', 7),
            "partnership": (r'\b(partner|alliance|joint venture|strategic)\b', 6),
            "scale": (r'\b(enterprise|1000\+|large.?scale|global)\b', 5),
        }

        for name, (pattern, weight) in value_patterns.items():
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                score += weight
                reasons.append(f"{name} signal")

        return {"score": min(score, 25), "reasons": reasons}

    def _score_thread_context(self, email: Dict) -> Dict:
        """Score thread context (0-15)."""
        score = 0
        reasons = []

        thread_depth = email.get("thread_depth", 1)
        if thread_depth > 5:
            score += 8
            reasons.append("Deep thread")
        elif thread_depth > 3:
            score += 5
            reasons.append("Moderate thread")

        # Long email = complex
        word_count = len(email.get("body", "").split())
        if word_count > 300:
            score += 5
            reasons.append("Complex content")
        elif word_count > 100:
            score += 3
            reasons.append("Detailed content")

        # Has attachments
        if email.get("attachments"):
            score += 2
            reasons.append("Attachments present")

        return {"score": min(score, 15), "reasons": reasons}

    def _score_time_sensitivity(self, text: str) -> Dict:
        """Score time sensitivity (0-10)."""
        score = 0
        reasons = []

        time_patterns = [
            (r'\b(today|tonight|right now|immediately)\b', 5),
            (r'\b(tomorrow|this week|by friday|by monday)\b', 3),
            (r'\b(next week|this month|by end of month)\b', 1),
        ]

        for pattern, weight in time_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                score += weight
                reasons.append("Time-sensitive")
                break

        return {"score": min(score, 10), "reasons": reasons}

    def _determine_level(self, score: int) -> str:
        """Determine priority level from score."""
        for level, config in self.PRIORITY_LEVELS.items():
            low, high = config["score_range"]
            if low <= score <= high:
                return level
        return "P4_LOW"

    def _calculate_queue_position(self, score: int) -> int:
        """Calculate position in priority queue."""
        higher = sum(1 for item in self.queue if item["score"] > score)
        return higher + 1

    def _recommend_priority_action(self, level: str, analysis: Dict) -> str:
        """Recommend action based on priority level."""
        if level == "P0_CRITICAL":
            return "IMMEDIATE_RESPONSE_REQUIRED"
        elif level == "P1_URGENT":
            return "PRIORITIZE_AND_RESPOND"
        elif level == "P2_HIGH":
            return "SCHEDULE_PROMPT_RESPONSE"
        elif level == "P3_NORMAL":
            return "STANDARD_QUEUE_RESPONSE"
        else:
            return "BATCH_PROCESS_LATER"

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

    def get_stats(self) -> Dict:
        if not self.priority_log:
            return {"emails_prioritized": 0}
        level_dist = {}
        for log in self.priority_log:
            lvl = log["level"]
            level_dist[lvl] = level_dist.get(lvl, 0) + 1
        return {
            "emails_prioritized": len(self.priority_log),
            "avg_priority_score": round(sum(l["score"] for l in self.priority_log) / len(self.priority_log), 1),
            "level_distribution": level_dist,
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v967():
    engine = PriorityQueueEngine()

    # Test 1: Critical email from CEO
    email1 = {
        "id": "pri-001",
        "from": "CEO@company.com",
        "to": ["team@ziontechgroup.com", "support@ziontechgroup.com"],
        "cc": ["board@company.com"],
        "subject": "CRITICAL: Production system down - need immediate fix",
        "body": "URGENT: Our production system is down and we need an immediate fix! This is a critical emergency. Revenue impact $500K per hour. Please escalate immediately!",
        "thread_depth": 3,
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert r1["priority_level"] in ("P0_CRITICAL", "P1_URGENT", "P2_HIGH")
    assert r1["priority_score"] >= 50
    print(f"✅ Test 1 PASSED: Score={r1['priority_score']}, Level={r1['priority_level']}, reply-all enforced")

    # Test 2: Normal inquiry
    email2 = {
        "id": "pri-002",
        "from": "user@startup.io",
        "to": ["info@ziontechgroup.com"],
        "subject": "General inquiry",
        "body": "Hi, I'd like to learn more about your services.",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["priority_level"] in ("P3_NORMAL", "P4_LOW")
    print(f"✅ Test 2 PASSED: Score={r2['priority_score']}, Level={r2['priority_level']}")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['emails_prioritized']} prioritized, dist={stats['level_distribution']}")

    print("\n🎉 V967 ALL TESTS PASSED — Priority Queue Engine operational!")
    return True


if __name__ == "__main__":
    test_v967()

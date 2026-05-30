"""
V389 - Email Follow-up Predictor
Predict which emails need follow-up based on content, sender patterns, and historical
response rates. Generate follow-up schedules.
"""

import json
import re
from datetime import datetime, timedelta


class EmailFollowupPredictor:
    """Engine for predicting and scheduling email follow-ups."""

    URGENCY_KEYWORDS = {
        "critical": ["urgent", "asap", "immediately", "emergency", "critical", "deadline today"],
        "high": ["soon", "this week", "priority", "important", "waiting"],
        "medium": ["when possible", "at your convenience", "next week", "review"],
        "low": ["no rush", "whenever", "eventually", "someday"],
    }

    ACTION_PATTERNS = [
        r"(?:please|kindly)\s+(.+?)(?:\.|$)",
        r"(?:can you|could you)\s+(.+?)\?",
        r"(?:I need|we need)\s+(.+?)(?:\.|$)",
        r"(?:action item|todo|task)[:\s]*(.+?)(?:\.|$)",
        r"(?:let me know|please confirm)\s+(.+?)(?:\.|$)",
    ]

    QUESTION_PATTERNS = [
        r"^(?:who|what|when|where|why|how|can|could|would|should|is|are|do|does)\s+.+\?",
    ]

    def __init__(self):
        self.sender_history = {}
        self.followup_queue = []

    def update_sender_history(self, sender_email, responded, response_time_hours=None):
        """Track historical response patterns for a sender."""
        if sender_email not in self.sender_history:
            self.sender_history[sender_email] = {
                "total_emails": 0,
                "responded_count": 0,
                "avg_response_time_hours": 0,
                "response_times": [],
            }

        history = self.sender_history[sender_email]
        history["total_emails"] += 1
        if responded:
            history["responded_count"] += 1
            if response_time_hours:
                history["response_times"].append(response_time_hours)
                history["avg_response_time_hours"] = (
                    sum(history["response_times"]) / len(history["response_times"])
                )

    def predict_followup(self, email):
        """Predict whether an email needs follow-up and when."""
        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        recipients = email.get("to", [])
        cc = email.get("cc", [])
        timestamp = email.get("timestamp", datetime.now().isoformat())

        all_recipients = recipients + cc
        reply_all_required = len(all_recipients) > 1

        # Analyze email for follow-up indicators
        analysis = self._analyze_email_content(body, subject)

        # Check sender history
        sender_stats = self.sender_history.get(sender, {
            "total_emails": 0,
            "responded_count": 0,
            "avg_response_time_hours": 24,
        })

        response_rate = (
            sender_stats["responded_count"] / max(sender_stats["total_emails"], 1)
        )

        # Calculate follow-up probability
        followup_score = self._calculate_followup_score(analysis, sender_stats, response_rate)

        # Determine urgency level
        urgency = self._determine_urgency(body)

        # Generate follow-up schedule
        schedule = self._generate_schedule(followup_score, urgency, timestamp, sender_stats)

        # Generate follow-up draft
        followup_draft = self._generate_followup_draft(email, analysis, urgency)

        prediction = {
            "email_subject": subject,
            "sender": sender,
            "followup_needed": followup_score > 50,
            "followup_score": followup_score,
            "urgency_level": urgency,
            "analysis": analysis,
            "sender_response_rate": round(response_rate, 2),
            "schedule": schedule,
            "followup_draft": followup_draft,
            "reply_all_required": reply_all_required,
            "reply_all_enforced": reply_all_required,
        }

        if prediction["followup_needed"]:
            self.followup_queue.append(prediction)

        return prediction

    def _analyze_email_content(self, body, subject):
        """Analyze email content for follow-up indicators."""
        combined = f"{subject} {body}".lower()

        # Detect action items
        action_items = []
        for pattern in self.ACTION_PATTERNS:
            matches = re.findall(pattern, body, re.IGNORECASE)
            action_items.extend([m.strip() for m in matches])

        # Detect questions
        questions = []
        sentences = re.split(r'[.!?]+', body)
        for sentence in sentences:
            sentence = sentence.strip()
            if re.match(r'(?:who|what|when|where|why|how|can|could|would|should|is|are)\s+', sentence, re.IGNORECASE):
                questions.append(sentence)
            elif '?' in sentence:
                questions.append(sentence)

        # Detect deadlines
        deadlines = []
        deadline_patterns = [
            r'(?:by|before|deadline)\s+(\w+\s+\d+(?:st|nd|rd|th)?)',
            r'(?:due|due date)[:\s]*(\w+\s+\d+)',
            r'(\d{1,2}/\d{1,2}/\d{2,4})',
        ]
        for pattern in deadline_patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            deadlines.extend(matches)

        # Detect expectations of response
        expects_response = any(phrase in combined for phrase in [
            "please respond", "let me know", "get back to me",
            "awaiting your", "looking forward to", "please confirm",
            "can you", "could you", "would you",
        ])

        return {
            "action_items": action_items[:5],
            "questions_asked": len(questions),
            "deadlines_mentioned": deadlines[:3],
            "expects_response": expects_response,
            "has_action_items": len(action_items) > 0,
        }

    def _determine_urgency(self, body):
        """Determine urgency level from email content."""
        body_lower = body.lower()
        for level, keywords in self.URGENCY_KEYWORDS.items():
            if any(kw in body_lower for kw in keywords):
                return level
        return "medium"

    def _calculate_followup_score(self, analysis, sender_stats, response_rate):
        """Calculate probability that follow-up is needed (0-100)."""
        score = 0

        # Action items increase follow-up need
        if analysis["has_action_items"]:
            score += 30
        score += min(20, len(analysis["action_items"]) * 10)

        # Questions increase follow-up need
        score += min(20, analysis["questions_asked"] * 8)

        # Explicit response expectation
        if analysis["expects_response"]:
            score += 20

        # Deadlines increase urgency
        if analysis["deadlines_mentioned"]:
            score += 15

        # Low historical response rate increases follow-up need
        if response_rate < 0.5:
            score += 15
        elif response_rate < 0.8:
            score += 5

        return min(100, score)

    def _generate_schedule(self, score, urgency, timestamp, sender_stats):
        """Generate a follow-up schedule based on urgency and patterns."""
        try:
            email_time = datetime.fromisoformat(timestamp.replace("Z", "+00:00"))
        except (ValueError, AttributeError):
            email_time = datetime.now()

        # Base delay based on urgency
        urgency_delays = {
            "critical": timedelta(hours=2),
            "high": timedelta(hours=8),
            "medium": timedelta(days=2),
            "low": timedelta(days=5),
        }
        base_delay = urgency_delays.get(urgency, timedelta(days=2))

        # Adjust based on sender's typical response time
        avg_response = sender_stats.get("avg_response_time_hours", 24)
        if avg_response > 48:
            base_delay += timedelta(days=1)
        elif avg_response < 4:
            base_delay -= timedelta(hours=max(1, base_delay.seconds // 7200))

        first_followup = email_time + base_delay
        second_followup = first_followup + timedelta(days=3)
        final_followup = second_followup + timedelta(days=5)

        return {
            "first_followup": first_followup.isoformat(),
            "second_followup": second_followup.isoformat(),
            "final_followup": final_followup.isoformat(),
            "max_followups": 3,
            "escalation_recommended": score > 80,
        }

    def _generate_followup_draft(self, email, analysis, urgency):
        """Generate a follow-up email draft."""
        subject = f"Follow-up: {email.get('subject', 'Previous email')}"
        sender = email.get("from", "sender")

        parts = [f"Hi, following up on my previous email regarding '{email.get('subject', '')}'."]

        if analysis["action_items"]:
            parts.append(f"\nPending action items:")
            for item in analysis["action_items"][:3]:
                parts.append(f"  - {item}")

        if analysis["deadlines_mentioned"]:
            parts.append(f"\nReminder: Deadline(s) mentioned: {', '.join(analysis['deadlines_mentioned'])}")

        if urgency in ["critical", "high"]:
            parts.append("\nThis is time-sensitive and requires your prompt attention.")
        else:
            parts.append("\nPlease let me know if you have any questions or need additional information.")

        parts.append("\nBest regards")

        return {
            "subject": subject,
            "body": "\n".join(parts),
            "recipients": {"to": email.get("to", []), "cc": email.get("cc", [])},
        }

    def get_queue_summary(self):
        """Get summary of pending follow-ups."""
        return {
            "total_pending": len(self.followup_queue),
            "by_urgency": {
                "critical": len([f for f in self.followup_queue if f["urgency_level"] == "critical"]),
                "high": len([f for f in self.followup_queue if f["urgency_level"] == "high"]),
                "medium": len([f for f in self.followup_queue if f["urgency_level"] == "medium"]),
                "low": len([f for f in self.followup_queue if f["urgency_level"] == "low"]),
            },
        }


def main():
    engine = EmailFollowupPredictor()

    # Set up sender history
    engine.update_sender_history("unreliable@vendor.com", True, 72)
    engine.update_sender_history("unreliable@vendor.com", False)
    engine.update_sender_history("unreliable@vendor.com", True, 96)
    engine.update_sender_history("unreliable@vendor.com", False)
    engine.update_sender_history("responsive@partner.com", True, 2)
    engine.update_sender_history("responsive@partner.com", True, 4)
    engine.update_sender_history("responsive@partner.com", True, 1)

    # Sample emails to analyze
    sample_emails = [
        {
            "from": "manager@company.com",
            "to": ["team-lead@company.com", "developer@company.com"],
            "cc": ["director@company.com"],
            "subject": "URGENT: Production Bug Fix Needed",
            "body": "Hi team, We have a critical production bug affecting all users. Please investigate and fix ASAP. Can you provide an ETA by EOD? Action item: Run diagnostics on the payment service. Action item: Check the deployment logs. Deadline: May 31st.",
            "timestamp": "2026-05-30T08:00:00Z",
        },
        {
            "from": "unreliable@vendor.com",
            "to": ["procurement@company.com"],
            "cc": [],
            "subject": "Updated pricing for Q3 services",
            "body": "Hi, Here are our updated prices for Q3. Please review when possible and let me know your thoughts. Would you be available for a call next week to discuss?",
            "timestamp": "2026-05-29T14:00:00Z",
        },
        {
            "from": "responsive@partner.com",
            "to": ["api-team@company.com", "integration@company.com"],
            "cc": ["cto@company.com"],
            "subject": "API Integration - Action Required",
            "body": "Hello, The new API endpoints are ready for testing. I need your team to: 1) Validate the authentication flow, 2) Test rate limiting, 3) Confirm data format compliance. Please confirm receipt and provide testing timeline. This is important for our June 15 launch.",
            "timestamp": "2026-05-30T10:30:00Z",
        },
        {
            "from": "newsletter@techblog.com",
            "to": ["subscriber@company.com"],
            "cc": [],
            "subject": "Weekly Tech Digest - Issue #245",
            "body": "This week in tech: New AI breakthroughs, cloud computing trends, and open source highlights. Read more on our website.",
            "timestamp": "2026-05-30T06:00:00Z",
        },
    ]

    predictions = []
    for email in sample_emails:
        prediction = engine.predict_followup(email)
        predictions.append(prediction)

    queue_summary = engine.get_queue_summary()

    output = {
        "version": "V389",
        "engine": "Email Follow-up Predictor",
        "timestamp": datetime.now().isoformat(),
        "reply_all_required": any(p["reply_all_required"] for p in predictions),
        "reply_all_enforced": all(p["reply_all_enforced"] for p in predictions if p["reply_all_required"]),
        "predictions": predictions,
        "followup_queue_summary": queue_summary,
    }

    print(json.dumps(output, indent=2, default=str))
    return output


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
V416 - AI Sentiment-Aware Email Routing Engine
Analyzes email sentiment (positive/negative/neutral/urgent/angry),
routes to appropriate team members based on tone and urgency,
escalates negative sentiment automatically.
Enforces reply-all for multi-recipient emails.
"""

import logging
import json
import re
import hashlib
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Tuple
from enum import Enum

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s - %(message)s"
)
logger = logging.getLogger("V416_SentimentRouting")


class Sentiment(Enum):
    POSITIVE = "positive"
    NEGATIVE = "negative"
    NEUTRAL = "neutral"
    URGENT = "urgent"
    ANGRY = "angry"
    FRUSTRATED = "frustrated"
    SARCASTIC = "sarcastic"


@dataclass
class SentimentScore:
    sentiment: Sentiment
    confidence: float
    intensity: float
    keywords_found: List[str] = field(default_factory=list)
    timestamp: str = ""

    def __post_init__(self):
        if not self.timestamp:
            self.timestamp = datetime.now().isoformat()


@dataclass
class EmailMessage:
    message_id: str
    subject: str
    body: str
    sender: str
    recipients: List[str]
    cc: List[str] = field(default_factory=list)
    bcc: List[str] = field(default_factory=list)
    timestamp: str = ""
    thread_id: str = ""
    attachments: List[str] = field(default_factory=list)

    def all_recipients(self) -> List[str]:
        return list(set(self.recipients + self.cc + self.bcc))

    def is_multi_recipient(self) -> bool:
        return len(self.all_recipients()) > 1


@dataclass
class RoutingDecision:
    target_team: str
    target_members: List[str]
    priority: str
    escalate: bool
    reason: str
    sentiment: Sentiment
    sla_deadline: Optional[datetime] = None


SENTIMENT_KEYWORDS = {
    Sentiment.POSITIVE: [
        "thank", "great", "excellent", "wonderful", "appreciate", "love",
        "fantastic", "awesome", "pleased", "delighted", "impressed", "happy"
    ],
    Sentiment.NEGATIVE: [
        "disappointed", "unhappy", "dissatisfied", "frustrated", "annoyed",
        "terrible", "awful", "worst", "poor", "unacceptable", "regret"
    ],
    Sentiment.URGENT: [
        "urgent", "asap", "immediately", "critical", "emergency", "deadline",
        "time-sensitive", "expedite", "priority", "imminent", "now"
    ],
    Sentiment.ANGRY: [
        "outraged", "furious", "angry", "livid", "infuriating", "enraged",
        "disgusted", "appalled", "horrified", "incensed", "irate"
    ],
    Sentiment.FRUSTRATED: [
        "frustrat", "struggl", "can't believe", "fed up", "tired of",
        "still waiting", "again", "same problem", "never", "impossible"
    ],
    Sentiment.SARCASTIC: [
        "oh great", "sure thing", "brilliant", "perfect timing", "just what",
        "really helpful", "wow thanks"
    ]
}

TEAM_ROUTING = {
    Sentiment.POSITIVE: {"team": "customer_success", "priority": "low"},
    Sentiment.NEGATIVE: {"team": "customer_support", "priority": "medium"},
    Sentiment.NEUTRAL: {"team": "general_inbox", "priority": "normal"},
    Sentiment.URGENT: {"team": "rapid_response", "priority": "high"},
    Sentiment.ANGRY: {"team": "escalation_team", "priority": "critical"},
    Sentiment.FRUSTRATED: {"team": "customer_support", "priority": "medium"},
    Sentiment.SARCASTIC: {"team": "customer_support", "priority": "medium"},
}

TEAM_MEMBERS = {
    "customer_success": ["alice@company.com", "bob@company.com"],
    "customer_support": ["carol@company.com", "dave@company.com", "eve@company.com"],
    "general_inbox": ["frank@company.com"],
    "rapid_response": ["grace@company.com", "henry@company.com", "iris@company.com"],
    "escalation_team": ["manager@company.com", "director@company.com", "vp@company.com"],
}

SLA_HOURS = {
    "critical": 1,
    "high": 4,
    "medium": 24,
    "normal": 48,
    "low": 72,
}


class SentimentAnalyzer:
    """Analyzes email text to determine sentiment."""

    def __init__(self):
        self.history: List[SentimentScore] = []

    def analyze(self, text: str, subject: str = "") -> SentimentScore:
        combined = f"{subject} {text}".lower()
        scores = {}
        for sentiment, keywords in SENTIMENT_KEYWORDS.items():
            count = 0
            found = []
            for kw in keywords:
                matches = len(re.findall(re.escape(kw), combined))
                if matches:
                    count += matches
                    found.append(kw)
            if count > 0:
                scores[sentiment] = {"count": count, "keywords": found}

        if not scores:
            return SentimentScore(
                sentiment=Sentiment.NEUTRAL,
                confidence=0.8,
                intensity=0.1
            )

        dominant = max(scores, key=lambda s: scores[s]["count"])
        total = sum(s["count"] for s in scores.values())
        confidence = min(scores[dominant]["count"] / max(total, 1), 1.0)
        intensity = min(scores[dominant]["count"] / 5.0, 1.0)

        result = SentimentScore(
            sentiment=dominant,
            confidence=confidence,
            intensity=intensity,
            keywords_found=scores[dominant]["keywords"]
        )
        self.history.append(result)
        logger.info(f"Sentiment analysis: {dominant.value} (confidence={confidence:.2f}, intensity={intensity:.2f})")
        return result

    def get_trend(self, sender: str, recent_count: int = 10) -> Dict:
        recent = self.history[-recent_count:]
        if not recent:
            return {"trend": "unknown", "data_points": 0}
        sentiments = [s.sentiment for s in recent]
        negative_count = sum(1 for s in sentiments if s in (Sentiment.NEGATIVE, Sentiment.ANGRY, Sentiment.FRUSTRATED))
        trend = "worsening" if negative_count > len(sentiments) / 3 else "stable"
        return {"trend": trend, "data_points": len(recent), "negative_ratio": negative_count / len(recent)}


class EscalationManager:
    """Manages automatic escalation for negative sentiment emails."""

    def __init__(self):
        self.escalation_log: List[Dict] = []
        self.escalation_levels = {
            Sentiment.NEGATIVE: 1,
            Sentiment.FRUSTRATED: 1,
            Sentiment.ANGRY: 2,
            Sentiment.URGENT: 2,
        }

    def should_escalate(self, score: SentimentScore) -> bool:
        return score.sentiment in (Sentiment.NEGATIVE, Sentiment.ANGRY, Sentiment.URGENT, Sentiment.FRUSTRATED)

    def escalate(self, email: EmailMessage, score: SentimentScore, decision: RoutingDecision) -> Dict:
        level = self.escalation_levels.get(score.sentiment, 1)
        escalation_record = {
            "email_id": email.message_id,
            "level": level,
            "sentiment": score.sentiment.value,
            "escalated_to": TEAM_MEMBERS["escalation_team"],
            "timestamp": datetime.now().isoformat(),
            "reason": f"Auto-escalation: {score.sentiment.value} sentiment detected",
            "intensity": score.intensity,
        }
        self.escalation_log.append(escalation_record)
        logger.warning(f"ESCALATION Level {level}: Email {email.message_id} -> {score.sentiment.value}")
        return escalation_record

    def get_escalation_history(self) -> List[Dict]:
        return self.escalation_log


class SentimentRoutingEngine:
    """Main engine that combines sentiment analysis with intelligent email routing."""

    def __init__(self):
        self.analyzer = SentimentAnalyzer()
        self.escalation_mgr = EscalationManager()
        self.routing_log: List[Dict] = []
        self.sent_emails: List[Dict] = []

    def process_incoming(self, email: EmailMessage) -> RoutingDecision:
        logger.info(f"Processing email {email.message_id} from {email.sender}")
        score = self.analyzer.analyze(email.body, email.subject)
        routing_info = TEAM_ROUTING.get(score.sentiment, TEAM_ROUTING[Sentiment.NEUTRAL])
        team = routing_info["team"]
        members = TEAM_MEMBERS.get(team, TEAM_MEMBERS["general_inbox"])
        sla_hours = SLA_HOURS.get(routing_info["priority"], 48)
        decision = RoutingDecision(
            target_team=team,
            target_members=members,
            priority=routing_info["priority"],
            escalate=self.escalation_mgr.should_escalate(score),
            reason=f"Routed based on {score.sentiment.value} sentiment (confidence={score.confidence:.2f})",
            sentiment=score.sentiment,
            sla_deadline=datetime.now() + timedelta(hours=sla_hours),
        )
        if decision.escalate:
            self.escalation_mgr.escalate(email, score, decision)
            decision.target_members = list(set(decision.target_members + TEAM_MEMBERS["escalation_team"]))

        self.routing_log.append({
            "email_id": email.message_id,
            "decision": decision.__dict__,
            "score": {"sentiment": score.sentiment.value, "confidence": score.confidence},
            "timestamp": datetime.now().isoformat(),
        })
        logger.info(f"Routed to {team} ({routing_info['priority']} priority), SLA: {sla_hours}h")
        return decision

    def send_reply(self, original: EmailMessage, reply_body: str, sender: str) -> Dict:
        """Send a reply enforcing reply-all for multi-recipient emails."""
        if original.is_multi_recipient():
            all_recipients = [r for r in original.all_recipients() if r != sender]
            all_recipients.append(original.sender)
            all_recipients = list(set(all_recipients))
            logger.info(f"REPLY-ALL enforced: {len(all_recipients)} recipients for email {original.message_id}")
            reply_data = {
                "type": "reply_all",
                "original_id": original.message_id,
                "to": all_recipients,
                "cc": original.cc,
                "body": reply_body,
                "sender": sender,
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": True,
            }
        else:
            reply_data = {
                "type": "reply",
                "original_id": original.message_id,
                "to": [original.sender],
                "body": reply_body,
                "sender": sender,
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": False,
            }
        self.sent_emails.append(reply_data)
        logger.info(f"Reply sent for {original.message_id}: type={reply_data['type']}")
        return reply_data

    def send_forward(self, email: EmailMessage, forward_to: List[str], note: str = "") -> Dict:
        """Forward an email to additional parties, enforcing reply-all context."""
        if email.is_multi_recipient():
            logger.info(f"REPLY-ALL enforced on forward: including original recipients in CC")
            cc_list = email.all_recipients()
        else:
            cc_list = email.cc if email.cc else []

        forward_data = {
            "type": "forward",
            "original_id": email.message_id,
            "to": forward_to,
            "cc": cc_list,
            "note": note,
            "timestamp": datetime.now().isoformat(),
            "reply_all_enforced": email.is_multi_recipient(),
        }
        self.sent_emails.append(forward_data)
        logger.info(f"Forward sent for {email.message_id} to {forward_to}")
        return forward_data

    def get_routing_stats(self) -> Dict:
        if not self.routing_log:
            return {"total": 0}
        sentiment_counts = {}
        for entry in self.routing_log:
            s = entry["score"]["sentiment"]
            sentiment_counts[s] = sentiment_counts.get(s, 0) + 1
        return {
            "total_processed": len(self.routing_log),
            "sentiment_distribution": sentiment_counts,
            "escalations": len(self.escalation_mgr.escalation_log),
            "replies_sent": len(self.sent_emails),
        }


def main():
    engine = SentimentRoutingEngine()

    test_email_angry = EmailMessage(
        message_id="msg-001",
        subject="URGENT: Your service is terrible and I'm furious!",
        body="I am absolutely outraged and furious about the terrible service. This is unacceptable and I'm disgusted. "
             "I need this resolved immediately, this is critical and urgent. Fix this ASAP or I'm leaving!",
        sender="angry_customer@example.com",
        recipients=["support@company.com", "sales@company.com"],
        cc=["manager@company.com"],
    )

    test_email_positive = EmailMessage(
        message_id="msg-002",
        subject="Thank you for the excellent service!",
        body="I just wanted to say thank you! The service has been wonderful and I'm very pleased with everything. "
             "Great job, I really appreciate the fantastic work!",
        sender="happy_customer@example.com",
        recipients=["support@company.com"],
    )

    for email in [test_email_angry, test_email_positive]:
        decision = engine.process_incoming(email)
        reply = engine.send_reply(email, "Thank you for reaching out. We are looking into this.", "support@company.com")

    stats = engine.get_routing_stats()
    print(json.dumps(stats, indent=2, default=str))


if __name__ == "__main__":
    main()

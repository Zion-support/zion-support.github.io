#!/usr/bin/env python3
"""
V415 - AI Relationship Health Tracker
Zion Tech Group - Email Intelligence Engine

Monitors communication frequency, sentiment trends, engagement metrics
per contact, and alerts on at-risk relationships.

CRITICAL: All reply/send methods enforce reply-all for multi-recipient emails.
"""

import logging
import json
import hashlib
import re
import statistics
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Any, Set, Tuple
from email.utils import parseaddr
from collections import defaultdict

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V415_RelationshipHealth")


# ---------------------------------------------------------------------------
# Data Models
# ---------------------------------------------------------------------------
class CommunicationEvent:
    """A single communication event (send or receive)."""

    def __init__(
        self,
        event_id: str,
        contact_email: str,
        direction: str,  # "inbound" or "outbound"
        subject: str,
        body: str,
        to_recipients: List[str],
        cc_recipients: List[str],
        timestamp: Optional[datetime] = None,
        channel: str = "email",
    ):
        self.event_id = event_id
        self.contact_email = contact_email
        self.direction = direction
        self.subject = subject
        self.body = body
        self.to_recipients = to_recipients
        self.cc_recipients = cc_recipients
        self.timestamp = timestamp or datetime.utcnow()
        self.channel = channel

    @property
    def all_recipients(self) -> List[str]:
        return self.to_recipients + self.cc_recipients

    @property
    def is_multi_recipient(self) -> bool:
        return len(set(self.all_recipients)) > 1


class SentimentScore:
    """Sentiment analysis result."""

    def __init__(self, score: float, label: str, keywords: List[str]):
        self.score = score  # -1.0 to +1.0
        self.label = label  # "positive", "neutral", "negative"
        self.keywords = keywords

    def to_dict(self) -> Dict[str, Any]:
        return {"score": self.score, "label": self.label, "keywords": self.keywords}


class EngagementMetrics:
    """Engagement metrics for a contact."""

    def __init__(self, contact_email: str):
        self.contact_email = contact_email
        self.total_interactions: int = 0
        self.inbound_count: int = 0
        self.outbound_count: int = 0
        self.avg_response_time_hours: float = 0.0
        self.response_rate: float = 0.0
        self.last_inbound: Optional[datetime] = None
        self.last_outbound: Optional[datetime] = None
        self.avg_email_length: float = 0.0
        self.thread_depth_avg: float = 0.0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "contact_email": self.contact_email,
            "total_interactions": self.total_interactions,
            "inbound_count": self.inbound_count,
            "outbound_count": self.outbound_count,
            "avg_response_time_hours": round(self.avg_response_time_hours, 2),
            "response_rate": round(self.response_rate, 2),
            "last_inbound": self.last_inbound.isoformat() if self.last_inbound else None,
            "last_outbound": self.last_outbound.isoformat() if self.last_outbound else None,
            "avg_email_length": round(self.avg_email_length, 1),
            "thread_depth_avg": round(self.thread_depth_avg, 1),
        }


class RelationshipHealth:
    """Overall health assessment for a relationship."""

    def __init__(self, contact_email: str):
        self.contact_email = contact_email
        self.health_score: float = 0.0  # 0-100
        self.status: str = "unknown"  # "healthy", "stable", "at-risk", "critical"
        self.sentiment_trend: List[SentimentScore] = []
        self.engagement: Optional[EngagementMetrics] = None
        self.risk_factors: List[str] = []
        self.strengths: List[str] = []
        self.recommendations: List[str] = []
        self.assessed_at: datetime = datetime.utcnow()

    def to_dict(self) -> Dict[str, Any]:
        return {
            "contact_email": self.contact_email,
            "health_score": round(self.health_score, 1),
            "status": self.status,
            "sentiment_trend": [s.to_dict() for s in self.sentiment_trend[-5:]],
            "engagement": self.engagement.to_dict() if self.engagement else None,
            "risk_factors": self.risk_factors,
            "strengths": self.strengths,
            "recommendations": self.recommendations,
            "assessed_at": self.assessed_at.isoformat(),
        }


class RelationshipAlert:
    """Alert for an at-risk relationship."""

    def __init__(self, alert_id: str, contact_email: str, severity: str,
                 message: str, health_score: float, triggered_at: datetime):
        self.alert_id = alert_id
        self.contact_email = contact_email
        self.severity = severity
        self.message = message
        self.health_score = health_score
        self.triggered_at = triggered_at
        self.acknowledged = False

    def to_dict(self) -> Dict[str, Any]:
        return {
            "alert_id": self.alert_id,
            "contact_email": self.contact_email,
            "severity": self.severity,
            "message": self.message,
            "health_score": round(self.health_score, 1),
            "triggered_at": self.triggered_at.isoformat(),
            "acknowledged": self.acknowledged,
        }


# ---------------------------------------------------------------------------
# Reply-All Enforcement
# ---------------------------------------------------------------------------
class ReplyAllEnforcer:
    """Ensures reply-all for multi-recipient emails."""

    @staticmethod
    def enforce(event: CommunicationEvent, my_address: str) -> Dict[str, List[str]]:
        to_set: Set[str] = set()
        cc_set: Set[str] = set()

        to_set.add(event.contact_email)
        for r in event.to_recipients:
            if r.lower() != my_address.lower():
                to_set.add(r)
        for r in event.cc_recipients:
            if r.lower() != my_address.lower():
                cc_set.add(r)

        if event.is_multi_recipient:
            logger.info(
                "REPLY-ALL ENFORCED: Multi-recipient — To=%s CC=%s",
                sorted(to_set), sorted(cc_set),
            )

        return {"to": sorted(to_set), "cc": sorted(cc_set)}


# ---------------------------------------------------------------------------
# Sentiment Analyzer (lightweight, standard library only)
# ---------------------------------------------------------------------------
class SimpleSentimentAnalyzer:
    """Basic keyword-based sentiment analysis."""

    POSITIVE_WORDS = {
        "great": 0.8, "excellent": 0.9, "thank": 0.6, "thanks": 0.6,
        "appreciate": 0.7, "love": 0.8, "wonderful": 0.9, "fantastic": 0.9,
        "good": 0.5, "happy": 0.7, "pleased": 0.7, "impressive": 0.8,
        "helpful": 0.6, "agree": 0.4, "approve": 0.5, "confirm": 0.3,
        "excited": 0.8, "looking forward": 0.6, "glad": 0.6,
    }

    NEGATIVE_WORDS = {
        "bad": -0.6, "terrible": -0.9, "awful": -0.9, "disappointed": -0.7,
        "frustrated": -0.7, "angry": -0.8, "unhappy": -0.7, "problem": -0.4,
        "issue": -0.3, "concern": -0.4, "worried": -0.6, "delay": -0.5,
        "unacceptable": -0.8, "complaint": -0.7, "cancel": -0.6, "urgent": -0.3,
        "disagree": -0.5, "wrong": -0.6, "fail": -0.7, "error": -0.4,
    }

    def analyze(self, text: str) -> SentimentScore:
        text_lower = text.lower()
        words = re.findall(r'\w+', text_lower)
        total_score = 0.0
        found_keywords = []

        for word in words:
            if word in self.POSITIVE_WORDS:
                total_score += self.POSITIVE_WORDS[word]
                found_keywords.append(f"+{word}")
            elif word in self.NEGATIVE_WORDS:
                total_score += self.NEGATIVE_WORDS[word]
                found_keywords.append(f"-{word}")

        # Check phrases
        for phrase in ["looking forward", "thank you", "well done", "not happy", "very disappointed"]:
            if phrase in text_lower:
                score = 0.5 if "forward" in phrase or "thank" in phrase or "well" in phrase else -0.6
                total_score += score
                found_keywords.append(f"{'+'if score > 0 else '-'}{phrase}")

        # Normalize
        if found_keywords:
            normalized = max(-1.0, min(1.0, total_score / max(len(found_keywords), 1)))
        else:
            normalized = 0.0

        if normalized > 0.2:
            label = "positive"
        elif normalized < -0.2:
            label = "negative"
        else:
            label = "neutral"

        return SentimentScore(score=normalized, label=label, keywords=found_keywords)


# ---------------------------------------------------------------------------
# Communication Frequency Analyzer
# ---------------------------------------------------------------------------
class FrequencyAnalyzer:
    """Analyzes communication frequency patterns."""

    def analyze(self, events: List[CommunicationEvent], window_days: int = 30) -> Dict[str, Any]:
        if not events:
            return {"frequency": 0, "trend": "none", "consistency": 0}

        now = datetime.utcnow()
        cutoff = now - timedelta(days=window_days)
        recent = [e for e in events if e.timestamp >= cutoff]
        previous_cutoff = cutoff - timedelta(days=window_days)
        previous = [e for e in events if previous_cutoff <= e.timestamp < cutoff]

        recent_count = len(recent)
        previous_count = len(previous)

        # Trend
        if previous_count == 0 and recent_count > 0:
            trend = "new"
        elif recent_count > previous_count * 1.2:
            trend = "increasing"
        elif recent_count < previous_count * 0.8:
            trend = "decreasing"
        else:
            trend = "stable"

        # Consistency (how evenly spread are communications)
        if len(recent) > 1:
            sorted_events = sorted(recent, key=lambda e: e.timestamp)
            gaps = []
            for i in range(1, len(sorted_events)):
                gap = (sorted_events[i].timestamp - sorted_events[i - 1].timestamp).total_seconds() / 86400
                gaps.append(gap)
            if gaps:
                consistency = 1.0 - min(statistics.stdev(gaps) / max(statistics.mean(gaps), 1), 1.0)
            else:
                consistency = 1.0
        else:
            consistency = 0.5 if recent_count == 1 else 0.0

        return {
            "frequency": recent_count,
            "frequency_per_week": round(recent_count / (window_days / 7), 2),
            "trend": trend,
            "consistency": round(consistency, 2),
            "previous_period_count": previous_count,
        }


# ---------------------------------------------------------------------------
# Health Scorer
# ---------------------------------------------------------------------------
class HealthScorer:
    """Computes relationship health scores."""

    def score(self, engagement: EngagementMetrics, frequency: Dict[str, Any],
              sentiments: List[SentimentScore]) -> RelationshipHealth:
        health = RelationshipHealth(engagement.contact_email)
        health.engagement = engagement

        score = 50.0  # Base score

        # Frequency factor (0-20 points)
        freq = frequency.get("frequency", 0)
        if freq >= 10:
            score += 15
            health.strengths.append("High communication frequency")
        elif freq >= 5:
            score += 10
            health.strengths.append("Regular communication")
        elif freq >= 1:
            score += 5
        else:
            score -= 15
            health.risk_factors.append("No recent communication")

        # Trend factor (0-15 points)
        trend = frequency.get("trend", "stable")
        if trend == "increasing":
            score += 10
            health.strengths.append("Communication trending upward")
        elif trend == "decreasing":
            score -= 10
            health.risk_factors.append("Communication declining")
        elif trend == "new":
            score += 5

        # Sentiment factor (0-15 points)
        if sentiments:
            recent_sentiment = statistics.mean([s.score for s in sentiments[-5:]])
            if recent_sentiment > 0.3:
                score += 15
                health.strengths.append("Positive sentiment trend")
            elif recent_sentiment < -0.3:
                score -= 15
                health.risk_factors.append("Negative sentiment detected")
            health.sentiment_trend = sentiments[-10:]

        # Response rate factor
        if engagement.response_rate > 0.8:
            score += 10
            health.strengths.append("Excellent response rate")
        elif engagement.response_rate < 0.3:
            score -= 10
            health.risk_factors.append("Low response rate")

        # Recency factor
        if engagement.last_inbound:
            days_since = (datetime.utcnow() - engagement.last_inbound).days
            if days_since > 30:
                score -= 10
                health.risk_factors.append(f"No inbound contact for {days_since} days")
            elif days_since < 7:
                score += 5

        # Clamp score
        score = max(0, min(100, score))
        health.health_score = score

        # Status classification
        if score >= 75:
            health.status = "healthy"
        elif score >= 50:
            health.status = "stable"
        elif score >= 25:
            health.status = "at-risk"
        else:
            health.status = "critical"

        # Recommendations
        if "Communication declining" in health.risk_factors:
            health.recommendations.append("Schedule a check-in call or personal email")
        if "Negative sentiment" in health.risk_factors:
            health.recommendations.append("Address concerns proactively; ask for feedback")
        if "Low response rate" in health.risk_factors:
            health.recommendations.append("Try different communication channels or timing")
        if "No recent" in str(health.risk_factors):
            health.recommendations.append("Reach out with a value-add message or update")
        if not health.recommendations and health.status == "healthy":
            health.recommendations.append("Maintain current engagement level")

        health.assessed_at = datetime.utcnow()
        return health


# ---------------------------------------------------------------------------
# Main Engine
# ---------------------------------------------------------------------------
class RelationshipHealthTracker:
    """
    V415 - AI Relationship Health Tracker

    Monitors communication frequency, sentiment trends, engagement metrics
    per contact, and alerts on at-risk relationships. Enforces reply-all
    on all outgoing messages to multi-recipient emails.
    """

    def __init__(self, my_address: str = "user@ziontech.com"):
        self.my_address = my_address
        self.events: Dict[str, List[CommunicationEvent]] = defaultdict(list)
        self.sentiment_analyzer = SimpleSentimentAnalyzer()
        self.frequency_analyzer = FrequencyAnalyzer()
        self.health_scorer = HealthScorer()
        self.enforcer = ReplyAllEnforcer()
        self.health_assessments: Dict[str, RelationshipHealth] = {}
        self.alerts: List[RelationshipAlert] = []
        self.sent_replies: List[Dict[str, Any]] = []
        logger.info("RelationshipHealthTracker initialised for %s", my_address)

    def record_event(self, event: CommunicationEvent) -> None:
        self.events[event.contact_email.lower()].append(event)
        logger.debug("Recorded %s event for %s", event.direction, event.contact_email)

    def compute_engagement(self, contact_email: str) -> EngagementMetrics:
        events = self.events.get(contact_email.lower(), [])
        metrics = EngagementMetrics(contact_email)
        metrics.total_interactions = len(events)

        inbound = [e for e in events if e.direction == "inbound"]
        outbound = [e for e in events if e.direction == "outbound"]
        metrics.inbound_count = len(inbound)
        metrics.outbound_count = len(outbound)

        if inbound:
            metrics.last_inbound = max(e.timestamp for e in inbound)
        if outbound:
            metrics.last_outbound = max(e.timestamp for e in outbound)

        # Response rate
        if inbound:
            replied_count = min(len(outbound), len(inbound))
            metrics.response_rate = replied_count / len(inbound) if inbound else 0

        # Average email length
        lengths = [len(e.body) for e in events]
        metrics.avg_email_length = statistics.mean(lengths) if lengths else 0

        return metrics

    def analyze_contact(self, contact_email: str) -> RelationshipHealth:
        events = self.events.get(contact_email.lower(), [])
        if not events:
            logger.warning("No events for contact %s", contact_email)
            health = RelationshipHealth(contact_email)
            health.status = "unknown"
            health.risk_factors.append("No communication history")
            return health

        engagement = self.compute_engagement(contact_email)
        frequency = self.frequency_analyzer.analyze(events)

        sentiments = []
        for event in sorted(events, key=lambda e: e.timestamp):
            if event.direction == "inbound":
                sentiment = self.sentiment_analyzer.analyze(f"{event.subject} {event.body}")
                sentiments.append(sentiment)

        health = self.health_scorer.score(engagement, frequency, sentiments)
        self.health_assessments[contact_email.lower()] = health

        # Generate alerts
        if health.status in ("at-risk", "critical"):
            self._generate_alert(health)

        logger.info(
            "Assessed %s: score=%.1f, status=%s",
            contact_email, health.health_score, health.status,
        )
        return health

    def analyze_all(self) -> Dict[str, RelationshipHealth]:
        results = {}
        for contact in self.events:
            results[contact] = self.analyze_contact(contact)
        return results

    def _generate_alert(self, health: RelationshipHealth) -> None:
        alert_id = hashlib.md5(
            f"{health.contact_email}:{datetime.utcnow().isoformat()}".encode()
        ).hexdigest()[:10]

        severity = "high" if health.status == "critical" else "medium"
        message = (
            f"Relationship with {health.contact_email} is {health.status}. "
            f"Risk factors: {', '.join(health.risk_factors)}"
        )

        alert = RelationshipAlert(
            alert_id=alert_id,
            contact_email=health.contact_email,
            severity=severity,
            message=message,
            health_score=health.health_score,
            triggered_at=datetime.utcnow(),
        )
        self.alerts.append(alert)
        logger.warning("ALERT: %s", message)

    def get_active_alerts(self) -> List[RelationshipAlert]:
        return [a for a in self.alerts if not a.acknowledged]

    def acknowledge_alert(self, alert_id: str) -> bool:
        for alert in self.alerts:
            if alert.alert_id == alert_id:
                alert.acknowledged = True
                logger.info("Acknowledged alert %s", alert_id)
                return True
        return False

    def send_relationship_nudge(self, contact_email: str, body: str,
                                 original_event: Optional[CommunicationEvent] = None) -> Dict[str, Any]:
        """Send a relationship nudge email, enforcing reply-all."""
        if original_event and original_event.is_multi_recipient:
            recipients = self.enforcer.enforce(original_event, self.my_address)
            logger.info(
                "REPLY-ALL ENFORCED for relationship nudge to %s", contact_email
            )
        else:
            # Single recipient — still include all known recipients from last email
            events = self.events.get(contact_email.lower(), [])
            if events:
                last = max(events, key=lambda e: e.timestamp)
                recipients = self.enforcer.enforce(last, self.my_address)
                if last.is_multi_recipient:
                    logger.info(
                        "REPLY-ALL ENFORCED for nudge (using last multi-recipient email)"
                    )
            else:
                recipients = {"to": [contact_email], "cc": []}

        outgoing = {
            "from": self.my_address,
            "to": recipients["to"],
            "cc": recipients["cc"],
            "subject": f"Checking in - {contact_email}",
            "body": body,
            "reply_all": True,
            "sent_at": datetime.utcnow().isoformat(),
        }

        self.sent_replies.append(outgoing)
        logger.info(
            "Sent relationship nudge -> To: %s, CC: %s",
            outgoing["to"], outgoing["cc"],
        )
        return outgoing

    def get_dashboard(self) -> Dict[str, Any]:
        """Get overall relationship health dashboard."""
        all_health = self.analyze_all()
        statuses = defaultdict(int)
        for h in all_health.values():
            statuses[h.status] += 1

        return {
            "engine": "V415_RelationshipHealthTracker",
            "generated_at": datetime.utcnow().isoformat(),
            "total_contacts": len(all_health),
            "status_breakdown": dict(statuses),
            "active_alerts": len(self.get_active_alerts()),
            "contacts": {k: v.to_dict() for k, v in all_health.items()},
            "alerts": [a.to_dict() for a in self.get_active_alerts()],
        }

    def get_status(self) -> Dict[str, Any]:
        return {
            "engine": "V415_RelationshipHealthTracker",
            "total_contacts": len(self.events),
            "total_events": sum(len(v) for v in self.events.values()),
            "assessments": len(self.health_assessments),
            "active_alerts": len(self.get_active_alerts()),
            "replies_sent": len(self.sent_replies),
        }


# ---------------------------------------------------------------------------
# CLI entry-point
# ---------------------------------------------------------------------------
def main():
    engine = RelationshipHealthTracker(my_address="zion@ziontech.com")
    now = datetime.utcnow()

    # Contact 1: Healthy relationship (frequent, positive)
    for i in range(8):
        engine.record_event(CommunicationEvent(
            f"alice_in_{i}", "alice@goodclient.com", "inbound",
            f"Project Update #{i}", "Great progress! Thanks for the excellent work.",
            ["zion@ziontech.com", "team@ziontech.com"], [],
            timestamp=now - timedelta(days=i * 3),
        ))
        engine.record_event(CommunicationEvent(
            f"alice_out_{i}", "alice@goodclient.com", "outbound",
            f"Re: Project Update #{i}", "Thank you! Happy to help. Looking forward to next steps.",
            ["alice@goodclient.com", "team@ziontech.com"], [],
            timestamp=now - timedelta(days=i * 3, hours=-2),
        ))

    # Contact 2: At-risk relationship (declining, negative)
    engine.record_event(CommunicationEvent(
        "bob_1", "bob@atrisk.com", "inbound",
        "Service Issues", "Very disappointed with the delay. This is unacceptable and frustrated.",
        ["zion@ziontech.com"], ["mgmt@ziontech.com"],
        timestamp=now - timedelta(days=45),
    ))
    engine.record_event(CommunicationEvent(
        "bob_2", "bob@atrisk.com", "inbound",
        "Complaint", "Still having problems. Wrong configuration. Error persists.",
        ["zion@ziontech.com"], ["mgmt@ziontech.com"],
        timestamp=now - timedelta(days=30),
    ))

    # Contact 3: Stable relationship
    for i in range(4):
        engine.record_event(CommunicationEvent(
            f"carol_{i}", "carol@stable.com", "inbound",
            f"Monthly Review {i}", "Everything looks good. Confirm the numbers.",
            ["zion@ziontech.com", "finance@ziontech.com"], [],
            timestamp=now - timedelta(days=i * 7),
        ))

    # Analyze
    dashboard = engine.get_dashboard()
    print(json.dumps(dashboard, indent=2, default=str))

    # Send nudge to at-risk contact
    nudge = engine.send_relationship_nudge(
        "bob@atrisk.com",
        "Hi Bob, I wanted to personally check in regarding the issues you raised. "
        "I'd like to schedule a call to address your concerns directly.",
    )
    print("\n--- Relationship Nudge (Reply-All) ---")
    print(json.dumps(nudge, indent=2))

    print("\nStatus:", json.dumps(engine.get_status(), indent=2))


if __name__ == "__main__":
    main()

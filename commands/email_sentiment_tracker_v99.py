#!/usr/bin/env python3
"""
V99: AI Email Sentiment Evolution Tracker
Tracks sentiment changes across email threads to identify relationship health,
escalation patterns, satisfaction trends, and optimal intervention moments.
"""

import re
import json
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass, field
from enum import Enum


class SentimentLevel(Enum):
    VERY_POSITIVE = "very_positive"
    POSITIVE = "positive"
    NEUTRAL = "neutral"
    NEGATIVE = "negative"
    VERY_NEGATIVE = "very_negative"


class RelationshipHealth(Enum):
    EXCELLENT = "excellent"
    GOOD = "good"
    FAIR = "fair"
    POOR = "poor"
    CRITICAL = "critical"


class TrendDirection(Enum):
    IMPROVING = "improving"
    STABLE = "stable"
    DECLINING = "declining"
    VOLATILE = "volatile"


@dataclass
class SentimentSnapshot:
    email_id: str
    timestamp: datetime
    sender: str
    sentiment_score: float  # -1.0 to 1.0
    sentiment_level: SentimentLevel
    confidence: float
    key_phrases: List[str]
    emotional_tone: str


@dataclass
class ThreadSentiment:
    thread_id: str
    participants: List[str]
    snapshots: List[SentimentSnapshot] = field(default_factory=list)
    current_health: RelationshipHealth = RelationshipHealth.FAIR
    trend: TrendDirection = TrendDirection.STABLE
    escalation_risk: float = 0.0
    intervention_recommended: bool = False
    churn_risk: float = 0.0


@dataclass
class SentimentAlert:
    alert_id: str
    thread_id: str
    alert_type: str  # "deterioration", "escalation", "churn_risk", "intervention_needed"
    severity: str  # "low", "medium", "high", "critical"
    message: str
    recommended_action: str
    timestamp: datetime = field(default_factory=datetime.now)


class V99SentimentEvolutionTracker:
    """
    V99: AI Email Sentiment Evolution Tracker
    
    Features:
    1. Track sentiment changes across email threads
    2. Identify relationship deterioration early
    3. Detect escalation patterns before they happen
    4. Monitor satisfaction trends over time
    5. Calculate optimal intervention moments
    6. Generate customer health scores
    7. Create sentiment alerts and recommendations
    """
    
    def __init__(self):
        self.threads: Dict[str, ThreadSentiment] = {}
        self.alerts: List[SentimentAlert] = []
        self.health_scores: Dict[str, float] = {}  # sender -> health score
        
        # Sentiment analysis keywords
        self.positive_words = [
            'thank', 'great', 'excellent', 'amazing', 'wonderful', 'perfect',
            'love', 'happy', 'pleased', 'appreciate', 'fantastic', 'outstanding',
            'helpful', 'impressive', 'delighted', 'satisfied', 'grateful'
        ]
        
        self.negative_words = [
            'frustrated', 'disappointed', 'upset', 'angry', 'unhappy', 'terrible',
            'awful', 'horrible', 'worst', 'hate', 'annoyed', 'irritated',
            'problem', 'issue', 'broken', 'failed', 'error', 'delay', 'poor'
        ]
        
        self.escalation_signals = [
            'escalate', 'manager', 'supervisor', 'complaint', 'unacceptable',
            'immediately', 'urgent', 'asap', 'deadline', 'critical', 'emergency',
            'legal', 'attorney', 'lawyer', 'refund', 'cancel', 'terminate'
        ]
    
    def analyze_email_sentiment(self, email_data: Dict) -> SentimentSnapshot:
        """Analyze sentiment of a single email."""
        email_id = email_data.get('id', 'unknown')
        sender = email_data.get('from', 'unknown')
        timestamp = datetime.fromisoformat(email_data.get('timestamp', datetime.now().isoformat()))
        body = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        
        full_text = f"{subject} {body}"
        
        # Calculate sentiment score
        positive_count = sum(1 for word in self.positive_words if word in full_text)
        negative_count = sum(1 for word in self.negative_words if word in full_text)
        
        # Normalize to -1.0 to 1.0 scale
        total = positive_count + negative_count
        if total == 0:
            sentiment_score = 0.0
        else:
            sentiment_score = (positive_count - negative_count) / total
        
        # Determine sentiment level
        if sentiment_score > 0.6:
            level = SentimentLevel.VERY_POSITIVE
        elif sentiment_score > 0.2:
            level = SentimentLevel.POSITIVE
        elif sentiment_score > -0.2:
            level = SentimentLevel.NEUTRAL
        elif sentiment_score > -0.6:
            level = SentimentLevel.NEGATIVE
        else:
            level = SentimentLevel.VERY_NEGATIVE
        
        # Extract key phrases
        key_phrases = []
        if level in [SentimentLevel.VERY_POSITIVE, SentimentLevel.POSITIVE]:
            for word in self.positive_words:
                if word in full_text:
                    key_phrases.append(word)
        else:
            for word in self.negative_words:
                if word in full_text:
                    key_phrases.append(word)
        
        # Determine emotional tone
        tone = self._determine_emotional_tone(full_text, sentiment_score)
        
        # Calculate confidence (based on word count and clarity)
        word_count = len(full_text.split())
        if word_count < 10:
            confidence = 0.5
        elif total == 0:
            confidence = 0.6
        else:
            confidence = min(0.95, 0.7 + (total / 20))
        
        return SentimentSnapshot(
            email_id=email_id,
            timestamp=timestamp,
            sender=sender,
            sentiment_score=sentiment_score,
            sentiment_level=level,
            confidence=confidence,
            key_phrases=key_phrases[:5],
            emotional_tone=tone
        )
    
    def _determine_emotional_tone(self, text: str, score: float) -> str:
        """Determine the emotional tone of the email."""
        if score > 0.6:
            return "enthusiastic"
        elif score > 0.2:
            return "friendly"
        elif score > -0.2:
            return "professional"
        elif score > -0.6:
            return "concerned"
        else:
            return "frustrated"
    
    def process_email(self, email_data: Dict) -> Dict:
        """Process an email and update thread sentiment tracking."""
        # Analyze sentiment
        snapshot = self.analyze_email_sentiment(email_data)
        
        # Get or create thread
        thread_id = email_data.get('thread_id', email_data.get('id', 'unknown'))
        
        if thread_id not in self.threads:
            self.threads[thread_id] = ThreadSentiment(
                thread_id=thread_id,
                participants=[snapshot.sender]
            )
        
        thread = self.threads[thread_id]
        
        # Add sender to participants if new
        if snapshot.sender not in thread.participants:
            thread.participants.append(snapshot.sender)
        
        # Add snapshot to thread
        thread.snapshots.append(snapshot)
        
        # Update thread analysis
        self._update_thread_analysis(thread)
        
        # Check for alerts
        alerts = self._check_for_alerts(thread, snapshot)
        
        # Generate response with sentiment awareness
        response = self._generate_sentiment_aware_response(thread, snapshot)
        
        return {
            'thread_id': thread_id,
            'snapshot': snapshot,
            'thread_health': thread.current_health.value,
            'trend': thread.trend.value,
            'escalation_risk': thread.escalation_risk,
            'churn_risk': thread.churn_risk,
            'alerts': alerts,
            'response': response
        }
    
    def _update_thread_analysis(self, thread: ThreadSentiment):
        """Update thread-level sentiment analysis."""
        if not thread.snapshots:
            return
        
        # Calculate average sentiment
        avg_sentiment = sum(s.sentiment_score for s in thread.snapshots) / len(thread.snapshots)
        
        # Determine trend
        if len(thread.snapshots) >= 3:
            recent = [s.sentiment_score for s in thread.snapshots[-3:]]
            if all(recent[i] > recent[i-1] for i in range(1, len(recent))):
                thread.trend = TrendDirection.IMPROVING
            elif all(recent[i] < recent[i-1] for i in range(1, len(recent))):
                thread.trend = TrendDirection.DECLINING
            elif max(recent) - min(recent) > 0.8:
                thread.trend = TrendDirection.VOLATILE
            else:
                thread.trend = TrendDirection.STABLE
        
        # Determine relationship health
        if avg_sentiment > 0.5:
            thread.current_health = RelationshipHealth.EXCELLENT
        elif avg_sentiment > 0.2:
            thread.current_health = RelationshipHealth.GOOD
        elif avg_sentiment > -0.2:
            thread.current_health = RelationshipHealth.FAIR
        elif avg_sentiment > -0.5:
            thread.current_health = RelationshipHealth.POOR
        else:
            thread.current_health = RelationshipHealth.CRITICAL
        
        # Calculate escalation risk
        escalation_signals = sum(
            1 for s in thread.snapshots[-5:]  # Last 5 emails
            for phrase in self.escalation_signals
            if phrase in s.key_phrases
        )
        thread.escalation_risk = min(1.0, escalation_signals / 10)
        
        # Calculate churn risk
        if thread.current_health in [RelationshipHealth.POOR, RelationshipHealth.CRITICAL]:
            thread.churn_risk = 0.7
            if thread.trend == TrendDirection.DECLINING:
                thread.churn_risk = 0.9
        elif thread.current_health == RelationshipHealth.FAIR:
            thread.churn_risk = 0.3
            if thread.trend == TrendDirection.DECLINING:
                thread.churn_risk = 0.5
        else:
            thread.churn_risk = 0.1
        
        # Check if intervention is recommended
        thread.intervention_recommended = (
            thread.current_health in [RelationshipHealth.POOR, RelationshipHealth.CRITICAL] or
            thread.escalation_risk > 0.5 or
            thread.churn_risk > 0.6
        )
        
        # Update sender health score
        for participant in thread.participants:
            if participant not in self.health_scores:
                self.health_scores[participant] = 50.0
            
            # Adjust health score based on latest sentiment
            latest = thread.snapshots[-1]
            if latest.sender == participant:
                adjustment = latest.sentiment_score * 10
                self.health_scores[participant] = max(0, min(100, 
                    self.health_scores[participant] + adjustment
                ))
    
    def _check_for_alerts(self, thread: ThreadSentiment, snapshot: SentimentSnapshot) -> List[SentimentAlert]:
        """Check if any alerts should be generated."""
        alerts = []
        
        # Check for sentiment deterioration
        if len(thread.snapshots) >= 3:
            recent_trend = [s.sentiment_score for s in thread.snapshots[-3:]]
            if all(recent_trend[i] < recent_trend[i-1] for i in range(1, len(recent_trend))):
                if recent_trend[-1] < -0.3:
                    alert = SentimentAlert(
                        alert_id=f"det_{thread.thread_id}_{len(self.alerts)}",
                        thread_id=thread.thread_id,
                        alert_type="deterioration",
                        severity="high" if recent_trend[-1] < -0.5 else "medium",
                        message=f"Sentiment deteriorating in thread {thread.thread_id}. Current score: {recent_trend[-1]:.2f}",
                        recommended_action="Reach out proactively to address concerns and improve relationship"
                    )
                    alerts.append(alert)
        
        # Check for escalation risk
        if thread.escalation_risk > 0.5:
            alert = SentimentAlert(
                alert_id=f"esc_{thread.thread_id}_{len(self.alerts)}",
                thread_id=thread.thread_id,
                alert_type="escalation",
                severity="critical" if thread.escalation_risk > 0.8 else "high",
                message=f"High escalation risk detected ({thread.escalation_risk:.0%}). Escalation signals found.",
                recommended_action="Escalate to manager immediately and prepare resolution plan"
            )
            alerts.append(alert)
        
        # Check for churn risk
        if thread.churn_risk > 0.6:
            alert = SentimentAlert(
                alert_id=f"churn_{thread.thread_id}_{len(self.alerts)}",
                thread_id=thread.thread_id,
                alert_type="churn_risk",
                severity="critical" if thread.churn_risk > 0.8 else "high",
                message=f"High churn risk detected ({thread.churn_risk:.0%}). Customer health: {thread.current_health.value}",
                recommended_action="Schedule retention call with special offer or executive outreach"
            )
            alerts.append(alert)
        
        # Check for intervention needed
        if thread.intervention_recommended and not any(a.alert_type == "intervention_needed" for a in alerts):
            alert = SentimentAlert(
                alert_id=f"int_{thread.thread_id}_{len(self.alerts)}",
                thread_id=thread.thread_id,
                alert_type="intervention_needed",
                severity="medium",
                message=f"Proactive intervention recommended for thread {thread.thread_id}",
                recommended_action="Send personalized follow-up with value proposition or resolution"
            )
            alerts.append(alert)
        
        self.alerts.extend(alerts)
        return alerts
    
    def _generate_sentiment_aware_response(self, thread: ThreadSentiment, snapshot: SentimentSnapshot) -> Dict:
        """Generate a sentiment-aware response."""
        # Determine response strategy based on sentiment
        if snapshot.sentiment_level == SentimentLevel.VERY_NEGATIVE:
            tone = "empathetic and solution-focused"
            urgency = "high"
            action = "Immediate resolution and follow-up"
        elif snapshot.sentiment_level == SentimentLevel.NEGATIVE:
            tone = "understanding and proactive"
            urgency = "medium"
            action = "Address concerns and provide timeline"
        elif snapshot.sentiment_level == SentimentLevel.POSITIVE:
            tone = "appreciative and reinforcing"
            urgency = "normal"
            action = "Thank and offer additional value"
        elif snapshot.sentiment_level == SentimentLevel.VERY_POSITIVE:
            tone = "enthusiastic and partnership-building"
            urgency = "normal"
            action = "Celebrate success and explore expansion"
        else:
            tone = "professional and helpful"
            urgency = "normal"
            action = "Provide requested information"
        
        # Adjust for thread health
        if thread.current_health in [RelationshipHealth.POOR, RelationshipHealth.CRITICAL]:
            tone = "empathetic and committed to improvement"
            action = f"{action}. Schedule executive review"
        
        # Add escalation handling
        if thread.escalation_risk > 0.5:
            action = f"{action}. Escalate to senior team"
        
        return {
            'reply_all': True,
            'tone': tone,
            'urgency': urgency,
            'recommended_action': action,
            'health_status': thread.current_health.value,
            'trend': thread.trend.value,
            'sentiment_score': snapshot.sentiment_score,
            'key_insights': [
                f"Sentiment: {snapshot.sentiment_level.value}",
                f"Thread health: {thread.current_health.value}",
                f"Trend: {thread.trend.value}",
                f"Escalation risk: {thread.escalation_risk:.0%}",
                f"Churn risk: {thread.churn_risk:.0%}"
            ]
        }
    
    def get_thread_report(self, thread_id: str) -> Optional[Dict]:
        """Get comprehensive report for a thread."""
        if thread_id not in self.threads:
            return None
        
        thread = self.threads[thread_id]
        
        return {
            'thread_id': thread_id,
            'participants': thread.participants,
            'total_emails': len(thread.snapshots),
            'current_health': thread.current_health.value,
            'trend': thread.trend.value,
            'escalation_risk': thread.escalation_risk,
            'churn_risk': thread.churn_risk,
            'intervention_recommended': thread.intervention_recommended,
            'sentiment_timeline': [
                {
                    'email_id': s.email_id,
                    'timestamp': s.timestamp.isoformat(),
                    'sender': s.sender,
                    'score': s.sentiment_score,
                    'level': s.sentiment_level.value,
                    'tone': s.emotional_tone
                }
                for s in thread.snapshots
            ],
            'alerts': [
                {
                    'type': a.alert_type,
                    'severity': a.severity,
                    'message': a.message,
                    'action': a.recommended_action
                }
                for a in self.alerts if a.thread_id == thread_id
            ]
        }
    
    def get_dashboard_summary(self) -> Dict:
        """Get dashboard summary of all tracked threads."""
        total_threads = len(self.threads)
        
        health_distribution = {
            'excellent': 0,
            'good': 0,
            'fair': 0,
            'poor': 0,
            'critical': 0
        }
        
        for thread in self.threads.values():
            health_distribution[thread.current_health.value] += 1
        
        trend_distribution = {
            'improving': 0,
            'stable': 0,
            'declining': 0,
            'volatile': 0
        }
        
        for thread in self.threads.values():
            trend_distribution[thread.trend.value] += 1
        
        high_risk_threads = [
            t.thread_id for t in self.threads.values()
            if t.escalation_risk > 0.5 or t.churn_risk > 0.6
        ]
        
        return {
            'total_threads': total_threads,
            'health_distribution': health_distribution,
            'trend_distribution': trend_distribution,
            'high_risk_threads': high_risk_threads,
            'total_alerts': len(self.alerts),
            'active_alerts': len([a for a in self.alerts if a.severity in ['high', 'critical']]),
            'average_health_score': sum(self.health_scores.values()) / len(self.health_scores) if self.health_scores else 0
        }


# Test the implementation
if __name__ == "__main__":
    tracker = V99SentimentEvolutionTracker()
    
    # Simulate a thread with deteriorating sentiment
    test_emails = [
        {
            'id': 'email_1',
            'thread_id': 'thread_123',
            'from': 'customer@example.com',
            'timestamp': datetime.now().isoformat(),
            'subject': 'Great service!',
            'body': 'Thank you for the excellent support. I am very happy with the service!'
        },
        {
            'id': 'email_2',
            'thread_id': 'thread_123',
            'from': 'customer@example.com',
            'timestamp': (datetime.now() + timedelta(days=1)).isoformat(),
            'subject': 'Issue with product',
            'body': 'I am having some problems with the product. It is not working as expected.'
        },
        {
            'id': 'email_3',
            'thread_id': 'thread_123',
            'from': 'customer@example.com',
            'timestamp': (datetime.now() + timedelta(days=2)).isoformat(),
            'subject': 'Very frustrated',
            'body': 'This is unacceptable. I am very frustrated and disappointed. I want to escalate this to your manager immediately.'
        }
    ]
    
    print("V99: AI Email Sentiment Evolution Tracker")
    print("=" * 60)
    
    for email in test_emails:
        result = tracker.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"  Sentiment: {result['snapshot'].sentiment_level.value} ({result['snapshot'].sentiment_score:.2f})")
        print(f"  Thread Health: {result['thread_health']}")
        print(f"  Trend: {result['trend']}")
        print(f"  Escalation Risk: {result['escalation_risk']:.0%}")
        print(f"  Churn Risk: {result['churn_risk']:.0%}")
        
        if result['alerts']:
            print(f"  Alerts: {len(result['alerts'])}")
            for alert in result['alerts']:
                print(f"    - {alert.alert_type}: {alert.message}")
    
    print("\n" + "=" * 60)
    print("Dashboard Summary:")
    summary = tracker.get_dashboard_summary()
    print(json.dumps(summary, indent=2))
    
    print("\n" + "=" * 60)
    print("Thread Report:")
    report = tracker.get_thread_report('thread_123')
    print(json.dumps(report, indent=2))

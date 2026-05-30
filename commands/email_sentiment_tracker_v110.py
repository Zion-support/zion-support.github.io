#!/usr/bin/env python3
"""
V110: AI Email Sentiment Evolution Tracker
Tracks sentiment changes across email threads to detect relationship deterioration,
escalation risks, and satisfaction trends over time.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from dataclasses import dataclass, field
from enum import Enum


class SentimentLevel(Enum):
    VERY_POSITIVE = "very_positive"
    POSITIVE = "positive"
    NEUTRAL = "neutral"
    NEGATIVE = "negative"
    VERY_NEGATIVE = "very_negative"


class RelationshipTrend(Enum):
    IMPROVING = "improving"
    STABLE = "stable"
    DECLINING = "declining"
    VOLATILE = "volatile"


class RiskLevel(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


@dataclass
class SentimentSnapshot:
    email_id: str
    timestamp: datetime
    sentiment_score: float  # -1.0 to 1.0
    sentiment_level: SentimentLevel
    key_phrases: List[str] = field(default_factory=list)
    emotional_tone: str = ""


@dataclass
class RelationshipHealth:
    contact: str
    thread_id: str
    snapshots: List[SentimentSnapshot] = field(default_factory=list)
    trend: RelationshipTrend = RelationshipTrend.STABLE
    risk_level: RiskLevel = RiskLevel.LOW
    escalation_probability: float = 0.0
    satisfaction_score: float = 0.5
    recommended_actions: List[str] = field(default_factory=list)


class V110SentimentEvolutionTracker:
    """
    V110: AI Email Sentiment Evolution Tracker
    
    Features:
    1. Sentiment tracking across email threads
    2. Relationship health monitoring
    3. Trend analysis (improving/stable/declining)
    4. Escalation risk detection
    5. Satisfaction scoring
    6. Proactive intervention recommendations
    """
    
    def __init__(self):
        self.relationships: Dict[str, RelationshipHealth] = {}
        
        # Sentiment keywords
        self.positive_keywords = [
            'thank', 'great', 'excellent', 'appreciate', 'wonderful', 'perfect',
            'happy', 'pleased', 'fantastic', 'amazing', 'love', 'impressed'
        ]
        
        self.negative_keywords = [
            'disappointed', 'frustrated', 'unhappy', 'concerned', 'worried',
            'angry', 'upset', 'terrible', 'awful', 'horrible', 'hate', 'annoyed'
        ]
        
        self.escalation_keywords = [
            'manager', 'supervisor', 'escalate', 'complaint', 'legal',
            'attorney', 'refund', 'cancel', 'terminate', 'last chance'
        ]
    
    def track_sentiment(self, email_data: Dict) -> Dict:
        """Track sentiment evolution for an email thread."""
        email_id = email_data.get('id', 'unknown')
        thread_id = email_data.get('thread_id', email_id)
        sender = email_data.get('from', 'unknown')
        body = email_data.get('body', '')
        timestamp = datetime.fromisoformat(email_data.get('timestamp', datetime.now().isoformat()))
        
        # Analyze sentiment
        sentiment_score, sentiment_level, key_phrases = self._analyze_sentiment(body)
        
        # Create snapshot
        snapshot = SentimentSnapshot(
            email_id=email_id,
            timestamp=timestamp,
            sentiment_score=sentiment_score,
            sentiment_level=sentiment_level,
            key_phrases=key_phrases,
            emotional_tone=self._detect_tone(body)
        )
        
        # Get or create relationship health tracker
        rel_key = f"{sender}_{thread_id}"
        if rel_key not in self.relationships:
            self.relationships[rel_key] = RelationshipHealth(
                contact=sender,
                thread_id=thread_id
            )
        
        relationship = self.relationships[rel_key]
        relationship.snapshots.append(snapshot)
        
        # Calculate trend
        trend = self._calculate_trend(relationship.snapshots)
        relationship.trend = trend
        
        # Calculate risk level
        risk_level = self._calculate_risk(relationship.snapshots, body)
        relationship.risk_level = risk_level
        
        # Calculate escalation probability
        escalation_prob = self._calculate_escalation_probability(body, trend)
        relationship.escalation_probability = escalation_prob
        
        # Calculate satisfaction score
        satisfaction = self._calculate_satisfaction(relationship.snapshots)
        relationship.satisfaction_score = satisfaction
        
        # Generate recommended actions
        actions = self._recommend_actions(trend, risk_level, escalation_prob, satisfaction)
        relationship.recommended_actions = actions
        
        return {
            'email_id': email_id,
            'thread_id': thread_id,
            'contact': sender,
            'current_sentiment': sentiment_level.value,
            'sentiment_score': sentiment_score,
            'trend': trend.value,
            'risk_level': risk_level.value,
            'escalation_probability': escalation_prob,
            'satisfaction_score': satisfaction,
            'recommended_actions': actions,
            'key_phrases': key_phrases,
            'reply_all': True
        }
    
    def _analyze_sentiment(self, body: str) -> tuple:
        """Analyze sentiment of email body."""
        body_lower = body.lower()
        
        positive_count = sum(1 for kw in self.positive_keywords if kw in body_lower)
        negative_count = sum(1 for kw in self.negative_keywords if kw in body_lower)
        
        # Calculate score (-1.0 to 1.0)
        total = positive_count + negative_count
        if total == 0:
            score = 0.0
        else:
            score = (positive_count - negative_count) / total
        
        # Determine level
        if score > 0.5:
            level = SentimentLevel.VERY_POSITIVE
        elif score > 0.2:
            level = SentimentLevel.POSITIVE
        elif score > -0.2:
            level = SentimentLevel.NEUTRAL
        elif score > -0.5:
            level = SentimentLevel.NEGATIVE
        else:
            level = SentimentLevel.VERY_NEGATIVE
        
        # Extract key phrases
        key_phrases = []
        if positive_count > negative_count:
            key_phrases = [kw for kw in self.positive_keywords if kw in body_lower][:3]
        elif negative_count > positive_count:
            key_phrases = [kw for kw in self.negative_keywords if kw in body_lower][:3]
        
        return score, level, key_phrases
    
    def _detect_tone(self, body: str) -> str:
        """Detect emotional tone of email."""
        body_lower = body.lower()
        
        if any(word in body_lower for word in ['urgent', 'asap', 'immediately']):
            return 'urgent'
        elif any(word in body_lower for word in ['thank', 'appreciate', 'grateful']):
            return 'grateful'
        elif any(word in body_lower for word in ['sorry', 'apologize', 'regret']):
            return 'apologetic'
        elif any(word in body_lower for word in ['frustrated', 'annoyed', 'angry']):
            return 'frustrated'
        else:
            return 'neutral'
    
    def _calculate_trend(self, snapshots: List[SentimentSnapshot]) -> RelationshipTrend:
        """Calculate sentiment trend over time."""
        if len(snapshots) < 2:
            return RelationshipTrend.STABLE
        
        # Get last 3 snapshots (or all if less than 3)
        recent = snapshots[-3:] if len(snapshots) >= 3 else snapshots
        
        scores = [s.sentiment_score for s in recent]
        
        # Check if improving
        if all(scores[i] < scores[i+1] for i in range(len(scores)-1)):
            return RelationshipTrend.IMPROVING
        
        # Check if declining
        if all(scores[i] > scores[i+1] for i in range(len(scores)-1)):
            return RelationshipTrend.DECLINING
        
        # Check if volatile
        if max(scores) - min(scores) > 0.8:
            return RelationshipTrend.VOLATILE
        
        return RelationshipTrend.STABLE
    
    def _calculate_risk(self, snapshots: List[SentimentSnapshot], body: str) -> RiskLevel:
        """Calculate relationship risk level."""
        body_lower = body.lower()
        
        # Check for escalation keywords
        escalation_count = sum(1 for kw in self.escalation_keywords if kw in body_lower)
        
        # Check recent sentiment
        recent_sentiment = snapshots[-1].sentiment_score if snapshots else 0
        
        if escalation_count >= 2 or recent_sentiment < -0.7:
            return RiskLevel.CRITICAL
        elif escalation_count == 1 or recent_sentiment < -0.4:
            return RiskLevel.HIGH
        elif recent_sentiment < -0.2:
            return RiskLevel.MEDIUM
        else:
            return RiskLevel.LOW
    
    def _calculate_escalation_probability(self, body: str, trend: RelationshipTrend) -> float:
        """Calculate probability of escalation."""
        body_lower = body.lower()
        
        prob = 0.1
        
        # Escalation keywords
        escalation_count = sum(1 for kw in self.escalation_keywords if kw in body_lower)
        prob += escalation_count * 0.2
        
        # Trend adjustment
        if trend == RelationshipTrend.DECLINING:
            prob += 0.3
        elif trend == RelationshipTrend.VOLATILE:
            prob += 0.2
        
        return min(1.0, prob)
    
    def _calculate_satisfaction(self, snapshots: List[SentimentSnapshot]) -> float:
        """Calculate overall satisfaction score."""
        if not snapshots:
            return 0.5
        
        # Average of last 3 snapshots
        recent = snapshots[-3:] if len(snapshots) >= 3 else snapshots
        avg_score = sum(s.sentiment_score for s in recent) / len(recent)
        
        # Convert from -1.0...1.0 to 0.0...1.0
        return (avg_score + 1.0) / 2.0
    
    def _recommend_actions(self, trend: RelationshipTrend, risk: RiskLevel, 
                          escalation_prob: float, satisfaction: float) -> List[str]:
        """Recommend proactive actions based on relationship health."""
        actions = []
        
        if risk == RiskLevel.CRITICAL:
            actions.append("Immediately escalate to senior management")
            actions.append("Schedule urgent call to address concerns")
        elif risk == RiskLevel.HIGH:
            actions.append("Proactively reach out to address issues")
            actions.append("Offer additional support or resources")
        
        if trend == RelationshipTrend.DECLINING:
            actions.append("Review recent interactions for pain points")
            actions.append("Consider offering incentives or concessions")
        
        if escalation_prob > 0.7:
            actions.append("Prepare escalation response plan")
            actions.append("Document all communications carefully")
        
        if satisfaction < 0.4:
            actions.append("Conduct satisfaction survey")
            actions.append("Identify specific areas for improvement")
        
        if trend == RelationshipTrend.IMPROVING and satisfaction > 0.7:
            actions.append("Reinforce positive relationship")
            actions.append("Explore upsell or expansion opportunities")
        
        if not actions:
            actions.append("Continue current approach")
        
        return actions


if __name__ == "__main__":
    # Test the engine
    tracker = V110SentimentEvolutionTracker()
    
    test_emails = [
        {
            'id': 'email_1',
            'thread_id': 'thread_abc',
            'from': 'client@company.com',
            'body': 'Thank you for the excellent service. We are very happy with the results!',
            'timestamp': datetime.now().isoformat()
        },
        {
            'id': 'email_2',
            'thread_id': 'thread_abc',
            'from': 'client@company.com',
            'body': 'I\'m concerned about the recent delays. This is frustrating.',
            'timestamp': (datetime.now() + timedelta(days=1)).isoformat()
        },
        {
            'id': 'email_3',
            'thread_id': 'thread_abc',
            'from': 'client@company.com',
            'body': 'This is unacceptable. I want to speak to your manager immediately.',
            'timestamp': (datetime.now() + timedelta(days=2)).isoformat()
        }
    ]
    
    for email in test_emails:
        result = tracker.track_sentiment(email)
        print(f"\nEmail {email['id']}:")
        print(json.dumps(result, indent=2))

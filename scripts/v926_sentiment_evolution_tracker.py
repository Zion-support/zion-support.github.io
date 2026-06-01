#!/usr/bin/env python3
"""
V926: Email Sentiment Evolution Tracker
Tracks how sentiment changes across email threads over time.
Detects relationship health, predicts churn risk, and triggers proactive relationship management.
"""

import re
from datetime import datetime
from typing import Dict, List, Any, Tuple

class SentimentEvolutionTracker:
    def __init__(self):
        self.sentiment_lexicon = {
            'positive': ['great', 'excellent', 'amazing', 'love', 'happy', 'pleased', 'satisfied', 'appreciate', 'thanks', 'wonderful'],
            'negative': ['terrible', 'awful', 'hate', 'angry', 'frustrated', 'disappointed', 'upset', 'annoyed', 'worried', 'concerned'],
            'neutral': ['okay', 'fine', 'noted', 'received', 'understood', 'thanks']
        }
        
    def analyze_thread_sentiment(self, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Analyze sentiment evolution across an email thread."""
        if not emails:
            return {
                'error': 'No emails provided',
                'sentiment_evolution': [],
                'relationship_health': 'unknown',
                'churn_risk': 'unknown',
                'proactive_actions': []
            }
        
        # Analyze each email's sentiment
        sentiment_timeline = []
        for email in sorted(emails, key=lambda x: x.get('timestamp', datetime.now().isoformat())):
            sentiment = self._analyze_single_email(email)
            sentiment_timeline.append({
                'email_id': email.get('id', ''),
                'timestamp': email.get('timestamp', datetime.now().isoformat()),
                'sender': email.get('sender', ''),
                'sentiment': sentiment['overall'],
                'score': sentiment['score'],
                'intensity': sentiment['intensity']
            })
        
        # Calculate relationship health
        relationship_health = self._calculate_relationship_health(sentiment_timeline)
        
        # Predict churn risk
        churn_risk = self._predict_churn_risk(sentiment_timeline)
        
        # Generate proactive actions
        proactive_actions = self._generate_proactive_actions(
            sentiment_timeline, relationship_health, churn_risk
        )
        
        # Calculate trend
        trend = self._calculate_trend(sentiment_timeline)
        
        result = {
            'sentiment_evolution': sentiment_timeline,
            'relationship_health': relationship_health['status'],
            'health_score': relationship_health['score'],
            'churn_risk': churn_risk['level'],
            'churn_probability': churn_risk['probability'],
            'trend': trend,
            'proactive_actions': proactive_actions,
            'summary': self._generate_summary(sentiment_timeline, relationship_health, churn_risk)
        }
        
        return result
    
    def _analyze_single_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze sentiment of a single email."""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        text = f"{subject} {body}"
        
        positive_count = sum(1 for word in self.sentiment_lexicon['positive'] if word in text)
        negative_count = sum(1 for word in self.sentiment_lexicon['negative'] if word in text)
        neutral_count = sum(1 for word in self.sentiment_lexicon['neutral'] if word in text)
        
        # Calculate sentiment score (-1 to 1)
        total = positive_count + negative_count + neutral_count
        if total == 0:
            score = 0.0
        else:
            score = (positive_count - negative_count) / max(total, 1)
        
        # Determine overall sentiment
        if score > 0.2:
            overall = 'positive'
        elif score < -0.2:
            overall = 'negative'
        else:
            overall = 'neutral'
        
        # Calculate intensity (0-1)
        intensity = abs(score)
        
        return {
            'overall': overall,
            'score': round(score, 2),
            'intensity': round(intensity, 2),
            'positive_count': positive_count,
            'negative_count': negative_count,
            'neutral_count': neutral_count
        }
    
    def _calculate_relationship_health(self, timeline: List[Dict]) -> Dict[str, Any]:
        """Calculate overall relationship health."""
        if not timeline:
            return {'status': 'unknown', 'score': 0.0}
        
        # Calculate average sentiment score
        scores = [entry['score'] for entry in timeline]
        avg_score = sum(scores) / len(scores)
        
        # Check for volatility (standard deviation)
        variance = sum((s - avg_score) ** 2 for s in scores) / len(scores)
        volatility = variance ** 0.5
        
        # Determine health status
        if avg_score > 0.5 and volatility < 0.3:
            status = 'excellent'
        elif avg_score > 0.2 and volatility < 0.4:
            status = 'good'
        elif avg_score > -0.2 and volatility < 0.5:
            status = 'fair'
        elif avg_score > -0.5:
            status = 'poor'
        else:
            status = 'critical'
        
        return {
            'status': status,
            'score': round(avg_score, 2),
            'volatility': round(volatility, 2)
        }
    
    def _predict_churn_risk(self, timeline: List[Dict]) -> Dict[str, Any]:
        """Predict churn risk based on sentiment trends."""
        if len(timeline) < 3:
            return {'level': 'unknown', 'probability': 0.0}
        
        # Check recent trend (last 3 emails)
        recent = timeline[-3:]
        recent_scores = [entry['score'] for entry in recent]
        
        # Calculate trend direction
        if recent_scores[-1] < recent_scores[0]:
            trend_direction = 'declining'
        elif recent_scores[-1] > recent_scores[0]:
            trend_direction = 'improving'
        else:
            trend_direction = 'stable'
        
        # Calculate churn probability
        avg_recent = sum(recent_scores) / len(recent_scores)
        
        if avg_recent < -0.5 and trend_direction == 'declining':
            probability = 0.85
            level = 'critical'
        elif avg_recent < -0.3:
            probability = 0.65
            level = 'high'
        elif avg_recent < 0 and trend_direction == 'declining':
            probability = 0.45
            level = 'medium'
        elif avg_recent < 0.2:
            probability = 0.25
            level = 'low'
        else:
            probability = 0.10
            level = 'minimal'
        
        return {
            'level': level,
            'probability': round(probability, 2),
            'trend': trend_direction,
            'recent_avg': round(avg_recent, 2)
        }
    
    def _generate_proactive_actions(self, timeline: List[Dict], health: Dict, churn: Dict) -> List[str]:
        """Generate proactive relationship management actions."""
        actions = []
        
        # Critical churn risk
        if churn['level'] in ['critical', 'high']:
            actions.append("Schedule immediate executive check-in call")
            actions.append("Offer dedicated account manager")
            actions.append("Prepare retention offer or discount")
        
        # Poor relationship health
        if health['status'] in ['poor', 'critical']:
            actions.append("Conduct relationship review meeting")
            actions.append("Address specific pain points mentioned in recent emails")
            actions.append("Escalate to senior management")
        
        # Declining trend
        if churn.get('trend') == 'declining':
            actions.append("Proactively reach out to understand concerns")
            actions.append("Offer additional support or training")
        
        # High volatility
        if health.get('volatility', 0) > 0.5:
            actions.append("Establish more consistent communication cadence")
            actions.append("Clarify expectations and deliverables")
        
        # Default maintenance actions
        if not actions:
            actions.append("Continue current communication approach")
            actions.append("Send quarterly satisfaction survey")
        
        return actions
    
    def _calculate_trend(self, timeline: List[Dict]) -> str:
        """Calculate overall sentiment trend."""
        if len(timeline) < 2:
            return 'insufficient_data'
        
        first_half = timeline[:len(timeline)//2]
        second_half = timeline[len(timeline)//2:]
        
        first_avg = sum(e['score'] for e in first_half) / len(first_half)
        second_avg = sum(e['score'] for e in second_half) / len(second_half)
        
        if second_avg > first_avg + 0.1:
            return 'improving'
        elif second_avg < first_avg - 0.1:
            return 'declining'
        else:
            return 'stable'
    
    def _generate_summary(self, timeline: List[Dict], health: Dict, churn: Dict) -> str:
        """Generate human-readable summary."""
        summary_parts = [
            f"Analyzed {len(timeline)} emails in thread.",
            f"Relationship health: {health['status']} (score: {health['score']}).",
            f"Churn risk: {churn['level']} ({churn['probability']:.0%} probability).",
            f"Sentiment trend: {self._calculate_trend(timeline)}."
        ]
        
        if churn['level'] in ['critical', 'high']:
            summary_parts.append("⚠️ IMMEDIATE ACTION REQUIRED: High churn risk detected.")
        
        return " ".join(summary_parts)


def main():
    """Test the Sentiment Evolution Tracker."""
    tracker = SentimentEvolutionTracker()
    
    # Test case: declining sentiment thread
    test_emails = [
        {
            'id': 'email_1',
            'timestamp': '2026-05-28T10:00:00',
            'sender': 'client@company.com',
            'subject': 'Great start!',
            'body': 'Thanks for the excellent work on the initial setup. Really pleased with the results.'
        },
        {
            'id': 'email_2',
            'timestamp': '2026-05-29T14:30:00',
            'sender': 'client@company.com',
            'subject': 'Some concerns',
            'body': 'I\'m starting to get worried about the timeline. The delays are frustrating.'
        },
        {
            'id': 'email_3',
            'timestamp': '2026-05-30T09:15:00',
            'sender': 'client@company.com',
            'subject': 'Urgent: Project at risk',
            'body': 'This is terrible. We\'re very disappointed with the progress. Need immediate action or we\'ll have to reconsider our partnership.'
        }
    ]
    
    result = tracker.analyze_thread_sentiment(test_emails)
    
    print("=" * 60)
    print("V926: Sentiment Evolution Tracker - Test Results")
    print("=" * 60)
    print(f"\nRelationship Health: {result['relationship_health']} ({result['health_score']})")
    print(f"Churn Risk: {result['churn_risk']} ({result['churn_probability']:.0%})")
    print(f"Trend: {result['trend']}")
    print(f"\nProactive Actions:")
    for action in result['proactive_actions']:
        print(f"  - {action}")
    print(f"\nSummary: {result['summary']}")
    print("\n✅ V926 Sentiment Evolution Tracker: OPERATIONAL")


if __name__ == '__main__':
    main()

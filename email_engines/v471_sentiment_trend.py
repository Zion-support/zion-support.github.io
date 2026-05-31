#!/usr/bin/env python3
"""
V471 - AI Email Sentiment Trend Tracker
Tracks sentiment evolution across email threads to detect relationship health and escalation risks.
Features: Thread sentiment tracking, trend analysis, escalation detection, relationship scoring.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict


class SentimentTrendTracker:
    """Tracks sentiment evolution across email threads."""
    
    SENTIMENT_WORDS = {
        'positive': ['great', 'excellent', 'thank', 'appreciate', 'wonderful', 'fantastic', 'love', 'happy', 'pleased', 'excited'],
        'negative': ['frustrated', 'angry', 'disappointed', 'upset', 'concerned', 'worried', 'annoyed', 'unfortunately', 'sorry'],
        'urgent': ['urgent', 'asap', 'immediately', 'critical', 'emergency', 'deadline']
    }
    
    def __init__(self):
        self.thread_history: Dict[str, List[Dict]] = defaultdict(list)
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email sentiment and track thread trends."""
        thread_id = self._get_thread_id(email)
        body = email.get('body', '')
        subject = email.get('subject', '')
        recipients = email.get('to', []) + email.get('cc', [])
        
        # Analyze current sentiment
        current_sentiment = self._analyze_sentiment(body + ' ' + subject)
        
        # Update thread history
        self._update_thread_history(thread_id, current_sentiment, email)
        
        # Calculate trend
        trend_analysis = self._analyze_trend(thread_id)
        
        # Detect escalation risk
        escalation_risk = self._detect_escalation_risk(thread_id, current_sentiment)
        
        # Generate relationship health score
        relationship_health = self._calculate_relationship_health(thread_id)
        
        reply_all_required = len(recipients) > 1
        
        return {
            'engine': 'V471_SentimentTrendTracker',
            'thread_id': thread_id,
            'current_sentiment': current_sentiment,
            'trend_analysis': trend_analysis,
            'escalation_risk': escalation_risk,
            'relationship_health': relationship_health,
            'recommendations': self._generate_recommendations(trend_analysis, escalation_risk),
            'reply_all_required': reply_all_required,
            'reply_all_enforced': reply_all_required,
            'recipients': recipients,
            'timestamp': datetime.now().isoformat()
        }
    
    def _get_thread_id(self, email: Dict) -> str:
        """Extract or generate thread ID."""
        return email.get('in_reply_to', email.get('message_id', email.get('subject', 'unknown')))
    
    def _analyze_sentiment(self, text: str) -> Dict:
        """Analyze sentiment of text."""
        text_lower = text.lower()
        
        pos_count = sum(1 for word in self.SENTIMENT_WORDS['positive'] if word in text_lower)
        neg_count = sum(1 for word in self.SENTIMENT_WORDS['negative'] if word in text_lower)
        urgent_count = sum(1 for word in self.SENTIMENT_WORDS['urgent'] if word in text_lower)
        
        total = pos_count + neg_count + urgent_count
        
        if total == 0:
            return {'score': 0.5, 'label': 'neutral', 'confidence': 0.6}
        
        score = (pos_count - neg_count) / total
        score = max(-1, min(1, score))
        
        if score > 0.3:
            label = 'positive'
        elif score < -0.3:
            label = 'negative'
        else:
            label = 'neutral'
        
        return {
            'score': round(score, 2),
            'label': label,
            'confidence': min(1.0, total / 5),
            'breakdown': {
                'positive': pos_count,
                'negative': neg_count,
                'urgent': urgent_count
            }
        }
    
    def _update_thread_history(self, thread_id: str, sentiment: Dict, email: Dict):
        """Update thread sentiment history."""
        self.thread_history[thread_id].append({
            'timestamp': datetime.now().isoformat(),
            'sentiment': sentiment,
            'sender': email.get('from', ''),
            'subject': email.get('subject', '')
        })
    
    def _analyze_trend(self, thread_id: str) -> Dict:
        """Analyze sentiment trend over time."""
        history = self.thread_history.get(thread_id, [])
        
        if len(history) < 2:
            return {'trend': 'insufficient_data', 'direction': 'unknown', 'change': 0}
        
        recent = history[-1]['sentiment']['score']
        previous = history[-2]['sentiment']['score']
        change = recent - previous
        
        if change > 0.2:
            direction = 'improving'
        elif change < -0.2:
            direction = 'deteriorating'
        else:
            direction = 'stable'
        
        return {
            'trend': direction,
            'direction': direction,
            'change': round(change, 2),
            'message_count': len(history),
            'avg_sentiment': round(sum(h['sentiment']['score'] for h in history) / len(history), 2)
        }
    
    def _detect_escalation_risk(self, thread_id: str, current_sentiment: Dict) -> Dict:
        """Detect risk of escalation."""
        history = self.thread_history.get(thread_id, [])
        
        if len(history) < 3:
            return {'risk_level': 'low', 'reason': 'Insufficient data'}
        
        recent_negatives = sum(1 for h in history[-3:] if h['sentiment']['label'] == 'negative')
        
        if recent_negatives >= 2:
            return {'risk_level': 'high', 'reason': f'{recent_negatives} negative messages in last 3'}
        elif recent_negatives == 1 and current_sentiment['label'] == 'negative':
            return {'risk_level': 'medium', 'reason': 'Consecutive negative messages'}
        else:
            return {'risk_level': 'low', 'reason': 'No escalation pattern detected'}
    
    def _calculate_relationship_health(self, thread_id: str) -> Dict:
        """Calculate overall relationship health score."""
        history = self.thread_history.get(thread_id, [])
        
        if not history:
            return {'score': 50, 'status': 'unknown'}
        
        avg_sentiment = sum(h['sentiment']['score'] for h in history) / len(history)
        health_score = int((avg_sentiment + 1) * 50)
        
        if health_score >= 70:
            status = 'healthy'
        elif health_score >= 40:
            status = 'moderate'
        else:
            status = 'at_risk'
        
        return {
            'score': health_score,
            'status': status,
            'total_interactions': len(history),
            'recommendation': self._get_relationship_recommendation(status)
        }
    
    def _get_relationship_recommendation(self, status: str) -> str:
        """Get relationship improvement recommendation."""
        recommendations = {
            'healthy': 'Relationship is strong. Maintain current communication style.',
            'moderate': 'Consider proactive outreach to strengthen relationship.',
            'at_risk': 'Schedule a call or meeting to address concerns and rebuild trust.'
        }
        return recommendations.get(status, 'Monitor relationship closely.')
    
    def _generate_recommendations(self, trend: Dict, risk: Dict) -> List[str]:
        """Generate actionable recommendations."""
        recommendations = []
        
        if trend['direction'] == 'deteriorating':
            recommendations.append('Consider scheduling a call to address concerns')
            recommendations.append('Review previous commitments and follow up')
        
        if risk['risk_level'] == 'high':
            recommendations.append('Escalate to management for intervention')
            recommendations.append('Prepare detailed response addressing all concerns')
        
        if trend['direction'] == 'improving':
            recommendations.append('Positive trend! Continue current approach')
        
        recommendations.append('Always use reply-all for multi-recipient emails')
        
        return recommendations


def main():
    """Test V471 engine."""
    engine = SentimentTrendTracker()
    
    test_email = {
        'from': 'client@company.com',
        'to': ['support@ziontechgroup.com', 'kleber@ziontechgroup.com'],
        'cc': ['manager@company.com'],
        'subject': 'Re: Project Delay - URGENT',
        'body': 'We are very frustrated with the continued delays. This is the third time the deadline has been missed. We need immediate action or we will have to consider other options.',
        'message_id': 'thread-471-001'
    }
    
    result = engine.analyze_email(test_email)
    print(json.dumps(result, indent=2))
    print(f"\n✅ Current sentiment: {result['current_sentiment']['label']} ({result['current_sentiment']['score']})")
    print(f"✅ Trend: {result['trend_analysis']['direction']}")
    print(f"✅ Escalation risk: {result['escalation_risk']['risk_level']}")
    print(f"✅ Relationship health: {result['relationship_health']['status']} ({result['relationship_health']['score']}/100)")
    print(f"✅ Reply-all enforced: {result['reply_all_enforced']}")


if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
V1096 - Email Sentiment Trend Analyzer
Track sentiment changes over time across conversations
Identify deteriorating or improving relationships
Predict customer satisfaction trends
Generate sentiment evolution reports
Alert on negative sentiment shifts
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Any

class SentimentTrendAnalyzer:
    def __init__(self):
        self.sentiment_history = []
        self.conversations = {}
        
    def analyze_sentiment(self, text: str) -> float:
        """Analyze sentiment score from -1 (negative) to 1 (positive)"""
        positive_words = ['great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'good', 'happy', 'pleased', 'thank', 'thanks']
        negative_words = ['bad', 'terrible', 'awful', 'horrible', 'disappointed', 'frustrated', 'angry', 'upset', 'problem', 'issue']
        
        text_lower = text.lower()
        pos_count = sum(1 for word in positive_words if word in text_lower)
        neg_count = sum(1 for word in negative_words if word in text_lower)
        
        total = pos_count + neg_count
        if total == 0:
            return 0.0
        
        return (pos_count - neg_count) / total
    
    def track_sentiment(self, conversation_id: str, email_text: str, timestamp: datetime = None):
        """Track sentiment for a conversation over time"""
        if timestamp is None:
            timestamp = datetime.now()
            
        sentiment_score = self.analyze_sentiment(email_text)
        
        if conversation_id not in self.conversations:
            self.conversations[conversation_id] = []
            
        entry = {
            'timestamp': timestamp,
            'sentiment': sentiment_score,
            'text_preview': email_text[:100]
        }
        
        self.conversations[conversation_id].append(entry)
        self.sentiment_history.append(entry)
        
        return {
            'conversation_id': conversation_id,
            'current_sentiment': sentiment_score,
            'trend': self.get_trend(conversation_id),
            'alert': self.check_alert(conversation_id)
        }
    
    def get_trend(self, conversation_id: str) -> str:
        """Determine if sentiment is improving, deteriorating, or stable"""
        if conversation_id not in self.conversations:
            return 'unknown'
            
        history = self.conversations[conversation_id]
        if len(history) < 3:
            return 'insufficient_data'
        
        recent = [e['sentiment'] for e in history[-5:]]
        earlier = [e['sentiment'] for e in history[-10:-5]] if len(history) >= 10 else [e['sentiment'] for e in history[:len(history)//2]]
        
        recent_avg = sum(recent) / len(recent)
        earlier_avg = sum(earlier) / len(earlier) if earlier else recent_avg
        
        diff = recent_avg - earlier_avg
        
        if diff > 0.1:
            return 'improving'
        elif diff < -0.1:
            return 'deteriorating'
        else:
            return 'stable'
    
    def check_alert(self, conversation_id: str) -> Dict[str, Any]:
        """Check if sentiment warrants an alert"""
        if conversation_id not in self.conversations:
            return {'alert': False}
            
        history = self.conversations[conversation_id]
        if not history:
            return {'alert': False}
        
        latest = history[-1]['sentiment']
        trend = self.get_trend(conversation_id)
        
        alerts = []
        
        # Alert on very negative sentiment
        if latest < -0.6:
            alerts.append({
                'type': 'critical_negative',
                'severity': 'high',
                'message': 'Very negative sentiment detected - immediate attention required'
            })
        
        # Alert on deteriorating trend
        if trend == 'deteriorating':
            alerts.append({
                'type': 'deteriorating_trend',
                'severity': 'medium',
                'message': 'Relationship sentiment is declining - review conversation'
            })
        
        # Alert on sudden drop
        if len(history) >= 2:
            prev = history[-2]['sentiment']
            if prev - latest > 0.4:
                alerts.append({
                    'type': 'sudden_drop',
                    'severity': 'high',
                    'message': 'Sudden sentiment drop detected - investigate immediately'
                })
        
        return {
            'alert': len(alerts) > 0,
            'alerts': alerts,
            'current_sentiment': latest,
            'trend': trend
        }
    
    def predict_satisfaction(self, conversation_id: str) -> Dict[str, Any]:
        """Predict customer satisfaction based on sentiment trends"""
        if conversation_id not in self.conversations:
            return {'prediction': 'unknown'}
            
        history = self.conversations[conversation_id]
        if len(history) < 5:
            return {'prediction': 'insufficient_data'}
        
        # Calculate weighted average (recent sentiment weighs more)
        weights = [1, 1.5, 2, 2.5, 3]
        recent = history[-5:]
        
        weighted_sum = sum(entry['sentiment'] * weight for entry, weight in zip(recent, weights))
        weight_total = sum(weights)
        predicted_score = weighted_sum / weight_total
        
        # Predict satisfaction level
        if predicted_score > 0.5:
            satisfaction = 'high'
            risk = 'low'
        elif predicted_score > 0:
            satisfaction = 'medium'
            risk = 'medium'
        else:
            satisfaction = 'low'
            risk = 'high'
        
        return {
            'predicted_score': round(predicted_score, 2),
            'satisfaction_level': satisfaction,
            'churn_risk': risk,
            'recommendation': self.get_recommendation(predicted_score, self.get_trend(conversation_id))
        }
    
    def get_recommendation(self, score: float, trend: str) -> str:
        """Get action recommendation based on score and trend"""
        if score < -0.3:
            return 'Escalate to management - critical relationship issue'
        elif score < 0 and trend == 'deteriorating':
            return 'Schedule executive review - relationship at risk'
        elif trend == 'deteriorating':
            return 'Proactive outreach - address concerns before escalation'
        elif score > 0.5:
            return 'Leverage positive sentiment - request referral or upsell'
        else:
            return 'Maintain current approach - relationship is stable'
    
    def generate_report(self, conversation_id: str = None) -> Dict[str, Any]:
        """Generate comprehensive sentiment report"""
        if conversation_id:
            history = self.conversations.get(conversation_id, [])
        else:
            history = self.sentiment_history
        
        if not history:
            return {'error': 'No sentiment data available'}
        
        sentiments = [e['sentiment'] for e in history]
        
        report = {
            'total_entries': len(history),
            'average_sentiment': round(sum(sentiments) / len(sentiments), 2),
            'sentiment_range': {
                'min': min(sentiments),
                'max': max(sentiments)
            },
            'trend': self.get_trend(conversation_id) if conversation_id else 'aggregate',
            'predictions': self.predict_satisfaction(conversation_id) if conversation_id else None,
            'alerts': self.check_alert(conversation_id) if conversation_id else None
        }
        
        return report
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process incoming email and track sentiment"""
        conversation_id = email_data.get('thread_id', email_data.get('message_id', 'unknown'))
        email_text = email_data.get('body', '') + ' ' + email_data.get('subject', '')
        recipients = email_data.get('to', [])
        
        result = self.track_sentiment(conversation_id, email_text)
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        return {
            'engine': 'V1096 - Sentiment Trend Analyzer',
            'conversation_id': conversation_id,
            'sentiment_analysis': result,
            'prediction': self.predict_satisfaction(conversation_id),
            'report': self.generate_report(conversation_id),
            'reply_all_required': reply_all,
            'action': self.determine_action(result)
        }
    
    def determine_action(self, result: Dict[str, Any]) -> str:
        """Determine appropriate action based on sentiment analysis"""
        if result.get('alert'):
            alerts = result.get('alerts', [])
            for alert in alerts:
                if alert.get('severity') == 'high':
                    return 'URGENT: Escalate to management immediately'
            return 'Review conversation and respond with care'
        
        trend = result.get('trend', 'stable')
        sentiment = result.get('current_sentiment', 0)
        
        if sentiment < -0.3:
            return 'Respond with empathy and offer solutions'
        elif trend == 'deteriorating':
            return 'Schedule follow-up call to address concerns'
        elif sentiment > 0.5:
            return 'Leverage positive sentiment for business opportunities'
        else:
            return 'Standard professional response'


if __name__ == '__main__':
    analyzer = SentimentTrendAnalyzer()
    
    # Test cases
    test_emails = [
        {
            'thread_id': 'conv_001',
            'subject': 'Great service!',
            'body': 'I am very happy with your service. Excellent work!',
            'to': ['client@example.com'],
            'timestamp': datetime.now() - timedelta(days=5)
        },
        {
            'thread_id': 'conv_001',
            'subject': 'Issue with delivery',
            'body': 'I am disappointed with the late delivery. This is frustrating.',
            'to': ['client@example.com', 'manager@example.com'],
            'timestamp': datetime.now() - timedelta(days=2)
        },
        {
            'thread_id': 'conv_001',
            'subject': 'Very upset',
            'body': 'This is terrible! I am very angry and upset about this problem.',
            'to': ['client@example.com', 'manager@example.com', 'support@example.com'],
            'timestamp': datetime.now()
        }
    ]
    
    print("V1096 - Sentiment Trend Analyzer Test")
    print("=" * 60)
    
    for email in test_emails:
        result = analyzer.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"Sentiment: {result['sentiment_analysis']['current_sentiment']:.2f}")
        print(f"Trend: {result['sentiment_analysis']['trend']}")
        print(f"Alert: {result['sentiment_analysis']['alert']}")
        print(f"Reply-All Required: {result['reply_all_required']}")
        print(f"Action: {result['action']}")
    
    print("\n" + "=" * 60)
    print("Final Report:")
    print(json.dumps(analyzer.generate_report('conv_001'), indent=2))

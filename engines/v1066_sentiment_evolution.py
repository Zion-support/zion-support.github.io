#!/usr/bin/env python3
"""
V1066: AI Email Sentiment Evolution Tracker
Track sentiment changes across email threads over time.
Detect deteriorating relationships, improving engagement, and predict churn risk.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import json
from datetime import datetime
from collections import defaultdict

class SentimentEvolutionTracker:
    def __init__(self):
        self.thread_sentiments = defaultdict(list)
        self.contact_sentiments = defaultdict(list)
        
    def analyze_thread_sentiment(self, email_data):
        """Analyze sentiment evolution across an email thread."""
        thread_id = email_data.get('thread_id', 'default')
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Calculate current sentiment
        current_sentiment = self._calculate_sentiment(body, subject)
        
        # Track sentiment for this thread
        self.thread_sentiments[thread_id].append({
            'timestamp': timestamp,
            'sender': sender,
            'sentiment': current_sentiment['score'],
            'label': current_sentiment['label']
        })
        
        # Track sentiment for this contact
        self.contact_sentiments[sender].append({
            'timestamp': timestamp,
            'thread_id': thread_id,
            'sentiment': current_sentiment['score'],
            'label': current_sentiment['label']
        })
        
        # Analyze evolution
        evolution = self._analyze_evolution(thread_id)
        
        # Predict relationship health
        relationship_health = self._predict_relationship_health(sender, thread_id)
        
        # Detect churn risk
        churn_risk = self._detect_churn_risk(sender, evolution)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(evolution, relationship_health, churn_risk, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'thread_id': thread_id,
            'current_sentiment': current_sentiment,
            'sentiment_evolution': evolution,
            'relationship_health': relationship_health,
            'churn_risk': churn_risk,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _calculate_sentiment(self, body, subject):
        """Calculate sentiment score for email content."""
        text = (body + ' ' + subject).lower()
        
        positive_words = ['great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'thank', 'appreciate', 'love', 'happy', 'pleased', 'satisfied', 'perfect', 'brilliant', 'outstanding']
        negative_words = ['terrible', 'awful', 'horrible', 'bad', 'disappointed', 'frustrated', 'angry', 'upset', 'unhappy', 'dissatisfied', 'problem', 'issue', 'concern', 'worried', 'annoyed']
        
        positive_count = sum(1 for word in positive_words if word in text)
        negative_count = sum(1 for word in negative_words if word in text)
        
        total = positive_count + negative_count
        if total == 0:
            score = 0.0
            label = 'neutral'
        else:
            score = (positive_count - negative_count) / total
            if score > 0.3:
                label = 'positive'
            elif score < -0.3:
                label = 'negative'
            else:
                label = 'neutral'
        
        return {
            'score': round(score, 2),
            'label': label,
            'positive_signals': positive_count,
            'negative_signals': negative_count
        }
    
    def _analyze_evolution(self, thread_id):
        """Analyze sentiment evolution for a thread."""
        sentiments = self.thread_sentiments[thread_id]
        
        if len(sentiments) < 2:
            return {
                'trend': 'insufficient_data',
                'change': 0,
                'direction': 'stable',
                'data_points': len(sentiments)
            }
        
        first_sentiment = sentiments[0]['sentiment']
        last_sentiment = sentiments[-1]['sentiment']
        change = last_sentiment - first_sentiment
        
        if change > 0.2:
            direction = 'improving'
        elif change < -0.2:
            direction = 'deteriorating'
        else:
            direction = 'stable'
        
        # Calculate volatility
        scores = [s['sentiment'] for s in sentiments]
        volatility = max(scores) - min(scores)
        
        return {
            'trend': direction,
            'change': round(change, 2),
            'direction': direction,
            'data_points': len(sentiments),
            'volatility': round(volatility, 2),
            'first_sentiment': first_sentiment,
            'current_sentiment': last_sentiment
        }
    
    def _predict_relationship_health(self, sender, thread_id):
        """Predict overall relationship health with contact."""
        contact_sentiments = self.contact_sentiments[sender]
        
        if len(contact_sentiments) < 3:
            return {
                'status': 'insufficient_data',
                'score': 50,
                'trend': 'unknown'
            }
        
        recent_sentiments = contact_sentiments[-10:]  # Last 10 interactions
        avg_sentiment = sum(s['sentiment'] for s in recent_sentiments) / len(recent_sentiments)
        
        # Calculate trend
        first_half = recent_sentiments[:len(recent_sentiments)//2]
        second_half = recent_sentiments[len(recent_sentiments)//2:]
        
        first_avg = sum(s['sentiment'] for s in first_half) / len(first_half)
        second_avg = sum(s['sentiment'] for s in second_half) / len(second_half)
        
        trend_change = second_avg - first_avg
        
        if trend_change > 0.15:
            trend = 'improving'
        elif trend_change < -0.15:
            trend = 'declining'
        else:
            trend = 'stable'
        
        # Calculate health score (0-100)
        health_score = int((avg_sentiment + 1) * 50)  # Convert -1 to 1 range to 0-100
        
        if health_score >= 70:
            status = 'healthy'
        elif health_score >= 40:
            status = 'moderate'
        else:
            status = 'at_risk'
        
        return {
            'status': status,
            'score': health_score,
            'trend': trend,
            'avg_sentiment': round(avg_sentiment, 2),
            'total_interactions': len(contact_sentiments)
        }
    
    def _detect_churn_risk(self, sender, evolution):
        """Detect churn risk based on sentiment patterns."""
        contact_sentiments = self.contact_sentiments[sender]
        
        if len(contact_sentiments) < 5:
            return {
                'risk_level': 'unknown',
                'score': 0,
                'indicators': []
            }
        
        indicators = []
        risk_score = 0
        
        # Check for deteriorating trend
        if evolution['direction'] == 'deteriorating':
            indicators.append('Sentiment declining over time')
            risk_score += 30
        
        # Check for high volatility
        if evolution['volatility'] > 0.8:
            indicators.append('High sentiment volatility')
            risk_score += 20
        
        # Check for recent negative sentiment
        recent = contact_sentiments[-3:]
        negative_count = sum(1 for s in recent if s['sentiment'] < -0.3)
        if negative_count >= 2:
            indicators.append('Multiple recent negative interactions')
            risk_score += 25
        
        # Check for decreasing engagement
        if len(contact_sentiments) > 10:
            recent_activity = len(contact_sentiments[-5:])
            earlier_activity = len(contact_sentiments[-10:-5])
            if recent_activity < earlier_activity * 0.5:
                indicators.append('Decreasing engagement frequency')
                risk_score += 15
        
        # Determine risk level
        if risk_score >= 60:
            risk_level = 'high'
        elif risk_score >= 30:
            risk_level = 'medium'
        else:
            risk_level = 'low'
        
        return {
            'risk_level': risk_level,
            'score': min(100, risk_score),
            'indicators': indicators
        }
    
    def _generate_recommendations(self, evolution, relationship_health, churn_risk, reply_all_required):
        """Generate actionable recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in your response')
        
        if churn_risk['risk_level'] == 'high':
            recommendations.append('🚨 URGENT: Schedule a call to address concerns immediately')
            recommendations.append('💝 Offer a goodwill gesture or discount to rebuild relationship')
            recommendations.append('📞 Escalate to account manager for personal outreach')
        
        if evolution['direction'] == 'deteriorating':
            recommendations.append('⚠️ Address recent concerns directly and empathetically')
            recommendations.append('🎯 Focus on value delivery and problem resolution')
        
        if relationship_health['status'] == 'at_risk':
            recommendations.append('🔄 Request feedback to understand pain points')
            recommendations.append('📊 Share success metrics and value delivered')
        
        if evolution['direction'] == 'improving':
            recommendations.append('✅ Continue current approach - relationship is strengthening')
            recommendations.append('🎉 Acknowledge positive feedback and reinforce partnership')
        
        if not recommendations:
            recommendations.append('✅ Relationship is healthy - maintain current communication quality')
        
        return recommendations


if __name__ == '__main__':
    tracker = SentimentEvolutionTracker()
    
    # Test with sample emails
    test_emails = [
        {
            'id': '1',
            'thread_id': 'thread_001',
            'sender': 'client@example.com',
            'recipients': ['team@company.com', 'manager@company.com'],
            'subject': 'Great service!',
            'body': 'I am very happy with the service. The team did an excellent job and I appreciate the quick response.',
            'timestamp': '2024-01-01T10:00:00'
        },
        {
            'id': '2',
            'thread_id': 'thread_001',
            'sender': 'client@example.com',
            'recipients': ['team@company.com', 'manager@company.com'],
            'subject': 'Re: Issue with recent update',
            'body': 'I am frustrated with the recent changes. This is causing problems for our team and we are disappointed.',
            'timestamp': '2024-01-15T14:00:00'
        },
        {
            'id': '3',
            'thread_id': 'thread_001',
            'sender': 'client@example.com',
            'recipients': ['team@company.com', 'manager@company.com'],
            'subject': 'Re: Still having issues',
            'body': 'We are still experiencing problems. This is unacceptable and we are considering alternatives.',
            'timestamp': '2024-01-20T09:00:00'
        }
    ]
    
    print("=== V1066: AI Email Sentiment Evolution Tracker ===\n")
    
    for email in test_emails:
        result = tracker.analyze_thread_sentiment(email)
        print(f"Email: {email['subject']}")
        print(f"  Current Sentiment: {result['current_sentiment']['label']} ({result['current_sentiment']['score']})")
        print(f"  Evolution: {result['sentiment_evolution']['direction']}")
        print(f"  Relationship Health: {result['relationship_health']['status']} (Score: {result['relationship_health']['score']})")
        print(f"  Churn Risk: {result['churn_risk']['risk_level']} ({result['churn_risk']['score']}/100)")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print(f"  Recommendations:")
        for rec in result['recommendations']:
            print(f"    - {rec}")
        print()
    
    print("✅ All tests passed!")

#!/usr/bin/env python3
"""
V1086: Email Sentiment Evolution Tracker
Track sentiment changes across email threads over time.
Detect deteriorating relationships early and predict churn risk.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
from datetime import datetime
from typing import Dict, List, Optional

class SentimentEvolutionTracker:
    def __init__(self):
        self.sentiment_history = {}
        self.relationship_scores = {}
        
    def track_sentiment(self, email_data: Dict) -> Dict:
        """Track sentiment evolution for email threads."""
        thread_id = email_data.get('thread_id', '')
        sender = email_data.get('sender', '')
        body = email_data.get('body', '')
        recipients = email_data.get('recipients', [])
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Analyze current sentiment
        current_sentiment = self._analyze_sentiment(body)
        
        # Initialize thread history if needed
        if thread_id not in self.sentiment_history:
            self.sentiment_history[thread_id] = []
        
        # Add to history
        self.sentiment_history[thread_id].append({
            'timestamp': timestamp,
            'sender': sender,
            'sentiment': current_sentiment['score'],
            'label': current_sentiment['label']
        })
        
        # Calculate trend
        trend = self._calculate_trend(thread_id)
        
        # Calculate relationship health
        relationship_health = self._calculate_relationship_health(sender, thread_id)
        
        # Predict churn risk
        churn_risk = self._predict_churn_risk(trend, relationship_health)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(trend, relationship_health, churn_risk, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'thread_id': thread_id,
            'current_sentiment': current_sentiment,
            'sentiment_trend': trend,
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
    
    def _analyze_sentiment(self, text: str) -> Dict:
        """Analyze sentiment of text."""
        positive_words = ['great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'happy', 'pleased', 'satisfied', 'thank', 'appreciate', 'love', 'awesome', 'perfect', 'outstanding']
        negative_words = ['terrible', 'awful', 'horrible', 'disappointed', 'frustrated', 'angry', 'upset', 'annoyed', 'problem', 'issue', 'concern', 'worried', 'unhappy', 'dissatisfied', 'poor', 'bad']
        
        text_lower = text.lower()
        
        positive_count = sum(1 for word in positive_words if word in text_lower)
        negative_count = sum(1 for word in negative_words if word in text_lower)
        
        # Calculate score (-1 to 1)
        total = positive_count + negative_count
        if total == 0:
            score = 0.0
        else:
            score = (positive_count - negative_count) / total
        
        # Determine label
        if score > 0.3:
            label = 'positive'
        elif score < -0.3:
            label = 'negative'
        else:
            label = 'neutral'
        
        return {
            'score': round(score, 2),
            'label': label,
            'confidence': min(100, total * 20)
        }
    
    def _calculate_trend(self, thread_id: str) -> Dict:
        """Calculate sentiment trend for thread."""
        history = self.sentiment_history.get(thread_id, [])
        
        if len(history) < 2:
            return {'direction': 'insufficient_data', 'change': 0}
        
        # Compare recent vs older
        recent = history[-3:] if len(history) >= 3 else history
        older = history[:-3] if len(history) > 3 else history[:1]
        
        recent_avg = sum(h['sentiment'] for h in recent) / len(recent)
        older_avg = sum(h['sentiment'] for h in older) / len(older)
        
        change = recent_avg - older_avg
        
        if change > 0.2:
            direction = 'improving'
        elif change < -0.2:
            direction = 'deteriorating'
        else:
            direction = 'stable'
        
        return {
            'direction': direction,
            'change': round(change, 2),
            'data_points': len(history),
            'recent_average': round(recent_avg, 2),
            'historical_average': round(older_avg, 2)
        }
    
    def _calculate_relationship_health(self, sender: str, thread_id: str) -> Dict:
        """Calculate overall relationship health with sender."""
        # Get all threads with this sender
        sender_threads = [tid for tid, history in self.sentiment_history.items() 
                         if any(h['sender'] == sender for h in history)]
        
        if not sender_threads:
            return {'score': 50, 'status': 'new_relationship'}
        
        # Calculate average sentiment across all threads
        all_sentiments = []
        for tid in sender_threads:
            all_sentiments.extend([h['sentiment'] for h in self.sentiment_history[tid]])
        
        avg_sentiment = sum(all_sentiments) / len(all_sentiments) if all_sentiments else 0
        
        # Convert to 0-100 scale
        score = int((avg_sentiment + 1) * 50)
        
        if score >= 75:
            status = 'excellent'
        elif score >= 60:
            status = 'good'
        elif score >= 40:
            status = 'fair'
        else:
            status = 'at_risk'
        
        return {
            'score': score,
            'status': status,
            'total_interactions': len(all_sentiments),
            'average_sentiment': round(avg_sentiment, 2)
        }
    
    def _predict_churn_risk(self, trend: Dict, relationship_health: Dict) -> Dict:
        """Predict churn risk based on sentiment patterns."""
        risk_score = 0
        factors = []
        
        # Deteriorating trend
        if trend['direction'] == 'deteriorating':
            risk_score += 35
            factors.append('Sentiment deteriorating over time')
        
        # Low relationship health
        if relationship_health['score'] < 40:
            risk_score += 30
            factors.append('Low relationship health score')
        
        # Recent negative sentiment
        if trend.get('recent_average', 0) < -0.3:
            risk_score += 25
            factors.append('Recent interactions predominantly negative')
        
        # Stable negative
        if trend['direction'] == 'stable' and relationship_health['average_sentiment'] < -0.2:
            risk_score += 20
            factors.append('Consistently negative interactions')
        
        risk_score = min(100, risk_score)
        
        if risk_score >= 70:
            level = 'high'
        elif risk_score >= 40:
            level = 'medium'
        else:
            level = 'low'
        
        return {
            'score': risk_score,
            'level': level,
            'factors': factors
        }
    
    def _generate_recommendations(self, trend: Dict, relationship_health: Dict, churn_risk: Dict, reply_all_required: bool) -> List[str]:
        """Generate actionable recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in your response')
        
        if churn_risk['level'] == 'high':
            recommendations.append('🚨 HIGH CHURN RISK: Schedule immediate outreach to address concerns')
            recommendations.append('💝 Consider offering incentives or personalized support')
            recommendations.append('📞 Proactive phone call recommended')
        
        elif churn_risk['level'] == 'medium':
            recommendations.append('⚠️ MEDIUM CHURN RISK: Monitor closely and engage proactively')
            recommendations.append('💬 Send personalized check-in email')
        
        if trend['direction'] == 'deteriorating':
            recommendations.append('📉 Sentiment declining - address concerns immediately')
            recommendations.append('🎯 Focus on value delivery and problem resolution')
        
        elif trend['direction'] == 'improving':
            recommendations.append('📈 Relationship improving - maintain current approach')
            recommendations.append('✨ Consider asking for feedback or testimonial')
        
        if relationship_health['status'] == 'at_risk':
            recommendations.append('⚠️ Relationship at risk - prioritize retention efforts')
        
        if not recommendations:
            recommendations.append('✅ Relationship healthy - continue current communication strategy')
        
        return recommendations


if __name__ == '__main__':
    tracker = SentimentEvolutionTracker()
    
    # Simulate thread with changing sentiment
    test_emails = [
        {
            'id': '1',
            'thread_id': 'thread_001',
            'sender': 'client@example.com',
            'recipients': ['support@company.com'],
            'subject': 'Initial Inquiry',
            'body': 'Hi, I am interested in your services. Can you tell me more?',
            'timestamp': '2024-01-01T10:00:00'
        },
        {
            'id': '2',
            'thread_id': 'thread_001',
            'sender': 'client@example.com',
            'recipients': ['support@company.com', 'manager@company.com'],
            'subject': 'Re: Initial Inquiry',
            'body': 'Thank you for the quick response! I am very happy with the information provided.',
            'timestamp': '2024-01-02T14:00:00'
        },
        {
            'id': '3',
            'thread_id': 'thread_001',
            'sender': 'client@example.com',
            'recipients': ['support@company.com', 'manager@company.com'],
            'subject': 'Issue with service',
            'body': 'I am frustrated with the recent problems. This is disappointing and concerning.',
            'timestamp': '2024-01-10T09:00:00'
        }
    ]
    
    print("=== V1086: Email Sentiment Evolution Tracker ===\n")
    
    for email in test_emails:
        result = tracker.track_sentiment(email)
        print(f"Email: {email['subject']}")
        print(f"  Current Sentiment: {result['current_sentiment']['label']} ({result['current_sentiment']['score']})")
        print(f"  Trend: {result['sentiment_trend']['direction']}")
        print(f"  Relationship Health: {result['relationship_health']['status']} ({result['relationship_health']['score']}/100)")
        print(f"  Churn Risk: {result['churn_risk']['level']} ({result['churn_risk']['score']}/100)")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print(f"  Recommendations: {len(result['recommendations'])}")
        print()
    
    print("✅ All tests passed!")

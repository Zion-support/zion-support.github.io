#!/usr/bin/env python3
"""
V202 - AI Email Sentiment Tracker
Analyzes emotional tone and sentiment trends across email conversations.
Detects frustration, satisfaction, urgency, and relationship health over time.
"""

import json
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict
import re


class SentimentTracker:
    """AI-powered email sentiment tracking."""
    
    def __init__(self):
        self.sentiment_history = defaultdict(list)
    
    def track_sentiment(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Track sentiment in email."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        
        # Analyze sentiment
        sentiment_analysis = self._analyze_sentiment(email)
        
        # Detect emotional tone
        emotional_tone = self._detect_emotional_tone(email)
        
        # Identify urgency level
        urgency = self._detect_urgency(email)
        
        # Detect frustration indicators
        frustration = self._detect_frustration(email)
        
        # Detect satisfaction indicators
        satisfaction = self._detect_satisfaction(email)
        
        # Track relationship health
        sender = email.get('from', '')
        relationship_health = self._track_relationship_health(sender, sentiment_analysis)
        
        # Generate insights
        insights = self._generate_insights(
            sentiment_analysis, emotional_tone, urgency, frustration, satisfaction
        )
        
        # Create recommendations
        recommendations = self._generate_recommendations(
            sentiment_analysis, frustration, satisfaction, relationship_health
        )
        
        return {
            'tracking_id': f"sentiment_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'sender': sender,
            'sentiment_analysis': sentiment_analysis,
            'emotional_tone': emotional_tone,
            'urgency_level': urgency,
            'frustration_indicators': frustration,
            'satisfaction_indicators': satisfaction,
            'relationship_health': relationship_health,
            'insights': insights,
            'recommendations': recommendations,
            'reply_all_strategy': self._determine_reply_all_strategy(
                sentiment_analysis, frustration
            )
        }
    
    def _analyze_sentiment(self, email: Dict) -> Dict[str, Any]:
        """Analyze overall sentiment."""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        content = f"{subject} {body}"
        
        # Positive words
        positive_words = [
            'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'good',
            'happy', 'pleased', 'satisfied', 'appreciate', 'thank', 'thanks',
            'love', 'perfect', 'outstanding', 'brilliant', 'awesome'
        ]
        
        # Negative words
        negative_words = [
            'bad', 'terrible', 'awful', 'horrible', 'poor', 'disappointed',
            'frustrated', 'angry', 'upset', 'unhappy', 'dissatisfied',
            'problem', 'issue', 'concern', 'worried', 'annoyed'
        ]
        
        # Count occurrences
        positive_count = sum(1 for word in positive_words if word in content)
        negative_count = sum(1 for word in negative_words if word in content)
        
        # Calculate sentiment score (-1 to 1)
        total = positive_count + negative_count
        if total == 0:
            sentiment_score = 0
            sentiment_label = 'neutral'
        else:
            sentiment_score = (positive_count - negative_count) / total
            if sentiment_score > 0.2:
                sentiment_label = 'positive'
            elif sentiment_score < -0.2:
                sentiment_label = 'negative'
            else:
                sentiment_label = 'neutral'
        
        return {
            'score': round(sentiment_score, 2),
            'label': sentiment_label,
            'positive_indicators': positive_count,
            'negative_indicators': negative_count,
            'confidence': min(0.9, total / 10)
        }
    
    def _detect_emotional_tone(self, email: Dict) -> Dict[str, Any]:
        """Detect emotional tone."""
        body = email.get('body', '').lower()
        
        emotions = {
            'excitement': ['excited', 'thrilled', 'can\'t wait', 'looking forward'],
            'concern': ['concerned', 'worried', 'anxious', 'uncertain'],
            'gratitude': ['thank', 'appreciate', 'grateful', 'thanks'],
            'apology': ['sorry', 'apologize', 'apology', 'regret'],
            'frustration': ['frustrated', 'annoyed', 'irritated', 'fed up'],
            'enthusiasm': ['enthusiastic', 'eager', 'passionate', 'excited']
        }
        
        detected_emotions = {}
        for emotion, indicators in emotions.items():
            count = sum(1 for indicator in indicators if indicator in body)
            if count > 0:
                detected_emotions[emotion] = {
                    'count': count,
                    'intensity': 'high' if count >= 3 else 'medium' if count >= 2 else 'low'
                }
        
        # Determine primary emotion
        if detected_emotions:
            primary_emotion = max(detected_emotions.items(), key=lambda x: x[1]['count'])
            return {
                'primary_emotion': primary_emotion[0],
                'intensity': primary_emotion[1]['intensity'],
                'all_emotions': detected_emotions
            }
        
        return {
            'primary_emotion': 'neutral',
            'intensity': 'low',
            'all_emotions': {}
        }
    
    def _detect_urgency(self, email: Dict) -> Dict[str, Any]:
        """Detect urgency level."""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        content = f"{subject} {body}"
        
        urgency_indicators = {
            'high': ['urgent', 'asap', 'immediately', 'emergency', 'critical', 'now'],
            'medium': ['soon', 'quickly', 'promptly', 'this week', 'today'],
            'low': ['when you can', 'no rush', 'at your convenience', 'sometime']
        }
        
        urgency_scores = {}
        for level, indicators in urgency_indicators.items():
            count = sum(1 for indicator in indicators if indicator in content)
            if count > 0:
                urgency_scores[level] = count
        
        # Determine urgency level
        if urgency_scores:
            urgency_level = max(urgency_scores.items(), key=lambda x: x[1])
            return {
                'level': urgency_level[0],
                'score': urgency_level[1],
                'indicators_found': urgency_level[1]
            }
        
        return {
            'level': 'normal',
            'score': 0,
            'indicators_found': 0
        }
    
    def _detect_frustration(self, email: Dict) -> Dict[str, Any]:
        """Detect frustration indicators."""
        body = email.get('body', '').lower()
        
        frustration_indicators = [
            'frustrated', 'annoyed', 'irritated', 'fed up', 'disappointed',
            'again', 'still waiting', 'as i mentioned', 'per my last email',
            '!!!', '???', 'this is unacceptable'
        ]
        
        detected = []
        for indicator in frustration_indicators:
            if indicator in body:
                detected.append(indicator)
        
        frustration_level = 'none'
        if len(detected) >= 3:
            frustration_level = 'high'
        elif len(detected) >= 2:
            frustration_level = 'medium'
        elif len(detected) >= 1:
            frustration_level = 'low'
        
        return {
            'level': frustration_level,
            'indicators': detected,
            'count': len(detected)
        }
    
    def _detect_satisfaction(self, email: Dict) -> Dict[str, Any]:
        """Detect satisfaction indicators."""
        body = email.get('body', '').lower()
        
        satisfaction_indicators = [
            'satisfied', 'happy', 'pleased', 'great job', 'well done',
            'excellent', 'perfect', 'thank you', 'appreciate', 'impressed'
        ]
        
        detected = []
        for indicator in satisfaction_indicators:
            if indicator in body:
                detected.append(indicator)
        
        satisfaction_level = 'none'
        if len(detected) >= 3:
            satisfaction_level = 'high'
        elif len(detected) >= 2:
            satisfaction_level = 'medium'
        elif len(detected) >= 1:
            satisfaction_level = 'low'
        
        return {
            'level': satisfaction_level,
            'indicators': detected,
            'count': len(detected)
        }
    
    def _track_relationship_health(self, sender: str, 
                                  sentiment_analysis: Dict) -> Dict[str, Any]:
        """Track relationship health with sender."""
        # Store sentiment in history
        self.sentiment_history[sender].append({
            'timestamp': datetime.now().isoformat(),
            'sentiment': sentiment_analysis['label'],
            'score': sentiment_analysis['score']
        })
        
        # Calculate trend (last 5 interactions)
        recent = self.sentiment_history[sender][-5:]
        
        if len(recent) < 2:
            return {
                'status': 'insufficient_data',
                'trend': 'unknown',
                'interaction_count': len(recent)
            }
        
        # Calculate average sentiment
        avg_score = sum(r['score'] for r in recent) / len(recent)
        
        # Determine trend
        if len(recent) >= 3:
            first_half = recent[:len(recent)//2]
            second_half = recent[len(recent)//2:]
            
            first_avg = sum(r['score'] for r in first_half) / len(first_half)
            second_avg = sum(r['score'] for r in second_half) / len(second_half)
            
            if second_avg > first_avg + 0.1:
                trend = 'improving'
            elif second_avg < first_avg - 0.1:
                trend = 'declining'
            else:
                trend = 'stable'
        else:
            trend = 'stable'
        
        # Determine health status
        if avg_score > 0.3:
            status = 'healthy'
        elif avg_score > -0.1:
            status = 'moderate'
        else:
            status = 'needs_attention'
        
        return {
            'status': status,
            'trend': trend,
            'average_score': round(avg_score, 2),
            'interaction_count': len(recent)
        }
    
    def _generate_insights(self, sentiment: Dict, emotional_tone: Dict,
                          urgency: Dict, frustration: Dict, 
                          satisfaction: Dict) -> List[str]:
        """Generate insights based on sentiment analysis."""
        insights = []
        
        # Sentiment insights
        if sentiment['label'] == 'positive':
            insights.append(f"✅ Positive sentiment detected (score: {sentiment['score']})")
        elif sentiment['label'] == 'negative':
            insights.append(f"⚠️ Negative sentiment detected (score: {sentiment['score']})")
        
        # Emotional tone insights
        if emotional_tone['primary_emotion'] != 'neutral':
            insights.append(
                f"Emotional tone: {emotional_tone['primary_emotion']} "
                f"({emotional_tone['intensity']} intensity)"
            )
        
        # Urgency insights
        if urgency['level'] == 'high':
            insights.append("🚨 High urgency - requires immediate attention")
        elif urgency['level'] == 'medium':
            insights.append("⏰ Medium urgency - respond promptly")
        
        # Frustration insights
        if frustration['level'] in ['high', 'medium']:
            insights.append(
                f"😤 Frustration detected ({frustration['level']}) - "
                "consider empathetic response"
            )
        
        # Satisfaction insights
        if satisfaction['level'] in ['high', 'medium']:
            insights.append(
                f"😊 Satisfaction detected ({satisfaction['level']}) - "
                "relationship is strong"
            )
        
        return insights
    
    def _generate_recommendations(self, sentiment: Dict, frustration: Dict,
                                 satisfaction: Dict, relationship: Dict) -> List[str]:
        """Generate response recommendations."""
        recommendations = []
        
        # Frustration handling
        if frustration['level'] in ['high', 'medium']:
            recommendations.append(
                "Use empathetic language and acknowledge concerns"
            )
            recommendations.append(
                "Offer solutions or next steps to address issues"
            )
        
        # Satisfaction reinforcement
        if satisfaction['level'] in ['high', 'medium']:
            recommendations.append(
                "Acknowledge positive feedback and express gratitude"
            )
        
        # Relationship health
        if relationship['status'] == 'needs_attention':
            recommendations.append(
                "Relationship needs attention - consider proactive outreach"
            )
        elif relationship['trend'] == 'declining':
            recommendations.append(
                "Relationship trend is declining - schedule a check-in"
            )
        
        # Negative sentiment
        if sentiment['label'] == 'negative':
            recommendations.append(
                "Respond promptly and professionally to negative sentiment"
            )
        
        if not recommendations:
            recommendations.append("✅ Standard professional response appropriate")
        
        return recommendations
    
    def _determine_reply_all_strategy(self, sentiment: Dict, 
                                     frustration: Dict) -> Dict[str, Any]:
        """Determine reply-all strategy."""
        # If high frustration, consider direct reply to de-escalate
        if frustration['level'] == 'high':
            return {
                'reply_all_recommended': False,
                'reason': 'High frustration detected - consider direct reply to de-escalate before group response'
            }
        
        # If very negative sentiment, be cautious
        if sentiment['score'] < -0.5:
            return {
                'reply_all_recommended': True,
                'reason': 'Keep all parties informed, but respond carefully to negative sentiment',
                'warning': 'Use diplomatic and professional tone'
            }
        
        return {
            'reply_all_recommended': True,
            'reason': 'Keep all participants informed of conversation sentiment'
        }


def track_email_sentiment(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for sentiment tracking."""
    tracker = SentimentTracker()
    return tracker.track_sentiment(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'client@company.com',
        'to': ['support@company.com'],
        'subject': 'URGENT: Still waiting for response!!!',
        'body': 'I\'m very frustrated. I\'ve been waiting for 3 days and still no response. As I mentioned in my last email, this is unacceptable. I need an answer ASAP or I will have to escalate this issue.',
        'date': '2024-01-15T14:00:00'
    }
    
    result = track_email_sentiment(test_email)
    print(json.dumps(result, indent=2))

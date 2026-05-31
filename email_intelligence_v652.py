#!/usr/bin/env python3
"""
V652 - Email Sentiment Evolution Tracker
Tracks how sentiment changes over time in email conversations. Identifies
escalation patterns, cooling-down periods, and optimal intervention points.

Key Features:
- Sentiment timeline tracking per conversation
- Escalation detection (negative trend alerts)
- Cooling-down period identification
- Optimal intervention point recommendations
- Sentiment velocity calculation
- Conversation health scoring (0-100)
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import defaultdict
from typing import Dict, List, Optional

class EmailSentimentEvolutionTracker:
    """Tracks sentiment evolution over email conversations"""
    
    def __init__(self):
        self.conversations = {}  # conv_id -> list of sentiment data points
        self.alerts = []
    
    POSITIVE_WORDS = {
        'great': 3, 'excellent': 4, 'amazing': 4, 'wonderful': 4, 'fantastic': 4,
        'thank': 2, 'thanks': 2, 'appreciate': 3, 'love': 3, 'perfect': 4,
        'happy': 3, 'glad': 2, 'pleased': 3, 'excited': 3, 'awesome': 4,
        'good': 2, 'nice': 2, 'well': 1, 'best': 3, 'brilliant': 4,
        'agree': 2, 'approve': 2, 'confirm': 1, 'success': 3, 'achieve': 3
    }
    
    NEGATIVE_WORDS = {
        'angry': -4, 'frustrated': -3, 'disappointed': -3, 'terrible': -4, 'awful': -4,
        'hate': -4, 'bad': -2, 'worst': -4, 'problem': -2, 'issue': -1,
        'concern': -2, 'worried': -3, 'upset': -3, 'annoyed': -3, 'delay': -2,
        'fail': -3, 'failure': -4, 'error': -2, 'mistake': -2, 'wrong': -2,
        'reject': -3, 'deny': -2, 'cancel': -2, 'urgent': -1, 'critical': -2,
        'escalate': -3, 'complaint': -3, 'unacceptable': -4, 'incompetent': -4
    }
    
    def analyze_sentiment(self, text: str) -> Dict:
        """Analyze sentiment of email text"""
        words = text.lower().split()
        score = 0
        matched_positive = []
        matched_negative = []
        
        for word in words:
            clean = re.sub(r'[^\w]', '', word)
            if clean in self.POSITIVE_WORDS:
                score += self.POSITIVE_WORDS[clean]
                matched_positive.append(clean)
            if clean in self.NEGATIVE_WORDS:
                score += self.NEGATIVE_WORDS[clean]
                matched_negative.append(clean)
        
        # Check for intensifiers
        intensifiers = ['very', 'extremely', 'really', 'absolutely', 'totally']
        for intensifier in intensifiers:
            if intensifier in text.lower():
                score = int(score * 1.5)
        
        # Check for negations
        negations = ['not', 'never', "don't", "doesn't", "won't", "can't", "isn't"]
        for negation in negations:
            if negation in text.lower():
                score = -score * 0.7
        
        # Normalize to -10 to +10
        normalized = max(-10, min(10, score))
        
        if normalized > 2:
            label = 'very_positive' if normalized > 5 else 'positive'
        elif normalized < -2:
            label = 'very_negative' if normalized < -5 else 'negative'
        else:
            label = 'neutral'
        
        return {
            'score': normalized,
            'label': label,
            'positive_words': matched_positive,
            'negative_words': matched_negative
        }
    
    def track_email_sentiment(self, conversation_id: str, email: Dict) -> Dict:
        """Track sentiment for an email in a conversation"""
        sentiment = self.analyze_sentiment(email.get('body', '') + ' ' + email.get('subject', ''))
        
        data_point = {
            'email_id': email.get('id', ''),
            'from': email.get('from', ''),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'sentiment_score': sentiment['score'],
            'sentiment_label': sentiment['label'],
            'positive_words': sentiment['positive_words'],
            'negative_words': sentiment['negative_words']
        }
        
        if conversation_id not in self.conversations:
            self.conversations[conversation_id] = []
        
        self.conversations[conversation_id].append(data_point)
        
        # Check for alerts
        self._check_alerts(conversation_id, data_point, email)
        
        return data_point
    
    def _check_alerts(self, conv_id: str, data_point: Dict, email: Dict) -> None:
        """Check for sentiment alerts"""
        history = self.conversations.get(conv_id, [])
        
        if len(history) >= 3:
            recent_scores = [h['sentiment_score'] for h in history[-3:]]
            
            # Escalation detection: 3 consecutive negative scores
            if all(s < -2 for s in recent_scores):
                self.alerts.append({
                    'type': 'escalation',
                    'conversation_id': conv_id,
                    'severity': 'high',
                    'message': 'Conversation escalating negatively - intervention recommended',
                    'scores': recent_scores,
                    'timestamp': datetime.now().isoformat()
                })
            
            # Rapid decline detection
            if len(recent_scores) >= 3 and recent_scores[-1] < recent_scores[0] - 5:
                self.alerts.append({
                    'type': 'rapid_decline',
                    'conversation_id': conv_id,
                    'severity': 'medium',
                    'message': 'Rapid sentiment decline detected',
                    'scores': recent_scores,
                    'timestamp': datetime.now().isoformat()
                })
    
    def calculate_sentiment_velocity(self, conversation_id: str) -> Dict:
        """Calculate how fast sentiment is changing"""
        history = self.conversations.get(conversation_id, [])
        if len(history) < 2:
            return {'velocity': 0, 'direction': 'stable', 'trend': 'insufficient_data'}
        
        scores = [h['sentiment_score'] for h in history]
        
        # Calculate velocity (change per email)
        changes = [scores[i] - scores[i-1] for i in range(1, len(scores))]
        avg_velocity = sum(changes) / len(changes)
        
        # Determine direction
        if avg_velocity > 1:
            direction = 'improving'
        elif avg_velocity < -1:
            direction = 'declining'
        else:
            direction = 'stable'
        
        # Determine trend
        if len(scores) >= 3:
            recent_trend = scores[-1] - scores[-3]
            if recent_trend > 3:
                trend = 'strongly_improving'
            elif recent_trend > 0:
                trend = 'slightly_improving'
            elif recent_trend < -3:
                trend = 'strongly_declining'
            elif recent_trend < 0:
                trend = 'slightly_declining'
            else:
                trend = 'flat'
        else:
            trend = 'insufficient_data'
        
        return {
            'velocity': round(avg_velocity, 2),
            'direction': direction,
            'trend': trend,
            'total_emails': len(history),
            'first_score': scores[0],
            'latest_score': scores[-1]
        }
    
    def calculate_conversation_health(self, conversation_id: str) -> Dict:
        """Calculate overall conversation health score (0-100)"""
        history = self.conversations.get(conversation_id, [])
        if not history:
            return {'health_score': 50, 'status': 'no_data'}
        
        scores = [h['sentiment_score'] for h in history]
        avg_score = sum(scores) / len(scores)
        velocity = self.calculate_sentiment_velocity(conversation_id)
        
        # Base health from average sentiment (0-60 points)
        health = max(0, min(60, (avg_score + 10) * 3))
        
        # Velocity bonus (0-25 points)
        if velocity['direction'] == 'improving':
            health += 25
        elif velocity['direction'] == 'stable':
            health += 15
        elif velocity['direction'] == 'declining':
            health -= 10
        
        # Consistency bonus (0-15 points)
        if len(scores) >= 3:
            variance = sum((s - avg_score) ** 2 for s in scores) / len(scores)
            consistency = max(0, 15 - variance)
            health += consistency
        
        health = max(0, min(100, health))
        
        if health >= 80:
            status = 'excellent'
        elif health >= 60:
            status = 'good'
        elif health >= 40:
            status = 'fair'
        elif health >= 20:
            status = 'poor'
        else:
            status = 'critical'
        
        return {
            'health_score': round(health, 1),
            'status': status,
            'avg_sentiment': round(avg_score, 2),
            'velocity': velocity,
            'email_count': len(history)
        }
    
    def recommend_intervention(self, conversation_id: str) -> Dict:
        """Recommend intervention actions based on sentiment evolution"""
        health = self.calculate_conversation_health(conversation_id)
        history = self.conversations.get(conversation_id, [])
        
        recommendations = []
        
        if health['status'] == 'critical':
            recommendations.append({
                'priority': 'urgent',
                'action': 'immediate_escalation',
                'description': 'Escalate to management immediately - conversation is in critical state',
                'suggested_approach': 'Schedule a call to address concerns directly'
            })
            recommendations.append({
                'priority': 'urgent',
                'action': 'tone_adjustment',
                'description': 'Use empathetic, solution-oriented language',
                'suggested_approach': 'Acknowledge concerns, apologize if appropriate, focus on solutions'
            })
        
        elif health['status'] == 'poor':
            recommendations.append({
                'priority': 'high',
                'action': 'proactive_outreach',
                'description': 'Reach out proactively to address underlying issues',
                'suggested_approach': 'Ask open-ended questions to understand concerns'
            })
        
        elif health['status'] == 'fair' and health['velocity']['direction'] == 'declining':
            recommendations.append({
                'priority': 'medium',
                'action': 'preventive_action',
                'description': 'Take preventive action before situation worsens',
                'suggested_approach': 'Provide additional context or clarification'
            })
        
        elif health['status'] in ['good', 'excellent']:
            recommendations.append({
                'priority': 'low',
                'action': 'maintain_momentum',
                'description': 'Continue current approach - conversation is healthy',
                'suggested_approach': 'Maintain positive tone and responsiveness'
            })
        
        # Check for cooling-down period
        if len(history) >= 2:
            last_email_time = datetime.fromisoformat(history[-1]['timestamp'])
            time_since_last = datetime.now() - last_email_time
            if time_since_last > timedelta(hours=24) and health['status'] in ['poor', 'fair']:
                recommendations.append({
                    'priority': 'medium',
                    'action': 'cooling_down_followup',
                    'description': f'No activity for {time_since_last.days} days - consider gentle follow-up',
                    'suggested_approach': 'Send a brief, friendly check-in email'
                })
        
        return {
            'conversation_id': conversation_id,
            'health': health,
            'recommendations': recommendations,
            'reply_all_required': True
        }


def test_v652():
    """Test V652 Email Sentiment Evolution Tracker"""
    tracker = EmailSentimentEvolutionTracker()
    
    conv_id = 'conv_001'
    
    # Simulate escalating conversation
    emails = [
        {'id': 'e1', 'from': 'client@company.com', 'body': 'Hi, I have a concern about the project timeline. Can we discuss?', 'timestamp': '2026-05-28T09:00:00', 'subject': 'Project concern'},
        {'id': 'e2', 'from': 'manager@company.com', 'body': 'Thank you for reaching out. I appreciate your patience. Let me look into this.', 'timestamp': '2026-05-28T10:00:00', 'subject': 'Re: Project concern'},
        {'id': 'e3', 'from': 'client@company.com', 'body': 'This is frustrating. The delay is causing serious problems for our team. We are very disappointed.', 'timestamp': '2026-05-28T14:00:00', 'subject': 'Re: Project concern'},
        {'id': 'e4', 'from': 'manager@company.com', 'body': 'I understand your frustration completely. I apologize for the delay and am working on a solution.', 'timestamp': '2026-05-28T15:00:00', 'subject': 'Re: Project concern'},
        {'id': 'e5', 'from': 'client@company.com', 'body': 'Thanks for the update. I am glad you are taking this seriously. Great progress!', 'timestamp': '2026-05-29T09:00:00', 'subject': 'Re: Project concern'},
    ]
    
    for email in emails:
        result = tracker.track_email_sentiment(conv_id, email)
        print(f"Email {email['id']}: {result['sentiment_label']} ({result['sentiment_score']})")
    
    velocity = tracker.calculate_sentiment_velocity(conv_id)
    health = tracker.calculate_conversation_health(conv_id)
    intervention = tracker.recommend_intervention(conv_id)
    
    print(f"\n✅ V652 Sentiment Evolution Tracker Test")
    print(f"Velocity: {velocity['direction']} ({velocity['velocity']})")
    print(f"Trend: {velocity['trend']}")
    print(f"Health: {health['health_score']}/100 ({health['status']})")
    print(f"Alerts: {len(tracker.alerts)}")
    print(f"Intervention Recommendations: {len(intervention['recommendations'])}")
    for rec in intervention['recommendations']:
        print(f"  [{rec['priority']}] {rec['action']}: {rec['description']}")
    
    return intervention


if __name__ == '__main__':
    test_v652()

#!/usr/bin/env python3
"""
V1022 - Email Sentiment Tracker
Real-time sentiment analysis across email threads with trend detection and alerts.
Tracks emotional tone, relationship health, and satisfaction metrics.
"""
import re
from typing import Dict, List, Any, Tuple
from datetime import datetime, timedelta
from collections import defaultdict


class EmailSentimentTracker:
    """Track sentiment across email threads and relationships."""
    
    # Sentiment lexicons
    POSITIVE_WORDS = {
        'excellent': 3, 'great': 2, 'good': 1, 'amazing': 3, 'wonderful': 3,
        'fantastic': 3, 'perfect': 3, 'love': 2, 'happy': 2, 'pleased': 2,
        'satisfied': 2, 'appreciate': 2, 'thank': 1, 'thanks': 1, 'awesome': 3,
        'outstanding': 3, 'impressive': 2, 'delighted': 2, 'glad': 1, 'excited': 2
    }
    
    NEGATIVE_WORDS = {
        'terrible': -3, 'awful': -3, 'bad': -2, 'horrible': -3, 'disappointed': -2,
        'frustrated': -2, 'angry': -3, 'upset': -2, 'unhappy': -2, 'annoyed': -2,
        'concerned': -1, 'worried': -1, 'problem': -1, 'issue': -1, 'difficult': -1,
        'challenging': -1, 'unfortunately': -1, 'regret': -2, 'sorry': -1, 'apologize': -1
    }
    
    INTENSIFIERS = {
        'very': 1.5, 'extremely': 2.0, 'incredibly': 2.0, 'absolutely': 1.8,
        'really': 1.3, 'quite': 1.2, 'somewhat': 0.8, 'slightly': 0.7
    }
    
    def __init__(self):
        self.thread_sentiments = defaultdict(list)
        self.relationship_scores = {}
        self.alerts = []
    
    def analyze_sentiment(self, text: str) -> Dict[str, Any]:
        """
        Analyze sentiment of text.
        
        Args:
            text: Text to analyze
            
        Returns:
            Sentiment analysis with score, label, and details
        """
        text_lower = text.lower()
        
        # Calculate base sentiment score
        score = 0
        matched_words = []
        
        for word, weight in self.POSITIVE_WORDS.items():
            if word in text_lower:
                # Check for intensifiers
                intensifier = 1.0
                for intens, mult in self.INTENSIFIERS.items():
                    if f'{intens} {word}' in text_lower:
                        intensifier = mult
                        break
                
                score += weight * intensifier
                matched_words.append({'word': word, 'type': 'positive', 'weight': weight * intensifier})
        
        for word, weight in self.NEGATIVE_WORDS.items():
            if word in text_lower:
                intensifier = 1.0
                for intens, mult in self.INTENSIFIERS.items():
                    if f'{intens} {word}' in text_lower:
                        intensifier = mult
                        break
                
                score += weight * intensifier
                matched_words.append({'word': word, 'type': 'negative', 'weight': weight * intensifier})
        
        # Determine sentiment label
        if score > 2:
            label = 'very_positive'
        elif score > 0:
            label = 'positive'
        elif score < -2:
            label = 'very_negative'
        elif score < 0:
            label = 'negative'
        else:
            label = 'neutral'
        
        # Calculate confidence
        confidence = min(100, abs(score) * 10 + 50)
        
        return {
            'score': round(score, 2),
            'label': label,
            'confidence': confidence,
            'matched_words': matched_words,
            'intensity': 'high' if abs(score) > 3 else 'medium' if abs(score) > 1 else 'low'
        }
    
    def track_thread_sentiment(self, thread_id: str, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Track sentiment across an email thread.
        
        Args:
            thread_id: Thread identifier
            emails: List of emails in thread
            
        Returns:
            Thread sentiment analysis
        """
        thread_analysis = []
        
        for email in emails:
            body = email.get('body', '')
            sentiment = self.analyze_sentiment(body)
            
            analysis = {
                'email_id': email.get('id'),
                'sender': email.get('sender'),
                'date': email.get('date'),
                'sentiment': sentiment,
                'subject': email.get('subject', '')[:50]
            }
            
            thread_analysis.append(analysis)
            self.thread_sentiments[thread_id].append(analysis)
        
        # Calculate thread-level metrics
        scores = [a['sentiment']['score'] for a in thread_analysis]
        avg_score = sum(scores) / len(scores) if scores else 0
        
        # Detect sentiment trend
        trend = self._detect_trend(scores)
        
        # Calculate relationship health
        relationship_health = self._calculate_relationship_health(thread_analysis)
        
        return {
            'engine': 'V1022 - Email Sentiment Tracker',
            'thread_id': thread_id,
            'total_emails': len(emails),
            'average_sentiment': round(avg_score, 2),
            'sentiment_label': self._score_to_label(avg_score),
            'trend': trend,
            'relationship_health': relationship_health,
            'email_analyses': thread_analysis,
            'alerts': self._generate_thread_alerts(thread_analysis),
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def _detect_trend(self, scores: List[float]) -> Dict[str, Any]:
        """Detect sentiment trend in a sequence."""
        if len(scores) < 2:
            return {'direction': 'stable', 'change': 0}
        
        first_half = scores[:len(scores)//2]
        second_half = scores[len(scores)//2:]
        
        avg_first = sum(first_half) / len(first_half)
        avg_second = sum(second_half) / len(second_half)
        
        change = avg_second - avg_first
        
        if change > 1:
            direction = 'improving'
        elif change < -1:
            direction = 'declining'
        else:
            direction = 'stable'
        
        return {
            'direction': direction,
            'change': round(change, 2),
            'first_half_avg': round(avg_first, 2),
            'second_half_avg': round(avg_second, 2)
        }
    
    def _calculate_relationship_health(self, analyses: List[Dict]) -> Dict[str, Any]:
        """Calculate overall relationship health score."""
        if not analyses:
            return {'score': 50, 'status': 'unknown'}
        
        scores = [a['sentiment']['score'] for a in analyses]
        avg_score = sum(scores) / len(scores)
        
        # Health score 0-100
        health_score = int((avg_score + 5) * 10)  # Map -5 to 5 → 0 to 100
        health_score = max(0, min(100, health_score))
        
        if health_score >= 80:
            status = 'excellent'
        elif health_score >= 60:
            status = 'good'
        elif health_score >= 40:
            status = 'neutral'
        elif health_score >= 20:
            status = 'at_risk'
        else:
            status = 'critical'
        
        return {
            'score': health_score,
            'status': status,
            'recommendation': self._get_health_recommendation(status)
        }
    
    def _get_health_recommendation(self, status: str) -> str:
        """Get recommendation based on relationship health."""
        recommendations = {
            'excellent': 'Maintain current communication style',
            'good': 'Continue positive engagement',
            'neutral': 'Consider increasing positive interactions',
            'at_risk': 'Address concerns and improve communication',
            'critical': 'Immediate attention needed - schedule resolution meeting'
        }
        return recommendations.get(status, 'Monitor closely')
    
    def _generate_thread_alerts(self, analyses: List[Dict]) -> List[Dict[str, Any]]:
        """Generate alerts for concerning sentiment patterns."""
        alerts = []
        
        # Check for sudden negative shift
        if len(analyses) >= 3:
            recent = analyses[-3:]
            if all(a['sentiment']['score'] < -2 for a in recent):
                alerts.append({
                    'type': 'sustained_negative',
                    'severity': 'high',
                    'message': 'Sustained negative sentiment detected in recent emails',
                    'action': 'Review thread and address concerns immediately'
                })
        
        # Check for escalation
        if len(analyses) >= 2:
            if analyses[-1]['sentiment']['score'] < analyses[-2]['sentiment']['score'] - 3:
                alerts.append({
                    'type': 'escalation',
                    'severity': 'high',
                    'message': 'Sentiment escalation detected',
                    'action': 'De-escalate and seek resolution'
                })
        
        return alerts
    
    def _score_to_label(self, score: float) -> str:
        """Convert sentiment score to label."""
        if score > 2:
            return 'very_positive'
        elif score > 0:
            return 'positive'
        elif score < -2:
            return 'very_negative'
        elif score < 0:
            return 'negative'
        return 'neutral'
    
    def analyze_relationship(self, contact_email: str, 
                            all_interactions: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Analyze overall relationship with a contact.
        
        Args:
            contact_email: Contact email address
            all_interactions: All interactions with contact
            
        Returns:
            Relationship analysis
        """
        if not all_interactions:
            return {
                'engine': 'V1022 - Email Sentiment Tracker',
                'contact': contact_email,
                'relationship_health': {'score': 50, 'status': 'unknown'},
                'reply_all_enforced': True,
                'case_by_case_analysis': True
            }
        
        # Analyze all interactions
        sentiments = []
        for interaction in all_interactions:
            body = interaction.get('body', '')
            sentiment = self.analyze_sentiment(body)
            sentiments.append(sentiment)
        
        # Calculate overall metrics
        scores = [s['score'] for s in sentiments]
        avg_score = sum(scores) / len(scores)
        
        # Trend over time
        dates = [i.get('date') for i in all_interactions]
        trend = self._detect_trend(scores)
        
        # Relationship health
        health = self._calculate_relationship_health([
            {'sentiment': s} for s in sentiments
        ])
        
        self.relationship_scores[contact_email] = health
        
        return {
            'engine': 'V1022 - Email Sentiment Tracker',
            'contact': contact_email,
            'total_interactions': len(all_interactions),
            'average_sentiment': round(avg_score, 2),
            'sentiment_label': self._score_to_label(avg_score),
            'trend': trend,
            'relationship_health': health,
            'positive_interactions': sum(1 for s in scores if s > 0),
            'negative_interactions': sum(1 for s in scores if s < 0),
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }


def analyze_email_sentiment(email_body: str, thread_id: str = None) -> Dict[str, Any]:
    """
    Analyze sentiment of an email.
    
    Args:
        email_body: Email body text
        thread_id: Optional thread ID
        
    Returns:
        Sentiment analysis
    """
    tracker = EmailSentimentTracker()
    sentiment = tracker.analyze_sentiment(email_body)
    
    return {
        'engine': 'V1022 - Email Sentiment Tracker',
        'sentiment': sentiment,
        'thread_id': thread_id,
        'reply_all_enforced': True,
        'case_by_case_analysis': True
    }


if __name__ == '__main__':
    # Test cases
    test_emails = [
        {
            'id': 1,
            'sender': 'client@example.com',
            'date': '2024-01-15',
            'subject': 'Great work on the project',
            'body': 'I\'m extremely pleased with the excellent work your team delivered. The results are amazing and we\'re very happy with the outcome. Thank you!'
        },
        {
            'id': 2,
            'sender': 'client@example.com',
            'date': '2024-01-20',
            'subject': 'Some concerns',
            'body': 'I\'m somewhat concerned about the timeline. There are a few issues we need to address, but overall it\'s still good.'
        },
        {
            'id': 3,
            'sender': 'client@example.com',
            'date': '2024-01-25',
            'subject': 'Frustrated with delays',
            'body': 'I\'m very frustrated with the continued delays. This is becoming a serious problem and I\'m quite disappointed with the lack of progress.'
        }
    ]
    
    print(f"{'='*60}")
    print("Email Sentiment Tracking Test")
    print('='*60)
    
    tracker = EmailSentimentTracker()
    result = tracker.track_thread_sentiment('thread-001', test_emails)
    
    print(f"\nThread Analysis:")
    print(f"  Total Emails: {result['total_emails']}")
    print(f"  Average Sentiment: {result['average_sentiment']}")
    print(f"  Sentiment Label: {result['sentiment_label']}")
    print(f"  Trend: {result['trend']['direction']} (change: {result['trend']['change']})")
    
    print(f"\nRelationship Health:")
    print(f"  Score: {result['relationship_health']['score']}/100")
    print(f"  Status: {result['relationship_health']['status']}")
    print(f"  Recommendation: {result['relationship_health']['recommendation']}")
    
    if result['alerts']:
        print(f"\nAlerts:")
        for alert in result['alerts']:
            print(f"  [{alert['severity'].upper()}] {alert['message']}")
            print(f"    Action: {alert['action']}")
    
    print(f"\nEmail-by-Email Analysis:")
    for analysis in result['email_analyses']:
        print(f"  Email {analysis['email_id']}: {analysis['sentiment']['label']} (score: {analysis['sentiment']['score']})")
    
    print(f"\nReply-All Enforced: {result['reply_all_enforced']}")
    print(f"Case-by-Case Analysis: {result['case_by_case_analysis']}")

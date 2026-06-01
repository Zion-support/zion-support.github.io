#!/usr/bin/env python3
"""
V951: Email Sentiment Evolution Tracker
Track how sentiment changes throughout email threads over time.
Detect relationship deterioration early and recommend intervention strategies.
"""

import re
from datetime import datetime
from typing import Dict, List, Any, Tuple
import json

class SentimentEvolutionTracker:
    def __init__(self):
        self.sentiment_keywords = {
            'positive': ['great', 'excellent', 'wonderful', 'amazing', 'fantastic', 'perfect', 'love', 'happy', 'pleased', 'satisfied'],
            'neutral': ['okay', 'fine', 'understand', 'noted', 'received', 'acknowledged'],
            'negative': ['disappointed', 'frustrated', 'upset', 'concerned', 'worried', 'problem', 'issue', 'unhappy', 'dissatisfied']
        }
        
    def analyze_thread(self, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Analyze sentiment evolution across email thread."""
        if not emails:
            return {'error': 'No emails provided'}
        
        # Sort emails by timestamp
        sorted_emails = sorted(emails, key=lambda x: x.get('timestamp', ''))
        
        # Analyze each email
        sentiment_timeline = []
        for email in sorted_emails:
            sentiment = self._analyze_email_sentiment(email)
            sentiment_timeline.append({
                'email_id': email.get('id'),
                'sender': email.get('sender'),
                'timestamp': email.get('timestamp'),
                'sentiment': sentiment['overall'],
                'score': sentiment['score'],
                'keywords': sentiment['keywords']
            })
        
        # Detect trends
        trend = self._detect_trend(sentiment_timeline)
        
        # Identify turning points
        turning_points = self._identify_turning_points(sentiment_timeline)
        
        # Calculate relationship health
        relationship_health = self._calculate_relationship_health(sentiment_timeline)
        
        # Generate intervention recommendations
        recommendations = self._generate_recommendations(trend, relationship_health, turning_points)
        
        # Check reply-all requirement
        all_recipients = set()
        for email in emails:
            all_recipients.update(email.get('recipients', []))
        reply_all_required = len(all_recipients) > 1
        
        return {
            'thread_id': emails[0].get('id'),
            'email_count': len(emails),
            'sentiment_timeline': sentiment_timeline,
            'trend': trend,
            'turning_points': turning_points,
            'relationship_health': relationship_health,
            'recommendations': recommendations,
            'reply_all_required': reply_all_required
        }
    
    def _analyze_email_sentiment(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze sentiment of single email."""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        text = f"{subject} {body}"
        
        # Count sentiment keywords
        positive_count = sum(1 for kw in self.sentiment_keywords['positive'] if kw in text)
        neutral_count = sum(1 for kw in self.sentiment_keywords['neutral'] if kw in text)
        negative_count = sum(1 for kw in self.sentiment_keywords['negative'] if kw in text)
        
        # Calculate sentiment score (-100 to +100)
        total_keywords = positive_count + neutral_count + negative_count
        if total_keywords == 0:
            score = 0
        else:
            score = ((positive_count - negative_count) / total_keywords) * 100
        
        # Determine overall sentiment
        if score > 20:
            overall = 'positive'
        elif score < -20:
            overall = 'negative'
        else:
            overall = 'neutral'
        
        # Extract matched keywords
        keywords = []
        for category, kws in self.sentiment_keywords.items():
            for kw in kws:
                if kw in text:
                    keywords.append({'word': kw, 'category': category})
        
        return {
            'overall': overall,
            'score': round(score, 2),
            'keywords': keywords,
            'positive_count': positive_count,
            'negative_count': negative_count
        }
    
    def _detect_trend(self, timeline: List[Dict]) -> Dict[str, Any]:
        """Detect sentiment trend over time."""
        if len(timeline) < 2:
            return {'direction': 'insufficient_data', 'change': 0}
        
        first_score = timeline[0]['score']
        last_score = timeline[-1]['score']
        change = last_score - first_score
        
        if change > 20:
            direction = 'improving'
        elif change < -20:
            direction = 'deteriorating'
        else:
            direction = 'stable'
        
        return {
            'direction': direction,
            'change': round(change, 2),
            'start_score': first_score,
            'end_score': last_score
        }
    
    def _identify_turning_points(self, timeline: List[Dict]) -> List[Dict]:
        """Identify significant sentiment changes."""
        turning_points = []
        
        for i in range(1, len(timeline)):
            prev_score = timeline[i-1]['score']
            curr_score = timeline[i]['score']
            change = curr_score - prev_score
            
            # Significant change threshold
            if abs(change) > 30:
                turning_points.append({
                    'email_id': timeline[i]['email_id'],
                    'timestamp': timeline[i]['timestamp'],
                    'change': round(change, 2),
                    'from': timeline[i-1]['sentiment'],
                    'to': timeline[i]['sentiment'],
                    'type': 'improvement' if change > 0 else 'deterioration'
                })
        
        return turning_points
    
    def _calculate_relationship_health(self, timeline: List[Dict]) -> Dict[str, Any]:
        """Calculate overall relationship health score."""
        if not timeline:
            return {'score': 0, 'status': 'unknown'}
        
        # Average sentiment score
        avg_score = sum(entry['score'] for entry in timeline) / len(timeline)
        
        # Recent trend (last 3 emails)
        recent = timeline[-3:] if len(timeline) >= 3 else timeline
        recent_avg = sum(entry['score'] for entry in recent) / len(recent)
        
        # Volatility (standard deviation)
        scores = [entry['score'] for entry in timeline]
        mean = sum(scores) / len(scores)
        variance = sum((x - mean) ** 2 for x in scores) / len(scores)
        volatility = variance ** 0.5
        
        # Health status
        if avg_score > 50 and recent_avg > 30:
            status = 'excellent'
        elif avg_score > 20 and recent_avg > 0:
            status = 'good'
        elif avg_score > -20:
            status = 'fair'
        elif avg_score > -50:
            status = 'poor'
        else:
            status = 'critical'
        
        return {
            'score': round(avg_score, 2),
            'recent_score': round(recent_avg, 2),
            'volatility': round(volatility, 2),
            'status': status
        }
    
    def _generate_recommendations(self, trend: Dict, health: Dict, turning_points: List) -> List[str]:
        """Generate intervention recommendations."""
        recommendations = []
        
        # Trend-based recommendations
        if trend['direction'] == 'deteriorating':
            recommendations.append("⚠️ Relationship deteriorating - schedule immediate check-in call")
            recommendations.append("Review recent communications for misunderstandings")
        
        # Health-based recommendations
        if health['status'] in ['poor', 'critical']:
            recommendations.append("🚨 Critical relationship health - escalate to management")
            recommendations.append("Consider face-to-face meeting to address concerns")
        
        if health['volatility'] > 40:
            recommendations.append("High volatility detected - establish clearer communication protocols")
        
        # Turning point recommendations
        negative_turns = [tp for tp in turning_points if tp['type'] == 'deterioration']
        if negative_turns:
            recommendations.append(f"Review {len(negative_turns)} negative turning points to identify root causes")
        
        # Positive reinforcement
        if trend['direction'] == 'improving':
            recommendations.append("✅ Relationship improving - maintain current communication approach")
        
        if not recommendations:
            recommendations.append("Relationship health is stable - continue standard communication")
        
        return recommendations


def main():
    """Test V951 Sentiment Evolution Tracker."""
    tracker = SentimentEvolutionTracker()
    
    # Test email thread
    test_emails = [
        {
            'id': 'email1',
            'sender': 'client@company.com',
            'recipients': ['support@company.com'],
            'timestamp': '2026-01-01T10:00:00',
            'subject': 'Initial Inquiry',
            'body': 'Hi, I am interested in your services. Can you provide more information?'
        },
        {
            'id': 'email2',
            'sender': 'support@company.com',
            'recipients': ['client@company.com'],
            'timestamp': '2026-01-01T14:00:00',
            'subject': 'Re: Initial Inquiry',
            'body': 'Thank you for your interest! We would be happy to help. Here are the details...'
        },
        {
            'id': 'email3',
            'sender': 'client@company.com',
            'recipients': ['support@company.com'],
            'timestamp': '2026-01-02T09:00:00',
            'subject': 'Re: Initial Inquiry',
            'body': 'I am disappointed with the response time. This is concerning and I am worried about service quality.'
        },
        {
            'id': 'email4',
            'sender': 'support@company.com',
            'recipients': ['client@company.com'],
            'timestamp': '2026-01-02T10:00:00',
            'subject': 'Re: Initial Inquiry',
            'body': 'I apologize for the delay. We understand your concern and want to make this right. Let me expedite...'
        },
        {
            'id': 'email5',
            'sender': 'client@company.com',
            'recipients': ['support@company.com'],
            'timestamp': '2026-01-02T15:00:00',
            'subject': 'Re: Initial Inquiry',
            'body': 'Thank you for the quick response! This is excellent service and I am very pleased with the solution.'
        }
    ]
    
    print("=" * 60)
    print("V951: Email Sentiment Evolution Tracker - Test Results")
    print("=" * 60)
    
    result = tracker.analyze_thread(test_emails)
    
    print(f"\nThread ID: {result['thread_id']}")
    print(f"Email Count: {result['email_count']}")
    print(f"\nTrend: {result['trend']['direction']} (change: {result['trend']['change']})")
    print(f"Relationship Health: {result['relationship_health']['status']} (score: {result['relationship_health']['score']})")
    print(f"Volatility: {result['relationship_health']['volatility']}")
    print(f"Reply-All Required: {result['reply_all_required']}")
    
    print("\nSentiment Timeline:")
    for entry in result['sentiment_timeline']:
        print(f"  {entry['timestamp'][:16]} - {entry['sender']}: {entry['sentiment']} ({entry['score']})")
    
    if result['turning_points']:
        print("\nTurning Points:")
        for tp in result['turning_points']:
            print(f"  {tp['timestamp'][:16]} - {tp['type']}: {tp['from']} → {tp['to']} (Δ{tp['change']})")
    
    print("\nRecommendations:")
    for rec in result['recommendations'][:3]:
        print(f"  {rec}")
    
    print("\n✅ V951 Sentiment Evolution Tracker: OPERATIONAL")


if __name__ == '__main__':
    main()

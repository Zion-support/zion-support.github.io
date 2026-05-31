#!/usr/bin/env python3
"""
V681 - Email Sentiment Trend Analyzer
Analyzes sentiment trends over time across email conversations to identify
patterns, predict communication issues, and improve team morale.

Key Features:
- Historical sentiment tracking
- Trend analysis and prediction
- Team morale monitoring
- Communication health scoring
- Sentiment-based alerts
"""

import json
import re
from datetime import datetime, timedelta
from collections import defaultdict, Counter
from typing import Dict, List, Optional, Tuple
import statistics

class EmailSentimentTrendAnalyzer:
    def __init__(self):
        self.sentiment_history = defaultdict(list)
        self.team_sentiment = defaultdict(list)
        self.alerts = []
    
    def analyze_sentiment_trend(self, email: Dict, historical_emails: List[Dict] = None) -> Dict:
        """
        Analyze sentiment trend from email and historical context
        
        Args:
            email: Email dictionary
            historical_emails: List of previous emails for trend analysis
        
        Returns:
            Dict with sentiment trend analysis
        """
        text = email.get('body', '') + ' ' + email.get('subject', '')
        sender = email.get('from', '')
        timestamp = email.get('timestamp', datetime.now().isoformat())
        
        # Calculate current sentiment
        current_sentiment = self._calculate_sentiment(text)
        
        # Analyze trend if historical data available
        trend_analysis = self._analyze_trend(historical_emails) if historical_emails else {
            'trend': 'insufficient_data',
            'change': 0,
            'direction': 'stable'
        }
        
        # Detect sentiment shifts
        sentiment_shift = self._detect_sentiment_shift(current_sentiment, trend_analysis)
        
        # Calculate team morale impact
        morale_impact = self._assess_morale_impact(current_sentiment, trend_analysis)
        
        # Generate communication health score
        health_score = self._calculate_health_score(current_sentiment, trend_analysis)
        
        # Check for alerts
        alert = self._check_alerts(current_sentiment, trend_analysis, sentiment_shift)
        
        # Generate insights
        insights = self._generate_insights(current_sentiment, trend_analysis, morale_impact)
        
        result = {
            'email_id': email.get('id', ''),
            'sender': sender,
            'current_sentiment': current_sentiment,
            'sentiment_score': current_sentiment['score'],
            'sentiment_label': current_sentiment['label'],
            'trend_analysis': trend_analysis,
            'sentiment_shift': sentiment_shift,
            'morale_impact': morale_impact,
            'communication_health_score': health_score,
            'alert': alert,
            'insights': insights,
            'timestamp': timestamp,
            'reply_all_required': len(email.get('to', [])) > 1
        }
        
        # Store in history
        self.sentiment_history[sender].append({
            'email_id': email.get('id', ''),
            'sentiment': current_sentiment,
            'timestamp': timestamp
        })
        
        return result
    
    def _calculate_sentiment(self, text: str) -> Dict:
        """Calculate sentiment score and label"""
        text_lower = text.lower()
        
        # Positive indicators
        positive_words = [
            'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'good', 'happy',
            'pleased', 'satisfied', 'appreciate', 'thanks', 'thank you', 'love', 'enjoy',
            'successful', 'achievement', 'progress', 'improvement', 'positive', 'optimistic',
            'excited', 'enthusiastic', 'motivated', 'inspired', 'confident', 'proud'
        ]
        
        # Negative indicators
        negative_words = [
            'bad', 'terrible', 'awful', 'horrible', 'poor', 'disappointed', 'frustrated',
            'angry', 'upset', 'annoyed', 'concerned', 'worried', 'stressed', 'overwhelmed',
            'failure', 'problem', 'issue', 'difficulty', 'challenge', 'negative', 'pessimistic',
            'sad', 'unhappy', 'dissatisfied', 'complaining', 'criticizing', 'blame'
        ]
        
        # Intensifiers
        intensifiers = ['very', 'extremely', 'incredibly', 'absolutely', 'really', 'highly']
        
        positive_count = sum(1 for word in positive_words if word in text_lower)
        negative_count = sum(1 for word in negative_words if word in text_lower)
        
        # Check for intensifiers
        intensifier_count = sum(1 for word in intensifiers if word in text_lower)
        
        # Calculate score (-100 to +100)
        base_score = (positive_count - negative_count) * 10
        intensifier_bonus = intensifier_count * 5
        
        if positive_count > negative_count:
            score = min(100, base_score + intensifier_bonus)
        elif negative_count > positive_count:
            score = max(-100, base_score - intensifier_bonus)
        else:
            score = 0
        
        # Determine label
        if score >= 50:
            label = 'very_positive'
        elif score >= 20:
            label = 'positive'
        elif score > -20:
            label = 'neutral'
        elif score > -50:
            label = 'negative'
        else:
            label = 'very_negative'
        
        return {
            'score': score,
            'label': label,
            'positive_indicators': positive_count,
            'negative_indicators': negative_count,
            'intensifiers': intensifier_count
        }
    
    def _analyze_trend(self, historical_emails: List[Dict]) -> Dict:
        """Analyze sentiment trend from historical emails"""
        if not historical_emails or len(historical_emails) < 2:
            return {
                'trend': 'insufficient_data',
                'change': 0,
                'direction': 'stable',
                'volatility': 0
            }
        
        # Calculate sentiment for each historical email
        sentiments = []
        for email in historical_emails[-10:]:  # Last 10 emails
            text = email.get('body', '') + ' ' + email.get('subject', '')
            sentiment = self._calculate_sentiment(text)
            sentiments.append(sentiment['score'])
        
        # Calculate trend
        if len(sentiments) >= 2:
            recent_avg = statistics.mean(sentiments[-3:])
            older_avg = statistics.mean(sentiments[:-3]) if len(sentiments) > 3 else sentiments[0]
            
            change = recent_avg - older_avg
            
            if change > 10:
                direction = 'improving'
                trend = 'positive_trend'
            elif change < -10:
                direction = 'declining'
                trend = 'negative_trend'
            else:
                direction = 'stable'
                trend = 'stable'
            
            # Calculate volatility
            volatility = statistics.stdev(sentiments) if len(sentiments) > 1 else 0
        else:
            change = 0
            direction = 'stable'
            trend = 'insufficient_data'
            volatility = 0
        
        return {
            'trend': trend,
            'change': round(change, 1),
            'direction': direction,
            'volatility': round(volatility, 1),
            'data_points': len(sentiments)
        }
    
    def _detect_sentiment_shift(self, current_sentiment: Dict, trend_analysis: Dict) -> Dict:
        """Detect significant sentiment shifts"""
        shift_detected = False
        shift_type = 'none'
        severity = 'low'
        
        # Check for sudden changes
        if abs(trend_analysis['change']) > 30:
            shift_detected = True
            if trend_analysis['change'] > 0:
                shift_type = 'positive_shift'
                severity = 'medium' if trend_analysis['change'] < 50 else 'high'
            else:
                shift_type = 'negative_shift'
                severity = 'medium' if trend_analysis['change'] > -50 else 'high'
        
        # Check for extreme sentiment
        if abs(current_sentiment['score']) > 70:
            shift_detected = True
            shift_type = 'extreme_sentiment'
            severity = 'high'
        
        return {
            'shift_detected': shift_detected,
            'shift_type': shift_type,
            'severity': severity,
            'magnitude': abs(trend_analysis['change'])
        }
    
    def _assess_morale_impact(self, current_sentiment: Dict, trend_analysis: Dict) -> Dict:
        """Assess impact on team morale"""
        morale_score = 50  # Neutral baseline
        
        # Adjust based on current sentiment
        morale_score += current_sentiment['score'] * 0.3
        
        # Adjust based on trend
        if trend_analysis['direction'] == 'improving':
            morale_score += 10
        elif trend_analysis['direction'] == 'declining':
            morale_score -= 15
        
        # Adjust based on volatility (if available)
        volatility = trend_analysis.get('volatility', 0)
        if volatility > 30:
            morale_score -= 10
        
        morale_score = max(0, min(100, morale_score))
        
        if morale_score >= 70:
            morale_level = 'high'
        elif morale_score >= 40:
            morale_level = 'moderate'
        else:
            morale_level = 'low'
        
        return {
            'morale_score': round(morale_score, 1),
            'morale_level': morale_level,
            'risk_factors': self._identify_morale_risks(current_sentiment, trend_analysis)
        }
    
    def _identify_morale_risks(self, current_sentiment: Dict, trend_analysis: Dict) -> List[str]:
        """Identify morale risk factors"""
        risks = []
        
        if current_sentiment['label'] in ['negative', 'very_negative']:
            risks.append('Negative sentiment detected')
        
        if trend_analysis['direction'] == 'declining':
            risks.append('Declining sentiment trend')
        
        volatility = trend_analysis.get('volatility', 0)
        if volatility > 30:
            risks.append('High sentiment volatility')
        
        if current_sentiment['score'] < -50:
            risks.append('Extremely negative communication')
        
        return risks
    
    def _calculate_health_score(self, current_sentiment: Dict, trend_analysis: Dict) -> float:
        """Calculate communication health score"""
        score = 50  # Baseline
        
        # Current sentiment impact
        score += current_sentiment['score'] * 0.4
        
        # Trend impact
        if trend_analysis['direction'] == 'improving':
            score += 15
        elif trend_analysis['direction'] == 'declining':
            score -= 20
        
        # Volatility penalty
        volatility = trend_analysis.get('volatility', 0)
        score -= volatility * 0.2
        
        return max(0, min(100, score))
    
    def _check_alerts(self, current_sentiment: Dict, trend_analysis: Dict, 
                     sentiment_shift: Dict) -> Optional[Dict]:
        """Check if alerts should be triggered"""
        alert = None
        
        # Critical negative sentiment
        if current_sentiment['score'] < -70:
            alert = {
                'type': 'critical_negative_sentiment',
                'severity': 'high',
                'message': 'Extremely negative sentiment detected - immediate attention required',
                'recommended_action': 'Schedule one-on-one meeting to address concerns'
            }
        
        # Rapid decline
        elif trend_analysis['direction'] == 'declining' and trend_analysis['change'] < -30:
            alert = {
                'type': 'rapid_decline',
                'severity': 'medium',
                'message': 'Rapid sentiment decline detected',
                'recommended_action': 'Review recent interactions and address issues'
            }
        
        # High volatility
        elif trend_analysis.get('volatility', 0) > 40:
            alert = {
                'type': 'high_volatility',
                'severity': 'low',
                'message': 'High sentiment volatility detected',
                'recommended_action': 'Monitor communication patterns more closely'
            }
        
        if alert:
            self.alerts.append({
                **alert,
                'timestamp': datetime.now().isoformat()
            })
        
        return alert
    
    def _generate_insights(self, current_sentiment: Dict, trend_analysis: Dict,
                          morale_impact: Dict) -> List[str]:
        """Generate actionable insights"""
        insights = []
        
        # Sentiment-based insights
        if current_sentiment['label'] == 'very_positive':
            insights.append("Excellent communication tone - maintain this positive approach")
        elif current_sentiment['label'] == 'very_negative':
            insights.append("Communication tone needs immediate improvement")
        
        # Trend-based insights
        if trend_analysis['direction'] == 'improving':
            insights.append("Positive sentiment trend - team morale is improving")
        elif trend_analysis['direction'] == 'declining':
            insights.append("Declining sentiment trend - investigate root causes")
        
        # Morale-based insights
        if morale_impact['morale_level'] == 'low':
            insights.append("Team morale is low - consider team building activities")
        elif morale_impact['morale_level'] == 'high':
            insights.append("High team morale - leverage this for challenging projects")
        
        # Volatility insights
        if trend_analysis.get('volatility', 0) > 30:
            insights.append("High sentiment volatility suggests inconsistent communication")
        
        return insights if insights else ["Communication patterns are stable and healthy"]
    
    def generate_trend_report(self, sender: str = None, days: int = 30) -> Dict:
        """Generate comprehensive sentiment trend report"""
        # Filter by sender if specified
        if sender:
            history = self.sentiment_history.get(sender, [])
        else:
            history = [item for sublist in self.sentiment_history.values() for item in sublist]
        
        if not history:
            return {'message': 'No sentiment data available'}
        
        # Filter by time period
        cutoff_date = datetime.now() - timedelta(days=days)
        recent_history = [
            item for item in history
            if datetime.fromisoformat(item['timestamp']) > cutoff_date
        ]
        
        if not recent_history:
            return {'message': f'No data available for the last {days} days'}
        
        # Calculate statistics
        sentiments = [item['sentiment']['score'] for item in recent_history]
        
        avg_sentiment = statistics.mean(sentiments)
        sentiment_distribution = Counter([item['sentiment']['label'] for item in recent_history])
        
        # Calculate trend
        if len(sentiments) >= 2:
            first_half = sentiments[:len(sentiments)//2]
            second_half = sentiments[len(sentiments)//2:]
            
            first_avg = statistics.mean(first_half)
            second_avg = statistics.mean(second_half)
            
            trend_change = second_avg - first_avg
            trend_direction = 'improving' if trend_change > 5 else 'declining' if trend_change < -5 else 'stable'
        else:
            trend_change = 0
            trend_direction = 'insufficient_data'
        
        return {
            'period_days': days,
            'sender': sender or 'all',
            'total_emails_analyzed': len(recent_history),
            'average_sentiment': round(avg_sentiment, 1),
            'sentiment_distribution': dict(sentiment_distribution),
            'trend_direction': trend_direction,
            'trend_change': round(trend_change, 1),
            'sentiment_volatility': round(statistics.stdev(sentiments), 1) if len(sentiments) > 1 else 0,
            'alerts_triggered': len([a for a in self.alerts if datetime.fromisoformat(a['timestamp']) > cutoff_date]),
            'communication_health': 'excellent' if avg_sentiment > 50 else 'good' if avg_sentiment > 20 else 'fair' if avg_sentiment > -20 else 'poor',
            'recommendations': self._generate_report_recommendations(avg_sentiment, trend_direction, sentiment_distribution),
            'timestamp': datetime.now().isoformat()
        }
    
    def _generate_report_recommendations(self, avg_sentiment: float, trend_direction: str,
                                        distribution: Dict) -> List[str]:
        """Generate recommendations based on report"""
        recommendations = []
        
        if avg_sentiment < -20:
            recommendations.append("Implement communication training to improve sentiment")
        
        if trend_direction == 'declining':
            recommendations.append("Investigate causes of declining sentiment")
            recommendations.append("Schedule team feedback sessions")
        
        if distribution.get('very_negative', 0) > distribution.get('very_positive', 0):
            recommendations.append("Address negative communication patterns urgently")
        
        if not recommendations:
            recommendations.append("Maintain current positive communication practices")
        
        return recommendations


def test_v681():
    """Test V681 Email Sentiment Trend Analyzer"""
    analyzer = EmailSentimentTrendAnalyzer()
    
    # Test 1: Positive email
    email1 = {
        'id': 'e001',
        'from': 'manager@company.com',
        'to': ['team@company.com'],
        'subject': 'Excellent Progress This Week!',
        'body': '''Team,
        
        I'm thrilled to share that we've achieved amazing results this week! 
        The team's hard work and dedication is truly inspiring. Great job everyone!
        
        Let's keep up this fantastic momentum.
        
        Manager''',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Negative email
    email2 = {
        'id': 'e002',
        'from': 'employee@company.com',
        'to': ['manager@company.com'],
        'subject': 'Concerns About Project Direction',
        'body': '''Hi Manager,
        
        I'm very frustrated and disappointed with the recent project changes.
        The constant scope changes are making it impossible to deliver quality work.
        I'm worried about our ability to meet deadlines.
        
        This is really stressful and demotivating.
        
        Employee''',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Neutral email with historical context
    historical_emails = [
        {
            'id': 'h001',
            'body': 'Good progress on the project.',
            'subject': 'Update',
            'timestamp': '2026-05-28T09:00:00'
        },
        {
            'id': 'h002',
            'body': "We're making excellent progress!",
            'subject': 'Great news',
            'timestamp': '2026-05-29T09:00:00'
        }
    ]
    
    email3 = {
        'id': 'e003',
        'from': 'teamlead@company.com',
        'to': ['team@company.com'],
        'subject': 'Weekly Status Update',
        'body': '''Team,
        
        Here's our status for this week:
        - Tasks completed: 15
        - Tasks in progress: 8
        - No major blockers
        
        Let me know if you have questions.
        
        Team Lead''',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    # Analyze all emails
    results = []
    for i, email in enumerate([email1, email2, email3]):
        historical = historical_emails if i == 2 else None
        result = analyzer.analyze_sentiment_trend(email, historical)
        results.append(result)
        
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Sentiment Score: {result['sentiment_score']}/100")
        print(f"Sentiment Label: {result['sentiment_label']}")
        print(f"Trend: {result['trend_analysis']['trend']}")
        print(f"Direction: {result['trend_analysis']['direction']}")
        print(f"Health Score: {result['communication_health_score']}/100")
        print(f"Morale Level: {result['morale_impact']['morale_level']}")
        if result['alert']:
            print(f"Alert: {result['alert']['type']} ({result['alert']['severity']})")
        print(f"Insights: {result['insights']}")
    
    # Generate report
    report = analyzer.generate_trend_report(days=30)
    print(f"\n{'='*50}")
    print(f"✅ V681 Sentiment Trend Analyzer Test Complete")
    print(f"Total Emails: {report['total_emails_analyzed']}")
    print(f"Avg Sentiment: {report['average_sentiment']}/100")
    print(f"Trend: {report['trend_direction']}")
    print(f"Health: {report['communication_health']}")
    print(f"Alerts: {report['alerts_triggered']}")
    
    return report


if __name__ == '__main__':
    test_v681()

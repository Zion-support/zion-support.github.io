#!/usr/bin/env python3
"""
V188 - AI Email Sentiment Evolution Tracker
Tracks sentiment changes over time across conversations, identifies
deteriorating relationships early, and provides sentiment trend analysis.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
import hashlib
import statistics

class SentimentEvolutionTracker:
    """AI-powered sentiment evolution tracking system."""
    
    def __init__(self):
        self.sentiment_history = defaultdict(list)
        self.contact_baselines = {}
        self.sentiment_trends = defaultdict(dict)
        self.alert_thresholds = {
            'rapid_decline': -0.3,  # 30% drop in short period
            'sustained_negative': -0.5,  # Sustained negative sentiment
            'volatility': 0.4  # High sentiment volatility
        }
        self.emotional_markers = self._build_emotional_markers()
    
    def _build_emotional_markers(self) -> Dict[str, Dict]:
        """Build emotional marker dictionaries."""
        return {
            'positive': {
                'strong': ['excellent', 'outstanding', 'amazing', 'fantastic', 'brilliant', 'exceptional', 'superb', 'wonderful', 'delighted', 'thrilled', 'ecstatic'],
                'moderate': ['good', 'great', 'happy', 'pleased', 'satisfied', 'appreciate', 'thank', 'enjoyed', 'helpful', 'valuable'],
                'mild': ['okay', 'fine', 'acceptable', 'alright', 'not bad', 'decent', 'reasonable']
            },
            'negative': {
                'strong': ['terrible', 'awful', 'horrible', 'disgusting', 'outrageous', 'unacceptable', 'furious', 'devastated', 'appalled', 'disgusted'],
                'moderate': ['disappointed', 'frustrated', 'annoyed', 'upset', 'concerned', 'worried', 'unhappy', 'dissatisfied', 'problematic', 'troubling'],
                'mild': ['confused', 'uncertain', 'hesitant', 'unsure', 'skeptical', 'questionable', 'doubtful']
            },
            'neutral': ['noted', 'understood', 'received', 'acknowledged', 'thanks', 'got it', 'will do', 'sure', 'okay']
        }
    
    def track_sentiment_evolution(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Track sentiment evolution for email conversation."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        sender = email.get('from', '')
        
        if not sender:
            return {'error': 'No sender information'}
        
        # Analyze current sentiment
        current_sentiment = self._analyze_sentiment(email)
        
        # Log sentiment data point
        self._log_sentiment_data_point(sender, current_sentiment, email)
        
        # Calculate sentiment trend
        trend = self._calculate_sentiment_trend(sender)
        
        # Detect sentiment shifts
        shifts = self._detect_sentiment_shifts(sender, current_sentiment)
        
        # Calculate volatility
        volatility = self._calculate_sentiment_volatility(sender)
        
        # Identify emotional trajectory
        trajectory = self._identify_emotional_trajectory(sender)
        
        # Check for alerts
        alerts = self._check_sentiment_alerts(sender, trend, volatility, shifts)
        
        # Generate insights
        insights = self._generate_sentiment_insights(sender, trend, shifts, trajectory)
        
        # Suggest actions
        actions = self._suggest_sentiment_actions(sender, trend, alerts)
        
        # Predict future sentiment
        prediction = self._predict_sentiment(sender, trend)
        
        return {
            'tracking_id': hashlib.md5(f"{sender}{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            'timestamp': datetime.now().isoformat(),
            'contact': sender,
            'current_sentiment': current_sentiment,
            'sentiment_trend': trend,
            'sentiment_shifts': shifts,
            'volatility': volatility,
            'emotional_trajectory': trajectory,
            'alerts': alerts,
            'insights': insights,
            'suggested_actions': actions,
            'sentiment_prediction': prediction,
            'relationship_health': self._assess_relationship_health(trend, current_sentiment),
            'reply_all_sentiment_context': self._assess_reply_all_context(email, current_sentiment, trend)
        }
    
    def _analyze_sentiment(self, email: Dict) -> Dict[str, Any]:
        """Analyze sentiment of single email."""
        subject = email.get('subject', '')
        body = email.get('body', '')
        content = f"{subject} {body}".lower()
        
        # Count emotional markers
        positive_score = 0
        negative_score = 0
        neutral_score = 0
        
        # Strong positive (weight: 3)
        for marker in self.emotional_markers['positive']['strong']:
            count = content.count(marker)
            positive_score += count * 3
        
        # Moderate positive (weight: 2)
        for marker in self.emotional_markers['positive']['moderate']:
            count = content.count(marker)
            positive_score += count * 2
        
        # Mild positive (weight: 1)
        for marker in self.emotional_markers['positive']['mild']:
            count = content.count(marker)
            positive_score += count * 1
        
        # Strong negative (weight: 3)
        for marker in self.emotional_markers['negative']['strong']:
            count = content.count(marker)
            negative_score += count * 3
        
        # Moderate negative (weight: 2)
        for marker in self.emotional_markers['negative']['moderate']:
            count = content.count(marker)
            negative_score += count * 2
        
        # Mild negative (weight: 1)
        for marker in self.emotional_markers['negative']['mild']:
            count = content.count(marker)
            negative_score += count * 1
        
        # Neutral markers
        for marker in self.emotional_markers['neutral']:
            count = content.count(marker)
            neutral_score += count
        
        # Calculate overall sentiment score (-1 to 1)
        total_markers = positive_score + negative_score + neutral_score
        
        if total_markers == 0:
            sentiment_score = 0
            sentiment_label = 'neutral'
        else:
            sentiment_score = (positive_score - negative_score) / total_markers
            if sentiment_score > 0.2:
                sentiment_label = 'positive'
            elif sentiment_score < -0.2:
                sentiment_label = 'negative'
            else:
                sentiment_label = 'neutral'
        
        # Calculate intensity
        intensity = min(1.0, (positive_score + negative_score) / max(total_markers, 1))
        
        # Detect emotional tone
        tone = self._detect_emotional_tone(content)
        
        return {
            'score': round(sentiment_score, 3),
            'label': sentiment_label,
            'intensity': round(intensity, 2),
            'positive_signals': positive_score,
            'negative_signals': negative_score,
            'neutral_signals': neutral_score,
            'emotional_tone': tone,
            'confidence': min(1.0, total_markers / 10)
        }
    
    def _detect_emotional_tone(self, content: str) -> str:
        """Detect specific emotional tone."""
        tone_indicators = {
            'enthusiastic': ['excited', 'thrilled', 'can\'t wait', 'looking forward', 'eager'],
            'grateful': ['thank', 'appreciate', 'grateful', 'obliged', 'indebted'],
            'frustrated': ['frustrated', 'annoyed', 'irritated', 'fed up', 'tired of'],
            'concerned': ['worried', 'concerned', 'anxious', 'uneasy', 'apprehensive'],
            'confident': ['confident', 'certain', 'assured', 'convinced', 'positive'],
            'skeptical': ['doubt', 'question', 'unsure', 'hesitant', 'skeptical'],
            'urgent': ['urgent', 'asap', 'immediately', 'critical', 'emergency'],
            'casual': ['hey', 'hi', 'just', 'quick', 'FYI']
        }
        
        for tone, indicators in tone_indicators.items():
            if any(indicator in content for indicator in indicators):
                return tone
        
        return 'neutral'
    
    def _log_sentiment_data_point(self, sender: str, sentiment: Dict, email: Dict):
        """Log sentiment data point."""
        data_point = {
            'date': email.get('date', datetime.now().isoformat()),
            'sentiment_score': sentiment['score'],
            'sentiment_label': sentiment['label'],
            'intensity': sentiment['intensity'],
            'emotional_tone': sentiment['emotional_tone'],
            'subject': email.get('subject', ''),
            'positive_signals': sentiment['positive_signals'],
            'negative_signals': sentiment['negative_signals']
        }
        
        self.sentiment_history[sender].append(data_point)
        
        # Update baseline if first interaction
        if sender not in self.contact_baselines:
            self.contact_baselines[sender] = {
                'baseline_score': sentiment['score'],
                'baseline_date': data_point['date'],
                'average_intensity': sentiment['intensity']
            }
    
    def _calculate_sentiment_trend(self, sender: str) -> Dict[str, Any]:
        """Calculate sentiment trend over time."""
        history = self.sentiment_history.get(sender, [])
        
        if len(history) < 2:
            return {
                'trend': 'insufficient_data',
                'direction': 'unknown',
                'change': 0,
                'message': 'Need at least 2 data points for trend analysis'
            }
        
        # Get recent sentiment scores (last 10 interactions)
        recent_scores = [h['sentiment_score'] for h in history[-10:]]
        
        if len(recent_scores) < 2:
            return {
                'trend': 'insufficient_data',
                'direction': 'unknown',
                'change': 0
            }
        
        # Calculate trend using linear regression
        x = list(range(len(recent_scores)))
        y = recent_scores
        
        # Simple linear regression
        n = len(x)
        sum_x = sum(x)
        sum_y = sum(y)
        sum_xy = sum(xi * yi for xi, yi in zip(x, y))
        sum_x2 = sum(xi * xi for xi in x)
        
        denominator = n * sum_x2 - sum_x * sum_x
        if denominator == 0:
            slope = 0
        else:
            slope = (n * sum_xy - sum_x * sum_y) / denominator
        
        # Determine trend direction
        if slope > 0.05:
            direction = 'improving'
            trend = 'positive'
        elif slope < -0.05:
            direction = 'declining'
            trend = 'negative'
        else:
            direction = 'stable'
            trend = 'neutral'
        
        # Calculate change from baseline
        baseline = self.contact_baselines.get(sender, {}).get('baseline_score', 0)
        current_avg = statistics.mean(recent_scores[-3:]) if len(recent_scores) >= 3 else recent_scores[-1]
        change = current_avg - baseline
        
        return {
            'trend': trend,
            'direction': direction,
            'slope': round(slope, 4),
            'change_from_baseline': round(change, 3),
            'current_average': round(current_avg, 3),
            'baseline': round(baseline, 3),
            'data_points': len(recent_scores),
            'trend_strength': min(1.0, abs(slope) * 10)
        }
    
    def _detect_sentiment_shifts(self, sender: str, current_sentiment: Dict) -> List[Dict[str, Any]]:
        """Detect significant sentiment shifts."""
        history = self.sentiment_history.get(sender, [])
        
        if len(history) < 3:
            return []
        
        shifts = []
        
        # Check last 5 interactions for shifts
        recent = history[-5:]
        
        for i in range(1, len(recent)):
            prev_score = recent[i-1]['sentiment_score']
            curr_score = recent[i]['sentiment_score']
            change = curr_score - prev_score
            
            # Significant shift threshold
            if abs(change) > 0.4:
                shift_type = 'improvement' if change > 0 else 'deterioration'
                
                shifts.append({
                    'shift_date': recent[i]['date'],
                    'shift_type': shift_type,
                    'magnitude': round(abs(change), 3),
                    'from_score': round(prev_score, 3),
                    'to_score': round(curr_score, 3),
                    'severity': 'major' if abs(change) > 0.6 else 'moderate',
                    'possible_trigger': self._infer_shift_trigger(recent[i-1], recent[i])
                })
        
        return shifts
    
    def _infer_shift_trigger(self, prev_interaction: Dict, curr_interaction: Dict) -> str:
        """Infer possible trigger for sentiment shift."""
        prev_subject = prev_interaction.get('subject', '').lower()
        curr_subject = curr_interaction.get('subject', '').lower()
        
        # Check for common triggers
        if 'complaint' in curr_subject or 'issue' in curr_subject:
            return 'Customer complaint or issue'
        elif 'problem' in curr_subject or 'error' in curr_subject:
            return 'Technical problem or error'
        elif 'thank' in curr_subject or 'appreciate' in curr_subject:
            return 'Positive feedback or appreciation'
        elif 'delay' in curr_subject or 'late' in curr_subject:
            return 'Delay or timing issue'
        elif 'urgent' in curr_subject or 'asap' in curr_subject:
            return 'Urgent matter requiring attention'
        else:
            return 'Unknown trigger - review conversation context'
    
    def _calculate_sentiment_volatility(self, sender: str) -> Dict[str, Any]:
        """Calculate sentiment volatility."""
        history = self.sentiment_history.get(sender, [])
        
        if len(history) < 3:
            return {
                'volatility': 'unknown',
                'score': 0,
                'message': 'Insufficient data for volatility calculation'
            }
        
        scores = [h['sentiment_score'] for h in history[-10:]]
        
        if len(scores) < 2:
            return {
                'volatility': 'unknown',
                'score': 0
            }
        
        # Calculate standard deviation
        std_dev = statistics.stdev(scores)
        
        # Normalize volatility score (0-1)
        volatility_score = min(1.0, std_dev * 2)
        
        # Determine volatility level
        if volatility_score > 0.6:
            level = 'high'
            description = 'Highly volatile - sentiment changes frequently'
        elif volatility_score > 0.3:
            level = 'moderate'
            description = 'Moderately volatile - some sentiment variation'
        else:
            level = 'low'
            description = 'Stable - consistent sentiment patterns'
        
        return {
            'volatility': level,
            'score': round(volatility_score, 3),
            'standard_deviation': round(std_dev, 3),
            'description': description,
            'data_points': len(scores)
        }
    
    def _identify_emotional_trajectory(self, sender: str) -> Dict[str, Any]:
        """Identify emotional trajectory pattern."""
        history = self.sentiment_history.get(sender, [])
        
        if len(history) < 5:
            return {
                'pattern': 'insufficient_data',
                'description': 'Need at least 5 interactions for trajectory analysis'
            }
        
        # Get emotional tones from recent interactions
        recent_tones = [h['emotional_tone'] for h in history[-10:]]
        
        # Count tone frequencies
        from collections import Counter
        tone_counts = Counter(recent_tones)
        
        # Identify dominant tone
        dominant_tone = tone_counts.most_common(1)[0][0] if tone_counts else 'neutral'
        
        # Identify trajectory pattern
        patterns = {
            'consistently_positive': all(tone in ['enthusiastic', 'grateful', 'confident'] for tone in recent_tones[-5:]),
            'consistently_negative': all(tone in ['frustrated', 'concerned', 'urgent'] for tone in recent_tones[-5:]),
            'improving': recent_tones[-1] in ['enthusiastic', 'grateful', 'confident'] and recent_tones[0] in ['frustrated', 'concerned'],
            'deteriorating': recent_tones[-1] in ['frustrated', 'concerned', 'urgent'] and recent_tones[0] in ['enthusiastic', 'grateful'],
            'volatile': len(set(recent_tones[-5:])) >= 4
        }
        
        trajectory = 'mixed'
        for pattern, is_match in patterns.items():
            if is_match:
                trajectory = pattern
                break
        
        descriptions = {
            'consistently_positive': 'Relationship maintains positive emotional tone',
            'consistently_negative': 'Relationship shows persistent negative emotions',
            'improving': 'Emotional tone improving over time',
            'deteriorating': 'Emotional tone declining over time',
            'volatile': 'Highly variable emotional tone',
            'mixed': 'Mixed emotional patterns'
        }
        
        return {
            'pattern': trajectory,
            'dominant_tone': dominant_tone,
            'tone_distribution': dict(tone_counts),
            'description': descriptions.get(trajectory, 'Unknown pattern'),
            'recent_tones': recent_tones[-5:]
        }
    
    def _check_sentiment_alerts(self, sender: str, trend: Dict, volatility: Dict, shifts: List) -> List[Dict[str, Any]]:
        """Check for sentiment alerts."""
        alerts = []
        
        # Rapid decline alert
        if trend.get('slope', 0) < self.alert_thresholds['rapid_decline']:
            alerts.append({
                'alert_type': 'rapid_decline',
                'severity': 'high',
                'message': f"Rapid sentiment decline detected (slope: {trend['slope']:.3f})",
                'action_required': 'Immediate outreach recommended'
            })
        
        # Sustained negative alert
        history = self.sentiment_history.get(sender, [])
        if len(history) >= 5:
            recent_scores = [h['sentiment_score'] for h in history[-5:]]
            if all(score < -0.3 for score in recent_scores):
                alerts.append({
                    'alert_type': 'sustained_negative',
                    'severity': 'high',
                    'message': 'Sustained negative sentiment over last 5 interactions',
                    'action_required': 'Relationship intervention needed'
                })
        
        # High volatility alert
        if volatility.get('score', 0) > self.alert_thresholds['volatility']:
            alerts.append({
                'alert_type': 'high_volatility',
                'severity': 'medium',
                'message': f"High sentiment volatility ({volatility['score']:.3f})",
                'action_required': 'Review communication consistency'
            })
        
        # Major sentiment shift alert
        major_shifts = [s for s in shifts if s.get('severity') == 'major']
        if major_shifts:
            alerts.append({
                'alert_type': 'major_shift',
                'severity': 'high',
                'message': f"Major sentiment shift detected ({len(major_shifts)} occurrence(s))",
                'action_required': 'Investigate cause and address concerns'
            })
        
        return alerts
    
    def _generate_sentiment_insights(self, sender: str, trend: Dict, shifts: List, trajectory: Dict) -> List[str]:
        """Generate sentiment insights."""
        insights = []
        
        # Trend insight
        if trend.get('direction') == 'improving':
            insights.append(f"📈 Sentiment improving: {trend.get('change_from_baseline', 0):+.3f} from baseline")
        elif trend.get('direction') == 'declining':
            insights.append(f"📉 Sentiment declining: {trend.get('change_from_baseline', 0):+.3f} from baseline")
        else:
            insights.append(f"➡️  Sentiment stable at {trend.get('current_average', 0):.3f}")
        
        # Trajectory insight
        pattern = trajectory.get('pattern', 'unknown')
        if pattern == 'consistently_positive':
            insights.append("😊 Consistently positive emotional tone - strong relationship")
        elif pattern == 'consistently_negative':
            insights.append("😟 Consistently negative emotions - relationship at risk")
        elif pattern == 'improving':
            insights.append("🌟 Emotional tone improving - positive momentum")
        elif pattern == 'deteriorating':
            insights.append("⚠️  Emotional tone deteriorating - intervention needed")
        
        # Shift insights
        if shifts:
            negative_shifts = [s for s in shifts if s['shift_type'] == 'deterioration']
            if negative_shifts:
                insights.append(f"🔴 {len(negative_shifts)} negative sentiment shift(s) detected")
        
        return insights or ["📝 Tracking sentiment evolution"]
    
    def _suggest_sentiment_actions(self, sender: str, trend: Dict, alerts: List) -> List[Dict[str, Any]]:
        """Suggest sentiment-based actions."""
        actions = []
        
        # High-priority alerts
        high_alerts = [a for a in alerts if a['severity'] == 'high']
        
        if high_alerts:
            actions.append({
                'action': 'immediate_outreach',
                'priority': 'critical',
                'description': 'Schedule immediate call to address concerns',
                'timeline': 'within 24 hours'
            })
            actions.append({
                'action': 'executive_engagement',
                'priority': 'high',
                'description': 'Engage executive sponsor for relationship support',
                'timeline': 'within 48 hours'
            })
        
        # Declining trend
        if trend.get('direction') == 'declining':
            actions.append({
                'action': 'relationship_review',
                'priority': 'high',
                'description': 'Conduct relationship health review meeting',
                'timeline': 'within 1 week'
            })
            actions.append({
                'action': 'value_reinforcement',
                'priority': 'medium',
                'description': 'Reinforce value delivered and success stories',
                'timeline': 'within 2 weeks'
            })
        
        # Improving trend
        if trend.get('direction') == 'improving':
            actions.append({
                'action': 'momentum_leverage',
                'priority': 'medium',
                'description': 'Leverage positive momentum for expansion',
                'timeline': 'within 1 month'
            })
            actions.append({
                'action': 'testimonial_request',
                'priority': 'low',
                'description': 'Request testimonial or case study',
                'timeline': 'within 2 months'
            })
        
        # Default action
        if not actions:
            actions.append({
                'action': 'maintain_cadence',
                'priority': 'low',
                'description': 'Maintain current communication cadence',
                'timeline': 'ongoing'
            })
        
        return actions
    
    def _predict_sentiment(self, sender: str, trend: Dict) -> Dict[str, Any]:
        """Predict future sentiment based on trend."""
        if trend.get('trend') == 'insufficient_data':
            return {
                'prediction': 'unknown',
                'confidence': 0,
                'message': 'Insufficient data for prediction'
            }
        
        slope = trend.get('slope', 0)
        current_avg = trend.get('current_average', 0)
        
        # Simple linear projection
        predicted_score = current_avg + (slope * 5)  # Project 5 interactions ahead
        
        # Clamp to valid range
        predicted_score = max(-1, min(1, predicted_score))
        
        # Determine predicted label
        if predicted_score > 0.2:
            predicted_label = 'positive'
        elif predicted_score < -0.2:
            predicted_label = 'negative'
        else:
            predicted_label = 'neutral'
        
        # Calculate confidence based on data points and trend strength
        confidence = min(0.9, trend.get('trend_strength', 0) * (trend.get('data_points', 0) / 10))
        
        return {
            'prediction': predicted_label,
            'predicted_score': round(predicted_score, 3),
            'confidence': round(confidence, 2),
            'trend_continuation': 'likely' if confidence > 0.5 else 'uncertain',
            'message': f"Predicted {predicted_label} sentiment with {confidence*100:.0f}% confidence"
        }
    
    def _assess_relationship_health(self, trend: Dict, current_sentiment: Dict) -> str:
        """Assess overall relationship health."""
        trend_direction = trend.get('direction', 'unknown')
        current_score = current_sentiment.get('score', 0)
        
        if trend_direction == 'improving' and current_score > 0.3:
            return 'excellent'
        elif trend_direction == 'stable' and current_score > 0:
            return 'good'
        elif trend_direction == 'stable' and current_score >= -0.2:
            return 'fair'
        elif trend_direction == 'declining' or current_score < -0.3:
            return 'at_risk'
        else:
            return 'needs_attention'
    
    def _assess_reply_all_context(self, email: Dict, current_sentiment: Dict, trend: Dict) -> Dict[str, Any]:
        """Assess reply-all sentiment context."""
        cc_count = len(email.get('cc', []))
        to_count = len(email.get('to', []))
        
        multi_party = (cc_count + to_count) > 1
        
        # Sentiment considerations for reply-all
        if current_sentiment['label'] == 'negative' and multi_party:
            recommendation = 'Consider private response first to address concerns before group reply'
            caution_level = 'high'
        elif current_sentiment['label'] == 'positive' and multi_party:
            recommendation = 'Reply All to share positive sentiment with all stakeholders'
            caution_level = 'low'
        else:
            recommendation = 'Reply All appropriate - maintain transparency' if multi_party else 'Direct reply sufficient'
            caution_level = 'medium'
        
        return {
            'reply_all_recommended': multi_party,
            'recommendation': recommendation,
            'caution_level': caution_level,
            'sentiment_context': current_sentiment['label'],
            'stakeholder_count': cc_count + to_count
        }
    
    def get_sentiment_dashboard(self) -> Dict[str, Any]:
        """Generate sentiment dashboard."""
        total_contacts = len(self.sentiment_history)
        
        # Calculate overall sentiment distribution
        all_scores = []
        for sender, history in self.sentiment_history.items():
            if history:
                all_scores.append(history[-1]['sentiment_score'])
        
        if all_scores:
            avg_sentiment = statistics.mean(all_scores)
            positive_contacts = sum(1 for s in all_scores if s > 0.2)
            negative_contacts = sum(1 for s in all_scores if s < -0.2)
        else:
            avg_sentiment = 0
            positive_contacts = 0
            negative_contacts = 0
        
        return {
            'dashboard_generated': datetime.now().isoformat(),
            'total_contacts_tracked': total_contacts,
            'average_sentiment': round(avg_sentiment, 3),
            'positive_relationships': positive_contacts,
            'negative_relationships': negative_contacts,
            'neutral_relationships': total_contacts - positive_contacts - negative_contacts,
            'sentiment_health_grade': self._calculate_sentiment_grade(avg_sentiment)
        }
    
    def _calculate_sentiment_grade(self, avg_sentiment: float) -> str:
        """Calculate sentiment health grade."""
        if avg_sentiment >= 0.6:
            return 'A+ (Excellent)'
        elif avg_sentiment >= 0.3:
            return 'A (Very Good)'
        elif avg_sentiment >= 0.1:
            return 'B (Good)'
        elif avg_sentiment >= -0.1:
            return 'C (Neutral)'
        elif avg_sentiment >= -0.3:
            return 'D (Needs Improvement)'
        else:
            return 'F (Critical)'


def process_sentiment_evolution(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for sentiment evolution tracking."""
    tracker = SentimentEvolutionTracker()
    return tracker.track_sentiment_evolution(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'longtime.client@company.com',
        'subject': 'Concerned about recent service issues',
        'body': 'Hi team, I\'m quite frustrated with the recurring issues we\'ve been experiencing. This is the third time this month and it\'s becoming unacceptable. We need to discuss this urgently as it\'s affecting our operations significantly.',
        'date': '2024-01-15T11:00:00',
        'cc': ['manager@company.com', 'support@company.com']
    }
    
    context = {
        'is_existing_customer': True,
        'relationship_age_months': 24
    }
    
    result = process_sentiment_evolution(test_email, context)
    print(json.dumps(result, indent=2))

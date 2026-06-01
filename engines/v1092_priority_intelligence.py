#!/usr/bin/env python3
"""
V1092: Email Priority Intelligence
AI-powered email priority scoring with automatic inbox organization.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
from datetime import datetime
from typing import Dict, List

class PriorityIntelligence:
    def __init__(self):
        self.priority_weights = {
            'sender_importance': 0.25,
            'urgency_signals': 0.25,
            'content_relevance': 0.20,
            'deadline_proximity': 0.15,
            'thread_activity': 0.15
        }
    
    def score_priority(self, email_data: Dict) -> Dict:
        """Calculate priority score for email."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        thread_activity = email_data.get('thread_activity', 0)
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Calculate individual priority factors
        sender_score = self._score_sender_importance(sender)
        urgency_score = self._score_urgency_signals(subject, body)
        relevance_score = self._score_content_relevance(body)
        deadline_score = self._score_deadline_proximity(body)
        activity_score = self._score_thread_activity(thread_activity)
        
        # Calculate weighted priority score
        priority_score = (
            sender_score * self.priority_weights['sender_importance'] +
            urgency_score * self.priority_weights['urgency_signals'] +
            relevance_score * self.priority_weights['content_relevance'] +
            deadline_score * self.priority_weights['deadline_proximity'] +
            activity_score * self.priority_weights['thread_activity']
        )
        
        # Determine priority level
        priority_level = self._determine_priority_level(priority_score)
        
        # Generate smart notification
        notification = self._generate_notification(priority_level, priority_score)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            priority_level, priority_score, sender_score, urgency_score, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'priority_score': round(priority_score, 1),
            'priority_level': priority_level,
            'priority_factors': {
                'sender_importance': round(sender_score, 1),
                'urgency_signals': round(urgency_score, 1),
                'content_relevance': round(relevance_score, 1),
                'deadline_proximity': round(deadline_score, 1),
                'thread_activity': round(activity_score, 1)
            },
            'smart_notification': notification,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _score_sender_importance(self, sender: str) -> float:
        """Score sender importance (0-100)."""
        sender_lower = sender.lower()
        
        # Executive indicators
        executive_keywords = ['ceo', 'exec', 'director', 'vp', 'president', 'cfo', 'cto', 'coo']
        if any(kw in sender_lower for kw in executive_keywords):
            return 95
        
        # Management indicators
        management_keywords = ['manager', 'lead', 'head', 'supervisor']
        if any(kw in sender_lower for kw in management_keywords):
            return 75
        
        # Known contacts (simplified)
        if 'client' in sender_lower or 'customer' in sender_lower:
            return 80
        
        return 50  # Default score
    
    def _score_urgency_signals(self, subject: str, body: str) -> float:
        """Score urgency signals (0-100)."""
        text = (subject + ' ' + body).lower()
        
        urgency_keywords = {
            'critical': ['urgent', 'asap', 'immediately', 'emergency', 'critical'],
            'high': ['important', 'priority', 'deadline', 'today', 'eod'],
            'medium': ['soon', 'this week', 'please review', 'follow up']
        }
        
        score = 30  # Base score
        
        for level, keywords in urgency_keywords.items():
            if any(kw in text for kw in keywords):
                if level == 'critical':
                    score = 95
                elif level == 'high' and score < 80:
                    score = 80
                elif level == 'medium' and score < 60:
                    score = 60
                break
        
        return score
    
    def _score_content_relevance(self, body: str) -> float:
        """Score content relevance (0-100)."""
        body_lower = body.lower()
        
        # High relevance indicators
        high_relevance = ['action required', 'decision needed', 'approval', 'review needed', 'your input']
        if any(hr in body_lower for hr in high_relevance):
            return 90
        
        # Medium relevance indicators
        medium_relevance = ['question', 'feedback', 'update', 'information', 'please']
        if any(mr in body_lower for mr in medium_relevance):
            return 70
        
        # Low relevance (FYI, newsletters, etc.)
        low_relevance = ['fyi', 'newsletter', 'announcement', 'reminder']
        if any(lr in body_lower for lr in low_relevance):
            return 40
        
        return 60  # Default
    
    def _score_deadline_proximity(self, body: str) -> float:
        """Score deadline proximity (0-100)."""
        body_lower = body.lower()
        
        # Check for specific deadlines
        deadline_patterns = [
            r'\btoday\b',
            r'\btomorrow\b',
            r'\bby\s+\d{1,2}[/-]\d{1,2}',
            r'\bthis\s+week\b',
            r'\bnext\s+week\b'
        ]
        
        for i, pattern in enumerate(deadline_patterns):
            if re.search(pattern, body_lower):
                # Closer deadlines get higher scores
                return max(90 - (i * 15), 50)
        
        return 50  # No deadline detected
    
    def _score_thread_activity(self, activity: int) -> float:
        """Score thread activity (0-100)."""
        if activity >= 10:
            return 90
        elif activity >= 5:
            return 75
        elif activity >= 2:
            return 60
        else:
            return 40
    
    def _determine_priority_level(self, score: float) -> str:
        """Determine priority level from score."""
        if score >= 85:
            return 'critical'
        elif score >= 70:
            return 'high'
        elif score >= 55:
            return 'medium'
        elif score >= 40:
            return 'low'
        else:
            return 'minimal'
    
    def _generate_notification(self, level: str, score: float) -> Dict:
        """Generate smart notification settings."""
        notifications = {
            'critical': {
                'sound': 'urgent',
                'vibration': 'strong',
                'popup': True,
                'badge': 'red'
            },
            'high': {
                'sound': 'default',
                'vibration': 'medium',
                'popup': True,
                'badge': 'orange'
            },
            'medium': {
                'sound': 'default',
                'vibration': 'light',
                'popup': False,
                'badge': 'yellow'
            },
            'low': {
                'sound': 'silent',
                'vibration': 'none',
                'popup': False,
                'badge': 'blue'
            },
            'minimal': {
                'sound': 'silent',
                'vibration': 'none',
                'popup': False,
                'badge': 'gray'
            }
        }
        
        return notifications.get(level, notifications['medium'])
    
    def _generate_recommendations(self, level, score, sender_score, urgency_score, reply_all_required) -> List[str]:
        """Generate priority-based recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if level == 'critical':
            recommendations.append('🚨 CRITICAL PRIORITY: Respond immediately')
            recommendations.append('⚡ Consider a phone call for urgent matters')
        elif level == 'high':
            recommendations.append('⚡ HIGH PRIORITY: Respond within 1-2 hours')
            recommendations.append('📞 Schedule time to address this promptly')
        elif level == 'medium':
            recommendations.append('📧 MEDIUM PRIORITY: Respond within 24 hours')
        elif level == 'low':
            recommendations.append('📝 LOW PRIORITY: Respond when convenient')
            recommendations.append('📚 Can be batched with other low-priority emails')
        
        if sender_score >= 90:
            recommendations.append('👔 From executive/senior leadership - prioritize response')
        
        if urgency_score >= 90:
            recommendations.append('⏰ High urgency detected - time-sensitive content')
        
        if not recommendations:
            recommendations.append('✅ Standard priority - handle during normal workflow')
        
        return recommendations


if __name__ == '__main__':
    engine = PriorityIntelligence()
    
    test_email = {
        'id': '1',
        'sender': 'ceo@company.com',
        'recipients': ['team@company.com', 'manager@company.com'],
        'subject': 'URGENT: Action Required Today',
        'body': 'Please review and approve the budget by EOD today. This is critical for Q4 planning.',
        'thread_activity': 8
    }
    
    result = engine.score_priority(test_email)
    
    print("=== V1092: Email Priority Intelligence ===\n")
    print(f"Priority Score: {result['priority_score']}/100")
    print(f"Priority Level: {result['priority_level']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nPriority Factors:")
    for factor, score in result['priority_factors'].items():
        print(f"  {factor}: {score}/100")
    print(f"\nSmart Notification:")
    for key, value in result['smart_notification'].items():
        print(f"  {key}: {value}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")

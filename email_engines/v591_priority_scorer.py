#!/usr/bin/env python3
"""
V591 - Email Priority Scorer
AI-powered email priority scoring based on sender, content, and context.
Enforces reply-all for all communications.
"""
import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional

class EmailPriorityScorer:
    def __init__(self):
        self.reply_all_enforced = True
        self.priority_keywords = {
            'critical': ['urgent', 'emergency', 'asap', 'immediately', 'critical', 'deadline today'],
            'high': ['important', 'priority', 'soon', 'quickly', 'time-sensitive'],
            'medium': ['when possible', 'at your convenience', 'no rush'],
            'low': ['fyi', 'informational', 'newsletter']
        }
        self.sender_weights = {
            'executive': 1.5,
            'client': 1.3,
            'team_lead': 1.2,
            'colleague': 1.0,
            'external': 0.8
        }
    
    def score_email(self, email: Dict, user_context: Optional[Dict] = None) -> Dict:
        """Score email priority from 0-100"""
        # Content analysis
        content_score = self._analyze_content(email)
        
        # Sender analysis
        sender_score = self._analyze_sender(email, user_context)
        
        # Context analysis
        context_score = self._analyze_context(email, user_context)
        
        # Urgency detection
        urgency_score = self._detect_urgency(email)
        
        # Calculate final score
        final_score = self._calculate_final_score(
            content_score, sender_score, context_score, urgency_score
        )
        
        # Determine priority level
        priority_level = self._determine_priority_level(final_score)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(email, final_score, priority_level)
        
        return {
            'engine': 'V591_Email_Priority_Scorer',
            'timestamp': datetime.now().isoformat(),
            'email_id': email.get('id', 'unknown'),
            'priority_score': round(final_score, 2),
            'priority_level': priority_level,
            'score_breakdown': {
                'content_score': round(content_score, 2),
                'sender_score': round(sender_score, 2),
                'context_score': round(context_score, 2),
                'urgency_score': round(urgency_score, 2)
            },
            'recommendations': recommendations,
            'reply_all_enforced': self.reply_all_enforced,
            'all_recipients': email.get('to', []) + email.get('cc', [])
        }
    
    def _analyze_content(self, email: Dict) -> float:
        """Analyze email content for priority indicators"""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        full_text = f"{subject} {body}"
        
        score = 50.0  # Base score
        
        # Check for priority keywords
        for level, keywords in self.priority_keywords.items():
            if any(kw in full_text for kw in keywords):
                if level == 'critical':
                    score += 40
                elif level == 'high':
                    score += 25
                elif level == 'low':
                    score -= 20
                break
        
        # Check for questions (higher priority)
        if '?' in body:
            score += 10
        
        # Check for action items
        action_words = ['please', 'need', 'require', 'must', 'should']
        if any(word in full_text for word in action_words):
            score += 15
        
        # Check for attachments (slightly higher priority)
        if email.get('attachments'):
            score += 5
        
        return min(100, max(0, score))
    
    def _analyze_sender(self, email: Dict, user_context: Optional[Dict]) -> float:
        """Analyze sender importance"""
        sender = email.get('from', '').lower()
        
        score = 50.0  # Base score
        
        if not user_context:
            return score
        
        # Check if sender is in VIP list
        vip_senders = user_context.get('vip_senders', [])
        if any(vip in sender for vip in vip_senders):
            score += 30
        
        # Check sender type
        if any(exec_title in sender for exec_title in ['ceo', 'cto', 'cfo', 'president', 'director']):
            score += 25
        elif 'client' in sender or 'customer' in sender:
            score += 20
        elif 'manager' in sender or 'lead' in sender:
            score += 15
        
        # Check relationship strength
        relationship = user_context.get('sender_relationships', {}).get(sender, 'neutral')
        if relationship == 'strong':
            score += 15
        elif relationship == 'weak':
            score -= 10
        
        return min(100, max(0, score))
    
    def _analyze_context(self, email: Dict, user_context: Optional[Dict]) -> float:
        """Analyze contextual factors"""
        score = 50.0  # Base score
        
        if not user_context:
            return score
        
        # Check if part of important thread
        thread_id = email.get('thread_id')
        important_threads = user_context.get('important_threads', [])
        if thread_id and thread_id in important_threads:
            score += 25
        
        # Check if related to current projects
        subject = email.get('subject', '').lower()
        current_projects = user_context.get('current_projects', [])
        if any(project in subject for project in current_projects):
            score += 20
        
        # Check time of day (emails during work hours are higher priority)
        try:
            email_time = datetime.fromisoformat(email.get('timestamp', '').replace('Z', '+00:00'))
            hour = email_time.hour
            if 9 <= hour <= 17:  # Business hours
                score += 10
            elif 7 <= hour <= 8 or 18 <= hour <= 20:  # Extended hours
                score += 5
        except:
            pass
        
        return min(100, max(0, score))
    
    def _detect_urgency(self, email: Dict) -> float:
        """Detect urgency indicators"""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        full_text = f"{subject} {body}"
        
        score = 0.0
        
        # Time-based urgency
        time_patterns = [
            (r'today', 30),
            (r'tomorrow', 25),
            (r'this week', 20),
            (r'asap', 35),
            (r'immediately', 40),
            (r'urgent', 35),
            (r'deadline', 30)
        ]
        
        for pattern, points in time_patterns:
            if re.search(pattern, full_text):
                score += points
        
        # Exclamation marks (moderate indicator)
        exclamation_count = full_text.count('!')
        if exclamation_count > 2:
            score += min(15, exclamation_count * 3)
        
        # ALL CAPS (strong indicator)
        caps_words = re.findall(r'\b[A-Z]{4,}\b', full_text)
        if len(caps_words) > 2:
            score += 20
        
        return min(100, score)
    
    def _calculate_final_score(self, content: float, sender: float, context: float, urgency: float) -> float:
        """Calculate weighted final score"""
        weights = {
            'content': 0.35,
            'sender': 0.25,
            'context': 0.20,
            'urgency': 0.20
        }
        
        final_score = (
            content * weights['content'] +
            sender * weights['sender'] +
            context * weights['context'] +
            urgency * weights['urgency']
        )
        
        return final_score
    
    def _determine_priority_level(self, score: float) -> str:
        """Determine priority level from score"""
        if score >= 80:
            return 'critical'
        elif score >= 65:
            return 'high'
        elif score >= 45:
            return 'medium'
        elif score >= 25:
            return 'low'
        else:
            return 'informational'
    
    def _generate_recommendations(self, email: Dict, score: float, level: str) -> List[Dict]:
        """Generate priority-based recommendations"""
        recommendations = []
        
        if level == 'critical':
            recommendations.append({
                'type': 'immediate_action',
                'message': 'This email requires immediate attention',
                'action': 'Respond within 1 hour'
            })
        elif level == 'high':
            recommendations.append({
                'type': 'priority_action',
                'message': 'High priority email detected',
                'action': 'Respond within 4 hours'
            })
        elif level == 'medium':
            recommendations.append({
                'type': 'standard_action',
                'message': 'Standard priority email',
                'action': 'Respond within 24 hours'
            })
        else:
            recommendations.append({
                'type': 'low_priority',
                'message': 'Low priority - can be addressed later',
                'action': 'Schedule for later review'
            })
        
        # Add smart suggestions based on content
        body = email.get('body', '').lower()
        if 'meeting' in body or 'call' in body:
            recommendations.append({
                'type': 'scheduling',
                'message': 'Meeting request detected',
                'action': 'Check calendar and respond with availability'
            })
        
        if 'question' in body or '?' in body:
            recommendations.append({
                'type': 'response_needed',
                'message': 'Question detected - response expected',
                'action': 'Provide clear, concise answer'
            })
        
        return recommendations

if __name__ == "__main__":
    scorer = EmailPriorityScorer()
    test_email = {
        'id': 'test-591',
        'from': 'ceo@company.com',
        'to': ['employee@company.com'],
        'subject': 'URGENT: Client Meeting Today',
        'body': 'We need to discuss the client proposal ASAP. Please review the attached document and be ready for a call at 2 PM today.',
        'attachments': [{'filename': 'proposal.pdf'}],
        'timestamp': '2024-01-15T09:00:00Z'
    }
    user_context = {
        'vip_senders': ['ceo@company.com'],
        'current_projects': ['client proposal'],
        'important_threads': ['thread-123']
    }
    result = scorer.score_email(test_email, user_context)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V246: Email Priority Scorer Engine
Automatically score emails 1-100 based on sender importance, urgency keywords,
and response time expectations. Flags critical emails for immediate attention.
CRITICAL: Enforces reply-all for multi-recipient emails.
"""
import json
import re
from datetime import datetime
from typing import Dict, List


class EmailPriorityScorer:
    """Score emails 1-100 based on multiple priority factors."""
    
    # Urgency keywords with weights
    URGENCY_KEYWORDS = {
        'critical': 25, 'urgent': 20, 'asap': 18, 'immediately': 18,
        'emergency': 25, 'deadline': 15, 'today': 12, 'tonight': 15,
        'now': 15, 'important': 10, 'priority': 12, 'rush': 15
    }
    
    # Sender importance tiers
    SENDER_TIERS = {
        'ceo': 30, 'cto': 28, 'cfo': 28, 'coo': 28, 'president': 28,
        'vp': 25, 'director': 22, 'manager': 18, 'lead': 15,
        'client': 20, 'customer': 18, 'partner': 15,
        'team': 10, 'colleague': 8
    }
    
    def __init__(self):
        self.user_learning_data = {}
    
    def score_email(self, email: Dict, recipients: List[str] = None) -> Dict:
        """
        Score email priority from 1-100.
        CRITICAL: Always check for multi-recipient and enforce reply-all.
        """
        score = 0
        factors = []
        
        # Factor 1: Urgency keywords in subject and body
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        keyword_score = 0
        matched_keywords = []
        
        for keyword, weight in self.URGENCY_KEYWORDS.items():
            if keyword in text:
                keyword_score += weight
                matched_keywords.append(keyword)
        
        score += min(keyword_score, 35)  # Cap at 35 points
        if matched_keywords:
            factors.append(f"Urgency keywords: {', '.join(matched_keywords)}")
        
        # Factor 2: Sender importance
        sender = email.get('from', '').lower()
        sender_score = 0
        
        for role, weight in self.SENDER_TIERS.items():
            if role in sender:
                sender_score = max(sender_score, weight)
                factors.append(f"Sender role: {role}")
                break
        
        score += sender_score
        
        # Factor 3: Email metadata
        if email.get('flagged'):
            score += 15
            factors.append("Email flagged")
        
        if email.get('attachments'):
            score += 5
            factors.append("Has attachments")
        
        # Factor 4: Response time expectation
        if any(word in text for word in ['reply', 'respond', 'answer', 'feedback']):
            score += 10
            factors.append("Response requested")
        
        # Cap score at 100
        score = min(score, 100)
        
        # Determine priority level
        if score >= 80:
            priority_level = 'critical'
            action = 'Requires immediate attention within 15 minutes'
        elif score >= 60:
            priority_level = 'high'
            action = 'Respond within 1 hour'
        elif score >= 40:
            priority_level = 'medium'
            action = 'Respond within 4 hours'
        elif score >= 20:
            priority_level = 'low'
            action = 'Respond within 24 hours'
        else:
            priority_level = 'minimal'
            action = 'Can be reviewed during next email batch'
        
        # CRITICAL: Check for multi-recipient and enforce reply-all
        reply_all_required = False
        recipient_count = len(recipients) if recipients else 0
        
        if recipient_count > 1:
            reply_all_required = True
            factors.append(f"Multi-recipient: {recipient_count} recipients")
        
        # Apply user learning (if available)
        if sender in self.user_learning_data:
            learned_adjustment = self.user_learning_data[sender].get('adjustment', 0)
            score = max(0, min(100, score + learned_adjustment))
            if learned_adjustment != 0:
                factors.append(f"User learning adjustment: {learned_adjustment:+d}")
        
        return {
            'email_id': email.get('id', 'unknown'),
            'score': score,
            'priority_level': priority_level,
            'recommended_action': action,
            'factors': factors,
            'reply_all_required': reply_all_required,
            'recipient_count': recipient_count,
            'timestamp': datetime.now().isoformat()
        }
    
    def learn_from_user_action(self, email_id: str, user_action: str, original_score: int):
        """Learn from user behavior to improve future scoring."""
        # If user marked as important but score was low, increase future scores for that sender
        if user_action == 'marked_important' and original_score < 50:
            adjustment = 20
        elif user_action == 'ignored' and original_score > 70:
            adjustment = -15
        else:
            adjustment = 0
        
        # Store learning data (in production, use persistent storage)
        self.user_learning_data[email_id] = {
            'adjustment': adjustment,
            'user_action': user_action,
            'original_score': original_score,
            'timestamp': datetime.now().isoformat()
        }
    
    def batch_score(self, emails: List[Dict], recipients_map: Dict[str, List[str]] = None) -> List[Dict]:
        """Score multiple emails and sort by priority."""
        scored_emails = []
        
        for email in emails:
            email_id = email.get('id', 'unknown')
            recipients = recipients_map.get(email_id, []) if recipients_map else []
            scored = self.score_email(email, recipients)
            scored_emails.append(scored)
        
        # Sort by score descending
        scored_emails.sort(key=lambda x: x['score'], reverse=True)
        
        return scored_emails


if __name__ == '__main__':
    # Test the priority scorer
    scorer = EmailPriorityScorer()
    
    test_emails = [
        {
            'id': 'email_001',
            'from': 'ceo@company.com',
            'subject': 'URGENT: Board meeting preparation',
            'body': 'Please prepare the Q3 financials ASAP for tomorrow\'s board meeting.',
            'flagged': True
        },
        {
            'id': 'email_002',
            'from': 'client@major-corp.com',
            'subject': 'Project deadline reminder',
            'body': 'Just a reminder that the project deadline is today at 5pm.',
            'attachments': ['requirements.pdf']
        },
        {
            'id': 'email_003',
            'from': 'newsletter@tech-blog.com',
            'subject': 'Weekly tech digest',
            'body': 'Here are this week\'s top tech stories...'
        },
        {
            'id': 'email_004',
            'from': 'manager@company.com',
            'subject': 'Team meeting notes',
            'body': 'Please review the attached meeting notes and provide feedback.'
        }
    ]
    
    recipients_map = {
        'email_001': ['cfo@company.com', 'coo@company.com', 'assistant@company.com'],
        'email_002': ['pm@company.com'],
        'email_003': ['user@company.com'],
        'email_004': ['team@company.com', 'manager@company.com', 'lead@company.com']
    }
    
    print("=== V246: Email Priority Scorer Test ===\n")
    scored = scorer.batch_score(test_emails, recipients_map)
    
    for i, result in enumerate(scored, 1):
        print(f"{i}. Score: {result['score']}/100 - {result['priority_level'].upper()}")
        print(f"   Email: {result['email_id']}")
        print(f"   Action: {result['recommended_action']}")
        print(f"   Reply-All Required: {result['reply_all_required']}")
        print(f"   Factors: {', '.join(result['factors'][:3])}")
        print()

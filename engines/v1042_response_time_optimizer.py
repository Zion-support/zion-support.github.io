#!/usr/bin/env python3
"""V1042: Email Response Time Optimizer
Analyzes response time patterns by sender/importance.
Predicts optimal response windows.
Auto-prioritizes inbox based on SLA requirements.
Sends 'acknowledged' auto-replies for urgent emails.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime, timedelta
from collections import defaultdict
import math

class ResponseTimeOptimizer:
    def __init__(self):
        self.response_history = defaultdict(list)
        self.sender_priority = {}
        self.sla_rules = {
            'vip': {'max_response_minutes': 30, 'label': 'VIP Client'},
            'enterprise': {'max_response_minutes': 60, 'label': 'Enterprise'},
            'standard': {'max_response_minutes': 240, 'label': 'Standard'},
            'cold_lead': {'max_response_minutes': 480, 'label': 'Cold Lead'},
            'internal': {'max_response_minutes': 15, 'label': 'Internal Team'}
        }
        self.patterns = {}
        self.auto_ack_queue = []
    
    def analyze_incoming_email(self, email_data):
        """Analyze incoming email and determine response priority and timing."""
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        received_at = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        # Determine urgency level
        urgency = self._calculate_urgency(subject, body, sender)
        
        # Determine sender tier
        sender_tier = self._classify_sender(sender)
        
        # Calculate SLA deadline
        sla_minutes = self.sla_rules.get(sender_tier, self.sla_rules['standard'])['max_response_minutes']
        if urgency == 'CRITICAL':
            sla_minutes = min(sla_minutes, 15)
        elif urgency == 'HIGH':
            sla_minutes = min(sla_minutes, 60)
        
        received_dt = datetime.fromisoformat(received_at.replace('Z', '+00:00').split('+')[0])
        sla_deadline = received_dt + timedelta(minutes=sla_minutes)
        
        # Predict optimal response time based on patterns
        optimal_window = self._predict_optimal_response_time(sender, urgency)
        
        # Check if auto-acknowledgment needed
        auto_ack = urgency in ('CRITICAL', 'HIGH') and sla_minutes <= 30
        
        if auto_ack:
            self.auto_ack_queue.append({
                'sender': sender,
                'recipients': recipients,
                'subject': subject,
                'urgency': urgency,
                'message': self._generate_ack_message(urgency, sender_tier, reply_all)
            })
        
        # Record for pattern analysis
        self.response_history[sender].append({
            'received_at': received_at,
            'urgency': urgency,
            'sla_minutes': sla_minutes,
            'sla_deadline': sla_deadline.isoformat(),
            'reply_all_required': reply_all
        })
        
        return {
            'email_id': email_data.get('id'),
            'sender': sender,
            'sender_tier': sender_tier,
            'urgency': urgency,
            'priority_score': self._calculate_priority_score(urgency, sender_tier),
            'sla_deadline': sla_deadline.isoformat(),
            'sla_minutes': sla_minutes,
            'optimal_response_window': optimal_window,
            'auto_acknowledgment': auto_ack,
            'reply_all_required': reply_all,
            'estimated_response_time': f"{max(5, sla_minutes // 2)} minutes",
            'actions': self._generate_actions(urgency, sender_tier, reply_all),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _calculate_urgency(self, subject, body, sender):
        """Calculate email urgency level."""
        text = (subject + ' ' + body).lower()
        
        critical_keywords = ['urgent', 'emergency', 'asap', 'immediately', 'critical',
                           'production down', 'outage', 'breach', 'data loss', 'fire']
        high_keywords = ['important', 'deadline', 'priority', 'escalation', 'complaint',
                        'dissatisfied', 'cancel', 'refund', 'legal']
        medium_keywords = ['question', 'help', 'support', 'issue', 'problem', 'concern']
        
        for kw in critical_keywords:
            if kw in text:
                return 'CRITICAL'
        for kw in high_keywords:
            if kw in text:
                return 'HIGH'
        for kw in medium_keywords:
            if kw in text:
                return 'MEDIUM'
        
        return 'LOW'
    
    def _classify_sender(self, sender):
        """Classify sender into priority tier."""
        sender_lower = sender.lower()
        
        if any(d in sender_lower for d in ['ceo', 'cto', 'cfo', 'president', 'director']):
            return 'vip'
        if any(d in sender_lower for d in ['enterprise', 'corp', 'inc', 'ltd']):
            return 'enterprise'
        if any(d in sender_lower for d in ['@ziontechgroup', 'internal', 'team']):
            return 'internal'
        
        # Check historical interaction count
        history = self.response_history.get(sender, [])
        if len(history) > 20:
            return 'enterprise'
        elif len(history) < 3:
            return 'cold_lead'
        
        return 'standard'
    
    def _calculate_priority_score(self, urgency, sender_tier):
        """Calculate numeric priority score (0-100)."""
        urgency_scores = {'CRITICAL': 40, 'HIGH': 30, 'MEDIUM': 20, 'LOW': 10}
        tier_scores = {'vip': 40, 'enterprise': 30, 'internal': 25, 'standard': 20, 'cold_lead': 10}
        
        return urgency_scores.get(urgency, 10) + tier_scores.get(sender_tier, 20)
    
    def _predict_optimal_response_time(self, sender, urgency):
        """Predict the best time to respond based on patterns."""
        now = datetime.now()
        hour = now.hour
        
        if urgency == 'CRITICAL':
            return 'Respond within 5-15 minutes regardless of time'
        elif urgency == 'HIGH':
            return 'Respond within 30-60 minutes'
        elif 9 <= hour <= 17:
            return 'Respond within 1-2 hours (business hours)'
        elif 17 <= hour <= 21:
            return 'Respond within 2-4 hours (extended hours)'
        else:
            return 'Acknowledge now, full response by 9 AM next business day'
    
    def _generate_ack_message(self, urgency, sender_tier, reply_all):
        """Generate auto-acknowledgment message."""
        if urgency == 'CRITICAL':
            msg = ("Thank you for reaching out. Your message has been flagged as CRITICAL "
                   "priority and our team has been immediately notified. You will receive "
                   "a detailed response within 15 minutes. For immediate assistance, "
                   "please call us at +1 302 464 0950.")
        else:
            msg = ("Thank you for your email. We have received your message and it is "
                   "being reviewed by our team. You can expect a detailed response "
                   "within the next hour. For urgent matters, please call +1 302 464 0950.")
        
        if reply_all:
            msg += "\n\n[This reply was sent to all recipients]"
        
        return msg
    
    def _generate_actions(self, urgency, sender_tier, reply_all):
        """Generate recommended actions for the email."""
        actions = []
        
        if urgency == 'CRITICAL':
            actions.append('🚨 IMMEDIATE: Notify team lead and escalate')
            actions.append('📞 Call the sender directly at earliest opportunity')
            actions.append('📝 Document the issue and resolution steps')
        elif urgency == 'HIGH':
            actions.append('⚡ Respond within 1 hour with detailed answer')
            actions.append('📋 Review previous interactions for context')
        else:
            actions.append('📧 Draft response within SLA window')
            actions.append('🔍 Research and prepare comprehensive answer')
        
        if reply_all:
            actions.append('👥 REPLY ALL: Ensure all recipients receive the response')
        
        if sender_tier == 'vip':
            actions.append('⭐ VIP treatment: Personalize response and offer direct line')
        
        return actions
    
    def get_inbox_priority_report(self):
        """Generate prioritized inbox report."""
        report = {
            'generated_at': datetime.now().isoformat(),
            'total_senders': len(self.response_history),
            'auto_ack_pending': len(self.auto_ack_queue),
            'sla_breaches': 0,
            'priority_queue': []
        }
        
        for sender, history in self.response_history.items():
            if history:
                latest = history[-1]
                report['priority_queue'].append({
                    'sender': sender,
                    'urgency': latest['urgency'],
                    'sla_deadline': latest['sla_deadline'],
                    'reply_all': latest['reply_all_required']
                })
        
        report['priority_queue'].sort(key=lambda x: x.get('urgency', 'LOW'), 
                                      reverse=True)
        
        return report


if __name__ == '__main__':
    optimizer = ResponseTimeOptimizer()
    
    test_emails = [
        {
            'id': 'e001', 'sender': 'ceo@bigclient.com',
            'recipients': ['kleber@ziontechgroup.com', 'support@ziontechgroup.com'],
            'subject': 'URGENT: Production system down',
            'body': 'Our production environment is completely down. This is critical and needs immediate attention!',
            'timestamp': '2026-05-30T14:30:00'
        },
        {
            'id': 'e002', 'sender': 'prospect@startup.io',
            'recipients': ['kleber@ziontechgroup.com'],
            'subject': 'Question about AI services',
            'body': 'Hi, I was wondering if you could help me understand your AI consulting services?',
            'timestamp': '2026-05-30T15:00:00'
        },
        {
            'id': 'e003', 'sender': 'team@ziontechgroup.com',
            'recipients': ['kleber@ziontechgroup.com', 'dev@ziontechgroup.com', 'qa@ziontechgroup.com'],
            'subject': 'Sprint review meeting notes',
            'body': 'Here are the notes from today\'s sprint review. Please review and provide feedback.',
            'timestamp': '2026-05-30T16:00:00'
        }
    ]
    
    print("=== V1042: Email Response Time Optimizer ===\n")
    
    for email in test_emails:
        result = optimizer.analyze_incoming_email(email)
        print(f"Email: {email['subject']}")
        print(f"  Urgency: {result['urgency']} | Tier: {result['sender_tier']}")
        print(f"  Priority Score: {result['priority_score']}/80")
        print(f"  SLA Deadline: {result['sla_deadline']}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print(f"  Auto-Ack: {'YES' if result['auto_acknowledgment'] else 'NO'}")
        print(f"  Actions: {result['actions']}")
        print()
    
    report = optimizer.get_inbox_priority_report()
    print(f"=== Inbox Priority Report ===")
    print(f"Total senders tracked: {report['total_senders']}")
    print(f"Auto-ack pending: {report['auto_ack_pending']}")

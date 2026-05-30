#!/usr/bin/env python3
"""
V155 - AI Email Crisis Communication Manager
Detects crisis situations in emails, generates appropriate responses,
coordinates team communications, and manages stakeholder notifications.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
from enum import Enum


class CrisisType(Enum):
    SERVICE_OUTAGE = "service_outage"
    SECURITY_BREACH = "security_breach"
    DATA_LOSS = "data_loss"
    CUSTOMER_COMPLAINT = "customer_complaint"
    PR_CRISIS = "pr_crisis"
    LEGAL_ISSUE = "legal_issue"
    FINANCIAL_ISSUE = "financial_issue"
    EMPLOYEE_CRISIS = "employee_crisis"
    SUPPLY_CHAIN = "supply_chain"
    PRODUCT_RECALL = "product_recall"


class CrisisCommunicationManager:
    """AI-powered crisis communication manager with response orchestration."""
    
    def __init__(self):
        self.crisis_history = []
        self.response_templates = self._build_response_templates()
        self.stakeholder_registry = defaultdict(list)
        self.escalation_chains = self._build_escalation_chains()
        self.communication_log = []
        
        self.crisis_indicators = {
            'service_outage': ['down', 'not working', 'unavailable', 'error', '503', 'timeout', 'cannot access', 'broken'],
            'security_breach': ['breach', 'hacked', 'compromised', 'unauthorized access', 'data leak', 'phishing', 'malware'],
            'data_loss': ['lost data', 'deleted', 'corrupted', 'missing files', 'backup failed', 'recovery'],
            'customer_complaint': ['unacceptable', 'terrible', 'worst', 'demand refund', 'lawyer', 'sue', 'BBB', 'complaint'],
            'pr_crisis': ['media', 'press', 'viral', 'social media', 'public statement', 'reputation'],
            'legal_issue': ['lawsuit', 'legal action', 'attorney', 'court', 'regulatory', 'compliance violation'],
            'financial_issue': ['overcharged', 'billing error', 'fraud', 'unauthorized charge', 'refund'],
            'product_recall': ['defective', 'unsafe', 'recall', 'hazard', 'injury', 'warning']
        }
    
    def _build_response_templates(self) -> Dict[str, Dict]:
        """Build crisis response templates."""
        return {
            'service_outage': {
                'initial_ack': 'We are aware of the service disruption affecting {service} and our team is actively investigating. We will provide updates every {interval} minutes.',
                'status_update': 'Update on {service}: Our team has identified the root cause as {cause}. Estimated resolution time: {eta}.',
                'resolution': 'The issue affecting {service} has been resolved. We apologize for the inconvenience and are implementing measures to prevent recurrence.',
                'postmortem': 'Here is our detailed postmortem for the {date} incident affecting {service}. Root cause: {root_cause}. Preventive measures: {measures}.'
            },
            'security_breach': {
                'initial_ack': 'We have detected a potential security incident and have activated our incident response team. We are investigating and will notify affected parties within {hours} hours as required by {regulation}.',
                'affected_notification': 'We are writing to inform you that your data may have been affected by a security incident on {date}. Here is what happened, what data was involved, and what we are doing.',
                'resolution': 'The security incident has been contained. All affected systems have been secured and additional security measures have been implemented.'
            },
            'customer_complaint': {
                'escalation': 'I sincerely apologize for your experience. I am personally taking ownership of this issue and will ensure it is resolved to your satisfaction.',
                'resolution_offer': 'To make this right, I would like to offer {resolution}. I understand this does not fully compensate for your experience, but I hope it demonstrates our commitment to you.',
                'follow_up': 'I wanted to follow up on our previous conversation to ensure your issue has been fully resolved. Please let me know if there is anything else I can do.'
            }
        }
    
    def _build_escalation_chains(self) -> Dict[str, List[str]]:
        """Build escalation chains for different crisis types."""
        return {
            'service_outage': ['on_call_engineer', 'engineering_manager', 'vp_engineering', 'cto'],
            'security_breach': ['security_team', 'ciso', 'legal_team', 'ceo', 'pr_team'],
            'customer_complaint': ['support_lead', 'customer_success_manager', 'vp_customer_success', 'ceo'],
            'pr_crisis': ['pr_team', 'marketing_vp', 'legal_team', 'ceo'],
            'legal_issue': ['legal_team', 'general_counsel', 'ceo', 'board'],
            'data_loss': ['engineering_lead', 'cto', 'affected_customers', 'legal_team']
        }
    
    def detect_crisis(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Detect and classify crisis situations from emails."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        sender = email.get('from', '')
        
        # Detect crisis type
        crisis_type, severity = self._classify_crisis(content)
        
        if not crisis_type:
            return {
                'is_crisis': False,
                'timestamp': datetime.now().isoformat(),
                'message': 'No crisis detected'
            }
        
        # Assess severity
        urgency = self._assess_urgency(content, crisis_type, severity)
        
        # Identify affected parties
        affected = self._identify_affected_parties(email, crisis_type)
        
        # Determine escalation path
        escalation = self._determine_escalation(crisis_type, urgency)
        
        # Generate response
        response = self._generate_crisis_response(crisis_type, urgency, email)
        
        # Communication plan
        comm_plan = self._create_communication_plan(crisis_type, urgency, affected)
        
        # Timeline
        timeline = self._create_response_timeline(crisis_type, urgency)
        
        return {
            'crisis_id': f"crisis_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'is_crisis': True,
            'timestamp': datetime.now().isoformat(),
            'crisis_type': crisis_type,
            'severity': severity,
            'urgency': urgency,
            'affected_parties': affected,
            'escalation_chain': escalation,
            'recommended_response': response,
            'communication_plan': comm_plan,
            'response_timeline': timeline,
            'reply_all_required': True,
            'legal_review_needed': crisis_type in ['security_breach', 'legal_issue', 'data_loss'],
            'executive_notification': urgency in ['critical', 'high']
        }
    
    def _classify_crisis(self, content: str) -> tuple:
        """Classify the type and severity of crisis."""
        scores = {}
        
        for crisis_type, indicators in self.crisis_indicators.items():
            score = sum(1 for ind in indicators if ind in content)
            if score > 0:
                scores[crisis_type] = score
        
        if not scores:
            return None, None
        
        crisis_type = max(scores, key=scores.get)
        severity_score = scores[crisis_type]
        
        if severity_score >= 4:
            severity = 'critical'
        elif severity_score >= 3:
            severity = 'high'
        elif severity_score >= 2:
            severity = 'medium'
        else:
            severity = 'low'
        
        return crisis_type, severity
    
    def _assess_urgency(self, content: str, crisis_type: str, severity: str) -> str:
        """Assess overall urgency level."""
        urgency_score = 0
        
        # Severity contributes
        severity_scores = {'critical': 40, 'high': 30, 'medium': 20, 'low': 10}
        urgency_score += severity_scores.get(severity, 10)
        
        # Crisis type contributes
        high_urgency_types = ['security_breach', 'service_outage', 'data_loss']
        if crisis_type in high_urgency_types:
            urgency_score += 20
        
        # Urgency keywords
        urgent_words = ['urgent', 'immediately', 'asap', 'critical', 'emergency', 'now']
        urgency_score += sum(5 for w in urgent_words if w in content)
        
        # ALL CAPS indicates urgency
        if any(w.isupper() and len(w) > 3 for w in content.split()):
            urgency_score += 10
        
        if urgency_score >= 60:
            return 'critical'
        elif urgency_score >= 40:
            return 'high'
        elif urgency_score >= 20:
            return 'medium'
        return 'low'
    
    def _identify_affected_parties(self, email: Dict[str, Any], crisis_type: str) -> List[Dict[str, str]]:
        """Identify parties affected by the crisis."""
        affected = []
        
        # The sender is always affected
        affected.append({
            'email': email.get('from', ''),
            'role': 'reporter',
            'notification_priority': 1
        })
        
        # Check CC/BCC
        for cc in email.get('cc', []):
            affected.append({
                'email': cc,
                'role': 'stakeholder',
                'notification_priority': 2
            })
        
        # Add internal teams based on crisis type
        team_map = {
            'service_outage': [{'team': 'engineering', 'priority': 1}],
            'security_breach': [{'team': 'security', 'priority': 1}, {'team': 'legal', 'priority': 2}],
            'customer_complaint': [{'team': 'customer_success', 'priority': 1}],
            'data_loss': [{'team': 'engineering', 'priority': 1}, {'team': 'legal', 'priority': 2}]
        }
        
        for team_info in team_map.get(crisis_type, []):
            affected.append({
                'team': team_info['team'],
                'role': 'responder',
                'notification_priority': team_info['priority']
            })
        
        return affected
    
    def _determine_escalation(self, crisis_type: str, urgency: str) -> List[Dict[str, Any]]:
        """Determine escalation path."""
        chain = self.escalation_chains.get(crisis_type, [])
        
        escalation = []
        levels_to_notify = {
            'critical': len(chain),  # Everyone
            'high': min(3, len(chain)),
            'medium': min(2, len(chain)),
            'low': 1
        }
        
        notify_count = levels_to_notify.get(urgency, 1)
        
        for i, role in enumerate(chain[:notify_count]):
            escalation.append({
                'level': i + 1,
                'role': role,
                'notification_method': 'immediate' if i < 2 else 'within_1_hour',
                'response_expected': i == 0
            })
        
        return escalation
    
    def _generate_crisis_response(self, crisis_type: str, urgency: str, email: Dict[str, Any]) -> Dict[str, Any]:
        """Generate crisis response."""
        templates = self.response_templates.get(crisis_type, {})
        template = templates.get('initial_ack', 'We acknowledge your concern and are investigating. We will follow up shortly.')
        
        return {
            'template': template,
            'tone': 'empathetic_professional',
            'key_elements': [
                'Acknowledge the issue',
                'Express empathy',
                'State action being taken',
                'Provide timeline for next update',
                'Offer direct contact for escalation'
            ],
            'response_deadline': {
                'critical': '15 minutes',
                'high': '1 hour',
                'medium': '4 hours',
                'low': '24 hours'
            }.get(urgency, '24 hours'),
            'follow_up_schedule': [
                {'time': '+1 hour', 'action': 'Status update'},
                {'time': '+4 hours', 'action': 'Progress report'},
                {'time': '+24 hours', 'action': 'Resolution or detailed update'}
            ]
        }
    
    def _create_communication_plan(self, crisis_type: str, urgency: str, affected: List) -> Dict[str, Any]:
        """Create a comprehensive communication plan."""
        channels = ['email']
        
        if urgency in ['critical', 'high']:
            channels.extend(['slack', 'phone', 'sms'])
        
        return {
            'channels': channels,
            'audiences': [
                {'group': 'affected_parties', 'method': 'direct_email', 'reply_all': True},
                {'group': 'internal_team', 'method': 'slack_channel', 'channel': f'#crisis-{crisis_type}'},
                {'group': 'management', 'method': 'executive_briefing', 'frequency': 'every_2_hours'},
                {'group': 'customers', 'method': 'status_page', 'if': 'service_impact'}
            ],
            'messaging_guidelines': {
                'be_transparent': True,
                'avoid_speculation': True,
                'provide_timelines': True,
                'offer_contact_info': True,
                'document_everything': True
            }
        }
    
    def _create_response_timeline(self, crisis_type: str, urgency: str) -> List[Dict[str, Any]]:
        """Create a crisis response timeline."""
        now = datetime.now()
        
        timeline = []
        
        # Immediate actions
        timeline.append({
            'time': now.isoformat(),
            'action': 'Acknowledge receipt and begin investigation',
            'owner': 'responder'
        })
        
        if urgency in ['critical', 'high']:
            timeline.append({
                'time': (now + timedelta(minutes=15)).isoformat(),
                'action': 'Escalate to appropriate teams',
                'owner': 'responder'
            })
            timeline.append({
                'time': (now + timedelta(hours=1)).isoformat(),
                'action': 'First status update to all stakeholders',
                'owner': 'incident_commander'
            })
            timeline.append({
                'time': (now + timedelta(hours=4)).isoformat(),
                'action': 'Detailed progress report',
                'owner': 'incident_commander'
            })
            timeline.append({
                'time': (now + timedelta(hours=24)).isoformat(),
                'action': 'Resolution or detailed update + postmortem plan',
                'owner': 'management'
            })
        
        return timeline


def process_email_crisis(email_data: Dict[str, Any]) -> Dict[str, Any]:
    """Main entry point for crisis detection and management."""
    manager = CrisisCommunicationManager()
    return manager.detect_crisis(email_data)


if __name__ == '__main__':
    test_email = {
        'from': 'customer@company.com',
        'subject': 'URGENT: Service completely down - data lost!',
        'body': 'Our entire system is down and we cannot access any of our data! '
                'This is unacceptable and is costing us thousands per hour. '
                'We need this fixed immediately or we will have to take legal action. '
                'This is the worst service we have ever used.',
        'cc': ['cto@customer.com', 'legal@customer.com']
    }
    
    result = process_email_crisis(test_email)
    print(json.dumps(result, indent=2))

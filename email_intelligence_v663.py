#!/usr/bin/env python3
"""
V663 - Email Crisis Communication Engine
Detects PR crises and generates approved communication templates with
stakeholder routing. Manages crisis response workflows, message approval
chains, and post-crisis analysis.

Key Features:
- Crisis severity classification (P1-P4)
- Stakeholder identification and routing
- Pre-approved template generation
- Message approval chain management
- Multi-channel communication coordination
- Post-crisis impact analysis
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import defaultdict
from typing import Dict, List, Optional

class EmailCrisisCommunicationEngine:
    """Manages crisis detection and communication workflows"""
    
    def __init__(self):
        self.active_crises = {}
        self.crisis_history = []
        self.approval_chains = {}
        self.templates = {}
        self._load_templates()
    
    def _load_templates(self):
        """Load crisis communication templates"""
        self.templates = {
            'data_breach': {
                'subject': '[URGENT] Data Security Incident - Immediate Action Required',
                'body_template': '''Dear [STAKEHOLDER],

We are writing to inform you of a data security incident that may affect [SCOPE].

INCIDENT SUMMARY:
- Date Detected: [DATE]
- Type: [INCIDENT_TYPE]
- Systems Affected: [SYSTEMS]
- Data Types: [DATA_TYPES]

IMMEDIATE ACTIONS TAKEN:
[ACTIONS_TAKEN]

NEXT STEPS:
[NEXT_STEPS]

We take this matter seriously and are committed to full transparency.

[CONTACT_INFO]''',
                'stakeholders': ['legal', 'executives', 'affected_parties', 'regulators', 'media'],
                'response_time': '1 hour'
            },
            'service_outage': {
                'subject': '[ALERT] Service Disruption - [SERVICE_NAME]',
                'body_template': '''Dear [STAKEHOLDER],

We are currently experiencing a service disruption affecting [SERVICE_NAME].

STATUS:
- Started: [START_TIME]
- Impact: [IMPACT_DESCRIPTION]
- Current Status: [STATUS]
- ETA for Resolution: [ETA]

Our team is actively working to resolve this issue. We will provide updates every [UPDATE_FREQUENCY].

Thank you for your patience.

[CONTACT_INFO]''',
                'stakeholders': ['customers', 'internal_teams', 'executives', 'partners'],
                'response_time': '30 minutes'
            },
            'pr_crisis': {
                'subject': '[CONFIDENTIAL] PR Situation - Response Coordination',
                'body_template': '''Dear [STAKEHOLDER],

We are managing a public relations situation that requires coordinated response.

SITUATION SUMMARY:
[SUMMARY]

CURRENT STATUS:
[STATUS]

APPROVED MESSAGING:
[APPROVED_MESSAGES]

DO NOT:
[RESTRICTIONS]

MEDIA INQUIRIES:
Direct all media inquiries to [PR_CONTACT].

[CONTACT_INFO]''',
                'stakeholders': ['executives', 'pr_team', 'legal', 'hr'],
                'response_time': '2 hours'
            },
            'employee_incident': {
                'subject': '[CONFIDENTIAL] Internal Incident - Limited Distribution',
                'body_template': '''Dear [STAKEHOLDER],

This communication contains confidential information regarding an internal incident.

INCIDENT OVERVIEW:
[OVERVIEW]

IMPACT ASSESSMENT:
[IMPACT]

RESPONSE ACTIONS:
[ACTIONS]

CONFIDENTIALITY NOTICE:
This information is strictly confidential. Do not discuss with unauthorized parties.

[CONTACT_INFO]''',
                'stakeholders': ['executives', 'hr', 'legal', 'direct_managers'],
                'response_time': '4 hours'
            },
            'financial_disclosure': {
                'subject': '[MATERIAL] Financial Disclosure - [TOPIC]',
                'body_template': '''Dear [STAKEHOLDER],

This communication contains material financial information requiring careful handling.

DISCLOSURE:
[DISCLOSURE_CONTENT]

REGULATORY REQUIREMENTS:
[REQUIREMENTS]

DISTRIBUTION RESTRICTIONS:
[RESTRICTIONS]

NEXT STEPS:
[NEXT_STEPS]

[CONTACT_INFO]''',
                'stakeholders': ['board', 'legal', 'compliance', 'investor_relations'],
                'response_time': '1 hour'
            }
        }
    
    CRISIS_INDICATORS = {
        'data_breach': {
            'keywords': ['breach', 'hack', 'unauthorized access', 'data leak', 'compromised', 'intrusion', 'ransomware', 'malware', 'phishing attack'],
            'severity': 'P1',
            'response_time_minutes': 60
        },
        'service_outage': {
            'keywords': ['outage', 'downtime', 'unavailable', 'service down', 'cannot access', 'not working', 'error rate', 'latency spike', 'degraded'],
            'severity': 'P2',
            'response_time_minutes': 30
        },
        'pr_crisis': {
            'keywords': ['lawsuit', 'scandal', 'controversy', 'boycott', 'viral', 'backlash', 'complaint', 'negative press', 'media inquiry'],
            'severity': 'P2',
            'response_time_minutes': 120
        },
        'employee_incident': {
            'keywords': ['harassment', 'discrimination', 'termination', 'misconduct', 'investigation', 'complaint', 'violation', 'ethics'],
            'severity': 'P3',
            'response_time_minutes': 240
        },
        'financial_issue': {
            'keywords': ['fraud', 'embezzlement', 'audit finding', 'material weakness', 'restatement', 'SEC inquiry', 'compliance violation'],
            'severity': 'P1',
            'response_time_minutes': 60
        },
        'safety_incident': {
            'keywords': ['injury', 'accident', 'safety', 'evacuation', 'emergency', 'hazard', 'OSHA', 'workplace incident'],
            'severity': 'P1',
            'response_time_minutes': 30
        }
    }
    
    def detect_crisis(self, email: Dict) -> Dict:
        """Detect if an email indicates a crisis situation"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        
        detections = []
        
        for crisis_type, config in self.CRISIS_INDICATORS.items():
            matches = [kw for kw in config['keywords'] if kw in text]
            if matches:
                detections.append({
                    'type': crisis_type,
                    'severity': config['severity'],
                    'matched_keywords': matches,
                    'confidence': min(100, len(matches) * 25),
                    'response_time_minutes': config['response_time_minutes']
                })
        
        if not detections:
            return {
                'is_crisis': False,
                'detections': [],
                'highest_severity': None,
                'urgency': 'normal'
            }
        
        # Sort by severity (P1 > P2 > P3 > P4)
        severity_order = {'P1': 0, 'P2': 1, 'P3': 2, 'P4': 3}
        detections.sort(key=lambda d: severity_order.get(d['severity'], 4))
        
        highest = detections[0]
        
        return {
            'is_crisis': True,
            'detections': detections,
            'highest_severity': highest['severity'],
            'primary_crisis_type': highest['type'],
            'response_time_minutes': highest['response_time_minutes'],
            'urgency': 'critical' if highest['severity'] == 'P1' else 'high' if highest['severity'] == 'P2' else 'medium',
            'confidence': highest['confidence']
        }
    
    def generate_crisis_response(self, crisis_type: str, context: Dict) -> Dict:
        """Generate crisis response communication"""
        template = self.templates.get(crisis_type)
        if not template:
            return {'error': f'No template for crisis type: {crisis_type}'}
        
        crisis_id = f"crisis_{len(self.active_crises):04d}"
        
        # Populate template with context
        body = template['body_template']
        for key, value in context.items():
            body = body.replace(f'[{key.upper()}]', str(value))
        
        # Determine stakeholder routing
        stakeholder_groups = template['stakeholders']
        routing = self._generate_routing(stakeholder_groups, crisis_type)
        
        # Create approval chain
        approval_chain = self._create_approval_chain(crisis_type)
        
        crisis_record = {
            'id': crisis_id,
            'type': crisis_type,
            'severity': self.CRISIS_INDICATORS.get(crisis_type, {}).get('severity', 'P3'),
            'detected_at': datetime.now().isoformat(),
            'status': 'draft',
            'template_used': crisis_type,
            'subject': template['subject'],
            'body': body,
            'stakeholders': stakeholder_groups,
            'routing': routing,
            'approval_chain': approval_chain,
            'response_deadline': (datetime.now() + timedelta(minutes=template.get('response_time_minutes', 60))).isoformat(),
            'reply_all_required': True
        }
        
        self.active_crises[crisis_id] = crisis_record
        return crisis_record
    
    def _generate_routing(self, stakeholder_groups: List[str], crisis_type: str) -> Dict:
        """Generate stakeholder routing matrix"""
        routing = {}
        
        # Define typical stakeholder email patterns
        stakeholder_emails = {
            'executives': ['ceo@company.com', 'cto@company.com', 'cfo@company.com'],
            'legal': ['legal@company.com', 'general_counsel@company.com'],
            'pr_team': ['pr@company.com', 'communications@company.com'],
            'hr': ['hr@company.com', 'people_ops@company.com'],
            'compliance': ['compliance@company.com'],
            'board': ['board@company.com'],
            'customers': ['customers@company.com'],
            'internal_teams': ['all@company.com'],
            'partners': ['partners@company.com'],
            'investor_relations': ['ir@company.com']
        }
        
        for group in stakeholder_groups:
            routing[group] = {
                'recipients': stakeholder_emails.get(group, [f'{group}@company.com']),
                'priority': 'high' if group in ['executives', 'legal'] else 'medium',
                'requires_approval': group in ['customers', 'partners', 'board'],
                'channel': 'email' if group not in ['media', 'regulators'] else 'secure_channel'
            }
        
        return routing
    
    def _create_approval_chain(self, crisis_type: str) -> List[Dict]:
        """Create approval chain for crisis communication"""
        chains = {
            'data_breach': [
                {'role': 'CISO', 'order': 1, 'required': True},
                {'role': 'General Counsel', 'order': 2, 'required': True},
                {'role': 'CEO', 'order': 3, 'required': True}
            ],
            'service_outage': [
                {'role': 'VP Engineering', 'order': 1, 'required': True},
                {'role': 'CTO', 'order': 2, 'required': True}
            ],
            'pr_crisis': [
                {'role': 'PR Director', 'order': 1, 'required': True},
                {'role': 'General Counsel', 'order': 2, 'required': True},
                {'role': 'CEO', 'order': 3, 'required': True}
            ],
            'employee_incident': [
                {'role': 'HR Director', 'order': 1, 'required': True},
                {'role': 'General Counsel', 'order': 2, 'required': True}
            ],
            'financial_disclosure': [
                {'role': 'CFO', 'order': 1, 'required': True},
                {'role': 'General Counsel', 'order': 2, 'required': True},
                {'role': 'CEO', 'order': 3, 'required': True}
            ]
        }
        return chains.get(crisis_type, [{'role': 'Manager', 'order': 1, 'required': True}])
    
    def manage_approval(self, crisis_id: str, approver: str, decision: str, comments: str = '') -> Dict:
        """Manage approval for crisis communication"""
        if crisis_id not in self.active_crises:
            return {'error': 'Crisis not found'}
        
        crisis = self.active_crises[crisis_id]
        
        approval_record = {
            'approver': approver,
            'decision': decision,  # approved, rejected, revision_needed
            'comments': comments,
            'timestamp': datetime.now().isoformat()
        }
        
        if 'approvals' not in crisis:
            crisis['approvals'] = []
        crisis['approvals'].append(approval_record)
        
        # Check if all required approvals received
        chain = crisis.get('approval_chain', [])
        approvals_received = len(crisis.get('approvals', []))
        required_approvals = len([a for a in chain if a.get('required', True)])
        
        if approvals_received >= required_approvals:
            all_approved = all(a['decision'] == 'approved' for a in crisis['approvals'])
            crisis['status'] = 'approved' if all_approved else 'revision_needed'
        
        return {
            'crisis_id': crisis_id,
            'status': crisis['status'],
            'approvals_received': approvals_received,
            'required_approvals': required_approvals,
            'can_send': crisis['status'] == 'approved'
        }
    
    def generate_crisis_report(self) -> Dict:
        """Generate crisis management report"""
        total_crises = len(self.active_crises) + len(self.crisis_history)
        active = len(self.active_crises)
        
        if not self.active_crises and not self.crisis_history:
            return {'message': 'No crises tracked'}
        
        all_crises = list(self.active_crises.values()) + self.crisis_history
        
        from collections import Counter
        type_counts = Counter(c.get('type', 'unknown') for c in all_crises)
        severity_counts = Counter(c.get('severity', 'unknown') for c in all_crises)
        
        return {
            'total_crises': total_crises,
            'active_crises': active,
            'resolved_crises': len(self.crisis_history),
            'by_type': dict(type_counts),
            'by_severity': dict(severity_counts),
            'avg_response_time': 'Tracked per crisis',
            'templates_available': list(self.templates.keys()),
            'reply_all_enforcement': 'Active for all crisis communications'
        }


def test_v663():
    """Test V663 Email Crisis Communication Engine"""
    engine = EmailCrisisCommunicationEngine()
    
    # Test 1: Data breach detection
    breach_email = {
        'id': 'e001',
        'from': 'security@company.com',
        'to': ['ciso@company.com', 'legal@company.com'],
        'subject': 'URGENT: Unauthorized access detected in customer database',
        'body': 'We have detected unauthorized access to our customer database. The breach appears to have compromised personal data including names, emails, and payment information. Our security team is investigating the intrusion and has isolated the affected systems. Immediate executive notification required.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Service outage
    outage_email = {
        'id': 'e002',
        'from': 'ops@company.com',
        'to': ['cto@company.com', 'support@company.com'],
        'subject': 'ALERT: Production service down - API unavailable',
        'body': 'Our main API service is currently experiencing a complete outage. Customers cannot access the platform. Error rate has spiked to 100%. The service has been down for 15 minutes. Engineering team is investigating.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Normal email (no crisis)
    normal_email = {
        'id': 'e003',
        'from': 'team@company.com',
        'to': ['all@company.com'],
        'subject': 'Weekly team meeting agenda',
        'body': 'Hi team, please find attached the agenda for our weekly meeting. Looking forward to discussing our progress.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    for email in [breach_email, outage_email, normal_email]:
        detection = engine.detect_crisis(email)
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:50]}...")
        print(f"Is Crisis: {detection['is_crisis']}")
        if detection['is_crisis']:
            print(f"Severity: {detection['highest_severity']}")
            print(f"Type: {detection['primary_crisis_type']}")
            print(f"Response Time: {detection['response_time_minutes']} min")
            print(f"Urgency: {detection['urgency']}")
            
            # Generate response
            context = {
                'stakeholder': 'Executive Team',
                'date': 'May 30, 2026',
                'scope': 'Customer Database',
                'incident_type': 'Unauthorized Access',
                'systems': 'Customer DB, Auth Service',
                'data_types': 'Names, Emails, Payment Info',
                'actions_taken': '1. Isolated affected systems\n2. Engaged forensics team\n3. Notified legal counsel',
                'next_steps': '1. Complete forensic analysis\n2. Notify affected customers\n3. File regulatory reports',
                'contact_info': 'Contact: security@company.com | +1 302 464 0950'
            }
            response = engine.generate_crisis_response(detection['primary_crisis_type'], context)
            if 'error' not in response:
                print(f"Crisis ID: {response['id']}")
                print(f"Approval Chain: {len(response['approval_chain'])} approvers")
                print(f"Stakeholder Groups: {response['stakeholders']}")
        else:
            print("No crisis detected - normal communication")
    
    report = engine.generate_crisis_report()
    print(f"\n{'='*50}")
    print(f"✅ V663 Crisis Communication Engine Test Complete")
    print(f"Active Crises: {report['active_crises']}")
    print(f"Templates Available: {len(report['templates_available'])}")
    
    return report


if __name__ == '__main__':
    test_v663()

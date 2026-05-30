#!/usr/bin/env python3
"""
V190 - AI Email Crisis Communication Manager
Detects crisis situations (outages, breaches, PR issues), generates crisis communication
templates, coordinates multi-stakeholder responses, and tracks resolution progress.
"""

import json
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict


class CrisisCommunicationManager:
    """AI-powered crisis communication management system."""
    
    def __init__(self):
        self.crisis_registry = {}
        self.communication_templates = self._build_templates()
        self.stakeholder_matrix = {}
        self.resolution_tracking = {}
    
    def _build_templates(self) -> Dict[str, Dict]:
        """Build crisis communication templates."""
        return {
            'service_outage': {
                'subject': 'Service Disruption - {service_name} - {status}',
                'body': '''Dear {stakeholder_group},

We are currently experiencing a service disruption affecting {service_name}.

**Status**: {status}
**Impact**: {impact_description}
**Started**: {start_time}
**Estimated Resolution**: {eta}

Our team is actively working to resolve this issue. We will provide updates every {update_frequency}.

**What you should do**: {user_action}

We apologize for any inconvenience and appreciate your patience.

{signature}''',
                'variables': ['service_name', 'status', 'impact_description', 'start_time', 'eta', 'update_frequency', 'user_action', 'signature']
            },
            'security_breach': {
                'subject': 'URGENT: Security Incident - Immediate Action Required',
                'body': '''Dear {stakeholder_group},

We are writing to inform you of a security incident that may affect your account.

**What happened**: {incident_description}
**When**: {incident_time}
**What data was affected**: {affected_data}
**What we're doing**: {response_actions}

**Immediate actions you should take**:
{user_actions}

We take this matter seriously and are working with security experts to investigate and resolve this issue.

For questions, contact our security team at {security_contact}.

{signature}''',
                'variables': ['stakeholder_group', 'incident_description', 'incident_time', 'affected_data', 'response_actions', 'user_actions', 'security_contact', 'signature']
            },
            'pr_crisis': {
                'subject': 'Statement Regarding {issue_topic}',
                'body': '''Dear {stakeholder_group},

We are aware of recent concerns regarding {issue_topic} and want to address them directly.

**Our position**: {company_position}
**What we're doing**: {action_plan}
**Our commitment**: {commitment_statement}

We value transparency and are committed to resolving this matter appropriately.

For media inquiries, please contact {media_contact}.

{signature}''',
                'variables': ['stakeholder_group', 'issue_topic', 'company_position', 'action_plan', 'commitment_statement', 'media_contact', 'signature']
            },
            'product_recall': {
                'subject': 'IMPORTANT: Product Safety Notice - {product_name}',
                'body': '''Dear {stakeholder_group},

We are issuing a safety notice for {product_name}.

**Issue**: {safety_issue}
**Affected products**: {affected_products}
**Risk level**: {risk_level}

**What you should do immediately**:
{immediate_actions}

**How to get a replacement/refund**:
{resolution_process}

Customer safety is our top priority. We apologize for any concern this may cause.

Contact us at {support_contact} for assistance.

{signature}''',
                'variables': ['stakeholder_group', 'product_name', 'safety_issue', 'affected_products', 'risk_level', 'immediate_actions', 'resolution_process', 'support_contact', 'signature']
            }
        }
    
    def detect_and_manage_crisis(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Detect crisis situation and generate communication plan."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        
        # Detect crisis type
        crisis_type = self._detect_crisis_type(email)
        
        if not crisis_type:
            return {
                'crisis_detected': False,
                'message': 'No crisis indicators detected'
            }
        
        # Assess severity
        severity = self._assess_severity(email, crisis_type, context)
        
        # Identify stakeholders
        stakeholders = self._identify_stakeholders(crisis_type, context)
        
        # Generate communications
        communications = self._generate_communications(crisis_type, email, stakeholders, context)
        
        # Create resolution plan
        resolution_plan = self._create_resolution_plan(crisis_type, severity)
        
        # Tracking setup
        tracking = self._setup_tracking(crisis_type, severity)
        
        return {
            'crisis_detected': True,
            'crisis_id': f"crisis_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'crisis_type': crisis_type,
            'severity': severity,
            'stakeholders': stakeholders,
            'communications': communications,
            'resolution_plan': resolution_plan,
            'tracking': tracking,
            'reply_all_strategy': self._determine_reply_all_strategy(stakeholders, severity)
        }
    
    def _detect_crisis_type(self, email: Dict) -> str:
        """Detect type of crisis from email content."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        # Service outage indicators
        if any(word in content for word in ['outage', 'down', 'unavailable', 'not working', 'error', 'disruption']):
            return 'service_outage'
        
        # Security breach indicators
        if any(word in content for word in ['breach', 'hack', 'unauthorized', 'compromised', 'security incident', 'data leak']):
            return 'security_breach'
        
        # PR crisis indicators
        if any(word in content for word in ['controversy', 'scandal', 'complaint', 'lawsuit', 'negative press', 'boycott']):
            return 'pr_crisis'
        
        # Product recall indicators
        if any(word in content for word in ['recall', 'defect', 'safety issue', 'hazard', 'warning', 'return']):
            return 'product_recall'
        
        return None
    
    def _assess_severity(self, email: Dict, crisis_type: str, context: Dict) -> Dict[str, Any]:
        """Assess crisis severity."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        severity_score = 50  # Start at medium
        
        # Escalating factors
        if 'urgent' in content or 'critical' in content or 'emergency' in content:
            severity_score += 20
        
        if 'all users' in content or 'all customers' in content:
            severity_score += 15
        
        if 'data' in content and ('lost' in content or 'stolen' in content):
            severity_score += 25
        
        if context.get('affected_users', 0) > 10000:
            severity_score += 20
        
        severity_score = min(100, severity_score)
        
        return {
            'score': severity_score,
            'level': 'critical' if severity_score >= 80 else 'high' if severity_score >= 60 else 'medium' if severity_score >= 40 else 'low',
            'response_time': 'immediate' if severity_score >= 80 else '1 hour' if severity_score >= 60 else '4 hours',
            'escalation_required': severity_score >= 60
        }
    
    def _identify_stakeholders(self, crisis_type: str, context: Dict) -> List[Dict[str, Any]]:
        """Identify stakeholders who need to be informed."""
        stakeholders = []
        
        # Always include these
        stakeholders.append({
            'group': 'affected_users',
            'priority': 'high',
            'communication_channel': 'email',
            'template': crisis_type
        })
        
        stakeholders.append({
            'group': 'internal_team',
            'priority': 'high',
            'communication_channel': 'slack',
            'template': 'internal_brief'
        })
        
        # Add based on crisis type
        if crisis_type == 'security_breach':
            stakeholders.extend([
                {'group': 'security_team', 'priority': 'critical', 'communication_channel': 'phone'},
                {'group': 'legal_team', 'priority': 'high', 'communication_channel': 'email'},
                {'group': 'executives', 'priority': 'high', 'communication_channel': 'phone'}
            ])
        
        elif crisis_type == 'pr_crisis':
            stakeholders.extend([
                {'group': 'media', 'priority': 'high', 'communication_channel': 'press_release'},
                {'group': 'investors', 'priority': 'medium', 'communication_channel': 'email'},
                {'group': 'partners', 'priority': 'medium', 'communication_channel': 'email'}
            ])
        
        elif crisis_type == 'product_recall':
            stakeholders.extend([
                {'group': 'regulators', 'priority': 'critical', 'communication_channel': 'formal_notice'},
                {'group': 'distributors', 'priority': 'high', 'communication_channel': 'email'},
                {'group': 'support_team', 'priority': 'high', 'communication_channel': 'slack'}
            ])
        
        return stakeholders
    
    def _generate_communications(self, crisis_type: str, email: Dict, stakeholders: List, context: Dict) -> List[Dict[str, Any]]:
        """Generate crisis communications for each stakeholder group."""
        communications = []
        
        for stakeholder in stakeholders:
            if stakeholder.get('template') in self.communication_templates:
                template = self.communication_templates[stakeholder['template']]
                
                # Populate template with context
                populated = self._populate_template(template, email, context, stakeholder)
                
                communications.append({
                    'stakeholder_group': stakeholder['group'],
                    'priority': stakeholder['priority'],
                    'channel': stakeholder['communication_channel'],
                    'subject': populated.get('subject', ''),
                    'body': populated.get('body', ''),
                    'send_immediately': stakeholder['priority'] in ['critical', 'high'],
                    'requires_approval': stakeholder['group'] in ['media', 'regulators', 'investors']
                })
        
        return communications
    
    def _populate_template(self, template: Dict, email: Dict, context: Dict, stakeholder: Dict) -> Dict[str, str]:
        """Populate template with actual values."""
        subject = template['subject']
        body = template['body']
        
        # Common replacements
        replacements = {
            '{stakeholder_group}': stakeholder['group'].replace('_', ' ').title(),
            '{start_time}': datetime.now().strftime('%Y-%m-%d %H:%M UTC'),
            '{signature}': context.get('signature', 'The Team'),
            '{status}': context.get('status', 'Investigating'),
            '{eta}': context.get('eta', 'TBD')
        }
        
        for key, value in replacements.items():
            subject = subject.replace(key, value)
            body = body.replace(key, value)
        
        return {'subject': subject, 'body': body}
    
    def _create_resolution_plan(self, crisis_type: str, severity: Dict) -> Dict[str, Any]:
        """Create crisis resolution plan."""
        plan = {
            'immediate_actions': [],
            'short_term_actions': [],
            'long_term_actions': [],
            'success_metrics': []
        }
        
        # Immediate actions (0-2 hours)
        plan['immediate_actions'] = [
            'Assemble crisis response team',
            'Assess scope and impact',
            'Implement containment measures',
            'Send initial stakeholder communications'
        ]
        
        # Short-term actions (2-24 hours)
        plan['short_term_actions'] = [
            'Investigate root cause',
            'Implement fixes',
            'Monitor situation',
            'Provide regular updates to stakeholders'
        ]
        
        # Long-term actions (1-7 days)
        plan['long_term_actions'] = [
            'Complete root cause analysis',
            'Implement preventive measures',
            'Conduct post-mortem',
            'Update policies and procedures'
        ]
        
        # Success metrics
        plan['success_metrics'] = [
            'Crisis resolved within SLA',
            'Stakeholder satisfaction maintained',
            'No recurrence within 30 days',
            'Lessons learned documented'
        ]
        
        return plan
    
    def _setup_tracking(self, crisis_type: str, severity: Dict) -> Dict[str, Any]:
        """Setup crisis tracking."""
        return {
            'tracking_id': f"track_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'update_frequency': '30 minutes' if severity['level'] in ['critical', 'high'] else '2 hours',
            'status_dashboard': True,
            'escalation_triggers': [
                'No progress in 2 hours',
                'Scope increases',
                'Media attention',
                'Customer complaints spike'
            ]
        }
    
    def _determine_reply_all_strategy(self, stakeholders: List, severity: Dict) -> Dict[str, Any]:
        """Determine reply-all strategy for crisis communication."""
        return {
            'reply_all_recommended': severity['level'] in ['critical', 'high'],
            'reason': 'Coordinate crisis response across all stakeholders' if severity['level'] in ['critical', 'high'] else 'Direct communication with primary contact',
            'stakeholder_count': len(stakeholders)
        }


def manage_crisis_communication(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for crisis communication management."""
    manager = CrisisCommunicationManager()
    return manager.detect_and_manage_crisis(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'monitoring@ourcompany.com',
        'subject': 'CRITICAL: Production Database Down',
        'body': 'URGENT: The production database is completely down. All services are affected. 50,000 users cannot access their accounts. Started 15 minutes ago. No ETA for resolution.',
        'date': '2024-01-15T14:30:00'
    }
    
    context = {
        'service_name': 'Customer Portal',
        'affected_users': 50000,
        'signature': 'Operations Team'
    }
    
    result = manage_crisis_communication(test_email, context)
    print(json.dumps(result, indent=2))

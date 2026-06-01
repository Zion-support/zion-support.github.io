#!/usr/bin/env python3
"""V1048: AI Email Crisis Detection System
Detect emerging PR crises, customer escalations, and legal risks in real-time.
Auto-escalate to legal/PR teams with severity scoring.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime
from collections import defaultdict

class CrisisDetectionSystem:
    def __init__(self):
        self.crisis_alerts = []
        self.escalation_rules = {
            'critical': {'response_time': '15min', 'escalate_to': ['CEO', 'Legal', 'PR']},
            'high': {'response_time': '1hr', 'escalate_to': ['VP', 'Legal']},
            'medium': {'response_time': '4hr', 'escalate_to': ['Manager', 'PR']},
            'low': {'response_time': '24hr', 'escalate_to': ['Team Lead']}
        }
        
        self.crisis_keywords = {
            'legal': {
                'keywords': ['lawsuit', 'litigation', 'attorney', 'legal action', 'cease and desist', 'breach of contract', 'violation', 'compliance', 'regulatory', 'subpoena'],
                'severity': 'critical'
            },
            'pr_crisis': {
                'keywords': ['scandal', 'negative press', 'media coverage', 'viral', 'backlash', 'boycott', 'public statement', 'apology', 'controversy'],
                'severity': 'high'
            },
            'security_breach': {
                'keywords': ['data breach', 'security incident', 'hack', 'unauthorized access', 'vulnerability', 'exploit', 'malware', 'ransomware', 'phishing attack'],
                'severity': 'critical'
            },
            'customer_escalation': {
                'keywords': ['escalate', 'unacceptable', 'demand refund', 'cancel contract', 'dissatisfied', 'complaint', 'review', 'social media', 'BBB', 'attorney general'],
                'severity': 'high'
            },
            'financial_risk': {
                'keywords': ['audit', 'fraud', 'embezzlement', 'misappropriation', 'financial irregularity', 'SEC', 'investigation', 'whistleblower'],
                'severity': 'critical'
            },
            'operational_crisis': {
                'keywords': ['outage', 'downtime', 'service disruption', 'production down', 'critical failure', 'emergency', 'disaster recovery'],
                'severity': 'high'
            },
            'hr_crisis': {
                'keywords': ['harassment', 'discrimination', 'hostile work environment', 'EEOC', 'termination dispute', 'wrongful termination', 'retaliation'],
                'severity': 'high'
            },
            'competitive_threat': {
                'keywords': ['competitor', 'losing clients', 'market share', 'price war', 'poaching', 'intellectual property', 'patent infringement'],
                'severity': 'medium'
            }
        }
        
        self.sentiment_crisis_indicators = {
            'extreme_negative': ['furious', 'outraged', 'appalled', 'disgusted', 'horrified', 'devastated'],
            'threats': ['will sue', 'legal action', 'report to', 'expose', 'go public', 'contact media'],
            'urgency': ['immediately', 'emergency', 'urgent', 'asap', 'critical', 'time-sensitive']
        }
    
    def analyze_email(self, email_data):
        """Analyze email for crisis indicators."""
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        # Detect crisis types
        crisis_types = self._detect_crisis_types(subject, body)
        
        # Calculate severity score
        severity_score = self._calculate_severity_score(crisis_types, subject, body)
        
        # Determine severity level
        severity_level = self._determine_severity_level(severity_score)
        
        # Generate escalation plan
        escalation_plan = self._generate_escalation_plan(severity_level, crisis_types)
        
        # Check for sentiment crisis indicators
        sentiment_indicators = self._check_sentiment_indicators(body)
        
        # Generate response strategy
        response_strategy = self._generate_response_strategy(crisis_types, severity_level)
        
        # Create crisis alert if needed
        if severity_score >= 50:
            alert = {
                'alert_id': f"crisis_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
                'timestamp': timestamp,
                'severity': severity_level,
                'severity_score': severity_score,
                'crisis_types': crisis_types,
                'sender': sender,
                'subject': subject,
                'escalation_plan': escalation_plan
            }
            self.crisis_alerts.append(alert)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'crisis_detected': severity_score >= 50,
            'severity_level': severity_level,
            'severity_score': severity_score,
            'crisis_types': crisis_types,
            'sentiment_indicators': sentiment_indicators,
            'escalation_plan': escalation_plan,
            'response_strategy': response_strategy,
            'immediate_actions': self._generate_immediate_actions(severity_level, crisis_types),
            'communication_guidelines': self._generate_communication_guidelines(crisis_types, severity_level),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _detect_crisis_types(self, subject, body):
        """Detect types of crises mentioned in email."""
        text = (subject + ' ' + body).lower()
        detected = []
        
        for crisis_type, config in self.crisis_keywords.items():
            matches = []
            for keyword in config['keywords']:
                if keyword in text:
                    matches.append(keyword)
            
            if matches:
                detected.append({
                    'type': crisis_type,
                    'keywords_found': matches,
                    'base_severity': config['severity'],
                    'confidence': min(100, len(matches) * 20 + 40)
                })
        
        return detected
    
    def _calculate_severity_score(self, crisis_types, subject, body):
        """Calculate overall severity score (0-100)."""
        if not crisis_types:
            return 0
        
        # Base score from crisis types
        severity_map = {'critical': 80, 'high': 60, 'medium': 40, 'low': 20}
        base_scores = [severity_map.get(c['base_severity'], 30) for c in crisis_types]
        base_score = max(base_scores)
        
        # Boost for multiple crisis types
        multi_crisis_boost = min(20, len(crisis_types) * 5)
        
        # Boost for crisis keywords in subject
        subject_boost = 10 if any(c['keywords_found'] for c in crisis_types if any(kw in subject.lower() for kw in c['keywords_found'])) else 0
        
        # Boost for sentiment indicators
        text = (subject + ' ' + body).lower()
        sentiment_boost = 0
        for category, words in self.sentiment_crisis_indicators.items():
            if any(w in text for w in words):
                sentiment_boost += 10
        
        total = base_score + multi_crisis_boost + subject_boost + min(30, sentiment_boost)
        return min(100, total)
    
    def _determine_severity_level(self, score):
        """Convert score to severity level."""
        if score >= 80:
            return 'critical'
        elif score >= 60:
            return 'high'
        elif score >= 40:
            return 'medium'
        else:
            return 'low'
    
    def _generate_escalation_plan(self, severity_level, crisis_types):
        """Generate escalation plan based on severity."""
        if severity_level == 'low':
            return {'escalate': False, 'reason': 'Low severity - handle at team level'}
        
        rule = self.escalation_rules.get(severity_level, {})
        
        crisis_roles = set()
        for crisis in crisis_types:
            if crisis['type'] == 'legal':
                crisis_roles.add('Legal Counsel')
            elif crisis['type'] == 'pr_crisis':
                crisis_roles.add('PR Director')
            elif crisis['type'] == 'security_breach':
                crisis_roles.add('CISO')
            elif crisis['type'] == 'financial_risk':
                crisis_roles.add('CFO')
            elif crisis['type'] == 'hr_crisis':
                crisis_roles.add('HR Director')
        
        return {
            'escalate': True,
            'severity': severity_level,
            'response_time': rule.get('response_time', '24hr'),
            'escalate_to': rule.get('escalate_to', ['Manager']) + list(crisis_roles),
            'notification_method': 'Phone call + Email' if severity_level in ['critical', 'high'] else 'Email',
            'follow_up_required': True
        }
    
    def _check_sentiment_indicators(self, body):
        """Check for extreme sentiment indicators."""
        text = body.lower()
        found = []
        
        for category, words in self.sentiment_crisis_indicators.items():
            matches = [w for w in words if w in text]
            if matches:
                found.append({
                    'category': category,
                    'indicators': matches,
                    'severity': 'high' if category == 'threats' else 'medium'
                })
        
        return found
    
    def _generate_response_strategy(self, crisis_types, severity_level):
        """Generate response strategy based on crisis types."""
        strategies = []
        
        if severity_level in ['critical', 'high']:
            strategies.append('⚠️ Do NOT respond immediately - consult with escalation team first')
            strategies.append('📞 Initiate crisis call within 15 minutes')
            strategies.append('📝 Document all facts before any communication')
        
        for crisis in crisis_types:
            if crisis['type'] == 'legal':
                strategies.append('⚖️ Forward to legal counsel before responding')
                strategies.append('🚫 Do not admit liability or make commitments')
            elif crisis['type'] == 'pr_crisis':
                strategies.append('📰 Coordinate with PR team before public statements')
                strategies.append('🔒 Keep internal communications confidential')
            elif crisis['type'] == 'security_breach':
                strategies.append('🔐 Activate incident response plan immediately')
                strategies.append('🚨 Notify affected parties per compliance requirements')
            elif crisis['type'] == 'customer_escalation':
                strategies.append('🤝 Assign senior account manager to handle')
                strategies.append('💰 Prepare resolution options (refund, credit, service improvement)')
            elif crisis['type'] == 'operational_crisis':
                strategies.append('🔧 Activate on-call engineering team')
                strategies.append('📊 Provide hourly status updates to stakeholders')
        
        if not strategies:
            strategies.append('📧 Respond within standard SLA timeframe')
        
        return strategies
    
    def _generate_immediate_actions(self, severity_level, crisis_types):
        """Generate immediate action items."""
        actions = []
        
        if severity_level == 'critical':
            actions.append('🚨 STOP: Do not send any response yet')
            actions.append('📞 Call CEO/VP immediately')
            actions.append('📧 Forward email to crisis response team')
            actions.append('📝 Document timeline of events')
        elif severity_level == 'high':
            actions.append('⚡ Escalate to VP/Director within 1 hour')
            actions.append('📋 Review company policies related to this crisis type')
            actions.append('👥 Identify all stakeholders who need to be informed')
        
        for crisis in crisis_types:
            if crisis['type'] == 'legal':
                actions.append('⚖️ Preserve all related documents and communications')
            elif crisis['type'] == 'security_breach':
                actions.append('🔐 Isolate affected systems if applicable')
        
        return actions
    
    def _generate_communication_guidelines(self, crisis_types, severity_level):
        """Generate communication guidelines."""
        guidelines = []
        
        if severity_level in ['critical', 'high']:
            guidelines.append('✅ DO: Be empathetic and acknowledge concerns')
            guidelines.append('✅ DO: Provide timeline for resolution')
            guidelines.append('❌ DO NOT: Make promises you cannot keep')
            guidelines.append('❌ DO NOT: Blame others or make excuses')
            guidelines.append('❌ DO NOT: Share confidential information')
        
        for crisis in crisis_types:
            if crisis['type'] == 'legal':
                guidelines.append('⚖️ All communication must be reviewed by legal counsel')
            elif crisis['type'] == 'pr_crisis':
                guidelines.append('📰 Use approved messaging from PR team only')
        
        if not guidelines:
            guidelines.append('📧 Maintain professional and empathetic tone')
        
        return guidelines
    
    def get_crisis_dashboard(self):
        """Generate crisis monitoring dashboard."""
        return {
            'generated_at': datetime.now().isoformat(),
            'total_alerts': len(self.crisis_alerts),
            'active_crises': sum(1 for a in self.crisis_alerts if a['severity'] in ['critical', 'high']),
            'by_severity': {
                'critical': sum(1 for a in self.crisis_alerts if a['severity'] == 'critical'),
                'high': sum(1 for a in self.crisis_alerts if a['severity'] == 'high'),
                'medium': sum(1 for a in self.crisis_alerts if a['severity'] == 'medium'),
                'low': sum(1 for a in self.crisis_alerts if a['severity'] == 'low')
            },
            'recent_alerts': self.crisis_alerts[-10:]
        }


if __name__ == '__main__':
    system = CrisisDetectionSystem()
    
    test_emails = [
        {
            'id': 'e001',
            'sender': 'angry_customer@bigcorp.com',
            'recipients': ['support@ziontechgroup.com', 'ceo@ziontechgroup.com'],
            'subject': 'URGENT: Data Breach - Legal Action Imminent',
            'body': 'We have discovered a critical security breach in your platform that exposed our customer data. This is unacceptable and we are furious. Our attorney is preparing legal action against your company. We demand immediate response and will report this to regulatory authorities if not resolved within 24 hours.',
            'timestamp': '2026-05-30T14:30:00'
        },
        {
            'id': 'e002',
            'sender': 'pr@ziontechgroup.com',
            'recipients': ['marketing@ziontechgroup.com'],
            'subject': 'Negative media coverage about our product',
            'body': 'TechCrunch is writing an article about customer complaints regarding our AI platform. We need to prepare a public statement and coordinate our response strategy.',
            'timestamp': '2026-05-30T15:00:00'
        }
    ]
    
    print("=== V1048: AI Email Crisis Detection System ===\n")
    
    for email in test_emails:
        result = system.analyze_email(email)
        print(f"Email: {email['subject']}")
        print(f"  Crisis Detected: {'YES' if result['crisis_detected'] else 'NO'}")
        print(f"  Severity: {result['severity_level'].upper()} ({result['severity_score']}/100)")
        print(f"  Crisis Types: {[c['type'] for c in result['crisis_types']]}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        
        if result['escalation_plan']['escalate']:
            print(f"  🚨 Escalate to: {', '.join(result['escalation_plan']['escalate_to'])}")
            print(f"  ⏰ Response Time: {result['escalation_plan']['response_time']}")
        
        for action in result['immediate_actions'][:2]:
            print(f"  ⚡ {action}")
        print()
    
    dashboard = system.get_crisis_dashboard()
    print(f"=== Crisis Dashboard ===")
    print(f"Total Alerts: {dashboard['total_alerts']}")
    print(f"Active Crises: {dashboard['active_crises']}")

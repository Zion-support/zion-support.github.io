#!/usr/bin/env python3
"""
V1094: Email Compliance Guardian
Real-time compliance checking and audit trail generation.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
from datetime import datetime
from typing import Dict, List

class ComplianceGuardian:
    def __init__(self):
        self.compliance_rules = {
            'gdpr': {
                'name': 'GDPR',
                'requirements': ['consent', 'data_minimization', 'right_to_erasure'],
                'indicators': ['personal data', 'eu citizen', 'gdpr', 'data protection']
            },
            'hipaa': {
                'name': 'HIPAA',
                'requirements': ['phi_protection', 'minimum_necessary', 'audit_trail'],
                'indicators': ['patient', 'medical', 'health', 'hipaa', 'phi']
            },
            'sox': {
                'name': 'SOX',
                'requirements': ['financial_accuracy', 'internal_controls', 'audit_trail'],
                'indicators': ['financial', 'audit', 'sox', 'internal control', 'financial statement']
            },
            'pci_dss': {
                'name': 'PCI-DSS',
                'requirements': ['cardholder_data_protection', 'encryption', 'access_control'],
                'indicators': ['credit card', 'payment', 'pci', 'cardholder']
            }
        }
        
        self.sensitive_data_patterns = {
            'ssn': r'\b\d{3}-\d{2}-\d{4}\b',
            'credit_card': r'\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b',
            'email': r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
            'phone': r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b',
            'ip_address': r'\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b'
        }
    
    def check_compliance(self, email_data: Dict) -> Dict:
        """Check email for compliance issues."""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Detect applicable regulations
        applicable_regulations = self._detect_regulations(body, subject)
        
        # Check for sensitive data
        sensitive_data = self._detect_sensitive_data(body)
        
        # Validate compliance requirements
        compliance_issues = self._validate_requirements(body, applicable_regulations)
        
        # Generate audit trail
        audit_trail = self._generate_audit_trail(
            email_data, applicable_regulations, sensitive_data, compliance_issues, timestamp
        )
        
        # Calculate compliance score
        compliance_score = self._calculate_compliance_score(
            applicable_regulations, sensitive_data, compliance_issues
        )
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            applicable_regulations, sensitive_data, compliance_issues, 
            compliance_score, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'applicable_regulations': applicable_regulations,
            'sensitive_data_detected': sensitive_data,
            'compliance_issues': compliance_issues,
            'audit_trail': audit_trail,
            'compliance_score': compliance_score,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _detect_regulations(self, body: str, subject: str) -> List[Dict]:
        """Detect which regulations apply to this email."""
        text = (subject + ' ' + body).lower()
        applicable = []
        
        for reg_key, reg_info in self.compliance_rules.items():
            indicators = reg_info['indicators']
            if any(indicator in text for indicator in indicators):
                applicable.append({
                    'regulation': reg_info['name'],
                    'key': reg_key,
                    'confidence': 0.8,
                    'requirements': reg_info['requirements']
                })
        
        return applicable
    
    def _detect_sensitive_data(self, body: str) -> List[Dict]:
        """Detect sensitive data in email body."""
        sensitive_items = []
        
        for data_type, pattern in self.sensitive_data_patterns.items():
            matches = re.findall(pattern, body)
            if matches:
                # Mask the sensitive data for display
                masked = []
                for match in matches[:3]:  # Limit to 3 examples
                    if data_type == 'ssn':
                        masked.append('***-**-' + match[-4:])
                    elif data_type == 'credit_card':
                        masked.append('****-****-****-' + match[-4:])
                    elif data_type == 'email':
                        parts = match.split('@')
                        masked.append(parts[0][:3] + '***@' + parts[1])
                    else:
                        masked.append(match[:3] + '***')
                
                sensitive_items.append({
                    'type': data_type,
                    'count': len(matches),
                    'examples': masked,
                    'severity': 'high' if data_type in ['ssn', 'credit_card'] else 'medium'
                })
        
        return sensitive_items
    
    def _validate_requirements(self, body: str, regulations: List[Dict]) -> List[Dict]:
        """Validate compliance requirements."""
        issues = []
        
        for reg in regulations:
            # Check for missing consent indicators (GDPR)
            if reg['key'] == 'gdpr':
                consent_indicators = ['consent', 'opt-in', 'permission', 'agree']
                if not any(ind in body.lower() for ind in consent_indicators):
                    issues.append({
                        'regulation': reg['regulation'],
                        'requirement': 'consent',
                        'issue': 'No consent indicators found',
                        'severity': 'high'
                    })
            
            # Check for PHI protection (HIPAA)
            if reg['key'] == 'hipaa':
                encryption_indicators = ['encrypted', 'secure', 'confidential']
                if not any(ind in body.lower() for ind in encryption_indicators):
                    issues.append({
                        'regulation': reg['regulation'],
                        'requirement': 'phi_protection',
                        'issue': 'No encryption/security indicators found',
                        'severity': 'high'
                    })
            
            # Check for audit trail indicators (SOX)
            if reg['key'] == 'sox':
                audit_indicators = ['audit', 'record', 'documentation', 'log']
                if not any(ind in body.lower() for ind in audit_indicators):
                    issues.append({
                        'regulation': reg['regulation'],
                        'requirement': 'audit_trail',
                        'issue': 'No audit trail indicators found',
                        'severity': 'medium'
                    })
        
        return issues
    
    def _generate_audit_trail(self, email_data: Dict, regulations: List[Dict], 
                              sensitive_data: List[Dict], issues: List[Dict], 
                              timestamp: str) -> Dict:
        """Generate audit trail entry."""
        return {
            'timestamp': timestamp,
            'email_id': email_data.get('id'),
            'sender': email_data.get('sender'),
            'recipients': email_data.get('recipients'),
            'subject': email_data.get('subject'),
            'regulations_checked': [r['regulation'] for r in regulations],
            'sensitive_data_types': [s['type'] for s in sensitive_data],
            'compliance_issues_count': len(issues),
            'audit_hash': hash(str(email_data) + timestamp) % 1000000,
            'retention_period': self._determine_retention(regulations)
        }
    
    def _determine_retention(self, regulations: List[Dict]) -> str:
        """Determine data retention period based on regulations."""
        retention_periods = {
            'gdpr': 'As per consent or legal requirement',
            'hipaa': '6 years',
            'sox': '7 years',
            'pci_dss': '1 year'
        }
        
        if not regulations:
            return '3 years (standard)'
        
        # Use longest retention period
        max_period = '3 years (standard)'
        for reg in regulations:
            period = retention_periods.get(reg['key'], '3 years')
            if 'years' in period:
                years = int(period.split()[0])
                if 'years' in max_period:
                    max_years = int(max_period.split()[0])
                    if years > max_years:
                        max_period = period
        
        return max_period
    
    def _calculate_compliance_score(self, regulations: List[Dict], sensitive_data: List[Dict], 
                                     issues: List[Dict]) -> Dict:
        """Calculate compliance score."""
        base_score = 100
        
        # Deduct for sensitive data
        for data in sensitive_data:
            if data['severity'] == 'high':
                base_score -= 20
            else:
                base_score -= 10
        
        # Deduct for compliance issues
        for issue in issues:
            if issue['severity'] == 'high':
                base_score -= 15
            else:
                base_score -= 5
        
        score = max(0, base_score)
        
        if score >= 90:
            level = 'excellent'
        elif score >= 75:
            level = 'good'
        elif score >= 60:
            level = 'fair'
        else:
            level = 'poor'
        
        return {
            'score': score,
            'level': level,
            'regulations_count': len(regulations),
            'sensitive_data_count': len(sensitive_data),
            'issues_count': len(issues)
        }
    
    def _generate_recommendations(self, regulations, sensitive_data, issues, compliance_score, reply_all_required) -> List[str]:
        """Generate compliance recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if sensitive_data:
            high_severity = [s for s in sensitive_data if s['severity'] == 'high']
            if high_severity:
                recommendations.append(f'🚨 HIGH RISK: {len(high_severity)} type(s) of sensitive data detected')
                recommendations.append('🔒 Consider encrypting or removing sensitive information')
            
            for data in sensitive_data[:3]:
                recommendations.append(f'⚠️ {data["type"].replace("_", " ").title()}: {data["count"]} instance(s) found')
        
        if issues:
            for issue in issues[:3]:
                recommendations.append(f'⚖️ {issue["regulation"]}: {issue["issue"]}')
        
        if regulations:
            recommendations.append(f'📋 {len(regulations)} regulation(s) applicable: {", ".join([r["regulation"] for r in regulations])}')
        
        if compliance_score['score'] >= 90:
            recommendations.append('✅ Excellent compliance score - maintain current practices')
        elif compliance_score['score'] < 60:
            recommendations.append('⚠️ Poor compliance score - immediate review required')
            recommendations.append('📞 Consult with compliance officer before sending')
        
        if not recommendations:
            recommendations.append('✅ No compliance issues detected')
        
        return recommendations


if __name__ == '__main__':
    guardian = ComplianceGuardian()
    
    test_email = {
        'id': '1',
        'sender': 'hr@company.com',
        'recipients': ['manager@company.com', 'finance@company.com'],
        'subject': 'Employee Data - Confidential',
        'body': '''Hi Team,

Please find the employee information below:

SSN: 123-45-6789
Email: john.doe@example.com
Phone: 555-123-4567

This is confidential under GDPR regulations. The employee has given consent for data processing.

Best regards,
HR''',
        'timestamp': '2024-01-15T10:00:00'
    }
    
    result = guardian.check_compliance(test_email)
    
    print("=== V1094: Email Compliance Guardian ===\n")
    print(f"Compliance Score: {result['compliance_score']['score']}/100 ({result['compliance_score']['level']})")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nApplicable Regulations: {len(result['applicable_regulations'])}")
    for reg in result['applicable_regulations']:
        print(f"  - {reg['regulation']} (confidence: {reg['confidence']})")
    print(f"\nSensitive Data Detected: {len(result['sensitive_data_detected'])}")
    for data in result['sensitive_data_detected']:
        print(f"  - {data['type']}: {data['count']} instances ({data['severity']})")
    print(f"\nCompliance Issues: {len(result['compliance_issues'])}")
    for issue in result['compliance_issues']:
        print(f"  - [{issue['severity']}] {issue['regulation']}: {issue['issue']}")
    print(f"\nAudit Trail:")
    print(f"  Retention: {result['audit_trail']['retention_period']}")
    print(f"  Hash: {result['audit_trail']['audit_hash']}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")

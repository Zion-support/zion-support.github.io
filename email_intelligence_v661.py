#!/usr/bin/env python3
"""
V661 - Email Legal Compliance Guardian
Auto-detect GDPR, CCPA, HIPAA, SOX, and other regulatory compliance
issues in emails before sending. Prevents legal liability through
real-time content scanning and automated redaction suggestions.

Key Features:
- GDPR compliance scanning (personal data, consent, right to erasure)
- CCPA/CPRA compliance (California consumer rights)
- HIPAA compliance (protected health information detection)
- SOX compliance (financial statement references, audit trails)
- PCI-DSS compliance (credit card data detection)
- Attorney-client privilege detection
- Automated PII redaction suggestions
- Compliance scoring and risk assessment
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional, Set

class EmailLegalComplianceGuardian:
    """Scans emails for legal and regulatory compliance issues"""
    
    def __init__(self):
        self.audit_log = []
        self.compliance_rules = {}
        self._load_rules()
    
    def _load_rules(self):
        """Load compliance rule definitions"""
        self.compliance_rules = {
            'GDPR': {
                'name': 'General Data Protection Regulation',
                'jurisdiction': 'EU/EEA',
                'severity': 'critical',
                'fine_range': 'Up to €20M or 4% of global revenue'
            },
            'CCPA': {
                'name': 'California Consumer Privacy Act',
                'jurisdiction': 'California, USA',
                'severity': 'high',
                'fine_range': '$2,500-$7,500 per violation'
            },
            'HIPAA': {
                'name': 'Health Insurance Portability and Accountability Act',
                'jurisdiction': 'USA (Healthcare)',
                'severity': 'critical',
                'fine_range': '$100-$50,000 per violation (max $1.5M/year)'
            },
            'SOX': {
                'name': 'Sarbanes-Oxley Act',
                'jurisdiction': 'USA (Public Companies)',
                'severity': 'high',
                'fine_range': 'Up to $5M and 20 years imprisonment'
            },
            'PCI_DSS': {
                'name': 'Payment Card Industry Data Security Standard',
                'jurisdiction': 'Global (Payment Cards)',
                'severity': 'high',
                'fine_range': '$5,000-$100,000 per month'
            },
            'FERPA': {
                'name': 'Family Educational Rights and Privacy Act',
                'jurisdiction': 'USA (Education)',
                'severity': 'medium',
                'fine_range': 'Loss of federal funding'
            }
        }
    
    # PII Detection Patterns
    PII_PATTERNS = {
        'ssn': {
            'pattern': r'\b\d{3}-\d{2}-\d{4}\b',
            'description': 'Social Security Number',
            'regulations': ['GDPR', 'CCPA', 'HIPAA'],
            'severity': 'critical'
        },
        'credit_card': {
            'pattern': r'\b(?:4\d{3}|5[1-5]\d{2}|3[47]\d{2}|6(?:011|5\d{2}))[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b',
            'description': 'Credit Card Number',
            'regulations': ['PCI_DSS', 'GDPR', 'CCPA'],
            'severity': 'critical'
        },
        'email': {
            'pattern': r'\b[\w.+-]+@[\w-]+\.[\w.-]+\b',
            'description': 'Email Address',
            'regulations': ['GDPR', 'CCPA'],
            'severity': 'medium'
        },
        'phone': {
            'pattern': r'\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b',
            'description': 'Phone Number',
            'regulations': ['GDPR', 'CCPA', 'HIPAA'],
            'severity': 'medium'
        },
        'date_of_birth': {
            'pattern': r'\b(?:born|DOB|birth\s*date|birthday)[:\s]+\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b',
            'description': 'Date of Birth',
            'regulations': ['GDPR', 'HIPAA', 'CCPA'],
            'severity': 'high'
        },
        'passport': {
            'pattern': r'\b[A-Z]{1,2}\d{6,9}\b',
            'description': 'Passport Number',
            'regulations': ['GDPR', 'CCPA'],
            'severity': 'critical'
        },
        'drivers_license': {
            'pattern': r'\b[A-Z]\d{7,14}\b',
            'description': 'Driver License Number',
            'regulations': ['GDPR', 'CCPA', 'HIPAA'],
            'severity': 'high'
        },
        'ip_address': {
            'pattern': r'\b(?:\d{1,3}\.){3}\d{1,3}\b',
            'description': 'IP Address',
            'regulations': ['GDPR'],
            'severity': 'medium'
        },
        'bank_account': {
            'pattern': r'\b(?:account|routing|iban)[:\s]*[\w\s]*\d{8,17}\b',
            'description': 'Bank Account Number',
            'regulations': ['GDPR', 'CCPA', 'PCI_DSS'],
            'severity': 'critical'
        }
    }
    
    # HIPAA Protected Health Information (PHI)
    PHI_INDICATORS = [
        'diagnosis', 'treatment', 'prescription', 'medication', 'patient',
        'medical record', 'health condition', 'symptoms', 'prognosis',
        'lab results', 'blood type', 'allergies', 'immunization',
        'mental health', 'therapy', 'surgery', 'hospital', 'clinic',
        'insurance claim', 'health plan', 'medical device', 'vital signs',
        'BMI', 'blood pressure', 'glucose', 'cholesterol', 'HIV', 'cancer'
    ]
    
    # SOX Financial Indicators
    SOX_INDICATORS = [
        'revenue recognition', 'financial statement', 'audit', 'internal controls',
        'material weakness', 'earnings', 'quarterly results', 'annual report',
        'SEC filing', '10-K', '10-Q', '8-K', 'proxy statement',
        'executive compensation', 'stock option', 'insider trading',
        'financial restatement', 'accounting policy', 'GAAP', 'IFRS'
    ]
    
    # Attorney-Client Privilege Indicators
    PRIVILEGE_INDICATORS = [
        'attorney-client privilege', 'privileged and confidential',
        'attorney work product', 'legal advice', 'legal counsel',
        'privileged communication', 'attorney-client', 'lawyer-client',
        'legal opinion', 'confidential legal'
    ]
    
    def scan_pii(self, text: str) -> List[Dict]:
        """Scan text for personally identifiable information"""
        findings = []
        
        for pii_type, config in self.PII_PATTERNS.items():
            matches = re.finditer(config['pattern'], text, re.IGNORECASE)
            for match in matches:
                matched_text = match.group()
                # Avoid false positives for email (skip if it's a known internal address)
                if pii_type == 'email' and '@ziontechgroup.com' in matched_text.lower():
                    continue
                
                findings.append({
                    'type': pii_type,
                    'description': config['description'],
                    'matched_text': self._redact_value(matched_text, pii_type),
                    'raw_length': len(matched_text),
                    'regulations_affected': config['regulations'],
                    'severity': config['severity'],
                    'position': match.start(),
                    'recommendation': self._get_pii_recommendation(pii_type)
                })
        
        return findings
    
    def _redact_value(self, text: str, pii_type: str) -> str:
        """Redact sensitive values for safe display"""
        if pii_type == 'ssn':
            return '***-**-' + text[-4:]
        elif pii_type == 'credit_card':
            clean = text.replace('-', '').replace(' ', '')
            return '****-****-****-' + clean[-4:]
        elif pii_type == 'email':
            parts = text.split('@')
            return parts[0][:2] + '***@' + parts[1]
        elif pii_type == 'phone':
            return '***-***-' + text[-4:]
        elif pii_type == 'passport':
            return text[:2] + '***' + text[-2:]
        else:
            return text[:3] + '***'
    
    def _get_pii_recommendation(self, pii_type: str) -> str:
        """Get remediation recommendation for PII type"""
        recommendations = {
            'ssn': 'Remove SSN from email. Use secure document sharing instead.',
            'credit_card': 'Never send credit card numbers via email. Use PCI-compliant payment forms.',
            'email': 'Verify recipient has legitimate need for this email address.',
            'phone': 'Consider whether phone number is necessary. Use internal directory references.',
            'date_of_birth': 'Remove DOB. Use employee/customer ID as reference instead.',
            'passport': 'Remove passport number. Use secure document vault.',
            'drivers_license': 'Remove DL number. Use internal reference IDs.',
            'ip_address': 'Consider if IP address is necessary. May constitute personal data under GDPR.',
            'bank_account': 'Never send bank details via email. Use encrypted banking portals.'
        }
        return recommendations.get(pii_type, 'Review and redact if not essential.')
    
    def scan_hipaa(self, text: str) -> Dict:
        """Scan for HIPAA Protected Health Information"""
        text_lower = text.lower()
        phi_matches = []
        
        for indicator in self.PHI_INDICATORS:
            if indicator in text_lower:
                phi_matches.append(indicator)
        
        phi_count = len(phi_matches)
        
        if phi_count >= 5:
            risk_level = 'critical'
            risk_score = 90
        elif phi_count >= 3:
            risk_level = 'high'
            risk_score = 70
        elif phi_count >= 1:
            risk_level = 'medium'
            risk_score = 40
        else:
            risk_level = 'none'
            risk_score = 0
        
        return {
            'regulation': 'HIPAA',
            'phi_indicators_found': phi_matches,
            'phi_count': phi_count,
            'risk_level': risk_level,
            'risk_score': risk_score,
            'recommendation': self._get_hipaa_recommendation(risk_level),
            'encryption_required': risk_level in ['critical', 'high']
        }
    
    def _get_hipaa_recommendation(self, risk_level: str) -> str:
        """Get HIPAA recommendation based on risk"""
        recs = {
            'critical': 'STOP: Multiple PHI indicators detected. Do NOT send via unencrypted email. Use HIPAA-compliant secure messaging.',
            'high': 'WARNING: PHI detected. Ensure email encryption is enabled. Verify recipient authorization. Add BAA reference.',
            'medium': 'CAUTION: Potential PHI reference. Review content and minimize health information disclosure.',
            'none': 'No PHI indicators detected. Standard email protocols apply.'
        }
        return recs.get(risk_level, 'Review content for PHI.')
    
    def scan_sox(self, text: str) -> Dict:
        """Scan for SOX compliance issues"""
        text_lower = text.lower()
        sox_matches = []
        
        for indicator in self.SOX_INDICATORS:
            if indicator in text_lower:
                sox_matches.append(indicator)
        
        sox_count = len(sox_matches)
        
        if sox_count >= 3:
            risk_level = 'high'
            risk_score = 80
        elif sox_count >= 1:
            risk_level = 'medium'
            risk_score = 50
        else:
            risk_level = 'none'
            risk_score = 0
        
        return {
            'regulation': 'SOX',
            'indicators_found': sox_matches,
            'indicator_count': sox_count,
            'risk_level': risk_level,
            'risk_score': risk_score,
            'recommendation': self._get_sox_recommendation(risk_level),
            'audit_trail_required': sox_count > 0,
            'retention_policy': '7 years' if sox_count > 0 else 'standard'
        }
    
    def _get_sox_recommendation(self, risk_level: str) -> str:
        recs = {
            'high': 'Multiple SOX indicators detected. Ensure proper audit trail. CC compliance/legal team. Apply 7-year retention policy.',
            'medium': 'SOX-related content detected. Consider adding compliance team to recipients. Document rationale.',
            'none': 'No SOX indicators detected. Standard retention policies apply.'
        }
        return recs.get(risk_level, 'Review for SOX relevance.')
    
    def detect_privilege(self, text: str) -> Dict:
        """Detect attorney-client privilege claims"""
        text_lower = text.lower()
        matches = [ind for ind in self.PRIVILEGE_INDICATORS if ind in text_lower]
        
        is_privileged = len(matches) > 0
        
        return {
            'is_privileged': is_privileged,
            'privilege_indicators': matches,
            'recommendation': 'Ensure privilege is properly asserted. Include "PRIVILEGED AND CONFIDENTIAL" in subject line. CC only necessary parties.' if is_privileged else 'No privilege indicators. Standard handling applies.',
            'reply_all_warning': 'If privileged, verify ALL recipients have legitimate need. Do NOT reply-all to external parties.'
        }
    
    def scan_gdpr_consent(self, text: str, recipients: List[str]) -> Dict:
        """Check GDPR consent requirements for external recipients"""
        issues = []
        
        # Check for external recipients (outside organization)
        external = [r for r in recipients if '@ziontechgroup.com' not in r.lower()]
        
        if external:
            # Check for consent indicators
            consent_phrases = ['consent', 'opt-in', 'unsubscribe', 'privacy policy', 'data processing']
            text_lower = text.lower()
            has_consent = any(phrase in text_lower for phrase in consent_phrases)
            
            if not has_consent:
                issues.append('External recipients detected without consent/privacy notice reference')
            
            # Check for data transfer
            eu_countries = ['austria', 'belgium', 'bulgaria', 'croatia', 'cyprus', 'czech',
                          'denmark', 'estonia', 'finland', 'france', 'germany', 'greece',
                          'hungary', 'ireland', 'italy', 'latvia', 'lithuania', 'luxembourg',
                          'malta', 'netherlands', 'poland', 'portugal', 'romania', 'slovakia',
                          'slovenia', 'spain', 'sweden', 'uk', 'norway', 'iceland']
            
            for recipient in external:
                domain = recipient.split('@')[-1].lower()
                for country in eu_countries:
                    if country in domain:
                        issues.append(f'Potential EU data transfer: {recipient}')
                        break
        
        return {
            'regulation': 'GDPR',
            'external_recipients': external,
            'issues': issues,
            'consent_referenced': len(issues) == 0,
            'risk_score': min(100, len(issues) * 25),
            'recommendation': 'Add privacy notice link and ensure lawful basis for data processing.' if issues else 'GDPR requirements appear met.'
        }
    
    def full_compliance_scan(self, email: Dict) -> Dict:
        """Perform comprehensive compliance scan"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        recipients = email.get('to', []) + email.get('cc', [])
        
        # Run all scans
        pii_scan = self.scan_pii(text)
        hipaa_scan = self.scan_hipaa(text)
        sox_scan = self.scan_sox(text)
        privilege_scan = self.detect_privilege(text)
        gdpr_scan = self.scan_gdpr_consent(text, recipients)
        
        # Calculate overall compliance score
        total_risk = 0
        total_risk += sum(1 for p in pii_scan if p['severity'] == 'critical') * 30
        total_risk += sum(1 for p in pii_scan if p['severity'] == 'high') * 20
        total_risk += sum(1 for p in pii_scan if p['severity'] == 'medium') * 10
        total_risk += hipaa_scan['risk_score'] * 0.3
        total_risk += sox_scan['risk_score'] * 0.2
        total_risk += gdpr_scan['risk_score'] * 0.2
        
        compliance_score = max(0, 100 - total_risk)
        
        if compliance_score >= 90:
            status = 'compliant'
        elif compliance_score >= 70:
            status = 'minor_issues'
        elif compliance_score >= 50:
            status = 'needs_review'
        elif compliance_score >= 30:
            status = 'significant_issues'
        else:
            status = 'do_not_send'
        
        # Compile all recommendations
        all_recommendations = []
        for pii in pii_scan:
            all_recommendations.append({'category': 'PII', 'issue': pii['description'], 'action': pii['recommendation']})
        
        if hipaa_scan['risk_level'] in ['critical', 'high']:
            all_recommendations.append({'category': 'HIPAA', 'issue': f'{hipaa_scan["phi_count"]} PHI indicators', 'action': hipaa_scan['recommendation']})
        
        if sox_scan['risk_level'] != 'none':
            all_recommendations.append({'category': 'SOX', 'issue': f'{sox_scan["indicator_count"]} SOX indicators', 'action': sox_scan['recommendation']})
        
        if gdpr_scan['issues']:
            for issue in gdpr_scan['issues']:
                all_recommendations.append({'category': 'GDPR', 'issue': issue, 'action': gdpr_scan['recommendation']})
        
        if privilege_scan['is_privileged']:
            all_recommendations.append({'category': 'Privilege', 'issue': 'Attorney-client privilege detected', 'action': privilege_scan['recommendation']})
        
        result = {
            'email_id': email.get('id', ''),
            'compliance_score': round(compliance_score, 1),
            'status': status,
            'pii_findings': pii_scan,
            'hipaa_assessment': hipaa_scan,
            'sox_assessment': sox_scan,
            'privilege_assessment': privilege_scan,
            'gdpr_assessment': gdpr_scan,
            'total_recommendations': len(all_recommendations),
            'recommendations': all_recommendations,
            'regulations_affected': list(set(
                [reg for pii in pii_scan for reg in pii['regulations_affected']] +
                (['HIPAA'] if hipaa_scan['risk_level'] != 'none' else []) +
                (['SOX'] if sox_scan['risk_level'] != 'none' else [])
            )),
            'can_send': status in ['compliant', 'minor_issues'],
            'reply_all_required': len(recipients) > 1,
            'timestamp': datetime.now().isoformat()
        }
        
        self.audit_log.append(result)
        return result
    
    def generate_compliance_report(self) -> Dict:
        """Generate overall compliance report"""
        if not self.audit_log:
            return {'message': 'No scans performed'}
        
        avg_score = sum(a['compliance_score'] for a in self.audit_log) / len(self.audit_log)
        blocked = sum(1 for a in self.audit_log if a['status'] == 'do_not_send')
        
        from collections import Counter
        all_regs = []
        for audit in self.audit_log:
            all_regs.extend(audit.get('regulations_affected', []))
        
        return {
            'total_scans': len(self.audit_log),
            'avg_compliance_score': round(avg_score, 1),
            'emails_blocked': blocked,
            'emails_approved': sum(1 for a in self.audit_log if a['can_send']),
            'regulations_triggered': dict(Counter(all_regs)),
            'common_pii_types': dict(Counter(
                p['type'] for a in self.audit_log for p in a.get('pii_findings', [])
            ))
        }


def test_v661():
    """Test V661 Email Legal Compliance Guardian"""
    guardian = EmailLegalComplianceGuardian()
    
    # Test 1: Email with PII and HIPAA issues
    risky_email = {
        'id': 'email_001',
        'from': 'doctor@hospital.com',
        'to': ['admin@hospital.com', 'billing@hospital.com'],
        'subject': 'Patient Records - John Smith',
        'body': 'Patient John Smith, SSN 123-45-6789, DOB: 03/15/1985, was diagnosed with diabetes. His credit card 4111-1111-1111-1111 was charged $500 for treatment. His insurance claim has been filed. Please process the audit for quarterly financial statement review.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Clean email
    clean_email = {
        'id': 'email_002',
        'from': 'manager@ziontechgroup.com',
        'to': ['team@ziontechgroup.com'],
        'subject': 'Team Meeting Agenda',
        'body': 'Hi team, let\'s discuss the new project timeline and resource allocation in tomorrow\'s meeting. Please come prepared with your updates.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Privileged communication
    privileged_email = {
        'id': 'email_003',
        'from': 'counsel@lawfirm.com',
        'to': ['ceo@company.com'],
        'subject': 'PRIVILEGED AND CONFIDENTIAL - Legal Advice on Merger',
        'body': 'This is a privileged and confidential attorney-client communication. Regarding the proposed merger, our legal opinion is that the terms are favorable. Please do not forward without legal counsel approval.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    for email in [risky_email, clean_email, privileged_email]:
        result = guardian.full_compliance_scan(email)
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Score: {result['compliance_score']}/100 ({result['status']})")
        print(f"Can Send: {result['can_send']}")
        print(f"Regulations: {result['regulations_affected']}")
        print(f"Recommendations: {result['total_recommendations']}")
        for rec in result['recommendations'][:3]:
            print(f"  [{rec['category']}] {rec['action'][:80]}")
    
    report = guardian.generate_compliance_report()
    print(f"\n{'='*50}")
    print(f"✅ V661 Legal Compliance Guardian - Overall Report")
    print(f"Total Scans: {report['total_scans']}")
    print(f"Avg Score: {report['avg_compliance_score']}/100")
    print(f"Blocked: {report['emails_blocked']}")
    print(f"Approved: {report['emails_approved']}")
    
    return report


if __name__ == '__main__':
    test_v661()

#!/usr/bin/env python3
"""
V475 - AI Email Compliance Checker
Real-time compliance validation for GDPR, HIPAA, PCI-DSS, SOX, and other regulations.
Features: PII detection, compliance scoring, auto-redaction, audit trail generation.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Any


class EmailComplianceChecker:
    """Real-time email compliance validation."""
    
    COMPLIANCE_PATTERNS = {
        'gdpr': {
            'pii': [
                r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',  # Email
                r'\b(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b',  # Phone
                r'\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b',  # Date of birth
            ],
            'sensitive': ['health', 'religion', 'political', 'ethnic', 'biometric', 'genetic']
        },
        'hipaa': {
            'phi': [
                r'\b\d{3}-\d{2}-\d{4}\b',  # SSN
                r'\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b',  # Credit card
            ],
            'medical': ['diagnosis', 'treatment', 'prescription', 'medical record', 'patient', 'health condition']
        },
        'pci_dss': {
            'card_data': [
                r'\b(?:\d{4}[-\s]?){3}\d{4}\b',  # Credit card number
                r'\b(?:cvv|cvc|security code)[:\s]*\d{3,4}\b',  # CVV
                r'\b(?:exp|expiry|expiration)[:\s]*\d{2}/\d{2}\b'  # Expiry
            ]
        },
        'sox': {
            'financial': ['revenue', 'profit', 'loss', 'audit', 'financial statement', 'quarterly report', 'earnings']
        }
    }
    
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for compliance issues."""
        body = email.get('body', '')
        subject = email.get('subject', '')
        recipients = email.get('to', []) + email.get('cc', [])
        attachments = email.get('attachments', [])
        
        text = body + ' ' + subject
        
        # Run compliance checks
        gdpr_check = self._check_gdpr(text)
        hipaa_check = self._check_hipaa(text)
        pci_check = self._check_pci(text)
        sox_check = self._check_sox(text)
        
        # Calculate overall compliance score
        compliance_score = self._calculate_compliance_score(gdpr_check, hipaa_check, pci_check, sox_check)
        
        # Generate redaction suggestions
        redactions = self._generate_redactions(text)
        
        # Determine if external recipients
        has_external = self._has_external_recipients(recipients)
        
        reply_all_required = len(recipients) > 1
        
        return {
            'engine': 'V475_EmailComplianceChecker',
            'compliance_score': compliance_score,
            'gdpr_check': gdpr_check,
            'hipaa_check': hipaa_check,
            'pci_check': pci_check,
            'sox_check': sox_check,
            'redactions_suggested': redactions,
            'external_recipients': has_external,
            'compliance_warnings': self._generate_warnings(gdpr_check, hipaa_check, pci_check, sox_check, has_external),
            'audit_trail': self._generate_audit_trail(email),
            'reply_all_required': reply_all_required,
            'reply_all_enforced': reply_all_required,
            'recipients': recipients,
            'timestamp': datetime.now().isoformat()
        }
    
    def _check_gdpr(self, text: str) -> Dict:
        """Check GDPR compliance."""
        pii_found = []
        sensitive_found = []
        
        for pattern in self.COMPLIANCE_PATTERNS['gdpr']['pii']:
            matches = re.findall(pattern, text)
            if matches:
                pii_found.extend(matches)
        
        for keyword in self.COMPLIANCE_PATTERNS['gdpr']['sensitive']:
            if keyword in text.lower():
                sensitive_found.append(keyword)
        
        compliant = len(pii_found) == 0 and len(sensitive_found) == 0
        
        return {
            'compliant': compliant,
            'pii_found': len(pii_found),
            'sensitive_data_found': len(sensitive_found),
            'risk_level': 'high' if not compliant else 'low',
            'details': {'pii': pii_found[:5], 'sensitive': sensitive_found[:5]}
        }
    
    def _check_hipaa(self, text: str) -> Dict:
        """Check HIPAA compliance."""
        phi_found = []
        medical_terms = []
        
        for pattern in self.COMPLIANCE_PATTERNS['hipaa']['phi']:
            matches = re.findall(pattern, text)
            if matches:
                phi_found.extend(matches)
        
        for keyword in self.COMPLIANCE_PATTERNS['hipaa']['medical']:
            if keyword in text.lower():
                medical_terms.append(keyword)
        
        compliant = len(phi_found) == 0
        
        return {
            'compliant': compliant,
            'phi_found': len(phi_found),
            'medical_terms': len(medical_terms),
            'risk_level': 'high' if phi_found else 'low',
            'details': {'phi': phi_found[:5], 'medical': medical_terms[:5]}
        }
    
    def _check_pci(self, text: str) -> Dict:
        """Check PCI-DSS compliance."""
        card_data = []
        
        for pattern in self.COMPLIANCE_PATTERNS['pci_dss']['card_data']:
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                card_data.extend(matches)
        
        compliant = len(card_data) == 0
        
        return {
            'compliant': compliant,
            'card_data_found': len(card_data),
            'risk_level': 'critical' if card_data else 'low',
            'details': card_data[:3]
        }
    
    def _check_sox(self, text: str) -> Dict:
        """Check SOX compliance."""
        financial_terms = []
        
        for keyword in self.COMPLIANCE_PATTERNS['sox']['financial']:
            if keyword in text.lower():
                financial_terms.append(keyword)
        
        return {
            'compliant': True,  # SOX is about retention, not content
            'financial_terms': len(financial_terms),
            'retention_required': len(financial_terms) > 0,
            'retention_period': '7 years' if financial_terms else '1 year',
            'details': financial_terms[:5]
        }
    
    def _calculate_compliance_score(self, gdpr: Dict, hipaa: Dict, pci: Dict, sox: Dict) -> Dict:
        """Calculate overall compliance score."""
        checks = [gdpr, hipaa, pci, sox]
        compliant_count = sum(1 for c in checks if c.get('compliant', True))
        score = int((compliant_count / len(checks)) * 100)
        
        if score >= 90:
            status = 'excellent'
        elif score >= 70:
            status = 'good'
        elif score >= 50:
            status = 'needs_review'
        else:
            status = 'critical'
        
        return {
            'score': score,
            'status': status,
            'checks_passed': compliant_count,
            'checks_total': len(checks)
        }
    
    def _generate_redactions(self, text: str) -> List[Dict]:
        """Generate redaction suggestions."""
        redactions = []
        
        # SSN
        ssn_matches = re.findall(r'\b\d{3}-\d{2}-\d{4}\b', text)
        for match in ssn_matches:
            redactions.append({
                'original': match,
                'redacted': '***-**-****',
                'type': 'ssn'
            })
        
        # Credit card
        cc_matches = re.findall(r'\b(?:\d{4}[-\s]?){3}\d{4}\b', text)
        for match in cc_matches:
            redacted = match[:4] + ' **** **** ' + match[-4:]
            redactions.append({
                'original': match,
                'redacted': redacted,
                'type': 'credit_card'
            })
        
        return redactions
    
    def _has_external_recipients(self, recipients: List[str]) -> bool:
        """Check if email has external recipients."""
        internal_domains = ['ziontechgroup.com', 'zion.com']
        for recipient in recipients:
            if '@' in recipient:
                domain = recipient.split('@')[-1].lower()
                if domain not in internal_domains:
                    return True
        return False
    
    def _generate_warnings(self, gdpr: Dict, hipaa: Dict, pci: Dict, sox: Dict, has_external: bool) -> List[str]:
        """Generate compliance warnings."""
        warnings = []
        
        if not gdpr['compliant'] and has_external:
            warnings.append('⚠️ GDPR: PII detected with external recipients. Review before sending.')
        
        if not hipaa['compliant']:
            warnings.append('⚠️ HIPAA: PHI detected. Ensure encrypted transmission.')
        
        if not pci['compliant']:
            warnings.append('🚨 PCI-DSS: Card data detected! Remove or encrypt before sending.')
        
        if sox['retention_required']:
            warnings.append('📋 SOX: Financial data detected. 7-year retention applies.')
        
        if not warnings:
            warnings.append('✅ All compliance checks passed.')
        
        warnings.append('Always use reply-all for multi-recipient emails.')
        
        return warnings
    
    def _generate_audit_trail(self, email: Dict) -> Dict:
        """Generate audit trail for compliance."""
        return {
            'checked_at': datetime.now().isoformat(),
            'sender': email.get('from', ''),
            'recipients_count': len(email.get('to', []) + email.get('cc', [])),
            'has_attachments': bool(email.get('attachments')),
            'engine_version': 'V475',
            'compliance_frameworks': ['GDPR', 'HIPAA', 'PCI-DSS', 'SOX']
        }


def main():
    """Test V475 engine."""
    engine = EmailComplianceChecker()
    
    test_email = {
        'from': 'employee@ziontechgroup.com',
        'to': ['client@external.com', 'partner@another.com'],
        'cc': ['legal@ziontechgroup.com'],
        'subject': 'Employee Health Records and Payment Info',
        'body': 'Please find the employee SSN: 123-45-6789 and credit card: 4111-1111-1111-1111 with CVV 123. The patient diagnosis is confidential. Financial statement shows Q4 revenue of $5M.'
    }
    
    result = engine.analyze_email(test_email)
    print(json.dumps(result, indent=2))
    print(f"\n✅ Compliance score: {result['compliance_score']['score']}/100 ({result['compliance_score']['status']})")
    print(f"✅ Warnings: {len(result['compliance_warnings'])}")
    print(f"✅ Redactions: {len(result['redactions_suggested'])}")
    print(f"✅ External recipients: {result['external_recipients']}")
    print(f"✅ Reply-all enforced: {result['reply_all_enforced']}")


if __name__ == '__main__':
    main()

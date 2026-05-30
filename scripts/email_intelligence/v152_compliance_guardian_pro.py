#!/usr/bin/env python3
"""
V152 - AI Email Compliance & GDPR Guardian Pro
Advanced compliance monitoring for GDPR, CCPA, HIPAA, SOX, PCI-DSS.
Automatically detects PII, sensitive data, and compliance violations.
"""

import json
import re
import hashlib
from datetime import datetime
from typing import Dict, List, Any, Optional, Tuple


class ComplianceGuardianPro:
    """Advanced email compliance and data protection guardian."""
    
    def __init__(self):
        self.compliance_frameworks = {
            'gdpr': {
                'name': 'GDPR',
                'full_name': 'General Data Protection Regulation',
                'jurisdiction': 'EU/EEA',
                'rules': self._build_gdpr_rules()
            },
            'ccpa': {
                'name': 'CCPA',
                'full_name': 'California Consumer Privacy Act',
                'jurisdiction': 'California, USA',
                'rules': self._build_ccpa_rules()
            },
            'hipaa': {
                'name': 'HIPAA',
                'full_name': 'Health Insurance Portability and Accountability Act',
                'jurisdiction': 'USA (Healthcare)',
                'rules': self._build_hipaa_rules()
            },
            'sox': {
                'name': 'SOX',
                'full_name': 'Sarbanes-Oxley Act',
                'jurisdiction': 'USA (Public Companies)',
                'rules': self._build_sox_rules()
            },
            'pci_dss': {
                'name': 'PCI-DSS',
                'full_name': 'Payment Card Industry Data Security Standard',
                'jurisdiction': 'Global (Payment Cards)',
                'rules': self._build_pci_rules()
            }
        }
        
        self.pii_patterns = {
            'ssn': r'\b\d{3}-\d{2}-\d{4}\b',
            'credit_card': r'\b(?:\d{4}[-\s]?){3}\d{4}\b',
            'passport': r'\b[A-Z]{1,2}\d{6,9}\b',
            'drivers_license': r'\b[A-Z]\d{7,14}\b',
            'bank_account': r'\b\d{8,17}\b',
            'routing_number': r'\b\d{9}\b',
            'ip_address': r'\b(?:\d{1,3}\.){3}\d{1,3}\b',
            'mac_address': r'\b(?:[0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}\b'
        }
        
        self.sensitive_keywords = {
            'health': ['diagnosis', 'treatment', 'prescription', 'medical', 'patient', 'health condition'],
            'financial': ['salary', 'income', 'bank account', 'credit score', 'tax return', 'financial statement'],
            'legal': ['lawsuit', 'settlement', 'confidential', 'privileged', 'attorney-client'],
            'hr': ['performance review', 'disciplinary', 'termination', 'salary negotiation', 'background check'],
            'credentials': ['password', 'api key', 'secret', 'token', 'private key', 'ssh key']
        }
        
        self.violation_log = []
        self.audit_trail = []
    
    def _build_gdpr_rules(self) -> Dict:
        return {
            'pii_detection': True,
            'consent_required': True,
            'data_minimization': True,
            'right_to_erasure': True,
            'breach_notification_hours': 72,
            'data_transfer_restrictions': True
        }
    
    def _build_ccpa_rules(self) -> Dict:
        return {
            'pii_detection': True,
            'opt_out_required': True,
            'data_sale_disclosure': True,
            'consumer_rights': True
        }
    
    def _build_hipaa_rules(self) -> Dict:
        return {
            'phi_detection': True,
            'encryption_required': True,
            'access_controls': True,
            'audit_logging': True,
            'breach_notification': True
        }
    
    def _build_sox_rules(self) -> Dict:
        return {
            'financial_data_protection': True,
            'audit_trail_required': True,
            'internal_controls': True,
            'record_retention': True
        }
    
    def _build_pci_rules(self) -> Dict:
        return {
            'card_data_detection': True,
            'encryption_required': True,
            'no_storage_of_cvv': True,
            'access_restrictions': True
        }
    
    def scan_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Comprehensive compliance scan of an email."""
        
        content = f"{email.get('subject', '')} {email.get('body', '')}"
        
        # Detect PII
        pii_findings = self._detect_pii(content)
        
        # Detect sensitive data
        sensitive_findings = self._detect_sensitive_data(content)
        
        # Check compliance frameworks
        compliance_results = self._check_compliance(email, pii_findings, sensitive_findings)
        
        # Calculate risk score
        risk_score = self._calculate_risk_score(pii_findings, sensitive_findings, compliance_results)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(pii_findings, sensitive_findings, compliance_results)
        
        # Build scan result
        scan_result = {
            'scan_id': hashlib.md5(f"{email.get('from', '')}{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            'timestamp': datetime.now().isoformat(),
            'risk_score': risk_score,
            'risk_level': self._get_risk_level(risk_score),
            'pii_findings': pii_findings,
            'sensitive_findings': sensitive_findings,
            'compliance_results': compliance_results,
            'recommendations': recommendations,
            'action_required': risk_score > 50,
            'block_sending': risk_score > 80
        }
        
        # Log audit trail
        self._log_audit(email, scan_result)
        
        return scan_result
    
    def _detect_pii(self, content: str) -> List[Dict[str, Any]]:
        """Detect personally identifiable information."""
        findings = []
        
        for pii_type, pattern in self.pii_patterns.items():
            matches = re.findall(pattern, content)
            for match in matches:
                findings.append({
                    'type': pii_type,
                    'value': self._mask_value(match),
                    'raw_value_hash': hashlib.sha256(match.encode()).hexdigest()[:16],
                    'severity': self._get_pii_severity(pii_type),
                    'position': content.find(match)
                })
        
        # Detect email addresses
        emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', content)
        for email_addr in emails:
            findings.append({
                'type': 'email_address',
                'value': self._mask_value(email_addr),
                'severity': 'medium',
                'position': content.find(email_addr)
            })
        
        # Detect phone numbers
        phones = re.findall(r'\+?1?\s*\(?[0-9]{3}\)?[-.\s]*[0-9]{3}[-.\s]*[0-9]{4}', content)
        for phone in phones:
            findings.append({
                'type': 'phone_number',
                'value': self._mask_value(phone),
                'severity': 'medium',
                'position': content.find(phone)
            })
        
        return findings
    
    def _detect_sensitive_data(self, content: str) -> List[Dict[str, Any]]:
        """Detect sensitive data categories."""
        findings = []
        content_lower = content.lower()
        
        for category, keywords in self.sensitive_keywords.items():
            for keyword in keywords:
                if keyword in content_lower:
                    findings.append({
                        'category': category,
                        'keyword': keyword,
                        'severity': self._get_sensitive_severity(category),
                        'position': content_lower.find(keyword)
                    })
        
        return findings
    
    def _check_compliance(self, email: Dict[str, Any], pii_findings: List, sensitive_findings: List) -> Dict[str, Any]:
        """Check compliance against frameworks."""
        results = {}
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        # GDPR checks
        gdpr_violations = []
        if pii_findings:
            gdpr_violations.append({
                'rule': 'PII detected without consent verification',
                'severity': 'high',
                'article': 'Article 6 - Lawfulness of processing'
            })
        
        if any(f['type'] == 'ssn' or f['type'] == 'credit_card' for f in pii_findings):
            gdpr_violations.append({
                'rule': 'Special category data detected',
                'severity': 'critical',
                'article': 'Article 9 - Processing of special categories'
            })
        
        results['gdpr'] = {
            'compliant': len(gdpr_violations) == 0,
            'violations': gdpr_violations
        }
        
        # HIPAA checks
        hipaa_violations = []
        health_keywords = ['patient', 'diagnosis', 'treatment', 'medical', 'prescription']
        if any(kw in content for kw in health_keywords):
            if pii_findings:
                hipaa_violations.append({
                    'rule': 'PHI (Protected Health Information) detected',
                    'severity': 'critical',
                    'section': '45 CFR § 164.312'
                })
        
        results['hipaa'] = {
            'compliant': len(hipaa_violations) == 0,
            'violations': hipaa_violations
        }
        
        # PCI-DSS checks
        pci_violations = []
        if any(f['type'] == 'credit_card' for f in pii_findings):
            pci_violations.append({
                'rule': 'Cardholder data detected in email',
                'severity': 'critical',
                'requirement': 'PCI DSS Requirement 4 - Encrypt transmission'
            })
        
        if 'cvv' in content or 'cvc' in content or 'security code' in content:
            pci_violations.append({
                'rule': 'CVV/CVC data detected - never store',
                'severity': 'critical',
                'requirement': 'PCI DSS Requirement 3.2'
            })
        
        results['pci_dss'] = {
            'compliant': len(pci_violations) == 0,
            'violations': pci_violations
        }
        
        # SOX checks
        sox_violations = []
        financial_keywords = ['financial statement', 'audit', 'revenue', 'quarterly', 'earnings']
        if any(kw in content for kw in financial_keywords):
            sox_violations.append({
                'rule': 'Financial data requires audit trail',
                'severity': 'high',
                'section': 'Section 302 - Corporate responsibility'
            })
        
        results['sox'] = {
            'compliant': len(sox_violations) == 0,
            'violations': sox_violations
        }
        
        return results
    
    def _calculate_risk_score(self, pii_findings: List, sensitive_findings: List, compliance_results: Dict) -> float:
        """Calculate overall risk score."""
        score = 0
        
        # PII risk
        severity_scores = {'critical': 30, 'high': 20, 'medium': 10, 'low': 5}
        for finding in pii_findings:
            score += severity_scores.get(finding['severity'], 5)
        
        # Sensitive data risk
        for finding in sensitive_findings:
            score += severity_scores.get(finding['severity'], 5)
        
        # Compliance violations
        for framework, result in compliance_results.items():
            if not result['compliant']:
                for violation in result['violations']:
                    score += severity_scores.get(violation['severity'], 10)
        
        return min(score, 100)
    
    def _get_risk_level(self, score: float) -> str:
        """Get risk level from score."""
        if score >= 80:
            return 'CRITICAL'
        elif score >= 60:
            return 'HIGH'
        elif score >= 40:
            return 'MEDIUM'
        elif score >= 20:
            return 'LOW'
        else:
            return 'MINIMAL'
    
    def _get_pii_severity(self, pii_type: str) -> str:
        """Get severity for PII type."""
        critical_types = ['ssn', 'credit_card', 'bank_account', 'passport']
        high_types = ['drivers_license', 'routing_number']
        
        if pii_type in critical_types:
            return 'critical'
        elif pii_type in high_types:
            return 'high'
        else:
            return 'medium'
    
    def _get_sensitive_severity(self, category: str) -> str:
        """Get severity for sensitive data category."""
        if category == 'health':
            return 'critical'
        elif category in ['financial', 'credentials']:
            return 'high'
        elif category == 'legal':
            return 'high'
        else:
            return 'medium'
    
    def _mask_value(self, value: str) -> str:
        """Mask sensitive value for display."""
        if len(value) <= 4:
            return '*' * len(value)
        return value[:2] + '*' * (len(value) - 4) + value[-2:]
    
    def _generate_recommendations(self, pii_findings: List, sensitive_findings: List, compliance_results: Dict) -> List[str]:
        """Generate compliance recommendations."""
        recommendations = []
        
        if pii_findings:
            recommendations.append("⚠️ PII detected: Consider redacting or encrypting before sending.")
            recommendations.append("🔒 Verify sender has legal basis for processing this data.")
        
        if any(f['type'] == 'credit_card' for f in pii_findings):
            recommendations.append("🚨 CRITICAL: Credit card data detected. Never send via email. Use secure payment portal.")
        
        if any(f['type'] == 'ssn' for f in pii_findings):
            recommendations.append("🚨 CRITICAL: SSN detected. Use secure document sharing instead of email.")
        
        if sensitive_findings:
            categories = set(f['category'] for f in sensitive_findings)
            recommendations.append(f"📋 Sensitive categories detected: {', '.join(categories)}. Apply appropriate safeguards.")
        
        for framework, result in compliance_results.items():
            if not result['compliant']:
                recommendations.append(f"⚖️ {framework.upper()} violations detected. Review before sending.")
        
        if not recommendations:
            recommendations.append("✅ No compliance issues detected. Safe to send.")
        
        return recommendations
    
    def _log_audit(self, email: Dict[str, Any], scan_result: Dict[str, Any]):
        """Log audit trail."""
        self.audit_trail.append({
            'timestamp': datetime.now().isoformat(),
            'email_from': email.get('from', ''),
            'email_subject': email.get('subject', ''),
            'scan_id': scan_result['scan_id'],
            'risk_score': scan_result['risk_score'],
            'risk_level': scan_result['risk_level'],
            'action_taken': 'blocked' if scan_result['block_sending'] else 'allowed'
        })
        
        if scan_result['risk_score'] > 50:
            self.violation_log.append({
                'timestamp': datetime.now().isoformat(),
                'scan_id': scan_result['scan_id'],
                'violations': scan_result['compliance_results']
            })
    
    def get_compliance_report(self) -> Dict[str, Any]:
        """Generate compliance report."""
        return {
            'total_scans': len(self.audit_trail),
            'total_violations': len(self.violation_log),
            'blocked_emails': sum(1 for a in self.audit_trail if a['action_taken'] == 'blocked'),
            'risk_distribution': {
                'critical': sum(1 for a in self.audit_trail if a['risk_level'] == 'CRITICAL'),
                'high': sum(1 for a in self.audit_trail if a['risk_level'] == 'HIGH'),
                'medium': sum(1 for a in self.audit_trail if a['risk_level'] == 'MEDIUM'),
                'low': sum(1 for a in self.audit_trail if a['risk_level'] == 'LOW')
            },
            'frameworks_monitored': list(self.compliance_frameworks.keys()),
            'recent_scans': self.audit_trail[-10:]
        }


def process_email_compliance(email_data: Dict[str, Any]) -> Dict[str, Any]:
    """Main entry point for compliance scanning."""
    guardian = ComplianceGuardianPro()
    return guardian.scan_email(email_data)


if __name__ == '__main__':
    test_email = {
        'from': 'employee@company.com',
        'subject': 'Client Information',
        'body': 'Hi, here is the client info: SSN: 123-45-6789, '
                'Credit Card: 4111-1111-1111-1111, Email: client@example.com, '
                'Phone: +1-555-0123. The patient diagnosis is confidential.'
    }
    
    result = process_email_compliance(test_email)
    print(json.dumps(result, indent=2))

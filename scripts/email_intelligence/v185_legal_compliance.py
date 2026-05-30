#!/usr/bin/env python3
"""
V185 - AI Email Legal Compliance Checker
Checks emails for legal compliance (GDPR, CCPA, CAN-SPAM), consent tracking,
data retention policies, and regulatory risk assessment.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
import hashlib

class LegalComplianceChecker:
    """AI-powered legal compliance checking system."""
    
    def __init__(self):
        self.compliance_rules = self._build_compliance_rules()
        self.consent_database = {}
        self.retention_policies = {}
        self.compliance_history = []
        self.risk_scores = defaultdict(float)
    
    def _build_compliance_rules(self) -> Dict[str, Dict]:
        """Build compliance rules for different regulations."""
        return {
            'gdpr': {
                'name': 'GDPR (EU)',
                'requirements': [
                    'explicit_consent_required',
                    'data_minimization',
                    'right_to_erasure',
                    'data_portability',
                    'breach_notification_72h'
                ],
                'pii_patterns': [
                    r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',  # Email
                    r'\b\d{3}-\d{2}-\d{4}\b',  # SSN
                    r'\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b',  # Credit card
                    r'\b\d{2}/\d{2}/\d{4}\b',  # Date of birth
                ],
                'risk_weight': 1.0
            },
            'ccpa': {
                'name': 'CCPA (California)',
                'requirements': [
                    'opt_out_right',
                    'disclosure_of_data_collection',
                    'no_discrimination_for_exercising_rights'
                ],
                'pii_patterns': [
                    r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
                    r'\b\d{3}-\d{2}-\d{4}\b',
                ],
                'risk_weight': 0.9
            },
            'can_spam': {
                'name': 'CAN-SPAM Act (US)',
                'requirements': [
                    'accurate_header_info',
                    'non_deceptive_subject',
                    'identify_as_advertisement',
                    'include_physical_address',
                    'opt_out_mechanism',
                    'honor_opt_out_requests'
                ],
                'pii_patterns': [],
                'risk_weight': 0.8
            },
            'hipaa': {
                'name': 'HIPAA (Healthcare)',
                'requirements': [
                    'phi_protection',
                    'minimum_necessary_standard',
                    'business_associate_agreements'
                ],
                'pii_patterns': [
                    r'\b\d{3}-\d{2}-\d{4}\b',  # SSN
                    r'\bMRN[:\s]*\w+\b',  # Medical record number
                    r'\bDOB[:\s]*\d{2}/\d{2}/\d{4}\b',  # Date of birth
                ],
                'risk_weight': 1.2
            }
        }
    
    def check_email_compliance(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Check email for legal compliance across all regulations."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        
        # Check each regulation
        compliance_results = {}
        overall_risk = 0
        violations = []
        
        for reg_id, rules in self.compliance_rules.items():
            result = self._check_regulation(email, reg_id, rules, context)
            compliance_results[reg_id] = result
            
            if result['violations']:
                violations.extend(result['violations'])
                overall_risk += result['risk_score'] * rules['risk_weight']
        
        # PII detection
        pii_detected = self._detect_pii(email)
        
        # Consent check
        consent_status = self._check_consent(email, context)
        
        # Retention check
        retention_status = self._check_retention_policy(email, context)
        
        # Calculate overall compliance score
        compliance_score = max(0, 100 - overall_risk)
        
        return {
            'check_id': hashlib.md5(f"{email.get('subject', '')}{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            'timestamp': datetime.now().isoformat(),
            'overall_compliance_score': round(compliance_score, 1),
            'risk_level': self._calculate_risk_level(overall_risk),
            'regulatory_checks': compliance_results,
            'pii_detected': pii_detected,
            'consent_status': consent_status,
            'retention_status': retention_status,
            'violations': violations,
            'recommendations': self._generate_recommendations(violations, pii_detected, consent_status),
            'reply_all_compliance': self._check_reply_all_compliance(email),
            'action_required': len(violations) > 0 or pii_detected['contains_pii']
        }
    
    def _check_regulation(self, email: Dict, reg_id: str, rules: Dict, context: Dict) -> Dict[str, Any]:
        """Check email against specific regulation."""
        violations = []
        risk_score = 0
        
        subject = email.get('subject', '')
        body = email.get('body', '')
        
        # CAN-SPAM specific checks
        if reg_id == 'can_spam':
            if 'unsubscribe' not in body.lower() and context.get('is_marketing', False):
                violations.append({
                    'type': 'missing_unsubscribe',
                    'severity': 'high',
                    'description': 'Marketing email must include unsubscribe link',
                    'regulation': 'CAN-SPAM'
                })
                risk_score += 30
            
            if context.get('is_marketing', False) and 'advertisement' not in body.lower():
                violations.append({
                    'type': 'not_identified_as_ad',
                    'severity': 'medium',
                    'description': 'Must identify as advertisement',
                    'regulation': 'CAN-SPAM'
                })
                risk_score += 20
        
        # GDPR specific checks
        if reg_id == 'gdpr':
            if not context.get('has_consent', False) and self._contains_personal_data(email):
                violations.append({
                    'type': 'no_consent_for_personal_data',
                    'severity': 'critical',
                    'description': 'Processing personal data without explicit consent',
                    'regulation': 'GDPR'
                })
                risk_score += 50
        
        # HIPAA specific checks
        if reg_id == 'hipaa':
            if self._contains_phi(email) and not context.get('has_baa', False):
                violations.append({
                    'type': 'phi_without_baa',
                    'severity': 'critical',
                    'description': 'PHI shared without Business Associate Agreement',
                    'regulation': 'HIPAA'
                })
                risk_score += 60
        
        return {
            'regulation': rules['name'],
            'violations': violations,
            'risk_score': risk_score,
            'compliant': len(violations) == 0
        }
    
    def _detect_pii(self, email: Dict) -> Dict[str, Any]:
        """Detect personally identifiable information."""
        content = f"{email.get('subject', '')} {email.get('body', '')}"
        
        pii_types = []
        
        # Email addresses
        emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', content)
        if emails:
            pii_types.append({'type': 'email', 'count': len(emails), 'examples': emails[:3]})
        
        # Phone numbers
        phones = re.findall(r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b', content)
        if phones:
            pii_types.append({'type': 'phone', 'count': len(phones), 'examples': phones[:3]})
        
        # SSN
        ssns = re.findall(r'\b\d{3}-\d{2}-\d{4}\b', content)
        if ssns:
            pii_types.append({'type': 'ssn', 'count': len(ssns), 'examples': ['REDACTED'] * len(ssns)})
        
        # Credit cards
        cards = re.findall(r'\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b', content)
        if cards:
            pii_types.append({'type': 'credit_card', 'count': len(cards), 'examples': ['REDACTED'] * len(cards)})
        
        # Dates of birth
        dobs = re.findall(r'\b\d{2}/\d{2}/\d{4}\b', content)
        if dobs:
            pii_types.append({'type': 'date_of_birth', 'count': len(dobs), 'examples': dobs[:3]})
        
        return {
            'contains_pii': len(pii_types) > 0,
            'pii_types': pii_types,
            'total_pii_items': sum(p['count'] for p in pii_types),
            'risk_level': 'high' if any(p['type'] in ['ssn', 'credit_card'] for p in pii_types) else 'medium' if pii_types else 'low'
        }
    
    def _contains_personal_data(self, email: Dict) -> bool:
        """Check if email contains personal data."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        personal_indicators = ['name', 'address', 'phone', 'email', 'birthday', 'age', 'gender']
        return any(indicator in content for indicator in personal_indicators)
    
    def _contains_phi(self, email: Dict) -> bool:
        """Check if email contains Protected Health Information."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        phi_indicators = ['patient', 'diagnosis', 'treatment', 'medical', 'prescription', 'health', 'doctor', 'hospital']
        return any(indicator in content for indicator in phi_indicators)
    
    def _check_consent(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Check consent status for email processing."""
        sender = email.get('from', '')
        
        # Check if we have consent record
        consent_record = self.consent_database.get(sender, None)
        
        if consent_record:
            return {
                'has_consent': True,
                'consent_date': consent_record.get('consent_date'),
                'consent_type': consent_record.get('consent_type', 'explicit'),
                'consent_expires': consent_record.get('expires'),
                'valid': self._is_consent_valid(consent_record)
            }
        
        return {
            'has_consent': False,
            'consent_date': None,
            'consent_type': None,
            'valid': False,
            'recommendation': 'Obtain explicit consent before processing personal data'
        }
    
    def _is_consent_valid(self, consent_record: Dict) -> bool:
        """Check if consent is still valid."""
        if not consent_record.get('expires'):
            return True
        
        try:
            expires = datetime.fromisoformat(consent_record['expires'])
            return datetime.now() < expires
        except:
            return False
    
    def _check_retention_policy(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Check data retention policy compliance."""
        email_date = email.get('date', datetime.now().isoformat())
        
        try:
            email_datetime = datetime.fromisoformat(email_date)
            age_days = (datetime.now() - email_datetime).days
        except:
            age_days = 0
        
        # Default retention policy (can be customized)
        retention_days = context.get('retention_days', 365 * 7)  # 7 years default
        
        return {
            'email_age_days': age_days,
            'retention_policy_days': retention_days,
            'within_retention': age_days <= retention_days,
            'days_until_expiry': max(0, retention_days - age_days),
            'action_required': age_days > retention_days
        }
    
    def _calculate_risk_level(self, risk_score: float) -> str:
        """Calculate risk level from score."""
        if risk_score >= 80:
            return 'critical'
        elif risk_score >= 60:
            return 'high'
        elif risk_score >= 40:
            return 'medium'
        elif risk_score >= 20:
            return 'low'
        else:
            return 'minimal'
    
    def _generate_recommendations(self, violations: List, pii_detected: Dict, consent_status: Dict) -> List[str]:
        """Generate compliance recommendations."""
        recommendations = []
        
        if violations:
            recommendations.append(f"⚠️  {len(violations)} compliance violation(s) detected - review immediately")
        
        if pii_detected['contains_pii']:
            if pii_detected['risk_level'] == 'high':
                recommendations.append("🔴 High-risk PII detected (SSN/Credit Card) - redact or encrypt before sending")
            else:
                recommendations.append("🟡 PII detected - ensure proper consent and data protection")
        
        if not consent_status.get('has_consent'):
            recommendations.append("📋 No consent record found - obtain explicit consent before processing")
        elif not consent_status.get('valid'):
            recommendations.append("⏰ Consent expired - renew consent before continuing processing")
        
        if not violations and not pii_detected['contains_pii']:
            recommendations.append("✅ Email appears compliant with all regulations")
        
        recommendations.append("🔄 Always use Reply All when multiple recipients need compliance information")
        
        return recommendations
    
    def _check_reply_all_compliance(self, email: Dict) -> Dict[str, Any]:
        """Check if reply-all is appropriate for compliance."""
        cc_count = len(email.get('cc', []))
        to_count = len(email.get('to', []))
        
        return {
            'reply_all_appropriate': (cc_count + to_count) > 1,
            'recipient_count': cc_count + to_count,
            'recommendation': 'Use Reply All to ensure all parties have compliance records' if (cc_count + to_count) > 1 else 'Direct reply sufficient'
        }
    
    def log_compliance_check(self, check_result: Dict):
        """Log compliance check for audit trail."""
        self.compliance_history.append({
            'check_id': check_result.get('check_id'),
            'timestamp': check_result.get('timestamp'),
            'compliance_score': check_result.get('overall_compliance_score'),
            'risk_level': check_result.get('risk_level'),
            'violations': len(check_result.get('violations', []))
        })
    
    def get_compliance_report(self) -> Dict[str, Any]:
        """Generate compliance report."""
        total_checks = len(self.compliance_history)
        violations_total = sum(c['violations'] for c in self.compliance_history)
        avg_score = sum(c['compliance_score'] for c in self.compliance_history) / max(total_checks, 1)
        
        return {
            'report_generated': datetime.now().isoformat(),
            'total_compliance_checks': total_checks,
            'total_violations_found': violations_total,
            'average_compliance_score': round(avg_score, 1),
            'regulations_monitored': list(self.compliance_rules.keys()),
            'recent_checks': self.compliance_history[-10:],
            'compliance_grade': self._calculate_compliance_grade(avg_score)
        }
    
    def _calculate_compliance_grade(self, avg_score: float) -> str:
        """Calculate compliance grade."""
        if avg_score >= 95:
            return 'A+ (Excellent)'
        elif avg_score >= 90:
            return 'A (Very Good)'
        elif avg_score >= 80:
            return 'B (Good)'
        elif avg_score >= 70:
            return 'C (Needs Improvement)'
        else:
            return 'D (Critical Issues)'


def process_legal_compliance(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for legal compliance checking."""
    checker = LegalComplianceChecker()
    result = checker.check_email_compliance(email, context)
    checker.log_compliance_check(result)
    return result


if __name__ == '__main__':
    test_email = {
        'from': 'marketing@company.com',
        'subject': 'Special Offer - Act Now!',
        'body': 'Dear customer, check out our amazing deals! Contact us at john.doe@example.com or call 555-123-4567. Your SSN 123-45-6789 is on file.',
        'date': '2024-01-15T10:00:00'
    }
    
    context = {
        'is_marketing': True,
        'has_consent': False,
        'retention_days': 365 * 3
    }
    
    result = process_legal_compliance(test_email, context)
    print(json.dumps(result, indent=2))

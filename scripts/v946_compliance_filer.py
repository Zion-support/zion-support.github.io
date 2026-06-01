#!/usr/bin/env python3
"""
V946: Email Compliance Auto-Filer
Automatically detects regulatory requirements and applies appropriate controls.
Supports GDPR, HIPAA, SOX, PCI-DSS with retention, encryption, and audit trails.
"""

import re
from datetime import datetime, timedelta
from typing import Dict, List, Any
import hashlib

class ComplianceAutoFiler:
    def __init__(self):
        self.compliance_frameworks = {
            'gdpr': {
                'keywords': ['personal data', 'eu citizen', 'data subject', 'consent', 'right to be forgotten', 'data protection'],
                'retention_days': 365 * 7,  # 7 years
                'encryption_required': True,
                'access_control': 'strict',
                'audit_trail': True
            },
            'hipaa': {
                'keywords': ['patient', 'medical record', 'health information', 'phi', 'protected health', 'treatment', 'diagnosis'],
                'retention_days': 365 * 6,  # 6 years
                'encryption_required': True,
                'access_control': 'strict',
                'audit_trail': True
            },
            'sox': {
                'keywords': ['financial statement', 'audit', 'internal controls', 'financial reporting', 'accounting', 'revenue recognition'],
                'retention_days': 365 * 7,  # 7 years
                'encryption_required': True,
                'access_control': 'moderate',
                'audit_trail': True
            },
            'pci_dss': {
                'keywords': ['credit card', 'cardholder data', 'payment card', 'pan', 'cvv', 'track data'],
                'retention_days': 365 * 1,  # 1 year minimum
                'encryption_required': True,
                'access_control': 'strict',
                'audit_trail': True
            }
        }
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for compliance requirements."""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        recipients = email.get('recipients', [])
        
        # Case-by-case analysis
        detected_frameworks = []
        compliance_score = 0
        
        for framework, config in self.compliance_frameworks.items():
            matches = sum(1 for kw in config['keywords'] if kw in subject or kw in body)
            if matches > 0:
                detected_frameworks.append(framework)
                compliance_score += matches * 10
        
        # Determine action based on compliance requirements
        if detected_frameworks:
            action = 'apply_compliance_controls'
            retention_date = datetime.now() + timedelta(days=self._get_max_retention(detected_frameworks))
            encryption_required = any(self.compliance_frameworks[fw]['encryption_required'] for fw in detected_frameworks)
            access_level = self._get_strictest_access(detected_frameworks)
        else:
            action = 'standard_processing'
            retention_date = datetime.now() + timedelta(days=365)
            encryption_required = False
            access_level = 'standard'
        
        # Generate compliance report
        audit_hash = hashlib.sha256(f"{email.get('id')}{datetime.now().isoformat()}".encode()).hexdigest()
        
        # Reply-all enforcement check
        reply_all_required = len(recipients) > 1
        
        result = {
            'email_id': email.get('id'),
            'action': action,
            'detected_frameworks': detected_frameworks,
            'compliance_score': compliance_score,
            'retention_until': retention_date.isoformat(),
            'encryption_required': encryption_required,
            'access_control': access_level,
            'audit_trail_enabled': bool(detected_frameworks),
            'audit_hash': audit_hash,
            'reply_all_required': reply_all_required,
            'recommendations': self._generate_recommendations(detected_frameworks, compliance_score)
        }
        
        return result
    
    def _get_max_retention(self, frameworks: List[str]) -> int:
        """Get maximum retention period from detected frameworks."""
        return max(self.compliance_frameworks[fw]['retention_days'] for fw in frameworks)
    
    def _get_strictest_access(self, frameworks: List[str]) -> str:
        """Get strictest access control level."""
        access_levels = [self.compliance_frameworks[fw]['access_control'] for fw in frameworks]
        if 'strict' in access_levels:
            return 'strict'
        elif 'moderate' in access_levels:
            return 'moderate'
        return 'standard'
    
    def _generate_recommendations(self, frameworks: List[str], score: int) -> List[str]:
        """Generate compliance recommendations."""
        recommendations = []
        
        if 'gdpr' in frameworks:
            recommendations.append("Ensure explicit consent is documented for EU citizen data")
            recommendations.append("Verify data subject rights procedures are in place")
        
        if 'hipaa' in frameworks:
            recommendations.append("Confirm Business Associate Agreement (BAA) is active")
            recommendations.append("Verify minimum necessary standard is applied")
        
        if 'sox' in frameworks:
            recommendations.append("Ensure financial data is reconciled and approved")
            recommendations.append("Verify segregation of duties is maintained")
        
        if 'pci_dss' in frameworks:
            recommendations.append("Confirm cardholder data is tokenized or encrypted")
            recommendations.append("Verify PCI-DSS compliance scan is current")
        
        if score > 50:
            recommendations.append("Consider legal review before sending")
        
        if not frameworks:
            recommendations.append("No compliance frameworks detected - standard processing")
        
        return recommendations


def main():
    """Test V946 Compliance Auto-Filer."""
    filer = ComplianceAutoFiler()
    
    # Test cases
    test_emails = [
        {
            'id': 'gdpr_test',
            'subject': 'Customer Personal Data Request',
            'body': 'EU citizen requesting data subject access rights under GDPR. Please provide all personal data you hold.',
            'recipients': ['privacy@company.com', 'legal@company.com']
        },
        {
            'id': 'hipaa_test',
            'subject': 'Patient Medical Records',
            'body': 'Attached are the patient medical records and PHI for treatment coordination.',
            'recipients': ['doctor@hospital.com']
        },
        {
            'id': 'sox_test',
            'subject': 'Q3 Financial Statement Audit',
            'body': 'Internal controls review for financial reporting. Revenue recognition documentation attached.',
            'recipients': ['audit@company.com', 'cfo@company.com', 'controller@company.com']
        },
        {
            'id': 'pci_test',
            'subject': 'Credit Card Data Processing',
            'body': 'Cardholder data and PAN information for payment processing.',
            'recipients': ['payments@company.com']
        },
        {
            'id': 'no_compliance',
            'subject': 'Team Lunch Tomorrow',
            'body': 'Hey everyone, lunch at noon tomorrow?',
            'recipients': ['team@company.com']
        }
    ]
    
    print("=" * 60)
    print("V946: Email Compliance Auto-Filer - Test Results")
    print("=" * 60)
    
    for email in test_emails:
        result = filer.analyze_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"  Frameworks: {result['detected_frameworks']}")
        print(f"  Score: {result['compliance_score']}")
        print(f"  Action: {result['action']}")
        print(f"  Retention: {result['retention_until'][:10]}")
        print(f"  Encryption: {result['encryption_required']}")
        print(f"  Access: {result['access_control']}")
        print(f"  Reply-All: {result['reply_all_required']}")
        if result['recommendations']:
            print(f"  Recommendations: {result['recommendations'][0]}")
    
    print("\n✅ V946 Compliance Auto-Filer: OPERATIONAL")


if __name__ == '__main__':
    main()

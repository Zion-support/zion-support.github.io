#!/usr/bin/env python3
"""
V113: AI Email Compliance Guardian Pro
Advanced compliance checking for GDPR, CCPA, HIPAA, SOX, PCI-DSS with
automatic audit trails, risk scoring, and remediation recommendations.
"""

import json
import re
from typing import Dict, List
from dataclasses import dataclass, field
from enum import Enum


class ComplianceFramework(Enum):
    GDPR = "gdpr"
    CCPA = "ccpa"
    HIPAA = "hipaa"
    SOX = "sox"
    PCI_DSS = "pci_dss"
    GENERAL = "general"


class ViolationSeverity(Enum):
    INFO = "info"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class DataType(Enum):
    PII = "pii"  # Personally Identifiable Information
    PHI = "phi"  # Protected Health Information
    PCI = "pci"  # Payment Card Information
    FINANCIAL = "financial"
    GENERAL = "general"


@dataclass
class ComplianceViolation:
    framework: ComplianceFramework
    severity: ViolationSeverity
    description: str
    data_type: DataType
    affected_data: List[str] = field(default_factory=list)
    remediation: str = ""


@dataclass
class ComplianceReport:
    email_id: str
    overall_risk_score: float = 0.0
    violations: List[ComplianceViolation] = field(default_factory=list)
    frameworks_checked: List[ComplianceFramework] = field(default_factory=list)
    legal_hold_required: bool = False
    audit_trail: Dict = field(default_factory=dict)
    recommendations: List[str] = field(default_factory=list)


class V113ComplianceGuardianPro:
    """
    V113: AI Email Compliance Guardian Pro
    
    Features:
    1. Multi-framework compliance checking (GDPR, CCPA, HIPAA, SOX, PCI-DSS)
    2. PII/PHI/PCI detection and classification
    3. Risk scoring and severity assessment
    4. Automatic audit trail generation
    5. Legal hold detection
    6. Remediation recommendations
    """
    
    def __init__(self):
        self.reports: Dict[str, ComplianceReport] = {}
        
        # PII patterns
        self.pii_patterns = {
            'ssn': r'\b\d{3}-\d{2}-\d{4}\b',
            'email': r'\b[\w\.-]+@[\w\.-]+\.\w+\b',
            'phone': r'\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b',
            'address': r'\b\d+\s+[\w\s]+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln)\b',
            'dob': r'\b(?:0[1-9]|1[0-2])/(?:0[1-9]|[12]\d|3[01])/(?:19|20)\d{2}\b'
        }
        
        # PHI keywords
        self.phi_keywords = [
            'patient', 'diagnosis', 'treatment', 'medical record', 'health condition',
            'prescription', 'medication', 'doctor', 'hospital', 'clinic', 'therapy'
        ]
        
        # PCI patterns
        self.pci_patterns = {
            'credit_card': r'\b(?:\d{4}[-\s]?){3}\d{4}\b',
            'cvv': r'\bCVV[:\s]?\d{3,4}\b',
            'expiry': r'\b(?:Exp|Expiry)[:\s]?(?:0[1-9]|1[0-2])/\d{2}\b'
        }
        
        # Financial keywords
        self.financial_keywords = [
            'revenue', 'profit', 'loss', 'quarterly report', 'financial statement',
            'earnings', 'dividend', 'stock', 'shareholder', 'audit'
        ]
    
    def check_compliance(self, email_data: Dict) -> Dict:
        """Check email for compliance violations."""
        email_id = email_data.get('id', 'unknown')
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        report = ComplianceReport(email_id=email_id)
        
        # Check each framework
        report.violations.extend(self._check_gdpr(body, subject))
        report.violations.extend(self._check_ccpa(body, subject))
        report.violations.extend(self._check_hipaa(body, subject))
        report.violations.extend(self._check_sox(body, subject))
        report.violations.extend(self._check_pci_dss(body, subject))
        
        # Calculate overall risk score
        report.overall_risk_score = self._calculate_risk_score(report.violations)
        
        # Check for legal hold
        report.legal_hold_required = self._check_legal_hold(body, subject)
        
        # Generate audit trail
        report.audit_trail = self._generate_audit_trail(email_data, report.violations)
        
        # Generate recommendations
        report.recommendations = self._generate_recommendations(report.violations, report.overall_risk_score)
        
        self.reports[email_id] = report
        
        return {
            'email_id': email_id,
            'overall_risk_score': report.overall_risk_score,
            'total_violations': len(report.violations),
            'violations': [
                {
                    'framework': v.framework.value,
                    'severity': v.severity.value,
                    'description': v.description,
                    'data_type': v.data_type.value,
                    'remediation': v.remediation
                }
                for v in report.violations
            ],
            'legal_hold_required': report.legal_hold_required,
            'recommendations': report.recommendations,
            'reply_all': True
        }
    
    def _check_gdpr(self, body: str, subject: str) -> List[ComplianceViolation]:
        """Check GDPR compliance."""
        violations = []
        text = f"{subject} {body}".lower()
        
        # Check for PII
        pii_found = self._detect_pii(body)
        
        if pii_found:
            # Check for consent mention
            if 'consent' not in text and 'gdpr' not in text:
                violations.append(ComplianceViolation(
                    framework=ComplianceFramework.GDPR,
                    severity=ViolationSeverity.HIGH,
                    description="PII detected without explicit consent mention",
                    data_type=DataType.PII,
                    affected_data=pii_found,
                    remediation="Add explicit consent language or verify consent exists"
                ))
        
        # Check for data subject rights mention
        if any(pii in pii_found for pii in ['email', 'phone', 'address']):
            if 'right to access' not in text and 'data subject' not in text:
                violations.append(ComplianceViolation(
                    framework=ComplianceFramework.GDPR,
                    severity=ViolationSeverity.MEDIUM,
                    description="PII shared without data subject rights information",
                    data_type=DataType.PII,
                    remediation="Include data subject rights notice"
                ))
        
        return violations
    
    def _check_ccpa(self, body: str, subject: str) -> List[ComplianceViolation]:
        """Check CCPA compliance."""
        violations = []
        text = f"{subject} {body}".lower()
        
        # Check for California resident indicators
        ca_indicators = ['california', 'ca resident', 'californian']
        is_ca_resident = any(indicator in text for indicator in ca_indicators)
        
        if is_ca_resident:
            pii_found = self._detect_pii(body)
            if pii_found and 'do not sell' not in text:
                violations.append(ComplianceViolation(
                    framework=ComplianceFramework.CCPA,
                    severity=ViolationSeverity.MEDIUM,
                    description="California resident PII without opt-out notice",
                    data_type=DataType.PII,
                    remediation="Include 'Do Not Sell My Personal Information' notice"
                ))
        
        return violations
    
    def _check_hipaa(self, body: str, subject: str) -> List[ComplianceViolation]:
        """Check HIPAA compliance."""
        violations = []
        text = f"{subject} {body}".lower()
        
        # Check for PHI
        phi_found = [kw for kw in self.phi_keywords if kw in text]
        
        if phi_found:
            # Check for encryption mention
            if 'encrypted' not in text and 'secure' not in text:
                violations.append(ComplianceViolation(
                    framework=ComplianceFramework.HIPAA,
                    severity=ViolationSeverity.CRITICAL,
                    description="PHI detected without encryption/security mention",
                    data_type=DataType.PHI,
                    affected_data=phi_found,
                    remediation="Use encrypted email or secure portal for PHI transmission"
                ))
            
            # Check for minimum necessary
            if len(phi_found) > 3:
                violations.append(ComplianceViolation(
                    framework=ComplianceFramework.HIPAA,
                    severity=ViolationSeverity.HIGH,
                    description="Excessive PHI disclosure - verify minimum necessary",
                    data_type=DataType.PHI,
                    remediation="Review and limit PHI to minimum necessary"
                ))
        
        return violations
    
    def _check_sox(self, body: str, subject: str) -> List[ComplianceViolation]:
        """Check SOX compliance."""
        violations = []
        text = f"{subject} {body}".lower()
        
        # Check for financial data
        financial_found = [kw for kw in self.financial_keywords if kw in text]
        
        if financial_found:
            # Check for audit trail mention
            if 'audit' not in text and 'review' not in text:
                violations.append(ComplianceViolation(
                    framework=ComplianceFramework.SOX,
                    severity=ViolationSeverity.MEDIUM,
                    description="Financial data without audit trail documentation",
                    data_type=DataType.FINANCIAL,
                    affected_data=financial_found,
                    remediation="Document audit trail and review process"
                ))
        
        return violations
    
    def _check_pci_dss(self, body: str, subject: str) -> List[ComplianceViolation]:
        """Check PCI-DSS compliance."""
        violations = []
        
        # Check for PCI data
        pci_found = []
        for pci_type, pattern in self.pci_patterns.items():
            matches = re.findall(pattern, body, re.IGNORECASE)
            if matches:
                pci_found.extend(matches)
        
        if pci_found:
            violations.append(ComplianceViolation(
                framework=ComplianceFramework.PCI_DSS,
                severity=ViolationSeverity.CRITICAL,
                description="Payment card information detected in email",
                data_type=DataType.PCI,
                affected_data=['credit_card_data'],
                remediation="Remove PCI data immediately; use secure payment portal"
            ))
        
        return violations
    
    def _detect_pii(self, text: str) -> List[str]:
        """Detect PII in text."""
        pii_found = []
        
        for pii_type, pattern in self.pii_patterns.items():
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                pii_found.append(pii_type)
        
        return pii_found
    
    def _calculate_risk_score(self, violations: List[ComplianceViolation]) -> float:
        """Calculate overall risk score (0.0 to 1.0)."""
        if not violations:
            return 0.0
        
        severity_weights = {
            ViolationSeverity.INFO: 0.05,
            ViolationSeverity.LOW: 0.1,
            ViolationSeverity.MEDIUM: 0.3,
            ViolationSeverity.HIGH: 0.6,
            ViolationSeverity.CRITICAL: 1.0
        }
        
        total_score = sum(severity_weights[v.severity] for v in violations)
        
        # Normalize to 0.0-1.0
        return min(1.0, total_score / len(violations))
    
    def _check_legal_hold(self, body: str, subject: str) -> bool:
        """Check if legal hold is required."""
        text = f"{subject} {body}".lower()
        
        legal_hold_keywords = [
            'litigation', 'lawsuit', 'legal hold', 'preservation',
            'subpoena', 'court order', 'discovery', 'attorney'
        ]
        
        return any(kw in text for kw in legal_hold_keywords)
    
    def _generate_audit_trail(self, email_data: Dict, violations: List[ComplianceViolation]) -> Dict:
        """Generate audit trail for compliance."""
        from datetime import datetime
        
        return {
            'timestamp': datetime.now().isoformat(),
            'email_id': email_data.get('id', 'unknown'),
            'sender': email_data.get('from', 'unknown'),
            'recipients': email_data.get('to', []),
            'violations_count': len(violations),
            'frameworks_checked': list(set(v.framework.value for v in violations)),
            'highest_severity': max((v.severity.value for v in violations), default='none')
        }
    
    def _generate_recommendations(self, violations: List[ComplianceViolation], risk_score: float) -> List[str]:
        """Generate compliance recommendations."""
        recommendations = []
        
        if risk_score > 0.7:
            recommendations.append("URGENT: Review and remediate all violations before sending")
            recommendations.append("Consider consulting legal/compliance team")
        
        if any(v.framework == ComplianceFramework.PCI_DSS for v in violations):
            recommendations.append("Remove all payment card data immediately")
            recommendations.append("Use secure payment portal for PCI data")
        
        if any(v.framework == ComplianceFramework.HIPAA for v in violations):
            recommendations.append("Use encrypted email or secure portal for PHI")
            recommendations.append("Verify minimum necessary disclosure")
        
        if any(v.framework == ComplianceFramework.GDPR for v in violations):
            recommendations.append("Verify consent exists for all PII processing")
            recommendations.append("Include data subject rights notice")
        
        if not recommendations:
            recommendations.append("Email appears compliant; proceed with normal handling")
        
        return recommendations


if __name__ == "__main__":
    # Test the engine
    guardian = V113ComplianceGuardianPro()
    
    test_email = {
        'id': 'email_123',
        'from': 'employee@company.com',
        'to': ['external@partner.com'],
        'subject': 'Patient Information and Payment',
        'body': '''Hi,

Here is the patient information you requested:

Patient: John Doe
SSN: 123-45-6789
DOB: 01/15/1980
Diagnosis: Type 2 Diabetes
Treatment: Metformin 500mg

Please process payment of $500 to credit card: 4111-1111-1111-1111
CVV: 123
Exp: 12/25

Let me know if you need anything else.

Thanks'''
    }
    
    result = guardian.check_compliance(test_email)
    print(json.dumps(result, indent=2))

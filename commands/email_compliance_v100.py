#!/usr/bin/env python3
"""
V100: AI Email Compliance Guardian Pro
Advanced compliance checking for GDPR/CCPA data handling, industry-specific regulations
(HIPAA, SOX, PCI-DSS), legal hold requirements, data retention policies, audit trail
generation, and risk scoring for compliance violations.
"""

import re
import json
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass, field
from enum import Enum


class ComplianceFramework(Enum):
    GDPR = "gdpr"
    CCPA = "ccpa"
    HIPAA = "hipaa"
    SOX = "sox"
    PCI_DSS = "pci_dss"
    GLBA = "glba"
    FERPA = "ferpa"
    CUSTOM = "custom"


class DataClassification(Enum):
    PUBLIC = "public"
    INTERNAL = "internal"
    CONFIDENTIAL = "confidential"
    RESTRICTED = "restricted"
    PHI = "phi"  # Protected Health Information
    PII = "pii"  # Personally Identifiable Information
    PCI = "pci"  # Payment Card Information
    FINANCIAL = "financial"


class ViolationSeverity(Enum):
    INFO = "info"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


@dataclass
class ComplianceViolation:
    violation_id: str
    email_id: str
    framework: ComplianceFramework
    category: str
    severity: ViolationSeverity
    description: str
    affected_data: List[str]
    remediation: str
    timestamp: datetime = field(default_factory=datetime.now)


@dataclass
class DataEntity:
    entity_type: str  # "email", "phone", "ssn", "credit_card", "health_info", etc.
    value: str
    classification: DataClassification
    confidence: float
    context: str


@dataclass
class ComplianceAudit:
    audit_id: str
    email_id: str
    timestamp: datetime
    frameworks_checked: List[ComplianceFramework]
    violations: List[ComplianceViolation]
    data_entities: List[DataEntity]
    overall_risk_score: float  # 0.0 to 1.0
    legal_hold_required: bool
    retention_policy: str
    recommendations: List[str]


@dataclass
class RetentionRule:
    framework: ComplianceFramework
    data_type: str
    min_retention_days: int
    max_retention_days: int
    description: str


class V100ComplianceGuardian:
    """
    V100: AI Email Compliance Guardian Pro
    
    Features:
    1. GDPR/CCPA data handling compliance
    2. Industry-specific regulations (HIPAA, SOX, PCI-DSS)
    3. Legal hold requirements detection
    4. Data retention policy enforcement
    5. Audit trail generation
    6. Risk scoring for compliance violations
    7. Automated remediation recommendations
    """
    
    def __init__(self):
        self.audits: Dict[str, ComplianceAudit] = {}
        self.violations: List[ComplianceViolation] = []
        self.legal_holds: Dict[str, bool] = {}  # thread_id -> hold status
        
        # Data detection patterns
        self.pii_patterns = {
            'email': r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
            'phone': r'\b(?:\+?1[-.]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b',
            'ssn': r'\b\d{3}-\d{2}-\d{4}\b',
            'credit_card': r'\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})\b',
            'ip_address': r'\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b',
            'date_of_birth': r'\b(?:0[1-9]|1[0-2])/(?:0[1-9]|[12][0-9]|3[01])/(?:19|20)\d{2}\b',
        }
        
        self.phi_patterns = [
            r'\b(?:diagnosis|treatment|prescription|medication|patient|medical record|health condition)\b',
            r'\b(?:hospital|clinic|doctor|physician|nurse|therapy)\b',
            r'\b(?:blood pressure|cholesterol|diabetes|cancer|surgery)\b',
        ]
        
        self.financial_patterns = [
            r'\b(?:account number|routing number|bank account|wire transfer)\b',
            r'\b(?:salary|income|revenue|profit|loss|financial statement)\b',
            r'\b(?:tax return|w-2|1099|audit|quarterly report)\b',
        ]
        
        # Retention rules by framework
        self.retention_rules = {
            ComplianceFramework.GDPR: [
                RetentionRule(ComplianceFramework.GDPR, 'pii', 0, 365 * 2, "PII must be deleted after 2 years unless consent renewed"),
                RetentionRule(ComplianceFramework.GDPR, 'marketing', 0, 365, "Marketing data must be deleted after 1 year"),
            ],
            ComplianceFramework.HIPAA: [
                RetentionRule(ComplianceFramework.HIPAA, 'phi', 365 * 6, 365 * 10, "PHI must be retained for 6-10 years"),
            ],
            ComplianceFramework.SOX: [
                RetentionRule(ComplianceFramework.SOX, 'financial', 365 * 7, 365 * 10, "Financial records must be retained for 7-10 years"),
            ],
            ComplianceFramework.PCI_DSS: [
                RetentionRule(ComplianceFramework.PCI_DSS, 'pci', 0, 0, "PCI data must be deleted immediately after transaction"),
            ],
        }
    
    def analyze_email_compliance(self, email_data: Dict, frameworks: List[ComplianceFramework] = None) -> ComplianceAudit:
        """Analyze email for compliance violations."""
        email_id = email_data.get('id', 'unknown')
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        attachments = email_data.get('attachments', [])
        
        if frameworks is None:
            frameworks = list(ComplianceFramework)
        
        full_text = f"{subject}\n{body}"
        
        # Detect data entities
        data_entities = self._detect_data_entities(full_text)
        
        # Check violations for each framework
        violations = []
        for framework in frameworks:
            framework_violations = self._check_framework_compliance(framework, email_data, data_entities)
            violations.extend(framework_violations)
        
        # Calculate overall risk score
        risk_score = self._calculate_risk_score(violations, data_entities)
        
        # Determine legal hold requirement
        legal_hold = self._check_legal_hold(email_data, data_entities)
        
        # Determine retention policy
        retention_policy = self._determine_retention_policy(data_entities, frameworks)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(violations, data_entities, risk_score)
        
        audit = ComplianceAudit(
            audit_id=f"audit_{email_id}_{datetime.now().timestamp()}",
            email_id=email_id,
            timestamp=datetime.now(),
            frameworks_checked=frameworks,
            violations=violations,
            data_entities=data_entities,
            overall_risk_score=risk_score,
            legal_hold_required=legal_hold,
            retention_policy=retention_policy,
            recommendations=recommendations
        )
        
        self.audits[email_id] = audit
        self.violations.extend(violations)
        
        return audit
    
    def _detect_data_entities(self, text: str) -> List[DataEntity]:
        """Detect data entities in text."""
        entities = []
        
        # Detect PII
        for entity_type, pattern in self.pii_patterns.items():
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                classification = self._classify_pii(entity_type)
                entities.append(DataEntity(
                    entity_type=entity_type,
                    value=match.group(),
                    classification=classification,
                    confidence=0.9,
                    context=text[max(0, match.start()-50):match.end()+50]
                ))
        
        # Detect PHI
        for pattern in self.phi_patterns:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                entities.append(DataEntity(
                    entity_type='health_info',
                    value=match.group(),
                    classification=DataClassification.PHI,
                    confidence=0.8,
                    context=text[max(0, match.start()-50):match.end()+50]
                ))
        
        # Detect financial data
        for pattern in self.financial_patterns:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                entities.append(DataEntity(
                    entity_type='financial_data',
                    value=match.group(),
                    classification=DataClassification.FINANCIAL,
                    confidence=0.85,
                    context=text[max(0, match.start()-50):match.end()+50]
                ))
        
        return entities
    
    def _classify_pii(self, entity_type: str) -> DataClassification:
        """Classify PII by type."""
        if entity_type in ['ssn', 'credit_card']:
            return DataClassification.RESTRICTED
        elif entity_type in ['email', 'phone']:
            return DataClassification.PII
        else:
            return DataClassification.CONFIDENTIAL
    
    def _check_framework_compliance(self, framework: ComplianceFramework, 
                                     email_data: Dict, 
                                     data_entities: List[DataEntity]) -> List[ComplianceViolation]:
        """Check compliance for a specific framework."""
        violations = []
        email_id = email_data.get('id', 'unknown')
        
        if framework == ComplianceFramework.GDPR:
            # Check for PII without consent
            pii_entities = [e for e in data_entities if e.classification in [DataClassification.PII, DataClassification.RESTRICTED]]
            if pii_entities:
                # Check if consent is mentioned
                body = email_data.get('body', '').lower()
                if 'consent' not in body and 'gdpr' not in body:
                    violations.append(ComplianceViolation(
                        violation_id=f"gdpr_pii_{email_id}_{len(violations)}",
                        email_id=email_id,
                        framework=ComplianceFramework.GDPR,
                        category='pii_handling',
                        severity=ViolationSeverity.HIGH,
                        description=f"PII detected without explicit consent mention. Found {len(pii_entities)} PII entities.",
                        affected_data=[e.entity_type for e in pii_entities],
                        remediation="Add explicit consent language or verify consent exists in CRM"
                    ))
        
        elif framework == ComplianceFramework.HIPAA:
            # Check for PHI
            phi_entities = [e for e in data_entities if e.classification == DataClassification.PHI]
            if phi_entities:
                # Check if encryption is mentioned
                body = email_data.get('body', '').lower()
                if 'encrypted' not in body and 'secure' not in body:
                    violations.append(ComplianceViolation(
                        violation_id=f"hipaa_phi_{email_id}_{len(violations)}",
                        email_id=email_id,
                        framework=ComplianceFramework.HIPAA,
                        category='phi_handling',
                        severity=ViolationSeverity.CRITICAL,
                        description=f"PHI detected without encryption mention. Found {len(phi_entities)} PHI entities.",
                        affected_data=['health_info'],
                        remediation="Use encrypted email or secure portal for PHI transmission"
                    ))
        
        elif framework == ComplianceFramework.PCI_DSS:
            # Check for PCI data
            pci_entities = [e for e in data_entities if e.entity_type == 'credit_card']
            if pci_entities:
                violations.append(ComplianceViolation(
                    violation_id=f"pci_data_{email_id}_{len(violations)}",
                    email_id=email_id,
                    framework=ComplianceFramework.PCI_DSS,
                    category='pci_handling',
                    severity=ViolationSeverity.CRITICAL,
                    description=f"Credit card information detected in email. PCI data must never be transmitted via email.",
                    affected_data=['credit_card'],
                    remediation="Remove credit card data immediately. Use secure payment portal instead."
                ))
        
        elif framework == ComplianceFramework.SOX:
            # Check for financial data
            financial_entities = [e for e in data_entities if e.classification == DataClassification.FINANCIAL]
            if financial_entities:
                # Check if proper controls are mentioned
                body = email_data.get('body', '').lower()
                if 'audit' not in body and 'review' not in body and 'approval' not in body:
                    violations.append(ComplianceViolation(
                        violation_id=f"sox_financial_{email_id}_{len(violations)}",
                        email_id=email_id,
                        framework=ComplianceFramework.SOX,
                        category='financial_handling',
                        severity=ViolationSeverity.MEDIUM,
                        description=f"Financial data detected without audit trail mention. Found {len(financial_entities)} financial entities.",
                        affected_data=['financial_data'],
                        remediation="Ensure proper audit trail and approval workflow for financial communications"
                    ))
        
        return violations
    
    def _calculate_risk_score(self, violations: List[ComplianceViolation], 
                              data_entities: List[DataEntity]) -> float:
        """Calculate overall compliance risk score."""
        if not violations and not data_entities:
            return 0.0
        
        score = 0.0
        
        # Add points for violations
        severity_weights = {
            ViolationSeverity.INFO: 0.05,
            ViolationSeverity.LOW: 0.1,
            ViolationSeverity.MEDIUM: 0.25,
            ViolationSeverity.HIGH: 0.5,
            ViolationSeverity.CRITICAL: 1.0
        }
        
        for violation in violations:
            score += severity_weights.get(violation.severity, 0.1)
        
        # Add points for sensitive data
        classification_weights = {
            DataClassification.PUBLIC: 0.0,
            DataClassification.INTERNAL: 0.05,
            DataClassification.CONFIDENTIAL: 0.1,
            DataClassification.RESTRICTED: 0.3,
            DataClassification.PHI: 0.4,
            DataClassification.PII: 0.2,
            DataClassification.PCI: 0.5,
            DataClassification.FINANCIAL: 0.25
        }
        
        for entity in data_entities:
            score += classification_weights.get(entity.classification, 0.1) * entity.confidence
        
        # Normalize to 0.0-1.0
        return min(1.0, score)
    
    def _check_legal_hold(self, email_data: Dict, data_entities: List[DataEntity]) -> bool:
        """Check if legal hold is required."""
        body = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        
        # Check for legal hold keywords
        legal_keywords = ['legal hold', 'litigation', 'lawsuit', 'discovery', 'subpoena', 
                         'court order', 'legal proceedings', 'attorney client']
        
        if any(keyword in body or keyword in subject for keyword in legal_keywords):
            return True
        
        # Check for sensitive data that might require hold
        sensitive_types = [DataClassification.PHI, DataClassification.RESTRICTED, DataClassification.PCI]
        if any(entity.classification in sensitive_types for entity in data_entities):
            # Check if there's any dispute or complaint language
            dispute_keywords = ['complaint', 'dispute', 'claim', 'allegation', 'investigation']
            if any(keyword in body for keyword in dispute_keywords):
                return True
        
        return False
    
    def _determine_retention_policy(self, data_entities: List[DataEntity], 
                                     frameworks: List[ComplianceFramework]) -> str:
        """Determine retention policy based on data and frameworks."""
        max_retention = 365  # Default 1 year
        
        for framework in frameworks:
            if framework in self.retention_rules:
                for rule in self.retention_rules[framework]:
                    # Check if any entities match the rule's data type
                    for entity in data_entities:
                        if rule.data_type in entity.entity_type or rule.data_type in entity.classification.value:
                            max_retention = max(max_retention, rule.max_retention_days)
        
        if max_retention == 0:
            return "Delete immediately after processing"
        elif max_retention <= 365:
            return f"Retain for up to 1 year"
        elif max_retention <= 365 * 3:
            return f"Retain for up to 3 years"
        elif max_retention <= 365 * 7:
            return f"Retain for up to 7 years"
        else:
            return f"Retain for up to 10 years"
    
    def _generate_recommendations(self, violations: List[ComplianceViolation], 
                                   data_entities: List[DataEntity], 
                                   risk_score: float) -> List[str]:
        """Generate compliance recommendations."""
        recommendations = []
        
        if risk_score > 0.7:
            recommendations.append("HIGH RISK: Immediate review required by compliance officer")
        elif risk_score > 0.4:
            recommendations.append("MEDIUM RISK: Review within 24 hours")
        else:
            recommendations.append("LOW RISK: Standard review process")
        
        # Specific recommendations based on violations
        for violation in violations:
            if violation.framework == ComplianceFramework.PCI_DSS:
                recommendations.append("CRITICAL: Remove all PCI data from email immediately")
            elif violation.framework == ComplianceFramework.HIPAA:
                recommendations.append("Use encrypted communication channels for PHI")
            elif violation.framework == ComplianceFramework.GDPR:
                recommendations.append("Verify consent status for all PII before processing")
        
        # General recommendations
        if any(e.classification == DataClassification.PHI for e in data_entities):
            recommendations.append("Consider using HIPAA-compliant secure messaging platform")
        
        if any(e.classification == DataClassification.PCI for e in data_entities):
            recommendations.append("Implement tokenization for payment card data")
        
        if len(violations) > 3:
            recommendations.append("Schedule compliance training for team members")
        
        return recommendations
    
    def get_compliance_report(self, email_id: str) -> Optional[Dict]:
        """Get comprehensive compliance report for an email."""
        if email_id not in self.audits:
            return None
        
        audit = self.audits[email_id]
        
        return {
            'email_id': email_id,
            'audit_id': audit.audit_id,
            'timestamp': audit.timestamp.isoformat(),
            'frameworks_checked': [f.value for f in audit.frameworks_checked],
            'overall_risk_score': audit.overall_risk_score,
            'risk_level': 'critical' if audit.overall_risk_score > 0.7 else 
                         'high' if audit.overall_risk_score > 0.5 else 
                         'medium' if audit.overall_risk_score > 0.3 else 'low',
            'violations': [
                {
                    'framework': v.framework.value,
                    'category': v.category,
                    'severity': v.severity.value,
                    'description': v.description,
                    'remediation': v.remediation
                }
                for v in audit.violations
            ],
            'data_entities': [
                {
                    'type': e.entity_type,
                    'classification': e.classification.value,
                    'confidence': e.confidence
                }
                for e in audit.data_entities
            ],
            'legal_hold_required': audit.legal_hold_required,
            'retention_policy': audit.retention_policy,
            'recommendations': audit.recommendations
        }
    
    def get_compliance_dashboard(self) -> Dict:
        """Get compliance dashboard summary."""
        total_audits = len(self.audits)
        total_violations = len(self.violations)
        
        framework_violations = {}
        severity_distribution = {
            'info': 0,
            'low': 0,
            'medium': 0,
            'high': 0,
            'critical': 0
        }
        
        for violation in self.violations:
            framework = violation.framework.value
            if framework not in framework_violations:
                framework_violations[framework] = 0
            framework_violations[framework] += 1
            
            severity_distribution[violation.severity.value] += 1
        
        high_risk_emails = [
            email_id for email_id, audit in self.audits.items()
            if audit.overall_risk_score > 0.7
        ]
        
        legal_holds_active = sum(1 for audit in self.audits.values() if audit.legal_hold_required)
        
        return {
            'total_audits': total_audits,
            'total_violations': total_violations,
            'framework_violations': framework_violations,
            'severity_distribution': severity_distribution,
            'high_risk_emails': high_risk_emails,
            'legal_holds_active': legal_holds_active,
            'average_risk_score': sum(a.overall_risk_score for a in self.audits.values()) / total_audits if total_audits > 0 else 0
        }


# Test the implementation
if __name__ == "__main__":
    guardian = V100ComplianceGuardian()
    
    # Test email with various compliance issues
    test_email = {
        'id': 'email_compliance_test',
        'from': 'employee@company.com',
        'to': ['client@example.com'],
        'cc': ['manager@company.com'],
        'subject': 'Account Information and Payment Details',
        'body': '''Hi John,
        
Here is your account information:
- Email: john.doe@example.com
- Phone: (555) 123-4567
- SSN: 123-45-6789
- Credit Card: 4111111111111111

Your medical records show diagnosis of diabetes and prescription for insulin.
Please review the attached financial statement and tax return.

This is regarding the legal hold on your account due to pending litigation.

Best regards,
Employee''',
        'attachments': ['financial_statement.pdf', 'medical_records.pdf']
    }
    
    print("V100: AI Email Compliance Guardian Pro")
    print("=" * 60)
    
    # Analyze with all frameworks
    audit = guardian.analyze_email_compliance(test_email)
    
    print(f"\nEmail ID: {test_email['id']}")
    print(f"Overall Risk Score: {audit.overall_risk_score:.2f}")
    print(f"Legal Hold Required: {audit.legal_hold_required}")
    print(f"Retention Policy: {audit.retention_policy}")
    
    print(f"\nData Entities Detected: {len(audit.data_entities)}")
    for entity in audit.data_entities[:5]:
        print(f"  - {entity.entity_type}: {entity.classification.value} (confidence: {entity.confidence:.2f})")
    
    print(f"\nCompliance Violations: {len(audit.violations)}")
    for violation in audit.violations:
        print(f"  - [{violation.severity.value}] {violation.framework.value}: {violation.description}")
        print(f"    Remediation: {violation.remediation}")
    
    print(f"\nRecommendations:")
    for rec in audit.recommendations:
        print(f"  - {rec}")
    
    print("\n" + "=" * 60)
    print("Compliance Dashboard:")
    dashboard = guardian.get_compliance_dashboard()
    print(json.dumps(dashboard, indent=2))
    
    print("\n" + "=" * 60)
    print("Compliance Report:")
    report = guardian.get_compliance_report('email_compliance_test')
    print(json.dumps(report, indent=2))

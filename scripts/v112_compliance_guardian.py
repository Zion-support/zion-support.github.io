#!/usr/bin/env python3
"""
V112: Compliance & Legal Guardian Pro
Enterprise compliance monitoring: GDPR, HIPAA, SOX, CCPA, PCI-DSS enforcement with legal hold and audit trails.
"""
import re, json, hashlib
from datetime import datetime
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum

class Regulation(Enum):
    GDPR = "gdpr"
    HIPAA = "hipaa"
    SOX = "sox"
    CCPA = "ccpa"
    PCI_DSS = "pci_dss"
    FERPA = "ferpa"
    GLBA = "glba"

class RiskLevel(Enum):
    NONE = "none"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

@dataclass
class ComplianceReport:
    email_id: str
    regulations_triggered: List[Regulation]
    risk_level: RiskLevel
    pii_detected: List[str]
    phi_detected: List[str]
    financial_data: List[str]
    cross_border_transfer: bool
    legal_hold_required: bool
    retention_policy: str
    violations: List[str]
    remediation_steps: List[str]
    audit_trail_entry: Dict

class ComplianceGuardianPro:
    """V112: Enterprise-grade compliance monitoring for all email communications."""
    
    PII_PATTERNS = {
        "ssn": r"\b\d{3}-\d{2}-\d{4}\b",
        "email": r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",
        "phone": r"\b\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b",
        "credit_card": r"\b(?:\d{4}[-\s]?){3}\d{4}\b",
        "ip_address": r"\b(?:\d{1,3}\.){3}\d{1,3}\b",
        "date_of_birth": r"\b(?:born|dob|birth)[:\s]+\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b",
    }
    
    PHI_KEYWORDS = ["diagnosis", "treatment", "prescription", "medical record", "patient", "health condition", "symptoms", "medication", "lab results", "insurance claim"]
    FINANCIAL_KEYWORDS = ["account number", "routing number", "wire transfer", "bank account", "tax return", "revenue", "profit", "loss", "audit", "financial statement"]
    CROSS_BORDER_INDICATORS = ["international", "overseas", "eu citizen", "european", "transfer abroad", "data transfer", "gdpr", "cross-border"]
    
    RETENTION_POLICIES = {
        "standard": "7 years",
        "financial": "10 years",
        "healthcare": "10 years",
        "legal_hold": "indefinite",
        "marketing": "2 years"
    }
    
    def __init__(self):
        self.audit_log: List[Dict] = []
        self.legal_holds: Dict[str, Dict] = {}
        self.violations_count = 0
    
    def scan_email(self, email: Dict) -> ComplianceReport:
        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        text = subject + " " + body
        
        email_id = hashlib.md5(f"{sender}{subject}{datetime.now().isoformat()}".encode()).hexdigest()[:12]
        
        # Detect PII
        pii = self._detect_pii(text)
        
        # Detect PHI (healthcare)
        phi = self._detect_phi(text)
        
        # Detect financial data
        financial = self._detect_financial(text)
        
        # Determine regulations triggered
        regulations = self._determine_regulations(pii, phi, financial, text)
        
        # Cross-border transfer detection
        cross_border = self._detect_cross_border(text, email)
        
        # Risk assessment
        risk = self._assess_risk(pii, phi, financial, regulations, cross_border)
        
        # Legal hold
        legal_hold = self._check_legal_hold(email, text)
        
        # Retention policy
        retention = self._determine_retention(regulations, legal_hold)
        
        # Violations
        violations = self._check_violations(pii, phi, financial, regulations, cross_border)
        
        # Remediation
        remediation = self._generate_remediation(violations, regulations)
        
        # Audit trail
        audit_entry = {
            "email_id": email_id,
            "timestamp": datetime.now().isoformat(),
            "sender": sender,
            "regulations": [r.value for r in regulations],
            "risk": risk.value,
            "pii_count": len(pii),
            "phi_count": len(phi),
            "violations": violations
        }
        self.audit_log.append(audit_entry)
        
        return ComplianceReport(
            email_id=email_id,
            regulations_triggered=regulations,
            risk_level=risk,
            pii_detected=pii,
            phi_detected=phi,
            financial_data=financial,
            cross_border_transfer=cross_border,
            legal_hold_required=legal_hold,
            retention_policy=retention,
            violations=violations,
            remediation_steps=remediation,
            audit_trail_entry=audit_entry
        )
    
    def _detect_pii(self, text: str) -> List[str]:
        detected = []
        for pii_type, pattern in self.PII_PATTERNS.items():
            if re.search(pattern, text, re.I):
                detected.append(pii_type)
        return detected
    
    def _detect_phi(self, text: str) -> List[str]:
        return [kw for kw in self.PHI_KEYWORDS if kw in text.lower()]
    
    def _detect_financial(self, text: str) -> List[str]:
        return [kw for kw in self.FINANCIAL_KEYWORDS if kw in text.lower()]
    
    def _determine_regulations(self, pii: List, phi: List, financial: List, text: str) -> List[Regulation]:
        regs = []
        if pii:
            regs.append(Regulation.GDPR)
            if any(t in text.lower() for t in ["california", "ca resident"]):
                regs.append(Regulation.CCPA)
        if phi:
            regs.append(Regulation.HIPAA)
        if financial:
            regs.append(Regulation.SOX)
        if "credit card" in pii or "credit_card" in pii:
            regs.append(Regulation.PCI_DSS)
        return regs if regs else [Regulation.GDPR]
    
    def _detect_cross_border(self, text: str, email: Dict) -> bool:
        return any(ind in text.lower() for ind in self.CROSS_BORDER_INDICATORS)
    
    def _assess_risk(self, pii: List, phi: List, financial: List, regs: List[Regulation], cross_border: bool) -> RiskLevel:
        score = len(pii) * 2 + len(phi) * 3 + len(financial) * 2
        if cross_border: score += 3
        if len(regs) > 2: score += 2
        if score >= 10: return RiskLevel.CRITICAL
        if score >= 7: return RiskLevel.HIGH
        if score >= 4: return RiskLevel.MEDIUM
        if score >= 1: return RiskLevel.LOW
        return RiskLevel.NONE
    
    def _check_legal_hold(self, email: Dict, text: str) -> bool:
        hold_keywords = ["litigation", "lawsuit", "legal hold", "preservation", "subpoena", "discovery"]
        return any(kw in text.lower() for kw in hold_keywords)
    
    def _determine_retention(self, regs: List[Regulation], legal_hold: bool) -> str:
        if legal_hold: return self.RETENTION_POLICIES["legal_hold"]
        if Regulation.HIPAA in regs: return self.RETENTION_POLICIES["healthcare"]
        if Regulation.SOX in regs: return self.RETENTION_POLICIES["financial"]
        return self.RETENTION_POLICIES["standard"]
    
    def _check_violations(self, pii: List, phi: List, financial: List, regs: List[Regulation], cross_border: bool) -> List[str]:
        violations = []
        if "ssn" in pii: violations.append("SSN detected - requires encryption")
        if "credit_card" in pii: violations.append("Credit card data - PCI-DSS violation risk")
        if phi and Regulation.HIPAA not in regs: violations.append("PHI without HIPAA safeguards")
        if cross_border and Regulation.GDPR in regs: violations.append("Cross-border transfer may require SCCs")
        if len(pii) > 3: violations.append("High PII density - data minimization concern")
        return violations
    
    def _generate_remediation(self, violations: List[str], regs: List[Regulation]) -> List[str]:
        steps = []
        for v in violations:
            if "encryption" in v: steps.append("Encrypt sensitive data before sending")
            if "PCI" in v: steps.append("Use tokenized payment references instead of card numbers")
            if "HIPAA" in v: steps.append("Apply HIPAA-compliant secure messaging channel")
            if "cross-border" in v.lower(): steps.append("Implement Standard Contractual Clauses (SCCs)")
            if "minimization" in v: steps.append("Apply data minimization - remove unnecessary PII")
        if not steps: steps.append("No remediation required - email is compliant")
        return steps

if __name__ == "__main__":
    guardian = ComplianceGuardianPro()
    tests = [
        {"from": "hr@company.com", "subject": "Employee health records", "body": "Attached are the patient diagnosis records and prescription details for John Doe, SSN 123-45-6789. Please process the insurance claim."},
        {"from": "finance@corp.com", "subject": "Q4 financial statement", "body": "Please review the attached financial statement. Revenue: $2.4M, routing number: 021000021, account: 1234567890 for the wire transfer."},
        {"from": "sales@startup.com", "subject": "New client onboarding", "body": "Great news! New EU client signed. Their credit card is 4111-1111-1111-1111. We need to transfer their data to our US servers."}
    ]
    print("=" * 60)
    print("V112: Compliance & Legal Guardian Pro")
    print("=" * 60)
    for i, email in enumerate(tests, 1):
        report = guardian.scan_email(email)
        print(f"\n--- Email #{i}: {email['subject']} ---")
        print(f"  Regulations: {[r.value for r in report.regulations_triggered]}")
        print(f"  Risk: {report.risk_level.value}")
        print(f"  PII: {report.pii_detected}")
        print(f"  PHI: {report.phi_detected}")
        print(f"  Financial: {report.financial_data}")
        print(f"  Cross-border: {report.cross_border_transfer}")
        print(f"  Legal Hold: {report.legal_hold_required}")
        print(f"  Retention: {report.retention_policy}")
        print(f"  Violations: {report.violations}")
        print(f"  Remediation: {report.remediation_steps}")

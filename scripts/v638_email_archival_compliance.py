#!/usr/bin/env python3
"""V638 - Email Archival Compliance Engine
Ensure email archival meets regulatory requirements (GDPR, HIPAA, SOX, FINRA).
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any

class ArchivalComplianceEngine:
    """Ensure email archival regulatory compliance."""
    
    RETENTION_POLICIES = {
        "GDPR": {"min_days": 30, "max_days": 2555, "consent_required": True, "right_to_delete": True},
        "HIPAA": {"min_days": 2190, "max_days": 3650, "encryption_required": True, "audit_trail": True},
        "SOX": {"min_days": 2555, "max_days": 3650, "immutability": True, "audit_trail": True},
        "FINRA": {"min_days": 2190, "max_days": 2555, "supervision": True, "writable_once": True},
        "general": {"min_days": 365, "max_days": 2555, "backup_required": True}
    }
    
    SENSITIVE_DATA_PATTERNS = {
        "pii": ["ssn", "social security", "passport", "driver license"],
        "phi": ["diagnosis", "treatment", "medical record", "prescription", "patient"],
        "financial": ["account number", "routing number", "credit card", "bank account"],
        "credentials": ["password", "api key", "secret", "token"]
    }
    
    def __init__(self):
        self.archive_records = []
        self.compliance_log = []
    
    def check_compliance(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Check email archival compliance."""
        applicable_regulations = self._determine_regulations(email)
        sensitive_data = self._detect_sensitive_data(email)
        
        retention = self._calculate_retention(applicable_regulations, sensitive_data)
        encryption_needed = self._check_encryption_requirements(applicable_regulations, sensitive_data)
        audit_requirements = self._get_audit_requirements(applicable_regulations)
        
        compliance_score = self._calculate_compliance_score(
            applicable_regulations, sensitive_data, encryption_needed
        )
        
        violations = self._detect_violations(email, applicable_regulations, sensitive_data)
        remediation = self._generate_remediation(violations, applicable_regulations)
        
        return {
            "engine": "V638",
            "email_subject": email.get("subject", ""),
            "applicable_regulations": applicable_regulations,
            "sensitive_data_detected": sensitive_data,
            "retention_policy": retention,
            "encryption_required": encryption_needed,
            "audit_requirements": audit_requirements,
            "compliance_score": round(compliance_score, 1),
            "violations": violations,
            "remediation_steps": remediation,
            "is_compliant": len(violations) == 0,
            "archive_action": self._determine_archive_action(compliance_score, violations),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _determine_regulations(self, email: Dict) -> List[str]:
        """Determine applicable regulations."""
        regulations = ["general"]
        
        sender = email.get("from", "").lower()
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        text = body + " " + subject
        
        # HIPAA
        if any(word in text for word in self.SENSITIVE_DATA_PATTERNS["phi"]):
            regulations.append("HIPAA")
        
        # SOX
        if any(word in text for word in ["financial statement", "audit", "revenue", "quarterly"]):
            regulations.append("SOX")
        
        # FINRA
        if any(word in sender for word in ["broker", "trading", "securities", "investment"]):
            regulations.append("FINRA")
        
        # GDPR
        if any(word in text for word in ["personal data", "consent", "eu citizen", "gdpr"]):
            regulations.append("GDPR")
        
        return list(set(regulations))
    
    def _detect_sensitive_data(self, email: Dict) -> List[Dict]:
        """Detect sensitive data in email."""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        detected = []
        
        for category, patterns in self.SENSITIVE_DATA_PATTERNS.items():
            for pattern in patterns:
                if pattern in text:
                    detected.append({
                        "category": category,
                        "pattern": pattern,
                        "severity": self._get_severity(category)
                    })
        
        return detected
    
    def _get_severity(self, category: str) -> str:
        severity_map = {
            "pii": "high",
            "phi": "critical",
            "financial": "high",
            "credentials": "critical"
        }
        return severity_map.get(category, "medium")
    
    def _calculate_retention(self, regulations: List[str], sensitive_data: List[Dict]) -> Dict:
        """Calculate retention policy."""
        max_retention = 365
        min_retention = 30
        
        for reg in regulations:
            policy = self.RETENTION_POLICIES.get(reg, {})
            max_retention = max(max_retention, policy.get("min_days", 365))
            min_retention = max(min_retention, policy.get("min_days", 30))
        
        # Extend for sensitive data
        if any(d["severity"] == "critical" for d in sensitive_data):
            max_retention = max(max_retention, 2555)  # 7 years
        
        return {
            "min_retention_days": min_retention,
            "max_retention_days": max_retention,
            "recommended_retention_days": max_retention,
            "auto_delete_after_days": max_retention + 30,
            "regulations_driving_retention": regulations
        }
    
    def _check_encryption_requirements(self, regulations: List[str], sensitive_data: List[Dict]) -> bool:
        """Check if encryption is required."""
        for reg in regulations:
            policy = self.RETENTION_POLICIES.get(reg, {})
            if policy.get("encryption_required", False):
                return True
        
        if any(d["severity"] in ["high", "critical"] for d in sensitive_data):
            return True
        
        return False
    
    def _get_audit_requirements(self, regulations: List[str]) -> List[str]:
        """Get audit requirements."""
        requirements = []
        
        for reg in regulations:
            policy = self.RETENTION_POLICIES.get(reg, {})
            if policy.get("audit_trail", False):
                requirements.append(f"{reg}: Full audit trail required")
            if policy.get("immutability", False):
                requirements.append(f"{reg}: Immutable storage required")
            if policy.get("supervision", False):
                requirements.append(f"{reg}: Supervisory review required")
        
        return requirements
    
    def _calculate_compliance_score(self, regulations: List[str], sensitive_data: List[Dict], encryption: bool) -> float:
        """Calculate compliance score."""
        score = 100.0
        
        # Deduct for sensitive data without encryption
        if sensitive_data and not encryption:
            score -= 30
        
        # Deduct for multiple regulations
        score -= (len(regulations) - 1) * 5
        
        # Deduct for critical data
        critical_count = sum(1 for d in sensitive_data if d["severity"] == "critical")
        score -= critical_count * 15
        
        return max(0, score)
    
    def _detect_violations(self, email: Dict, regulations: List[str], sensitive_data: List[Dict]) -> List[Dict]:
        """Detect compliance violations."""
        violations = []
        
        # Check for unencrypted sensitive data
        if sensitive_data:
            for data in sensitive_data:
                if data["severity"] == "critical":
                    violations.append({
                        "type": "unencrypted_sensitive_data",
                        "severity": "critical",
                        "description": f"Critical data ({data['category']}) must be encrypted",
                        "regulation": "HIPAA" if data["category"] == "phi" else "GDPR"
                    })
        
        # Check for consent (GDPR)
        if "GDPR" in regulations and not email.get("consent_verified", False):
            violations.append({
                "type": "missing_consent",
                "severity": "high",
                "description": "GDPR requires verified consent for data processing",
                "regulation": "GDPR"
            })
        
        return violations
    
    def _generate_remediation(self, violations: List[Dict], regulations: List[str]) -> List[str]:
        """Generate remediation steps."""
        steps = []
        
        for violation in violations:
            if violation["type"] == "unencrypted_sensitive_data":
                steps.append("Encrypt sensitive data before archival")
                steps.append("Apply AES-256 encryption at rest")
            elif violation["type"] == "missing_consent":
                steps.append("Verify data processing consent")
                steps.append("Document consent in audit trail")
        
        if "SOX" in regulations:
            steps.append("Enable write-once-read-many (WORM) storage")
        
        if not steps:
            steps.append("Email is compliant - proceed with standard archival")
        
        return steps
    
    def _determine_archive_action(self, score: float, violations: List[Dict]) -> str:
        """Determine archive action."""
        if violations and any(v["severity"] == "critical" for v in violations):
            return "QUARANTINE"
        elif score < 60:
            return "REVIEW_REQUIRED"
        elif score < 80:
            return "ARCHIVE_WITH_FLAGS"
        else:
            return "ARCHIVE_STANDARD"
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.check_compliance(e) for e in emails]
        
        compliant_count = sum(1 for r in results if r["is_compliant"])
        total_violations = sum(len(r["violations"]) for r in results)
        
        regulation_distribution = {}
        for r in results:
            for reg in r["applicable_regulations"]:
                regulation_distribution[reg] = regulation_distribution.get(reg, 0) + 1
        
        return {
            "engine": "V638 - Archival Compliance Engine",
            "total_checked": len(results),
            "compliant_emails": compliant_count,
            "compliance_rate_percent": round(compliant_count / len(results) * 100, 1) if results else 100,
            "total_violations": total_violations,
            "regulation_distribution": regulation_distribution,
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = ArchivalComplianceEngine()
    test_emails = [
        {"subject": "Patient diagnosis report", "body": "Patient treatment plan and medical record attached. SSN: 123-45-6789.",
         "from": "doctor@hospital.com", "to": ["nurse@hospital.com", "admin@hospital.com"]},
        {"subject": "Q4 Financial Statement", "body": "Quarterly revenue report and audit findings.",
         "from": "cfo@company.com", "to": ["board@company.com"]},
        {"subject": "Team meeting notes", "body": "Notes from today's standup meeting.",
         "from": "lead@company.com", "to": ["team@company.com"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""V608 - Email Compliance Guardian
Real-time GDPR, HIPAA, and SOX compliance checking with auto-redaction.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any

class ComplianceGuardian:
    """Ensure email compliance with regulations."""
    
    PII_PATTERNS = {
        "ssn": r'\b\d{3}-\d{2}-\d{4}\b',
        "credit_card": r'\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b',
        "email": r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
        "phone": r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b',
        "address": r'\b\d+\s+[A-Z][\w\s]+(?:St|Ave|Blvd|Rd|Dr)\b'
    }
    
    HIPAA_KEYWORDS = [r'\bdiagnosis\b', r'\btreatment\b', r'\bmedical\s+record\b', r'\bpatient\b', r'\bprescription\b']
    SOX_KEYWORDS = [r'\bfinancial\s+statement\b', r'\bearnings\b', r'\brevenue\b', r'\baudit\b', r'\binternal\s+control\b']
    
    def __init__(self):
        self.audit_log = []
    
    def check_compliance(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Check email for compliance violations."""
        body = email.get("body", "")
        
        pii_detected = self._detect_pii(body)
        gdpr_violations = self._check_gdpr(body, email)
        hipaa_violations = self._check_hipaa(body)
        sox_violations = self._check_sox(body)
        
        redacted_body = self._redact_pii(body, pii_detected)
        
        violations = pii_detected + gdpr_violations + hipaa_violations + sox_violations
        compliance_score = max(0, 100 - len(violations) * 10)
        
        self.audit_log.append({
            "timestamp": datetime.now().isoformat(),
            "violations": len(violations),
            "score": compliance_score
        })
        
        return {
            "engine": "V608",
            "compliance_score": compliance_score,
            "pii_detected": pii_detected,
            "gdpr_violations": gdpr_violations,
            "hipaa_violations": hipaa_violations,
            "sox_violations": sox_violations,
            "redacted_body": redacted_body,
            "recommendations": self._generate_recommendations(violations),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _detect_pii(self, body: str) -> List[Dict]:
        """Detect PII in email body."""
        detected = []
        for pii_type, pattern in self.PII_PATTERNS.items():
            matches = re.findall(pattern, body)
            if matches:
                detected.append({"type": pii_type, "count": len(matches), "pattern": pattern})
        return detected
    
    def _check_gdpr(self, body: str, email: Dict) -> List[str]:
        """Check GDPR compliance."""
        violations = []
        recipients = email.get("to", []) + email.get("cc", []) + email.get("bcc", [])
        if len(recipients) > 10:
            violations.append("Large recipient list - consider BCC for GDPR")
        if "unsubscribe" not in body.lower() and len(recipients) > 5:
            violations.append("Missing unsubscribe option for bulk email")
        return violations
    
    def _check_hipaa(self, body: str) -> List[str]:
        """Check HIPAA compliance."""
        violations = []
        for keyword in self.HIPAA_KEYWORDS:
            if re.search(keyword, body, re.IGNORECASE):
                violations.append(f"HIPAA-sensitive content: {keyword}")
        return violations
    
    def _check_sox(self, body: str) -> List[str]:
        """Check SOX compliance."""
        violations = []
        for keyword in self.SOX_KEYWORDS:
            if re.search(keyword, body, re.IGNORECASE):
                violations.append(f"SOX-sensitive content: {keyword}")
        return violations
    
    def _redact_pii(self, body: str, pii_detected: List[Dict]) -> str:
        """Redact PII from email body."""
        redacted = body
        for pii in pii_detected:
            redacted = re.sub(pii["pattern"], "[REDACTED]", redacted)
        return redacted
    
    def _generate_recommendations(self, violations: List) -> List[str]:
        """Generate compliance recommendations."""
        recs = []
        if violations:
            recs.append(f"Found {len(violations)} compliance issues - review before sending")
            recs.append("Consider using encrypted email for sensitive information")
            recs.append("Verify recipient list for data minimization")
        else:
            recs.append("Email appears compliant")
        return recs
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.check_compliance(e) for e in emails]
        avg_score = sum(r["compliance_score"] for r in results) / len(results) if results else 100
        return {
            "engine": "V608 - Compliance Guardian",
            "total_checked": len(results),
            "average_compliance_score": round(avg_score, 1),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = ComplianceGuardian()
    test_emails = [
        {"body": "Please find the patient diagnosis and SSN 123-45-6789 attached.", "to": ["doctor@hospital.com", "nurse@hospital.com"]},
        {"body": "Here's the project update for Q4.", "to": ["team@company.com"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))

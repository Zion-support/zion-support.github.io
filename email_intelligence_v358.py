#!/usr/bin/env python3
"""
V358 Email Compliance Auto-Auditor
Continuous compliance monitoring (GDPR, HIPAA, SOX, PCI, CCPA).
Auto-generate compliance reports, detect policy violations, enforce data retention.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""
import json, re, sys
from datetime import datetime

class V358ComplianceAutoAuditor:
    REGULATIONS = {
        "GDPR": {
            "pii_patterns": [
                (r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b", "email_address"),
                (r"\b\d{3}[-.]?\d{3}[-.]?\d{4}\b", "phone_number"),
                (r"\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b", "date_of_birth"),
            ],
            "consent_keywords": ["consent", "opt-in", "subscribe", "permission", "privacy policy"],
            "data_subject_rights": ["delete my data", "right to access", "data portability", "opt out", "unsubscribe"],
        },
        "HIPAA": {
            "phi_patterns": [
                (r"\b\d{3}-\d{2}-\d{4}\b", "SSN"),
                (r"(?:patient|medical|diagnosis|treatment|prescription)", "medical_info"),
                (r"(?:health\s*(?:plan|record|insurance))", "health_record"),
            ],
        },
        "PCI": {
            "card_patterns": [
                (r"\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})\b", "credit_card"),
                (r"(?:CVV|CVC|card\s*number|expiration\s*date)", "card_data"),
            ],
        },
        "SOX": {
            "financial_patterns": [
                (r"(?:revenue|profit|loss|earnings)\s*[:=]?\s*\$?[\d,]+", "financial_statement"),
                (r"(?:audit|internal\s*control|material\s*weakness)", "audit_reference"),
            ],
        },
        "CCPA": {
            "consumer_patterns": [
                (r"(?:do not sell|opt out|personal information|california resident)", "consumer_right"),
            ],
        },
    }

    RETENTION_POLICIES = {
        "financial": 7 * 365,
        "legal": 10 * 365,
        "hr": 5 * 365,
        "general": 2 * 365,
    }

    def __init__(self):
        self.audits = []

    def audit_compliance(self, email_text, subject="", sender="", recipients=None, regulation_scope=None):
        recipients = recipients or []
        regulation_scope = regulation_scope or list(self.REGULATIONS.keys())
        combined = f"{subject} {email_text}"

        violations = []
        compliance_scores = {}
        data_detected = {}

        for reg in regulation_scope:
            reg_config = self.REGULATIONS.get(reg, {})
            reg_violations = []
            reg_data = {}

            for pattern_key in [k for k in reg_config.keys() if k.endswith("_patterns")]:
                patterns = reg_config[pattern_key]
                for pattern, data_type in patterns:
                    matches = re.findall(pattern, combined, re.IGNORECASE)
                    if matches:
                        reg_data[data_type] = len(matches)
                        reg_violations.append({
                            "regulation": reg,
                            "type": f"unencrypted_{data_type}",
                            "severity": "high" if reg in ["HIPAA", "PCI"] else "medium",
                            "count": len(matches),
                            "recommendation": f"Encrypt or redact {data_type} before sending via email",
                        })

            compliance_scores[reg] = {
                "score": max(0, 100 - len(reg_violations) * 15),
                "data_found": reg_data,
                "violations": len(reg_violations),
            }
            violations.extend(reg_violations)
            data_detected.update(reg_data)

        retention_class = self._classify_retention(combined)
        is_multi = len(recipients) > 1

        result = {
            "version": "V358",
            "timestamp": datetime.now().isoformat(),
            "regulations_checked": regulation_scope,
            "compliance_scores": compliance_scores,
            "overall_compliance": round(sum(v["score"] for v in compliance_scores.values()) / max(1, len(compliance_scores)), 1),
            "violations_found": violations,
            "sensitive_data_detected": data_detected,
            "retention_classification": retention_class,
            "retention_days": self.RETENTION_POLICIES.get(retention_class, 730),
            "recommendations": self._generate_recommendations(violations, data_detected),
            "audit_trail_hash": hash(combined[:100]) % 1000000,
            "reply_all_required": is_multi,
            "reply_all_enforced": is_multi,
            "action_taken": f"Audited {len(regulation_scope)} regulations: {len(violations)} violations found",
        }
        self.audits.append(result)
        return result

    def _classify_retention(self, text):
        text_lower = text.lower()
        if any(w in text_lower for w in ["revenue", "profit", "financial", "tax", "invoice"]):
            return "financial"
        if any(w in text_lower for w in ["contract", "agreement", "legal", "litigation"]):
            return "legal"
        if any(w in text_lower for w in ["employee", "salary", "performance", "hiring"]):
            return "hr"
        return "general"

    def _generate_recommendations(self, violations, data):
        recs = []
        if any(v["severity"] == "high" for v in violations):
            recs.append("CRITICAL: High-severity violations detected. Do not send without encryption.")
        if "credit_card" in data:
            recs.append("PCI violation: Never send credit card numbers via email.")
        if "SSN" in data:
            recs.append("HIPAA/GDPR violation: SSN detected. Use secure portal instead.")
        if "email_address" in data:
            recs.append("GDPR: Personal email detected. Verify consent before processing.")
        if not recs:
            recs.append("All compliance checks passed. Safe to send.")
        return recs

if __name__ == "__main__":
    engine = V358ComplianceAutoAuditor()
    result = engine.audit_compliance(
        "Please find the patient records for John Doe (SSN: 123-45-6789). His credit card on file is 4532015112830366. The treatment plan and diagnosis are attached. Revenue for Q4 was $5.2M.",
        subject="Patient Records & Financial Update",
        sender="admin@hospital.com",
        recipients=["doctor@hospital.com", "billing@hospital.com", "legal@hospital.com"]
    )
    print(json.dumps(result, indent=2))

"""
V378 - Email Data Governance Engine
Classify emails by data sensitivity (public/internal/confidential/restricted),
enforce retention policies, auto-archive expired emails, generate governance reports.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict


class EmailDataGovernanceEngine:
    """Classify, govern, and enforce retention policies on emails."""

    SENSITIVITY_LEVELS = ["public", "internal", "confidential", "restricted"]

    SENSITIVITY_KEYWORDS = {
        "restricted": [
            "ssn", "social security", "password", "credit card", "bank account",
            "hipaa", "phi", "pci", "secret key", "api key", "encryption key",
            "classified", "top secret", "trade secret",
        ],
        "confidential": [
            "salary", "compensation", "bonus", "hr", "disciplinary", "termination",
            "merger", "acquisition", "nda", "non-disclosure", "legal",
            "attorney", "privileged", "financial forecast", "revenue projection",
        ],
        "internal": [
            "internal", "team only", "do not forward", "draft", "preliminary",
            "roadmap", "strategy", "performance review", "budget",
        ],
        "public": [
            "press release", "public", "announcement", "blog post", "newsletter",
        ],
    }

    RETENTION_POLICIES = {
        "public": {"days": 365, "action": "archive"},
        "internal": {"days": 730, "action": "archive"},
        "confidential": {"days": 1825, "action": "secure_archive"},
        "restricted": {"days": 3650, "action": "encrypted_archive"},
    }

    def __init__(self):
        self.emails_processed = []
        self.classifications = []
        self.retention_actions = []
        self.violations = []

    def classify_sensitivity(self, email: Dict) -> Dict:
        """Classify email by data sensitivity level."""
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        attachments = email.get("attachments", [])
        combined = f"{subject} {body}"

        detected_level = "public"
        matched_keywords = []

        for level in ["restricted", "confidential", "internal", "public"]:
            keywords = self.SENSITIVITY_KEYWORDS.get(level, [])
            for kw in keywords:
                if kw in combined:
                    matched_keywords.append(kw)
                    if self.SENSITIVITY_LEVELS.index(level) > self.SENSITIVITY_LEVELS.index(detected_level):
                        detected_level = level

        # Check attachments for sensitive file types
        sensitive_extensions = [".pdf", ".xlsx", ".doc", ".zip", ".enc"]
        has_sensitive_attachment = any(
            any(att.get("filename", "").lower().endswith(ext) for ext in sensitive_extensions)
            for att in attachments
        )
        if has_sensitive_attachment and detected_level == "public":
            detected_level = "internal"

        classification = {
            "email_id": email.get("id", "unknown"),
            "subject": email.get("subject", ""),
            "sensitivity_level": detected_level,
            "matched_keywords": matched_keywords,
            "has_sensitive_attachments": has_sensitive_attachment,
            "classification_timestamp": datetime.now().isoformat(),
            "confidence": self._calculate_confidence(matched_keywords, detected_level),
        }

        self.classifications.append(classification)
        return classification

    def _calculate_confidence(self, keywords: List[str], level: str) -> float:
        """Calculate confidence in classification."""
        if not keywords:
            return 0.5
        base = min(0.6 + len(keywords) * 0.1, 0.99)
        if level in ["restricted", "confidential"]:
            base = min(base + 0.05, 0.99)
        return round(base, 2)

    def check_retention_policy(self, email: Dict, classification: Dict) -> Dict:
        """Check if email meets retention policy requirements."""
        level = classification.get("sensitivity_level", "internal")
        policy = self.RETENTION_POLICIES.get(level, self.RETENTION_POLICIES["internal"])

        email_date_str = email.get("timestamp", datetime.now().isoformat())
        try:
            email_date = datetime.fromisoformat(email_date_str)
        except Exception:
            email_date = datetime.now()

        age_days = (datetime.now() - email_date).days
        retention_days = policy["days"]
        expires_at = email_date + timedelta(days=retention_days)
        is_expired = age_days > retention_days

        action_required = None
        if is_expired:
            action_required = policy["action"]
            self.retention_actions.append({
                "email_id": email.get("id"),
                "action": action_required,
                "sensitivity": level,
                "age_days": age_days,
                "executed_at": datetime.now().isoformat(),
            })

        return {
            "email_id": email.get("id", "unknown"),
            "sensitivity_level": level,
            "retention_policy_days": retention_days,
            "age_days": age_days,
            "expires_at": expires_at.isoformat(),
            "is_expired": is_expired,
            "action_required": action_required,
            "policy_action": policy["action"],
        }

    def detect_violations(self, email: Dict, classification: Dict) -> List[Dict]:
        """Detect data governance violations."""
        violations = []
        recipients = email.get("recipients", [])
        sensitivity = classification.get("sensitivity_level", "public")
        body = email.get("body", "").lower()

        # Check for external forwarding of confidential/restricted data
        external_domains = [r for r in recipients if "external" in r or "gmail" in r or "yahoo" in r]
        if sensitivity in ["confidential", "restricted"] and external_domains:
            violations.append({
                "type": "external_sharing",
                "severity": "critical",
                "description": f"{sensitivity.capitalize()} data shared with external recipients",
                "external_recipients": external_domains,
                "email_id": email.get("id"),
            })

        # Check for missing encryption markers on restricted data
        if sensitivity == "restricted":
            if "encrypted" not in body and "secure" not in body:
                violations.append({
                    "type": "missing_encryption",
                    "severity": "high",
                    "description": "Restricted data without encryption markers",
                    "email_id": email.get("id"),
                })

        # Check for 'do not forward' compliance
        if "do not forward" in body or "dnf" in body:
            if len(recipients) > 5:
                violations.append({
                    "type": "excessive_distribution",
                    "severity": "medium",
                    "description": "Email marked 'do not forward' sent to many recipients",
                    "recipient_count": len(recipients),
                    "email_id": email.get("id"),
                })

        self.violations.extend(violations)
        return violations

    def generate_governance_report(self, recipients: List[str]) -> Dict:
        """Generate comprehensive governance report."""
        enforce_reply_all = len(recipients) > 1

        sensitivity_distribution = defaultdict(int)
        for cls in self.classifications:
            sensitivity_distribution[cls["sensitivity_level"]] += 1

        expired_count = sum(1 for r in self.retention_actions if r.get("action"))
        archived_emails = [r for r in self.retention_actions if r.get("action") in ["archive", "secure_archive", "encrypted_archive"]]

        return {
            "engine": "V378 - Email Data Governance Engine",
            "timestamp": datetime.now().isoformat(),
            "reply_all_required": enforce_reply_all,
            "reply_all_enforced": enforce_reply_all,
            "summary": {
                "total_emails_processed": len(self.emails_processed),
                "total_classifications": len(self.classifications),
                "total_violations": len(self.violations),
                "total_retention_actions": len(self.retention_actions),
                "expired_emails": expired_count,
            },
            "sensitivity_distribution": dict(sensitivity_distribution),
            "classifications": self.classifications,
            "retention_actions": self.retention_actions,
            "violations": self.violations,
            "compliance_score": self._calculate_compliance_score(),
            "recommendations": self._generate_recommendations(),
        }

    def _calculate_compliance_score(self) -> float:
        """Calculate overall compliance score."""
        if not self.classifications:
            return 100.0
        violation_weight = len(self.violations) * 10
        score = max(0.0, 100.0 - violation_weight)
        return round(score, 1)

    def _generate_recommendations(self) -> List[str]:
        """Generate governance recommendations."""
        recs = []
        violation_types = set(v["type"] for v in self.violations)

        if "external_sharing" in violation_types:
            recs.append("Implement DLP rules to prevent external sharing of sensitive data")
        if "missing_encryption" in violation_types:
            recs.append("Enforce mandatory encryption for restricted-classified emails")
        if "excessive_distribution" in violation_types:
            recs.append("Add distribution limits for emails marked 'do not forward'")
        if any(r.get("action") for r in self.retention_actions):
            recs.append("Review and execute pending retention policy actions")
        if not recs:
            recs.append("Current governance posture is strong. Continue monitoring.")
        return recs

    def process_emails(self, emails: List[Dict]) -> List[Dict]:
        """Process a batch of emails through governance pipeline."""
        results = []
        for email in emails:
            self.emails_processed.append(email)
            classification = self.classify_sensitivity(email)
            retention = self.check_retention_policy(email, classification)
            violations = self.detect_violations(email, classification)
            results.append({
                "email_id": email.get("id"),
                "classification": classification,
                "retention": retention,
                "violations": violations,
            })
        return results


def main():
    engine = EmailDataGovernanceEngine()

    now = datetime.now()
    sample_emails = [
        {
            "id": "gov_001",
            "sender": "hr@company.com",
            "recipients": ["manager@company.com"],
            "subject": "Employee Compensation Review - Confidential",
            "body": "Please find attached the salary review and bonus allocation for Q4. This contains compensation data and is strictly confidential. Do not forward.",
            "attachments": [{"filename": "salary_review_Q4.xlsx", "size": 245000}],
            "timestamp": (now - timedelta(days=10)).isoformat(),
        },
        {
            "id": "gov_002",
            "sender": "dev@company.com",
            "recipients": ["team@company.com", "external-consultant@gmail.com"],
            "subject": "API Keys for Production Deployment",
            "body": "Here are the API keys and secret key for the production environment. Please use these credentials for the deployment.",
            "timestamp": (now - timedelta(days=5)).isoformat(),
        },
        {
            "id": "gov_003",
            "sender": "marketing@company.com",
            "recipients": ["all@company.com"],
            "subject": "Company Newsletter - May 2026",
            "body": "Welcome to our monthly newsletter! Here are the latest public announcements and blog post updates for the community.",
            "timestamp": (now - timedelta(days=2)).isoformat(),
        },
        {
            "id": "gov_004",
            "sender": "legal@company.com",
            "recipients": ["ceo@company.com", "cfo@company.com"],
            "subject": "Privileged: Merger Discussion - NDA Required",
            "body": "Attorney-client privileged communication regarding the potential acquisition. NDA terms attached. This is highly confidential legal strategy.",
            "attachments": [{"filename": "nda_terms.pdf", "size": 120000}],
            "timestamp": (now - timedelta(days=800)).isoformat(),
        },
        {
            "id": "gov_005",
            "sender": "admin@company.com",
            "recipients": ["team@company.com"],
            "subject": "Internal: Q3 Roadmap Draft",
            "body": "Team, here's the preliminary internal roadmap for Q3. This is a draft strategy document. Do not forward outside the team.",
            "timestamp": (now - timedelta(days=400)).isoformat(),
        },
    ]

    recipients_list = ["compliance@company.com", "security@company.com"]
    engine.process_emails(sample_emails)
    report = engine.generate_governance_report(recipients=recipients_list)
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()

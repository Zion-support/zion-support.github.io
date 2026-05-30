"""
V390 - Email Compliance Guardian
Check emails for regulatory compliance (GDPR, HIPAA, SOX), flag sensitive information,
suggest redactions, and generate compliance reports.
"""

import json
import re
from datetime import datetime


class EmailComplianceGuardian:
    """Engine for ensuring email regulatory compliance."""

    # GDPR - EU data protection
    GDPR_INDICATORS = {
        "personal_data": [
            r"\b[A-Z][a-z]+\s+[A-Z][a-z]+\b",  # Full names
            r"\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b",  # Dates of birth format
            r"\b(?:Mr|Mrs|Ms|Dr)\.?\s+[A-Z][a-z]+\b",  # Titled names
        ],
        "special_category_data": [
            r"(?:health|medical|diagnosis|treatment|patient|prescription)",
            r"(?:race|ethnic|religion|political|sexual orientation|biometric)",
            r"(?:genetic|health data|disability)",
        ],
        "data_transfer": [
            r"(?:transfer|send|share).*(?:outside|third.?party|non.?EU|international)",
            r"(?:data processing|sub.?processor)",
        ],
    }

    # HIPAA - US healthcare
    HIPAA_INDICATORS = {
        "phi_identifiers": {
            "names": r"\b[A-Z][a-z]+\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?\b",
            "dates": r"\b\d{1,2}/\d{1,2}/\d{2,4}\b",
            "ssn": r"\b\d{3}-\d{2}-\d{4}\b",
            "medical_record": r"(?:MRN|medical record)[:\s#]*\d+",
            "phone": r"\b\d{3}[-.]?\d{3}[-.]?\d{4}\b",
            "email": r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",
        },
        "health_info": [
            r"(?:diagnosis|prognosis|treatment plan|medication|dosage)",
            r"(?:patient|admission|discharge|lab result|vital signs)",
            r"(?:ICD|CPT|HIPAA|PHI|EHR|EMR)",
        ],
    }

    # SOX - Sarbanes-Oxley financial compliance
    SOX_INDICATORS = {
        "financial_statements": [
            r"(?:revenue|profit|loss|EBITDA|earnings per share|EPS)",
            r"(?:balance sheet|income statement|cash flow)",
            r"(?:audit|internal controls|financial reporting)",
        ],
        "material_info": [
            r"(?:material|significant|substantial).*(?:change|impact|effect)",
            r"(?:merger|acquisition|divestiture|restructuring)",
            r"(?:guidance|forecast|projection|outlook)",
        ],
        "insider_trading_risk": [
            r"(?:confidential|non.?public|inside information)",
            r"(?:blackout period|trading window|pre.?clearance)",
            r"(?:stock option|equity grant|insider)",
        ],
    }

    # General sensitive patterns
    SENSITIVE_PATTERNS = {
        "credentials": [
            r"(?:password|passwd|pwd|secret)[\s:=]+[\S]+",
            r"(?:api[_-]?key|token|access[_-]?key)[\s:=]+[\S]+",
            r"(?:private[_-]?key|ssh[_-]?key)",
        ],
        "financial_data": [
            r"(?:account number|routing number|sort code)[\s:#]*\d{6,}",
            r"(?:credit card|card number)[\s:#]*\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}",
            r"\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?(?:\s?(?:million|billion|M|B))?",
        ],
    }

    def __init__(self):
        self.compliance_reports = []

    def check_compliance(self, email, compliance_frameworks=None):
        """Check email against specified compliance frameworks."""
        if compliance_frameworks is None:
            compliance_frameworks = ["GDPR", "HIPAA", "SOX"]

        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        recipients = email.get("to", [])
        cc = email.get("cc", [])
        attachments = email.get("attachments", [])

        all_recipients = recipients + cc
        reply_all_required = len(all_recipients) > 1

        # Run checks for each framework
        framework_results = {}
        overall_violations = []
        overall_warnings = []

        if "GDPR" in compliance_frameworks:
            gdpr_result = self._check_gdpr(body, subject, all_recipients)
            framework_results["GDPR"] = gdpr_result
            overall_violations.extend(gdpr_result["violations"])
            overall_warnings.extend(gdpr_result["warnings"])

        if "HIPAA" in compliance_frameworks:
            hipaa_result = self._check_hipaa(body, subject)
            framework_results["HIPAA"] = hipaa_result
            overall_violations.extend(hipaa_result["violations"])
            overall_warnings.extend(hipaa_result["warnings"])

        if "SOX" in compliance_frameworks:
            sox_result = self._check_sox(body, subject, all_recipients)
            framework_results["SOX"] = sox_result
            overall_violations.extend(sox_result["violations"])
            overall_warnings.extend(sox_result["warnings"])

        # General sensitive data check
        sensitive_check = self._check_sensitive_data(body)
        overall_violations.extend(sensitive_check["violations"])
        overall_warnings.extend(sensitive_check["warnings"])

        # Generate redaction suggestions
        redactions = self._suggest_redactions(body, overall_violations, overall_warnings)

        # Compliance score
        compliance_score = self._calculate_compliance_score(overall_violations, overall_warnings)

        # Generate compliance report
        report = {
            "email_subject": subject,
            "sender": sender,
            "recipient_count": len(all_recipients),
            "reply_all_required": reply_all_required,
            "reply_all_enforced": reply_all_required,
            "frameworks_checked": compliance_frameworks,
            "framework_results": framework_results,
            "compliance_score": compliance_score,
            "compliance_status": self._compliance_status_label(compliance_score),
            "violations": overall_violations,
            "warnings": overall_warnings,
            "redaction_suggestions": redactions,
            "sensitive_data_check": sensitive_check,
            "recommendations": self._generate_recommendations(overall_violations, overall_warnings, compliance_frameworks),
        }

        self.compliance_reports.append(report)
        return report

    def _check_gdpr(self, body, subject, recipients):
        """Check for GDPR compliance issues."""
        violations = []
        warnings = []
        combined = f"{subject} {body}"

        # Check for personal data
        for category, patterns in self.GDPR_INDICATORS.items():
            for pattern in patterns:
                matches = re.findall(pattern, combined, re.IGNORECASE)
                if matches:
                    if category == "special_category_data":
                        violations.append({
                            "framework": "GDPR",
                            "severity": "high",
                            "category": category,
                            "detail": f"Special category data detected: {matches[0][:50]}",
                            "article": "Article 9 - Processing of special categories",
                        })
                    elif category == "data_transfer":
                        warnings.append({
                            "framework": "GDPR",
                            "severity": "medium",
                            "category": category,
                            "detail": f"Potential international data transfer detected",
                            "article": "Article 44-49 - International transfers",
                        })
                    else:
                        warnings.append({
                            "framework": "GDPR",
                            "severity": "low",
                            "category": category,
                            "detail": f"Personal data detected ({len(matches)} instance(s))",
                            "article": "Article 6 - Lawfulness of processing",
                        })

        # Check if recipients include external parties (potential data transfer)
        external_recipients = [r for r in recipients if "external" in r.lower() or "partner" in r.lower()]
        if external_recipients:
            warnings.append({
                "framework": "GDPR",
                "severity": "medium",
                "category": "data_sharing",
                "detail": f"Email sent to external parties: {external_recipients}",
                "article": "Article 28 - Processor obligations",
            })

        return {"violations": violations, "warnings": warnings, "compliant": len(violations) == 0}

    def _check_hipaa(self, body, subject):
        """Check for HIPAA compliance issues."""
        violations = []
        warnings = []
        combined = f"{subject} {body}"

        # Check for PHI identifiers
        phi_found = []
        for identifier, pattern in self.HIPAA_INDICATORS["phi_identifiers"].items():
            matches = re.findall(pattern, combined)
            if matches:
                phi_found.append({"type": identifier, "count": len(matches)})

        # Check for health information context
        health_context = False
        for pattern in self.HIPAA_INDICATORS["health_info"]:
            if re.search(pattern, combined, re.IGNORECASE):
                health_context = True
                break

        if phi_found and health_context:
            violations.append({
                "framework": "HIPAA",
                "severity": "critical",
                "category": "phi_disclosure",
                "detail": f"Protected Health Information (PHI) detected with {len(phi_found)} identifier type(s)",
                "phi_types_found": phi_found,
                "regulation": "45 CFR § 164.502 - Uses and disclosures",
            })
        elif phi_found:
            warnings.append({
                "framework": "HIPAA",
                "severity": "medium",
                "category": "potential_phi",
                "detail": f"PHI identifiers found without clear health context",
                "phi_types_found": phi_found,
            })
        elif health_context:
            warnings.append({
                "framework": "HIPAA",
                "severity": "low",
                "category": "health_context",
                "detail": "Health-related content detected - verify PHI is not included",
            })

        return {"violations": violations, "warnings": warnings, "compliant": len(violations) == 0}

    def _check_sox(self, body, subject, recipients):
        """Check for SOX compliance issues."""
        violations = []
        warnings = []
        combined = f"{subject} {body}"

        # Check for material non-public information
        has_financial = False
        has_material = False
        has_insider = False

        for pattern in self.SOX_INDICATORS["financial_statements"]:
            if re.search(pattern, combined, re.IGNORECASE):
                has_financial = True
                break

        for pattern in self.SOX_INDICATORS["material_info"]:
            if re.search(pattern, combined, re.IGNORECASE):
                has_material = True
                break

        for pattern in self.SOX_INDICATORS["insider_trading_risk"]:
            if re.search(pattern, combined, re.IGNORECASE):
                has_insider = True
                break

        if has_financial and has_material:
            violations.append({
                "framework": "SOX",
                "severity": "high",
                "category": "material_financial_info",
                "detail": "Material financial information detected - ensure proper disclosure controls",
                "section": "Section 302 - Corporate responsibility for financial reports",
            })

        if has_insider:
            violations.append({
                "framework": "SOX",
                "severity": "critical",
                "category": "insider_information",
                "detail": "Potential insider information or confidential material detected",
                "section": "Section 306 - Insider trading restrictions",
            })

        if has_financial and not has_material:
            warnings.append({
                "framework": "SOX",
                "severity": "low",
                "category": "financial_reference",
                "detail": "Financial terminology detected - verify accuracy and authorization",
                "section": "Section 404 - Management assessment of internal controls",
            })

        # Check distribution scope
        if has_material and len(recipients) > 10:
            warnings.append({
                "framework": "SOX",
                "severity": "medium",
                "category": "wide_distribution",
                "detail": f"Material information sent to {len(recipients)} recipients - verify distribution list",
            })

        return {"violations": violations, "warnings": warnings, "compliant": len(violations) == 0}

    def _check_sensitive_data(self, body):
        """Check for general sensitive data."""
        violations = []
        warnings = []

        for category, patterns in self.SENSITIVE_PATTERNS.items():
            for pattern in patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                if matches:
                    if category == "credentials":
                        violations.append({
                            "framework": "GENERAL",
                            "severity": "critical",
                            "category": f"sensitive_{category}",
                            "detail": f"Credentials/secrets detected in email body ({len(matches)} instance(s))",
                        })
                    else:
                        warnings.append({
                            "framework": "GENERAL",
                            "severity": "medium",
                            "category": f"sensitive_{category}",
                            "detail": f"Sensitive {category} data detected ({len(matches)} instance(s))",
                        })

        return {"violations": violations, "warnings": warnings}

    def _suggest_redactions(self, body, violations, warnings):
        """Suggest redactions for sensitive content."""
        redactions = []

        # SSN redaction
        ssn_matches = re.findall(r'\b(\d{3}-\d{2}-\d{4})\b', body)
        for match in ssn_matches:
            redacted = "***-**-" + match[-4:]
            redactions.append({"original": match, "redacted": redacted, "reason": "SSN protection"})

        # Credit card redaction
        cc_matches = re.findall(r'\b(\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4})\b', body)
        for match in cc_matches:
            redacted = "****-****-****-" + match[-4:]
            redactions.append({"original": match, "redacted": redacted, "reason": "Credit card protection"})

        # Password redaction
        pwd_matches = re.findall(r'((?:password|passwd|pwd)[\s:=]+\S+)', body, re.IGNORECASE)
        for match in pwd_matches:
            redactions.append({"original": match, "redacted": "[CREDENTIAL REDACTED]", "reason": "Credential protection"})

        # API key redaction
        api_matches = re.findall(r'((?:api[_-]?key|token|secret)[\s:=]+\S+)', body, re.IGNORECASE)
        for match in api_matches:
            redactions.append({"original": match, "redacted": "[SECRET REDACTED]", "reason": "Secret protection"})

        return redactions

    def _calculate_compliance_score(self, violations, warnings):
        """Calculate overall compliance score (100 = fully compliant)."""
        score = 100
        severity_penalties = {"critical": 30, "high": 20, "medium": 10, "low": 5}

        for violation in violations:
            score -= severity_penalties.get(violation["severity"], 10)

        for warning in warnings:
            score -= severity_penalties.get(warning["severity"], 5) // 2

        return max(0, score)

    def _compliance_status_label(self, score):
        """Convert score to status label."""
        if score >= 90:
            return "COMPLIANT"
        elif score >= 70:
            return "MINOR_ISSUES"
        elif score >= 50:
            return "NEEDS_ATTENTION"
        elif score >= 30:
            return "NON_COMPLIANT"
        return "CRITICAL_VIOLATIONS"

    def _generate_recommendations(self, violations, warnings, frameworks):
        """Generate actionable compliance recommendations."""
        recommendations = []

        if any(v["severity"] == "critical" for v in violations):
            recommendations.append("IMMEDIATE ACTION: Critical violations detected. Do NOT send until resolved.")

        if any(v.get("framework") == "HIPAA" for v in violations):
            recommendations.append("Apply HIPAA-safe harbor de-identification or obtain authorization before sharing PHI.")

        if any(v.get("framework") == "GDPR" for v in violations):
            recommendations.append("Ensure lawful basis for processing personal data. Consider Data Protection Impact Assessment.")

        if any(v.get("framework") == "SOX" for v in violations):
            recommendations.append("Route through proper disclosure channels. Verify authorization for financial communications.")

        if any(w.get("category", "").startswith("sensitive_") for w in warnings):
            recommendations.append("Remove or encrypt sensitive data before sending. Use secure channels for credentials.")

        if not recommendations:
            recommendations.append("Email appears compliant. Standard review recommended.")

        return recommendations

    def generate_compliance_report(self):
        """Generate a summary compliance report for all checked emails."""
        total = len(self.compliance_reports)
        compliant = sum(1 for r in self.compliance_reports if r["compliance_score"] >= 90)
        non_compliant = sum(1 for r in self.compliance_reports if r["compliance_score"] < 50)

        all_violations = []
        all_warnings = []
        for report in self.compliance_reports:
            all_violations.extend(report["violations"])
            all_warnings.extend(report["warnings"])

        return {
            "report_generated": datetime.now().isoformat(),
            "total_emails_checked": total,
            "compliant_emails": compliant,
            "non_compliant_emails": non_compliant,
            "total_violations": len(all_violations),
            "total_warnings": len(all_warnings),
            "violation_breakdown": {
                "critical": len([v for v in all_violations if v["severity"] == "critical"]),
                "high": len([v for v in all_violations if v["severity"] == "high"]),
                "medium": len([v for v in all_violations if v["severity"] == "medium"]),
                "low": len([v for v in all_violations if v["severity"] == "low"]),
            },
        }


def main():
    engine = EmailComplianceGuardian()

    # Sample emails to check
    sample_emails = [
        {
            "from": "hr@company.com",
            "to": ["manager@company.com", "legal@company.com"],
            "cc": ["external-counsel@lawfirm.com"],
            "subject": "Employee Health Records - Confidential",
            "body": "Hi, Please find the employee health assessment results. Patient: John Smith, DOB: 03/15/1985, SSN: 123-45-6789. Diagnosis: Type 2 Diabetes. Treatment plan includes Metformin 500mg twice daily. Medical record number: MRN#456789. Please transfer this data to our third-party benefits provider outside the EU.",
            "attachments": [],
        },
        {
            "from": "cfo@company.com",
            "to": ["board@company.com", "investors@company.com", "audit@company.com", "legal@company.com", "finance-team@company.com"],
            "cc": ["external-auditor@accounting.com", "partner@lawfirm.com"],
            "subject": "CONFIDENTIAL: Q3 Earnings - Non-Public Material Information",
            "body": "Board members, This is confidential non-public information. Q3 revenue exceeded projections by $2.4B, representing a material significant change from guidance. EPS forecast revised to $4.50. We are also discussing a substantial acquisition of TechCorp for $800M. This is inside information - blackout period applies until earnings release. Account number: 9876543210 for wire transfer.",
            "attachments": [],
        },
        {
            "from": "dev@company.com",
            "to": ["ops@company.com"],
            "cc": ["lead@company.com"],
            "subject": "Server credentials for deployment",
            "body": "Hey team, Here are the deployment credentials: password: SuperSecret123! API key: sk-prod-abcdef123456789ghijkl. The database connection string is mysql://admin:dbpass@192.168.1.50:3306/production. Please set up the SSH key for the new server.",
            "attachments": [],
        },
        {
            "from": "marketing@company.com",
            "to": ["team@company.com"],
            "cc": [],
            "subject": "Weekly marketing metrics update",
            "body": "Hi everyone, This week's campaign performance: 15,000 impressions, 3.2% CTR, 450 conversions. Social media engagement up 12%. Next week we'll launch the summer campaign. Have a great weekend!",
            "attachments": [],
        },
    ]

    results = []
    for email in sample_emails:
        result = engine.check_compliance(email, ["GDPR", "HIPAA", "SOX"])
        results.append(result)

    # Generate overall report
    overall_report = engine.generate_compliance_report()

    output = {
        "version": "V390",
        "engine": "Email Compliance Guardian",
        "timestamp": datetime.now().isoformat(),
        "reply_all_required": any(r["reply_all_required"] for r in results),
        "reply_all_enforced": all(r["reply_all_enforced"] for r in results if r["reply_all_required"]),
        "compliance_checks": results,
        "overall_report": overall_report,
    }

    print(json.dumps(output, indent=2, default=str))
    return output


if __name__ == "__main__":
    main()

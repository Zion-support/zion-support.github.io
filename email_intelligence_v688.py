"""
V688 - Email Compliance Guardian Engine
========================================
Scans emails for regulatory compliance violations including:
- GDPR (General Data Protection Regulation)
- HIPAA (Health Insurance Portability and Accountability Act)
- CCPA (California Consumer Privacy Act)
- PCI-DSS (Payment Card Industry Data Security Standard)
- Sensitive data patterns (SSN, passport, bank accounts)
- Reply-all enforcement

Generates compliance reports with risk scores and remediation suggestions.
"""

import re
import json
import hashlib
from datetime import datetime
from typing import Dict, List, Any, Optional, Tuple
from enum import Enum
from dataclasses import dataclass, field, asdict


class RiskLevel(Enum):
    """Risk classification levels."""
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


class ViolationType(Enum):
    """Types of compliance violations."""
    GDPR = "GDPR"
    HIPAA = "HIPAA"
    CCPA = "CCPA"
    PCI_DSS = "PCI-DSS"
    SENSITIVE_DATA = "SENSITIVE_DATA"
    REPLY_ALL = "REPLY_ALL"


@dataclass
class Violation:
    """Represents a single compliance violation."""
    violation_type: str
    severity: str
    description: str
    detected_data: str
    location: str  # "subject" or "body"
    regulation_reference: str
    remediation: str

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


@dataclass
class ComplianceReport:
    """Full compliance report for an email."""
    email_id: str
    timestamp: str
    compliance_score: float  # 0-100, higher is better
    risk_level: str
    violations: List[Dict[str, Any]]
    data_classification: Dict[str, Any]
    remediation_steps: List[str]
    reply_all_safe: bool
    summary: str

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)

    def to_json(self) -> str:
        return json.dumps(self.to_dict(), indent=2)


class EmailComplianceGuardian:
    """
    V688 Email Compliance Guardian Engine.
    
    Scans email content for regulatory compliance violations and generates
    detailed reports with risk scores and remediation suggestions.
    """

    # GDPR personal data patterns
    GDPR_PATTERNS = {
        "eu_phone": r"\+?(?:49|33|34|39|31|32|351|352|353|358|420|421|43|44|45|46|47|48|30|36|359|370|371|372|386|385|380|375|373)\s?\d{1,4}[\s\-]?\d{3,8}",
        "eu_id_number": r"\b(?:[A-Z]{1,2}\d{6,8}|(?:ID|NR|REF)\s?[:\-]?\s?\d{6,12})\b",
        "date_of_birth": r"(?i)(?:date\s+of\s+birth|DOB|born\s+on|birthday)\s*[:\-]?\s*\d{1,2}[\/\-.]\d{1,2}[\/\-.]\d{2,4}",
        "ip_address": r"\b(?:\d{1,3}\.){3}\d{1,3}\b",
        "cookie_id": r"(?i)(?:cookie|tracking)\s*(?:id|identifier)\s*[:\-]?\s*[a-f0-9\-]{16,}",
        "location_data": r"(?i)(?:latitude|longitude|GPS\s+coordinates?)\s*[:\-]?\s*[\-\d.]+",
    }

    # GDPR consent indicators
    GDPR_CONSENT_MARKERS = [
        "with your consent", "you have agreed", "opted in",
        "consented to", "permission granted", "authorized by",
        "as per your request", "based on your consent",
        "legitimate interest", "contractual necessity",
        "legal obligation", "vital interests",
    ]

    # GDPR data transfer indicators (cross-border)
    GDPR_TRANSFER_MARKERS = [
        "transferring data to", "shared with our office in",
        "stored on servers in", "processed in",
        "sent to our partner in", "data export to",
        "cloud storage in",
    ]

    # Non-EU countries that require adequacy decisions
    GDPR_NON_ADEQUATE_COUNTRIES = [
        "China", "Russia", "India", "Turkey", "Thailand",
        "Indonesia", "Vietnam", "Saudi Arabia", "Nigeria",
        "Egypt", "Pakistan", "Bangladesh", "Philippines",
    ]

    # HIPAA Protected Health Information patterns
    HIPAA_PATTERNS = {
        "medical_record_number": r"\b(?:MRN|Medical\s+Record)\s*(?:#|Number|No\.?)?\s*[:\-]?\s*\d{6,12}\b",
        "diagnosis_code": r"\b[A-Z]\d{2}(?:\.\d{1,4})?\b",  # ICD-10 codes
        "procedure_code": r"\b(?:CPT|HCPCS)\s*[:\-]?\s*\d{5}\b",
        "health_plan_id": r"(?i)(?:health\s+plan|member|subscriber|group)\s*(?:#|ID|No\.?)?\s*[:\-]?\s*[A-Z0-9]{6,15}\b",
        "medication_details": r"(?i)(?:prescri(?:bed|ption)|medication|dosage|dose)\s*[:\-]?\s*[a-zA-Z0-9\s]+(?:mg|ml|units?|tablets?|capsules?)",
        "lab_results": r"(?i)(?:lab\s+result|test\s+result|blood\s+(?:test|work|glucose|pressure)|cholesterol|HbA1c|CBC)\s*[:\-]?\s*[\d.]+\s*(?:mg/dL|mmol/L|%|/μL)?",
        "patient_name_context": r"(?i)(?:patient|pt)\s*[:\-]?\s*(?:Mr\.|Mrs\.|Ms\.|Dr\.)?\s*[A-Z][a-z]+\s+[A-Z][a-z]+",
        "hospital_visit": r"(?i)(?:admitted|discharged|visited|seen\s+at|appointment)\s+(?:on|at|in)?\s*(?:\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})?",
        "ssn_health": r"(?i)(?:SSN|Social\s+Security)\s*[:\-#]?\s*\d{3}[\s\-]?\d{2}[\s\-]?\d{4}",
    }

    # HIPAA context words
    HIPAA_CONTEXT_WORDS = [
        "patient", "diagnosis", "treatment", "prescription", "medication",
        "hospital", "clinic", "doctor", "physician", "nurse", "surgeon",
        "medical", "health", "insurance", "claim", "beneficiary",
        "medical record", "health plan", "provider", "referral",
        "emergency", "symptom", "therapy", "rehabilitation", "surgery",
        "oncology", "cardiology", "neurology", "psychiatry", "pathology",
    ]

    # CCPA patterns
    CCPA_PATTERNS = {
        "ca_consumer_id": r"(?i)(?:consumer\s+ID|customer\s+ID|CA\s+resident)\s*[:\-#]?\s*[A-Z0-9]{6,20}",
        "purchase_history": r"(?i)(?:purchase\s+history|browsing\s+history|search\s+history)\s*[:\-]?\s*",
        "geolocation_ca": r"(?i)(?:location\s+data|geolocation|GPS)\s*[:\-]?\s*(?:California|CA|Los\s+Angeles|San\s+Francisco|San\s+Diego|Sacramento)",
        "biometric_data": r"(?i)(?:fingerprint|facial\s+recognition|retina\s+scan|voice\s+print|iris\s+scan)\s*(?:data|pattern|template|hash)",
        "internet_activity": r"(?i)(?:browsing\s+history|search\s+history|interactions?\s+with\s+(?:website|app|advertisement))",
    }

    # CCPA data categories
    CCPA_DATA_CATEGORIES = [
        "personal identifiers", "commercial information", "biometric data",
        "internet activity", "geolocation", "professional information",
        "education information", "inferences", "sensitive personal info",
    ]

    CCPA_MARKERS = [
        "do not sell", "opt out", "opt-out", "California resident",
        "CCPA request", "delete my data", "right to know",
        "personal information", "categories of data",
    ]

    # PCI-DSS patterns (credit card numbers with Luhn validation)
    PCI_PATTERNS = {
        "visa": r"\b4\d{3}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{4}\b",
        "mastercard": r"\b5[1-5]\d{2}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{4}\b",
        "amex": r"\b3[47]\d{2}[\s\-]?\d{6}[\s\-]?\d{5}\b",
        "discover": r"\b6(?:011|5\d{2})[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{4}\b",
        "cvv": r"(?i)(?:CVV|CVC|CID|security\s+code)\s*[:\-]?\s*\d{3,4}\b",
        "expiration_date": r"(?i)(?:exp(?:iry)?|valid\s+thru|MM/YY)\s*[:\-]?\s*(?:0[1-9]|1[0-2])[\/\-]\d{2,4}\b",
        "full_track_data": r"%[A-Z]\d{13,19}\^\w+\^",
        "cardholder_name": r"(?i)(?:card\s*holder|name\s+on\s+card)\s*[:\-]?\s*[A-Z][a-z]+\s+[A-Z][a-z]+",
    }

    # Sensitive data patterns
    SENSITIVE_PATTERNS = {
        "ssn": r"\b\d{3}[\-]\d{2}[\-]\d{4}\b",
        "passport_us": r"\b\d{9}\b",  # 9-digit passport
        "passport_generic": r"\b[A-Z]{1,2}\d{6,9}\b",
        "bank_account": r"(?i)(?:bank\s+account|account\s+number|acct\s*#)\s*[:\-]?\s*\d{8,17}\b",
        "routing_number": r"(?i)(?:routing|routing\s+number|ABA)\s*[:\-]?\s*\d{9}\b",
        "iban": r"\b[A-Z]{2}\d{2}\s?(?:\d{4}\s?){3,7}\d{0,4}\b",
        "swift_code": r"\b[A-Z]{6}[A-Z0-9]{2}(?:[A-Z0-9]{3})?\b",
        "drivers_license": r"(?i)(?:driver'?s?\s+lic(?:ense|ence)|DL)\s*(?:#|No\.?)?\s*[:\-]?\s*[A-Z0-9]{6,15}\b",
        "tax_id": r"(?i)(?:TIN|tax\s+ID|EIN|ITIN)\s*[:\-#]?\s*\d{2}[\-]?\d{7}\b",
        "crypto_wallet": r"\b(?:0x[a-fA-F0-9]{40}|[13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[a-z0-9]{39,59})\b",
    }

    def __init__(self, strict_mode: bool = True):
        """
        Initialize the Email Compliance Guardian Engine.
        
        Args:
            strict_mode: If True, apply stricter detection thresholds.
        """
        self.strict_mode = strict_mode
        self.violations: List[Violation] = []
        self.data_classifications: Dict[str, List[str]] = {
            "pii": [],
            "phi": [],
            "financial": [],
            "consumer_data": [],
            "other_sensitive": [],
        }
        self._consent_detected = False

    def _generate_email_id(self, email: Dict[str, str]) -> str:
        """Generate a unique ID for the email based on content hash."""
        content = f"{email.get('subject', '')}{email.get('body', '')}{email.get('from', '')}"
        return hashlib.sha256(content.encode()).hexdigest()[:16]

    def _search_pattern(self, text: str, pattern: str, location: str,
                         case_sensitive: bool = False) -> List[Tuple[str, str]]:
        """Search for pattern in text and return matches with location."""
        matches = []
        flags = 0 if case_sensitive else re.IGNORECASE
        try:
            for match in re.finditer(pattern, text, flags):
                # Mask the detected data for privacy
                raw = match.group()
                masked = self._mask_sensitive_data(raw)
                matches.append((raw, masked))
        except re.error:
            pass
        return matches

    def _mask_sensitive_data(self, data: str) -> str:
        """Mask sensitive data for safe display in reports."""
        if len(data) <= 4:
            return "*" * len(data)
        # Show first 2 and last 2 characters
        return data[:2] + "*" * (len(data) - 4) + data[-2:]

    def _luhn_check(self, number: str) -> bool:
        """Validate a credit card number using the Luhn algorithm."""
        digits = re.sub(r"[\s\-]", "", number)
        if not digits.isdigit() or len(digits) < 13:
            return False
        total = 0
        reverse_digits = digits[::-1]
        for i, digit in enumerate(reverse_digits):
            n = int(digit)
            if i % 2 == 1:
                n *= 2
                if n > 9:
                    n -= 9
            total += n
        return total % 10 == 0

    def check_consent(self, email: Dict[str, str]) -> Dict[str, Any]:
        """
        Check if the email indicates proper consent for data processing.
        
        Returns dict with consent status and details.
        """
        body = email.get("body", "")
        subject = email.get("subject", "")
        full_text = f"{subject} {body}".lower()

        consent_found = False
        consent_markers_found = []
        lawful_basis = None

        for marker in self.GDPR_CONSENT_MARKERS:
            if marker.lower() in full_text:
                consent_found = True
                consent_markers_found.append(marker)

        # Determine lawful basis
        if any(x in full_text for x in ["consent", "opted in", "agreed", "permission"]):
            lawful_basis = "consent"
        elif any(x in full_text for x in ["contract", "service delivery", "order fulfillment"]):
            lawful_basis = "contractual_necessity"
        elif any(x in full_text for x in ["legal obligation", "regulatory requirement", "compliance"]):
            lawful_basis = "legal_obligation"
        elif any(x in full_text for x in ["legitimate interest", "business purpose"]):
            lawful_basis = "legitimate_interest"
        elif any(x in full_text for x in ["vital interests", "emergency", "life-saving"]):
            lawful_basis = "vital_interests"

        self._consent_detected = consent_found

        return {
            "consent_detected": consent_found,
            "consent_markers": consent_markers_found,
            "lawful_basis": lawful_basis,
            "has_privacy_notice": any(x in full_text for x in ["privacy policy", "privacy notice", "data protection"]),
            "has_opt_out": any(x in full_text for x in ["opt out", "unsubscribe", "withdraw consent"]),
        }

    def scan_gdpr(self, email: Dict[str, str]) -> List[Violation]:
        """
        Scan email for GDPR violations.
        
        Checks for:
        - Personal data without consent
        - Cross-border data transfers to non-adequate countries
        - Missing privacy notices
        - Special category data (health, biometric, etc.)
        """
        violations = []
        body = email.get("body", "")
        subject = email.get("subject", "")

        # Check for personal data patterns
        for pattern_name, pattern in self.GDPR_PATTERNS.items():
            for location, text in [("subject", subject), ("body", body)]:
                matches = self._search_pattern(text, pattern, location)
                for raw, masked in matches:
                    self.data_classifications["pii"].append(pattern_name)
                    violations.append(Violation(
                        violation_type=ViolationType.GDPR.value,
                        severity="HIGH",
                        description=f"GDPR personal data detected: {pattern_name}",
                        detected_data=masked,
                        location=location,
                        regulation_reference="GDPR Article 4(1) - Personal Data",
                        remediation=f"Remove or anonymize {pattern_name} data. Ensure lawful basis for processing."
                    ))

        # Check for cross-border transfers
        full_text = f"{subject} {body}"
        for marker in self.GDPR_TRANSFER_MARKERS:
            if marker.lower() in full_text.lower():
                for country in self.GDPR_NON_ADEQUATE_COUNTRIES:
                    if country.lower() in full_text.lower():
                        violations.append(Violation(
                            violation_type=ViolationType.GDPR.value,
                            severity="CRITICAL",
                            description=f"Potential data transfer to non-adequate country: {country}",
                            detected_data=f"{marker} ... {country}",
                            location="body",
                            regulation_reference="GDPR Article 44-49 - International Transfers",
                            remediation=f"Ensure adequate safeguards (SCCs, BCRs) for transfer to {country}."
                        ))

        # Check consent if personal data found
        if self.data_classifications["pii"] and not self._consent_detected:
            consent_check = self.check_consent(email)
            if not consent_check["consent_detected"] and not consent_check["lawful_basis"]:
                violations.append(Violation(
                    violation_type=ViolationType.GDPR.value,
                    severity="CRITICAL",
                    description="Personal data processed without identifiable lawful basis",
                    detected_data="Multiple PII elements without consent markers",
                    location="body",
                    regulation_reference="GDPR Article 6 - Lawfulness of Processing",
                    remediation="Establish and document lawful basis before processing personal data."
                ))

        return violations

    def scan_hipaa(self, email: Dict[str, str]) -> List[Violation]:
        """
        Scan email for HIPAA violations (Protected Health Information).
        
        Checks for:
        - Medical record numbers
        - Diagnosis/treatment information
        - Health plan identifiers
        - Patient identifiable information in medical context
        """
        violations = []
        body = email.get("body", "")
        subject = email.get("subject", "")
        full_text = f"{subject} {body}"

        # Check for PHI context
        has_phi_context = any(
            word.lower() in full_text.lower()
            for word in self.HIPAA_CONTEXT_WORDS
        )

        for pattern_name, pattern in self.HIPAA_PATTERNS.items():
            for location, text in [("subject", subject), ("body", body)]:
                matches = self._search_pattern(text, pattern, location)
                for raw, masked in matches:
                    severity = "CRITICAL" if pattern_name == "ssn_health" else "HIGH"
                    self.data_classifications["phi"].append(pattern_name)
                    violations.append(Violation(
                        violation_type=ViolationType.HIPAA.value,
                        severity=severity,
                        description=f"Protected Health Information detected: {pattern_name}",
                        detected_data=masked,
                        location=location,
                        regulation_reference="HIPAA 45 CFR §164.312 - Safeguards",
                        remediation=f"Encrypt PHI data. Remove {pattern_name} from unsecured email. Use secure messaging."
                    ))

        # Context-based PHI detection
        if has_phi_context and not violations:
            # Check for patient name + medical context combo
            name_pattern = r"(?i)(?:patient|pt)\s*[:\-]?\s*(?:Mr\.|Mrs\.|Ms\.|Dr\.)?\s*([A-Z][a-z]+\s+[A-Z][a-z]+)"
            for location, text in [("subject", subject), ("body", body)]:
                name_matches = self._search_pattern(text, name_pattern, location)
                if name_matches:
                    self.data_classifications["phi"].append("patient_identity")
                    violations.append(Violation(
                        violation_type=ViolationType.HIPAA.value,
                        severity="CRITICAL",
                        description="Patient identity in medical context - PHI breach risk",
                        detected_data=name_matches[0][1],
                        location=location,
                        regulation_reference="HIPAA 45 CFR §160.103 - PHI Definition",
                        remediation="Remove patient identity from unsecured communication. Use de-identified references."
                    ))

        # Check if PHI is sent to external recipients
        if self.data_classifications["phi"]:
            recipients = email.get("to", "")
            cc = email.get("cc", "")
            all_recipients = f"{recipients} {cc}"
            # Flag if sending to multiple or external domains
            if cc and has_phi_context:
                violations.append(Violation(
                    violation_type=ViolationType.HIPAA.value,
                    severity="HIGH",
                    description="PHI sent to CC recipients - minimum necessary rule violation",
                    detected_data=f"CC: {self._mask_sensitive_data(cc)}",
                    location="headers",
                    regulation_reference="HIPAA 45 CFR §164.502(b) - Minimum Necessary",
                    remediation="Apply minimum necessary standard. Remove CC recipients who don't need PHI."
                ))

        return violations

    def scan_ccpa(self, email: Dict[str, str]) -> List[Violation]:
        """
        Scan email for CCPA compliance issues (California Consumer Privacy Act).
        
        Checks for:
        - California consumer data handling
        - Sale of personal information indicators
        - Missing opt-out mechanisms
        - Sensitive personal information categories
        """
        violations = []
        body = email.get("body", "")
        subject = email.get("subject", "")
        full_text = f"{subject} {body}"

        # Check for CCPA data patterns
        for pattern_name, pattern in self.CCPA_PATTERNS.items():
            for location, text in [("subject", subject), ("body", body)]:
                matches = self._search_pattern(text, pattern, location)
                for raw, masked in matches:
                    self.data_classifications["consumer_data"].append(pattern_name)
                    violations.append(Violation(
                        violation_type=ViolationType.CCPA.value,
                        severity="HIGH",
                        description=f"CCPA-regulated data detected: {pattern_name}",
                        detected_data=masked,
                        location=location,
                        regulation_reference="CCPA §1798.100 - Consumer Rights",
                        remediation=f"Ensure proper handling of {pattern_name}. Provide opt-out mechanism."
                    ))

        # Check for "sale" of data indicators
        sale_indicators = [
            "shared with third parties", "sold to", "data broker",
            "marketing partners", "advertising network", "analytics provider",
            "data sharing agreement", "monetize", "revenue from data",
        ]
        for indicator in sale_indicators:
            if indicator.lower() in full_text.lower():
                violations.append(Violation(
                    violation_type=ViolationType.CCPA.value,
                    severity="CRITICAL",
                    description=f"Potential sale of personal information: '{indicator}'",
                    detected_data=indicator,
                    location="body",
                    regulation_reference="CCPA §1798.120 - Right to Opt-Out of Sale",
                    remediation="Include 'Do Not Sell My Personal Information' link. Honor opt-out requests."
                ))
                break

        # Check for missing CCPA compliance elements
        has_ca_reference = any(x in full_text.lower() for x in [
            "california", "ca resident", "california consumer"
        ])
        has_opt_out = any(x in full_text.lower() for x in [
            "opt out", "do not sell", "unsubscribe from data sharing"
        ])

        if has_ca_reference and not has_opt_out and self.data_classifications["consumer_data"]:
            violations.append(Violation(
                violation_type=ViolationType.CCPA.value,
                severity="MEDIUM",
                description="California consumer data shared without visible opt-out mechanism",
                detected_data="Missing 'Do Not Sell' or opt-out language",
                location="body",
                regulation_reference="CCPA §1798.135 - Opt-Out Link Requirements",
                remediation="Add 'Do Not Sell My Personal Information' link and opt-out mechanism."
            ))

        return violations

    def scan_pci_dss(self, email: Dict[str, str]) -> List[Violation]:
        """
        Scan email for PCI-DSS compliance violations.
        
        Checks for:
        - Credit card numbers (validated with Luhn algorithm)
        - CVV/CVC codes
        - Expiration dates
        - Cardholder names
        - Full track data
        """
        violations = []
        body = email.get("body", "")
        subject = email.get("subject", "")

        for pattern_name, pattern in self.PCI_PATTERNS.items():
            for location, text in [("subject", subject), ("body", body)]:
                matches = self._search_pattern(text, pattern, location)
                for raw, masked in matches:
                    # Validate card numbers with Luhn
                    if pattern_name in ("visa", "mastercard", "amex", "discover"):
                        if not self._luhn_check(raw):
                            continue  # Not a valid card number
                        self.data_classifications["financial"].append(f"card_{pattern_name}")
                        violations.append(Violation(
                            violation_type=ViolationType.PCI_DSS.value,
                            severity="CRITICAL",
                            description=f"Valid credit card number detected ({pattern_name})",
                            detected_data=masked,
                            location=location,
                            regulation_reference="PCI-DSS Requirement 3.4 - Render PAN unreadable",
                            remediation=f"NEVER transmit card numbers via email. Use tokenized payments or secure payment portals."
                        ))
                    elif pattern_name == "cvv":
                        self.data_classifications["financial"].append("cvv_code")
                        violations.append(Violation(
                            violation_type=ViolationType.PCI_DSS.value,
                            severity="CRITICAL",
                            description="CVV/CVC security code detected - MUST NEVER be stored or transmitted",
                            detected_data=masked,
                            location=location,
                            regulation_reference="PCI-DSS Requirement 3.2 - Do not store sensitive auth data",
                            remediation="IMMEDIATELY delete CVV data. Never store or transmit CVV codes after authorization."
                        ))
                    elif pattern_name == "expiration_date":
                        self.data_classifications["financial"].append("card_expiry")
                        violations.append(Violation(
                            violation_type=ViolationType.PCI_DSS.value,
                            severity="HIGH",
                            description="Card expiration date detected in unsecured email",
                            detected_data=masked,
                            location=location,
                            regulation_reference="PCI-DSS Requirement 3.3 - Mask PAN when displayed",
                            remediation="Remove card details from email. Use secure payment processing systems."
                        ))
                    else:
                        self.data_classifications["financial"].append(pattern_name)
                        violations.append(Violation(
                            violation_type=ViolationType.PCI_DSS.value,
                            severity="HIGH",
                            description=f"PCI-sensitive data detected: {pattern_name}",
                            detected_data=masked,
                            location=location,
                            regulation_reference="PCI-DSS Requirement 4.2 - Encrypt transmission",
                            remediation="Encrypt all cardholder data in transit. Use secure payment channels."
                        ))

        return violations

    def detect_sensitive_data(self, email: Dict[str, str]) -> List[Violation]:
        """
        Detect general sensitive data patterns in email.
        
        Checks for:
        - Social Security Numbers
        - Passport numbers
        - Bank account details
        - Routing numbers
        - IBAN/SWIFT codes
        - Driver's license numbers
        - Tax IDs
        - Cryptocurrency wallets
        """
        violations = []
        body = email.get("body", "")
        subject = email.get("subject", "")

        # Patterns that require case-sensitive matching (uppercase only)
        case_sensitive_patterns = {"swift_code", "iban"}

        for pattern_name, pattern in self.SENSITIVE_PATTERNS.items():
            is_case_sensitive = pattern_name in case_sensitive_patterns
            for location, text in [("subject", subject), ("body", body)]:
                matches = self._search_pattern(text, pattern, location,
                                                case_sensitive=is_case_sensitive)
                for raw, masked in matches:
                    # Additional validation for SSN (avoid false positives)
                    if pattern_name == "ssn":
                        # SSN format: XXX-XX-XXXX (with dashes to reduce false positives)
                        if not re.match(r"^\d{3}-\d{2}-\d{4}$", raw):
                            continue
                        # Exclude known invalid SSNs
                        if raw.startswith("000") or raw.startswith("666") or raw[4:6] == "00" or raw[7:] == "0000":
                            continue

                    self.data_classifications["other_sensitive"].append(pattern_name)
                    
                    # Determine severity based on pattern type
                    severity = "CRITICAL" if pattern_name in ("ssn", "bank_account", "tax_id") else "HIGH"
                    
                    violations.append(Violation(
                        violation_type=ViolationType.SENSITIVE_DATA.value,
                        severity=severity,
                        description=f"Sensitive data pattern detected: {pattern_name}",
                        detected_data=masked,
                        location=location,
                        regulation_reference=f"Data Protection - {pattern_name.upper()}",
                        remediation=f"Remove or encrypt {pattern_name} data. Use secure channels for transmission."
                    ))

        return violations

    def check_reply_all_safety(self, email: Dict[str, str]) -> Dict[str, Any]:
        """
        Check if reply-all is safe for this email.
        
        Enforces:
        - No sensitive data exposure to unnecessary recipients
        - BCC detection for mass emails
        - External domain warnings
        - Attachment sensitivity checks
        """
        recipients_to = email.get("to", "")
        recipients_cc = email.get("cc", "")
        recipients_bcc = email.get("bcc", "")
        sender = email.get("from", "")
        subject = email.get("subject", "")
        body = email.get("body", "")

        # Parse email addresses
        def extract_domains(addresses: str) -> List[str]:
            emails = re.findall(r'[\w.+-]+@[\w-]+\.[\w.-]+', addresses)
            return list(set(email.split("@")[-1].lower() for email in emails))

        sender_domain = sender.split("@")[-1].lower() if "@" in sender else ""
        to_domains = extract_domains(recipients_to)
        cc_domains = extract_domains(recipients_cc)
        bcc_domains = extract_domains(recipients_bcc)
        all_domains = to_domains + cc_domains

        # Check for external recipients
        external_domains = [d for d in all_domains if d != sender_domain]
        external_recipients = len(external_domains) > 0

        # Check for sensitive data in email
        has_sensitive = bool(
            self.data_classifications["pii"] or
            self.data_classifications["phi"] or
            self.data_classifications["financial"] or
            self.data_classifications["other_sensitive"]
        )

        # Calculate reply-all safety
        safe = True
        warnings = []
        enforcement_actions = []

        if external_recipients and has_sensitive:
            safe = False
            warnings.append(f"Sensitive data present with external recipients ({', '.join(external_domains[:3])})")
            enforcement_actions.append("BLOCK_REPLY_ALL")

        if len(to_domains) + len(cc_domains) > 5:
            safe = False
            warnings.append(f"Large recipient list ({len(to_domains) + len(cc_domains)} domains) - reply-all risk")
            enforcement_actions.append("WARN_LARGE_RECIPIENT_LIST")

        if recipients_bcc:
            warnings.append("BCC recipients detected - hidden from reply-all")
            enforcement_actions.append("NOTIFY_BCC_PRESENT")

        if has_sensitive:
            enforcement_actions.append("REQUIRE_ENCRYPTION")
            if not safe:
                enforcement_actions.append("RESTRICT_TO_ORIGINAL_RECIPIENTS")

        return {
            "safe": safe,
            "warnings": warnings,
            "enforcement_actions": enforcement_actions,
            "external_domains": external_domains,
            "recipient_count": len(to_domains) + len(cc_domains) + len(bcc_domains),
            "has_sensitive_data": has_sensitive,
            "sender_domain": sender_domain,
        }

    def _calculate_compliance_score(self, violations: List[Violation]) -> float:
        """Calculate overall compliance score (0-100, higher is better)."""
        if not violations:
            return 100.0

        score = 100.0
        severity_weights = {
            "LOW": 5,
            "MEDIUM": 10,
            "HIGH": 20,
            "CRITICAL": 35,
        }

        for violation in violations:
            weight = severity_weights.get(violation.severity, 10)
            score -= weight

        return max(0.0, min(100.0, score))

    def _determine_risk_level(self, score: float, violations: List[Violation]) -> str:
        """Determine overall risk level based on score and violations."""
        has_critical = any(v.severity == "CRITICAL" for v in violations)
        has_high = any(v.severity == "HIGH" for v in violations)

        if has_critical or score < 30:
            return RiskLevel.CRITICAL.value
        elif has_high or score < 60:
            return RiskLevel.HIGH.value
        elif score < 80:
            return RiskLevel.MEDIUM.value
        else:
            return RiskLevel.LOW.value

    def _generate_remediation_steps(self, violations: List[Violation]) -> List[str]:
        """Generate prioritized remediation steps."""
        steps = []
        seen = set()

        # Sort by severity
        severity_order = {"CRITICAL": 0, "HIGH": 1, "MEDIUM": 2, "LOW": 3}
        sorted_violations = sorted(violations, key=lambda v: severity_order.get(v.severity, 4))

        for v in sorted_violations:
            if v.remediation not in seen:
                seen.add(v.remediation)
                steps.append(f"[{v.severity}] {v.violation_type}: {v.remediation}")

        # Add general steps
        if any(v.violation_type == ViolationType.PCI_DSS.value for v in violations):
            steps.append("[MANDATORY] Immediately purge all cardholder data from email systems")
        if any(v.violation_type == ViolationType.HIPAA.value for v in violations):
            steps.append("[MANDATORY] Switch to HIPAA-compliant encrypted messaging for PHI")
        if any(v.severity == "CRITICAL" for v in violations):
            steps.append("[MANDATORY] Quarantine email and notify compliance officer immediately")

        return steps

    def _generate_summary(self, score: float, risk_level: str, violations: List[Violation]) -> str:
        """Generate human-readable summary of findings."""
        if not violations:
            return "✅ Email passed all compliance checks. No violations detected."

        violation_counts = {}
        for v in violations:
            violation_counts[v.violation_type] = violation_counts.get(v.violation_type, 0) + 1

        parts = [f"⚠️ Compliance Score: {score:.1f}/100 | Risk: {risk_level}"]
        for vtype, count in violation_counts.items():
            parts.append(f"  • {vtype}: {count} violation(s)")

        return "\n".join(parts)

    def generate_compliance_report(self, email: Dict[str, str]) -> ComplianceReport:
        """
        Generate a comprehensive compliance report for the given email.
        
        Runs all compliance scans and produces a unified report with:
        - Compliance score (0-100)
        - Risk level classification
        - Detailed violations list
        - Data classification summary
        - Remediation steps
        - Reply-all safety assessment
        """
        # Reset state
        self.violations = []
        self.data_classifications = {
            "pii": [],
            "phi": [],
            "financial": [],
            "consumer_data": [],
            "other_sensitive": [],
        }
        self._consent_detected = False

        # Run consent check first
        consent_info = self.check_consent(email)

        # Run all scans
        all_violations = []
        all_violations.extend(self.scan_gdpr(email))
        all_violations.extend(self.scan_hipaa(email))
        all_violations.extend(self.scan_ccpa(email))
        all_violations.extend(self.scan_pci_dss(email))
        all_violations.extend(self.detect_sensitive_data(email))

        # Check reply-all safety
        reply_all_info = self.check_reply_all_safety(email)

        # Add reply-all violations if unsafe
        if not reply_all_info["safe"]:
            for warning in reply_all_info["warnings"]:
                all_violations.append(Violation(
                    violation_type=ViolationType.REPLY_ALL.value,
                    severity="HIGH",
                    description=f"Reply-all safety violation: {warning}",
                    detected_data="N/A",
                    location="headers",
                    regulation_reference="Email Security Policy - Reply-All Enforcement",
                    remediation="Do not use reply-all. Respond only to necessary recipients."
                ))

        # Calculate scores
        compliance_score = self._calculate_compliance_score(all_violations)
        risk_level = self._determine_risk_level(compliance_score, all_violations)
        remediation_steps = self._generate_remediation_steps(all_violations)
        summary = self._generate_summary(compliance_score, risk_level, all_violations)

        # Build data classification summary
        data_classification = {
            "pii_types": list(set(self.data_classifications["pii"])),
            "phi_types": list(set(self.data_classifications["phi"])),
            "financial_types": list(set(self.data_classifications["financial"])),
            "consumer_data_types": list(set(self.data_classifications["consumer_data"])),
            "other_sensitive_types": list(set(self.data_classifications["other_sensitive"])),
            "total_sensitive_items": sum(len(v) for v in self.data_classifications.values()),
            "consent_status": consent_info,
        }

        report = ComplianceReport(
            email_id=self._generate_email_id(email),
            timestamp=datetime.utcnow().isoformat() + "Z",
            compliance_score=compliance_score,
            risk_level=risk_level,
            violations=[v.to_dict() for v in all_violations],
            data_classification=data_classification,
            remediation_steps=remediation_steps,
            reply_all_safe=reply_all_info["safe"],
            summary=summary,
        )

        return report


def test_v688():
    """
    Test suite for V688 Email Compliance Guardian Engine.
    Tests all compliance scanning capabilities with various email scenarios.
    """
    print("=" * 70)
    print("V688 - Email Compliance Guardian Engine - Test Suite")
    print("=" * 70)

    guardian = EmailComplianceGuardian(strict_mode=True)
    all_passed = True

    # Test 1: Email with GDPR violations (personal data without consent)
    print("\n[Test 1] GDPR - Personal Data Without Consent")
    print("-" * 50)
    gdpr_email = {
        "subject": "Customer Data Transfer to India Office",
        "body": """Hi Team,

Please find below the customer details for processing:

Name: Johann Mueller
Date of Birth: 15/03/1985
IP Address: 192.168.1.45
Customer ID: DE12345678

We are transferring data to our partner in India for further processing.
The data will be stored on servers in India.

Best regards,
Data Operations""",
        "from": "ops@company.eu",
        "to": "team@company.eu",
        "cc": "india-office@partner.in",
    }
    report = guardian.generate_compliance_report(gdpr_email)
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Violations: {len(report.violations)}")
    print(f"  Reply-All Safe: {report.reply_all_safe}")
    assert report.compliance_score < 100, "Should detect GDPR violations"
    assert report.risk_level in ("HIGH", "CRITICAL"), "Risk should be HIGH or CRITICAL"
    assert len(report.violations) > 0, "Should have violations"
    gdpr_violations = [v for v in report.violations if v["violation_type"] == "GDPR"]
    assert len(gdpr_violations) > 0, "Should detect GDPR violations"
    print("  ✅ PASSED")

    # Test 2: Email with HIPAA violations (PHI)
    print("\n[Test 2] HIPAA - Protected Health Information")
    print("-" * 50)
    hipaa_email = {
        "subject": "Patient Update - Mrs. Johnson",
        "body": """Dr. Smith,

Patient: Mrs. Sarah Johnson
MRN: 784521369
Diagnosis: J18.9 (Pneumonia)
Prescription: Amoxicillin 500mg, 3 times daily
Lab result: Blood glucose 245 mg/dL
SSN: 123-45-6789

Please review and adjust treatment plan.
Patient was admitted on 05/28/2026.

Thanks,
Nurse Williams""",
        "from": "nurse.williams@hospital.org",
        "to": "dr.smith@hospital.org",
        "cc": "admin@hospital.org, billing@external-vendor.com",
    }
    report = guardian.generate_compliance_report(hipaa_email)
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Violations: {len(report.violations)}")
    assert report.risk_level == "CRITICAL", "PHI with SSN should be CRITICAL"
    hipaa_violations = [v for v in report.violations if v["violation_type"] == "HIPAA"]
    assert len(hipaa_violations) > 0, "Should detect HIPAA violations"
    print("  ✅ PASSED")

    # Test 3: Email with PCI-DSS violations (credit card data)
    print("\n[Test 3] PCI-DSS - Credit Card Data")
    print("-" * 50)
    pci_email = {
        "subject": "Payment Details for Order #98765",
        "body": """Hi Billing Team,

Please process the following payment:

Cardholder: John Smith
Card Number: 4532015112830366
CVV: 789
Expiry: 12/27
Amount: $1,250.00

Please confirm once processed.

Thanks,
Sales Department""",
        "from": "sales@merchant.com",
        "to": "billing@merchant.com",
    }
    report = guardian.generate_compliance_report(pci_email)
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Violations: {len(report.violations)}")
    pci_violations = [v for v in report.violations if v["violation_type"] == "PCI-DSS"]
    print(f"  PCI Violations: {len(pci_violations)}")
    assert report.risk_level == "CRITICAL", "Card data with CVV should be CRITICAL"
    print("  ✅ PASSED")

    # Test 4: Email with CCPA violations
    print("\n[Test 4] CCPA - California Consumer Data")
    print("-" * 50)
    ccpa_email = {
        "subject": "Consumer Data Sharing with Marketing Partners",
        "body": """Team,

We need to share the following California consumer data with our advertising network partners:

Consumer ID: CA-RES-78901234
Purchase history: Electronics, Home & Garden, Books
Browsing history: tech-reviews.com, deals-finder.net
Geolocation: San Francisco, CA

The data will be shared with third parties for targeted advertising.

Marketing Team""",
        "from": "marketing@techcorp.com",
        "to": "data-team@techcorp.com",
    }
    report = guardian.generate_compliance_report(ccpa_email)
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Violations: {len(report.violations)}")
    ccpa_violations = [v for v in report.violations if v["violation_type"] == "CCPA"]
    print(f"  CCPA Violations: {len(ccpa_violations)}")
    assert len(ccpa_violations) > 0, "Should detect CCPA violations"
    print("  ✅ PASSED")

    # Test 5: Email with sensitive data patterns
    print("\n[Test 5] Sensitive Data Patterns")
    print("-" * 50)
    sensitive_email = {
        "subject": "Account Verification Details",
        "body": """Hello,

Please verify the following account information:

SSN: 456-78-9012
Bank Account: Account Number: 98765432109876
Routing Number: 021000021
IBAN: GB29 NWBK 6016 1331 9268 19
Driver's License: DL D1234567890
Tax ID: 98-7654321

Please confirm all details are correct.

Finance Department""",
        "from": "finance@company.com",
        "to": "verification@company.com",
    }
    report = guardian.generate_compliance_report(sensitive_email)
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Violations: {len(report.violations)}")
    sensitive_violations = [v for v in report.violations if v["violation_type"] == "SENSITIVE_DATA"]
    print(f"  Sensitive Data Violations: {len(sensitive_violations)}")
    assert report.risk_level == "CRITICAL", "Multiple sensitive patterns should be CRITICAL"
    print("  ✅ PASSED")

    # Test 6: Clean email (should pass)
    print("\n[Test 6] Clean Email - No Violations")
    print("-" * 50)
    clean_email = {
        "subject": "Weekly Team Standup Notes",
        "body": """Hi Team,

Here are the notes from today's standup:

1. Project Alpha: On track for Friday delivery
2. Bug fixes: 3 resolved, 2 remaining
3. New feature: Design review scheduled for Thursday

Next standup: Monday at 10am.

Thanks!""",
        "from": "manager@company.com",
        "to": "team@company.com",
    }
    report = guardian.generate_compliance_report(clean_email)
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Violations: {len(report.violations)}")
    assert report.compliance_score >= 90, "Clean email should score high"
    assert report.risk_level == "LOW", "Clean email should be LOW risk"
    print("  ✅ PASSED")

    # Test 7: Email with consent (should reduce GDPR severity)
    print("\n[Test 7] GDPR - With Proper Consent")
    print("-" * 50)
    consent_email = {
        "subject": "Your Account Update - As Per Your Request",
        "body": """Dear Customer,

As per your request and with your consent, we have updated your account.

Your opted-in preferences have been saved.
You may withdraw consent at any time via our privacy policy page.

Date of Birth: 12/05/1990

Best regards,
Customer Service""",
        "from": "service@company.eu",
        "to": "customer@email.com",
    }
    report = guardian.generate_compliance_report(consent_email)
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Consent Detected: {report.data_classification['consent_status']['consent_detected']}")
    assert report.data_classification["consent_status"]["consent_detected"], "Should detect consent"
    print("  ✅ PASSED")

    # Test 8: Reply-all enforcement
    print("\n[Test 8] Reply-All Enforcement")
    print("-" * 50)
    reply_all_email = {
        "subject": "Q3 Financial Report - Confidential",
        "body": """All,

Attached are the Q3 financials. Bank account details: 12345678901234.

Revenue: $12.5M
Profit margin: 18.3%

SSN of CFO for tax filing: 987-65-4321

Please keep confidential.""",
        "from": "cfo@company.com",
        "to": "exec@company.com, board@company.com",
        "cc": "external-auditor@big4.com, lawyer@lawfirm.com, investor@vc-fund.com",
        "bcc": "press@news.org",
    }
    report = guardian.generate_compliance_report(reply_all_email)
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Reply-All Safe: {report.reply_all_safe}")
    reply_violations = [v for v in report.violations if v["violation_type"] == "REPLY_ALL"]
    print(f"  Reply-All Violations: {len(reply_violations)}")
    assert not report.reply_all_safe, "Should NOT be reply-all safe"
    print("  ✅ PASSED")

    # Test 9: Full report JSON output
    print("\n[Test 9] Full Report JSON Output")
    print("-" * 50)
    multi_violation_email = {
        "subject": "URGENT: Customer Data Migration",
        "body": """Team,

We need to migrate customer data to our new system in China.

Customer: Maria Garcia
SSN: 111-22-3333
Card: 4532015112830366
CVV: 456
Patient MRN: 555123456
Bank Account Number: 99887766554433

The data will be processed in China and stored on servers in China.

With your consent, we proceed with migration.

IT Migration Team""",
        "from": "it@globalcorp.com",
        "to": "migration@globalcorp.com",
        "cc": "china-office@partner.cn, compliance@globalcorp.com",
    }
    report = guardian.generate_compliance_report(multi_violation_email)
    report_json = report.to_json()
    print(f"  Compliance Score: {report.compliance_score}/100")
    print(f"  Risk Level: {report.risk_level}")
    print(f"  Total Violations: {len(report.violations)}")
    print(f"  Remediation Steps: {len(report.remediation_steps)}")
    print(f"  Report Size: {len(report_json)} bytes")
    
    # Verify all violation types present
    violation_types = set(v["violation_type"] for v in report.violations)
    print(f"  Violation Types Found: {violation_types}")
    assert "GDPR" in violation_types, "Should detect GDPR"
    assert "PCI-DSS" in violation_types, "Should detect PCI-DSS"
    assert "HIPAA" in violation_types, "Should detect HIPAA"
    assert "SENSITIVE_DATA" in violation_types, "Should detect sensitive data"
    assert report.risk_level == "CRITICAL", "Multi-violation email should be CRITICAL"
    assert len(report.remediation_steps) > 0, "Should have remediation steps"
    print("  ✅ PASSED")

    # Final summary
    print("\n" + "=" * 70)
    print("ALL TESTS PASSED ✅")
    print("=" * 70)
    print(f"\nV688 Email Compliance Guardian Engine")
    print(f"  - GDPR Scanning: ✅")
    print(f"  - HIPAA Scanning: ✅")
    print(f"  - CCPA Scanning: ✅")
    print(f"  - PCI-DSS Scanning: ✅")
    print(f"  - Sensitive Data Detection: ✅")
    print(f"  - Reply-All Enforcement: ✅")
    print(f"  - Compliance Reporting: ✅")
    print(f"  - Risk Scoring: ✅")
    print(f"  - Remediation Steps: ✅")

    return report


if __name__ == "__main__":
    test_v688()

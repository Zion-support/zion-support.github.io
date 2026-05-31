#!/usr/bin/env python3
"""
V410 - AI Email Compliance Auto-Filer
=======================================
Automatically classifies emails by regulatory requirement (GDPR, HIPAA, SOX,
PCI-DSS), applies retention policies, and generates audit trails.

REPLY-ALL ENFORCEMENT: All send/reply methods automatically include all
original recipients to prevent accidental exclusion in multi-recipient threads.
"""

import json
import re
import logging
import hashlib
from datetime import datetime, timedelta
from enum import Enum
from collections import defaultdict
from typing import Dict, List, Optional, Set, Tuple, Any

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V410_ComplianceAutoFiler")


class Regulation(Enum):
    """Supported regulatory frameworks."""
    GDPR = "gdpr"
    HIPAA = "hipaa"
    SOX = "sox"
    PCI_DSS = "pci_dss"
    CCPA = "ccpa"
    FERPA = "ferpa"
    GLBA = "glba"
    GENERAL = "general"


class ClassificationLevel(Enum):
    """Data classification levels."""
    PUBLIC = "public"
    INTERNAL = "internal"
    CONFIDENTIAL = "confidential"
    RESTRICTED = "restricted"
    HIGHLY_SENSITIVE = "highly_sensitive"


class RetentionPolicy:
    """Defines retention rules for classified emails."""

    def __init__(
        self,
        regulation: Regulation,
        retention_years: int,
        classification: ClassificationLevel,
        requires_encryption: bool = False,
        requires_legal_hold: bool = False,
        auto_destroy: bool = False,
        destroy_method: str = "secure_delete",
    ):
        self.regulation = regulation
        self.retention_years = retention_years
        self.classification = classification
        self.requires_encryption = requires_encryption
        self.requires_legal_hold = requires_legal_hold
        self.auto_destroy = auto_destroy
        self.destroy_method = destroy_method

    def get_expiry_date(self, received_at: datetime) -> datetime:
        """Calculate when this email should expire."""
        return received_at + timedelta(days=self.retention_years * 365)

    def to_dict(self) -> dict:
        return {
            "regulation": self.regulation.value,
            "retention_years": self.retention_years,
            "classification": self.classification.value,
            "requires_encryption": self.requires_encryption,
            "requires_legal_hold": self.requires_legal_hold,
            "auto_destroy": self.auto_destroy,
        }


class ComplianceRecord:
    """Audit trail record for compliance actions."""

    def __init__(
        self,
        record_id: str,
        message_id: str,
        action: str,
        regulation: Regulation,
        details: Dict[str, Any],
        performed_by: str = "system",
    ):
        self.record_id = record_id
        self.message_id = message_id
        self.action = action
        self.regulation = regulation
        self.details = details
        self.performed_by = performed_by
        self.timestamp = datetime.now()
        self.checksum = self._compute_checksum()

    def _compute_checksum(self) -> str:
        """Compute integrity checksum for audit record."""
        data = f"{self.message_id}|{self.action}|{self.regulation.value}|{self.timestamp.isoformat()}"
        return hashlib.sha256(data.encode()).hexdigest()[:16]

    def to_dict(self) -> dict:
        return {
            "record_id": self.record_id,
            "message_id": self.message_id,
            "action": self.action,
            "regulation": self.regulation.value,
            "details": self.details,
            "performed_by": self.performed_by,
            "timestamp": self.timestamp.isoformat(),
            "checksum": self.checksum,
        }


class ClassifiedEmail:
    """An email that has been classified for compliance."""

    def __init__(
        self,
        message_id: str,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
        received_at: datetime,
    ):
        self.message_id = message_id
        self.sender = sender
        self.recipients = recipients
        self.cc = cc
        self.subject = subject
        self.body = body
        self.received_at = received_at
        self.regulations: List[Regulation] = []
        self.classification_level = ClassificationLevel.INTERNAL
        self.retention_policy: Optional[RetentionPolicy] = None
        self.retention_expiry: Optional[datetime] = None
        self.is_legal_hold = False
        self.compliance_flags: List[str] = []
        self.pii_detected: List[Dict[str, Any]] = []
        self.phi_detected: List[Dict[str, Any]] = []
        self.pci_detected: List[Dict[str, Any]] = []
        self.financial_data: List[Dict[str, Any]] = []

    @property
    def all_recipients(self) -> Set[str]:
        return set(self.recipients + self.cc)

    def to_dict(self) -> dict:
        return {
            "message_id": self.message_id,
            "sender": self.sender,
            "recipients": self.recipients,
            "cc": self.cc,
            "subject": self.subject,
            "regulations": [r.value for r in self.regulations],
            "classification": self.classification_level.value,
            "retention_policy": self.retention_policy.to_dict() if self.retention_policy else None,
            "retention_expiry": self.retention_expiry.isoformat() if self.retention_expiry else None,
            "legal_hold": self.is_legal_hold,
            "compliance_flags": self.compliance_flags,
            "pii_count": len(self.pii_detected),
            "phi_count": len(self.phi_detected),
            "pci_count": len(self.pci_detected),
            "financial_count": len(self.financial_data),
        }


class ComplianceAutoFiler:
    """
    Main engine for automatic compliance classification and filing.
    Enforces reply-all for all multi-recipient emails.
    """

    PII_PATTERNS = {
        "email": r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",
        "phone": r"\b(?:\+?1[-.]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b",
        "ssn": r"\b\d{3}-\d{2}-\d{4}\b",
        "date_of_birth": r"\b(?:born|DOB|birth\s*date)[:\s]+\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b",
        "ip_address": r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b",
        "address": r"\b\d+\s+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd)\b",
    }

    PHI_PATTERNS = {
        "diagnosis": r"\b(?:diagnos(?:ed|is)|condition|disease|disorder|syndrome|cancer|diabetes|hypertension)\b",
        "treatment": r"\b(?:treatment|prescription|medication|dosage|therapy|surgery|procedure)\b",
        "medical_record": r"\b(?:MRN|medical\s+record|patient\s+ID|chart\s+number)[:\s]*\w+\b",
        "insurance_id": r"\b(?:insurance|policy|member)\s*(?:ID|number|#)[:\s]*[\w-]+\b",
        "health_plan": r"\b(?:health\s+plan|HMO|PPO|Medicare|Medicaid)\b",
    }

    PCI_PATTERNS = {
        "card_number": r"\b(?:4\d{3}|5[1-5]\d{2}|3[47]\d{2}|6(?:011|5\d{2}))[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b",
        "cvv": r"\b(?:CVV|CVC|security\s+code)[:\s]*\d{3,4}\b",
        "expiry": r"\b(?:exp(?:iry)?|valid\s+thru)[:\s]*\d{2}[/-]\d{2,4}\b",
    }

    FINANCIAL_PATTERNS = {
        "revenue": r"\b(?:revenue|earnings|profit|income|EBITDA)[:\s]*\$[\d,]+(?:\.\d+)?(?:\s*(?:million|billion|[MB]))?\b",
        "stock_price": r"\b(?:stock|share)\s+price[:\s]*\$[\d.]+\b",
        "account_number": r"\b(?:account|routing)\s*(?:number|#|no)[:\s]*\d{8,12}\b",
        "tax_id": r"\b(?:TIN|EIN|tax\s+ID)[:\s]*\d{2}-\d{7}\b",
    }

    SOX_SIGNALS = [
        r"(?:financial\s+(?:statement|report|audit|disclosure))",
        r"(?:internal\s+controls?|SOX\s+compliance|Sarbanes)",
        r"(?:quarterly\s+(?:earnings|report|10-?[Qq])|annual\s+(?:report|10-?[Kk]))",
        r"(?:material\s+(?:weakness|deficiency|change))",
        r"(?:auditor|audit\s+committee|external\s+audit)",
    ]

    RETENTION_POLICIES: Dict[Regulation, RetentionPolicy] = {}

    def __init__(self, organization: str = "default"):
        self.organization = organization
        self.classified_emails: Dict[str, ClassifiedEmail] = {}
        self.audit_trail: List[ComplianceRecord] = []
        self.reply_all_log: List[Dict[str, Any]] = []
        self.legal_holds: Dict[str, Dict[str, Any]] = {}
        self._init_retention_policies()
        self._init_regex_patterns()
        logger.info(
            "V410 AI Email Compliance Auto-Filer initialized for org: %s",
            organization,
        )

    def _init_retention_policies(self):
        """Initialize default retention policies per regulation."""
        self.RETENTION_POLICIES = {
            Regulation.GDPR: RetentionPolicy(
                regulation=Regulation.GDPR,
                retention_years=7,
                classification=ClassificationLevel.CONFIDENTIAL,
                requires_encryption=True,
            ),
            Regulation.HIPAA: RetentionPolicy(
                regulation=Regulation.HIPAA,
                retention_years=6,
                classification=ClassificationLevel.RESTRICTED,
                requires_encryption=True,
                requires_legal_hold=True,
            ),
            Regulation.SOX: RetentionPolicy(
                regulation=Regulation.SOX,
                retention_years=7,
                classification=ClassificationLevel.CONFIDENTIAL,
                requires_encryption=True,
            ),
            Regulation.PCI_DSS: RetentionPolicy(
                regulation=Regulation.PCI_DSS,
                retention_years=1,
                classification=ClassificationLevel.HIGHLY_SENSITIVE,
                requires_encryption=True,
                auto_destroy=True,
                destroy_method="cryptographic_shred",
            ),
            Regulation.CCPA: RetentionPolicy(
                regulation=Regulation.CCPA,
                retention_years=3,
                classification=ClassificationLevel.CONFIDENTIAL,
                requires_encryption=True,
            ),
            Regulation.GENERAL: RetentionPolicy(
                regulation=Regulation.GENERAL,
                retention_years=3,
                classification=ClassificationLevel.INTERNAL,
            ),
        }

    def _init_regex_patterns(self):
        """Pre-compile regex patterns for performance."""
        self._compiled_pii = {k: re.compile(v, re.IGNORECASE) for k, v in self.PII_PATTERNS.items()}
        self._compiled_phi = {k: re.compile(v, re.IGNORECASE) for k, v in self.PHI_PATTERNS.items()}
        self._compiled_pci = {k: re.compile(v, re.IGNORECASE) for k, v in self.PCI_PATTERNS.items()}
        self._compiled_financial = {k: re.compile(v, re.IGNORECASE) for k, v in self.FINANCIAL_PATTERNS.items()}
        self._compiled_sox = [re.compile(p, re.IGNORECASE) for p in self.SOX_SIGNALS]

    def classify_email(
        self,
        message_id: str,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
        received_at: Optional[datetime] = None,
    ) -> Dict[str, Any]:
        """Classify an email for compliance and file it appropriately."""
        ts = received_at or datetime.now()
        classified = ClassifiedEmail(
            message_id=message_id,
            sender=sender,
            recipients=recipients,
            cc=cc,
            subject=subject,
            body=body,
            received_at=ts,
        )

        full_text = f"{subject} {body}"

        pii_findings = self._scan_pii(full_text)
        classified.pii_detected = pii_findings

        phi_findings = self._scan_phi(full_text)
        classified.phi_detected = phi_findings

        pci_findings = self._scan_pci(full_text)
        classified.pci_detected = pci_findings

        financial_findings = self._scan_financial(full_text)
        classified.financial_data = financial_findings

        regulations = self._determine_regulations(classified)
        classified.regulations = regulations

        highest_classification = ClassificationLevel.INTERNAL
        for reg in regulations:
            policy = self.RETENTION_POLICIES.get(reg)
            if policy and policy.classification.value > highest_classification.value:
                highest_classification = policy.classification
        classified.classification_level = highest_classification

        primary_regulation = regulations[0] if regulations else Regulation.GENERAL
        retention = self.RETENTION_POLICIES.get(primary_regulation, self.RETENTION_POLICIES[Regulation.GENERAL])
        classified.retention_policy = retention
        classified.retention_expiry = retention.get_expiry_date(ts)

        if retention.requires_legal_hold or any(
            r in regulations for r in [Regulation.HIPAA, Regulation.SOX]
        ):
            if pii_findings or phi_findings:
                classified.is_legal_hold = True

        classified.compliance_flags = self._generate_flags(classified)

        self.classified_emails[message_id] = classified

        audit_record = ComplianceRecord(
            record_id=hashlib.md5(f"audit_{message_id}_{ts.isoformat()}".encode()).hexdigest()[:12],
            message_id=message_id,
            action="classify",
            regulation=primary_regulation,
            details={
                "regulations_detected": [r.value for r in regulations],
                "classification": highest_classification.value,
                "pii_count": len(pii_findings),
                "phi_count": len(phi_findings),
                "pci_count": len(pci_findings),
                "financial_count": len(financial_findings),
                "retention_years": retention.retention_years,
                "expiry": classified.retention_expiry.isoformat(),
                "legal_hold": classified.is_legal_hold,
            },
        )
        self.audit_trail.append(audit_record)

        logger.info(
            "Classified email %s | Regulations: %s | Classification: %s | "
            "PII: %d | PHI: %d | PCI: %d | Flags: %d",
            message_id[:8],
            [r.value for r in regulations],
            highest_classification.value,
            len(pii_findings),
            len(phi_findings),
            len(pci_findings),
            len(classified.compliance_flags),
        )

        return {
            "message_id": message_id,
            "regulations": [r.value for r in regulations],
            "classification": highest_classification.value,
            "retention_expiry": classified.retention_expiry.isoformat(),
            "legal_hold": classified.is_legal_hold,
            "pii_detected": len(pii_findings),
            "phi_detected": len(phi_findings),
            "pci_detected": len(pci_findings),
            "compliance_flags": classified.compliance_flags,
            "audit_record_id": audit_record.record_id,
        }

    def _scan_pii(self, text: str) -> List[Dict[str, Any]]:
        """Scan for Personally Identifiable Information."""
        findings = []
        for pii_type, pattern in self._compiled_pii.items():
            for match in pattern.finditer(text):
                findings.append({
                    "type": pii_type,
                    "matched_text": self._redact_sensitive(match.group(), pii_type),
                    "position": match.start(),
                })
        return findings

    def _scan_phi(self, text: str) -> List[Dict[str, Any]]:
        """Scan for Protected Health Information."""
        findings = []
        for phi_type, pattern in self._compiled_phi.items():
            for match in pattern.finditer(text):
                findings.append({
                    "type": phi_type,
                    "matched_text": match.group()[:50],
                    "position": match.start(),
                })
        return findings

    def _scan_pci(self, text: str) -> List[Dict[str, Any]]:
        """Scan for Payment Card Industry data."""
        findings = []
        for pci_type, pattern in self._compiled_pci.items():
            for match in pattern.finditer(text):
                findings.append({
                    "type": pci_type,
                    "matched_text": "***REDACTED***",
                    "position": match.start(),
                })
        return findings

    def _scan_financial(self, text: str) -> List[Dict[str, Any]]:
        """Scan for financial data relevant to SOX compliance."""
        findings = []
        for fin_type, pattern in self._compiled_financial.items():
            for match in pattern.finditer(text):
                findings.append({
                    "type": fin_type,
                    "matched_text": match.group()[:80],
                    "position": match.start(),
                })
        return findings

    @staticmethod
    def _redact_sensitive(text: str, data_type: str) -> str:
        """Redact sensitive data based on type."""
        if data_type in ("ssn", "card_number", "cvv", "account_number"):
            return "***REDACTED***"
        if data_type == "phone":
            return text[:3] + "***" + text[-4:]
        if data_type == "email":
            parts = text.split("@")
            return parts[0][:2] + "***@" + parts[1] if len(parts) == 2 else "***"
        return text[:5] + "..."

    def _determine_regulations(self, email: ClassifiedEmail) -> List[Regulation]:
        """Determine which regulations apply to this email."""
        regulations = []

        if email.pii_detected:
            regulations.append(Regulation.GDPR)
            regulations.append(Regulation.CCPA)

        if email.phi_detected:
            regulations.append(Regulation.HIPAA)

        if email.pci_detected:
            regulations.append(Regulation.PCI_DSS)

        full_text = f"{email.subject} {email.body}"
        for pattern in self._compiled_sox:
            if pattern.search(full_text):
                if Regulation.SOX not in regulations:
                    regulations.append(Regulation.SOX)
                break

        if email.financial_data:
            if Regulation.SOX not in regulations:
                regulations.append(Regulation.SOX)

        if not regulations:
            regulations.append(Regulation.GENERAL)

        return regulations

    @staticmethod
    def _generate_flags(email: ClassifiedEmail) -> List[str]:
        """Generate compliance flags based on classification results."""
        flags = []
        if email.pci_detected:
            flags.append("PCI_DATA_DETECTED - Immediate review required")
        if email.phi_detected:
            flags.append("PHI_DETECTED - HIPAA compliance review needed")
        if len(email.pii_detected) > 5:
            flags.append("HIGH_PII_VOLUME - Enhanced protection required")
        if email.is_legal_hold:
            flags.append("LEGAL_HOLD - Do not delete")
        if email.classification_level in (
            ClassificationLevel.RESTRICTED,
            ClassificationLevel.HIGHLY_SENSITIVE,
        ):
            flags.append("HIGH_CLASSIFICATION - Access restricted")
        if email.retention_policy and email.retention_policy.auto_destroy:
            flags.append("AUTO_DESTROY - Will be securely destroyed after retention period")
        return flags

    def apply_legal_hold(self, message_id: str, hold_reason: str, hold_by: str) -> Dict[str, Any]:
        """Apply a legal hold to an email, preventing deletion."""
        email = self.classified_emails.get(message_id)
        if not email:
            return {"status": "error", "reason": "Email not found"}

        email.is_legal_hold = True
        hold_id = hashlib.md5(f"hold_{message_id}_{datetime.now().isoformat()}".encode()).hexdigest()[:10]
        self.legal_holds[hold_id] = {
            "message_id": message_id,
            "reason": hold_reason,
            "held_by": hold_by,
            "held_at": datetime.now().isoformat(),
        }

        audit = ComplianceRecord(
            record_id=hashlib.md5(f"hold_audit_{hold_id}".encode()).hexdigest()[:12],
            message_id=message_id,
            action="legal_hold_applied",
            regulation=email.regulations[0] if email.regulations else Regulation.GENERAL,
            details={"hold_id": hold_id, "reason": hold_reason, "held_by": hold_by},
            performed_by=hold_by,
        )
        self.audit_trail.append(audit)

        logger.warning("LEGAL HOLD applied to %s: %s (by %s)", message_id[:8], hold_reason, hold_by)

        return {"status": "hold_applied", "hold_id": hold_id, "message_id": message_id}

    def reply_compliant_email(
        self,
        message_id: str,
        my_email: str,
        reply_body: str,
    ) -> Dict[str, Any]:
        """
        Reply to a classified email with reply-all enforcement.
        The reply inherits the compliance classification of the original.
        """
        original = self.classified_emails.get(message_id)
        if not original:
            return {"status": "error", "reason": "Original email not found"}

        all_original = set(original.recipients + original.cc + [original.sender])
        all_original.discard(my_email)

        primary_recipients = list(set(original.recipients + [original.sender]) - {my_email})
        cc_recipients = list(all_original - set(primary_recipients))

        reply_id = hashlib.md5(
            f"reply_{message_id}_{datetime.now().isoformat()}".encode()
        ).hexdigest()[:16]

        subject = original.subject
        if not subject.lower().startswith("re:"):
            subject = f"Re: {subject}"

        self.classify_email(
            message_id=reply_id,
            sender=my_email,
            recipients=primary_recipients,
            cc=cc_recipients,
            subject=subject,
            body=reply_body,
        )

        self.reply_all_log.append({
            "reply_id": reply_id,
            "original_id": message_id,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
            "inherited_classification": original.classification_level.value,
            "inherited_regulations": [r.value for r in original.regulations],
            "timestamp": datetime.now().isoformat(),
        })

        logger.info(
            "REPLY-ALL ENFORCED: Compliant reply %s to %s | %d To + %d CC | Class: %s",
            reply_id[:8],
            message_id[:8],
            len(primary_recipients),
            len(cc_recipients),
            original.classification_level.value,
        )

        return {
            "status": "replied",
            "reply_id": reply_id,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
            "classification": original.classification_level.value,
            "regulations": [r.value for r in original.regulations],
        }

    def send_new_compliant_email(
        self,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
    ) -> Dict[str, Any]:
        """Send a new email with compliance classification and reply-all enforcement."""
        msg_id = hashlib.md5(f"new_{sender}_{datetime.now().isoformat()}".encode()).hexdigest()[:16]

        thread_key = re.sub(r"^(Re|Fwd):\s*", "", subject, flags=re.IGNORECASE).strip().lower()
        thread_hash = hashlib.md5(thread_key.encode()).hexdigest()[:16]

        enforced_cc = list(cc)
        for existing_id, existing_email in self.classified_emails.items():
            existing_key = re.sub(
                r"^(Re|Fwd):\s*", "", existing_email.subject, flags=re.IGNORECASE
            ).strip().lower()
            existing_hash = hashlib.md5(existing_key.encode()).hexdigest()[:16]
            if existing_hash == thread_hash:
                prior = existing_email.all_recipients - {sender} - set(recipients) - set(cc)
                if prior:
                    enforced_cc.extend(prior)
                    logger.warning(
                        "REPLY-ALL ENFORCEMENT (compliant new): Added %d prior participants",
                        len(prior),
                    )
                break

        classification = self.classify_email(
            message_id=msg_id,
            sender=sender,
            recipients=recipients,
            cc=enforced_cc,
            subject=subject,
            body=body,
        )

        return {
            "status": "sent",
            "message_id": msg_id,
            "to": recipients,
            "cc": enforced_cc,
            "reply_all_enforced": len(enforced_cc) > len(cc),
            "classification": classification,
        }

    def get_audit_trail(
        self,
        regulation: Optional[Regulation] = None,
        action: Optional[str] = None,
        since: Optional[datetime] = None,
        limit: int = 100,
    ) -> List[Dict[str, Any]]:
        """Retrieve audit trail records with filters."""
        records = self.audit_trail

        if regulation:
            records = [r for r in records if r.regulation == regulation]
        if action:
            records = [r for r in records if r.action == action]
        if since:
            records = [r for r in records if r.timestamp >= since]

        records = sorted(records, key=lambda r: r.timestamp, reverse=True)[:limit]
        return [r.to_dict() for r in records]

    def get_compliance_dashboard(self) -> Dict[str, Any]:
        """Get an overview dashboard of compliance status."""
        reg_counts = defaultdict(int)
        class_counts = defaultdict(int)
        total_pii = 0
        total_phi = 0
        total_pci = 0
        legal_hold_count = 0

        for email in self.classified_emails.values():
            for reg in email.regulations:
                reg_counts[reg.value] += 1
            class_counts[email.classification_level.value] += 1
            total_pii += len(email.pii_detected)
            total_phi += len(email.phi_detected)
            total_pci += len(email.pci_detected)
            if email.is_legal_hold:
                legal_hold_count += 1

        expiring_soon = [
            e.to_dict() for e in self.classified_emails.values()
            if e.retention_expiry and e.retention_expiry < datetime.now() + timedelta(days=30)
        ]

        return {
            "generated_at": datetime.now().isoformat(),
            "total_classified": len(self.classified_emails),
            "by_regulation": dict(reg_counts),
            "by_classification": dict(class_counts),
            "total_pii_detected": total_pii,
            "total_phi_detected": total_phi,
            "total_pci_detected": total_pci,
            "legal_holds": legal_hold_count,
            "expiring_within_30_days": len(expiring_soon),
            "audit_records": len(self.audit_trail),
            "reply_all_enforcements": len(self.reply_all_log),
        }

    def verify_audit_integrity(self) -> Dict[str, Any]:
        """Verify the integrity of all audit trail records."""
        verified = 0
        tampered = []
        for record in self.audit_trail:
            expected = record._compute_checksum()
            if expected == record.checksum:
                verified += 1
            else:
                tampered.append(record.record_id)
        return {
            "total_records": len(self.audit_trail),
            "verified": verified,
            "tampered": len(tampered),
            "tampered_ids": tampered,
            "integrity_ok": len(tampered) == 0,
        }


if __name__ == "__main__":
    filer = ComplianceAutoFiler(organization="AcmeCorp")

    result = filer.classify_email(
        message_id="comp001",
        sender="hr@acme.com",
        recipients=["manager@acme.com", "legal@acme.com"],
        cc=["compliance@acme.com"],
        subject="Employee Health Records - Q3 Review",
        body="Please review the attached health records for Q3. Patient ID: MRN-12345. "
             "Employee SSN: 123-45-6789. The diagnosis shows improvement in the treatment plan. "
             "Insurance ID: INS-98765. Revenue for Q3 was $2.5 million. "
             "The financial statement audit is scheduled for next month. "
             "Contact: john.doe@acme.com, phone: 555-123-4567.",
    )
    print(f"Classification: {json.dumps(result, indent=2, default=str)}")

    reply = filer.reply_compliant_email(
        "comp001",
        "manager@acme.com",
        "Reviewed. All records appear compliant. Proceeding with filing.",
    )
    print(f"\nReply: {json.dumps(reply, indent=2, default=str)}")

    dashboard = filer.get_compliance_dashboard()
    print(f"\nDashboard: {json.dumps(dashboard, indent=2, default=str)}")

    integrity = filer.verify_audit_integrity()
    print(f"\nAudit integrity: {json.dumps(integrity, indent=2, default=str)}")

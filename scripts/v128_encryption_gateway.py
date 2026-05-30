#!/usr/bin/env python3
"""
V128 Email Encryption Gateway
==============================
Production-grade email encryption gateway with:
  - End-to-end encryption simulation for sensitive emails
  - Auto-classification of confidential content (PII, financial, health, legal, trade secrets)
  - Secure file sharing with expiration and access controls
  - Compliance checking (HIPAA, GDPR, SOC 2, PCI-DSS)
  - Key management simulation with rotation and lifecycle tracking
  - Audit trail for all encrypted communications
  - Reply-all enforcement (encrypted replies include all original recipients)

Author: V128 Security Division
Version: 2.1.0
License: Proprietary - All Rights Reserved
"""

from __future__ import annotations

import base64
import hashlib
import hmac
import json
import os
import re
import secrets
import time
import uuid
from dataclasses import dataclass, field, asdict
from datetime import datetime, timedelta, timezone
from enum import Enum, auto
from typing import Any, Dict, List, Optional, Set, Tuple


# ─────────────────────────────────────────────────────────────────────────────
# Constants
# ─────────────────────────────────────────────────────────────────────────────

V128_VERSION = "2.1.0"
V128_PROTOCOL = "V128-EGW"
KEY_SIZE_BITS = 256
IV_SIZE_BYTES = 16
MAX_ATTACHMENT_SIZE_MB = 100
ENCRYPTION_HEADER = "X-V128-Encrypted"
CLASSIFICATION_HEADER = "X-V128-Classification"


# ─────────────────────────────────────────────────────────────────────────────
# Enumerations
# ─────────────────────────────────────────────────────────────────────────────

class SensitivityLevel(Enum):
    """Content sensitivity classification levels."""
    PUBLIC = 0
    INTERNAL = 1
    CONFIDENTIAL = 2
    RESTRICTED = 3
    TOP_SECRET = 4


class ContentCategory(Enum):
    """Categories of sensitive content detected in messages."""
    PII = "personally_identifiable_information"
    FINANCIAL = "financial_data"
    HEALTH = "protected_health_information"
    LEGAL = "legal_privileged"
    TRADE_SECRET = "trade_secret"
    CREDENTIALS = "credentials_or_keys"
    NONE = "no_sensitive_content"


class ComplianceFramework(Enum):
    """Supported compliance frameworks."""
    HIPAA = "Health Insurance Portability and Accountability Act"
    GDPR = "General Data Protection Regulation"
    SOC2 = "Service Organization Control 2"
    PCI_DSS = "Payment Card Industry Data Security Standard"


class KeyStatus(Enum):
    """Encryption key lifecycle states."""
    ACTIVE = auto()
    ROTATED = auto()
    REVOKED = auto()
    EXPIRED = auto()


class EncryptionAlgorithm(Enum):
    """Supported encryption algorithms (simulated)."""
    AES_256_GCM = "AES-256-GCM"
    AES_256_CBC = "AES-256-CBC"
    CHACHA20_POLY1305 = "ChaCha20-Poly1305"
    RSA_4096_OAEP = "RSA-4096-OAEP"


class AuditAction(Enum):
    """Audit trail action types."""
    ENCRYPT = "email_encrypted"
    DECRYPT = "email_decrypted"
    CLASSIFY = "content_classified"
    KEY_GENERATE = "key_generated"
    KEY_ROTATE = "key_rotated"
    KEY_REVOKE = "key_revoked"
    FILE_SHARE = "secure_file_shared"
    FILE_ACCESS = "secure_file_accessed"
    FILE_EXPIRE = "secure_file_expired"
    COMPLIANCE_CHECK = "compliance_checked"
    COMPLIANCE_VIOLATION = "compliance_violation"
    REPLY_ENFORCE = "reply_all_enforced"
    BLOCK = "message_blocked"
    QUARANTINE = "message_quarantined"


# ─────────────────────────────────────────────────────────────────────────────
# Data Classes
# ─────────────────────────────────────────────────────────────────────────────

@dataclass
class EncryptionKey:
    """Represents a managed encryption key."""
    key_id: str
    owner: str
    algorithm: EncryptionAlgorithm
    key_material: str  # Simulated key material (hex-encoded)
    fingerprint: str
    created_at: datetime
    expires_at: datetime
    status: KeyStatus = KeyStatus.ACTIVE
    rotation_count: int = 0
    last_used: Optional[datetime] = None
    usage_count: int = 0
    revoked_reason: Optional[str] = None

    def is_valid(self) -> bool:
        """Check if the key is currently valid for use."""
        now = datetime.now(timezone.utc)
        return (
            self.status == KeyStatus.ACTIVE
            and self.expires_at > now
        )

    def to_dict(self) -> Dict[str, Any]:
        """Serialize key metadata (excludes key material)."""
        return {
            "key_id": self.key_id,
            "owner": self.owner,
            "algorithm": self.algorithm.value,
            "fingerprint": self.fingerprint,
            "created_at": self.created_at.isoformat(),
            "expires_at": self.expires_at.isoformat(),
            "status": self.status.name,
            "rotation_count": self.rotation_count,
            "last_used": self.last_used.isoformat() if self.last_used else None,
            "usage_count": self.usage_count,
        }


@dataclass
class ClassificationResult:
    """Result of content classification analysis."""
    sensitivity: SensitivityLevel
    categories: List[ContentCategory]
    confidence: float  # 0.0 - 1.0
    detected_patterns: List[Dict[str, Any]]
    recommended_action: str
    pii_entities: List[str] = field(default_factory=list)

    def requires_encryption(self) -> bool:
        """Determine if content requires mandatory encryption."""
        return self.sensitivity.value >= SensitivityLevel.CONFIDENTIAL.value

    def to_dict(self) -> Dict[str, Any]:
        return {
            "sensitivity": self.sensitivity.name,
            "categories": [c.name for c in self.categories],
            "confidence": round(self.confidence, 3),
            "detected_patterns": self.detected_patterns,
            "recommended_action": self.recommended_action,
            "pii_entities_count": len(self.pii_entities),
        }


@dataclass
class ComplianceResult:
    """Result of compliance framework validation."""
    framework: ComplianceFramework
    compliant: bool
    violations: List[str]
    warnings: List[str]
    recommendations: List[str]
    checked_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    score: float = 100.0  # Compliance score percentage

    def to_dict(self) -> Dict[str, Any]:
        return {
            "framework": self.framework.name,
            "compliant": self.compliant,
            "violations": self.violations,
            "warnings": self.warnings,
            "recommendations": self.recommendations,
            "checked_at": self.checked_at.isoformat(),
            "score": round(self.score, 1),
        }


@dataclass
class SecureAttachment:
    """Represents a securely shared file with access controls."""
    attachment_id: str
    filename: str
    size_bytes: int
    content_hash: str
    encrypted_content: str  # Simulated encrypted file content
    uploader: str
    created_at: datetime
    expires_at: Optional[datetime]
    allowed_recipients: Set[str]
    max_downloads: Optional[int]
    download_count: int = 0
    password_protected: bool = False
    access_log: List[Dict[str, Any]] = field(default_factory=list)

    def is_accessible(self, requester: str) -> Tuple[bool, str]:
        """Check if a user can access this attachment."""
        now = datetime.now(timezone.utc)

        if self.expires_at and now > self.expires_at:
            return False, "Attachment has expired"

        if self.max_downloads and self.download_count >= self.max_downloads:
            return False, "Maximum download limit reached"

        if requester not in self.allowed_recipients:
            return False, "Access denied - not in allowed recipients list"

        return True, "Access granted"

    def to_dict(self) -> Dict[str, Any]:
        return {
            "attachment_id": self.attachment_id,
            "filename": self.filename,
            "size_bytes": self.size_bytes,
            "content_hash": self.content_hash[:16] + "...",
            "uploader": self.uploader,
            "created_at": self.created_at.isoformat(),
            "expires_at": self.expires_at.isoformat() if self.expires_at else None,
            "allowed_recipients": list(self.allowed_recipients),
            "max_downloads": self.max_downloads,
            "download_count": self.download_count,
            "password_protected": self.password_protected,
        }


@dataclass
class AuditEntry:
    """Single audit trail entry."""
    entry_id: str
    timestamp: datetime
    action: AuditAction
    actor: str
    resource_type: str
    resource_id: str
    details: Dict[str, Any]
    ip_address: Optional[str] = None
    outcome: str = "success"

    def to_dict(self) -> Dict[str, Any]:
        return {
            "entry_id": self.entry_id,
            "timestamp": self.timestamp.isoformat(),
            "action": self.action.value,
            "actor": self.actor,
            "resource_type": self.resource_type,
            "resource_id": self.resource_id,
            "details": self.details,
            "ip_address": self.ip_address,
            "outcome": self.outcome,
        }


@dataclass
class EmailMessage:
    """Represents an email message in the gateway."""
    message_id: str
    sender: str
    recipients: List[str]
    cc: List[str]
    subject: str
    body: str
    headers: Dict[str, str] = field(default_factory=dict)
    attachments: List[SecureAttachment] = field(default_factory=list)
    is_encrypted: bool = False
    encrypted_payload: Optional[str] = None
    classification: Optional[ClassificationResult] = None
    original_recipients: Optional[List[str]] = None  # For reply-all enforcement
    parent_message_id: Optional[str] = None
    created_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))

    @property
    def all_recipients(self) -> List[str]:
        """Get all recipients including CC."""
        return self.recipients + self.cc


# ─────────────────────────────────────────────────────────────────────────────
# Key Management System
# ─────────────────────────────────────────────────────────────────────────────

class KeyManager:
    """
    Simulated key management system with full lifecycle support.
    Handles key generation, rotation, revocation, and expiration.
    """

    def __init__(self):
        self._keys: Dict[str, EncryptionKey] = {}
        self._key_by_owner: Dict[str, List[str]] = {}  # owner -> [key_ids]
        self._audit_callback: Optional[callable] = None

    def set_audit_callback(self, callback: callable) -> None:
        """Set callback function for audit logging."""
        self._audit_callback = callback

    def _audit(self, action: AuditAction, actor: str, resource_id: str,
               details: Dict[str, Any], outcome: str = "success") -> None:
        if self._audit_callback:
            self._audit_callback(action, actor, "encryption_key", resource_id, details, outcome)

    def generate_key(self, owner: str, algorithm: EncryptionAlgorithm = EncryptionAlgorithm.AES_256_GCM,
                     validity_days: int = 365) -> EncryptionKey:
        """Generate a new encryption key for the specified owner."""
        key_id = f"v128-key-{uuid.uuid4().hex[:16]}"
        key_material = secrets.token_hex(KEY_SIZE_BITS // 8)
        fingerprint = hashlib.sha256(key_material.encode()).hexdigest()[:40]

        now = datetime.now(timezone.utc)
        key = EncryptionKey(
            key_id=key_id,
            owner=owner,
            algorithm=algorithm,
            key_material=key_material,
            fingerprint=fingerprint,
            created_at=now,
            expires_at=now + timedelta(days=validity_days),
        )

        self._keys[key_id] = key
        if owner not in self._key_by_owner:
            self._key_by_owner[owner] = []
        self._key_by_owner[owner].append(key_id)

        self._audit(AuditAction.KEY_GENERATE, owner, key_id, {
            "algorithm": algorithm.value,
            "validity_days": validity_days,
            "fingerprint": fingerprint,
        })

        return key

    def get_key(self, key_id: str) -> Optional[EncryptionKey]:
        """Retrieve a key by its ID."""
        key = self._keys.get(key_id)
        if key:
            key.last_used = datetime.now(timezone.utc)
            key.usage_count += 1
        return key

    def get_active_key_for_owner(self, owner: str) -> Optional[EncryptionKey]:
        """Get the current active key for an owner."""
        key_ids = self._key_by_owner.get(owner, [])
        for kid in reversed(key_ids):
            key = self._keys.get(kid)
            if key and key.is_valid():
                key.last_used = datetime.now(timezone.utc)
                key.usage_count += 1
                return key
        return None

    def rotate_key(self, key_id: str, actor: str) -> Optional[EncryptionKey]:
        """Rotate a key - revokes old key and generates a new one."""
        old_key = self._keys.get(key_id)
        if not old_key:
            return None

        old_key.status = KeyStatus.ROTATED
        self._audit(AuditAction.KEY_ROTATE, actor, key_id, {
            "old_fingerprint": old_key.fingerprint,
            "rotation_count": old_key.rotation_count + 1,
        })

        new_key = self.generate_key(
            owner=old_key.owner,
            algorithm=old_key.algorithm,
            validity_days=365,
        )
        new_key.rotation_count = old_key.rotation_count + 1
        return new_key

    def revoke_key(self, key_id: str, actor: str, reason: str) -> bool:
        """Revoke a key immediately."""
        key = self._keys.get(key_id)
        if not key:
            return False

        key.status = KeyStatus.REVOKED
        key.revoked_reason = reason

        self._audit(AuditAction.KEY_REVOKE, actor, key_id, {
            "reason": reason,
            "fingerprint": key.fingerprint,
        })
        return True

    def list_keys(self, owner: Optional[str] = None) -> List[EncryptionKey]:
        """List all keys, optionally filtered by owner."""
        if owner:
            key_ids = self._key_by_owner.get(owner, [])
            return [self._keys[kid] for kid in key_ids if kid in self._keys]
        return list(self._keys.values())

    def check_expirations(self) -> List[EncryptionKey]:
        """Check for expired keys and update their status."""
        now = datetime.now(timezone.utc)
        expired = []
        for key in self._keys.values():
            if key.status == KeyStatus.ACTIVE and key.expires_at <= now:
                key.status = KeyStatus.EXPIRED
                expired.append(key)
        return expired

    def get_statistics(self) -> Dict[str, Any]:
        """Get key management statistics."""
        stats = {"total": 0, "active": 0, "rotated": 0, "revoked": 0, "expired": 0}
        for key in self._keys.values():
            stats["total"] += 1
            stats[key.status.name.lower()] += 1
        stats["owners"] = len(self._key_by_owner)
        return stats


# ─────────────────────────────────────────────────────────────────────────────
# Content Classifier
# ─────────────────────────────────────────────────────────────────────────────

class ContentClassifier:
    """
    Auto-classifies email content by sensitivity level and category.
    Detects PII, financial data, health information, legal content, and trade secrets.
    """

    # Pattern definitions for content detection
    PATTERNS = {
        ContentCategory.PII: [
            (r'\b\d{3}[-.]?\d{2}[-.]?\d{4}\b', "SSN"),
            (r'\b[A-Z]{1}\d{8}\b', "Passport Number"),
            (r'\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b', "Credit Card Number"),
            (r'\b(?:driver.?s?\s+licen[cs]e|DL)\s*(?:#|number|no)?\.?\s*:?\s*[A-Z0-9-]{6,15}\b', "Driver License"),
            (r'\b(?:date\s+of\s+birth|DOB|born\s+on)\s*:?\s*\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b', "Date of Birth"),
            (r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', "Email Address"),
            (r'\b(?:phone|tel|mobile|cell)\s*:?\s*\+?\d[\d\s\-()]{8,15}\b', "Phone Number"),
        ],
        ContentCategory.FINANCIAL: [
            (r'\b(?:account|acct)\s*(?:#|number|no)?\.?\s*:?\s*\d{8,17}\b', "Bank Account Number"),
            (r'\b(?:routing|rtn)\s*(?:#|number|no)?\.?\s*:?\s*\d{9}\b', "Routing Number"),
            (r'\b(?:SWIFT|BIC)\s*:?\s*[A-Z]{6}[A-Z0-9]{2}(?:[A-Z0-9]{3})?\b', "SWIFT/BIC Code"),
            (r'\b(?:IBAN)\s*:?\s*[A-Z]{2}\d{2}[A-Z0-9]{4}\d{7}[A-Z0-9]{0,16}\b', "IBAN"),
            (r'\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?\b', "Monetary Amount"),
            (r'\b(?:revenue|profit|earnings|salary|wages|income)\s*:?\s*\$?\d[\d,.]*\b', "Financial Figure"),
            (r'\b(?:tax\s+id|TIN|EIN)\s*:?\s*\d{2}[-]?\d{7}\b', "Tax ID"),
            (r'\b(?:wire\s+transfer|ACH|direct\s+deposit)\b', "Payment Method"),
        ],
        ContentCategory.HEALTH: [
            (r'\b(?:diagnosis|diagnosed\s+with|condition)\s*:?\s*[A-Za-z\s]{3,50}\b', "Medical Diagnosis"),
            (r'\b(?:prescription|medication|Rx)\s*:?\s*[A-Za-z\s\d]{3,50}\b', "Prescription"),
            (r'\b(?:patient|MRN|medical\s+record)\s*(?:#|number|ID)?\.?\s*:?\s*[A-Z0-9-]{5,20}\b', "Medical Record ID"),
            (r'\b(?:HIPAA|protected\s+health|PHI|ePHI)\b', "HIPAA Reference"),
            (r'\b(?:treatment\s+plan|prognosis|lab\s+results?|blood\s+type)\b', "Clinical Data"),
            (r'\b(?:insurance\s+(?:id|policy|group)|member\s+id)\s*:?\s*[A-Z0-9-]{5,20}\b', "Insurance ID"),
            (r'\b(?:allerg(?:y|ies)|immunization|vaccin(?:e|ation))\b', "Immunization Data"),
        ],
        ContentCategory.LEGAL: [
            (r'\b(?:attorney[\-\s]client|legal\s+privilege|privileged\s+and\s+confidential)\b', "Attorney-Client Privilege"),
            (r'\b(?:settlement|litigation|deposition|subpoena)\b', "Litigation Term"),
            (r'\b(?:NDA|non[\-\s]disclosure|confidentiality\s+agreement)\b', "NDA Reference"),
            (r'\b(?:case\s+(?:#|number)|docket\s+(?:#|number))\s*:?\s*[A-Z0-9-]{5,30}\b', "Case Number"),
            (r'\b(?:contract|agreement)\s+(?:dated|effective)\s+\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b', "Contract Reference"),
            (r'\b(?:under\s+oath|perjury|affidavit)\b', "Legal Declaration"),
        ],
        ContentCategory.TRADE_SECRET: [
            (r'\b(?:proprietary|trade\s+secret|confidential\s+algorithm)\b', "Proprietary Marker"),
            (r'\b(?:internal\s+use\s+only|do\s+not\s+distribute|eyes\s+only)\b', "Distribution Restriction"),
            (r'\b(?:source\s+code|API\s+key|secret\s+key|private\s+key)\s*:?\s*[A-Za-z0-9+/=_-]{8,}', "Secret Material"),
            (r'\b(?:patent\s+pending|unfiled\s+patent|invention\s+disclosure)\b', "Patent Material"),
            (r'\b(?:competitive\s+intelligence|market\s+strategy|pricing\s+model)\b', "Business Strategy"),
            (r'\b(?:sk-[A-Za-z0-9]{20,}|AKIA[A-Z0-9]{16})\b', "API Credential"),
        ],
        ContentCategory.CREDENTIALS: [
            (r'\b(?:password|passwd|pwd)\s*:?\s*\S{4,}\b', "Password"),
            (r'\b(?:ssh-rsa|ssh-ed25519)\s+[A-Za-z0-9+/=]{20,}', "SSH Key"),
            (r'\b(?:BEGIN\s+(?:RSA\s+)?PRIVATE\s+KEY)\b', "Private Key Block"),
            (r'\b(?:api[_-]?key|secret[_-]?key|access[_-]?token)\s*:?\s*["\']?[A-Za-z0-9+/=_-]{16,}', "API Key"),
        ],
    }

    # Sensitivity weights per category
    SENSITIVITY_WEIGHTS = {
        ContentCategory.PII: SensitivityLevel.CONFIDENTIAL,
        ContentCategory.FINANCIAL: SensitivityLevel.CONFIDENTIAL,
        ContentCategory.HEALTH: SensitivityLevel.RESTRICTED,
        ContentCategory.LEGAL: SensitivityLevel.CONFIDENTIAL,
        ContentCategory.TRADE_SECRET: SensitivityLevel.TOP_SECRET,
        ContentCategory.CREDENTIALS: SensitivityLevel.RESTRICTED,
        ContentCategory.NONE: SensitivityLevel.PUBLIC,
    }

    def __init__(self):
        self._audit_callback: Optional[callable] = None
        self._custom_patterns: Dict[ContentCategory, List[Tuple[str, str]]] = {}

    def set_audit_callback(self, callback: callable) -> None:
        self._audit_callback = callback

    def add_custom_pattern(self, category: ContentCategory, pattern: str, label: str) -> None:
        """Add a custom detection pattern for organization-specific content."""
        if category not in self._custom_patterns:
            self._custom_patterns[category] = []
        self._custom_patterns[category].append((pattern, label))

    def classify(self, text: str, subject: str = "", sender: str = "") -> ClassificationResult:
        """
        Analyze text content and classify by sensitivity level.
        Returns detailed classification with detected patterns and recommendations.
        """
        combined_text = f"{subject}\n{sender}\n{text}"
        detected_categories: Dict[ContentCategory, List[Dict[str, Any]]] = {}
        all_pii_entities: List[str] = []

        # Scan with built-in patterns
        for category, patterns in self.PATTERNS.items():
            for pattern, label in patterns:
                matches = re.finditer(pattern, combined_text, re.IGNORECASE)
                for match in matches:
                    if category not in detected_categories:
                        detected_categories[category] = []
                    detected_categories[category].append({
                        "type": label,
                        "pattern": pattern[:50] + "..." if len(pattern) > 50 else pattern,
                        "position": match.start(),
                        "match_preview": self._redact_match(match.group()),
                    })
                    all_pii_entities.append(f"{label}: {self._redact_match(match.group())}")

        # Scan with custom patterns
        for category, patterns in self._custom_patterns.items():
            for pattern, label in patterns:
                matches = re.finditer(pattern, combined_text, re.IGNORECASE)
                for match in matches:
                    if category not in detected_categories:
                        detected_categories[category] = []
                    detected_categories[category].append({
                        "type": label,
                        "pattern": pattern[:50],
                        "position": match.start(),
                        "match_preview": self._redact_match(match.group()),
                    })

        # Determine overall sensitivity
        max_sensitivity = SensitivityLevel.PUBLIC
        categories_found = []
        total_detections = 0

        for cat, detections in detected_categories.items():
            categories_found.append(cat)
            total_detections += len(detections)
            cat_sensitivity = self.SENSITIVITY_WEIGHTS.get(cat, SensitivityLevel.PUBLIC)
            if cat_sensitivity.value > max_sensitivity.value:
                max_sensitivity = cat_sensitivity

        # Escalate sensitivity based on detection count
        if total_detections > 5 and max_sensitivity.value < SensitivityLevel.RESTRICTED.value:
            max_sensitivity = SensitivityLevel(max_sensitivity.value + 1)
        if total_detections > 10 and max_sensitivity.value < SensitivityLevel.TOP_SECRET.value:
            max_sensitivity = SensitivityLevel(max_sensitivity.value + 1)

        if not categories_found:
            categories_found = [ContentCategory.NONE]

        # Calculate confidence
        confidence = min(1.0, 0.5 + (total_detections * 0.05))

        # Determine recommended action
        action = self._get_recommended_action(max_sensitivity, categories_found)

        # Flatten detected patterns
        all_patterns = []
        for patterns in detected_categories.values():
            all_patterns.extend(patterns)

        result = ClassificationResult(
            sensitivity=max_sensitivity,
            categories=categories_found,
            confidence=confidence,
            detected_patterns=all_patterns,
            recommended_action=action,
            pii_entities=all_pii_entities,
        )

        if self._audit_callback:
            self._audit_callback(
                AuditAction.CLASSIFY, sender or "system", "email_content", "",
                {"result": result.to_dict()},
            )

        return result

    @staticmethod
    def _redact_match(text: str) -> str:
        """Redact sensitive content for display in audit logs."""
        if len(text) <= 4:
            return "***"
        return text[:2] + "***" + text[-2:]

    @staticmethod
    def _get_recommended_action(sensitivity: SensitivityLevel,
                                categories: List[ContentCategory]) -> str:
        """Generate recommended handling action based on classification."""
        actions = {
            SensitivityLevel.PUBLIC: "No encryption required. Standard handling.",
            SensitivityLevel.INTERNAL: "Internal routing only. TLS transport encryption recommended.",
            SensitivityLevel.CONFIDENTIAL: "End-to-end encryption required. Restrict forwarding.",
            SensitivityLevel.RESTRICTED: "Mandatory E2E encryption. Access logging enabled. No forwarding.",
            SensitivityLevel.TOP_SECRET: "Maximum security: E2E encryption, time-limited access, "
                                        "watermarking, no copy/print, mandatory audit trail.",
        }
        base = actions.get(sensitivity, actions[SensitivityLevel.CONFIDENTIAL])

        if ContentCategory.HEALTH in categories:
            base += " [HIPAA: PHI handling procedures apply]"
        if ContentCategory.PII in categories:
            base += " [GDPR: Data subject rights applicable]"
        if ContentCategory.FINANCIAL in categories:
            base += " [PCI-DSS: Cardholder data protection required]"

        return base


# ─────────────────────────────────────────────────────────────────────────────
# Compliance Checker
# ─────────────────────────────────────────────────────────────────────────────

class ComplianceChecker:
    """
    Validates email content and handling against compliance frameworks:
    HIPAA, GDPR, SOC 2, and PCI-DSS.
    """

    def __init__(self):
        self._audit_callback: Optional[callable] = None

    def set_audit_callback(self, callback: callable) -> None:
        self._audit_callback = callback

    def check_all(self, email: EmailMessage, classification: ClassificationResult,
                  encryption_applied: bool = False) -> List[ComplianceResult]:
        """Run all compliance checks and return results."""
        results = [
            self.check_hipaa(email, classification, encryption_applied),
            self.check_gdpr(email, classification, encryption_applied),
            self.check_soc2(email, classification, encryption_applied),
            self.check_pci_dss(email, classification, encryption_applied),
        ]

        for result in results:
            if self._audit_callback:
                action = AuditAction.COMPLIANCE_CHECK
                if not result.compliant:
                    action = AuditAction.COMPLIANCE_VIOLATION
                self._audit_callback(
                    action, "compliance_engine", "email", email.message_id,
                    {"result": result.to_dict()},
                    "pass" if result.compliant else "violation",
                )

        return results

    def check_hipaa(self, email: EmailMessage, classification: ClassificationResult,
                    encryption_applied: bool) -> ComplianceResult:
        """Check HIPAA compliance for Protected Health Information."""
        violations = []
        warnings = []
        recommendations = []
        score = 100.0

        has_phi = ContentCategory.HEALTH in classification.categories

        if has_phi:
            if not encryption_applied:
                violations.append("PHI detected but email is not encrypted (HIPAA §164.312(a)(2)(iv))")
                score -= 30.0

            if not email.headers.get("X-V128-BAA-Verified"):
                warnings.append("Business Associate Agreement status not verified for recipient")
                score -= 10.0

            if "forward" not in email.headers.get("X-V128-Restrictions", "").lower():
                warnings.append("Forwarding restriction not applied to PHI email")
                score -= 5.0

            recommendations.append("Ensure minimum necessary standard is applied (§164.502(b))")
            recommendations.append("Verify recipient BAA status before transmission")
            recommendations.append("Enable access logging for all PHI communications")

        compliant = len(violations) == 0
        return ComplianceResult(
            framework=ComplianceFramework.HIPAA,
            compliant=compliant,
            violations=violations,
            warnings=warnings,
            recommendations=recommendations,
            score=max(0, score),
        )

    def check_gdpr(self, email: EmailMessage, classification: ClassificationResult,
                   encryption_applied: bool) -> ComplianceResult:
        """Check GDPR compliance for personal data processing."""
        violations = []
        warnings = []
        recommendations = []
        score = 100.0

        has_pii = ContentCategory.PII in classification.categories

        if has_pii:
            if not encryption_applied:
                violations.append("Personal data transmitted without encryption (GDPR Art. 32(1)(a))")
                score -= 25.0

            # Check for cross-border transfer indicators
            eu_indicators = ["eu", "europe", "gdpr", "dpo", "data protection"]
            body_lower = email.body.lower()
            is_eu_related = any(ind in body_lower for ind in eu_indicators)

            if is_eu_related:
                if not email.headers.get("X-V128-DPIA-Complete"):
                    warnings.append("Data Protection Impact Assessment may be required (Art. 35)")
                    score -= 10.0

            recommendations.append("Ensure lawful basis for processing is documented (Art. 6)")
            recommendations.append("Verify data retention policy compliance")
            recommendations.append("Confirm right to erasure procedures are in place")

        compliant = len(violations) == 0
        return ComplianceResult(
            framework=ComplianceFramework.GDPR,
            compliant=compliant,
            violations=violations,
            warnings=warnings,
            recommendations=recommendations,
            score=max(0, score),
        )

    def check_soc2(self, email: EmailMessage, classification: ClassificationResult,
                   encryption_applied: bool) -> ComplianceResult:
        """Check SOC 2 Trust Services Criteria compliance."""
        violations = []
        warnings = []
        recommendations = []
        score = 100.0

        high_sensitivity = classification.sensitivity.value >= SensitivityLevel.CONFIDENTIAL.value

        if high_sensitivity:
            if not encryption_applied:
                violations.append("Confidential data not encrypted at rest and in transit (CC6.1)")
                score -= 25.0

            if not email.headers.get("X-V128-Access-Control"):
                warnings.append("Access control metadata not attached (CC6.3)")
                score -= 10.0

        recommendations.append("Maintain audit trail for all sensitive communications (CC7.2)")
        recommendations.append("Implement data classification labeling (CC6.6)")
        recommendations.append("Ensure change management procedures for encryption policies")

        compliant = len(violations) == 0
        return ComplianceResult(
            framework=ComplianceFramework.SOC2,
            compliant=compliant,
            violations=violations,
            warnings=warnings,
            recommendations=recommendations,
            score=max(0, score),
        )

    def check_pci_dss(self, email: EmailMessage, classification: ClassificationResult,
                      encryption_applied: bool) -> ComplianceResult:
        """Check PCI-DSS compliance for cardholder data."""
        violations = []
        warnings = []
        recommendations = []
        score = 100.0

        has_financial = ContentCategory.FINANCIAL in classification.categories

        if has_financial:
            # Check for actual card numbers in body
            card_pattern = r'\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b'
            if re.search(card_pattern, email.body):
                if not encryption_applied:
                    violations.append("Cardholder data (PAN) transmitted unencrypted (Req. 4.1)")
                    score -= 35.0
                violations.append("Full PAN should be masked - only last 4 digits permitted in transit (Req. 3.4)")
                score -= 20.0

            if not encryption_applied:
                warnings.append("Financial data in transit without encryption (Req. 4.1)")
                score -= 10.0

            recommendations.append("Mask PAN to first 6 and last 4 digits maximum (Req. 3.4)")
            recommendations.append("Implement key management procedures (Req. 3.6)")
            recommendations.append("Restrict access to cardholder data on need-to-know basis (Req. 7.1)")

        compliant = len(violations) == 0
        return ComplianceResult(
            framework=ComplianceFramework.PCI_DSS,
            compliant=compliant,
            violations=violations,
            warnings=warnings,
            recommendations=recommendations,
            score=max(0, score),
        )


# ─────────────────────────────────────────────────────────────────────────────
# Encryption Engine (Simulated)
# ─────────────────────────────────────────────────────────────────────────────

class EncryptionEngine:
    """
    Simulated end-to-end encryption engine.
    Uses real cryptographic primitives (HMAC-SHA256, SHA-256) for integrity
    and simulated AES/ChaCha20 for confidentiality demonstration.
    """

    SUPPORTED_ALGORITHMS = [
        EncryptionAlgorithm.AES_256_GCM,
        EncryptionAlgorithm.AES_256_CBC,
        EncryptionAlgorithm.CHACHA20_POLY1305,
        EncryptionAlgorithm.RSA_4096_OAEP,
    ]

    def __init__(self, key_manager: KeyManager):
        self.key_manager = key_manager
        self._audit_callback: Optional[callable] = None

    def set_audit_callback(self, callback: callable) -> None:
        self._audit_callback = callback

    def encrypt(self, plaintext: str, sender_key: EncryptionKey,
                recipient_keys: List[EncryptionKey]) -> Dict[str, Any]:
        """
        Encrypt message content with sender's key and wrap for each recipient.
        Returns encrypted payload structure.
        """
        # Generate session key
        session_key = secrets.token_bytes(32)
        iv = secrets.token_bytes(IV_SIZE_BYTES)

        # Simulate AES-256-GCM encryption using XOR + HMAC
        plaintext_bytes = plaintext.encode('utf-8')
        encrypted_data = self._simulated_encrypt(plaintext_bytes, session_key, iv)

        # Compute authentication tag
        auth_tag = hmac.new(session_key, encrypted_data, hashlib.sha256).hexdigest()[:32]

        # Wrap session key for each recipient
        wrapped_keys = {}
        for rkey in recipient_keys:
            key_material = bytes.fromhex(rkey.key_material[:64])
            wrapped = self._xor_wrap(session_key, key_material)
            wrapped_keys[rkey.key_id] = base64.b64encode(wrapped).decode()

        # Sign with sender key
        sender_material = bytes.fromhex(sender_key.key_material[:64])
        signature = hmac.new(sender_material, encrypted_data + iv, hashlib.sha256).hexdigest()

        payload = {
            "version": V128_VERSION,
            "protocol": V128_PROTOCOL,
            "algorithm": sender_key.algorithm.value,
            "iv": base64.b64encode(iv).decode(),
            "ciphertext": base64.b64encode(encrypted_data).decode(),
            "auth_tag": auth_tag,
            "wrapped_keys": wrapped_keys,
            "signature": signature,
            "sender_key_fp": sender_key.fingerprint,
            "recipient_count": len(recipient_keys),
            "encrypted_at": datetime.now(timezone.utc).isoformat(),
        }

        if self._audit_callback:
            self._audit_callback(
                AuditAction.ENCRYPT, sender_key.owner, "email", sender_key.key_id,
                {
                    "algorithm": sender_key.algorithm.value,
                    "recipient_count": len(recipient_keys),
                    "ciphertext_length": len(encrypted_data),
                    "recipient_key_fps": [k.fingerprint[:16] for k in recipient_keys],
                },
            )

        return payload

    def decrypt(self, payload: Dict[str, Any], recipient_key: EncryptionKey) -> Optional[str]:
        """
        Decrypt message content using recipient's key.
        Returns plaintext or None if decryption fails.
        """
        try:
            # Unwrap session key
            wrapped_key_b64 = payload["wrapped_keys"].get(recipient_key.key_id)
            if not wrapped_key_b64:
                if self._audit_callback:
                    self._audit_callback(
                        AuditAction.DECRYPT, recipient_key.owner, "email",
                        payload.get("sender_key_fp", "unknown"),
                        {"error": "No wrapped key found for recipient"},
                        "failure",
                    )
                return None

            wrapped_key = base64.b64decode(wrapped_key_b64)
            key_material = bytes.fromhex(recipient_key.key_material[:64])
            session_key = self._xor_wrap(wrapped_key, key_material)

            # Decrypt
            iv = base64.b64decode(payload["iv"])
            ciphertext = base64.b64decode(payload["ciphertext"])
            plaintext_bytes = self._simulated_decrypt(ciphertext, session_key, iv)

            # Verify auth tag
            computed_tag = hmac.new(session_key, ciphertext, hashlib.sha256).hexdigest()[:32]
            if not hmac.compare_digest(computed_tag, payload["auth_tag"]):
                if self._audit_callback:
                    self._audit_callback(
                        AuditAction.DECRYPT, recipient_key.owner, "email",
                        payload.get("sender_key_fp", "unknown"),
                        {"error": "Authentication tag mismatch - possible tampering"},
                        "failure",
                    )
                return None

            plaintext = plaintext_bytes.decode('utf-8')

            if self._audit_callback:
                self._audit_callback(
                    AuditAction.DECRYPT, recipient_key.owner, "email",
                    payload.get("sender_key_fp", "unknown"),
                    {
                        "algorithm": payload.get("algorithm"),
                        "plaintext_length": len(plaintext),
                    },
                )

            return plaintext

        except Exception as e:
            if self._audit_callback:
                self._audit_callback(
                    AuditAction.DECRYPT, recipient_key.owner, "email",
                    payload.get("sender_key_fp", "unknown"),
                    {"error": str(e)},
                    "failure",
                )
            return None

    @staticmethod
    def _simulated_encrypt(data: bytes, key: bytes, iv: bytes) -> bytes:
        """Simulated block cipher encryption using XOR with key-derived stream."""
        key_stream = b""
        counter = 0
        while len(key_stream) < len(data):
            block = hashlib.sha256(key + iv + counter.to_bytes(4, 'big')).digest()
            key_stream += block
            counter += 1
        return bytes(a ^ b for a, b in zip(data, key_stream[:len(data)]))

    @staticmethod
    def _simulated_decrypt(data: bytes, key: bytes, iv: bytes) -> bytes:
        """Symmetric decryption (same as encrypt for XOR cipher)."""
        return EncryptionEngine._simulated_encrypt(data, key, iv)

    @staticmethod
    def _xor_wrap(data: bytes, key: bytes) -> bytes:
        """XOR wrap/unwrap for key encapsulation."""
        # Extend key if needed
        extended_key = key
        while len(extended_key) < len(data):
            extended_key = extended_key + hashlib.sha256(extended_key).digest()
        return bytes(a ^ b for a, b in zip(data, extended_key[:len(data)]))


# ─────────────────────────────────────────────────────────────────────────────
# Secure File Sharing
# ─────────────────────────────────────────────────────────────────────────────

class SecureFileSharing:
    """
    Manages secure file attachments with expiration, access controls,
    download limits, and audit logging.
    """

    def __init__(self, key_manager: KeyManager):
        self.key_manager = key_manager
        self._files: Dict[str, SecureAttachment] = {}
        self._audit_callback: Optional[callable] = None

    def set_audit_callback(self, callback: callable) -> None:
        self._audit_callback = callback

    def upload_secure_file(self, filename: str, content: bytes, uploader: str,
                           allowed_recipients: List[str],
                           expiration_hours: Optional[int] = None,
                           max_downloads: Optional[int] = None,
                           password_protected: bool = False) -> SecureAttachment:
        """
        Upload a file with encryption and access controls.
        Returns the secure attachment object.
        """
        attachment_id = f"v128-att-{uuid.uuid4().hex[:12]}"
        content_hash = hashlib.sha256(content).hexdigest()

        # Simulate encryption
        encryption_key = secrets.token_bytes(32)
        encrypted_content = base64.b64encode(
            bytes(a ^ b for a, b in zip(content, encryption_key * (len(content) // 32 + 1)))
        ).decode()

        expires_at = None
        if expiration_hours:
            expires_at = datetime.now(timezone.utc) + timedelta(hours=expiration_hours)

        attachment = SecureAttachment(
            attachment_id=attachment_id,
            filename=filename,
            size_bytes=len(content),
            content_hash=content_hash,
            encrypted_content=encrypted_content,
            uploader=uploader,
            created_at=datetime.now(timezone.utc),
            expires_at=expires_at,
            allowed_recipients=set(allowed_recipients),
            max_downloads=max_downloads,
            password_protected=password_protected,
        )

        self._files[attachment_id] = attachment

        if self._audit_callback:
            self._audit_callback(
                AuditAction.FILE_SHARE, uploader, "secure_attachment", attachment_id,
                {
                    "filename": filename,
                    "size_bytes": len(content),
                    "allowed_recipients": allowed_recipients,
                    "expiration_hours": expiration_hours,
                    "max_downloads": max_downloads,
                    "password_protected": password_protected,
                },
            )

        return attachment

    def access_file(self, attachment_id: str, requester: str) -> Tuple[bool, Optional[bytes], str]:
        """
        Attempt to access a secure file.
        Returns (success, decrypted_content_or_None, message).
        """
        attachment = self._files.get(attachment_id)
        if not attachment:
            return False, None, "Attachment not found"

        accessible, reason = attachment.is_accessible(requester)
        if not accessible:
            if self._audit_callback:
                self._audit_callback(
                    AuditAction.FILE_ACCESS, requester, "secure_attachment", attachment_id,
                    {"error": reason},
                    "denied",
                )
            return False, None, reason

        # Record access
        attachment.download_count += 1
        attachment.access_log.append({
            "requester": requester,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "ip_address": "10.0.0.1",  # Simulated
        })

        # Simulate decryption
        try:
            encrypted = base64.b64decode(attachment.encrypted_content)
            # In production, we'd use the actual key - here we just return the original hash
            content = encrypted  # Simplified for simulation

            if self._audit_callback:
                self._audit_callback(
                    AuditAction.FILE_ACCESS, requester, "secure_attachment", attachment_id,
                    {
                        "download_number": attachment.download_count,
                        "remaining_downloads": (
                            attachment.max_downloads - attachment.download_count
                            if attachment.max_downloads else None
                        ),
                    },
                )

            return True, content, "Access granted"

        except Exception as e:
            return False, None, f"Decryption failed: {str(e)}"

    def check_expirations(self) -> List[SecureAttachment]:
        """Check for expired attachments."""
        now = datetime.now(timezone.utc)
        expired = []
        for att in self._files.values():
            if att.expires_at and now > att.expires_at and att.download_count < (att.max_downloads or float('inf')):
                if self._audit_callback:
                    self._audit_callback(
                        AuditAction.FILE_EXPIRE, "system", "secure_attachment", att.attachment_id,
                        {"filename": att.filename, "expired_at": now.isoformat()},
                    )
                expired.append(att)
        return expired

    def get_file_info(self, attachment_id: str) -> Optional[Dict[str, Any]]:
        """Get metadata about a secure attachment."""
        att = self._files.get(attachment_id)
        return att.to_dict() if att else None

    def list_files(self, uploader: Optional[str] = None) -> List[Dict[str, Any]]:
        """List all secure files, optionally filtered by uploader."""
        files = self._files.values()
        if uploader:
            files = [f for f in files if f.uploader == uploader]
        return [f.to_dict() for f in files]


# ─────────────────────────────────────────────────────────────────────────────
# Audit Trail
# ─────────────────────────────────────────────────────────────────────────────

class AuditTrail:
    """
    Immutable audit trail for all gateway operations.
    Provides querying, filtering, and export capabilities.
    """

    def __init__(self):
        self._entries: List[AuditEntry] = []
        self._sealed = False

    def log(self, action: AuditAction, actor: str, resource_type: str,
            resource_id: str, details: Dict[str, Any],
            outcome: str = "success", ip_address: Optional[str] = None) -> AuditEntry:
        """Record an audit event."""
        if self._sealed:
            raise RuntimeError("Audit trail is sealed and cannot accept new entries")

        entry = AuditEntry(
            entry_id=f"audit-{uuid.uuid4().hex[:12]}",
            timestamp=datetime.now(timezone.utc),
            action=action,
            actor=actor,
            resource_type=resource_type,
            resource_id=resource_id,
            details=details,
            ip_address=ip_address or "10.0.0.1",
            outcome=outcome,
        )
        self._entries.append(entry)
        return entry

    def query(self, action: Optional[AuditAction] = None,
              actor: Optional[str] = None,
              resource_type: Optional[str] = None,
              outcome: Optional[str] = None,
              since: Optional[datetime] = None,
              until: Optional[datetime] = None,
              limit: int = 100) -> List[AuditEntry]:
        """Query audit entries with filters."""
        results = self._entries

        if action:
            results = [e for e in results if e.action == action]
        if actor:
            results = [e for e in results if e.actor == actor]
        if resource_type:
            results = [e for e in results if e.resource_type == resource_type]
        if outcome:
            results = [e for e in results if e.outcome == outcome]
        if since:
            results = [e for e in results if e.timestamp >= since]
        if until:
            results = [e for e in results if e.timestamp <= until]

        return results[-limit:]

    def get_statistics(self) -> Dict[str, Any]:
        """Get audit trail statistics."""
        stats = {
            "total_entries": len(self._entries),
            "by_action": {},
            "by_outcome": {},
            "by_actor": {},
            "time_range": {
                "earliest": None,
                "latest": None,
            },
        }

        for entry in self._entries:
            action_name = entry.action.value
            stats["by_action"][action_name] = stats["by_action"].get(action_name, 0) + 1
            stats["by_outcome"][entry.outcome] = stats["by_outcome"].get(entry.outcome, 0) + 1
            stats["by_actor"][entry.actor] = stats["by_actor"].get(entry.actor, 0) + 1

        if self._entries:
            stats["time_range"]["earliest"] = self._entries[0].timestamp.isoformat()
            stats["time_range"]["latest"] = self._entries[-1].timestamp.isoformat()

        return stats

    def export(self, format: str = "json") -> str:
        """Export audit trail in specified format."""
        if format == "json":
            return json.dumps([e.to_dict() for e in self._entries], indent=2, default=str)
        elif format == "csv":
            lines = ["entry_id,timestamp,action,actor,resource_type,resource_id,outcome"]
            for e in self._entries:
                lines.append(
                    f"{e.entry_id},{e.timestamp.isoformat()},{e.action.value},"
                    f"{e.actor},{e.resource_type},{e.resource_id},{e.outcome}"
                )
            return "\n".join(lines)
        else:
            raise ValueError(f"Unsupported export format: {format}")

    def seal(self) -> str:
        """Seal the audit trail and return integrity hash."""
        self._sealed = True
        content = json.dumps([e.to_dict() for e in self._entries], sort_keys=True, default=str)
        return hashlib.sha256(content.encode()).hexdigest()


# ─────────────────────────────────────────────────────────────────────────────
# Reply-All Enforcement
# ─────────────────────────────────────────────────────────────────────────────

class ReplyAllEnforcer:
    """
    Ensures encrypted email replies include all original recipients.
    Prevents accidental exclusion of recipients from encrypted threads.
    """

    def __init__(self):
        self._original_threads: Dict[str, List[str]] = {}  # message_id -> all_recipients
        self._audit_callback: Optional[callable] = None

    def set_audit_callback(self, callback: callable) -> None:
        self._audit_callback = callback

    def register_thread(self, message_id: str, all_recipients: List[str]) -> None:
        """Register original recipients for an encrypted thread."""
        self._original_threads[message_id] = list(set(all_recipients))

    def validate_reply(self, reply: EmailMessage) -> Tuple[bool, List[str], List[str]]:
        """
        Validate that a reply includes all original recipients.
        Returns (is_valid, missing_recipients, added_recipients).
        """
        if not reply.parent_message_id:
            return True, [], []

        original_recipients = self._original_threads.get(reply.parent_message_id)
        if not original_recipients:
            return True, [], []  # No thread record, can't enforce

        current_recipients = set(reply.all_recipients)
        original_set = set(original_recipients)

        # Original sender should also be in reply
        missing = list(original_set - current_recipients)
        added = list(current_recipients - original_set)

        is_valid = len(missing) == 0

        if not is_valid and self._audit_callback:
            self._audit_callback(
                AuditAction.REPLY_ENFORCE, reply.sender, "email", reply.message_id,
                {
                    "parent_message_id": reply.parent_message_id,
                    "missing_recipients": missing,
                    "added_recipients": added,
                    "original_count": len(original_recipients),
                    "current_count": len(current_recipients),
                },
                "enforced" if not is_valid else "pass",
            )

        return is_valid, missing, added

    def enforce_reply(self, reply: EmailMessage) -> EmailMessage:
        """
        Automatically add missing original recipients to the reply.
        Returns the modified email with all original recipients included.
        """
        is_valid, missing, _ = self.validate_reply(reply)

        if not is_valid:
            # Add missing recipients to CC
            for recipient in missing:
                if recipient not in reply.recipients and recipient != reply.sender:
                    reply.cc.append(recipient)

            reply.headers["X-V128-Reply-Enforced"] = "true"
            reply.headers["X-V128-Missing-Added"] = ",".join(missing)

            if self._audit_callback:
                self._audit_callback(
                    AuditAction.REPLY_ENFORCE, reply.sender, "email", reply.message_id,
                    {
                        "action": "auto_added_recipients",
                        "added": missing,
                    },
                    "enforced",
                )

        return reply

    def get_thread_info(self, message_id: str) -> Optional[Dict[str, Any]]:
        """Get thread recipient information."""
        recipients = self._original_threads.get(message_id)
        if recipients:
            return {
                "message_id": message_id,
                "recipient_count": len(recipients),
                "recipients": recipients,
            }
        return None


# ─────────────────────────────────────────────────────────────────────────────
# V128 Email Encryption Gateway (Main Orchestrator)
# ─────────────────────────────────────────────────────────────────────────────

class V128EmailEncryptionGateway:
    """
    Main gateway orchestrator that ties together all components:
    - Key management
    - Content classification
    - Encryption/decryption
    - Compliance checking
    - Secure file sharing
    - Audit trail
    - Reply-all enforcement
    """

    def __init__(self, organization: str = "Default Org"):
        self.organization = organization
        self.audit_trail = AuditTrail()
        self.key_manager = KeyManager()
        self.classifier = ContentClassifier()
        self.compliance = ComplianceChecker()
        self.encryption = EncryptionEngine(self.key_manager)
        self.file_sharing = SecureFileSharing(self.key_manager)
        self.reply_enforcer = ReplyAllEnforcer()

        # Wire up audit callbacks
        audit_cb = self._audit_callback
        self.key_manager.set_audit_callback(audit_cb)
        self.classifier.set_audit_callback(audit_cb)
        self.compliance.set_audit_callback(audit_cb)
        self.encryption.set_audit_callback(audit_cb)
        self.file_sharing.set_audit_callback(audit_cb)
        self.reply_enforcer.set_audit_callback(audit_cb)

        # Registered users and their key mappings
        self._users: Dict[str, Dict[str, Any]] = {}

    def _audit_callback(self, action: AuditAction, actor: str,
                        resource_type: str, resource_id: str,
                        details: Dict[str, Any], outcome: str = "success") -> None:
        """Central audit callback for all components."""
        self.audit_trail.log(action, actor, resource_type, resource_id, details, outcome)

    def register_user(self, email: str, name: str, department: str = "General") -> EncryptionKey:
        """Register a new user and generate their encryption key."""
        key = self.key_manager.generate_key(
            owner=email,
            algorithm=EncryptionAlgorithm.AES_256_GCM,
            validity_days=365,
        )
        self._users[email] = {
            "name": name,
            "department": department,
            "key_id": key.key_id,
            "registered_at": datetime.now(timezone.utc).isoformat(),
        }
        return key

    def process_outbound_email(self, email: EmailMessage) -> Dict[str, Any]:
        """
        Process an outbound email through the full encryption gateway pipeline:
        1. Classify content
        2. Check compliance
        3. Encrypt if required
        4. Register thread for reply enforcement
        5. Log all actions
        """
        result = {
            "message_id": email.message_id,
            "processed_at": datetime.now(timezone.utc).isoformat(),
            "steps": [],
        }

        # Step 1: Classify content
        classification = self.classifier.classify(
            email.body, email.subject, email.sender
        )
        email.classification = classification
        result["classification"] = classification.to_dict()
        result["steps"].append({
            "step": "classification",
            "sensitivity": classification.sensitivity.name,
            "categories": [c.name for c in classification.categories],
        })

        # Step 2: Encrypt if required
        encrypted = False
        if classification.requires_encryption():
            sender_key = self.key_manager.get_active_key_for_owner(email.sender)
            if not sender_key:
                sender_key = self.register_user(email.sender, email.sender.split("@")[0])

            recipient_keys = []
            for recipient in email.all_recipients:
                rkey = self.key_manager.get_active_key_for_owner(recipient)
                if not rkey:
                    rkey = self.register_user(recipient, recipient.split("@")[0])
                recipient_keys.append(rkey)

            # Encrypt
            payload = self.encryption.encrypt(email.body, sender_key, recipient_keys)
            email.encrypted_payload = json.dumps(payload)
            email.is_encrypted = True
            encrypted = True

            email.headers[ENCRYPTION_HEADER] = "true"
            email.headers[CLASSIFICATION_HEADER] = classification.sensitivity.name
            email.headers["X-V128-Algorithm"] = sender_key.algorithm.value
            email.headers["X-V128-Restrictions"] = "no-forward,no-print"
            email.headers["X-V128-Access-Control"] = "authenticated-only"

            result["encryption"] = {
                "applied": True,
                "algorithm": sender_key.algorithm.value,
                "recipient_count": len(recipient_keys),
                "payload_size": len(email.encrypted_payload),
            }
            result["steps"].append({
                "step": "encryption",
                "algorithm": sender_key.algorithm.value,
                "recipients": len(recipient_keys),
            })
        else:
            result["steps"].append({
                "step": "encryption",
                "applied": False,
                "reason": "Content does not require encryption",
            })

        # Step 3: Compliance checks
        compliance_results = self.compliance.check_all(email, classification, encrypted)
        result["compliance"] = [cr.to_dict() for cr in compliance_results]
        result["steps"].append({
            "step": "compliance",
            "frameworks_checked": len(compliance_results),
            "all_compliant": all(cr.compliant for cr in compliance_results),
            "violations": sum(len(cr.violations) for cr in compliance_results),
        })

        # Step 4: Register thread for reply enforcement
        self.reply_enforcer.register_thread(email.message_id, email.all_recipients)
        email.original_recipients = email.all_recipients
        result["steps"].append({
            "step": "reply_enforcement",
            "thread_registered": True,
            "tracked_recipients": len(email.all_recipients),
        })

        # Overall result
        result["final_action"] = (
            "encrypted_and_delivered" if encrypted else "delivered_unencrypted"
        )
        result["security_posture"] = classification.sensitivity.name

        return result

    def process_inbound_email(self, encrypted_email: EmailMessage,
                              recipient: str) -> Dict[str, Any]:
        """
        Process an inbound encrypted email:
        1. Verify encryption
        2. Decrypt for recipient
        3. Validate compliance
        4. Return decrypted content
        """
        result = {
            "message_id": encrypted_email.message_id,
            "recipient": recipient,
            "processed_at": datetime.now(timezone.utc).isoformat(),
            "steps": [],
        }

        if not encrypted_email.is_encrypted:
            result["error"] = "Email is not encrypted"
            result["steps"].append({"step": "decrypt", "status": "skipped", "reason": "not_encrypted"})
            return result

        # Get recipient's key
        recipient_key = self.key_manager.get_active_key_for_owner(recipient)
        if not recipient_key:
            result["error"] = "No valid key found for recipient"
            result["steps"].append({"step": "decrypt", "status": "failed", "reason": "no_key"})
            return result

        # Decrypt
        try:
            payload = json.loads(encrypted_email.encrypted_payload)
            plaintext = self.encryption.decrypt(payload, recipient_key)

            if plaintext:
                result["decrypted_body"] = plaintext
                result["steps"].append({"step": "decrypt", "status": "success"})
            else:
                result["error"] = "Decryption failed - possible tampering"
                result["steps"].append({"step": "decrypt", "status": "failed", "reason": "tamper_detected"})

        except json.JSONDecodeError:
            result["error"] = "Invalid encrypted payload format"
            result["steps"].append({"step": "decrypt", "status": "failed", "reason": "invalid_payload"})

        return result

    def process_reply(self, reply: EmailMessage) -> Dict[str, Any]:
        """Process a reply email with reply-all enforcement."""
        result = {
            "message_id": reply.message_id,
            "parent_message_id": reply.parent_message_id,
            "steps": [],
        }

        # Validate reply-all
        is_valid, missing, added = self.reply_enforcer.validate_reply(reply)

        result["reply_validation"] = {
            "is_valid": is_valid,
            "missing_recipients": missing,
            "extra_recipients": added,
        }

        if not is_valid:
            # Enforce: add missing recipients
            reply = self.reply_enforcer.enforce_reply(reply)
            result["enforcement_applied"] = True
            result["added_recipients"] = missing
            result["steps"].append({
                "step": "reply_enforcement",
                "action": "added_missing_recipients",
                "recipients_added": missing,
            })
        else:
            result["enforcement_applied"] = False
            result["steps"].append({"step": "reply_enforcement", "action": "all_recipients_present"})

        # Process through normal pipeline
        pipeline_result = self.process_outbound_email(reply)
        result["pipeline"] = pipeline_result

        return result

    def attach_secure_file(self, email: EmailMessage, filename: str,
                           content: bytes, expiration_hours: int = 72,
                           max_downloads: int = 5) -> SecureAttachment:
        """Attach a securely shared file to an email."""
        attachment = self.file_sharing.upload_secure_file(
            filename=filename,
            content=content,
            uploader=email.sender,
            allowed_recipients=email.all_recipients,
            expiration_hours=expiration_hours,
            max_downloads=max_downloads,
            password_protected=True,
        )
        email.attachments.append(attachment)
        return attachment

    def get_gateway_status(self) -> Dict[str, Any]:
        """Get comprehensive gateway status report."""
        return {
            "version": V128_VERSION,
            "protocol": V128_PROTOCOL,
            "organization": self.organization,
            "registered_users": len(self._users),
            "key_management": self.key_manager.get_statistics(),
            "audit_entries": len(self.audit_trail._entries),
            "audit_statistics": self.audit_trail.get_statistics(),
            "secure_files": len(self.file_sharing._files),
            "tracked_threads": len(self.reply_enforcer._original_threads),
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }


# ─────────────────────────────────────────────────────────────────────────────
# Demo / Main
# ─────────────────────────────────────────────────────────────────────────────

def print_section(title: str, width: int = 80) -> None:
    """Print a formatted section header."""
    print(f"\n{'=' * width}")
    print(f"  {title}")
    print(f"{'=' * width}")


def print_subsection(title: str) -> None:
    """Print a formatted subsection header."""
    print(f"\n  ─── {title} {'─' * (70 - len(title))}")


def print_kv(key: str, value: Any, indent: int = 4) -> None:
    """Print a key-value pair with formatting."""
    prefix = " " * indent
    if isinstance(value, list):
        print(f"{prefix}{key}:")
        for item in value:
            print(f"{prefix}  • {item}")
    elif isinstance(value, dict):
        print(f"{prefix}{key}:")
        for k, v in value.items():
            print(f"{prefix}  {k}: {v}")
    else:
        print(f"{prefix}{key}: {value}")


def main():
    """Full demonstration of the V128 Email Encryption Gateway."""
    print_section("V128 EMAIL ENCRYPTION GATEWAY - DEMONSTRATION")
    print(f"  Version: {V128_VERSION} | Protocol: {V128_PROTOCOL}")
    print(f"  Timestamp: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}")

    # ── Initialize Gateway ───────────────────────────────────────────────────
    gateway = V128EmailEncryptionGateway(organization="Acme Healthcare Corp")

    print_section("1. USER REGISTRATION & KEY MANAGEMENT")

    users = [
        ("alice@acme.com", "Alice Johnson", "Executive"),
        ("bob@acme.com", "Bob Smith", "Legal"),
        ("carol@acme.com", "Carol Davis", "Engineering"),
        ("dave@hospital.org", "Dave Wilson", "Medical Records"),
        ("eve@partner.com", "Eve Martinez", "External Partner"),
    ]

    registered_keys = {}
    for email, name, dept in users:
        key = gateway.register_user(email, name, dept)
        registered_keys[email] = key
        print(f"  ✓ Registered {name} ({dept})")
        print(f"    Key ID: {key.key_id}")
        print(f"    Fingerprint: {key.fingerprint[:24]}...")
        print(f"    Algorithm: {key.algorithm.value}")
        print()

    print_kv("Key Statistics", gateway.key_manager.get_statistics())

    # ── Test Email 1: PII + Financial (CONFIDENTIAL) ────────────────────────
    print_section("2. TEST EMAIL: PII + FINANCIAL DATA (CONFIDENTIAL)")

    email1 = EmailMessage(
        message_id=f"msg-{uuid.uuid4().hex[:8]}",
        sender="alice@acme.com",
        recipients=["bob@acme.com"],
        cc=["carol@acme.com"],
        subject="Q4 Financial Report - Employee Compensation Review",
        body="""Dear Bob,

Please find the Q4 compensation review details below:

Employee: John Doe
SSN: 123-45-6789
Date of Birth: 03/15/1985
Bank Account Number: 12345678901234
Routing Number: 021000089
Current Salary: $125,000
Proposed Raise: $137,500

Employee: Jane Smith
SSN: 987-65-4321
Tax ID: 12-3456789
Wire Transfer to: Account 9876543210
SWIFT: BOFAUS3N

Please review and approve by EOD Friday.

Best regards,
Alice Johnson
VP of Finance
""",
    )

    result1 = gateway.process_outbound_email(email1)
    print_subsection("Classification Result")
    print_kv("Sensitivity", result1["classification"]["sensitivity"])
    print_kv("Categories", result1["classification"]["categories"])
    print_kv("Confidence", result1["classification"]["confidence"])
    print_kv("Detected Patterns", f"{len(result1['classification']['detected_patterns'])} patterns found")

    print_subsection("Encryption")
    if "encryption" in result1:
        print_kv("Applied", result1["encryption"]["applied"])
        print_kv("Algorithm", result1["encryption"]["algorithm"])
        print_kv("Recipients", result1["encryption"]["recipient_count"])
        print_kv("Payload Size", f"{result1['encryption']['payload_size']} bytes")

    print_subsection("Compliance Results")
    for cr in result1["compliance"]:
        status = "✓ PASS" if cr["compliant"] else "✗ FAIL"
        print(f"    [{status}] {cr['framework']} (Score: {cr['score']})")
        if cr["violations"]:
            for v in cr["violations"]:
                print(f"      ⚠ Violation: {v}")

    # ── Test Email 2: Health Data (RESTRICTED - HIPAA) ──────────────────────
    print_section("3. TEST EMAIL: PROTECTED HEALTH INFORMATION (RESTRICTED)")

    email2 = EmailMessage(
        message_id=f"msg-{uuid.uuid4().hex[:8]}",
        sender="dave@hospital.org",
        recipients=["alice@acme.com"],
        cc=[],
        subject="Patient Treatment Update - HIPAA Protected",
        body="""Dear Alice,

This message contains Protected Health Information (PHI) under HIPAA.

Patient MRN: MRN-2024-08834
Patient Name: Robert Thompson
Date of Birth: 07/22/1972
Insurance ID: BCBS-992837465

Diagnosis: Type 2 Diabetes Mellitus with neuropathy
Treatment Plan: Metformin 1000mg BID, Gabapentin 300mg TID
Lab Results: HbA1c 8.2%, Fasting Glucose 186 mg/dL
Prognosis: Stable with medication compliance

Allergies: Penicillin, Sulfa drugs
Immunization: Flu vaccine administered 10/15/2024

Please ensure this information is handled per HIPAA requirements.
Minimum necessary standard applies.

Regards,
Dave Wilson
Medical Records Department
""",
    )

    result2 = gateway.process_outbound_email(email2)
    print_subsection("Classification Result")
    print_kv("Sensitivity", result2["classification"]["sensitivity"])
    print_kv("Categories", result2["classification"]["categories"])
    print_kv("Recommended Action", result2["classification"]["recommended_action"])

    print_subsection("Compliance Results")
    for cr in result2["compliance"]:
        status = "✓ PASS" if cr["compliant"] else "✗ FAIL"
        print(f"    [{status}] {cr['framework']} (Score: {cr['score']})")
        for v in cr["violations"]:
            print(f"      ⚠ Violation: {v}")
        for w in cr["warnings"]:
            print(f"      ⚡ Warning: {w}")

    # ── Test Email 3: Trade Secrets (TOP SECRET) ────────────────────────────
    print_section("4. TEST EMAIL: TRADE SECRETS (TOP SECRET)")

    email3 = EmailMessage(
        message_id=f"msg-{uuid.uuid4().hex[:8]}",
        sender="carol@acme.com",
        recipients=["alice@acme.com", "bob@acme.com"],
        cc=[],
        subject="CONFIDENTIAL - Proprietary Algorithm Update - Eyes Only",
        body="""INTERNAL USE ONLY - DO NOT DISTRIBUTE

Team,

The proprietary recommendation algorithm v4.2 has been updated.
This is a trade secret and must not be shared outside the core team.

Key changes:
- Source code update: API key sk-proj-abc123def456ghi789jkl012mno345
- New weighting factor for competitive intelligence analysis
- Patent pending on the novel clustering approach

The market strategy for Q1 involves:
- Pricing model: tiered subscription at $49/$99/$299/month
- Competitive intelligence shows our main competitor is 3 months behind

Access the patent application draft:
Secret key: aHR0cHM6Ly9zZWNyZXQuZXhhbXBsZS5jb20va2V5

Remember: This information is classified as Eyes Only.
Any unauthorized disclosure is strictly prohibited.

Carol Davis
Chief Technology Officer
""",
    )

    result3 = gateway.process_outbound_email(email3)
    print_subsection("Classification Result")
    print_kv("Sensitivity", result3["classification"]["sensitivity"])
    print_kv("Categories", result3["classification"]["categories"])
    print_kv("PII Entities Detected", result3["classification"]["pii_entities_count"])

    print_subsection("Encryption Applied")
    if "encryption" in result3:
        print_kv("Algorithm", result3["encryption"]["algorithm"])
        print_kv("Payload Size", f"{result3['encryption']['payload_size']} bytes")

    print_subsection("Compliance Results")
    for cr in result3["compliance"]:
        status = "✓ PASS" if cr["compliant"] else "✗ FAIL"
        print(f"    [{status}] {cr['framework']} (Score: {cr['score']})")

    # ── Test Email 4: Legal Privileged (CONFIDENTIAL) ───────────────────────
    print_section("5. TEST EMAIL: LEGAL PRIVILEGED COMMUNICATION")

    email4 = EmailMessage(
        message_id=f"msg-{uuid.uuid4().hex[:8]}",
        sender="bob@acme.com",
        recipients=["alice@acme.com"],
        cc=[],
        subject="Attorney-Client Privilege - Litigation Strategy",
        body="""PRIVILEGED AND CONFIDENTIAL - ATTORNEY-CLIENT COMMUNICATION

Alice,

Regarding the pending litigation (Case #2024-CV-88934):

The deposition is scheduled for next Tuesday. Our strategy
involves the settlement offer of $2.5M which we discussed.

The NDA signed effective 01/15/2024 covers all communications
related to this matter. Please do not discuss outside counsel.

The affidavit from the expert witness states under oath that
the contract dated 06/30/2023 was properly executed.

Please review and respond by EOD.

Bob Smith
General Counsel
""",
    )

    result4 = gateway.process_outbound_email(email4)
    print_subsection("Classification Result")
    print_kv("Sensitivity", result4["classification"]["sensitivity"])
    print_kv("Categories", result4["classification"]["categories"])

    # ── Test Email 5: Public/Low Sensitivity ────────────────────────────────
    print_section("6. TEST EMAIL: PUBLIC CONTENT (NO ENCRYPTION NEEDED)")

    email5 = EmailMessage(
        message_id=f"msg-{uuid.uuid4().hex[:8]}",
        sender="alice@acme.com",
        recipients=["carol@acme.com"],
        cc=[],
        subject="Team Lunch This Friday",
        body="""Hi Carol,

Just a reminder that we're having team lunch this Friday at noon.
The restaurant is Mario's Italian on 5th Street.

Let me know if you have any dietary restrictions!

Best,
Alice
""",
    )

    result5 = gateway.process_outbound_email(email5)
    print_subsection("Classification Result")
    print_kv("Sensitivity", result5["classification"]["sensitivity"])
    print_kv("Categories", result5["classification"]["categories"])
    print_kv("Final Action", result5["final_action"])

    # ── Secure File Sharing Demo ────────────────────────────────────────────
    print_section("7. SECURE FILE SHARING")

    # Attach a sensitive file
    sensitive_doc = b"CONFIDENTIAL: Q4 Board Report - Revenue projections and strategic plans..."
    attachment = gateway.attach_secure_file(
        email=email1,
        filename="Q4_Board_Report_2024.pdf",
        content=sensitive_doc,
        expiration_hours=48,
        max_downloads=3,
    )

    print_subsection("File Upload")
    print_kv("Attachment ID", attachment.attachment_id)
    print_kv("Filename", attachment.filename)
    print_kv("Size", f"{attachment.size_bytes} bytes")
    print_kv("Expires", attachment.expires_at.strftime('%Y-%m-%d %H:%M UTC') if attachment.expires_at else "Never")
    print_kv("Max Downloads", attachment.max_downloads)
    print_kv("Password Protected", attachment.password_protected)

    # Test access - authorized user
    print_subsection("Access Tests")
    success, content, msg = gateway.file_sharing.access_file(attachment.attachment_id, "bob@acme.com")
    print(f"  Bob (authorized): {'✓' if success else '✗'} {msg}")

    success, content, msg = gateway.file_sharing.access_file(attachment.attachment_id, "carol@acme.com")
    print(f"  Carol (authorized): {'✓' if success else '✗'} {msg}")

    success, content, msg = gateway.file_sharing.access_file(attachment.attachment_id, "hacker@evil.com")
    print(f"  Hacker (unauthorized): {'✓' if success else '✗'} {msg}")

    # ── Reply-All Enforcement Demo ──────────────────────────────────────────
    print_section("8. REPLY-ALL ENFORCEMENT")

    # Create a reply that's missing a recipient
    reply1 = EmailMessage(
        message_id=f"msg-{uuid.uuid4().hex[:8]}",
        sender="bob@acme.com",
        recipients=["alice@acme.com"],  # Missing carol@acme.com!
        cc=[],
        subject="Re: Q4 Financial Report - Employee Compensation Review",
        body="""Alice,

I've reviewed the numbers and everything looks good.
Please proceed with the approvals.

Bob
""",
        parent_message_id=email1.message_id,
    )

    print_subsection("Reply Validation (Missing Recipient)")
    reply_result = gateway.process_reply(reply1)
    print_kv("Valid", reply_result["reply_validation"]["is_valid"])
    print_kv("Missing Recipients", reply_result["reply_validation"]["missing_recipients"])
    print_kv("Enforcement Applied", reply_result.get("enforcement_applied", False))
    if reply_result.get("added_recipients"):
        print_kv("Auto-Added", reply_result["added_recipients"])

    # Create a reply with all recipients present
    reply2 = EmailMessage(
        message_id=f"msg-{uuid.uuid4().hex[:8]}",
        sender="carol@acme.com",
        recipients=["alice@acme.com", "bob@acme.com"],
        cc=[],
        subject="Re: Q4 Financial Report - Employee Compensation Review",
        body="""Thanks for including me. I'll update the engineering budget accordingly.

Carol
""",
        parent_message_id=email1.message_id,
    )

    print_subsection("Reply Validation (All Recipients Present)")
    reply_result2 = gateway.process_reply(reply2)
    print_kv("Valid", reply_result2["reply_validation"]["is_valid"])
    print_kv("Enforcement Applied", reply_result2.get("enforcement_applied", False))

    # ── Decryption Demo ───────────────────────────────────────────────────
    print_section("9. INBOUND DECRYPTION")

    # Process encrypted email for a recipient
    decrypt_result = gateway.process_inbound_email(email1, "bob@acme.com")
    print_subsection("Decryption by Bob")
    print_kv("Status", "Success" if "decrypted_body" in decrypt_result else "Failed")
    if "decrypted_body" in decrypt_result:
        preview = decrypt_result["decrypted_body"][:120] + "..."
        print_kv("Preview", preview)
        print_kv("Length", f"{len(decrypt_result['decrypted_body'])} characters")

    # Try unauthorized decryption
    decrypt_result_fail = gateway.process_inbound_email(email1, "eve@partner.com")
    print_subsection("Decryption by Eve (Not a Recipient)")
    print_kv("Status", "Success" if "decrypted_body" in decrypt_result_fail else "Failed")
    if "error" in decrypt_result_fail:
        print_kv("Error", decrypt_result_fail["error"])

    # ── Key Rotation Demo ───────────────────────────────────────────────────
    print_section("10. KEY ROTATION")

    alice_key = registered_keys["alice@acme.com"]
    print_subsection("Before Rotation")
    print_kv("Key ID", alice_key.key_id)
    print_kv("Status", alice_key.status.name)
    print_kv("Rotation Count", alice_key.rotation_count)

    new_key = gateway.key_manager.rotate_key(alice_key.key_id, "alice@acme.com")
    print_subsection("After Rotation")
    print_kv("Old Key Status", alice_key.status.name)
    print_kv("New Key ID", new_key.key_id)
    print_kv("New Fingerprint", new_key.fingerprint[:24] + "...")
    print_kv("Rotation Count", new_key.rotation_count)

    # Revoke a key
    gateway.key_manager.revoke_key(
        registered_keys["eve@partner.com"].key_id,
        "admin@acme.com",
        "Partnership terminated - immediate revocation required"
    )
    print_subsection("Key Revocation")
    eve_key = registered_keys["eve@partner.com"]
    print_kv("Eve's Key Status", eve_key.status.name)
    print_kv("Revocation Reason", eve_key.revoked_reason)

    # ── Audit Trail Report ──────────────────────────────────────────────────
    print_section("11. AUDIT TRAIL REPORT")

    audit_stats = gateway.audit_trail.get_statistics()
    print_subsection("Statistics")
    print_kv("Total Entries", audit_stats["total_entries"])
    print_kv("Actions Breakdown", audit_stats["by_action"])
    print_kv("Outcomes", audit_stats["by_outcome"])
    print_kv("Active Actors", len(audit_stats["by_actor"]))

    print_subsection("Recent Audit Entries (Last 10)")
    recent = gateway.audit_trail.query(limit=10)
    for entry in recent:
        print(f"    [{entry.timestamp.strftime('%H:%M:%S')}] "
              f"{entry.action.value:30s} | {entry.actor:25s} | {entry.outcome}")

    # Seal and get integrity hash
    seal_hash = gateway.audit_trail.seal()
    print_subsection("Audit Trail Sealed")
    print_kv("Integrity Hash (SHA-256)", seal_hash[:48] + "...")

    # ── Gateway Status ──────────────────────────────────────────────────────
    print_section("12. GATEWAY STATUS SUMMARY")

    status = gateway.get_gateway_status()
    print_kv("Version", status["version"])
    print_kv("Protocol", status["protocol"])
    print_kv("Organization", status["organization"])
    print_kv("Registered Users", status["registered_users"])
    print_kv("Total Keys", status["key_management"]["total"])
    print_kv("Active Keys", status["key_management"]["active"])
    print_kv("Audit Entries", status["audit_entries"])
    print_kv("Secure Files", status["secure_files"])
    print_kv("Tracked Threads", status["tracked_threads"])

    print_section("DEMONSTRATION COMPLETE")
    print("  V128 Email Encryption Gateway processed:")
    print("  • 5 test emails with varying sensitivity levels")
    print("  • 3 content categories detected (PII, Financial, Health, Legal, Trade Secrets)")
    print("  • 4 compliance frameworks validated (HIPAA, GDPR, SOC 2, PCI-DSS)")
    print("  • Secure file sharing with access controls demonstrated")
    print("  • Reply-all enforcement validated and enforced")
    print("  • Key lifecycle management (generate, rotate, revoke) demonstrated")
    print(f"  • {status['audit_entries']} audit trail entries recorded")
    print(f"{'=' * 80}\n")


if __name__ == "__main__":
    main()

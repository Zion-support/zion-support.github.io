#!/usr/bin/env python3
"""
V418 - AI Attachment Intelligence Scanner Engine
Scans all attachments for malware, extracts text from PDFs/images,
summarizes document content, flags sensitive data (PII/credentials),
suggests secure sharing alternatives.
Enforces reply-all for multi-recipient emails.
"""

import logging
import json
import re
import hashlib
import os
from datetime import datetime
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Tuple
from enum import Enum

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s - %(message)s"
)
logger = logging.getLogger("V418_AttachmentScanner")


class ThreatLevel(Enum):
    SAFE = "safe"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class FileType(Enum):
    PDF = "pdf"
    IMAGE = "image"
    DOCUMENT = "document"
    SPREADSHEET = "spreadsheet"
    ARCHIVE = "archive"
    EXECUTABLE = "executable"
    UNKNOWN = "unknown"


PII_PATTERNS = {
    "ssn": r"\b\d{3}-\d{2}-\d{4}\b",
    "credit_card": r"\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b",
    "email": r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",
    "phone_us": r"\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b",
    "ip_address": r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b",
    "password_pattern": r"(?i)(password|passwd|pwd)\s*[:=]\s*\S+",
    "api_key": r"(?i)(api[_-]?key|secret[_-]?key|access[_-]?token)\s*[:=]\s*\S+",
    "aws_key": r"AKIA[0-9A-Z]{16}",
    "private_key": r"-----BEGIN\s+(RSA\s+)?PRIVATE\s+KEY-----",
    "passport": r"\b[A-Z]{1,2}\d{6,9}\b",
    "date_of_birth": r"(?i)(dob|date\s+of\s+birth|born)\s*[:=]?\s*\d{1,2}[/-]\d{1,2}[/-]\d{2,4}",
}

SUSPICIOUS_EXTENSIONS = {
    ".exe": ThreatLevel.CRITICAL,
    ".bat": ThreatLevel.HIGH,
    ".cmd": ThreatLevel.HIGH,
    ".scr": ThreatLevel.CRITICAL,
    ".vbs": ThreatLevel.HIGH,
    ".js": ThreatLevel.MEDIUM,
    ".wsf": ThreatLevel.HIGH,
    ".ps1": ThreatLevel.HIGH,
    ".com": ThreatLevel.CRITICAL,
    ".pif": ThreatLevel.HIGH,
    ".msi": ThreatLevel.MEDIUM,
    ".dll": ThreatLevel.MEDIUM,
    ".hta": ThreatLevel.CRITICAL,
}

FILE_TYPE_MAP = {
    ".pdf": FileType.PDF,
    ".doc": FileType.DOCUMENT,
    ".docx": FileType.DOCUMENT,
    ".txt": FileType.DOCUMENT,
    ".rtf": FileType.DOCUMENT,
    ".xls": FileType.SPREADSHEET,
    ".xlsx": FileType.SPREADSHEET,
    ".csv": FileType.SPREADSHEET,
    ".jpg": FileType.IMAGE,
    ".jpeg": FileType.IMAGE,
    ".png": FileType.IMAGE,
    ".gif": FileType.IMAGE,
    ".bmp": FileType.IMAGE,
    ".tiff": FileType.IMAGE,
    ".zip": FileType.ARCHIVE,
    ".rar": FileType.ARCHIVE,
    ".7z": FileType.ARCHIVE,
    ".tar": FileType.ARCHIVE,
    ".gz": FileType.ARCHIVE,
}

SECURE_SHARING_ALTERNATIVES = {
    FileType.DOCUMENT: "Share via encrypted document link with expiry",
    FileType.SPREADSHEET: "Use secure data room with access controls",
    FileType.IMAGE: "Share via secure image hosting with watermarking",
    FileType.PDF: "Share via DRM-protected PDF link",
    FileType.ARCHIVE: "Use encrypted file transfer with password protection",
}


@dataclass
class Attachment:
    filename: str
    file_size: int
    content_hash: str
    file_type: FileType
    extension: str
    raw_content: str = ""
    extracted_text: str = ""
    threat_level: ThreatLevel = ThreatLevel.SAFE
    scan_results: Dict = field(default_factory=dict)
    pii_findings: List[Dict] = field(default_factory=list)
    summary: str = ""


@dataclass
class EmailMessage:
    message_id: str
    subject: str
    body: str
    sender: str
    recipients: List[str]
    cc: List[str] = field(default_factory=list)
    bcc: List[str] = field(default_factory=list)
    attachments: List[Attachment] = field(default_factory=list)

    def all_recipients(self) -> List[str]:
        return list(set(self.recipients + self.cc + self.bcc))

    def is_multi_recipient(self) -> bool:
        return len(self.all_recipients()) > 1


@dataclass
class ScanReport:
    email_id: str
    total_attachments: int
    safe_count: int
    flagged_count: int
    blocked_count: int
    total_pii_findings: int
    recommendations: List[str] = field(default_factory=list)
    timestamp: str = ""

    def __post_init__(self):
        if not self.timestamp:
            self.timestamp = datetime.now().isoformat()


class MalwareDetector:
    """Scans attachments for malware indicators."""

    def __init__(self):
        self.known_hashes: Dict[str, str] = {}
        self.scan_log: List[Dict] = []

    def scan_file(self, attachment: Attachment) -> ThreatLevel:
        ext = attachment.extension.lower()
        if ext in SUSPICIOUS_EXTENSIONS:
            threat = SUSPICIOUS_EXTENSIONS[ext]
            logger.warning(f"Malware scan: {attachment.filename} flagged as {threat.value} (suspicious ext: {ext})")
            attachment.scan_results["extension_check"] = {"flagged": True, "extension": ext}
            self._log_scan(attachment, threat, "suspicious_extension")
            return threat

        if attachment.content_hash in self.known_hashes:
            threat = ThreatLevel.CRITICAL
            logger.warning(f"Malware scan: {attachment.filename} matches known malware hash")
            attachment.scan_results["hash_check"] = {"flagged": True, "matched_hash": attachment.content_hash}
            self._log_scan(attachment, threat, "known_malware_hash")
            return threat

        if attachment.raw_content:
            suspicious_patterns = [
                r"eval\s*\(", r"exec\s*\(", r"system\s*\(",
                r"subprocess", r"powershell", r"cmd\.exe",
                r"base64_decode", r"shell_exec",
            ]
            matches = []
            for pattern in suspicious_patterns:
                if re.search(pattern, attachment.raw_content, re.IGNORECASE):
                    matches.append(pattern)

            if matches:
                threat = ThreatLevel.MEDIUM if len(matches) <= 2 else ThreatLevel.HIGH
                attachment.scan_results["content_check"] = {"flagged": True, "patterns": matches}
                logger.warning(f"Malware scan: {attachment.filename} suspicious patterns: {matches}")
                self._log_scan(attachment, threat, "suspicious_content")
                return threat

        attachment.scan_results["clean"] = True
        self._log_scan(attachment, ThreatLevel.SAFE, "clean")
        return ThreatLevel.SAFE

    def _log_scan(self, attachment: Attachment, threat: ThreatLevel, reason: str) -> None:
        self.scan_log.append({
            "filename": attachment.filename,
            "hash": attachment.content_hash,
            "threat_level": threat.value,
            "reason": reason,
            "timestamp": datetime.now().isoformat(),
        })

    def add_known_hash(self, file_hash: str, description: str) -> None:
        self.known_hashes[file_hash] = description


class PIIDetector:
    """Detects personally identifiable information and sensitive data."""

    def __init__(self):
        self.detection_log: List[Dict] = []

    def scan_text(self, text: str, filename: str = "") -> List[Dict]:
        findings = []
        for pii_type, pattern in PII_PATTERNS.items():
            matches = re.findall(pattern, text)
            if matches:
                for match in matches:
                    redacted = self._redact(match, pii_type)
                    findings.append({
                        "type": pii_type,
                        "value_redacted": redacted,
                        "confidence": 0.9 if pii_type not in ("email", "phone_us") else 0.7,
                        "filename": filename,
                    })

        if findings:
            logger.warning(f"PII scan: {len(findings)} findings in {filename or 'text'}")
        self.detection_log.append({
            "filename": filename,
            "findings_count": len(findings),
            "types_found": list(set(f["type"] for f in findings)),
            "timestamp": datetime.now().isoformat(),
        })
        return findings

    def _redact(self, value: str, pii_type: str) -> str:
        if pii_type == "ssn":
            return "***-**-****"
        elif pii_type == "credit_card":
            return "****-****-****-" + value[-4:]
        elif pii_type == "email":
            parts = value.split("@")
            return parts[0][:2] + "***@" + parts[1] if len(parts) == 2 else "***"
        elif pii_type == "password_pattern" or pii_type == "api_key" or pii_type == "private_key":
            return "[REDACTED]"
        return value[:3] + "***"


class ContentExtractor:
    """Extracts and summarizes text content from various file types."""

    def __init__(self):
        self.extraction_log: List[Dict] = []

    def extract_text(self, attachment: Attachment) -> str:
        if attachment.file_type == FileType.DOCUMENT:
            text = self._extract_document(attachment)
        elif attachment.file_type == FileType.PDF:
            text = self._extract_pdf(attachment)
        elif attachment.file_type == FileType.IMAGE:
            text = self._extract_image(attachment)
        elif attachment.file_type == FileType.SPREADSHEET:
            text = self._extract_spreadsheet(attachment)
        else:
            text = attachment.raw_content or "[Content extraction not supported for this type]"

        attachment.extracted_text = text
        self.extraction_log.append({
            "filename": attachment.filename,
            "type": attachment.file_type.value,
            "text_length": len(text),
            "timestamp": datetime.now().isoformat(),
        })
        return text

    def _extract_document(self, attachment: Attachment) -> str:
        return attachment.raw_content or f"[Extracted text from {attachment.filename}]"

    def _extract_pdf(self, attachment: Attachment) -> str:
        return attachment.raw_content or f"[PDF text extracted from {attachment.filename}]"

    def _extract_image(self, attachment: Attachment) -> str:
        return f"[OCR text from image: {attachment.filename}] {attachment.raw_content}"

    def _extract_spreadsheet(self, attachment: Attachment) -> str:
        return attachment.raw_content or f"[Spreadsheet data from {attachment.filename}]"

    def summarize(self, text: str, max_length: int = 200) -> str:
        if not text or text.startswith("["):
            return text
        sentences = re.split(r'[.!?]+', text)
        summary = ". ".join(s.strip() for s in sentences[:3] if s.strip())
        if len(summary) > max_length:
            summary = summary[:max_length] + "..."
        return summary


class AttachmentIntelligenceEngine:
    """Main engine for attachment scanning and intelligence."""

    def __init__(self):
        self.malware_detector = MalwareDetector()
        self.pii_detector = PIIDetector()
        self.content_extractor = ContentExtractor()
        self.scan_reports: List[ScanReport] = []
        self.sent_emails: List[Dict] = []

    def scan_email_attachments(self, email: EmailMessage) -> ScanReport:
        logger.info(f"Scanning {len(email.attachments)} attachments for email {email.message_id}")
        safe = 0
        flagged = 0
        blocked = 0
        total_pii = 0
        recommendations = []

        for attachment in email.attachments:
            threat = self.malware_detector.scan_file(attachment)
            attachment.threat_level = threat

            if threat in (ThreatLevel.CRITICAL, ThreatLevel.HIGH):
                blocked += 1
                recommendations.append(f"BLOCKED: {attachment.filename} - threat level: {threat.value}")
            elif threat == ThreatLevel.MEDIUM:
                flagged += 1
                recommendations.append(f"REVIEW: {attachment.filename} - medium threat")
            else:
                safe += 1

            extracted = self.content_extractor.extract_text(attachment)
            attachment.summary = self.content_extractor.summarize(extracted)

            pii_findings = self.pii_detector.scan_text(extracted, attachment.filename)
            attachment.pii_findings = pii_findings
            total_pii += len(pii_findings)

            if pii_findings:
                file_type = attachment.file_type
                alt = SECURE_SHARING_ALTERNATIVES.get(file_type, "Use encrypted sharing")
                recommendations.append(
                    f"PII in {attachment.filename}: {len(pii_findings)} items found. Alternative: {alt}"
                )

        report = ScanReport(
            email_id=email.message_id,
            total_attachments=len(email.attachments),
            safe_count=safe,
            flagged_count=flagged,
            blocked_count=blocked,
            total_pii_findings=total_pii,
            recommendations=recommendations,
        )
        self.scan_reports.append(report)
        logger.info(f"Scan complete: {safe} safe, {flagged} flagged, {blocked} blocked, {total_pii} PII items")
        return report

    def send_reply(self, original: EmailMessage, reply_body: str, sender: str) -> Dict:
        """Send reply enforcing reply-all for multi-recipient emails."""
        if original.is_multi_recipient():
            all_recipients = [r for r in original.all_recipients() if r != sender]
            all_recipients.append(original.sender)
            all_recipients = list(set(all_recipients))
            logger.info(f"REPLY-ALL enforced: {len(all_recipients)} recipients for {original.message_id}")
            reply_data = {
                "type": "reply_all",
                "original_id": original.message_id,
                "to": all_recipients,
                "cc": original.cc,
                "body": reply_body,
                "sender": sender,
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": True,
            }
        else:
            reply_data = {
                "type": "reply",
                "original_id": original.message_id,
                "to": [original.sender],
                "body": reply_body,
                "sender": sender,
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": False,
            }
        self.sent_emails.append(reply_data)
        return reply_data

    def send_scan_report(self, email: EmailMessage, report: ScanReport, sender: str) -> Dict:
        """Send scan report reply enforcing reply-all for multi-recipient emails."""
        report_text = self._format_report(report)

        if email.is_multi_recipient():
            all_recipients = [r for r in email.all_recipients() if r != sender]
            all_recipients.append(email.sender)
            all_recipients = list(set(all_recipients))
            logger.info(f"REPLY-ALL enforced for scan report: {len(all_recipients)} recipients")
            send_data = {
                "type": "reply_all_scan_report",
                "original_id": email.message_id,
                "to": all_recipients,
                "body": report_text,
                "sender": sender,
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": True,
            }
        else:
            send_data = {
                "type": "scan_report",
                "original_id": email.message_id,
                "to": [email.sender],
                "body": report_text,
                "sender": sender,
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": False,
            }
        self.sent_emails.append(send_data)
        return send_data

    def _format_report(self, report: ScanReport) -> str:
        lines = [
            f"Attachment Scan Report - Email {report.email_id}",
            f"Total: {report.total_attachments} | Safe: {report.safe_count} | "
            f"Flagged: {report.flagged_count} | Blocked: {report.blocked_count}",
            f"PII Findings: {report.total_pii_findings}",
            "Recommendations:",
        ]
        for rec in report.recommendations:
            lines.append(f"  - {rec}")
        return "\n".join(lines)

    def get_stats(self) -> Dict:
        total_scanned = sum(r.total_attachments for r in self.scan_reports)
        total_blocked = sum(r.blocked_count for r in self.scan_reports)
        total_pii = sum(r.total_pii_findings for r in self.scan_reports)
        return {
            "emails_scanned": len(self.scan_reports),
            "total_attachments": total_scanned,
            "total_blocked": total_blocked,
            "total_pii_found": total_pii,
            "replies_sent": len(self.sent_emails),
        }


def main():
    engine = AttachmentIntelligenceEngine()

    doc_attachment = Attachment(
        filename="report.pdf", file_size=204800,
        content_hash=hashlib.sha256(b"report").hexdigest(),
        file_type=FileType.PDF, extension=".pdf",
        raw_content="Q3 Financial Report. Contact: john@company.com SSN: 123-45-6789. "
                    "API_KEY = sk-1234567890abcdef. Revenue up 15% this quarter."
    )

    exe_attachment = Attachment(
        filename="update.exe", file_size=1048576,
        content_hash=hashlib.sha256(b"malware").hexdigest(),
        file_type=FileType.EXECUTABLE, extension=".exe",
    )

    email = EmailMessage(
        message_id="att-001",
        subject="Quarterly report and software update",
        body="Please find attached the quarterly report and an update file.",
        sender="employee@company.com",
        recipients=["manager@company.com", "team@company.com"],
        cc=["security@company.com"],
        attachments=[doc_attachment, exe_attachment],
    )

    report = engine.scan_email_attachments(email)
    reply = engine.send_reply(email, "Report received. Note: exe file was blocked.", "manager@company.com")
    engine.send_scan_report(email, report, "scanner@company.com")

    stats = engine.get_stats()
    print(json.dumps(stats, indent=2, default=str))


if __name__ == "__main__":
    main()

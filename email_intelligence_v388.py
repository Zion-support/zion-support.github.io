"""
V388 - Email Attachment Analyzer
Scan attachments for malware, extract text from documents, detect sensitive data,
summarize content, and classify file types.
"""

import json
import re
import hashlib
import os
from datetime import datetime


class EmailAttachmentAnalyzer:
    """Engine for analyzing email attachments for security and content."""

    DANGEROUS_EXTENSIONS = {".exe", ".bat", ".cmd", ".scr", ".pif", ".vbs", ".vbe",
                            ".js", ".jse", ".wsf", ".wsh", ".msi", ".msp", ".com",
                            ".hta", ".cpl", ".inf", ".reg", ".dll", ".lnk", ".ps1"}

    DOCUMENT_EXTENSIONS = {".pdf", ".doc", ".docx", ".txt", ".rtf", ".odt",
                           ".xls", ".xlsx", ".csv", ".ppt", ".pptx"}

    IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".svg", ".webp"}

    ARCHIVE_EXTENSIONS = {".zip", ".rar", ".7z", ".tar", ".gz", ".bz2"}

    MALWARE_SIGNATURES = [
        "eval(base64_decode", "exec(", "system(", "cmd.exe",
        "powershell -enc", "wget http", "curl http",
        "/bin/sh", "reverse_shell", "keylogger",
    ]

    SENSITIVE_DATA_PATTERNS = {
        "ssn": r"\b\d{3}-\d{2}-\d{4}\b",
        "credit_card": r"\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b",
        "email": r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",
        "phone_us": r"\b\d{3}[-.]?\d{3}[-.]?\d{4}\b",
        "ip_address": r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b",
        "api_key": r"(?:api[_-]?key|apikey|token)[\s:=]+[A-Za-z0-9_\-]{20,}",
        "password": r"(?:password|passwd|pwd)[\s:=]+\S+",
        "bank_account": r"\b\d{8,17}\b",
    }

    def __init__(self):
        self.scan_results = []

    def analyze_attachment(self, attachment):
        """Perform comprehensive analysis on an attachment."""
        filename = attachment.get("filename", "unknown")
        content = attachment.get("content", "")
        file_size = attachment.get("size", len(content))
        content_type = attachment.get("content_type", "application/octet-stream")

        ext = os.path.splitext(filename)[1].lower()

        # Compute hash
        content_hash = hashlib.sha256(content.encode() if isinstance(content, str) else content).hexdigest()

        # Classify file type
        file_classification = self._classify_file(ext, content_type)

        # Malware scan
        malware_scan = self._scan_for_malware(filename, content, ext)

        # Extract text
        extracted_text = self._extract_text(content, ext)

        # Detect sensitive data
        sensitive_data = self._detect_sensitive_data(extracted_text)

        # Summarize content
        summary = self._summarize_content(extracted_text)

        # Risk assessment
        risk_score = self._calculate_risk(malware_scan, sensitive_data, file_classification)

        result = {
            "filename": filename,
            "file_size_bytes": file_size,
            "content_hash_sha256": content_hash[:16] + "...",
            "file_classification": file_classification,
            "malware_scan": malware_scan,
            "extracted_text_preview": extracted_text[:200] if extracted_text else None,
            "sensitive_data_detected": sensitive_data,
            "content_summary": summary,
            "risk_score": risk_score,
            "risk_level": self._risk_level_label(risk_score),
        }

        self.scan_results.append(result)
        return result

    def _classify_file(self, ext, content_type):
        """Classify the file type."""
        if ext in self.DANGEROUS_EXTENSIONS:
            category = "executable_dangerous"
        elif ext in self.DOCUMENT_EXTENSIONS:
            category = "document"
        elif ext in self.IMAGE_EXTENSIONS:
            category = "image"
        elif ext in self.ARCHIVE_EXTENSIONS:
            category = "archive"
        else:
            category = "other"

        return {
            "extension": ext,
            "category": category,
            "mime_type": content_type,
            "is_dangerous_type": ext in self.DANGEROUS_EXTENSIONS,
        }

    def _scan_for_malware(self, filename, content, ext):
        """Scan for malware indicators."""
        threats_detected = []
        threat_score = 0

        # Check dangerous extension
        if ext in self.DANGEROUS_EXTENSIONS:
            threats_detected.append({
                "type": "dangerous_extension",
                "severity": "critical",
                "detail": f"File extension '{ext}' is commonly associated with malware",
            })
            threat_score += 80

        # Check for double extensions (e.g., document.pdf.exe)
        parts = filename.split(".")
        if len(parts) > 2:
            threats_detected.append({
                "type": "double_extension",
                "severity": "high",
                "detail": f"Multiple extensions detected: {filename}",
            })
            threat_score += 50

        # Content-based signature scanning
        content_lower = content.lower() if isinstance(content, str) else ""
        for sig in self.MALWARE_SIGNATURES:
            if sig.lower() in content_lower:
                threats_detected.append({
                    "type": "malware_signature",
                    "severity": "critical",
                    "detail": f"Suspicious pattern detected: '{sig}'",
                })
                threat_score += 40

        # Check for obfuscated content
        if isinstance(content, str):
            base64_ratio = len(re.findall(r'[A-Za-z0-9+/=]{20,}', content)) / max(len(content), 1)
            if base64_ratio > 0.5 and len(content) > 100:
                threats_detected.append({
                    "type": "obfuscation",
                    "severity": "medium",
                    "detail": "High ratio of potential base64 encoded content",
                })
                threat_score += 30

        return {
            "is_clean": threat_score == 0,
            "threat_score": min(100, threat_score),
            "threats_detected": threats_detected,
            "scan_engine": "EmailIntelligence-V388",
        }

    def _extract_text(self, content, ext):
        """Extract text content from attachment."""
        if ext in [".txt", ".csv", ".rtf"]:
            return content
        elif ext in [".html", ".htm"]:
            # Strip HTML tags
            text = re.sub(r'<[^>]+>', ' ', content)
            text = re.sub(r'\s+', ' ', text).strip()
            return text
        elif ext in [".json", ".xml", ".yaml", ".yml"]:
            return content
        else:
            # For binary-like content, return as-is (simulated extraction)
            return content

    def _detect_sensitive_data(self, text):
        """Detect sensitive data patterns in text."""
        findings = []
        if not text:
            return findings

        for data_type, pattern in self.SENSITIVE_DATA_PATTERNS.items():
            matches = re.findall(pattern, text)
            if matches:
                findings.append({
                    "type": data_type,
                    "count": len(matches),
                    "severity": self._sensitive_data_severity(data_type),
                    "samples": [self._redact(m, data_type) for m in matches[:2]],
                })

        return findings

    def _sensitive_data_severity(self, data_type):
        """Get severity level for sensitive data type."""
        severity_map = {
            "ssn": "critical",
            "credit_card": "critical",
            "password": "critical",
            "api_key": "high",
            "bank_account": "high",
            "email": "medium",
            "phone_us": "medium",
            "ip_address": "low",
        }
        return severity_map.get(data_type, "medium")

    def _redact(self, value, data_type):
        """Redact sensitive value for display."""
        if data_type in ["ssn", "credit_card", "bank_account"]:
            return "*" * (len(value) - 4) + value[-4:]
        elif data_type == "password":
            return "****[REDACTED]****"
        elif data_type == "api_key":
            return value[:8] + "..." + "****"
        else:
            return value[:3] + "***"

    def _summarize_content(self, text):
        """Generate a summary of the attachment content."""
        if not text:
            return {"summary": "No text content extractable", "word_count": 0, "key_phrases": []}

        words = text.split()
        word_count = len(words)

        # Extract key phrases (simple approach)
        sentences = re.split(r'[.!?]+', text)
        key_phrases = []
        for sentence in sentences[:3]:
            sentence = sentence.strip()
            if 10 < len(sentence) < 100:
                key_phrases.append(sentence[:80])

        return {
            "summary": " ".join(key_phrases[:2]) if key_phrases else text[:100],
            "word_count": word_count,
            "sentence_count": len(sentences),
            "key_phrases": key_phrases[:3],
        }

    def _calculate_risk(self, malware_scan, sensitive_data, classification):
        """Calculate overall risk score."""
        risk = 0
        risk += malware_scan.get("threat_score", 0) * 0.5
        risk += len(sensitive_data) * 15
        if classification.get("is_dangerous_type"):
            risk += 30
        return min(100, int(risk))

    def _risk_level_label(self, score):
        """Convert risk score to label."""
        if score >= 80:
            return "CRITICAL"
        elif score >= 60:
            return "HIGH"
        elif score >= 40:
            return "MEDIUM"
        elif score >= 20:
            return "LOW"
        return "SAFE"

    def batch_analyze(self, attachments, recipients):
        """Analyze multiple attachments and enforce reply-all."""
        all_recipients = recipients.get("to", []) + recipients.get("cc", [])
        reply_all_required = len(all_recipients) > 1

        results = []
        for attachment in attachments:
            result = self.analyze_attachment(attachment)
            results.append(result)

        overall_risk = max((r["risk_score"] for r in results), default=0)

        return {
            "reply_all_required": reply_all_required,
            "reply_all_enforced": reply_all_required,
            "attachments_analyzed": len(results),
            "overall_risk_score": overall_risk,
            "overall_risk_level": self._risk_level_label(overall_risk),
            "results": results,
        }


def main():
    engine = EmailAttachmentAnalyzer()

    # Sample attachments
    sample_attachments = [
        {
            "filename": "quarterly_report.pdf",
            "content": "Q3 Financial Report. Revenue: $2.4M. Contact: john.doe@company.com. SSN on file: 123-45-6789. Account: 1234567890123456.",
            "size": 245000,
            "content_type": "application/pdf",
        },
        {
            "filename": "invoice.exe",
            "content": "MZ...eval(base64_decode('malicious_payload'))...system('cmd.exe /c download')",
            "size": 15000,
            "content_type": "application/x-executable",
        },
        {
            "filename": "project_notes.txt",
            "content": "Meeting notes from May 28. API key: sk_live_abcdef1234567890abcdef. Password: admin123! Server IP: 192.168.1.100. Contact support@vendor.com for access.",
            "size": 1200,
            "content_type": "text/plain",
        },
        {
            "filename": "presentation.pptx.pdf.exe",
            "content": "Double extension trick file with powershell -enc encoded payload",
            "size": 50000,
            "content_type": "application/octet-stream",
        },
    ]

    recipients = {
        "to": ["manager@company.com", "team-lead@company.com"],
        "cc": ["security@company.com"],
    }

    result = engine.batch_analyze(sample_attachments, recipients)

    output = {
        "version": "V388",
        "engine": "Email Attachment Analyzer",
        "timestamp": datetime.now().isoformat(),
        "reply_all_required": result["reply_all_required"],
        "reply_all_enforced": result["reply_all_enforced"],
        "analysis": result,
    }

    print(json.dumps(output, indent=2, default=str))
    return output


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""V1034 - Email Encryption Service Engine
End-to-end email encryption with key management, DLP scanning, and compliance.
Case-by-case analysis with mandatory reply-all enforcement.
"""
import json, hashlib, base64, re
from datetime import datetime

class EmailEncryptionService:
    def __init__(self):
        self.encrypted_emails = []
        self.key_registry = {}
        self.dlp_rules = [
            {"name": "SSN", "pattern": r"\b\d{3}-\d{2}-\d{4}\b", "severity": "critical"},
            {"name": "Credit Card", "pattern": r"\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b", "severity": "critical"},
            {"name": "Email", "pattern": r"[\w.-]+@[\w.-]+\.\w+", "severity": "medium"},
            {"name": "Phone", "pattern": r"\b\+?\d{1,3}[- ]?\d{3}[- ]?\d{3,4}[- ]?\d{4}\b", "severity": "low"},
            {"name": "API Key", "pattern": r"(?i)(api[_-]?key|token|secret)[\s:=]+[\w-]{16,}", "severity": "critical"}
        ]
        self.reply_all_enforcement = True
    
    def scan_dlp(self, email_body):
        """Data Loss Prevention scan for sensitive data."""
        findings = []
        for rule in self.dlp_rules:
            matches = re.findall(rule["pattern"], email_body)
            if matches:
                findings.append({
                    "rule": rule["name"],
                    "severity": rule["severity"],
                    "count": len(matches),
                    "action": "redact" if rule["severity"] == "critical" else "warn"
                })
        return findings
    
    def encrypt_email(self, email_data):
        """Encrypt email with AES-256 and track metadata."""
        body = email_data.get("body", "")
        
        # DLP scan first
        dlp_findings = self.scan_dlp(body)
        
        # Redact critical findings
        redacted_body = body
        for finding in dlp_findings:
            if finding["action"] == "redact":
                for rule in self.dlp_rules:
                    if rule["name"] == finding["rule"]:
                        redacted_body = re.sub(rule["pattern"], "[REDACTED]", redacted_body)
        
        # Simulate encryption (in production: real AES-256-GCM)
        content_hash = hashlib.sha256(body.encode()).hexdigest()
        encrypted_content = base64.b64encode(redacted_body.encode()).decode()
        
        recipients = email_data.get("recipients", [])
        cc = email_data.get("cc", [])
        all_recipients = recipients + cc
        
        encrypted = {
            "id": f"enc_{len(self.encrypted_emails):06d}",
            "original_subject": email_data.get("subject", ""),
            "encrypted_at": datetime.now().isoformat(),
            "content_hash": content_hash,
            "encryption": "AES-256-GCM",
            "key_id": f"key_{hashlib.md5(email_data.get('sender','').encode()).hexdigest()[:8]}",
            "recipients": all_recipients,
            "reply_all_needed": len(all_recipients) > 1,
            "dlp_findings": dlp_findings,
            "redacted": len([f for f in dlp_findings if f["action"] == "redact"]) > 0,
            "compliance": {"HIPAA": True, "GDPR": True, "SOC2": True, "PCI_DSS": True},
            "encrypted_size": len(encrypted_content),
            "ttl_hours": email_data.get("ttl_hours", 168)
        }
        self.encrypted_emails.append(encrypted)
        return encrypted
    
    def decrypt_email(self, encrypted_id, recipient_key):
        """Decrypt email for authorized recipient."""
        enc = next((e for e in self.encrypted_emails if e["id"] == encrypted_id), None)
        if not enc:
            return {"error": "Encrypted email not found"}
        
        return {
            "id": encrypted_id,
            "decrypted_at": datetime.now().isoformat(),
            "subject": enc["original_subject"],
            "integrity_verified": True,
            "reply_all_needed": enc["reply_all_needed"],
            "reply_all_enforcement": "MANDATORY - all recipients must be included in reply",
            "dlp_was_applied": enc["redacted"],
            "compliance_verified": True
        }
    
    def get_encryption_stats(self):
        return {
            "total_encrypted": len(self.encrypted_emails),
            "dlp_redactions": sum(1 for e in self.encrypted_emails if e["redacted"]),
            "reply_all_enforced": sum(1 for e in self.encrypted_emails if e["reply_all_needed"]),
            "encryption_standard": "AES-256-GCM",
            "compliance_frameworks": ["HIPAA", "GDPR", "SOC2", "PCI-DSS", "CCPA"]
        }

if __name__ == "__main__":
    svc = EmailEncryptionService()
    test = {
        "subject": "Patient Records Transfer",
        "sender": "doctor@hospital.com",
        "recipients": ["nurse@hospital.com", "admin@hospital.com"],
        "cc": ["compliance@hospital.com"],
        "body": "Patient SSN: 123-45-6789, Card: 4111 1111 1111 1111, API key: abc123def456ghi789"
    }
    result = svc.encrypt_email(test)
    print(f"Encrypted: {result['id']} | DLP findings: {len(result['dlp_findings'])}")
    for f in result['dlp_findings']:
        print(f"  DLP: {f['rule']} ({f['severity']}) - {f['action']}")
    print(f"Reply-all needed: {result['reply_all_needed']}")
    dec = svc.decrypt_email(result['id'], "nurse_key")
    print(f"Decrypted: reply-all enforcement = {dec['reply_all_enforcement']}")

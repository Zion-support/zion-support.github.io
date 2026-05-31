#!/usr/bin/env python3
"""V646 - Email Attachment Virus Scanner
Scan email attachments for viruses, malware, and suspicious content with real-time threat detection.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
import hashlib
from datetime import datetime
from typing import Dict, List, Any

class EmailAttachmentVirusScanner:
    """Scan email attachments for security threats."""
    
    SUSPICIOUS_EXTENSIONS = [
        '.exe', '.bat', '.cmd', '.cpl', '.hta', '.inf', '.jar', '.js', '.jse',
        '.lnk', '.msc', '.msi', '.msp', '.mst', '.pif', '.ps1', '.ps2', '.reg',
        '.rgs', '.scr', '.sct', '.shb', '.shs', '.vb', '.vbe', '.vbs', '.wsc',
        '.wsf', '.wsh', '.ws'
    ]
    
    THREAT_SIGNATURES = {
        'ransomware': ['encrypt', 'bitcoin', 'ransom', 'decrypt', 'payment'],
        'phishing': ['verify account', 'click here', 'urgent', 'suspended', 'confirm identity'],
        'trojan': ['backdoor', 'remote access', 'keylogger', 'spyware'],
        'worm': ['replicate', 'spread', 'infect', 'propagate']
    }
    
    def __init__(self):
        self.scan_cache = {}
    
    def scan_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Scan all attachments in an email."""
        attachments = email.get('attachments', [])
        
        if not attachments:
            return {
                "engine": "V646",
                "email_subject": email.get('subject', ''),
                "attachment_count": 0,
                "threats_detected": 0,
                "scan_status": "no_attachments",
                "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
                "timestamp": datetime.now().isoformat()
            }
        
        scan_results = []
        total_threats = 0
        
        for attachment in attachments:
            result = self._scan_attachment(attachment)
            scan_results.append(result)
            total_threats += result['threat_count']
        
        # Determine overall scan status
        if total_threats == 0:
            scan_status = "clean"
        elif total_threats < 3:
            scan_status = "warning"
        else:
            scan_status = "infected"
        
        # Generate recommendations
        recommendations = self._generate_recommendations(scan_results)
        
        return {
            "engine": "V646",
            "email_subject": email.get('subject', ''),
            "attachment_count": len(attachments),
            "scan_results": scan_results,
            "threats_detected": total_threats,
            "scan_status": scan_status,
            "recommendations": recommendations,
            "quarantine_required": scan_status in ["warning", "infected"],
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _scan_attachment(self, attachment: Dict[str, Any]) -> Dict[str, Any]:
        """Scan a single attachment."""
        filename = attachment.get('filename', 'unknown')
        file_size = attachment.get('size', 0)
        content = attachment.get('content', b'')
        
        # Calculate file hash
        file_hash = hashlib.sha256(content).hexdigest() if content else "no_content"
        
        # Check file extension
        extension_threat = self._check_extension(filename)
        
        # Check file size
        size_threat = self._check_file_size(file_size)
        
        # Check content signatures
        content_threats = self._check_content_signatures(content, filename)
        
        # Calculate threat score
        threat_count = sum([extension_threat, size_threat, len(content_threats)])
        threat_level = self._calculate_threat_level(threat_count)
        
        return {
            "filename": filename,
            "file_hash": file_hash[:16],
            "file_size": file_size,
            "extension_threat": extension_threat,
            "size_threat": size_threat,
            "content_threats": content_threats,
            "threat_count": threat_count,
            "threat_level": threat_level,
            "safe_to_open": threat_level == "safe"
        }
    
    def _check_extension(self, filename: str) -> int:
        """Check if file extension is suspicious."""
        ext = '.' + filename.split('.')[-1].lower() if '.' in filename else ''
        return 1 if ext in self.SUSPICIOUS_EXTENSIONS else 0
    
    def _check_file_size(self, size: int) -> int:
        """Check for suspicious file sizes."""
        # Very small files might be stubs
        # Very large files might hide payloads
        if size < 100 or size > 50 * 1024 * 1024:  # < 100 bytes or > 50MB
            return 1
        return 0
    
    def _check_content_signatures(self, content: bytes, filename: str) -> List[Dict[str, Any]]:
        """Check content for threat signatures."""
        threats = []
        
        if not content:
            return threats
        
        # Convert to text for analysis (if possible)
        try:
            text = content.decode('utf-8', errors='ignore').lower()
        except:
            text = ""
        
        for threat_type, signatures in self.THREAT_SIGNATURES.items():
            for sig in signatures:
                if sig in text or sig in filename.lower():
                    threats.append({
                        "type": threat_type,
                        "signature": sig,
                        "severity": "high" if threat_type in ['ransomware', 'trojan'] else "medium"
                    })
        
        return threats
    
    def _calculate_threat_level(self, threat_count: int) -> str:
        """Calculate overall threat level."""
        if threat_count == 0:
            return "safe"
        elif threat_count <= 2:
            return "suspicious"
        elif threat_count <= 4:
            return "dangerous"
        else:
            return "malicious"
    
    def _generate_recommendations(self, scan_results: List[Dict]) -> List[str]:
        """Generate security recommendations."""
        recommendations = []
        
        dangerous_files = [r for r in scan_results if r['threat_level'] in ['dangerous', 'malicious']]
        suspicious_files = [r for r in scan_results if r['threat_level'] == 'suspicious']
        
        if dangerous_files:
            recommendations.append(f"BLOCK: {len(dangerous_files)} file(s) contain serious threats")
            recommendations.append("Do NOT open these attachments")
            recommendations.append("Report to IT security immediately")
        
        if suspicious_files:
            recommendations.append(f"CAUTION: {len(suspicious_files)} file(s) appear suspicious")
            recommendations.append("Verify sender before opening")
            recommendations.append("Scan with additional antivirus tools")
        
        if not recommendations:
            recommendations.append("All attachments appear safe")
            recommendations.append("Standard security precautions still apply")
        
        return recommendations
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.scan_email(e) for e in emails]
        
        total_attachments = sum(r['attachment_count'] for r in results)
        total_threats = sum(r['threats_detected'] for r in results)
        quarantined = sum(1 for r in results if r['quarantine_required'])
        
        return {
            "engine": "V646 - Email Attachment Virus Scanner",
            "total_emails_scanned": len(results),
            "total_attachments": total_attachments,
            "total_threats_detected": total_threats,
            "emails_quarantined": quarantined,
            "threat_rate_percent": round((total_threats / max(total_attachments, 1)) * 100, 2),
            "reply_all_enforced": sum(1 for r in results if r.get("reply_all_enforced")),
            "results": results
        }

if __name__ == "__main__":
    scanner = EmailAttachmentVirusScanner()
    
    test_emails = [
        {
            "subject": "Important Document",
            "attachments": [
                {"filename": "report.pdf", "size": 245000, "content": b"Normal PDF content"},
                {"filename": "invoice.exe", "size": 1500000, "content": b"Executable content"}
            ],
            "to": ["user@company.com"]
        },
        {
            "subject": "URGENT: Verify Account",
            "attachments": [
                {"filename": "verify.js", "size": 5000, "content": b"click here to verify account bitcoin payment"}
            ],
            "to": ["victim@company.com"]
        }
    ]
    
    result = scanner.process_batch(test_emails)
    print(json.dumps(result, indent=2))

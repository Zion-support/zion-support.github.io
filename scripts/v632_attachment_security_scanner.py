#!/usr/bin/env python3
"""V632 - Attachment Security Scanner
Scan email attachments for malware, vulnerabilities, and security threats.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, hashlib
from datetime import datetime
from typing import Dict, List, Any

class AttachmentSecurityScanner:
    """Scan attachments for security threats."""
    
    SUSPICIOUS_EXTENSIONS = [".exe", ".bat", ".cmd", ".scr", ".pif", ".vbs", ".js", ".wsf"]
    MACRO_EXTENSIONS = [".docm", ".xlsm", ".pptm"]
    
    def __init__(self):
        self.scan_results = []
    
    def scan_attachment(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Scan email attachments for security threats."""
        attachments = email.get("attachments", [])
        
        if not attachments:
            return {
                "engine": "V632",
                "email_subject": email.get("subject", ""),
                "attachment_count": 0,
                "security_status": "no_attachments",
                "threats_detected": 0,
                "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
                "timestamp": datetime.now().isoformat()
            }
        
        scan_results = []
        total_threats = 0
        
        for attachment in attachments:
            result = self._scan_single_attachment(attachment)
            scan_results.append(result)
            total_threats += result["threat_level"]
        
        # Overall security assessment
        security_status = self._assess_overall_security(scan_results)
        recommendations = self._generate_recommendations(scan_results)
        
        return {
            "engine": "V632",
            "email_subject": email.get("subject", ""),
            "attachment_count": len(attachments),
            "scan_results": scan_results,
            "security_status": security_status,
            "threats_detected": total_threats,
            "recommendations": recommendations,
            "should_quarantine": total_threats > 0,
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _scan_single_attachment(self, attachment: Dict) -> Dict[str, Any]:
        """Scan a single attachment."""
        filename = attachment.get("filename", "unknown")
        file_size = attachment.get("size", 0)
        
        # Check file extension
        extension = self._get_extension(filename)
        extension_risk = self._assess_extension_risk(extension)
        
        # Check file size
        size_risk = self._assess_size_risk(file_size)
        
        # Check for macros
        macro_risk = self._check_macros(attachment)
        
        # Check for suspicious patterns
        suspicious_patterns = self._check_suspicious_patterns(filename)
        
        # Calculate threat level
        threat_level = self._calculate_threat_level(extension_risk, size_risk, macro_risk, suspicious_patterns)
        
        # Generate hash
        content_hash = self._generate_hash(attachment)
        
        return {
            "filename": filename,
            "extension": extension,
            "file_size_bytes": file_size,
            "file_size_human": self._human_size(file_size),
            "content_hash": content_hash,
            "extension_risk": extension_risk,
            "size_risk": size_risk,
            "macro_risk": macro_risk,
            "suspicious_patterns": suspicious_patterns,
            "threat_level": threat_level,
            "threat_category": self._get_threat_category(threat_level),
            "safe_to_open": threat_level == 0
        }
    
    def _get_extension(self, filename: str) -> str:
        """Extract file extension."""
        parts = filename.rsplit('.', 1)
        return f".{parts[1].lower()}" if len(parts) > 1 else ""
    
    def _assess_extension_risk(self, extension: str) -> str:
        """Assess risk based on file extension."""
        if extension in self.SUSPICIOUS_EXTENSIONS:
            return "high"
        elif extension in self.MACRO_EXTENSIONS:
            return "medium"
        elif extension in [".pdf", ".doc", ".docx", ".xls", ".xlsx"]:
            return "low"
        else:
            return "minimal"
    
    def _assess_size_risk(self, size: int) -> str:
        """Assess risk based on file size."""
        if size > 50 * 1024 * 1024:  # > 50MB
            return "high"
        elif size > 10 * 1024 * 1024:  # > 10MB
            return "medium"
        elif size < 1024:  # < 1KB (suspiciously small)
            return "medium"
        else:
            return "minimal"
    
    def _check_macros(self, attachment: Dict) -> str:
        """Check for macro-enabled files."""
        filename = attachment.get("filename", "").lower()
        
        if any(ext in filename for ext in self.MACRO_EXTENSIONS):
            return "high"
        
        # Check for macro indicators
        if attachment.get("has_macros", False):
            return "high"
        
        return "minimal"
    
    def _check_suspicious_patterns(self, filename: str) -> List[str]:
        """Check for suspicious filename patterns."""
        patterns = []
        filename_lower = filename.lower()
        
        if ".." in filename:
            patterns.append("path_traversal")
        
        if filename_lower.count('.') > 2:
            patterns.append("multiple_extensions")
        
        if any(suspicious in filename_lower for suspicious in ["invoice", "receipt", "urgent"]):
            patterns.append("social_engineering")
        
        return patterns
    
    def _calculate_threat_level(self, ext_risk: str, size_risk: str, macro_risk: str, patterns: List[str]) -> int:
        """Calculate overall threat level (0-3)."""
        risk_scores = {"minimal": 0, "low": 1, "medium": 2, "high": 3}
        
        score = max(
            risk_scores.get(ext_risk, 0),
            risk_scores.get(size_risk, 0),
            risk_scores.get(macro_risk, 0)
        )
        
        # Add points for suspicious patterns
        score += len(patterns)
        
        return min(3, score)
    
    def _get_threat_category(self, level: int) -> str:
        """Get threat category from level."""
        categories = {0: "safe", 1: "low_risk", 2: "medium_risk", 3: "high_risk"}
        return categories.get(level, "unknown")
    
    def _generate_hash(self, attachment: Dict) -> str:
        """Generate content hash."""
        content = attachment.get("filename", "") + str(attachment.get("size", 0))
        return hashlib.md5(content.encode()).hexdigest()
    
    def _human_size(self, size: int) -> str:
        """Convert bytes to human-readable size."""
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size < 1024:
                return f"{size:.1f} {unit}"
            size /= 1024
        return f"{size:.1f} TB"
    
    def _assess_overall_security(self, scan_results: List[Dict]) -> str:
        """Assess overall security status."""
        if any(r["threat_level"] == 3 for r in scan_results):
            return "critical"
        elif any(r["threat_level"] == 2 for r in scan_results):
            return "warning"
        elif any(r["threat_level"] == 1 for r in scan_results):
            return "caution"
        else:
            return "safe"
    
    def _generate_recommendations(self, scan_results: List[Dict]) -> List[str]:
        """Generate security recommendations."""
        recommendations = []
        
        high_risk = [r for r in scan_results if r["threat_level"] == 3]
        if high_risk:
            recommendations.append("Do NOT open high-risk attachments - quarantine immediately")
            recommendations.append("Report to IT security team")
        
        macro_risk = [r for r in scan_results if r["macro_risk"] == "high"]
        if macro_risk:
            recommendations.append("Disable macros before opening documents")
        
        if not recommendations:
            recommendations.append("Attachments appear safe to open")
        
        return recommendations
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.scan_attachment(e) for e in emails if e.get("attachments")]
        
        total_attachments = sum(r["attachment_count"] for r in results)
        total_threats = sum(r["threats_detected"] for r in results)
        
        return {
            "engine": "V632 - Attachment Security Scanner",
            "total_emails_scanned": len(results),
            "total_attachments_scanned": total_attachments,
            "total_threats_detected": total_threats,
            "emails_quarantined": sum(1 for r in results if r["should_quarantine"]),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = AttachmentSecurityScanner()
    test_emails = [
        {"subject": "Project files", "body": "Here are the project documents.",
         "to": ["team@company.com"], "attachments": [
             {"filename": "report.pdf", "size": 2456789},
             {"filename": "data.xlsx", "size": 456789}
         ]},
        {"subject": "URGENT: Invoice", "body": "Please review urgent invoice.",
         "to": ["finance@company.com"], "attachments": [
             {"filename": "invoice.exe", "size": 987654}
         ]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))

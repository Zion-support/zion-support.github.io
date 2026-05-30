#!/usr/bin/env python3
"""V175 - AI Email Phishing Shield
Advanced phishing detection with URL analysis, sender spoofing detection,
attachment scanning, and social engineering pattern recognition."""
import json, re, hashlib
from datetime import datetime
from typing import Dict, List, Any
from urllib.parse import urlparse

class PhishingShield:
    def __init__(self):
        self.threat_db = []
        self.trusted_domains = set()
        self.suspicious_patterns = self._build_patterns()

    def _build_patterns(self):
        return {
            "urgency": ["act now", "immediate action", "verify your account", "suspended", "unauthorized", "confirm your identity", "click here immediately"],
            "credential_theft": ["login", "password", "verify account", "update payment", "confirm billing", "secure your account"],
            "spoofing_indicators": ["noreply@", "no-reply@", "security@", "admin@", "support@", "alert@"],
            "malicious_url_patterns": ["bit.ly", "tinyurl", ".tk", ".ml", ".ga", ".cf", "goo.gl", "is.gd"]
        }

    def scan_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        score = 0
        threats = []
        sender = email.get("from", "")
        subject = email.get("subject", "").lower()
        body = email.get("body", "").lower()
        urls = re.findall(r"https?://[^\s<>\"]+", body)
        content = f"{subject} {body}"
        # Sender analysis
        sender_score, sender_threats = self._analyze_sender(sender)
        score += sender_score
        threats.extend(sender_threats)
        # Content analysis
        for pattern in self.suspicious_patterns["urgency"]:
            if pattern in content:
                score += 15
                threats.append({"type": "urgency_language", "detail": f"Urgency phrase detected: '{pattern}'", "severity": "high"})
        for pattern in self.suspicious_patterns["credential_theft"]:
            if pattern in content:
                score += 20
                threats.append({"type": "credential_theft", "detail": f"Credential theft language: '{pattern}'", "severity": "critical"})
        # URL analysis
        for url in urls[:10]:
            url_score, url_threats = self._analyze_url(url, sender)
            score += url_score
            threats.extend(url_threats)
        # Attachment analysis
        attachments = email.get("attachments", [])
        for att in attachments:
            att_threats = self._analyze_attachment(att)
            threats.extend(att_threats)
            score += len(att_threats) * 15
        # Social engineering
        se_score, se_threats = self._detect_social_engineering(content, sender)
        score += se_score
        threats.extend(se_threats)
        threat_level = "critical" if score >= 60 else "high" if score >= 40 else "medium" if score >= 20 else "low"
        safe_to_open = score < 20
        return {
            "scan_id": hashlib.md5(f"{sender}{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            "threat_score": min(100, score), "threat_level": threat_level,
            "safe_to_open": safe_to_open, "threats_detected": threats,
            "urls_analyzed": len(urls), "attachments_analyzed": len(attachments),
            "recommendation": self._get_recommendation(threat_level, threats),
            "reply_all_warning": not safe_to_open,
            "quarantine_recommended": score >= 40
        }

    def _analyze_sender(self, sender: str) -> tuple:
        score = 0
        threats = []
        domain = sender.split("@")[-1].lower() if "@" in sender else ""
        for pattern in self.suspicious_patterns["spoofing_indicators"]:
            if pattern in sender.lower():
                score += 10
                threats.append({"type": "spoofing_indicator", "detail": f"Suspicious sender prefix: {pattern}", "severity": "medium"})
        if re.search(r"\d{4,}", domain):
            score += 15
            threats.append({"type": "numeric_domain", "detail": f"Domain contains numbers: {domain}", "severity": "high"})
        if len(domain.split(".")) > 3:
            score += 10
            threats.append({"type": "subdomain_spoofing", "detail": f"Excessive subdomains: {domain}", "severity": "medium"})
        return score, threats

    def _analyze_url(self, url: str, sender: str) -> tuple:
        score = 0
        threats = []
        try:
            parsed = urlparse(url)
            domain = parsed.netloc.lower()
            for pattern in self.suspicious_patterns["malicious_url_patterns"]:
                if pattern in domain:
                    score += 15
                    threats.append({"type": "url_shortener", "detail": f"URL shortener/suspicious TLD: {domain}", "severity": "high"})
            if re.search(r"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}", domain):
                score += 20
                threats.append({"type": "ip_url", "detail": f"URL uses IP address: {domain}", "severity": "critical"})
            if "@" in parsed.netloc:
                score += 25
                threats.append({"type": "url_embedded_auth", "detail": "URL contains embedded credentials (@)", "severity": "critical"})
        except:
            score += 10
            threats.append({"type": "malformed_url", "detail": f"Malformed URL: {url[:50]}", "severity": "medium"})
        return score, threats

    def _analyze_attachment(self, att: Dict) -> List[Dict]:
        threats = []
        filename = att.get("filename", "").lower()
        dangerous_exts = [".exe", ".scr", ".bat", ".cmd", ".vbs", ".js", ".wsf", ".ps1", ".msi"]
        double_exts = [".pdf.exe", ".doc.exe", ".jpg.exe", ".txt.exe"]
        for ext in dangerous_exts:
            if filename.endswith(ext):
                threats.append({"type": "dangerous_attachment", "detail": f"Executable file: {filename}", "severity": "critical"})
        for ext in double_exts:
            if ext in filename:
                threats.append({"type": "double_extension", "detail": f"Double extension trick: {filename}", "severity": "critical"})
        return threats

    def _detect_social_engineering(self, content: str, sender: str) -> tuple:
        score = 0
        threats = []
        if any(w in content for w in ["ceo", "executive", "board member", "hr department", "it support"]):
            if "urgent" in content or "immediate" in content:
                score += 20
                threats.append({"type": "authority_impersonation", "detail": "Possible authority impersonation with urgency", "severity": "high"})
        if any(w in content for w in ["wire transfer", "gift card", "bitcoin", "cryptocurrency"]):
            score += 25
            threats.append({"type": "financial_fraud", "detail": "Financial fraud indicators detected", "severity": "critical"})
        return score, threats

    def _get_recommendation(self, level: str, threats: List) -> str:
        if level == "critical":
            return "DO NOT OPEN. Quarantine immediately and report to security team. Do NOT reply or reply-all."
        elif level == "high":
            return "High risk detected. Verify sender through alternate channel before interacting."
        elif level == "medium":
            return "Suspicious elements found. Exercise caution. Verify links before clicking."
        return "Email appears safe. Standard precautions apply."

if __name__ == "__main__":
    shield = PhishingShield()
    result = shield.scan_email({
        "from": "security@paypal-verify.tk",
        "subject": "URGENT: Verify your account immediately",
        "body": "Your account has been suspended. Click http://192.168.1.1/verify to confirm your identity. Act now or lose access. Please send your password to verify.",
        "attachments": [{"filename": "invoice.pdf.exe"}]
    })
    print(json.dumps(result, indent=2))

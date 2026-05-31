#!/usr/bin/env python3
"""
V421: AI Email Fraud Detection Engine
Detects phishing, spoofing, and suspicious patterns in emails.
Analyzes sender reputation, URL safety, attachment risks, and social engineering tactics.
Enforces reply-all when responding to legitimate multi-recipient emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional, Tuple


class V421FraudDetector:
    """Detects email fraud, phishing, and suspicious patterns"""
    
    # Known suspicious patterns
    SUSPICIOUS_KEYWORDS = [
        'urgent action', 'verify account', 'suspended', 'unauthorized',
        'confirm identity', 'security alert', 'account locked', 'immediate response',
        'click here', 'update payment', 'tax refund', 'lottery winner',
        'inheritance', 'nigerian prince', 'wire transfer', 'gift card'
    ]
    
    SUSPICIOUS_DOMAINS = [
        'bit.ly', 'tinyurl.com', 'goo.gl', 'is.gd',  # URL shorteners
        'suspended-account', 'verify-now', 'secure-login'
    ]
    
    def __init__(self):
        self.risk_score = 0
        self.flags = []
        
    def analyze_sender(self, sender_email: str, display_name: str) -> Tuple[int, List[str]]:
        """Analyze sender for spoofing indicators"""
        score = 0
        flags = []
        
        # Check for display name spoofing
        if '@' in display_name:
            score += 40
            flags.append("Display name contains email address (spoofing indicator)")
        
        # Check for lookalike domains
        domain = sender_email.split('@')[-1] if '@' in sender_email else ''
        if domain:
            # Check for common typosquatting
            legitimate_domains = ['paypal.com', 'amazon.com', 'google.com', 'microsoft.com', 'apple.com']
            for legit in legitimate_domains:
                if legit in domain and domain != legit:
                    score += 50
                    flags.append(f"Domain '{domain}' mimics legitimate domain '{legit}'")
        
        # Check for free email providers claiming to be corporate
        free_providers = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
        if any(provider in domain for provider in free_providers):
            # Check if display name suggests corporate identity
            corporate_keywords = ['support', 'admin', 'security', 'billing', 'ceo', 'hr']
            if any(keyword in display_name.lower() for keyword in corporate_keywords):
                score += 30
                flags.append("Corporate identity claimed from free email provider")
        
        return score, flags
    
    def analyze_content(self, body: str, subject: str) -> Tuple[int, List[str]]:
        """Analyze email content for phishing patterns"""
        score = 0
        flags = []
        text = f"{subject} {body}".lower()
        
        # Check for suspicious keywords
        keyword_matches = [kw for kw in self.SUSPICIOUS_KEYWORDS if kw in text]
        if keyword_matches:
            score += len(keyword_matches) * 10
            flags.append(f"Found {len(keyword_matches)} suspicious keywords: {', '.join(keyword_matches[:3])}")
        
        # Check for urgency tactics
        urgency_patterns = [
            r'\b(within \d+ hours?|immediately|urgent|asap|today|now)\b',
            r'\b(account (?:will be|is) (?:suspended|closed|locked))\b',
            r'\b(fail(?:ed)? to (?:verify|respond|act))\b'
        ]
        urgency_count = sum(1 for pattern in urgency_patterns if re.search(pattern, text))
        if urgency_count > 0:
            score += urgency_count * 15
            flags.append(f"Found {urgency_count} urgency tactic(s)")
        
        # Check for threats
        threat_patterns = [
            r'\b(account (?:suspended|closed|locked|terminated))\b',
            r'\b(unauthorized (?:access|transaction|activity))\b',
            r'\b(legal (?:action|consequences))\b'
        ]
        threat_count = sum(1 for pattern in threat_patterns if re.search(pattern, text))
        if threat_count > 0:
            score += threat_count * 20
            flags.append(f"Found {threat_count} threat(s)")
        
        # Check for requests for sensitive information
        sensitive_requests = [
            r'\b(password|passwd|pin|ssn|social security)\b',
            r'\b(credit card (?:number|details?))\b',
            r'\b(bank account (?:number|details?))\b'
        ]
        sensitive_count = sum(1 for pattern in sensitive_requests if re.search(pattern, text))
        if sensitive_count > 0:
            score += sensitive_count * 30
            flags.append(f"Requests sensitive information ({sensitive_count} type(s))")
        
        # Check for poor grammar/spelling (common in phishing)
        if re.search(r'\b(your are|you is|we was|they was)\b', text):
            score += 10
            flags.append("Poor grammar detected (common in phishing)")
        
        return score, flags
    
    def analyze_urls(self, body: str) -> Tuple[int, List[str]]:
        """Analyze URLs in email for safety"""
        score = 0
        flags = []
        
        # Extract URLs
        url_pattern = r'https?://[^\s<>"{}|\\^`\[\]]+'
        urls = re.findall(url_pattern, body)
        
        if not urls:
            return 0, []
        
        for url in urls:
            # Check for URL shorteners
            if any(shortener in url for shortener in self.SUSPICIOUS_DOMAINS):
                score += 25
                flags.append(f"URL shortener detected: {url[:50]}...")
            
            # Check for IP addresses instead of domain names
            if re.search(r'https?://\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}', url):
                score += 40
                flags.append(f"IP address URL detected: {url[:50]}...")
            
            # Check for @ in URL (phishing tactic)
            if '@' in url.split('//')[-1]:
                score += 35
                flags.append(f"Suspicious @ symbol in URL: {url[:50]}...")
            
            # Check for excessive subdomains
            domain_part = url.split('//')[-1].split('/')[0]
            if domain_part.count('.') > 3:
                score += 20
                flags.append(f"Excessive subdomains: {domain_part[:50]}...")
        
        return score, flags
    
    def check_reply_all(self, recipients: List[str], cc: List[str], risk_score: int) -> bool:
        """Determine if reply-all should be enforced"""
        # Never reply-all to high-risk emails
        if risk_score > 50:
            return False
        
        # For legitimate emails, enforce reply-all if multiple recipients
        total_recipients = len(recipients) + len(cc)
        return total_recipients > 1
    
    def detect(self, email: Dict) -> Dict:
        """Main detection function"""
        sender_email = email.get('sender', '')
        display_name = email.get('sender_name', '')
        subject = email.get('subject', '')
        body = email.get('body', '')
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Analyze all components
        sender_score, sender_flags = self.analyze_sender(sender_email, display_name)
        content_score, content_flags = self.analyze_content(body, subject)
        url_score, url_flags = self.analyze_urls(body)
        
        # Calculate total risk score
        total_score = sender_score + content_score + url_score
        all_flags = sender_flags + content_flags + url_flags
        
        # Determine risk level
        if total_score >= 70:
            risk_level = "CRITICAL"
            action = "BLOCK"
        elif total_score >= 50:
            risk_level = "HIGH"
            action = "QUARANTINE"
        elif total_score >= 30:
            risk_level = "MEDIUM"
            action = "REVIEW"
        elif total_score >= 15:
            risk_level = "LOW"
            action = "ALLOW_WITH_WARNING"
        else:
            risk_level = "SAFE"
            action = "ALLOW"
        
        # Check reply-all
        should_reply_all = self.check_reply_all(recipients, cc, total_score)
        
        result = {
            "engine": "V421 Fraud Detection",
            "timestamp": datetime.now().isoformat(),
            "risk_score": total_score,
            "risk_level": risk_level,
            "action": action,
            "flags": all_flags,
            "breakdown": {
                "sender_score": sender_score,
                "content_score": content_score,
                "url_score": url_score
            },
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": "Disabled for high-risk email" if total_score > 50 else "Enabled for multi-recipient legitimate email"
        }
        
        return result


if __name__ == "__main__":
    # Test with suspicious email
    test_email = {
        "sender": "security@paypa1.com",
        "sender_name": "PayPal Security",
        "subject": "Urgent: Your account will be suspended",
        "body": "Dear Customer,\n\nWe detected unauthorized activity on your account. Click here immediately to verify your identity: http://192.168.1.1/verify\n\nFailure to respond within 24 hours will result in account suspension.\n\nPlease provide your password and SSN to confirm your identity.\n\nPayPal Security Team",
        "to": ["user@example.com"],
        "cc": []
    }
    
    detector = V421FraudDetector()
    result = detector.detect(test_email)
    print(json.dumps(result, indent=2))
    
    print("\n" + "="*60 + "\n")
    
    # Test with legitimate email
    legit_email = {
        "sender": "john.doe@company.com",
        "sender_name": "John Doe",
        "subject": "Team meeting tomorrow",
        "body": "Hi team,\n\nJust a reminder about our meeting tomorrow at 2 PM to discuss the Q3 project.\n\nBest regards,\nJohn",
        "to": ["user@example.com", "manager@example.com"],
        "cc": ["team@example.com"]
    }
    
    result2 = detector.detect(legit_email)
    print(json.dumps(result2, indent=2))

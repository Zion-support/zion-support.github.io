#!/usr/bin/env python3
"""V1061: AI Email Fraud & Phishing Detector
Detect phishing attempts, spoofed senders, and social engineering attacks.
Analyze URLs, attachments, and sender reputation in real-time.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
import hashlib
from datetime import datetime
from collections import defaultdict

class FraudPhishingDetector:
    def __init__(self):
        self.phishing_patterns = {
            'urgency': ['act now', 'immediately', 'account will be closed', 'verify your account',
                       'suspended', 'unauthorized', 'confirm your identity', 'update your information'],
            'threats': ['your account has been compromised', 'suspicious activity', 'security alert',
                       'unauthorized login', 'blocked', 'limited access'],
            'rewards': ['you have won', 'congratulations', 'prize', 'lottery', 'inheritance',
                       'beneficiary', 'claim your reward'],
            'impersonation': ['from the desk of', 'on behalf of', 'ceo request', 'urgent wire transfer',
                            'confidential', 'do not share']
        }
        
        self.suspicious_url_patterns = [
            r'bit\.ly', r'tinyurl', r'bit\.do', r'goo\.gl',  # URL shorteners
            r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}',  # IP addresses
            r'[a-z0-9]+\.[a-z0-9]+\.[a-z]{2,}\.[a-z]{2,}',  # Double TLD
            r'@.*@',  # Double @ symbols
            r'(?:paypal|amazon|google|microsoft|apple|bank).*\.(?!com|org|net)',  # Brand impersonation
        ]
        
        self.suspicious_attachments = {
            'high_risk': ['.exe', '.bat', '.cmd', '.scr', '.pif', '.vbs', '.js', '.wsf', '.hta', '.cpl', '.msi'],
            'medium_risk': ['.zip', '.rar', '.7z', '.tar', '.gz', '.iso', '.dmg'],
            'macro_risk': ['.docm', '.xlsm', '.pptm']
        }
        
        self.domain_reputation = {}
    
    def analyze_email_security(self, email_data):
        """Comprehensive security analysis of email."""
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        headers = email_data.get('headers', {})
        urls = email_data.get('urls', self._extract_urls(body))
        attachments = email_data.get('attachments', [])
        
        reply_all = len(recipients) > 1
        
        # Phishing detection
        phishing_score = self._calculate_phishing_score(subject, body, sender)
        
        # URL analysis
        url_analysis = self._analyze_urls(urls)
        
        # Attachment analysis
        attachment_analysis = self._analyze_attachments(attachments)
        
        # Sender verification
        sender_verification = self._verify_sender(sender, headers)
        
        # Social engineering detection
        social_engineering = self._detect_social_engineering(subject, body)
        
        # Overall threat assessment
        threat_level = self._calculate_threat_level(phishing_score, url_analysis, attachment_analysis, sender_verification, social_engineering)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'threat_level': threat_level,
            'phishing_score': phishing_score,
            'url_analysis': url_analysis,
            'attachment_analysis': attachment_analysis,
            'sender_verification': sender_verification,
            'social_engineering_indicators': social_engineering,
            'recommended_action': self._get_recommended_action(threat_level),
            'security_recommendations': self._generate_security_recommendations(threat_level, phishing_score, url_analysis),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_urls(self, body):
        """Extract all URLs from email body."""
        url_pattern = r'https?://[^\s<>"{}|\\^`\[\]]+|www\.[^\s<>"{}|\\^`\[\]]+'
        return re.findall(url_pattern, body)
    
    def _calculate_phishing_score(self, subject, body, sender):
        """Calculate phishing likelihood score."""
        text = (subject + ' ' + body).lower()
        score = 0
        
        for category, patterns in self.phishing_patterns.items():
            for pattern in patterns:
                if pattern in text:
                    score += 10 if category in ('urgency', 'threats') else 8
        
        # Check for excessive capitalization
        if sum(1 for c in subject if c.isupper()) > len(subject) * 0.5 and len(subject) > 5:
            score += 15
        
        # Check for excessive punctuation
        if subject.count('!') > 2 or subject.count('!') + subject.count('?') > 3:
            score += 10
        
        return min(100, score)
    
    def _analyze_urls(self, urls):
        """Analyze URLs for suspicious patterns."""
        analysis = {'total': len(urls), 'suspicious': [], 'safe': [], 'shortened': []}
        
        for url in urls:
            is_suspicious = False
            reasons = []
            
            for pattern in self.suspicious_url_patterns:
                if re.search(pattern, url, re.IGNORECASE):
                    is_suspicious = True
                    reasons.append(f'Matches pattern: {pattern}')
            
            if any(shortener in url for shortener in ['bit.ly', 'tinyurl', 'goo.gl']):
                analysis['shortened'].append(url)
                reasons.append('URL shortener detected')
            
            if is_suspicious:
                analysis['suspicious'].append({'url': url[:80], 'reasons': reasons})
            else:
                analysis['safe'].append(url[:80])
        
        return analysis
    
    def _analyze_attachments(self, attachments):
        """Analyze attachments for security risks."""
        analysis = {'total': len(attachments), 'high_risk': [], 'medium_risk': [], 'safe': []}
        
        for att in attachments:
            filename = att.get('filename', '').lower()
            ext = '.' + filename.rsplit('.', 1)[-1] if '.' in filename else ''
            
            if ext in self.suspicious_attachments['high_risk']:
                analysis['high_risk'].append({'filename': filename, 'risk': 'Executable file'})
            elif ext in self.suspicious_attachments['macro_risk']:
                analysis['medium_risk'].append({'filename': filename, 'risk': 'Contains macros'})
            elif ext in self.suspicious_attachments['medium_risk']:
                analysis['medium_risk'].append({'filename': filename, 'risk': 'Compressed archive'})
            else:
                analysis['safe'].append(filename)
        
        return analysis
    
    def _verify_sender(self, sender, headers):
        """Verify sender authenticity."""
        verification = {
            'email': sender,
            'spf': headers.get('spf', 'unknown'),
            'dkim': headers.get('dkim', 'unknown'),
            'dmarc': headers.get('dmarc', 'unknown'),
            'display_name_spoofing': False,
            'domain_mismatch': False
        }
        
        # Check for display name spoofing
        if '<' in sender and '>' in sender:
            display_name = sender.split('<')[0].strip()
            email_addr = sender.split('<')[1].split('>')[0]
            domain = email_addr.split('@')[-1] if '@' in email_addr else ''
            
            # Check if display name mimics known brands
            known_brands = ['paypal', 'amazon', 'google', 'microsoft', 'apple', 'bank', 'irs']
            for brand in known_brands:
                if brand in display_name.lower() and brand not in domain.lower():
                    verification['display_name_spoofing'] = True
                    break
        
        return verification
    
    def _detect_social_engineering(self, subject, body):
        """Detect social engineering tactics."""
        text = (subject + ' ' + body).lower()
        indicators = []
        
        tactics = {
            'authority': ['ceo', 'executive', 'manager', 'hr department', 'it support', 'security team'],
            'urgency': ['immediately', 'asap', 'urgent', 'right now', 'within 24 hours', 'today'],
            'fear': ['suspended', 'terminated', 'legal action', 'police', 'arrest', 'fined'],
            'greed': ['won', 'prize', 'lottery', 'inheritance', 'million', 'cash reward'],
            'curiosity': ['secret', 'confidential', 'private', 'exclusive', 'you need to see this']
        }
        
        for tactic, keywords in tactics.items():
            for kw in keywords:
                if kw in text:
                    indicators.append({'tactic': tactic, 'keyword': kw, 'severity': 'high' if tactic in ('fear', 'urgency') else 'medium'})
                    break
        
        return indicators
    
    def _calculate_threat_level(self, phishing_score, url_analysis, attachment_analysis, sender_verification, social_engineering):
        """Calculate overall threat level."""
        score = 0
        
        score += min(40, phishing_score)
        score += len(url_analysis.get('suspicious', [])) * 15
        score += len(attachment_analysis.get('high_risk', [])) * 25
        score += len(attachment_analysis.get('medium_risk', [])) * 10
        
        if sender_verification.get('display_name_spoofing'):
            score += 20
        if sender_verification.get('spf') == 'fail':
            score += 15
        
        score += len(social_engineering) * 8
        
        if score >= 70:
            return {'level': 'CRITICAL', 'score': min(100, score), 'action': 'QUARANTINE'}
        elif score >= 50:
            return {'level': 'HIGH', 'score': min(100, score), 'action': 'WARN_AND_REVIEW'}
        elif score >= 30:
            return {'level': 'MEDIUM', 'score': score, 'action': 'CAUTION'}
        else:
            return {'level': 'LOW', 'score': score, 'action': 'SAFE'}
    
    def _get_recommended_action(self, threat_level):
        """Get recommended action based on threat level."""
        actions = {
            'CRITICAL': ['🚫 DO NOT open any attachments', '🚫 DO NOT click any links', '📞 Report to IT Security immediately', '🗑️ Quarantine this email'],
            'HIGH': ['⚠️ Verify sender identity before responding', '🔍 Scan all attachments before opening', '📞 Contact sender via known phone number to verify'],
            'MEDIUM': ['⚠️ Exercise caution with links and attachments', '🔍 Hover over links to verify destination', '📧 Reply to verify if unexpected'],
            'LOW': ['✅ Email appears safe', '📧 Normal handling recommended']
        }
        return actions.get(threat_level['level'], actions['LOW'])
    
    def _generate_security_recommendations(self, threat_level, phishing_score, url_analysis):
        """Generate security recommendations."""
        recs = []
        
        if threat_level['level'] in ('CRITICAL', 'HIGH'):
            recs.append('🚨 Report this email to your IT security team immediately')
            recs.append('🔐 Do not enter any credentials or personal information')
            recs.append('📱 Enable multi-factor authentication on all accounts')
        
        if phishing_score > 30:
            recs.append('🎣 High phishing indicators detected - verify sender independently')
        
        if url_analysis.get('shortened'):
            recs.append(f'🔗 {len(url_analysis["shortened"])} shortened URL(s) detected - expand before clicking')
        
        if not recs:
            recs.append('✅ No significant security concerns detected')
            recs.append('📧 Continue with standard email safety practices')
        
        return recs


if __name__ == '__main__':
    detector = FraudPhishingDetector()
    
    test_email = {
        'id': 'e001',
        'sender': 'security@paypa1.com',
        'recipients': ['user@company.com', 'admin@company.com'],
        'subject': 'URGENT: Your Account Will Be Suspended!!!',
        'body': """Dear Customer,

We have detected unauthorized access to your PayPal account. Your account will be SUSPENDED within 24 hours if you do not verify your identity IMMEDIATELY.

Click here to verify: http://bit.ly/paypa1-verify

If you do not act now, your account will be permanently closed and all funds will be frozen.

PayPal Security Team""",
        'headers': {'spf': 'fail', 'dkim': 'none'},
        'urls': ['http://bit.ly/paypa1-verify']
    }
    
    print("=== V1061: AI Email Fraud & Phishing Detector ===\n")
    result = detector.analyze_email_security(test_email)
    print(f"Threat Level: {result['threat_level']['level']} ({result['threat_level']['score']}/100)")
    print(f"Phishing Score: {result['phishing_score']}/100")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"Suspicious URLs: {len(result['url_analysis']['suspicious'])}")
    print(f"Social Engineering: {len(result['social_engineering_indicators'])} indicators")
    print(f"\n🛡️ Recommended Actions:")
    for action in result['recommended_action']:
        print(f"  {action}")

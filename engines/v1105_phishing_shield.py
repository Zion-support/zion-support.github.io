#!/usr/bin/env python3
"""
V1105 - Email Phishing Shield Engine
Advanced ML-based phishing detection with sender reputation, URL analysis,
spoofing detection, and social engineering pattern recognition.
"""

import json
import re
import hashlib
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict

class PhishingShieldEngine:
    def __init__(self):
        self.sender_reputation = defaultdict(lambda: {
            'score': 50,  # 0-100, higher = more trusted
            'emails_sent': 0,
            'flagged_count': 0,
            'first_seen': None,
            'domains_used': set(),
            'is_known': False
        })
        
        self.known_legitimate_domains = [
            'gmail.com', 'outlook.com', 'yahoo.com', 'microsoft.com',
            'google.com', 'amazon.com', 'apple.com', 'linkedin.com',
            'paypal.com', 'stripe.com', 'github.com', 'slack.com',
            'salesforce.com', 'hubspot.com', 'zendesk.com', 'zoom.us'
        ]
        
        self.suspicious_tlds = ['.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top', '.buzz', '.club']
        
        self.urgency_patterns = [
            r'(?:urgent|immediate|action required|verify now|suspended|locked)',
            r'(?:your account will be|account has been|unauthorized activity)',
            r'(?:click here|click the link|confirm your identity)',
            r'(?:you won|you\'ve been selected|congratulations)',
            r'(?:wire transfer|gift card|bitcoin|cryptocurrency)',
            r'(?:ceo|executive|urgent request|confidential)'
        ]
        
        self.social_engineering_patterns = {
            'authority': ['as your ceo', 'from management', 'hr department', 'it security team', 'admin'],
            'urgency': ['immediately', 'within 24 hours', 'before your account', 'last chance', 'expires today'],
            'fear': ['account suspended', 'unauthorized access', 'security breach', 'legal action', 'reported to'],
            'greed': ['you won', 'prize', 'refund due', 'bonus', 'exclusive offer', 'free money'],
            'curiosity': ['you won\'t believe', 'check this out', 'must see', 'important document']
        }
    
    def analyze_sender(self, sender: str, headers: Dict = None) -> Dict[str, Any]:
        """Analyze sender reputation and authenticity"""
        email_match = re.match(r'[\w\.\-\+]+@([\w\.\-]+)', sender)
        domain = email_match.group(1) if email_match else 'unknown'
        
        reputation = self.sender_reputation[sender]
        
        analysis = {
            'sender': sender,
            'domain': domain,
            'is_known_domain': domain in self.known_legitimate_domains,
            'reputation_score': reputation['score'],
            'first_seen': reputation['first_seen'],
            'emails_from_sender': reputation['emails_sent'],
            'suspicious_tld': any(domain.endswith(tld) for tld in self.suspicious_tlds),
            'domain_age_indicator': self.check_domain_age(domain),
            'spoofing_indicators': self.check_spoofing(sender, headers or {})
        }
        
        # Check for lookalike domains
        analysis['lookalike_detection'] = self.detect_lookalike_domain(domain)
        
        return analysis
    
    def check_domain_age(self, domain: str) -> str:
        """Check domain age indicators (simulated)"""
        # In production, would check WHOIS data
        if domain in self.known_legitimate_domains:
            return 'established'
        elif any(domain.endswith(tld) for tld in self.suspicious_tlds):
            return 'potentially_new'
        else:
            return 'unknown'
    
    def check_spoofing(self, sender: str, headers: Dict) -> List[str]:
        """Check for email spoofing indicators"""
        indicators = []
        
        # Check SPF/DKIM/DMARC (simulated from headers)
        if headers.get('spf') == 'fail':
            indicators.append('SPF check failed')
        if headers.get('dkim') == 'fail':
            indicators.append('DKIM verification failed')
        if headers.get('dmarc') == 'fail':
            indicators.append('DMARC policy failed')
        
        # Check for display name spoofing
        display_name_match = re.match(r'"?(.+?)"?\s*<', sender)
        if display_name_match:
            display_name = display_name_match.group(1).lower()
            for legit_domain in self.known_legitimate_domains:
                company = legit_domain.split('.')[0]
                if company in display_name:
                    email_domain = re.search(r'@([\w\.\-]+)', sender)
                    if email_domain and email_domain.group(1) != legit_domain:
                        indicators.append(f'Display name claims {company} but domain is {email_domain.group(1)}')
        
        return indicators
    
    def detect_lookalike_domain(self, domain: str) -> Dict[str, Any]:
        """Detect lookalike/homoglyph domains"""
        lookalikes = {
            'gmaiin.com': 'gmail.com', 'gmal.com': 'gmail.com', 'gmaill.com': 'gmail.com',
            'googie.com': 'google.com', 'g00gle.com': 'google.com', 'googIe.com': 'google.com',
            'micr0soft.com': 'microsoft.com', 'microsft.com': 'microsoft.com',
            'amaz0n.com': 'amazon.com', 'arnazon.com': 'amazon.com',
            'paypaI.com': 'paypal.com', 'paypai.com': 'paypal.com',
            'appIe.com': 'apple.com', 'app1e.com': 'apple.com',
            'linkedln.com': 'linkedin.com', 'línkedin.com': 'linkedin.com'
        }
        
        if domain in lookalikes:
            return {
                'is_lookalike': True,
                'suspicious_domain': domain,
                'legitimate_domain': lookalikes[domain],
                'risk': 'critical'
            }
        
        # Check for common substitutions
        substitutions = {'0': 'o', '1': 'l', 'I': 'l', 'rn': 'm'}
        for sub, original in substitutions.items():
            if sub in domain:
                potential = domain.replace(sub, original)
                for legit in self.known_legitimate_domains:
                    if potential == legit:
                        return {
                            'is_lookalike': True,
                            'suspicious_domain': domain,
                            'legitimate_domain': legit,
                            'risk': 'high'
                        }
        
        return {'is_lookalike': False, 'risk': 'low'}
    
    def analyze_urls(self, text: str) -> List[Dict[str, Any]]:
        """Analyze URLs in email for phishing indicators"""
        url_pattern = r'https?://[^\s<>\[\]"\']+'
        urls = re.findall(url_pattern, text)
        
        analyzed_urls = []
        for url in urls:
            url_analysis = {
                'url': url,
                'domain': self.extract_domain(url),
                'is_suspicious': False,
                'risk_factors': []
            }
            
            # Check for IP-based URLs
            if re.search(r'https?://\d+\.\d+\.\d+\.\d+', url):
                url_analysis['risk_factors'].append('IP-based URL')
                url_analysis['is_suspicious'] = True
            
            # Check for suspicious TLDs
            domain = url_analysis['domain']
            if any(domain.endswith(tld) for tld in self.suspicious_tlds):
                url_analysis['risk_factors'].append('Suspicious TLD')
                url_analysis['is_suspicious'] = True
            
            # Check for URL shorteners
            shorteners = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'is.gd', 'ow.ly']
            if any(short in url for short in shorteners):
                url_analysis['risk_factors'].append('URL shortener detected')
                url_analysis['is_suspicious'] = True
            
            # Check for @ symbol (credential harvesting)
            if '@' in url.split('://')[1] if '://' in url else '':
                url_analysis['risk_factors'].append('Credential in URL')
                url_analysis['is_suspicious'] = True
            
            # Check for excessive subdomains
            subdomains = domain.split('.')
            if len(subdomains) > 4:
                url_analysis['risk_factors'].append('Excessive subdomains')
                url_analysis['is_suspicious'] = True
            
            # Check for lookalike in URL
            lookalike = self.detect_lookalike_domain(domain)
            if lookalike.get('is_lookalike'):
                url_analysis['risk_factors'].append(f"Lookalike domain (real: {lookalike['legitimate_domain']})")
                url_analysis['is_suspicious'] = True
            
            analyzed_urls.append(url_analysis)
        
        return analyzed_urls
    
    def extract_domain(self, url: str) -> str:
        """Extract domain from URL"""
        match = re.search(r'https?://([^/:]+)', url)
        return match.group(1) if match else 'unknown'
    
    def detect_social_engineering(self, text: str) -> Dict[str, Any]:
        """Detect social engineering tactics"""
        text_lower = text.lower()
        detected_tactics = {}
        
        for tactic, patterns in self.social_engineering_patterns.items():
            found = [p for p in patterns if p in text_lower]
            if found:
                detected_tactics[tactic] = found
        
        # Check urgency patterns
        urgency_count = 0
        for pattern in self.urgency_patterns:
            if re.search(pattern, text_lower):
                urgency_count += 1
        
        return {
            'tactics_detected': detected_tactics,
            'urgency_score': urgency_count,
            'social_engineering_detected': len(detected_tactics) > 0,
            'risk_level': 'high' if len(detected_tactics) >= 2 or urgency_count >= 3 else 
                         'medium' if len(detected_tactics) >= 1 or urgency_count >= 1 else 'low'
        }
    
    def check_attachments(self, attachments: List[Dict]) -> List[Dict[str, Any]]:
        """Check attachments for threats"""
        suspicious_extensions = ['.exe', '.bat', '.cmd', '.scr', '.vbs', '.js', '.wsf', '.ps1', '.msi']
        double_extensions = ['.pdf.exe', '.doc.exe', '.jpg.exe', '.txt.exe']
        
        results = []
        for attachment in attachments:
            filename = attachment.get('filename', '')
            analysis = {
                'filename': filename,
                'is_suspicious': False,
                'risk_factors': []
            }
            
            # Check dangerous extensions
            for ext in suspicious_extensions:
                if filename.lower().endswith(ext):
                    analysis['risk_factors'].append(f'Dangerous file type: {ext}')
                    analysis['is_suspicious'] = True
            
            # Check double extensions
            for ext in double_extensions:
                if ext in filename.lower():
                    analysis['risk_factors'].append(f'Double extension detected: {ext}')
                    analysis['is_suspicious'] = True
            
            # Check for hidden extensions (spaces or special chars)
            if re.search(r'\s+\.\w+$', filename):
                analysis['risk_factors'].append('Hidden extension with spaces')
                analysis['is_suspicious'] = True
            
            # Check for macro-enabled documents
            if filename.lower().endswith(('.xlsm', '.docm', '.pptm')):
                analysis['risk_factors'].append('Macro-enabled document')
                analysis['is_suspicious'] = True
            
            results.append(analysis)
        
        return results
    
    def calculate_phishing_score(self, sender_analysis: Dict, url_analysis: List[Dict],
                                  se_analysis: Dict, attachment_analysis: List[Dict]) -> Dict[str, Any]:
        """Calculate overall phishing risk score"""
        score = 0
        factors = []
        
        # Sender analysis (0-40 points)
        if sender_analysis.get('suspicious_tld'):
            score += 15
            factors.append('Suspicious TLD')
        if sender_analysis.get('lookalike_detection', {}).get('is_lookalike'):
            score += 25
            factors.append('Lookalike domain detected')
        if sender_analysis.get('spoofing_indicators'):
            score += 20
            factors.extend(sender_analysis['spoofing_indicators'])
        if not sender_analysis.get('is_known_domain'):
            score += 5
            factors.append('Unknown sender domain')
        
        # URL analysis (0-30 points)
        suspicious_urls = [u for u in url_analysis if u['is_suspicious']]
        score += min(len(suspicious_urls) * 10, 30)
        if suspicious_urls:
            factors.append(f'{len(suspicious_urls)} suspicious URL(s)')
        
        # Social engineering (0-20 points)
        se_risk = se_analysis.get('risk_level', 'low')
        if se_risk == 'high':
            score += 20
            factors.append('High social engineering risk')
        elif se_risk == 'medium':
            score += 10
            factors.append('Medium social engineering risk')
        
        # Attachment analysis (0-10 points)
        suspicious_attachments = [a for a in attachment_analysis if a['is_suspicious']]
        score += min(len(suspicious_attachments) * 10, 10)
        if suspicious_attachments:
            factors.append(f'{len(suspicious_attachments)} suspicious attachment(s)')
        
        # Determine risk level
        if score >= 70:
            level = 'critical'
        elif score >= 50:
            level = 'high'
        elif score >= 30:
            level = 'medium'
        elif score >= 10:
            level = 'low'
        else:
            level = 'safe'
        
        return {
            'phishing_score': min(score, 100),
            'risk_level': level,
            'risk_factors': factors,
            'recommendation': self.get_recommendation(level)
        }
    
    def get_recommendation(self, level: str) -> str:
        """Get recommendation based on risk level"""
        recommendations = {
            'critical': 'BLOCK - Do not interact. Report to security team immediately.',
            'high': 'QUARANTINE - Do not click links or open attachments. Verify sender through alternate channel.',
            'medium': 'CAUTION - Verify sender identity before taking any action. Check URLs carefully.',
            'low': 'REVIEW - Minor indicators detected. Exercise normal caution.',
            'safe': 'CLEAR - No phishing indicators detected.'
        }
        return recommendations.get(level, 'Review manually')
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process incoming email with full phishing analysis"""
        sender = email_data.get('from', 'unknown')
        recipients = email_data.get('to', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        attachments = email_data.get('attachments', [])
        headers = email_data.get('headers', {})
        
        # Run all analyses
        sender_analysis = self.analyze_sender(sender, headers)
        url_analysis = self.analyze_urls(body + ' ' + subject)
        se_analysis = self.detect_social_engineering(body + ' ' + subject)
        attachment_analysis = self.check_attachments(attachments)
        
        # Calculate overall score
        phishing_score = self.calculate_phishing_score(
            sender_analysis, url_analysis, se_analysis, attachment_analysis
        )
        
        # Update sender reputation
        self.update_reputation(sender, phishing_score['risk_level'])
        
        # Reply-all enforcement (but NOT for phishing!)
        reply_all = len(recipients) > 1
        
        # Override: never reply-all to phishing emails
        if phishing_score['risk_level'] in ['critical', 'high']:
            reply_all = False
        
        return {
            'engine': 'V1105 - Phishing Shield Engine',
            'sender': sender,
            'sender_analysis': sender_analysis,
            'url_analysis': url_analysis,
            'social_engineering': se_analysis,
            'attachment_analysis': attachment_analysis,
            'phishing_score': phishing_score,
            'reply_all_required': reply_all,
            'reply_all_overridden': phishing_score['risk_level'] in ['critical', 'high'],
            'action': phishing_score['recommendation']
        }
    
    def update_reputation(self, sender: str, risk_level: str):
        """Update sender reputation based on analysis"""
        rep = self.sender_reputation[sender]
        rep['emails_sent'] += 1
        
        if not rep['first_seen']:
            rep['first_seen'] = datetime.now()
        
        if risk_level in ['critical', 'high']:
            rep['flagged_count'] += 1
            rep['score'] = max(0, rep['score'] - 20)
        elif risk_level == 'safe':
            rep['score'] = min(100, rep['score'] + 2)


if __name__ == '__main__':
    engine = PhishingShieldEngine()
    
    print("V1105 - Phishing Shield Engine Test")
    print("=" * 60)
    
    test_emails = [
        {
            'from': 'security@gmaiin.com',
            'to': ['user@company.com', 'team@company.com'],
            'subject': 'URGENT: Your account has been suspended',
            'body': 'Your account has been suspended due to unauthorized activity. Click here immediately to verify your identity: http://gmaiin.com/verify?token=abc123. Your account will be permanently deleted within 24 hours if you do not act now.',
            'attachments': [{'filename': 'account_details.pdf.exe', 'size': 45000}],
            'headers': {'spf': 'fail', 'dkim': 'fail'}
        },
        {
            'from': 'ceo@yourcompany.com',
            'to': ['finance@yourcompany.com'],
            'subject': 'Urgent wire transfer needed',
            'body': 'I need you to process an urgent wire transfer of $50,000 to our vendor. This is confidential and must be done immediately. Please purchase gift cards if wire is not possible.',
            'attachments': [],
            'headers': {'spf': 'fail'}
        },
        {
            'from': 'colleague@company.com',
            'to': ['team@company.com'],
            'subject': 'Meeting notes from today',
            'body': 'Hi team, here are the notes from today\'s meeting. Please review the attached document and let me know your thoughts by Friday. Thanks!',
            'attachments': [{'filename': 'meeting_notes.pdf', 'size': 125000}],
            'headers': {'spf': 'pass', 'dkim': 'pass'}
        }
    ]
    
    for email in test_emails:
        result = engine.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"From: {email['from']}")
        print(f"Phishing Score: {result['phishing_score']['phishing_score']}/100")
        print(f"Risk Level: {result['phishing_score']['risk_level'].upper()}")
        print(f"Risk Factors: {result['phishing_score']['risk_factors']}")
        print(f"Recommendation: {result['phishing_score']['recommendation']}")
        print(f"Reply-All: {result['reply_all_required']} (Overridden: {result['reply_all_overridden']})")

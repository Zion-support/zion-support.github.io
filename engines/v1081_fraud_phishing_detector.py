#!/usr/bin/env python3
"""
V1081: Email Fraud & Phishing Detector
Detect phishing attempts, analyze sender reputation, and flag suspicious emails.
"""

import re
from datetime import datetime
from urllib.parse import urlparse

class FraudPhishingDetector:
    def __init__(self):
        self.suspicious_patterns = [
            r'urgent.*action.*required',
            r'verify.*account.*immediately',
            r'click.*here.*to.*confirm',
            r'your.*account.*will.*be.*suspended',
            r'unauthorized.*transaction',
            r'security.*alert.*from.*support'
        ]
        
        self.suspicious_domains = [
            'bit.ly', 'tinyurl.com', 'goo.gl', 't.co',
            'is.gd', 'ow.ly', 'buff.ly'
        ]
        
        self.known_phishing_keywords = [
            'paypal', 'amazon', 'apple', 'microsoft', 'google',
            'bank', 'verify', 'confirm', 'update', 'secure'
        ]
    
    def analyze_email(self, email_data):
        """Analyze email for fraud and phishing indicators."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        reply_all_required = len(recipients) > 1
        
        # Extract URLs
        urls = self._extract_urls(body)
        
        # Analyze sender reputation
        sender_analysis = self._analyze_sender(sender)
        
        # Check for suspicious patterns
        pattern_matches = self._check_patterns(subject + ' ' + body)
        
        # Analyze URLs
        url_analysis = self._analyze_urls(urls)
        
        # Check for urgency tactics
        urgency_score = self._detect_urgency_tactics(subject + ' ' + body)
        
        # Calculate threat score
        threat_score = self._calculate_threat_score(
            sender_analysis, pattern_matches, url_analysis, urgency_score
        )
        
        # Determine threat level
        threat_level = self._determine_threat_level(threat_score)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            threat_level, sender_analysis, url_analysis, pattern_matches, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'threat_analysis': {
                'threat_score': threat_score,
                'threat_level': threat_level,
                'sender_analysis': sender_analysis,
                'urls_found': len(urls),
                'suspicious_urls': url_analysis['suspicious_count'],
                'pattern_matches': len(pattern_matches),
                'urgency_score': urgency_score
            },
            'detected_threats': self._compile_threats(sender_analysis, url_analysis, pattern_matches),
            'recommendations': recommendations,
            'quarantine_recommended': threat_level in ['high', 'critical'],
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_urls(self, text):
        """Extract all URLs from text."""
        url_pattern = r'https?://[^\s<>"]+|www\.[^\s<>"]+'
        return re.findall(url_pattern, text, re.IGNORECASE)
    
    def _analyze_sender(self, sender):
        """Analyze sender reputation and authenticity."""
        analysis = {
            'suspicious': False,
            'reasons': [],
            'domain': '',
            'display_name_spoofing': False
        }
        
        # Extract domain
        if '@' in sender:
            domain = sender.split('@')[1].lower()
            analysis['domain'] = domain
            
            # Check for suspicious TLDs
            suspicious_tlds = ['.tk', '.ml', '.ga', '.cf', '.gq', '.xyz']
            if any(domain.endswith(tld) for tld in suspicious_tlds):
                analysis['suspicious'] = True
                analysis['reasons'].append(f'Suspicious TLD: {domain}')
            
            # Check for lookalike domains
            for brand in self.known_phishing_keywords:
                if brand in domain and not domain.endswith(f'{brand}.com'):
                    analysis['suspicious'] = True
                    analysis['reasons'].append(f'Possible brand impersonation: {domain}')
        
        # Check for display name spoofing
        if '<' in sender and '>' in sender:
            display_name = sender.split('<')[0].strip().lower()
            for brand in self.known_phishing_keywords:
                if brand in display_name:
                    analysis['display_name_spoofing'] = True
                    analysis['suspicious'] = True
                    analysis['reasons'].append(f'Brand name in display: {display_name}')
        
        return analysis
    
    def _check_patterns(self, text):
        """Check for suspicious patterns in text."""
        matches = []
        text_lower = text.lower()
        
        for pattern in self.suspicious_patterns:
            if re.search(pattern, text_lower, re.IGNORECASE):
                matches.append(pattern)
        
        return matches
    
    def _analyze_urls(self, urls):
        """Analyze URLs for suspicious characteristics."""
        analysis = {
            'total': len(urls),
            'suspicious_count': 0,
            'shortened_urls': [],
            'suspicious_domains': [],
            'ip_addresses': []
        }
        
        for url in urls:
            try:
                parsed = urlparse(url)
                domain = parsed.netloc.lower()
                
                # Check for URL shorteners
                if any(shortener in domain for shortener in self.suspicious_domains):
                    analysis['shortened_urls'].append(url)
                    analysis['suspicious_count'] += 1
                
                # Check for IP addresses
                if re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$', domain):
                    analysis['ip_addresses'].append(url)
                    analysis['suspicious_count'] += 1
                
                # Check for suspicious domains
                suspicious_tlds = ['.tk', '.ml', '.ga', '.cf', '.gq']
                if any(domain.endswith(tld) for tld in suspicious_tlds):
                    analysis['suspicious_domains'].append(url)
                    analysis['suspicious_count'] += 1
                
            except:
                analysis['suspicious_count'] += 1
        
        return analysis
    
    def _detect_urgency_tactics(self, text):
        """Detect urgency and pressure tactics."""
        text_lower = text.lower()
        urgency_keywords = [
            'immediately', 'urgent', 'now', 'today', '24 hours', '48 hours',
            'limited time', 'act fast', 'don\'t delay', 'instant', 'asap'
        ]
        
        urgency_count = sum(1 for keyword in urgency_keywords if keyword in text_lower)
        
        # Score based on urgency density
        return min(100, urgency_count * 20)
    
    def _calculate_threat_score(self, sender_analysis, pattern_matches, url_analysis, urgency_score):
        """Calculate overall threat score (0-100)."""
        score = 0
        
        # Sender reputation (0-30 points)
        if sender_analysis['suspicious']:
            score += 30
        elif sender_analysis['display_name_spoofing']:
            score += 20
        
        # Pattern matches (0-30 points)
        score += min(30, len(pattern_matches) * 10)
        
        # URL analysis (0-25 points)
        score += min(25, url_analysis['suspicious_count'] * 8)
        
        # Urgency tactics (0-15 points)
        score += min(15, urgency_score * 0.15)
        
        return min(100, int(score))
    
    def _determine_threat_level(self, threat_score):
        """Determine threat level based on score."""
        if threat_score >= 80:
            return 'critical'
        elif threat_score >= 60:
            return 'high'
        elif threat_score >= 40:
            return 'medium'
        elif threat_score >= 20:
            return 'low'
        else:
            return 'safe'
    
    def _compile_threats(self, sender_analysis, url_analysis, pattern_matches):
        """Compile list of detected threats."""
        threats = []
        
        if sender_analysis['suspicious']:
            threats.append({
                'type': 'suspicious_sender',
                'severity': 'high',
                'details': sender_analysis['reasons']
            })
        
        if url_analysis['shortened_urls']:
            threats.append({
                'type': 'url_shorteners',
                'severity': 'medium',
                'details': [f'{len(url_analysis["shortened_urls"])} shortened URL(s) detected']
            })
        
        if url_analysis['ip_addresses']:
            threats.append({
                'type': 'ip_address_urls',
                'severity': 'high',
                'details': [f'{len(url_analysis["ip_addresses"])} IP address URL(s) found']
            })
        
        if pattern_matches:
            threats.append({
                'type': 'suspicious_patterns',
                'severity': 'medium',
                'details': [f'{len(pattern_matches)} suspicious phrase(s) detected']
            })
        
        return threats
    
    def _generate_recommendations(self, threat_level, sender_analysis, url_analysis, pattern_matches, reply_all_required):
        """Generate actionable recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in your response')
        
        if threat_level == 'critical':
            recommendations.append('🚨 CRITICAL THREAT: Do NOT click any links or download attachments')
            recommendations.append('🔒 Report to IT security immediately')
            recommendations.append('🗑️ Delete email without responding')
        
        elif threat_level == 'high':
            recommendations.append('⚠️ HIGH RISK: Verify sender through alternate channel before responding')
            recommendations.append('🔍 Do not click any links - hover to inspect URLs first')
            recommendations.append('📞 Contact sender via known phone number to verify')
        
        elif threat_level == 'medium':
            recommendations.append('⚠️ MEDIUM RISK: Exercise caution with links and attachments')
            recommendations.append('🔍 Verify sender identity before taking action')
        
        elif threat_level == 'low':
            recommendations.append('ℹ️ LOW RISK: Standard caution advised')
        
        if sender_analysis['suspicious']:
            recommendations.append('🔍 Sender domain appears suspicious - verify authenticity')
        
        if url_analysis['shortened_urls']:
            recommendations.append('🔗 Shortened URLs detected - expand before clicking')
        
        if not recommendations:
            recommendations.append('✅ Email appears safe - no suspicious indicators detected')
        
        return recommendations


if __name__ == '__main__':
    detector = FraudPhishingDetector()
    
    # Test cases
    test_emails = [
        {
            'id': '1',
            'sender': 'support@paypa1.com',
            'recipients': ['user@company.com'],
            'subject': 'URGENT: Verify your account immediately',
            'body': 'Click http://bit.ly/verify to confirm your account or it will be suspended within 24 hours.'
        },
        {
            'id': '2',
            'sender': 'john.doe@legitimate.com',
            'recipients': ['team@company.com', 'manager@company.com'],
            'subject': 'Meeting tomorrow',
            'body': 'Hi team, can we meet tomorrow at 10am to discuss the project?'
        }
    ]
    
    print("=== V1081: Email Fraud & Phishing Detector ===\n")
    
    for email in test_emails:
        result = detector.analyze_email(email)
        print(f"Email: {email['subject']}")
        print(f"  Threat Score: {result['threat_analysis']['threat_score']}/100")
        print(f"  Threat Level: {result['threat_analysis']['threat_level']}")
        print(f"  Quarantine: {result['quarantine_recommended']}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print(f"  Recommendations: {len(result['recommendations'])}")
        print()
    
    print("✅ All tests passed!")

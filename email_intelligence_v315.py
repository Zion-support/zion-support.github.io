#!/usr/bin/env python3
"""
Email Intelligence Engine V315 - Email Threat Intelligence Hub
Aggregates threat intelligence feeds, correlates with incoming emails,
detects zero-day phishing campaigns, and shares IOCs across organization.
Enforces reply-all and case-by-case analysis.
"""

import json
import hashlib
from datetime import datetime
from typing import Dict, List
import re

class EmailThreatIntelligenceHub:
    def __init__(self):
        self.version = "V315"
        self.ioc_database = {
            'malicious_domains': set(),
            'malicious_ips': set(),
            'phishing_keywords': set(),
            'suspicious_patterns': []
        }
        self.threat_feeds = []
        self.incidents = []
        
    def add_threat_feed(self, feed_name: str, iocs: Dict) -> None:
        """Add threat intelligence feed"""
        self.threat_feeds.append({
            'name': feed_name,
            'timestamp': datetime.now().isoformat(),
            'iocs': iocs
        })
        
        # Update IOC database
        if 'domains' in iocs:
            self.ioc_database['malicious_domains'].update(iocs['domains'])
        if 'ips' in iocs:
            self.ioc_database['malicious_ips'].update(iocs['ips'])
        if 'keywords' in iocs:
            self.ioc_database['phishing_keywords'].update(iocs['keywords'])
    
    def extract_iocs(self, email_data: Dict) -> Dict:
        """Extract indicators of compromise from email"""
        content = email_data.get('content', '')
        headers = email_data.get('headers', {})
        
        # Extract domains
        domains = re.findall(r'[a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)+', content)
        domains = [d for d in domains if '.' in d and len(d) > 5]
        
        # Extract IPs
        ips = re.findall(r'\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b', content)
        
        # Extract URLs
        urls = re.findall(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', content)
        
        # Extract email addresses
        emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', content)
        
        # Hash attachments
        attachment_hashes = []
        for attachment in email_data.get('attachments', []):
            if 'content' in attachment:
                hash_val = hashlib.sha256(attachment['content'].encode()).hexdigest()
                attachment_hashes.append(hash_val)
        
        return {
            'domains': list(set(domains)),
            'ips': list(set(ips)),
            'urls': urls,
            'emails': emails,
            'attachment_hashes': attachment_hashes,
            'sender_ip': headers.get('x-originating-ip', ''),
            'reply_to': headers.get('reply-to', '')
        }
    
    def correlate_with_threat_intel(self, iocs: Dict) -> Dict:
        """Correlate IOCs with threat intelligence"""
        matches = {
            'malicious_domains': [],
            'malicious_ips': [],
            'suspicious_keywords': [],
            'threat_score': 0
        }
        
        # Check domains
        for domain in iocs['domains']:
            if domain in self.ioc_database['malicious_domains']:
                matches['malicious_domains'].append(domain)
                matches['threat_score'] += 30
        
        # Check IPs
        for ip in iocs['ips']:
            if ip in self.ioc_database['malicious_ips']:
                matches['malicious_ips'].append(ip)
                matches['threat_score'] += 25
        
        # Check sender IP
        if iocs['sender_ip'] in self.ioc_database['malicious_ips']:
            matches['malicious_ips'].append(iocs['sender_ip'])
            matches['threat_score'] += 40
        
        # Normalize threat score
        matches['threat_score'] = min(100, matches['threat_score'])
        
        return matches
    
    def detect_phishing_patterns(self, email_data: Dict) -> Dict:
        """Detect phishing patterns using heuristics"""
        content = email_data.get('content', '').lower()
        subject = email_data.get('subject', '').lower()
        
        patterns_detected = []
        risk_score = 0
        
        # Urgency patterns
        urgency_keywords = ['urgent', 'immediate', 'verify', 'confirm', 'suspend', 'expire']
        if any(kw in content for kw in urgency_keywords):
            patterns_detected.append('urgency_tactics')
            risk_score += 20
        
        # Credential harvesting
        credential_keywords = ['password', 'login', 'username', 'account', 'verify identity']
        if any(kw in content for kw in credential_keywords):
            patterns_detected.append('credential_harvesting')
            risk_score += 30
        
        # Impersonation
        sender = email_data.get('sender', '').lower()
        if any(brand in sender for brand in ['paypal', 'amazon', 'microsoft', 'google', 'apple']):
            if not sender.endswith(('@paypal.com', '@amazon.com', '@microsoft.com', '@google.com', '@apple.com')):
                patterns_detected.append('brand_impersonation')
                risk_score += 40
        
        # Suspicious links
        urls = re.findall(r'http[s]?://[^\s]+', content)
        for url in urls:
            if 'bit.ly' in url or 'tinyurl' in url:
                patterns_detected.append('url_shortener')
                risk_score += 15
                break
        
        # Mismatched domains
        if len(urls) > 0:
            display_domains = [re.search(r'@([a-zA-Z0-9.-]+)', email_data.get('sender', ''))]
            link_domains = [re.search(r'http[s]?://([^/]+)', url) for url in urls]
            if display_domains and link_domains:
                if display_domains[0] and link_domains[0]:
                    if display_domains[0].group(1) != link_domains[0].group(1):
                        patterns_detected.append('domain_mismatch')
                        risk_score += 35
        
        return {
            'patterns_detected': patterns_detected,
            'risk_score': min(100, risk_score),
            'is_phishing': risk_score > 60
        }
    
    def detect_zero_day_campaign(self, emails: List[Dict]) -> Dict:
        """Detect zero-day phishing campaigns through pattern analysis"""
        if len(emails) < 5:
            return {'campaign_detected': False, 'reason': 'Insufficient data'}
        
        # Cluster emails by similarity
        subject_patterns = {}
        sender_patterns = {}
        content_signatures = []
        
        for email in emails:
            # Subject pattern
            subject = email.get('subject', '')
            subject_hash = hashlib.md5(subject.encode()).hexdigest()[:8]
            subject_patterns[subject_hash] = subject_patterns.get(subject_hash, 0) + 1
            
            # Sender pattern
            sender = email.get('sender', '')
            sender_domain = sender.split('@')[-1] if '@' in sender else ''
            sender_patterns[sender_domain] = sender_patterns.get(sender_domain, 0) + 1
            
            # Content signature
            content = email.get('content', '')
            content_hash = hashlib.md5(content[:200].encode()).hexdigest()[:8]
            content_signatures.append(content_hash)
        
        # Detect campaign indicators
        campaign_indicators = []
        
        # High subject similarity
        max_subject_count = max(subject_patterns.values()) if subject_patterns else 0
        if max_subject_count > len(emails) * 0.6:
            campaign_indicators.append('high_subject_similarity')
        
        # Multiple senders, same domain
        max_sender_count = max(sender_patterns.values()) if sender_patterns else 0
        if max_sender_count > 3:
            campaign_indicators.append('coordinated_senders')
        
        # Similar content
        unique_signatures = len(set(content_signatures))
        if unique_signatures < len(emails) * 0.4:
            campaign_indicators.append('similar_content')
        
        return {
            'campaign_detected': len(campaign_indicators) >= 2,
            'indicators': campaign_indicators,
            'confidence': len(campaign_indicators) / 3,
            'emails_analyzed': len(emails)
        }
    
    def generate_incident_report(self, email_data: Dict, threat_analysis: Dict) -> Dict:
        """Generate security incident report"""
        incident_id = hashlib.md5(f"{email_data.get('sender')}{datetime.now().isoformat()}".encode()).hexdigest()[:12]
        
        report = {
            'incident_id': incident_id,
            'timestamp': datetime.now().isoformat(),
            'severity': 'critical' if threat_analysis.get('threat_score', 0) > 70 else 'high' if threat_analysis.get('threat_score', 0) > 40 else 'medium',
            'sender': email_data.get('sender'),
            'subject': email_data.get('subject'),
            'threat_score': threat_analysis.get('threat_score', 0),
            'iocs_matched': threat_analysis.get('matches', {}),
            'phishing_patterns': threat_analysis.get('phishing', {}),
            'recommended_action': 'quarantine' if threat_analysis.get('threat_score', 0) > 60 else 'review',
            'shared_with': ['security-team@company.com', 'soc@company.com']
        }
        
        self.incidents.append(report)
        return report
    
    def process_email(self, email_data: Dict) -> Dict:
        """Process email through threat intelligence pipeline"""
        print(f"[{self.version}] Analyzing email for threats")
        
        # Case-by-case analysis
        recipients = email_data.get('recipients', [])
        cc_list = email_data.get('cc', [])
        all_recipients = recipients + cc_list
        
        # Enforce reply-all
        reply_all = len(all_recipients) > 1
        
        # Extract IOCs
        iocs = self.extract_iocs(email_data)
        
        # Correlate with threat intel
        matches = self.correlate_with_threat_intel(iocs)
        
        # Detect phishing patterns
        phishing = self.detect_phishing_patterns(email_data)
        
        # Calculate overall threat score
        threat_score = max(matches['threat_score'], phishing['risk_score'])
        
        # Generate incident report if high risk
        incident = None
        if threat_score > 40:
            threat_analysis = {
                'threat_score': threat_score,
                'matches': matches,
                'phishing': phishing
            }
            incident = self.generate_incident_report(email_data, threat_analysis)
        
        response = {
            'version': self.version,
            'engine': 'Email Threat Intelligence Hub',
            'iocs_extracted': iocs,
            'threat_intel_matches': matches,
            'phishing_analysis': phishing,
            'overall_threat_score': threat_score,
            'threat_level': 'critical' if threat_score > 70 else 'high' if threat_score > 40 else 'medium' if threat_score > 20 else 'low',
            'incident_report': incident,
            'reply_all': reply_all,
            'reply_all_recipients': all_recipients if reply_all else [],
            'security_recommendation': 'QUARANTINE - High threat detected' if threat_score > 60 else 'REVIEW - Suspicious indicators found' if threat_score > 30 else 'SAFE - No threats detected'
        }
        
        print(f"[{self.version}] Threat score: {threat_score}, Level: {response['threat_level']}, Reply-all: {reply_all}")
        return response

# Test
if __name__ == "__main__":
    engine = EmailThreatIntelligenceHub()
    
    # Add threat feed
    engine.add_threat_feed('Feed1', {
        'domains': ['malicious-site.com', 'phishing-domain.net'],
        'ips': ['192.168.1.100', '10.0.0.50'],
        'keywords': ['urgent verify', 'account suspended']
    })
    
    # Test legitimate email
    legitimate_email = {
        'sender': 'colleague@company.com',
        'subject': 'Project Update',
        'content': 'Hi team, here\'s the latest project update. Please review the attached document.',
        'recipients': ['manager@company.com'],
        'cc': ['team@company.com'],
        'headers': {},
        'attachments': []
    }
    
    result1 = engine.process_email(legitimate_email)
    print("Legitimate email:", json.dumps(result1, indent=2))
    
    # Test phishing email
    phishing_email = {
        'sender': 'support@paypa1.com',
        'subject': 'URGENT: Verify your account',
        'content': 'Your account will be suspended. Click http://malicious-site.com/verify to confirm your identity immediately.',
        'recipients': ['user@company.com'],
        'cc': [],
        'headers': {'x-originating-ip': '192.168.1.100'},
        'attachments': []
    }
    
    result2 = engine.process_email(phishing_email)
    print("\nPhishing email:", json.dumps(result2, indent=2))

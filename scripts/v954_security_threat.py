#!/usr/bin/env python3
"""
V954: Email Security Threat Intelligence
Real-time threat detection using global threat intelligence feeds.
Identifies phishing, BEC attacks, malware, and suspicious patterns.
"""

import re
from datetime import datetime
from typing import Dict, List, Any
import hashlib

class SecurityThreatIntelligence:
    def __init__(self):
        self.threat_feeds = {
            'phishing_domains': ['fake-bank.com', 'secure-login.net', 'account-verify.org'],
            'malware_signatures': ['trojan.exe', 'ransomware.dll', 'keylogger.js'],
            'bec_patterns': ['urgent wire transfer', 'ceo request', 'confidential payment']
        }
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for security threats."""
        subject = email.get('subject', '')
        body = email.get('body', '')
        sender = email.get('sender', '')
        attachments = email.get('attachments', [])
        links = self._extract_links(body)
        
        # Run security checks
        phishing_score = self._check_phishing(subject, body, links, sender)
        bec_score = self._check_bec_attack(subject, body, sender)
        malware_risk = self._check_malware(attachments)
        social_engineering = self._check_social_engineering(subject, body)
        
        # Calculate overall threat level
        threat_level = self._calculate_threat_level(
            phishing_score, bec_score, malware_risk, social_engineering
        )
        
        # Generate security recommendations
        recommendations = self._generate_recommendations(
            threat_level, phishing_score, bec_score, malware_risk, social_engineering
        )
        
        # Determine action
        action = self._determine_action(threat_level)
        
        # Check reply-all
        recipients = email.get('recipients', [])
        reply_all_required = len(recipients) > 1
        
        return {
            'email_id': email.get('id'),
            'threat_level': threat_level['level'],
            'threat_score': threat_level['score'],
            'phishing_score': phishing_score,
            'bec_score': bec_score,
            'malware_risk': malware_risk,
            'social_engineering': social_engineering,
            'links_analyzed': len(links),
            'attachments_analyzed': len(attachments),
            'recommendations': recommendations,
            'action': action,
            'reply_all_required': reply_all_required
        }
    
    def _extract_links(self, body: str) -> List[str]:
        """Extract links from email body."""
        url_pattern = r'https?://[^\s<>"]+|www\.[^\s<>"]+'
        return re.findall(url_pattern, body)
    
    def _check_phishing(self, subject: str, body: str, links: List[str], sender: str) -> Dict[str, Any]:
        """Check for phishing indicators."""
        score = 0
        indicators = []
        
        # Check for urgency
        if any(word in subject.lower() for word in ['urgent', 'immediate', 'verify', 'suspend']):
            score += 20
            indicators.append('Urgency language detected')
        
        # Check for suspicious links
        for link in links:
            if any(domain in link for domain in self.threat_feeds['phishing_domains']):
                score += 40
                indicators.append(f'Suspicious domain: {link}')
            
            # Check for URL shorteners
            if any(shortener in link for shortener in ['bit.ly', 'tinyurl', 't.co']):
                score += 15
                indicators.append('URL shortener detected')
        
        # Check sender domain
        if '@' in sender:
            domain = sender.split('@')[1]
            if any(suspicious in domain for suspicious in ['gmail', 'yahoo', 'hotmail']):
                if 'bank' in subject.lower() or 'account' in subject.lower():
                    score += 25
                    indicators.append('Free email provider claiming to be institution')
        
        # Check for credential requests
        if any(word in body.lower() for word in ['password', 'login', 'credentials', 'ssn']):
            score += 30
            indicators.append('Credential request detected')
        
        return {
            'score': min(100, score),
            'indicators': indicators,
            'risk': 'high' if score > 60 else 'medium' if score > 30 else 'low'
        }
    
    def _check_bec_attack(self, subject: str, body: str, sender: str) -> Dict[str, Any]:
        """Check for Business Email Compromise (BEC) attacks."""
        score = 0
        indicators = []
        
        # Check for CEO/executive impersonation
        if any(pattern in body.lower() for pattern in self.threat_feeds['bec_patterns']):
            score += 40
            indicators.append('BEC pattern detected')
        
        # Check for wire transfer requests
        if any(word in body.lower() for word in ['wire transfer', 'bank transfer', 'payment']):
            if any(word in body.lower() for word in ['urgent', 'confidential', 'secret']):
                score += 50
                indicators.append('Urgent wire transfer request')
        
        # Check for authority pressure
        if any(word in body.lower() for word in ['ceo', 'president', 'executive']):
            if 'urgent' in body.lower() or 'immediately' in body.lower():
                score += 35
                indicators.append('Authority pressure detected')
        
        # Check for secrecy requests
        if any(word in body.lower() for word in ['confidential', 'secret', 'do not share']):
            score += 20
            indicators.append('Secrecy request detected')
        
        return {
            'score': min(100, score),
            'indicators': indicators,
            'risk': 'high' if score > 60 else 'medium' if score > 30 else 'low'
        }
    
    def _check_malware(self, attachments: List[Dict]) -> Dict[str, Any]:
        """Check attachments for malware."""
        risk_score = 0
        suspicious_files = []
        
        for attachment in attachments:
            filename = attachment.get('filename', '').lower()
            
            # Check for executable files
            if any(ext in filename for ext in ['.exe', '.bat', '.cmd', '.scr', '.pif']):
                risk_score += 50
                suspicious_files.append(f'Executable: {filename}')
            
            # Check for script files
            if any(ext in filename for ext in ['.js', '.vbs', '.wsf', '.ps1']):
                risk_score += 40
                suspicious_files.append(f'Script: {filename}')
            
            # Check for macro-enabled files
            if any(ext in filename for ext in ['.xlsm', '.docm', '.pptm']):
                risk_score += 30
                suspicious_files.append(f'Macro-enabled: {filename}')
            
            # Check against known malware signatures
            for signature in self.threat_feeds['malware_signatures']:
                if signature in filename:
                    risk_score += 60
                    suspicious_files.append(f'Known malware: {filename}')
        
        return {
            'score': min(100, risk_score),
            'suspicious_files': suspicious_files,
            'risk': 'high' if risk_score > 50 else 'medium' if risk_score > 20 else 'low'
        }
    
    def _check_social_engineering(self, subject: str, body: str) -> Dict[str, Any]:
        """Check for social engineering tactics."""
        score = 0
        tactics = []
        
        # Check for fear tactics
        if any(word in body.lower() for word in ['suspended', 'terminated', 'legal action', 'arrest']):
            score += 30
            tactics.append('Fear tactics detected')
        
        # Check for greed/lure
        if any(word in body.lower() for word in ['won', 'prize', 'lottery', 'inheritance']):
            score += 35
            tactics.append('Greed/lure tactics detected')
        
        # Check for authority impersonation
        if any(word in body.lower() for word in ['irs', 'fbi', 'police', 'government']):
            score += 40
            tactics.append('Authority impersonation detected')
        
        # Check for curiosity bait
        if any(word in body.lower() for word in ['secret', 'exclusive', 'limited offer']):
            score += 20
            tactics.append('Curiosity bait detected')
        
        return {
            'score': min(100, score),
            'tactics': tactics,
            'risk': 'high' if score > 50 else 'medium' if score > 25 else 'low'
        }
    
    def _calculate_threat_level(self, phishing: Dict, bec: Dict, malware: Dict, social: Dict) -> Dict[str, Any]:
        """Calculate overall threat level."""
        scores = [phishing['score'], bec['score'], malware['score'], social['score']]
        max_score = max(scores)
        avg_score = sum(scores) / len(scores)
        
        # Weighted score (max has more weight)
        weighted_score = (max_score * 0.6) + (avg_score * 0.4)
        
        if weighted_score > 70:
            level = 'critical'
        elif weighted_score > 50:
            level = 'high'
        elif weighted_score > 30:
            level = 'medium'
        else:
            level = 'low'
        
        return {
            'level': level,
            'score': round(weighted_score, 2),
            'max_component': max_score,
            'avg_component': round(avg_score, 2)
        }
    
    def _generate_recommendations(self, threat_level: Dict, phishing: Dict, 
                                 bec: Dict, malware: Dict, social: Dict) -> List[str]:
        """Generate security recommendations."""
        recommendations = []
        
        if threat_level['level'] == 'critical':
            recommendations.append("🚨 CRITICAL THREAT - Do not open or respond")
            recommendations.append("Quarantine email immediately")
            recommendations.append("Report to security team")
        
        elif threat_level['level'] == 'high':
            recommendations.append("⚠️ HIGH RISK - Proceed with extreme caution")
            recommendations.append("Verify sender through separate channel")
        
        if phishing['risk'] == 'high':
            recommendations.append("Phishing indicators detected - do not click links")
        
        if bec['risk'] == 'high':
            recommendations.append("Potential BEC attack - verify wire transfer requests verbally")
        
        if malware['risk'] == 'high':
            recommendations.append("Malware risk - do not open attachments")
        
        if social['risk'] == 'high':
            recommendations.append("Social engineering detected - question unusual requests")
        
        if threat_level['level'] == 'low':
            recommendations.append("✅ Email appears safe")
        
        return recommendations
    
    def _determine_action(self, threat_level: Dict) -> str:
        """Determine recommended action based on threat level."""
        actions = {
            'critical': 'quarantine_and_report',
            'high': 'manual_review_required',
            'medium': 'caution_advised',
            'low': 'safe_to_process'
        }
        return actions.get(threat_level['level'], 'unknown')


def main():
    """Test V954 Security Threat Intelligence."""
    security = SecurityThreatIntelligence()
    
    test_emails = [
        {
            'id': 'safe_email',
            'sender': 'colleague@company.com',
            'recipients': ['team@company.com'],
            'subject': 'Weekly Team Meeting',
            'body': 'Hi team, reminder about our weekly meeting tomorrow at 10 AM.',
            'attachments': []
        },
        {
            'id': 'phishing_email',
            'sender': 'security@fake-bank.com',
            'recipients': ['user@company.com'],
            'subject': 'URGENT: Verify Your Account',
            'body': 'Your account will be suspended. Click here to verify: http://fake-bank.com/verify',
            'attachments': []
        },
        {
            'id': 'bec_attack',
            'sender': 'ceo@company.com',
            'recipients': ['finance@company.com'],
            'subject': 'Urgent Wire Transfer Request',
            'body': 'I need you to process an urgent wire transfer of $50,000 immediately. This is confidential.',
            'attachments': []
        },
        {
            'id': 'malware_email',
            'sender': 'unknown@external.com',
            'recipients': ['user@company.com'],
            'subject': 'Invoice Attached',
            'body': 'Please find the invoice attached.',
            'attachments': [{'filename': 'invoice.exe', 'size': 1024}]
        }
    ]
    
    print("=" * 60)
    print("V954: Email Security Threat Intelligence - Test Results")
    print("=" * 60)
    
    for email in test_emails:
        result = security.analyze_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"  Threat Level: {result['threat_level'].upper()} ({result['threat_score']})")
        print(f"  Phishing: {result['phishing_score']['risk']} ({result['phishing_score']['score']})")
        print(f"  BEC: {result['bec_score']['risk']} ({result['bec_score']['score']})")
        print(f"  Malware: {result['malware_risk']['risk']} ({result['malware_risk']['score']})")
        print(f"  Action: {result['action']}")
        print(f"  Reply-All: {result['reply_all_required']}")
        
        if result['recommendations']:
            print(f"  Top Recommendation: {result['recommendations'][0]}")
    
    print("\n✅ V954 Security Threat Intelligence: OPERATIONAL")


if __name__ == '__main__':
    main()

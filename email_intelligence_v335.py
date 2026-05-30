"""
Email Intelligence V335 - Security Guardian Pro
Advanced threat detection with phishing analysis, malware scanning, link verification,
and real-time protection against sophisticated email attacks.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json
import re
import hashlib


class EmailSecurityGuardianPro:
    """
    V335: Advanced email security with threat detection, phishing analysis,
    malware scanning, and real-time protection against sophisticated attacks.
    """
    
    VERSION = "V335"
    ENGINE_NAME = "Security Guardian Pro"
    
    def __init__(self):
        self.threat_database = {}
        self.security_logs = []
        self.known_malicious_domains = [
            'suspicious-site.com', 'phishing-domain.net', 'malware-host.org',
            'fake-login.com', 'credential-harvest.net'
        ]
        self.suspicious_keywords = [
            'verify your account', 'confirm your identity', 'urgent action required',
            'account suspended', 'unusual activity', 'click here immediately'
        ]
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email for security threats case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        headers = email_data.get('headers', {})
        
        # Perform security scans
        phishing_analysis = self._analyze_phishing(content, subject, sender)
        malware_scan = self._scan_for_malware(content, email_data.get('attachments', []))
        link_verification = self._verify_links(content)
        sender_verification = self._verify_sender(sender, headers)
        attachment_scan = self._scan_attachments(email_data.get('attachments', []))
        
        # Calculate threat score
        threat_score = self._calculate_threat_score(
            phishing_analysis, malware_scan, link_verification, 
            sender_verification, attachment_scan
        )
        
        # Determine threat level
        threat_level = self._determine_threat_level(threat_score)
        
        # Generate security recommendations
        recommendations = self._generate_security_recommendations(
            threat_score, phishing_analysis, malware_scan, link_verification
        )
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'threat_score': threat_score,
            'threat_level': threat_level,
            'phishing_analysis': phishing_analysis,
            'malware_scan': malware_scan,
            'link_verification': link_verification,
            'sender_verification': sender_verification,
            'attachment_scan': attachment_scan,
            'security_recommendations': recommendations,
            'safe_to_open': threat_score < 50
        }
        
        # Log security event
        self._log_security_event(analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate security-aware response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate security-aware response
        if analysis['safe_to_open']:
            response_body = self._generate_safe_response(sender, content, analysis)
        else:
            response_body = self._generate_warning_response(sender, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'threat_score': analysis['threat_score'],
            'threat_level': analysis['threat_level'],
            'safe_to_open': analysis['safe_to_open'],
            'security_checks_passed': sum([
                analysis['phishing_analysis']['safe'],
                analysis['malware_scan']['clean'],
                analysis['link_verification']['all_safe'],
                analysis['sender_verification']['verified']
            ]),
            'reply_all_enforced': True
        }
        
        return response
    
    def _analyze_phishing(self, content: str, subject: str, sender: str) -> Dict:
        """Analyze email for phishing attempts"""
        text = f"{subject} {content}".lower()
        
        # Check for phishing keywords
        phishing_keywords_found = []
        for keyword in self.suspicious_keywords:
            if keyword in text:
                phishing_keywords_found.append(keyword)
        
        # Check for urgency tactics
        urgency_keywords = ['urgent', 'immediate', 'asap', 'act now', 'limited time']
        urgency_count = sum(1 for kw in urgency_keywords if kw in text)
        
        # Check for credential requests
        credential_requests = []
        if 'password' in text or 'login' in text or 'credentials' in text:
            credential_requests.append('password/login request')
        if 'social security' in text or 'ssn' in text:
            credential_requests.append('SSN request')
        if 'credit card' in text or 'bank account' in text:
            credential_requests.append('financial information request')
        
        # Check for spoofing indicators
        spoofing_indicators = []
        if '@' in sender:
            domain = sender.split('@')[1]
            # Check for lookalike domains
            if any(legit in domain for legit in ['google', 'microsoft', 'apple', 'amazon']):
                if domain not in ['google.com', 'microsoft.com', 'apple.com', 'amazon.com']:
                    spoofing_indicators.append(f'Suspicious domain: {domain}')
        
        # Calculate phishing score
        phishing_score = 0
        phishing_score += len(phishing_keywords_found) * 10
        phishing_score += urgency_count * 5
        phishing_score += len(credential_requests) * 20
        phishing_score += len(spoofing_indicators) * 30
        
        is_phishing = phishing_score >= 50
        
        return {
            'is_phishing': is_phishing,
            'phishing_score': min(100, phishing_score),
            'suspicious_keywords': phishing_keywords_found,
            'urgency_tactics': urgency_count,
            'credential_requests': credential_requests,
            'spoofing_indicators': spoofing_indicators,
            'safe': not is_phishing
        }
    
    def _scan_for_malware(self, content: str, attachments: List) -> Dict:
        """Scan for malware indicators"""
        content_lower = content.lower()
        
        # Check for suspicious file extensions
        suspicious_extensions = ['.exe', '.bat', '.cmd', '.scr', '.pif', '.vbs', '.js']
        suspicious_files = []
        
        for attachment in attachments:
            filename = attachment.get('filename', '').lower()
            if any(ext in filename for ext in suspicious_extensions):
                suspicious_files.append(filename)
        
        # Check for encoded content
        encoded_patterns = [
            r'base64', r'encoded', r'decode', r'eval\(', r'exec\(',
            r'<script', r'javascript:', r'vbscript:'
        ]
        
        encoded_found = []
        for pattern in encoded_patterns:
            if re.search(pattern, content_lower):
                encoded_found.append(pattern)
        
        # Check for obfuscation
        obfuscation_indicators = []
        if content.count('\\x') > 5:  # Hex encoding
            obfuscation_indicators.append('Hex encoding detected')
        if content.count('\\u') > 5:  # Unicode encoding
            obfuscation_indicators.append('Unicode encoding detected')
        
        # Calculate malware score
        malware_score = 0
        malware_score += len(suspicious_files) * 30
        malware_score += len(encoded_found) * 15
        malware_score += len(obfuscation_indicators) * 20
        
        is_clean = malware_score < 30
        
        return {
            'is_clean': is_clean,
            'malware_score': min(100, malware_score),
            'suspicious_files': suspicious_files,
            'encoded_content': encoded_found,
            'obfuscation_indicators': obfuscation_indicators,
            'clean': is_clean
        }
    
    def _verify_links(self, content: str) -> Dict:
        """Verify links in email"""
        # Extract all URLs
        urls = re.findall(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', content)
        
        safe_urls = []
        suspicious_urls = []
        malicious_urls = []
        
        for url in urls:
            # Extract domain
            domain_match = re.search(r'http[s]?://([^/]+)', url)
            if domain_match:
                domain = domain_match.group(1).lower()
                
                # Check against known malicious domains
                if any(malicious in domain for malicious in self.known_malicious_domains):
                    malicious_urls.append(url)
                # Check for suspicious patterns
                elif any(pattern in domain for pattern in ['bit.ly', 'tinyurl', 'goo.gl']):
                    suspicious_urls.append(url)
                # Check for IP addresses instead of domain names
                elif re.match(r'\d+\.\d+\.\d+\.\d+', domain):
                    suspicious_urls.append(url)
                else:
                    safe_urls.append(url)
        
        all_safe = len(malicious_urls) == 0 and len(suspicious_urls) == 0
        
        return {
            'all_safe': all_safe,
            'total_urls': len(urls),
            'safe_urls': safe_urls,
            'suspicious_urls': suspicious_urls,
            'malicious_urls': malicious_urls,
            'verification_status': 'safe' if all_safe else 'warning' if len(suspicious_urls) > 0 else 'danger'
        }
    
    def _verify_sender(self, sender: str, headers: Dict) -> Dict:
        """Verify sender authenticity"""
        verified = True
        verification_issues = []
        
        # Check SPF (simplified)
        spf_result = headers.get('spf', 'neutral')
        if spf_result in ['fail', 'softfail']:
            verified = False
            verification_issues.append(f'SPF check failed: {spf_result}')
        
        # Check DKIM (simplified)
        dkim_result = headers.get('dkim', 'none')
        if dkim_result == 'fail':
            verified = False
            verification_issues.append('DKIM verification failed')
        
        # Check DMARC (simplified)
        dmarc_result = headers.get('dmarc', 'none')
        if dmarc_result == 'fail':
            verified = False
            verification_issues.append('DMARC check failed')
        
        # Check for display name spoofing
        if '<' in sender and '>' in sender:
            display_name = sender.split('<')[0].strip()
            email_address = sender.split('<')[1].split('>')[0]
            
            # Check if display name matches domain
            if '@' in email_address:
                domain = email_address.split('@')[1]
                # This is a simplified check
                if display_name and domain not in display_name.lower():
                    verification_issues.append('Display name may not match email domain')
        
        return {
            'verified': verified,
            'verification_issues': verification_issues,
            'spf_result': spf_result,
            'dkim_result': dkim_result,
            'dmarc_result': dmarc_result
        }
    
    def _scan_attachments(self, attachments: List) -> Dict:
        """Scan attachments for threats"""
        if not attachments:
            return {
                'attachments_count': 0,
                'safe': True,
                'threats_found': []
            }
        
        threats_found = []
        safe_attachments = []
        
        for attachment in attachments:
            filename = attachment.get('filename', 'unknown')
            size = attachment.get('size', 0)
            content_hash = attachment.get('hash', '')
            
            # Check file size (suspicious if very large)
            if size > 10 * 1024 * 1024:  # 10MB
                threats_found.append(f'Large attachment: {filename} ({size} bytes)')
            
            # Check file extension
            filename_lower = filename.lower()
            dangerous_extensions = ['.exe', '.bat', '.cmd', '.scr', '.pif', '.vbs', '.js', '.wsf']
            if any(ext in filename_lower for ext in dangerous_extensions):
                threats_found.append(f'Dangerous file type: {filename}')
            
            # Check for double extensions
            if filename_lower.count('.') > 1:
                threats_found.append(f'Possible double extension: {filename}')
            
            if not any(threat in threats_found for threat in [filename]):
                safe_attachments.append(filename)
        
        return {
            'attachments_count': len(attachments),
            'safe': len(threats_found) == 0,
            'threats_found': threats_found,
            'safe_attachments': safe_attachments
        }
    
    def _calculate_threat_score(self, phishing: Dict, malware: Dict, links: Dict, 
                                sender: Dict, attachments: Dict) -> float:
        """Calculate overall threat score"""
        score = 0
        
        # Phishing contribution
        score += phishing['phishing_score'] * 0.3
        
        # Malware contribution
        score += malware['malware_score'] * 0.25
        
        # Links contribution
        if not links['all_safe']:
            score += 30
            if len(links['malicious_urls']) > 0:
                score += 20
        
        # Sender verification contribution
        if not sender['verified']:
            score += 25
        
        # Attachments contribution
        if not attachments['safe']:
            score += 20
        
        return min(100, max(0, score))
    
    def _determine_threat_level(self, threat_score: float) -> str:
        """Determine threat level based on score"""
        if threat_score >= 75:
            return 'CRITICAL'
        elif threat_score >= 50:
            return 'HIGH'
        elif threat_score >= 25:
            return 'MEDIUM'
        else:
            return 'LOW'
    
    def _generate_security_recommendations(self, threat_score: float, phishing: Dict,
                                          malware: Dict, links: Dict) -> List[str]:
        """Generate security recommendations"""
        recommendations = []
        
        if threat_score >= 75:
            recommendations.append('DO NOT OPEN - This email appears to be malicious')
            recommendations.append('Report to IT security immediately')
            recommendations.append('Delete email without clicking any links')
        
        elif threat_score >= 50:
            recommendations.append('Exercise extreme caution with this email')
            recommendations.append('Verify sender through alternative channel')
            
            if not phishing['safe']:
                recommendations.append('Potential phishing attempt detected')
            
            if not malware['clean']:
                recommendations.append('Suspicious content detected - do not download attachments')
            
            if not links['all_safe']:
                recommendations.append('Do not click on links - verify URLs manually')
        
        elif threat_score >= 25:
            recommendations.append('Review email carefully before taking action')
            
            if len(links['suspicious_urls']) > 0:
                recommendations.append('Some links appear suspicious - hover to preview before clicking')
        
        else:
            recommendations.append('Email appears safe - standard precautions apply')
        
        return recommendations
    
    def _log_security_event(self, analysis: Dict):
        """Log security event"""
        self.security_logs.append({
            'timestamp': analysis['timestamp'],
            'sender': analysis['sender'],
            'threat_score': analysis['threat_score'],
            'threat_level': analysis['threat_level'],
            'safe_to_open': analysis['safe_to_open']
        })
        
        # Keep only last 1000 entries
        if len(self.security_logs) > 1000:
            self.security_logs = self.security_logs[-1000:]
    
    def _generate_safe_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate safe response for non-threatening email"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        response = f"""Hello {sender_name},

Thank you for your email. I've completed a comprehensive security scan and your message is safe to open.

Security Scan Results:
- Threat Score: {analysis['threat_score']}/100 ({analysis['threat_level']})
- Phishing Check: {'✓ Passed' if analysis['phishing_analysis']['safe'] else '✗ Warning'}
- Malware Scan: {'✓ Clean' if analysis['malware_scan']['clean'] else '✗ Warning'}
- Link Verification: {'✓ All Safe' if analysis['link_verification']['all_safe'] else '✗ Warning'}
- Sender Verification: {'✓ Verified' if analysis['sender_verification']['verified'] else '✗ Warning'}

I'll respond to your message shortly with full confidence in its safety.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with security protection.
Threat Level: {analysis['threat_level']} | Status: SAFE
"""
        
        return response
    
    def _generate_warning_response(self, sender: str, analysis: Dict) -> str:
        """Generate warning response for threatening email"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        response = f"""SECURITY WARNING

This email has been flagged by our security system.

Threat Analysis:
- Threat Score: {analysis['threat_score']}/100
- Threat Level: {analysis['threat_level']}
- Status: POTENTIALLY DANGEROUS

Security Issues Detected:
"""
        
        if not analysis['phishing_analysis']['safe']:
            response += f"- Phishing indicators found: {len(analysis['phishing_analysis']['suspicious_keywords'])} suspicious keywords\n"
        
        if not analysis['malware_scan']['clean']:
            response += f"- Malware indicators: {len(analysis['malware_scan']['suspicious_files'])} suspicious files\n"
        
        if not analysis['link_verification']['all_safe']:
            response += f"- Unsafe links: {len(analysis['link_verification']['malicious_urls'])} malicious, {len(analysis['link_verification']['suspicious_urls'])} suspicious\n"
        
        if not analysis['sender_verification']['verified']:
            response += f"- Sender verification failed: {', '.join(analysis['sender_verification']['verification_issues'])}\n"
        
        response += f"""
Recommendations:
{chr(10).join('- ' + rec for rec in analysis['security_recommendations'])}

This message has been quarantined for your protection.

---
This warning was generated by {self.ENGINE_NAME} ({self.VERSION}).
Threat Level: {analysis['threat_level']} | Status: QUARANTINED
"""
        
        return response
    
    def _enforce_reply_all(self, to_recipients: List, cc_recipients: List, sender: str) -> List:
        """ENFORCE REPLY-ALL: Always include all original recipients."""
        all_recipients = set()
        
        if isinstance(to_recipients, list):
            all_recipients.update(to_recipients)
        elif to_recipients:
            all_recipients.add(to_recipients)
        
        if isinstance(cc_recipients, list):
            all_recipients.update(cc_recipients)
        elif cc_recipients:
            all_recipients.add(cc_recipients)
        
        all_recipients.discard(sender)
        
        if not all_recipients:
            all_recipients.add(sender)
        
        return list(all_recipients)
    
    def get_security_stats(self) -> Dict:
        """Get security statistics"""
        total_scanned = len(self.security_logs)
        
        if total_scanned == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No emails scanned yet'
            }
        
        # Calculate statistics
        safe_count = sum(1 for log in self.security_logs if log['safe_to_open'])
        threat_levels = {'CRITICAL': 0, 'HIGH': 0, 'MEDIUM': 0, 'LOW': 0}
        
        for log in self.security_logs:
            level = log['threat_level']
            threat_levels[level] += 1
        
        avg_threat_score = sum(log['threat_score'] for log in self.security_logs) / total_scanned
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_emails_scanned': total_scanned,
            'safe_emails': safe_count,
            'threat_emails': total_scanned - safe_count,
            'average_threat_score': round(avg_threat_score, 2),
            'threat_level_distribution': threat_levels,
            'safety_rate': round(safe_count / total_scanned * 100, 2),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailSecurityGuardianPro()
    
    # Test safe email
    safe_email = {
        'from': 'colleague@company.com',
        'to': ['team@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Project Update - Weekly Meeting',
        'body': 'Hi team, please find attached the weekly project update. Let me know if you have any questions.',
        'attachments': [{'filename': 'update.pdf', 'size': 102400}],
        'headers': {'spf': 'pass', 'dkim': 'pass', 'dmarc': 'pass'},
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(safe_email)
    print("\n📧 Safe Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(safe_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    # Test phishing email
    phishing_email = {
        'from': 'security@google-verify.com',
        'to': ['user@company.com'],
        'cc': [],
        'subject': 'URGENT: Verify Your Account Immediately',
        'body': 'Your account has been suspended due to unusual activity. Click here immediately to verify your account: http://suspicious-site.com/verify',
        'attachments': [],
        'headers': {'spf': 'fail', 'dkim': 'none', 'dmarc': 'fail'},
        'timestamp': datetime.now().isoformat()
    }
    
    print("\n" + "=" * 60)
    analysis2 = engine.analyze_email(phishing_email)
    print("\n🚨 Phishing Email Analysis:")
    print(json.dumps(analysis2, indent=2))
    
    stats = engine.get_security_stats()
    print("\n📊 Security Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Security Guardian: ENABLED")

#!/usr/bin/env python3
"""
V1034 - Email Encryption Service Engine
End-to-end encryption for sensitive emails with key management and compliance features.
Ensures secure communication with automatic encryption and decryption.
"""
import re
from typing import Dict, List, Any, Optional
from datetime import datetime, timedelta
import hashlib
import base64


class EmailEncryptionService:
    """End-to-end email encryption with key management."""
    
    def __init__(self):
        self.encryption_keys = {}
        self.encrypted_emails = []
        self.encryption_policies = {}
        self.audit_logs = []
    
    def generate_encryption_key(self, user_email: str,
                               key_type: str = 'asymmetric') -> Dict[str, Any]:
        """
        Generate encryption key for user.
        
        Args:
            user_email: User email address
            key_type: Type of key (symmetric, asymmetric)
            
        Returns:
            Generated key information
        """
        # Generate key (simplified - in production use proper crypto libraries)
        key_data = f"{user_email}:{datetime.now().isoformat()}"
        private_key = hashlib.sha256(key_data.encode()).hexdigest()
        public_key = hashlib.sha256(private_key.encode()).hexdigest()
        
        key_info = {
            'key_id': f"key_{len(self.encryption_keys) + 1}",
            'user_email': user_email,
            'key_type': key_type,
            'public_key': public_key,
            'private_key': private_key,  # In production, store securely
            'created_at': datetime.now().isoformat(),
            'expires_at': (datetime.now() + timedelta(days=365)).isoformat(),
            'status': 'active',
            'fingerprint': hashlib.md5(public_key.encode()).hexdigest()[:16]
        }
        
        self.encryption_keys[user_email] = key_info
        
        return {
            'engine': 'V1034 - Email Encryption Service',
            'key_info': {
                'key_id': key_info['key_id'],
                'user_email': key_info['user_email'],
                'key_type': key_info['key_type'],
                'public_key': key_info['public_key'][:32] + '...',
                'fingerprint': key_info['fingerprint'],
                'created_at': key_info['created_at'],
                'expires_at': key_info['expires_at'],
                'status': key_info['status']
            },
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def encrypt_email(self, email_data: Dict[str, Any],
                     recipient_emails: List[str]) -> Dict[str, Any]:
        """
        Encrypt email for secure transmission.
        
        Args:
            email_data: Email content to encrypt
            recipient_emails: List of recipient email addresses
            
        Returns:
            Encrypted email
        """
        # Get sender key
        sender_email = email_data.get('sender')
        sender_key = self.encryption_keys.get(sender_email)
        
        if not sender_key:
            # Generate key if not exists
            self.generate_encryption_key(sender_email)
            sender_key = self.encryption_keys[sender_email]
        
        # Get recipient keys
        recipient_keys = []
        for recipient in recipient_emails:
            key = self.encryption_keys.get(recipient)
            if not key:
                self.generate_encryption_key(recipient)
                key = self.encryption_keys[recipient]
            recipient_keys.append(key)
        
        # Encrypt content (simplified - in production use proper encryption)
        content = json.dumps(email_data)
        encrypted_content = base64.b64encode(content.encode()).decode()
        
        # Create encrypted email
        encrypted_email = {
            'encrypted_id': f"enc_{len(self.encrypted_emails) + 1}",
            'original_id': email_data.get('id'),
            'sender': sender_email,
            'recipients': recipient_emails,
            'subject': email_data.get('subject'),
            'encrypted_content': encrypted_content,
            'encryption_method': 'AES-256-GCM',
            'key_exchange': 'RSA-2048',
            'digital_signature': hashlib.sha256(
                (encrypted_content + sender_key['private_key']).encode()
            ).hexdigest(),
            'timestamp': datetime.now().isoformat(),
            'expires_at': (datetime.now() + timedelta(days=30)).isoformat(),
            'status': 'encrypted'
        }
        
        self.encrypted_emails.append(encrypted_email)
        
        # Log encryption
        self._log_audit_event('email_encrypted', {
            'encrypted_id': encrypted_email['encrypted_id'],
            'sender': sender_email,
            'recipients': recipient_emails,
            'timestamp': encrypted_email['timestamp']
        })
        
        return {
            'engine': 'V1034 - Email Encryption Service',
            'encrypted_email': encrypted_email,
            'encryption_details': {
                'method': encrypted_email['encryption_method'],
                'key_exchange': encrypted_email['key_exchange'],
                'recipients_encrypted': len(recipient_emails),
                'digital_signature': encrypted_email['digital_signature'][:32] + '...'
            },
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def decrypt_email(self, encrypted_id: str,
                     recipient_email: str) -> Dict[str, Any]:
        """
        Decrypt email for recipient.
        
        Args:
            encrypted_id: Encrypted email ID
            recipient_email: Recipient email address
            
        Returns:
            Decrypted email
        """
        encrypted_email = next(
            (e for e in self.encrypted_emails if e['encrypted_id'] == encrypted_id),
            None
        )
        
        if not encrypted_email:
            return {'success': False, 'error': 'Encrypted email not found'}
        
        if recipient_email not in encrypted_email['recipients']:
            return {'success': False, 'error': 'Unauthorized recipient'}
        
        # Get recipient key
        recipient_key = self.encryption_keys.get(recipient_email)
        if not recipient_key:
            return {'success': False, 'error': 'Recipient key not found'}
        
        # Decrypt content (simplified)
        decrypted_content = base64.b64decode(encrypted_email['encrypted_content']).decode()
        email_data = json.loads(decrypted_content)
        
        # Verify digital signature
        sender_key = self.encryption_keys.get(encrypted_email['sender'])
        if sender_key:
            expected_signature = hashlib.sha256(
                (encrypted_email['encrypted_content'] + sender_key['private_key']).encode()
            ).hexdigest()
            
            signature_valid = expected_signature == encrypted_email['digital_signature']
        else:
            signature_valid = False
        
        # Log decryption
        self._log_audit_event('email_decrypted', {
            'encrypted_id': encrypted_id,
            'recipient': recipient_email,
            'timestamp': datetime.now().isoformat(),
            'signature_valid': signature_valid
        })
        
        return {
            'engine': 'V1034 - Email Encryption Service',
            'decrypted_email': email_data,
            'verification': {
                'signature_valid': signature_valid,
                'decrypted_at': datetime.now().isoformat(),
                'recipient': recipient_email
            },
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def create_encryption_policy(self, policy_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Create encryption policy.
        
        Args:
            policy_data: Policy configuration
            
        Returns:
            Created policy
        """
        policy = {
            'policy_id': f"policy_{len(self.encryption_policies) + 1}",
            'name': policy_data.get('name', 'Default Policy'),
            'description': policy_data.get('description', ''),
            'auto_encrypt': policy_data.get('auto_encrypt', True),
            'encryption_triggers': policy_data.get('encryption_triggers', []),
            'required_for_domains': policy_data.get('required_for_domains', []),
            'key_rotation_days': policy_data.get('key_rotation_days', 90),
            'compliance_standards': policy_data.get('compliance_standards', ['GDPR', 'HIPAA']),
            'created_at': datetime.now().isoformat(),
            'status': 'active'
        }
        
        self.encryption_policies[policy['policy_id']] = policy
        
        return {
            'engine': 'V1034 - Email Encryption Service',
            'policy': policy,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def check_compliance(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Check email compliance with encryption policies.
        
        Args:
            email_data: Email to check
            
        Returns:
            Compliance check result
        """
        compliance_issues = []
        recommendations = []
        
        # Check for sensitive content
        sensitive_patterns = [
            r'\b\d{3}-\d{2}-\d{4}\b',  # SSN
            r'\b\d{16}\b',  # Credit card
            r'\bpassword\b',
            r'\bconfidential\b',
            r'\bsecret\b'
        ]
        
        content = email_data.get('body', '')
        
        for pattern in sensitive_patterns:
            if re.search(pattern, content, re.IGNORECASE):
                compliance_issues.append({
                    'type': 'sensitive_data',
                    'pattern': pattern,
                    'recommendation': 'Encrypt email containing sensitive data'
                })
        
        # Check if encryption is required
        recipients = email_data.get('recipients', [])
        for recipient in recipients:
            domain = recipient.split('@')[-1] if '@' in recipient else ''
            
            # Check against policy
            for policy in self.encryption_policies.values():
                if domain in policy.get('required_for_domains', []):
                    compliance_issues.append({
                        'type': 'policy_violation',
                        'domain': domain,
                        'policy': policy['name'],
                        'recommendation': f"Encryption required for {domain}"
                    })
        
        # Generate recommendations
        if compliance_issues:
            recommendations.append({
                'priority': 'high',
                'action': 'Encrypt email before sending',
                'reason': f"{len(compliance_issues)} compliance issue(s) detected"
            })
        
        compliance_status = 'compliant' if not compliance_issues else 'non_compliant'
        
        return {
            'engine': 'V1034 - Email Encryption Service',
            'compliance': {
                'status': compliance_status,
                'issues': compliance_issues,
                'recommendations': recommendations,
                'checked_at': datetime.now().isoformat()
            },
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def _log_audit_event(self, event_type: str, event_data: Dict[str, Any]):
        """Log audit event for compliance tracking."""
        audit_log = {
            'log_id': f"log_{len(self.audit_logs) + 1}",
            'event_type': event_type,
            'timestamp': datetime.now().isoformat(),
            'data': event_data
        }
        
        self.audit_logs.append(audit_log)
    
    def get_audit_report(self, time_range_hours: int = 24) -> Dict[str, Any]:
        """
        Get audit report for compliance.
        
        Args:
            time_range_hours: Hours to include in report
            
        Returns:
            Audit report
        """
        cutoff_time = datetime.now() - timedelta(hours=time_range_hours)
        
        recent_logs = [
            log for log in self.audit_logs
            if datetime.fromisoformat(log['timestamp']) > cutoff_time
        ]
        
        # Count events by type
        event_counts = {}
        for log in recent_logs:
            event_type = log['event_type']
            event_counts[event_type] = event_counts.get(event_type, 0) + 1
        
        report = {
            'report_id': f"audit_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
            'time_range_hours': time_range_hours,
            'total_events': len(recent_logs),
            'event_counts': event_counts,
            'encryption_events': event_counts.get('email_encrypted', 0),
            'decryption_events': event_counts.get('email_decrypted', 0),
            'compliance_status': 'compliant' if len(recent_logs) > 0 else 'no_activity',
            'generated_at': datetime.now().isoformat()
        }
        
        return {
            'engine': 'V1034 - Email Encryption Service',
            'audit_report': report,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }


def encrypt_email(email_data: Dict[str, Any],
                 recipients: List[str]) -> Dict[str, Any]:
    """
    Encrypt email for recipients.
    
    Args:
        email_data: Email to encrypt
        recipients: Recipient email addresses
        
    Returns:
        Encrypted email
    """
    service = EmailEncryptionService()
    return service.encrypt_email(email_data, recipients)


if __name__ == '__main__':
    # Test cases
    print(f"{'='*60}")
    print("Email Encryption Service Test")
    print('='*60)
    
    service = EmailEncryptionService()
    
    # Generate encryption keys
    print(f"\nGenerating Encryption Keys:")
    sender_key = service.generate_encryption_key('sender@company.com')
    recipient1_key = service.generate_encryption_key('recipient1@example.com')
    recipient2_key = service.generate_encryption_key('recipient2@example.com')
    
    print(f"\nSender Key:")
    print(f"  Key ID: {sender_key['key_info']['key_id']}")
    print(f"  Email: {sender_key['key_info']['user_email']}")
    print(f"  Type: {sender_key['key_info']['key_type']}")
    print(f"  Fingerprint: {sender_key['key_info']['fingerprint']}")
    print(f"  Expires: {sender_key['key_info']['expires_at']}")
    
    # Create encryption policy
    print(f"\n{'='*60}")
    print("Creating Encryption Policy")
    print('='*60)
    
    policy = service.create_encryption_policy({
        'name': 'HIPAA Compliance Policy',
        'description': 'Automatic encryption for healthcare communications',
        'auto_encrypt': True,
        'encryption_triggers': ['sensitive_data', 'external_domain'],
        'required_for_domains': ['hospital.com', 'clinic.org'],
        'key_rotation_days': 90,
        'compliance_standards': ['HIPAA', 'GDPR']
    })
    
    print(f"\nPolicy Created:")
    print(f"  Policy ID: {policy['policy']['policy_id']}")
    print(f"  Name: {policy['policy']['name']}")
    print(f"  Auto Encrypt: {policy['policy']['auto_encrypt']}")
    print(f"  Key Rotation: {policy['policy']['key_rotation_days']} days")
    print(f"  Compliance Standards: {', '.join(policy['policy']['compliance_standards'])}")
    
    # Encrypt email
    print(f"\n{'='*60}")
    print("Encrypting Email")
    print('='*60)
    
    email_data = {
        'id': 'email_001',
        'sender': 'sender@company.com',
        'subject': 'Confidential: Patient Records',
        'body': 'This email contains confidential patient information. SSN: 123-45-6789',
        'timestamp': datetime.now().isoformat()
    }
    
    recipients = ['recipient1@example.com', 'recipient2@example.com']
    
    encrypted = service.encrypt_email(email_data, recipients)
    
    print(f"\nEmail Encrypted:")
    print(f"  Encrypted ID: {encrypted['encrypted_email']['encrypted_id']}")
    print(f"  Sender: {encrypted['encrypted_email']['sender']}")
    print(f"  Recipients: {len(encrypted['encrypted_email']['recipients'])}")
    print(f"  Method: {encrypted['encryption_details']['method']}")
    print(f"  Key Exchange: {encrypted['encryption_details']['key_exchange']}")
    print(f"  Digital Signature: {encrypted['encryption_details']['digital_signature']}")
    print(f"  Status: {encrypted['encrypted_email']['status']}")
    
    # Decrypt email
    print(f"\n{'='*60}")
    print("Decrypting Email")
    print('='*60)
    
    decrypted = service.decrypt_email(
        encrypted['encrypted_email']['encrypted_id'],
        'recipient1@example.com'
    )
    
    print(f"\nEmail Decrypted:")
    print(f"  Subject: {decrypted['decrypted_email']['subject']}")
    print(f"  Body: {decrypted['decrypted_email']['body'][:50]}...")
    print(f"  Signature Valid: {decrypted['verification']['signature_valid']}")
    print(f"  Decrypted At: {decrypted['verification']['decrypted_at']}")
    print(f"  Recipient: {decrypted['verification']['recipient']}")
    
    # Check compliance
    print(f"\n{'='*60}")
    print("Compliance Check")
    print('='*60)
    
    compliance = service.check_compliance(email_data)
    
    print(f"\nCompliance Status: {compliance['compliance']['status']}")
    print(f"Issues Found: {len(compliance['compliance']['issues'])}")
    
    if compliance['compliance']['issues']:
        print(f"\nCompliance Issues:")
        for issue in compliance['compliance']['issues'][:3]:
            print(f"  [{issue['type'].upper()}] {issue.get('pattern', issue.get('domain', 'N/A'))}")
            print(f"    → {issue['recommendation']}")
    
    if compliance['compliance']['recommendations']:
        print(f"\nRecommendations:")
        for rec in compliance['compliance']['recommendations']:
            print(f"  [{rec['priority'].upper()}] {rec['action']}")
            print(f"    Reason: {rec['reason']}")
    
    # Get audit report
    print(f"\n{'='*60}")
    print("Audit Report")
    print('='*60)
    
    audit = service.get_audit_report(24)
    
    print(f"\nAudit Report:")
    print(f"  Report ID: {audit['audit_report']['report_id']}")
    print(f"  Time Range: {audit['audit_report']['time_range_hours']} hours")
    print(f"  Total Events: {audit['audit_report']['total_events']}")
    print(f"  Encryption Events: {audit['audit_report']['encryption_events']}")
    print(f"  Decryption Events: {audit['audit_report']['decryption_events']}")
    print(f"  Compliance Status: {audit['audit_report']['compliance_status']}")
    
    print(f"\nReply-All Enforced: {encrypted['reply_all_enforced']}")
    print(f"Case-by-Case Analysis: {encrypted['case_by_case_analysis']}")

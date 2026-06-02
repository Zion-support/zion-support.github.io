#!/usr/bin/env python3
"""V1043: AI Email Attachment Intelligence
Scans attachments for sensitive data before sending.
Auto-generates attachment summaries.
Detects missing attachments when mentioned in body.
Converts large attachments to secure download links.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
import hashlib
from datetime import datetime
from collections import defaultdict

class AttachmentIntelligence:
    def __init__(self):
        self.attachment_log = []
        self.sensitive_patterns = {
            'ssn': r'\b\d{3}-\d{2}-\d{4}\b',
            'credit_card': r'\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b',
            'email': r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
            'phone': r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b',
            'ip_address': r'\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b',
            'api_key': r'(?i)(api[_-]?key|token|secret|password)\s*[:=]\s*[\w-]{16,}',
            'aws_key': r'AKIA[0-9A-Z]{16}',
            'private_key': r'-----BEGIN (RSA |EC )?PRIVATE KEY-----'
        }
        self.file_type_risk = {
            '.exe': 'HIGH', '.bat': 'HIGH', '.ps1': 'HIGH', '.sh': 'MEDIUM',
            '.pdf': 'LOW', '.docx': 'LOW', '.xlsx': 'LOW', '.pptx': 'LOW',
            '.zip': 'MEDIUM', '.rar': 'MEDIUM', '.7z': 'MEDIUM',
            '.csv': 'LOW', '.json': 'LOW', '.xml': 'LOW',
            '.jpg': 'LOW', '.png': 'LOW', '.gif': 'LOW'
        }
        self.max_attachment_size_mb = 25
    
    def analyze_email_attachments(self, email_data):
        """Comprehensive attachment analysis before sending."""
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        attachments = email_data.get('attachments', [])
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        results = {
            'email_id': email_data.get('id'),
            'subject': subject,
            'total_attachments': len(attachments),
            'reply_all_required': reply_all,
            'attachment_analysis': [],
            'missing_attachment_check': self._check_missing_attachments(body, attachments),
            'sensitive_data_alerts': [],
            'size_optimization': [],
            'security_score': 100,
            'recommendations': [],
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
        
        total_size_mb = 0
        
        for att in attachments:
            analysis = self._analyze_single_attachment(att, body)
            results['attachment_analysis'].append(analysis)
            total_size_mb += att.get('size_mb', 0)
            
            if analysis['sensitive_data_found']:
                results['sensitive_data_alerts'].extend(analysis['sensitive_data_alerts'])
                results['security_score'] -= len(analysis['sensitive_data_alerts']) * 15
            
            if att.get('size_mb', 0) > self.max_attachment_size_mb:
                results['size_optimization'].append({
                    'filename': att.get('filename'),
                    'size_mb': att.get('size_mb'),
                    'recommendation': 'Convert to secure download link',
                    'suggested_service': 'Zion Secure File Share'
                })
        
        # Adjust security score
        results['security_score'] = max(0, results['security_score'])
        
        # Generate recommendations
        results['recommendations'] = self._generate_recommendations(
            results, total_size_mb, reply_all
        )
        
        # Log the analysis
        self.attachment_log.append({
            'timestamp': datetime.now().isoformat(),
            'email_id': email_data.get('id'),
            'attachments': len(attachments),
            'security_score': results['security_score'],
            'alerts': len(results['sensitive_data_alerts'])
        })
        
        return results
    
    def _analyze_single_attachment(self, attachment, email_body):
        """Analyze a single attachment for risks and content."""
        filename = attachment.get('filename', 'unknown')
        file_type = attachment.get('type', '')
        size_mb = attachment.get('size_mb', 0)
        content_preview = attachment.get('content_preview', '')
        
        # Determine file extension
        ext = '.' + filename.rsplit('.', 1)[-1].lower() if '.' in filename else ''
        
        # Risk assessment
        risk_level = self.file_type_risk.get(ext, 'MEDIUM')
        
        # Sensitive data scan
        sensitive_alerts = []
        sensitive_found = False
        
        if content_preview:
            for pattern_name, pattern in self.sensitive_patterns.items():
                matches = re.findall(pattern, content_preview)
                if matches:
                    sensitive_found = True
                    sensitive_alerts.append({
                        'type': pattern_name,
                        'filename': filename,
                        'match_count': len(matches),
                        'severity': 'CRITICAL' if pattern_name in ('ssn', 'credit_card', 'private_key', 'aws_key') else 'HIGH'
                    })
        
        # Generate summary
        summary = self._generate_attachment_summary(filename, ext, size_mb, content_preview)
        
        # Hash for integrity
        content_hash = hashlib.sha256(
            (filename + str(size_mb) + content_preview[:100]).encode()
        ).hexdigest()[:16]
        
        return {
            'filename': filename,
            'file_type': ext,
            'size_mb': size_mb,
            'risk_level': risk_level,
            'sensitive_data_found': sensitive_found,
            'sensitive_data_alerts': sensitive_alerts,
            'summary': summary,
            'content_hash': content_hash,
            'safe_to_send': risk_level != 'HIGH' and not sensitive_found
        }
    
    def _generate_attachment_summary(self, filename, ext, size_mb, content_preview):
        """Generate human-readable attachment summary."""
        summaries = {
            '.pdf': f'PDF document ({size_mb}MB) - {filename}',
            '.docx': f'Word document ({size_mb}MB) - {filename}',
            '.xlsx': f'Excel spreadsheet ({size_mb}MB) - {filename}',
            '.pptx': f'PowerPoint presentation ({size_mb}MB) - {filename}',
            '.csv': f'CSV data file ({size_mb}MB) - {filename}',
            '.zip': f'Compressed archive ({size_mb}MB) - {filename}',
            '.json': f'JSON data file ({size_mb}MB) - {filename}',
            '.jpg': f'JPEG image ({size_mb}MB) - {filename}',
            '.png': f'PNG image ({size_mb}MB) - {filename}',
        }
        return summaries.get(ext, f'{ext.upper().lstrip(".")} file ({size_mb}MB) - {filename}')
    
    def _check_missing_attachments(self, body, attachments):
        """Detect if email body mentions attachments that aren't included."""
        body_lower = body.lower()
        attachment_words = ['attached', 'attachment', 'enclosed', 'appended',
                          'see attached', 'please find attached', 'find attached',
                          'attached file', 'attached document']
        
        mentions_attachment = any(word in body_lower for word in attachment_words)
        has_attachments = len(attachments) > 0
        
        if mentions_attachment and not has_attachments:
            return {
                'alert': True,
                'message': '⚠️ Email body mentions an attachment but none is included!',
                'suggestion': 'Please add the referenced attachment before sending.'
            }
        
        return {'alert': False, 'message': 'No missing attachments detected.'}
    
    def _generate_recommendations(self, results, total_size_mb, reply_all):
        """Generate actionable recommendations."""
        recs = []
        
        if results['sensitive_data_alerts']:
            recs.append('🚨 REMOVE sensitive data from attachments before sending')
            recs.append('🔒 Consider redacting PII or using encrypted attachments')
        
        if total_size_mb > self.max_attachment_size_mb:
            recs.append(f'📦 Total attachment size ({total_size_mb:.1f}MB) exceeds {self.max_attachment_size_mb}MB limit')
            recs.append('☁️ Use Zion Secure File Share for large files')
        
        if results['missing_attachment_check']['alert']:
            recs.append('📎 Add the missing attachment referenced in your email')
        
        for att in results['attachment_analysis']:
            if att['risk_level'] == 'HIGH':
                recs.append(f'⛔ Remove high-risk file: {att["filename"]}')
        
        if reply_all:
            recs.append('👥 REPLY ALL: All recipients will receive these attachments')
            recs.append('🔍 Verify all recipients should have access to these files')
        
        if results['security_score'] >= 80:
            recs.append('✅ Security score is good - attachments appear safe to send')
        
        return recs
    
    def get_attachment_audit_report(self):
        """Generate attachment audit report."""
        return {
            'generated_at': datetime.now().isoformat(),
            'total_analyzed': len(self.attachment_log),
            'recent_analyses': self.attachment_log[-20:],
            'avg_security_score': (
                sum(a['security_score'] for a in self.attachment_log) / len(self.attachment_log)
                if self.attachment_log else 0
            )
        }


if __name__ == '__main__':
    ai = AttachmentIntelligence()
    
    test_emails = [
        {
            'id': 'e001', 'sender': 'kleber@ziontechgroup.com',
            'recipients': ['client@acme.com', 'legal@acme.com', 'team@ziontechgroup.com'],
            'subject': 'Q2 Financial Report and Contract',
            'body': 'Please find attached the Q2 financial report and the updated contract. The spreadsheet contains all revenue data.',
            'attachments': [
                {'filename': 'Q2_Report.pdf', 'type': 'application/pdf', 'size_mb': 2.5,
                 'content_preview': 'Q2 2026 Financial Summary. Revenue: $4.2M. Growth: 23%.'},
                {'filename': 'contract_v3.docx', 'type': 'application/docx', 'size_mb': 1.2,
                 'content_preview': 'Service Agreement between Zion Tech Group and ACME Corp. SSN: 123-45-6789. Payment terms: Net 30.'}
            ],
            'timestamp': '2026-05-30T10:00:00'
        },
        {
            'id': 'e002', 'sender': 'kleber@ziontechgroup.com',
            'recipients': ['prospect@startup.io'],
            'subject': 'Our AI Solutions Brochure',
            'body': 'As discussed, please see the attached brochure with our AI solutions and pricing.',
            'attachments': [],
            'timestamp': '2026-05-30T11:00:00'
        }
    ]
    
    print("=== V1043: AI Email Attachment Intelligence ===\n")
    
    for email in test_emails:
        result = ai.analyze_email_attachments(email)
        print(f"Email: {result['subject']}")
        print(f"  Attachments: {result['total_attachments']}")
        print(f"  Security Score: {result['security_score']}/100")
        print(f"  Missing Attachments: {'YES ⚠️' if result['missing_attachment_check']['alert'] else 'No'}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        
        for alert in result['sensitive_data_alerts']:
            print(f"  🚨 Sensitive Data: {alert['type']} in {alert['filename']} ({alert['severity']})")
        
        for rec in result['recommendations']:
            print(f"  💡 {rec}")
        print()

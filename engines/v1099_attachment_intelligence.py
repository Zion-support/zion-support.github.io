#!/usr/bin/env python3
"""
V1099 - Email Attachment Intelligence
Analyze and categorize email attachments
Extract text and data from documents
Detect sensitive information in attachments
Generate attachment summaries
Track attachment versions and changes
"""

import json
import re
import hashlib
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict

class AttachmentIntelligence:
    def __init__(self):
        self.attachment_history = defaultdict(list)
        self.sensitive_patterns = {
            'ssn': r'\b\d{3}-\d{2}-\d{4}\b',
            'credit_card': r'\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b',
            'email': r'\b[\w.+-]+@[\w-]+\.[\w.]+\b',
            'phone': r'\b\d{3}[\s.-]?\d{3}[\s.-]?\d{4}\b',
            'ip_address': r'\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b',
            'api_key': r'\b(?:api[_-]?key|token|secret)[\s:=]+[\w\-]{20,}\b',
            'password': r'\b(?:password|passwd|pwd)[\s:=]+\S+\b'
        }
        self.file_categories = {
            'document': ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'],
            'spreadsheet': ['.xlsx', '.xls', '.csv', '.ods'],
            'presentation': ['.pptx', '.ppt', '.odp'],
            'image': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg', '.webp'],
            'code': ['.py', '.js', '.ts', '.java', '.cpp', '.go', '.rs'],
            'archive': ['.zip', '.tar', '.gz', '.rar', '.7z'],
            'data': ['.json', '.xml', '.yaml', '.yml', '.toml'],
            'media': ['.mp3', '.mp4', '.avi', '.mov', '.wav']
        }
    
    def categorize_file(self, filename: str) -> str:
        """Categorize file by extension"""
        ext = '.' + filename.rsplit('.', 1)[-1].lower() if '.' in filename else ''
        for category, extensions in self.file_categories.items():
            if ext in extensions:
                return category
        return 'other'
    
    def compute_hash(self, content: str) -> str:
        """Compute content hash for version tracking"""
        return hashlib.sha256(content.encode()).hexdigest()[:16]
    
    def detect_sensitive_data(self, text: str) -> Dict[str, List[str]]:
        """Detect sensitive information in text content"""
        findings = {}
        
        for data_type, pattern in self.sensitive_patterns.items():
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                # Mask sensitive data in output
                masked = []
                for match in matches:
                    if len(match) > 4:
                        masked.append(match[:2] + '*' * (len(match) - 4) + match[-2:])
                    else:
                        masked.append('****')
                findings[data_type] = masked
        
        return findings
    
    def analyze_attachment(self, attachment: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze a single attachment"""
        filename = attachment.get('filename', 'unknown')
        content = attachment.get('content', '')
        size_bytes = attachment.get('size', len(content.encode()) if content else 0)
        
        category = self.categorize_file(filename)
        content_hash = self.compute_hash(content) if content else 'empty'
        
        # Detect sensitive data
        sensitive_findings = self.detect_sensitive_data(content) if content else {}
        
        # Generate summary
        summary = self.generate_attachment_summary(filename, category, content)
        
        # Extract metadata
        metadata = self.extract_metadata(filename, content, category)
        
        return {
            'filename': filename,
            'category': category,
            'size_bytes': size_bytes,
            'size_human': self.format_size(size_bytes),
            'content_hash': content_hash,
            'sensitive_data_detected': len(sensitive_findings) > 0,
            'sensitive_findings': sensitive_findings,
            'summary': summary,
            'metadata': metadata,
            'risk_level': self.assess_risk(sensitive_findings, category)
        }
    
    def format_size(self, bytes_count: int) -> str:
        """Format file size in human-readable format"""
        if bytes_count < 1024:
            return f"{bytes_count} B"
        elif bytes_count < 1024 * 1024:
            return f"{bytes_count / 1024:.1f} KB"
        elif bytes_count < 1024 * 1024 * 1024:
            return f"{bytes_count / (1024 * 1024):.1f} MB"
        else:
            return f"{bytes_count / (1024 * 1024 * 1024):.1f} GB"
    
    def generate_attachment_summary(self, filename: str, category: str, content: str) -> str:
        """Generate a brief summary of the attachment"""
        summaries = {
            'document': f'Document: {filename} - Contains text content suitable for review',
            'spreadsheet': f'Spreadsheet: {filename} - Data table with potential numerical analysis',
            'presentation': f'Presentation: {filename} - Slide deck for review',
            'image': f'Image: {filename} - Visual content',
            'code': f'Code file: {filename} - Source code requiring technical review',
            'archive': f'Archive: {filename} - Compressed file containing multiple items',
            'data': f'Data file: {filename} - Structured data for processing',
            'media': f'Media: {filename} - Audio/video content',
            'other': f'File: {filename} - Uncategorized attachment'
        }
        return summaries.get(category, summaries['other'])
    
    def extract_metadata(self, filename: str, content: str, category: str) -> Dict[str, Any]:
        """Extract metadata from attachment content"""
        metadata = {
            'word_count': len(content.split()) if content else 0,
            'line_count': len(content.splitlines()) if content else 0,
            'has_tables': bool(re.search(r'\|.*\|', content)) if content else False,
            'has_urls': bool(re.search(r'https?://\S+', content)) if content else False,
            'has_emails': bool(re.search(r'\b[\w.+-]+@[\w-]+\.[\w.]+\b', content)) if content else False
        }
        
        if category == 'code':
            metadata['has_functions'] = bool(re.search(r'(?:def |function |class )', content)) if content else False
            metadata['has_comments'] = bool(re.search(r'(?:#|//|/\*)', content)) if content else False
            metadata['language'] = self.detect_language(filename)
        
        return metadata
    
    def detect_language(self, filename: str) -> str:
        """Detect programming language from filename"""
        ext_map = {
            '.py': 'Python', '.js': 'JavaScript', '.ts': 'TypeScript',
            '.java': 'Java', '.cpp': 'C++', '.go': 'Go', '.rs': 'Rust',
            '.rb': 'Ruby', '.php': 'PHP', '.cs': 'C#'
        }
        ext = '.' + filename.rsplit('.', 1)[-1].lower() if '.' in filename else ''
        return ext_map.get(ext, 'Unknown')
    
    def assess_risk(self, sensitive_findings: Dict, category: str) -> str:
        """Assess risk level of attachment"""
        high_risk_types = ['ssn', 'credit_card', 'password', 'api_key']
        
        for risk_type in high_risk_types:
            if risk_type in sensitive_findings:
                return 'high'
        
        if len(sensitive_findings) > 2:
            return 'medium'
        elif len(sensitive_findings) > 0:
            return 'low'
        
        return 'none'
    
    def track_version(self, thread_id: str, attachment: Dict[str, Any]) -> Dict[str, Any]:
        """Track attachment versions across a thread"""
        filename = attachment.get('filename', 'unknown')
        content = attachment.get('content', '')
        content_hash = self.compute_hash(content) if content else 'empty'
        
        key = f"{thread_id}:{filename}"
        
        version_entry = {
            'timestamp': datetime.now(),
            'content_hash': content_hash,
            'size': len(content) if content else 0,
            'version_number': len(self.attachment_history[key]) + 1
        }
        
        self.attachment_history[key].append(version_entry)
        
        # Check for changes
        versions = self.attachment_history[key]
        if len(versions) > 1:
            prev = versions[-2]
            changed = prev['content_hash'] != content_hash
            return {
                'version': version_entry['version_number'],
                'changed': changed,
                'size_change': version_entry['size'] - prev['size'],
                'previous_version': prev['version_number']
            }
        
        return {
            'version': 1,
            'changed': False,
            'size_change': 0,
            'previous_version': None
        }
    
    def generate_attachment_report(self, thread_id: str, attachments: List[Dict]) -> Dict[str, Any]:
        """Generate comprehensive attachment report for a thread"""
        analyses = []
        total_size = 0
        risk_counts = defaultdict(int)
        category_counts = defaultdict(int)
        
        for attachment in attachments:
            analysis = self.analyze_attachment(attachment)
            version_info = self.track_version(thread_id, attachment)
            analysis['version_info'] = version_info
            
            analyses.append(analysis)
            total_size += analysis['size_bytes']
            risk_counts[analysis['risk_level']] += 1
            category_counts[analysis['category']] += 1
        
        return {
            'thread_id': thread_id,
            'total_attachments': len(attachments),
            'total_size': self.format_size(total_size),
            'risk_summary': dict(risk_counts),
            'category_breakdown': dict(category_counts),
            'sensitive_data_alert': any(a['sensitive_data_detected'] for a in analyses),
            'version_tracked': [a for a in analyses if a['version_info']['version'] > 1],
            'analyses': analyses
        }
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process incoming email and analyze attachments"""
        thread_id = email_data.get('thread_id', email_data.get('message_id', 'unknown'))
        attachments = email_data.get('attachments', [])
        recipients = email_data.get('to', [])
        
        if not attachments:
            return {
                'engine': 'V1099 - Attachment Intelligence',
                'status': 'no_attachments',
                'reply_all_required': len(recipients) > 1,
                'action': 'No attachments to analyze'
            }
        
        report = self.generate_attachment_report(thread_id, attachments)
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        return {
            'engine': 'V1099 - Attachment Intelligence',
            'thread_id': thread_id,
            'report': report,
            'reply_all_required': reply_all,
            'action': self.determine_action(report)
        }
    
    def determine_action(self, report: Dict) -> str:
        """Determine action based on attachment analysis"""
        if report.get('sensitive_data_alert'):
            return 'ALERT: Sensitive data detected in attachments - review before forwarding'
        
        high_risk = report['risk_summary'].get('high', 0)
        if high_risk > 0:
            return f'{high_risk} high-risk attachment(s) - restrict distribution'
        
        versions = report.get('version_tracked', [])
        if versions:
            return f'{len(versions)} attachment(s) have been updated - review changes'
        
        total = report['total_attachments']
        return f'{total} attachment(s) analyzed - all clear for distribution'


if __name__ == '__main__':
    intelligence = AttachmentIntelligence()
    
    print("V1099 - Attachment Intelligence Test")
    print("=" * 60)
    
    # Test with sample attachments
    test_email = {
        'thread_id': 'thread_001',
        'from': 'alice@example.com',
        'to': ['bob@example.com', 'carol@example.com', 'dave@example.com'],
        'subject': 'Project documents',
        'body': 'Please find attached the project documents.',
        'attachments': [
            {
                'filename': 'project_plan.pdf',
                'content': 'Project plan for Q4 2024. Budget: $500,000. Team lead: John Smith. Contact: john@example.com, phone: 555-123-4567.',
                'size': 256000
            },
            {
                'filename': 'employee_data.csv',
                'content': 'Name,SSN,Salary\nJohn Smith,123-45-6789,75000\nJane Doe,987-65-4321,82000\napi_key=sk_live_abc123def456ghi789',
                'size': 1024
            },
            {
                'filename': 'main.py',
                'content': '# Main application\ndef process_data(input):\n    """Process the input data"""\n    result = transform(input)\n    return result\n\nclass DataProcessor:\n    def __init__(self):\n        self.config = {}',
                'size': 2048
            }
        ]
    }
    
    result = intelligence.process_email(test_email)
    print(json.dumps(result, indent=2, default=str))
    
    # Test version tracking
    print("\n--- Version Tracking ---")
    v2_email = {
        'thread_id': 'thread_001',
        'from': 'alice@example.com',
        'to': ['bob@example.com'],
        'attachments': [
            {
                'filename': 'project_plan.pdf',
                'content': 'UPDATED Project plan for Q4 2024. Budget: $600,000 (increased). Team lead: John Smith.',
                'size': 260000
            }
        ]
    }
    
    v2_result = intelligence.process_email(v2_email)
    print(json.dumps(v2_result['report']['version_tracked'], indent=2, default=str))

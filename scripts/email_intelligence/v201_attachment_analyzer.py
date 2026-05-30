#!/usr/bin/env python3
"""
V201 - AI Email Attachment Analyzer
Extracts text, tables, and metadata from email attachments (PDFs, images, documents).
Identifies key information, flags sensitive data, and generates summaries.
"""

import json
from datetime import datetime
from typing import Dict, List, Any
import re


class AttachmentAnalyzer:
    """AI-powered email attachment analysis."""
    
    def __init__(self):
        self.analysis_history = []
    
    def analyze_attachments(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Analyze email attachments."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        attachments = email.get('attachments', [])
        
        if not attachments:
            return {
                'has_attachments': False,
                'message': 'No attachments found'
            }
        
        # Analyze each attachment
        attachment_analyses = []
        total_findings = []
        sensitive_data_flags = []
        
        for attachment in attachments:
            analysis = self._analyze_single_attachment(attachment, context)
            attachment_analyses.append(analysis)
            total_findings.extend(analysis.get('findings', []))
            sensitive_data_flags.extend(analysis.get('sensitive_data', []))
        
        # Generate overall summary
        summary = self._generate_summary(attachment_analyses, total_findings)
        
        # Create action recommendations
        recommendations = self._generate_recommendations(
            attachment_analyses, sensitive_data_flags
        )
        
        return {
            'analysis_id': f"attach_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'has_attachments': True,
            'attachment_count': len(attachments),
            'attachment_analyses': attachment_analyses,
            'summary': summary,
            'sensitive_data_flags': sensitive_data_flags,
            'recommendations': recommendations,
            'reply_all_strategy': self._determine_reply_all_strategy(
                email, sensitive_data_flags
            )
        }
    
    def _analyze_single_attachment(self, attachment: Dict, context: Dict) -> Dict[str, Any]:
        """Analyze a single attachment."""
        filename = attachment.get('filename', 'unknown')
        file_type = self._detect_file_type(filename)
        size_kb = attachment.get('size_kb', 0)
        
        # Simulate content extraction
        extracted_text = self._extract_text(attachment, context)
        tables = self._extract_tables(attachment, context)
        images = self._extract_images(attachment, context)
        
        # Analyze content
        findings = self._analyze_content(extracted_text, tables)
        
        # Detect sensitive data
        sensitive_data = self._detect_sensitive_data(extracted_text)
        
        # Generate summary
        summary = self._generate_attachment_summary(
            filename, file_type, size_kb, findings
        )
        
        return {
            'filename': filename,
            'file_type': file_type,
            'size_kb': size_kb,
            'extracted_text': extracted_text[:500],  # Limit for response
            'tables_found': len(tables),
            'images_found': len(images),
            'findings': findings,
            'sensitive_data': sensitive_data,
            'summary': summary,
            'page_count': self._estimate_page_count(size_kb, file_type)
        }
    
    def _detect_file_type(self, filename: str) -> str:
        """Detect file type from filename."""
        filename_lower = filename.lower()
        
        if filename_lower.endswith('.pdf'):
            return 'pdf'
        elif filename_lower.endswith(('.doc', '.docx')):
            return 'word'
        elif filename_lower.endswith(('.xls', '.xlsx')):
            return 'excel'
        elif filename_lower.endswith(('.ppt', '.pptx')):
            return 'powerpoint'
        elif filename_lower.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            return 'image'
        elif filename_lower.endswith('.txt'):
            return 'text'
        elif filename_lower.endswith('.csv'):
            return 'csv'
        else:
            return 'unknown'
    
    def _extract_text(self, attachment: Dict, context: Dict) -> str:
        """Extract text from attachment (simulated)."""
        # In real implementation, this would use libraries like PyPDF2, python-docx, etc.
        # For demo, we'll simulate based on file type
        
        file_type = self._detect_file_type(attachment.get('filename', ''))
        
        if file_type == 'pdf':
            return "This is a simulated PDF document containing business information, project details, and financial data. The document discusses quarterly results, budget allocations, and strategic initiatives for the upcoming fiscal year."
        elif file_type == 'word':
            return "This is a simulated Word document with meeting notes, action items, and project updates. It includes sections on deliverables, timelines, and resource allocation."
        elif file_type in ['excel', 'csv']:
            return "This is a simulated spreadsheet containing financial data with columns for date, amount, category, and description. Total revenue: $1,234,567. Expenses: $987,654."
        elif file_type == 'powerpoint':
            return "This is a simulated PowerPoint presentation with 15 slides covering company overview, market analysis, competitive landscape, and growth strategy."
        else:
            return "This is a simulated text document with general information."
    
    def _extract_tables(self, attachment: Dict, context: Dict) -> List[Dict]:
        """Extract tables from attachment (simulated)."""
        file_type = self._detect_file_type(attachment.get('filename', ''))
        
        if file_type in ['excel', 'csv']:
            return [{
                'table_id': 1,
                'rows': 100,
                'columns': 5,
                'headers': ['Date', 'Amount', 'Category', 'Description', 'Status']
            }]
        elif file_type == 'pdf':
            return [{
                'table_id': 1,
                'rows': 10,
                'columns': 4,
                'headers': ['Item', 'Quantity', 'Price', 'Total']
            }]
        
        return []
    
    def _extract_images(self, attachment: Dict, context: Dict) -> List[Dict]:
        """Extract images from attachment (simulated)."""
        file_type = self._detect_file_type(attachment.get('filename', ''))
        
        if file_type == 'image':
            return [{
                'image_id': 1,
                'description': 'Business chart or diagram',
                'dimensions': '800x600'
            }]
        elif file_type == 'pdf':
            return [{
                'image_id': 1,
                'description': 'Company logo',
                'dimensions': '200x200'
            }]
        
        return []
    
    def _analyze_content(self, text: str, tables: List[Dict]) -> List[Dict[str, Any]]:
        """Analyze extracted content for key information."""
        findings = []
        
        # Look for financial data
        if re.search(r'\$[\d,]+(?:\.\d{2})?', text):
            findings.append({
                'type': 'financial_data',
                'description': 'Financial figures detected',
                'importance': 'high'
            })
        
        # Look for dates
        if re.search(r'\d{1,2}[/-]\d{1,2}[/-]\d{2,4}', text):
            findings.append({
                'type': 'dates',
                'description': 'Date references found',
                'importance': 'medium'
            })
        
        # Look for action items
        if any(word in text.lower() for word in ['action item', 'todo', 'deadline']):
            findings.append({
                'type': 'action_items',
                'description': 'Action items or deadlines mentioned',
                'importance': 'high'
            })
        
        # Tables indicate structured data
        if tables:
            findings.append({
                'type': 'structured_data',
                'description': f'{len(tables)} table(s) with structured data',
                'importance': 'medium'
            })
        
        return findings
    
    def _detect_sensitive_data(self, text: str) -> List[Dict[str, Any]]:
        """Detect sensitive data in text."""
        sensitive_data = []
        
        # Social Security Numbers
        if re.search(r'\d{3}-\d{2}-\d{4}', text):
            sensitive_data.append({
                'type': 'ssn',
                'description': 'Social Security Number detected',
                'severity': 'critical'
            })
        
        # Credit card numbers
        if re.search(r'\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}', text):
            sensitive_data.append({
                'type': 'credit_card',
                'description': 'Credit card number detected',
                'severity': 'critical'
            })
        
        # Email addresses (could be personal)
        emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)
        if len(emails) > 5:
            sensitive_data.append({
                'type': 'email_list',
                'description': f'{len(emails)} email addresses found',
                'severity': 'medium'
            })
        
        # Phone numbers
        if re.search(r'\d{3}[-.]?\d{3}[-.]?\d{4}', text):
            sensitive_data.append({
                'type': 'phone_numbers',
                'description': 'Phone numbers detected',
                'severity': 'low'
            })
        
        # Passwords or credentials
        if any(word in text.lower() for word in ['password', 'secret', 'api key']):
            sensitive_data.append({
                'type': 'credentials',
                'description': 'Potential credentials or secrets detected',
                'severity': 'critical'
            })
        
        return sensitive_data
    
    def _generate_attachment_summary(self, filename: str, file_type: str, 
                                    size_kb: int, findings: List[Dict]) -> str:
        """Generate summary for attachment."""
        summary_parts = [f"{filename} ({file_type}, {size_kb}KB)"]
        
        if findings:
            important_findings = [f for f in findings if f['importance'] == 'high']
            if important_findings:
                summary_parts.append(f"Contains {len(important_findings)} important item(s)")
        
        return ' - '.join(summary_parts)
    
    def _estimate_page_count(self, size_kb: int, file_type: str) -> int:
        """Estimate page count based on file size and type."""
        if file_type == 'pdf':
            return max(1, size_kb // 50)  # ~50KB per page
        elif file_type == 'word':
            return max(1, size_kb // 30)  # ~30KB per page
        elif file_type == 'powerpoint':
            return max(1, size_kb // 100)  # ~100KB per slide
        else:
            return 1
    
    def _generate_summary(self, analyses: List[Dict], findings: List[Dict]) -> Dict[str, Any]:
        """Generate overall summary."""
        total_files = len(analyses)
        total_findings = len(findings)
        
        file_types = {}
        for analysis in analyses:
            ft = analysis['file_type']
            file_types[ft] = file_types.get(ft, 0) + 1
        
        important_findings = [f for f in findings if f['importance'] == 'high']
        
        return {
            'total_files': total_files,
            'file_types': file_types,
            'total_findings': total_findings,
            'important_findings': len(important_findings),
            'summary_text': f"Analyzed {total_files} file(s) with {total_findings} finding(s), {len(important_findings)} high importance"
        }
    
    def _generate_recommendations(self, analyses: List[Dict], 
                                 sensitive_data: List[Dict]) -> List[str]:
        """Generate recommendations based on analysis."""
        recommendations = []
        
        if sensitive_data:
            critical_data = [d for d in sensitive_data if d['severity'] == 'critical']
            if critical_data:
                recommendations.append(
                    "⚠️ CRITICAL: Sensitive data detected. Review before sharing externally."
                )
        
        # Check for large files
        large_files = [a for a in analyses if a['size_kb'] > 5000]
        if large_files:
            recommendations.append(
                "Consider using cloud storage links for large attachments"
            )
        
        # Check for many attachments
        if len(analyses) > 5:
            recommendations.append(
                "Multiple attachments detected. Consider consolidating into a single document"
            )
        
        if not recommendations:
            recommendations.append("✅ Attachments appear safe and well-structured")
        
        return recommendations
    
    def _determine_reply_all_strategy(self, email: Dict, 
                                     sensitive_data: List[Dict]) -> Dict[str, Any]:
        """Determine reply-all strategy."""
        has_critical_data = any(d['severity'] == 'critical' for d in sensitive_data)
        
        if has_critical_data:
            return {
                'reply_all_recommended': False,
                'reason': 'Sensitive data detected - consider direct reply to sender only',
                'warning': 'Review sensitive data before sharing with all recipients'
            }
        
        return {
            'reply_all_recommended': True,
            'reason': 'Keep all participants informed about attachment contents'
        }


def analyze_email_attachments(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for attachment analysis."""
    analyzer = AttachmentAnalyzer()
    return analyzer.analyze_attachments(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'finance@company.com',
        'to': ['team@company.com'],
        'subject': 'Q4 Financial Report',
        'body': 'Please find attached the Q4 financial report and budget proposal.',
        'attachments': [
            {
                'filename': 'Q4_Report.pdf',
                'size_kb': 2500,
                'content': 'Quarterly revenue: $1,234,567. SSN: 123-45-6789. Contact: john@example.com'
            },
            {
                'filename': 'Budget_2024.xlsx',
                'size_kb': 800,
                'content': 'Budget allocations by department'
            }
        ],
        'date': '2024-01-15T10:00:00'
    }
    
    result = analyze_email_attachments(test_email)
    print(json.dumps(result, indent=2))

"""
V146: AI Email Attachment Intelligence
Analyze, summarize, and extract data from email attachments.
"""
import re
from datetime import datetime
from typing import Dict, List, Optional, Tuple
from enum import Enum
import hashlib


class AttachmentType(Enum):
    PDF = "pdf"
    SPREADSHEET = "spreadsheet"
    DOCUMENT = "document"
    IMAGE = "image"
    ARCHIVE = "archive"
    CODE = "code"
    UNKNOWN = "unknown"


class ExtractionType(Enum):
    TEXT = "text"
    TABLE = "table"
    METADATA = "metadata"
    CONTRACT_CLAUSE = "contract_clause"
    FINANCIAL_DATA = "financial_data"
    CONTACT_INFO = "contact_info"


class SecurityRisk(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class AttachmentAnalyzer:
    """Analyzes email attachments and extracts intelligent insights."""
    
    FILE_TYPE_MAP = {
        'pdf': AttachmentType.PDF,
        'doc': AttachmentType.DOCUMENT,
        'docx': AttachmentType.DOCUMENT,
        'txt': AttachmentType.DOCUMENT,
        'xls': AttachmentType.SPREADSHEET,
        'xlsx': AttachmentType.SPREADSHEET,
        'csv': AttachmentType.SPREADSHEET,
        'jpg': AttachmentType.IMAGE,
        'jpeg': AttachmentType.IMAGE,
        'png': AttachmentType.IMAGE,
        'gif': AttachmentType.IMAGE,
        'zip': AttachmentType.ARCHIVE,
        'tar': AttachmentType.ARCHIVE,
        'gz': AttachmentType.ARCHIVE,
        'py': AttachmentType.CODE,
        'js': AttachmentType.CODE,
        'java': AttachmentType.CODE,
        'cpp': AttachmentType.CODE
    }
    
    SUSPICIOUS_EXTENSIONS = [
        'exe', 'bat', 'cmd', 'scr', 'pif', 'vbs', 'vbe', 'js', 'jse',
        'wsf', 'wsh', 'msi', 'dll', 'com', 'hta', 'cpl', 'inf', 'reg'
    ]
    
    def __init__(self):
        self.analysis_history: List[Dict] = []
        self.reply_all_count = 0
        self.security_alerts = 0
        self.extractions_performed = 0
        
    def analyze_attachment(self, filename: str, size_bytes: int, 
                          content_hash: str, email_context: Dict) -> Dict:
        """Analyze attachment and extract insights."""
        
        # Determine file type
        attachment_type = self._detect_type(filename)
        
        # Security assessment
        security_risk = self._assess_security(filename, size_bytes, content_hash)
        
        # Extract metadata
        metadata = self._extract_metadata(filename, size_bytes)
        
        # Simulate content extraction (in real implementation, would parse actual file)
        extracted_data = self._extract_content(attachment_type, filename, email_context)
        
        # Generate summary
        summary = self._generate_summary(attachment_type, extracted_data, metadata)
        
        # Determine if reply-all needed
        reply_all = self._should_reply_all(attachment_type, security_risk, email_context)
        
        if reply_all:
            self.reply_all_count += 1
        
        if security_risk in [SecurityRisk.HIGH, SecurityRisk.CRITICAL]:
            self.security_alerts += 1
        
        self.extractions_performed += 1
        
        result = {
            'filename': filename,
            'attachment_type': attachment_type.value,
            'size_bytes': size_bytes,
            'size_human': self._format_size(size_bytes),
            'security_risk': security_risk.value,
            'metadata': metadata,
            'extracted_data': extracted_data,
            'summary': summary,
            'reply_all': reply_all,
            'timestamp': datetime.now().isoformat()
        }
        
        self.analysis_history.append(result)
        return result
    
    def _detect_type(self, filename: str) -> AttachmentType:
        """Detect attachment type from filename."""
        ext = filename.lower().split('.')[-1] if '.' in filename else ''
        return self.FILE_TYPE_MAP.get(ext, AttachmentType.UNKNOWN)
    
    def _assess_security(self, filename: str, size_bytes: int, content_hash: str) -> SecurityRisk:
        """Assess security risk of attachment."""
        ext = filename.lower().split('.')[-1] if '.' in filename else ''
        
        # Check for suspicious extensions
        if ext in self.SUSPICIOUS_EXTENSIONS:
            return SecurityRisk.CRITICAL
        
        # Check for double extensions (e.g., document.pdf.exe)
        parts = filename.lower().split('.')
        if len(parts) > 2:
            for part in parts[:-1]:
                if part in self.SUSPICIOUS_EXTENSIONS:
                    return SecurityRisk.HIGH
        
        # Check file size anomalies
        if size_bytes > 50 * 1024 * 1024:  # 50MB
            return SecurityRisk.MEDIUM
        
        # Check for password-protected archives
        if ext in ['zip', 'rar', '7z'] and 'password' in filename.lower():
            return SecurityRisk.MEDIUM
        
        return SecurityRisk.LOW
    
    def _extract_metadata(self, filename: str, size_bytes: int) -> Dict:
        """Extract file metadata."""
        return {
            'filename': filename,
            'size_bytes': size_bytes,
            'extension': filename.split('.')[-1] if '.' in filename else '',
            'created_date': datetime.now().isoformat(),
            'hash': hashlib.md5(filename.encode()).hexdigest()[:16]
        }
    
    def _extract_content(self, attachment_type: AttachmentType, 
                        filename: str, email_context: Dict) -> Dict:
        """Extract content based on attachment type."""
        
        extracted = {
            'type': attachment_type.value,
            'extractions': []
        }
        
        # Simulate extraction based on type
        if attachment_type == AttachmentType.PDF:
            extracted['extractions'] = self._extract_pdf_content(filename)
        elif attachment_type == AttachmentType.SPREADSHEET:
            extracted['extractions'] = self._extract_spreadsheet_data(filename)
        elif attachment_type == AttachmentType.DOCUMENT:
            extracted['extractions'] = self._extract_document_content(filename)
        elif attachment_type == AttachmentType.IMAGE:
            extracted['extractions'] = self._extract_image_metadata(filename)
        
        return extracted
    
    def _extract_pdf_content(self, filename: str) -> List[Dict]:
        """Extract content from PDF (simulated)."""
        extractions = []
        
        # Simulate contract clause extraction
        if any(keyword in filename.lower() for keyword in ['contract', 'agreement', 'nda']):
            extractions.append({
                'type': ExtractionType.CONTRACT_CLAUSE.value,
                'content': {
                    'parties': ['Party A', 'Party B'],
                    'effective_date': '2024-01-15',
                    'term': '12 months',
                    'value': '$50,000',
                    'key_clauses': ['Confidentiality', 'Termination', 'Liability']
                }
            })
        
        # Simulate text extraction
        extractions.append({
            'type': ExtractionType.TEXT.value,
            'content': {
                'page_count': 12,
                'word_count': 3500,
                'language': 'en',
                'summary': 'Business proposal outlining project scope and deliverables'
            }
        })
        
        return extractions
    
    def _extract_spreadsheet_data(self, filename: str) -> List[Dict]:
        """Extract data from spreadsheet (simulated)."""
        extractions = []
        
        # Simulate financial data extraction
        if any(keyword in filename.lower() for keyword in ['budget', 'financial', 'forecast', 'revenue']):
            extractions.append({
                'type': ExtractionType.FINANCIAL_DATA.value,
                'content': {
                    'total_revenue': '$1,250,000',
                    'expenses': '$850,000',
                    'net_profit': '$400,000',
                    'period': 'Q4 2023',
                    'growth_rate': '15%'
                }
            })
        
        # Simulate table extraction
        extractions.append({
            'type': ExtractionType.TABLE.value,
            'content': {
                'sheet_count': 3,
                'row_count': 150,
                'column_count': 8,
                'headers': ['Date', 'Description', 'Amount', 'Category'],
                'sample_data': [
                    {'Date': '2024-01-15', 'Description': 'Office Supplies', 'Amount': '$250'},
                    {'Date': '2024-01-16', 'Description': 'Software License', 'Amount': '$1,200'}
                ]
            }
        })
        
        return extractions
    
    def _extract_document_content(self, filename: str) -> List[Dict]:
        """Extract content from document (simulated)."""
        extractions = []
        
        # Simulate contact info extraction
        extractions.append({
            'type': ExtractionType.CONTACT_INFO.value,
            'content': {
                'names': ['John Smith', 'Sarah Johnson'],
                'emails': ['john@example.com', 'sarah@example.com'],
                'phones': ['+1-555-0123', '+1-555-0456'],
                'organizations': ['Acme Corp', 'Tech Solutions Inc']
            }
        })
        
        # Simulate text extraction
        extractions.append({
            'type': ExtractionType.TEXT.value,
            'content': {
                'word_count': 1200,
                'paragraph_count': 15,
                'language': 'en',
                'reading_time': '5 minutes'
            }
        })
        
        return extractions
    
    def _extract_image_metadata(self, filename: str) -> List[Dict]:
        """Extract metadata from image (simulated)."""
        return [{
            'type': ExtractionType.METADATA.value,
            'content': {
                'dimensions': '1920x1080',
                'format': 'JPEG',
                'color_depth': '24-bit',
                'exif_data': {
                    'camera': 'Canon EOS R5',
                    'date_taken': '2024-01-10 14:30:00',
                    'location': 'New York, NY'
                }
            }
        }]
    
    def _generate_summary(self, attachment_type: AttachmentType, 
                         extracted_data: Dict, metadata: Dict) -> str:
        """Generate human-readable summary."""
        
        summaries = {
            AttachmentType.PDF: f"PDF document ({metadata['size_human']}) with {len(extracted_data.get('extractions', []))} extractable elements",
            AttachmentType.SPREADSHEET: f"Spreadsheet containing financial data and tables ({metadata['size_human']})",
            AttachmentType.DOCUMENT: f"Document with contact information and text content ({metadata['size_human']})",
            AttachmentType.IMAGE: f"Image file with metadata ({metadata['size_human']})",
            AttachmentType.ARCHIVE: f"Compressed archive ({metadata['size_human']}) - scan for security",
            AttachmentType.CODE: f"Source code file ({metadata['size_human']}) - review before execution",
            AttachmentType.UNKNOWN: f"Unknown file type ({metadata['size_human']}) - exercise caution"
        }
        
        return summaries.get(attachment_type, f"Attachment: {metadata['filename']}")
    
    def _should_reply_all(self, attachment_type: AttachmentType, 
                         security_risk: SecurityRisk, email_context: Dict) -> bool:
        """Determine if reply-all is needed for attachment analysis."""
        
        recipients = email_context.get('recipients', [])
        
        # Always reply-all for security alerts
        if security_risk in [SecurityRisk.HIGH, SecurityRisk.CRITICAL]:
            return len(recipients) > 1
        
        # Reply-all for contract/financial documents
        if attachment_type in [AttachmentType.PDF, AttachmentType.SPREADSHEET]:
            filename = email_context.get('filename', '').lower()
            if any(kw in filename for kw in ['contract', 'agreement', 'budget', 'financial']):
                return len(recipients) > 1
        
        return False
    
    def _format_size(self, size_bytes: int) -> str:
        """Format file size in human-readable format."""
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size_bytes < 1024:
                return f"{size_bytes:.1f} {unit}"
            size_bytes /= 1024
        return f"{size_bytes:.1f} TB"
    
    def generate_attachment_report(self, attachments: List[Dict]) -> Dict:
        """Generate comprehensive report for multiple attachments."""
        
        report = {
            'total_attachments': len(attachments),
            'total_size': sum(att['size_bytes'] for att in attachments),
            'types': {},
            'security_risks': {},
            'extractions': [],
            'recommendations': []
        }
        
        for att in attachments:
            # Count by type
            att_type = att['attachment_type']
            report['types'][att_type] = report['types'].get(att_type, 0) + 1
            
            # Count security risks
            risk = att['security_risk']
            report['security_risks'][risk] = report['security_risks'].get(risk, 0) + 1
            
            # Collect extractions
            report['extractions'].extend(att['extracted_data']['extractions'])
        
        # Generate recommendations
        if report['security_risks'].get('critical', 0) > 0:
            report['recommendations'].append("⚠️ Critical security risks detected - do not open suspicious attachments")
        if report['security_risks'].get('high', 0) > 0:
            report['recommendations'].append("⚡ High security risks - verify sender before opening")
        if report['types'].get('spreadsheet', 0) > 0:
            report['recommendations'].append("📊 Financial data detected - handle with confidentiality")
        if report['types'].get('pdf', 0) > 0:
            report['recommendations'].append("📄 Contract/agreement detected - review clauses carefully")
        
        report['total_size_human'] = self._format_size(report['total_size'])
        report['timestamp'] = datetime.now().isoformat()
        
        return report
    
    def get_stats(self) -> Dict:
        """Get analyzer statistics."""
        return {
            'attachments_analyzed': len(self.analysis_history),
            'extractions_performed': self.extractions_performed,
            'security_alerts': self.security_alerts,
            'reply_all_enforcements': self.reply_all_count,
            'security_alert_rate': self.security_alerts / max(1, len(self.analysis_history))
        }


def demo():
    """Demonstrate V146 attachment intelligence."""
    analyzer = AttachmentAnalyzer()
    
    print("=" * 60)
    print("V146: AI Email Attachment Intelligence - Demo")
    print("=" * 60)
    
    # Case 1: PDF Contract
    print("\n[Case 1: PDF Contract]")
    pdf_result = analyzer.analyze_attachment(
        'Service_Agreement_2024.pdf',
        2457600,  # 2.4MB
        'abc123hash',
        {
            'recipients': ['legal@company.com', 'manager@company.com'],
            'filename': 'Service_Agreement_2024.pdf'
        }
    )
    print(f"Type: {pdf_result['attachment_type']}")
    print(f"Security Risk: {pdf_result['security_risk']}")
    print(f"Summary: {pdf_result['summary']}")
    print(f"Reply-All: {pdf_result['reply_all']}")
    
    # Case 2: Financial Spreadsheet
    print("\n[Case 2: Financial Spreadsheet]")
    xlsx_result = analyzer.analyze_attachment(
        'Q4_Budget_Forecast.xlsx',
        1048576,  # 1MB
        'def456hash',
        {
            'recipients': ['finance@company.com'],
            'filename': 'Q4_Budget_Forecast.xlsx'
        }
    )
    print(f"Type: {xlsx_result['attachment_type']}")
    print(f"Summary: {xlsx_result['summary']}")
    print(f"Extractions: {len(xlsx_result['extracted_data']['extractions'])} elements")
    
    # Case 3: Suspicious Executable
    print("\n[Case 3: Suspicious Attachment]")
    exe_result = analyzer.analyze_attachment(
        'invoice.pdf.exe',
        512000,  # 500KB
        'ghi789hash',
        {
            'recipients': ['victim@company.com', 'security@company.com'],
            'filename': 'invoice.pdf.exe'
        }
    )
    print(f"Type: {exe_result['attachment_type']}")
    print(f"Security Risk: {exe_result['security_risk']} ⚠️")
    print(f"Reply-All: {exe_result['reply_all']}")
    
    # Generate comprehensive report
    print("\n" + "=" * 60)
    print("\n[Comprehensive Attachment Report]")
    report = analyzer.generate_attachment_report([pdf_result, xlsx_result, exe_result])
    print(f"Total Attachments: {report['total_attachments']}")
    print(f"Total Size: {report['total_size_human']}")
    print(f"Types: {report['types']}")
    print(f"Security Risks: {report['security_risks']}")
    print("\nRecommendations:")
    for rec in report['recommendations']:
        print(f"  {rec}")
    
    # Statistics
    print("\n" + "=" * 60)
    print("\n[Analyzer Statistics]")
    stats = analyzer.get_stats()
    for key, value in stats.items():
        print(f"{key}: {value}")


if __name__ == "__main__":
    demo()

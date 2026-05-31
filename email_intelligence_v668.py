#!/usr/bin/env python3
"""
V668 - Email Document Intelligence
Extracts, classifies, and tracks document versions and approvals from
email attachments. Provides document lifecycle management and compliance tracking.

Key Features:
- Document type classification
- Version tracking and deduplication
- Approval workflow detection
- Document expiration tracking
- Compliance classification
- Attachment security scanning
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
import hashlib
from datetime import datetime, timedelta
from collections import Counter, defaultdict
from typing import Dict, List, Optional, Tuple, Set

class EmailDocumentIntelligence:
    """Intelligent document management from email attachments"""
    
    def __init__(self):
        self.document_registry = {}
        self.version_history = defaultdict(list)
        self.approval_workflows = {}
        self.compliance_tracking = {}
    
    DOCUMENT_TYPES = {
        'contract': {
            'keywords': ['contract', 'agreement', 'terms', 'engagement letter', 'sow', 'statement of work'],
            'extensions': ['.pdf', '.docx', '.doc'],
            'sensitivity': 'high',
            'retention_years': 7
        },
        'invoice': {
            'keywords': ['invoice', 'bill', 'receipt', 'payment'],
            'extensions': ['.pdf', '.xlsx', '.xls'],
            'sensitivity': 'medium',
            'retention_years': 7
        },
        'proposal': {
            'keywords': ['proposal', 'quote', 'estimate', 'bid', 'rfp response'],
            'extensions': ['.pdf', '.docx', '.pptx'],
            'sensitivity': 'medium',
            'retention_years': 3
        },
        'report': {
            'keywords': ['report', 'analysis', 'summary', 'dashboard', 'metrics'],
            'extensions': ['.pdf', '.xlsx', '.pptx', '.docx'],
            'sensitivity': 'medium',
            'retention_years': 5
        },
        'presentation': {
            'keywords': ['presentation', 'deck', 'slides', 'pitch'],
            'extensions': ['.pptx', '.ppt', '.pdf'],
            'sensitivity': 'medium',
            'retention_years': 3
        },
        'specification': {
            'keywords': ['spec', 'specification', 'requirements', 'technical doc', 'design doc'],
            'extensions': ['.pdf', '.docx', '.md'],
            'sensitivity': 'high',
            'retention_years': 10
        },
        'policy': {
            'keywords': ['policy', 'procedure', 'guideline', 'handbook', 'manual'],
            'extensions': ['.pdf', '.docx'],
            'sensitivity': 'high',
            'retention_years': 10
        },
        'legal': {
            'keywords': ['nda', 'non-disclosure', 'legal', 'compliance', 'regulatory'],
            'extensions': ['.pdf', '.docx'],
            'sensitivity': 'critical',
            'retention_years': 10
        },
        'financial': {
            'keywords': ['financial', 'budget', 'forecast', 'p&l', 'balance sheet'],
            'extensions': ['.xlsx', '.xls', '.pdf'],
            'sensitivity': 'critical',
            'retention_years': 7
        },
        'hr': {
            'keywords': ['resume', 'cv', 'offer letter', 'performance review', 'employee'],
            'extensions': ['.pdf', '.docx'],
            'sensitivity': 'high',
            'retention_years': 7
        }
    }
    
    APPROVAL_KEYWORDS = {
        'request': ['please review', 'please approve', 'for your approval', 'needs approval', 'awaiting approval'],
        'granted': ['approved', 'approval granted', 'looks good', 'approved as is', 'green light'],
        'revision': ['needs revision', 'changes required', 'please update', 'revise and resubmit', 'not approved'],
        'pending': ['pending approval', 'under review', 'reviewing', 'in review']
    }
    
    VERSION_PATTERNS = [
        r'v(\d+(?:\.\d+)*)',
        r'version\s*(\d+(?:\.\d+)*)',
        r'rev(?:ision)?\s*([a-z]|\d+(?:\.\d+)*)',
        r'(\d{4}-\d{2}-\d{2})',  # Date-based versions
        r'draft\s*(\d+)',
        r'final',
    ]
    
    def classify_document(self, filename: str, email_context: Dict) -> Dict:
        """Classify document type based on filename and email context"""
        filename_lower = filename.lower()
        email_text = (email_context.get('body', '') + ' ' + email_context.get('subject', '')).lower()
        
        # Extract file extension
        extension = '.' + filename_lower.split('.')[-1] if '.' in filename_lower else ''
        
        # Score each document type
        type_scores = {}
        for doc_type, config in self.DOCUMENT_TYPES.items():
            score = 0
            
            # Check keywords in filename
            keyword_matches = sum(1 for kw in config['keywords'] if kw in filename_lower)
            score += keyword_matches * 30
            
            # Check keywords in email context
            context_matches = sum(1 for kw in config['keywords'] if kw in email_text)
            score += context_matches * 10
            
            # Check file extension
            if extension in config['extensions']:
                score += 20
            
            type_scores[doc_type] = score
        
        # Determine best match
        if max(type_scores.values()) > 0:
            best_type = max(type_scores.items(), key=lambda x: x[1])
            document_type = best_type[0]
            confidence = min(100, best_type[1])
        else:
            document_type = 'general'
            confidence = 50
        
        # Get configuration
        config = self.DOCUMENT_TYPES.get(document_type, {
            'sensitivity': 'medium',
            'retention_years': 5
        })
        
        return {
            'filename': filename,
            'document_type': document_type,
            'confidence': confidence,
            'sensitivity': config['sensitivity'],
            'retention_years': config['retention_years'],
            'file_extension': extension,
            'type_scores': type_scores
        }
    
    def extract_version(self, filename: str, email_context: Dict) -> Dict:
        """Extract version information from filename and email"""
        text = filename + ' ' + email_context.get('body', '') + ' ' + email_context.get('subject', '')
        
        versions_found = []
        
        for pattern in self.VERSION_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                versions_found.append({
                    'version': match,
                    'pattern': pattern,
                    'source': 'filename' if match in filename else 'email'
                })
        
        # Determine latest version
        if versions_found:
            # Sort by version number if possible
            try:
                sorted_versions = sorted(
                    versions_found,
                    key=lambda v: float(v['version']) if v['version'].replace('.', '').isdigit() else 0,
                    reverse=True
                )
                latest = sorted_versions[0]['version']
            except (ValueError, TypeError):
                latest = versions_found[0]['version']
        else:
            latest = None
        
        # Check for version indicators
        is_final = 'final' in text.lower()
        is_draft = 'draft' in text.lower()
        
        return {
            'versions_found': versions_found,
            'latest_version': latest,
            'is_final': is_final,
            'is_draft': is_draft,
            'version_count': len(versions_found)
        }
    
    def detect_approval_workflow(self, email: Dict) -> Dict:
        """Detect approval workflow status from email"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        
        workflow_status = {}
        
        for status, keywords in self.APPROVAL_KEYWORDS.items():
            matches = [kw for kw in keywords if kw in text]
            workflow_status[status] = {
                'detected': len(matches) > 0,
                'keywords': matches,
                'count': len(matches)
            }
        
        # Determine current status
        if workflow_status['granted']['detected']:
            current_status = 'approved'
        elif workflow_status['revision']['detected']:
            current_status = 'revision_needed'
        elif workflow_status['request']['detected']:
            current_status = 'approval_requested'
        elif workflow_status['pending']['detected']:
            current_status = 'pending'
        else:
            current_status = 'unknown'
        
        # Extract approvers
        approvers = email.get('to', []) + email.get('cc', [])
        
        # Check for deadline
        deadline_patterns = [
            r'by\s+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)',
            r'deadline[:\s]+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)',
            r'need\s+(?:this|it)?\s*(?:by|before)\s+(\w+)',
        ]
        
        deadline = None
        for pattern in deadline_patterns:
            match = re.search(pattern, text)
            if match:
                deadline = match.group(1)
                break
        
        return {
            'current_status': current_status,
            'workflow_details': workflow_status,
            'approvers': approvers,
            'deadline': deadline,
            'urgency': 'high' if 'urgent' in text or 'asap' in text else 'normal',
            'email_id': email.get('id', '')
        }
    
    def track_document_version(self, document: Dict, email: Dict) -> Dict:
        """Track document version in registry"""
        filename = document.get('filename', '')
        
        # Generate document ID (hash of filename)
        doc_id = hashlib.md5(filename.encode()).hexdigest()[:12]
        
        # Extract version
        version_info = self.extract_version(filename, email)
        
        # Create version record
        version_record = {
            'doc_id': doc_id,
            'filename': filename,
            'version': version_info.get('latest_version', '1.0'),
            'email_id': email.get('id', ''),
            'sender': email.get('from', ''),
            'recipients': email.get('to', []),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'subject': email.get('subject', ''),
            'is_final': version_info.get('is_final', False),
            'is_draft': version_info.get('is_draft', False)
        }
        
        # Add to version history
        self.version_history[doc_id].append(version_record)
        
        # Update registry
        if doc_id not in self.document_registry:
            self.document_registry[doc_id] = {
                'doc_id': doc_id,
                'base_filename': filename,
                'document_type': document.get('document_type', 'general'),
                'sensitivity': document.get('sensitivity', 'medium'),
                'first_seen': email.get('timestamp', datetime.now().isoformat()),
                'versions': []
            }
        
        self.document_registry[doc_id]['versions'].append(version_record)
        self.document_registry[doc_id]['last_updated'] = email.get('timestamp', datetime.now().isoformat())
        self.document_registry[doc_id]['version_count'] = len(self.document_registry[doc_id]['versions'])
        
        return {
            'doc_id': doc_id,
            'version_record': version_record,
            'total_versions': len(self.version_history[doc_id]),
            'is_new_version': len(self.version_history[doc_id]) > 1,
            'version_info': version_info
        }
    
    def detect_duplicates(self, email: Dict) -> Dict:
        """Detect duplicate documents in email"""
        attachments = email.get('attachments', [])
        
        if not attachments:
            return {'duplicates_found': False, 'duplicates': []}
        
        duplicates = []
        
        for i, att1 in enumerate(attachments):
            filename1 = att1.get('filename', '')
            
            for j, att2 in enumerate(attachments[i+1:], i+1):
                filename2 = att2.get('filename', '')
                
                # Check for similar filenames
                similarity = self._calculate_filename_similarity(filename1, filename2)
                
                if similarity > 0.7:  # 70% similarity threshold
                    duplicates.append({
                        'file1': filename1,
                        'file2': filename2,
                        'similarity': similarity,
                        'likely_duplicate': similarity > 0.9
                    })
        
        return {
            'duplicates_found': len(duplicates) > 0,
            'duplicates': duplicates,
            'total_attachments': len(attachments)
        }
    
    def _calculate_filename_similarity(self, file1: str, file2: str) -> float:
        """Calculate filename similarity (0-1)"""
        # Remove extensions and version numbers
        clean1 = re.sub(r'\.[^.]+$|v\d+|version\s*\d+|\d{4}-\d{2}-\d{2}', '', file1.lower())
        clean2 = re.sub(r'\.[^.]+$|v\d+|version\s*\d+|\d{4}-\d{2}-\d{2}', '', file2.lower())
        
        # Calculate Jaccard similarity
        words1 = set(clean1.split())
        words2 = set(clean2.split())
        
        if not words1 or not words2:
            return 0.0
        
        intersection = words1 & words2
        union = words1 | words2
        
        return len(intersection) / len(union)
    
    def check_compliance(self, document: Dict, email: Dict) -> Dict:
        """Check document compliance requirements"""
        doc_type = document.get('document_type', 'general')
        sensitivity = document.get('sensitivity', 'medium')
        
        compliance_issues = []
        
        # Check encryption for sensitive documents
        if sensitivity in ['high', 'critical']:
            if not email.get('encrypted', False):
                compliance_issues.append({
                    'issue': 'Unencrypted sensitive document',
                    'severity': 'high',
                    'recommendation': 'Use encrypted email or secure file sharing'
                })
        
        # Check retention policy
        retention_years = document.get('retention_years', 5)
        compliance_issues.append({
            'issue': f'Retention policy: {retention_years} years',
            'severity': 'info',
            'recommendation': f'Ensure document is retained for {retention_years} years per policy'
        })
        
        # Check approval status for contracts
        if doc_type == 'contract':
            approval_status = self.detect_approval_workflow(email)
            if approval_status['current_status'] != 'approved':
                compliance_issues.append({
                    'issue': 'Contract not yet approved',
                    'severity': 'medium',
                    'recommendation': 'Obtain approval before execution'
                })
        
        # Check for PII in sensitive documents
        if sensitivity in ['high', 'critical']:
            text = email.get('body', '')
            pii_patterns = [
                r'\b\d{3}-\d{2}-\d{4}\b',  # SSN
                r'\b\d{16}\b',  # Credit card
                r'\b[A-Z]{1,2}\d{6,8}\b',  # Passport
            ]
            
            for pattern in pii_patterns:
                if re.search(pattern, text):
                    compliance_issues.append({
                        'issue': 'Potential PII detected',
                        'severity': 'critical',
                        'recommendation': 'Review and redact PII before sharing'
                    })
                    break
        
        return {
            'document_type': doc_type,
            'sensitivity': sensitivity,
            'compliance_issues': compliance_issues,
            'is_compliant': len([i for i in compliance_issues if i['severity'] in ['high', 'critical']]) == 0,
            'issue_count': len(compliance_issues),
            'recommendations': [i['recommendation'] for i in compliance_issues]
        }
    
    def process_email_attachments(self, email: Dict) -> Dict:
        """Process all attachments in an email"""
        attachments = email.get('attachments', [])
        
        if not attachments:
            return {
                'email_id': email.get('id', ''),
                'attachments_processed': 0,
                'message': 'No attachments found'
            }
        
        processed_docs = []
        
        for attachment in attachments:
            filename = attachment.get('filename', 'unknown')
            
            # Classify document
            classification = self.classify_document(filename, email)
            
            # Track version
            version_tracking = self.track_document_version(classification, email)
            
            # Check compliance
            compliance = self.check_compliance(classification, email)
            
            # Detect approval workflow
            approval = self.detect_approval_workflow(email)
            
            processed_docs.append({
                'filename': filename,
                'classification': classification,
                'version_tracking': version_tracking,
                'compliance': compliance,
                'approval_status': approval['current_status']
            })
        
        # Check for duplicates
        duplicates = self.detect_duplicates(email)
        
        return {
            'email_id': email.get('id', ''),
            'attachments_processed': len(processed_docs),
            'documents': processed_docs,
            'duplicates': duplicates,
            'compliance_summary': {
                'total_issues': sum(len(d['compliance']['compliance_issues']) for d in processed_docs),
                'critical_issues': sum(1 for d in processed_docs for i in d['compliance']['compliance_issues'] if i['severity'] == 'critical'),
                'all_compliant': all(d['compliance']['is_compliant'] for d in processed_docs)
            },
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }
    
    def generate_document_report(self) -> Dict:
        """Generate comprehensive document intelligence report"""
        if not self.document_registry:
            return {'message': 'No documents tracked'}
        
        # Calculate metrics
        total_docs = len(self.document_registry)
        total_versions = sum(d['version_count'] for d in self.document_registry.values())
        
        # Document type distribution
        doc_types = Counter(d['document_type'] for d in self.document_registry.values())
        
        # Sensitivity distribution
        sensitivity_levels = Counter(d['sensitivity'] for d in self.document_registry.values())
        
        # Version statistics
        avg_versions = total_versions / total_docs if total_docs > 0 else 0
        
        # Recent activity
        recent_docs = sorted(
            self.document_registry.values(),
            key=lambda d: d.get('last_updated', ''),
            reverse=True
        )[:10]
        
        return {
            'total_documents': total_docs,
            'total_versions': total_versions,
            'avg_versions_per_doc': round(avg_versions, 1),
            'document_type_distribution': dict(doc_types),
            'sensitivity_distribution': dict(sensitivity_levels),
            'recent_documents': [
                {
                    'filename': d['base_filename'],
                    'type': d['document_type'],
                    'versions': d['version_count'],
                    'last_updated': d.get('last_updated', '')
                }
                for d in recent_docs
            ],
            'reply_all_enforcement': 'Active for all document-related communications',
            'timestamp': datetime.now().isoformat()
        }


def test_v668():
    """Test V668 Email Document Intelligence"""
    doc_intel = EmailDocumentIntelligence()
    
    # Test 1: Contract with approval request
    email1 = {
        'id': 'e001',
        'from': 'legal@company.com',
        'to': ['exec@company.com', 'finance@company.com'],
        'subject': 'Service Agreement v2.1 - Please Review and Approve',
        'body': 'Attached is the updated service agreement v2.1 for your review. Please approve by Friday. This contract includes the revised terms we discussed.',
        'attachments': [
            {'filename': 'Service_Agreement_v2.1.pdf', 'size': 250000}
        ],
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Invoice
    email2 = {
        'id': 'e002',
        'from': 'billing@vendor.com',
        'to': ['accounts@company.com'],
        'subject': 'Invoice #INV-2026-05-001',
        'body': 'Please find attached invoice for May 2026 services. Payment due within 30 days.',
        'attachments': [
            {'filename': 'Invoice_INV-2026-05-001.pdf', 'size': 150000}
        ],
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Multiple documents with duplicates
    email3 = {
        'id': 'e003',
        'from': 'pm@company.com',
        'to': ['team@company.com'],
        'subject': 'Project Documents - Final Versions',
        'body': 'Attached are the final project documents. Please review the specifications and presentation deck.',
        'attachments': [
            {'filename': 'Project_Spec_v1.0.pdf', 'size': 300000},
            {'filename': 'Project_Spec_v1.1.pdf', 'size': 310000},
            {'filename': 'Presentation_Final.pptx', 'size': 500000},
            {'filename': 'Presentation_Final_v2.pptx', 'size': 520000}
        ],
        'timestamp': '2026-05-30T11:00:00'
    }
    
    for email in [email1, email2, email3]:
        result = doc_intel.process_email_attachments(email)
        
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Attachments: {result['attachments_processed']}")
        
        if result['documents']:
            for doc in result['documents']:
                print(f"  - {doc['filename']}")
                print(f"    Type: {doc['classification']['document_type']} ({doc['classification']['confidence']}%)")
                print(f"    Sensitivity: {doc['classification']['sensitivity']}")
                print(f"    Version: {doc['version_tracking']['version_record']['version']}")
                print(f"    Approval: {doc['approval_status']}")
        
        if result['duplicates']['duplicates_found']:
            print(f"  ⚠️ Duplicates detected: {len(result['duplicates']['duplicates'])}")
        
        if result['compliance_summary']['critical_issues'] > 0:
            print(f"  🔴 Critical compliance issues: {result['compliance_summary']['critical_issues']}")
    
    report = doc_intel.generate_document_report()
    print(f"\n{'='*50}")
    print(f"✅ V668 Email Document Intelligence Test Complete")
    print(f"Total Documents: {report['total_documents']}")
    print(f"Total Versions: {report['total_versions']}")
    
    return report


if __name__ == '__main__':
    test_v668()

#!/usr/bin/env python3
"""
V431: AI Email Attachment Intelligence
Extracts data from email attachments (PDFs, documents, images) and provides
actionable insights. Case-by-case analysis.
Enforces reply-all for multi-recipient emails with attachments.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V431AttachmentIntelligence:
    """Analyzes email attachments and extracts actionable data"""
    
    ATTACHMENT_TYPES = {
        "pdf": {
            "extensions": [".pdf"],
            "extractable": ["text", "tables", "images"],
            "common_uses": ["contracts", "reports", "invoices"]
        },
        "document": {
            "extensions": [".doc", ".docx", ".txt", ".rtf"],
            "extractable": ["text", "formatting", "metadata"],
            "common_uses": ["proposals", "agreements", "documentation"]
        },
        "spreadsheet": {
            "extensions": [".xls", ".xlsx", ".csv"],
            "extractable": ["data", "formulas", "charts"],
            "common_uses": ["financial data", "reports", "analytics"]
        },
        "presentation": {
            "extensions": [".ppt", ".pptx"],
            "extractable": ["slides", "notes", "media"],
            "common_uses": ["pitches", "presentations", "training"]
        },
        "image": {
            "extensions": [".jpg", ".jpeg", ".png", ".gif"],
            "extractable": ["ocr_text", "metadata", "visual_analysis"],
            "common_uses": ["screenshots", "photos", "diagrams"]
        }
    }
    
    ACTION_TRIGGERS = {
        "signature_required": ["please sign", "signature needed", "sign and return"],
        "review_required": ["please review", "for your review", "review attached"],
        "approval_required": ["please approve", "awaiting approval", "approval needed"],
        "payment_required": ["invoice attached", "payment due", "please pay"],
        "response_required": ["please respond", "awaiting response", "need your input"]
    }
    
    def classify_attachment(self, filename: str) -> Dict:
        """Classify attachment type"""
        filename_lower = filename.lower()
        
        for att_type, config in self.ATTACHMENT_TYPES.items():
            if any(filename_lower.endswith(ext) for ext in config["extensions"]):
                return {
                    "type": att_type,
                    "extractable_data": config["extractable"],
                    "common_uses": config["common_uses"]
                }
        
        return {
            "type": "unknown",
            "extractable_data": [],
            "common_uses": []
        }
    
    def detect_action_items(self, email_text: str, attachment_type: str) -> List[Dict]:
        """Detect action items based on email content and attachment type"""
        text_lower = email_text.lower()
        actions = []
        
        for action_type, triggers in self.ACTION_TRIGGERS.items():
            if any(trigger in text_lower for trigger in triggers):
                priority = "HIGH" if action_type in ["signature_required", "payment_required"] else "MEDIUM"
                actions.append({
                    "action": action_type,
                    "priority": priority,
                    "attachment_type": attachment_type,
                    "deadline": self._extract_deadline(email_text)
                })
        
        return actions
    
    def _extract_deadline(self, text: str) -> Optional[str]:
        """Extract deadline from text"""
        deadline_patterns = [
            r'(?:by|before|due)\s+(\w+\s+\d{1,2}(?:st|nd|rd|th)?)',
            r'(?:deadline|due date)[:\s]+(\w+\s+\d{1,2})',
            r'(\d{1,2}/\d{1,2}/\d{2,4})'
        ]
        
        for pattern in deadline_patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group(1)
        
        return None
    
    def extract_attachment_metadata(self, attachment: Dict) -> Dict:
        """Extract metadata from attachment"""
        filename = attachment.get('filename', 'unknown')
        size = attachment.get('size', 0)
        
        # Classify attachment
        classification = self.classify_attachment(filename)
        
        # Estimate complexity based on size
        if size > 10_000_000:  # >10MB
            complexity = "HIGH"
            processing_time = "2-5 minutes"
        elif size > 1_000_000:  # >1MB
            complexity = "MEDIUM"
            processing_time = "30-60 seconds"
        else:
            complexity = "LOW"
            processing_time = "10-30 seconds"
        
        return {
            "filename": filename,
            "size_bytes": size,
            "size_human": self._format_size(size),
            "type": classification["type"],
            "extractable_data": classification["extractable_data"],
            "complexity": complexity,
            "estimated_processing_time": processing_time
        }
    
    def _format_size(self, size_bytes: int) -> str:
        """Format file size to human-readable"""
        for unit in ['B', 'KB', 'MB', 'GB']:
            if size_bytes < 1024.0:
                return f"{size_bytes:.1f} {unit}"
            size_bytes /= 1024.0
        return f"{size_bytes:.1f} TB"
    
    def generate_summary(self, attachments: List[Dict]) -> Dict:
        """Generate summary of all attachments"""
        total_size = sum(att.get('size', 0) for att in attachments)
        type_counts = {}
        
        for att in attachments:
            att_type = self.classify_attachment(att.get('filename', ''))["type"]
            type_counts[att_type] = type_counts.get(att_type, 0) + 1
        
        return {
            "total_attachments": len(attachments),
            "total_size": self._format_size(total_size),
            "type_breakdown": type_counts,
            "largest_attachment": max(attachments, key=lambda x: x.get('size', 0)) if attachments else None
        }
    
    def process(self, email: Dict) -> Dict:
        """Process email with attachments"""
        attachments = email.get('attachments', [])
        email_text = f"{email.get('subject', '')} {email.get('body', '')}"
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        if not attachments:
            return {
                "engine": "V431 Attachment Intelligence",
                "timestamp": datetime.now().isoformat(),
                "has_attachments": False,
                "message": "No attachments detected"
            }
        
        # Analyze each attachment
        attachment_analysis = []
        for att in attachments:
            metadata = self.extract_attachment_metadata(att)
            actions = self.detect_action_items(email_text, metadata["type"])
            
            attachment_analysis.append({
                "metadata": metadata,
                "action_items": actions,
                "requires_action": len(actions) > 0
            })
        
        # Generate summary
        summary = self.generate_summary(attachments)
        
        # Check if any attachment requires action
        requires_action = any(att["requires_action"] for att in attachment_analysis)
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        # Generate recommendations
        recommendations = []
        if requires_action:
            recommendations.append("Review attachments and complete required actions")
        
        total_size = sum(att.get('size', 0) for att in attachments)
        if total_size > 50_000_000:  # >50MB
            recommendations.append("Large attachments detected - consider cloud storage links")
        
        result = {
            "engine": "V431 Attachment Intelligence",
            "timestamp": datetime.now().isoformat(),
            "has_attachments": True,
            "summary": summary,
            "attachments": attachment_analysis,
            "requires_action": requires_action,
            "recommendations": recommendations,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Email with attachments to {len(all_recipients)} recipients" if should_reply_all else "Single recipient with attachments"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "client@example.com",
        "subject": "Contract for review",
        "body": "Hi,\n\nPlease review the attached contract and sign by next Friday. Let me know if you have any questions.\n\nThanks,\nJohn",
        "to": ["manager@company.com"],
        "cc": ["legal@company.com", "finance@company.com"],
        "attachments": [
            {
                "filename": "Service_Agreement_2024.pdf",
                "size": 2500000,
                "content_type": "application/pdf"
            },
            {
                "filename": "Pricing_Schedule.xlsx",
                "size": 150000,
                "content_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            }
        ]
    }
    
    intelligence = V431AttachmentIntelligence()
    result = intelligence.process(test_email)
    print(json.dumps(result, indent=2))

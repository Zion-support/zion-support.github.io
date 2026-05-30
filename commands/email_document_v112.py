#!/usr/bin/env python3
"""
V112: AI Email Document Intelligence
Advanced processing of email attachments: PDF text extraction, image OCR,
spreadsheet analysis, document summarization, and risk detection.
"""

import json
from typing import Dict, List
from dataclasses import dataclass, field
from enum import Enum


class DocumentType(Enum):
    PDF = "pdf"
    IMAGE = "image"
    SPREADSHEET = "spreadsheet"
    WORD = "word"
    OTHER = "other"


class RiskLevel(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


@dataclass
class DocumentAnalysis:
    filename: str
    doc_type: DocumentType
    extracted_text: str = ""
    summary: str = ""
    key_data: Dict = field(default_factory=dict)
    risk_level: RiskLevel = RiskLevel.LOW
    risk_factors: List[str] = field(default_factory=list)
    action_items: List[str] = field(default_factory=list)


class V112DocumentIntelligence:
    """
    V112: AI Email Document Intelligence
    
    Features:
    1. PDF text extraction and analysis
    2. Image OCR and text recognition
    3. Spreadsheet data extraction
    4. Document summarization
    5. Risk indicator detection
    6. Action item extraction
    """
    
    def __init__(self):
        self.analyses: Dict[str, DocumentAnalysis] = {}
        
        # Risk keywords
        self.risk_keywords = {
            'legal': ['liability', 'indemnification', 'termination', 'breach', 'lawsuit'],
            'financial': ['penalty', 'fine', 'overdue', 'default', 'bankruptcy'],
            'compliance': ['violation', 'non-compliance', 'audit', 'regulatory'],
            'security': ['confidential', 'restricted', 'sensitive', 'classified']
        }
    
    def analyze_attachment(self, attachment_data: Dict) -> Dict:
        """Analyze email attachment."""
        filename = attachment_data.get('filename', 'unknown')
        content = attachment_data.get('content', '')
        file_type = self._detect_file_type(filename)
        
        # Extract text based on file type
        if file_type == DocumentType.PDF:
            extracted_text = self._extract_pdf_text(content)
        elif file_type == DocumentType.IMAGE:
            extracted_text = self._perform_ocr(content)
        elif file_type == DocumentType.SPREADSHEET:
            extracted_text = self._extract_spreadsheet_data(content)
        else:
            extracted_text = content
        
        # Generate summary
        summary = self._summarize_document(extracted_text)
        
        # Extract key data
        key_data = self._extract_key_data(extracted_text)
        
        # Detect risks
        risk_level, risk_factors = self._detect_risks(extracted_text)
        
        # Extract action items
        action_items = self._extract_action_items(extracted_text)
        
        analysis = DocumentAnalysis(
            filename=filename,
            doc_type=file_type,
            extracted_text=extracted_text,
            summary=summary,
            key_data=key_data,
            risk_level=risk_level,
            risk_factors=risk_factors,
            action_items=action_items
        )
        
        self.analyses[filename] = analysis
        
        return {
            'filename': filename,
            'document_type': file_type.value,
            'summary': summary,
            'key_data': key_data,
            'risk_level': risk_level.value,
            'risk_factors': risk_factors,
            'action_items': action_items,
            'reply_all': True
        }
    
    def _detect_file_type(self, filename: str) -> DocumentType:
        """Detect document type from filename."""
        filename_lower = filename.lower()
        
        if filename_lower.endswith('.pdf'):
            return DocumentType.PDF
        elif any(filename_lower.endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.gif']):
            return DocumentType.IMAGE
        elif any(filename_lower.endswith(ext) for ext in ['.xlsx', '.xls', '.csv']):
            return DocumentType.SPREADSHEET
        elif any(filename_lower.endswith(ext) for ext in ['.doc', '.docx']):
            return DocumentType.WORD
        else:
            return DocumentType.OTHER
    
    def _extract_pdf_text(self, content: str) -> str:
        """Extract text from PDF (simulated)."""
        # In production, use PyPDF2 or pdfplumber
        return f"[PDF Content: {content[:500]}...]"
    
    def _perform_ocr(self, content: str) -> str:
        """Perform OCR on image (simulated)."""
        # In production, use pytesseract or similar
        return f"[OCR Result: {content[:500]}...]"
    
    def _extract_spreadsheet_data(self, content: str) -> str:
        """Extract data from spreadsheet (simulated)."""
        # In production, use openpyxl or pandas
        return f"[Spreadsheet Data: {content[:500]}...]"
    
    def _summarize_document(self, text: str) -> str:
        """Generate document summary."""
        if not text:
            return "Empty document"
        
        # Simple extractive summarization
        sentences = text.split('.')
        if len(sentences) <= 3:
            return text
        
        # Return first 3 sentences as summary
        summary = '. '.join(sentences[:3]) + '.'
        return summary
    
    def _extract_key_data(self, text: str) -> Dict:
        """Extract key data points from document."""
        import re
        
        key_data = {}
        
        # Extract dates
        dates = re.findall(r'\d{1,2}/\d{1,2}/\d{2,4}', text)
        if dates:
            key_data['dates'] = dates[:5]
        
        # Extract dollar amounts
        amounts = re.findall(r'\$[\d,]+\.?\d*', text)
        if amounts:
            key_data['amounts'] = amounts[:5]
        
        # Extract email addresses
        emails = re.findall(r'[\w\.-]+@[\w\.-]+\.\w+', text)
        if emails:
            key_data['emails'] = list(set(emails))[:5]
        
        # Extract phone numbers
        phones = re.findall(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', text)
        if phones:
            key_data['phones'] = phones[:5]
        
        return key_data
    
    def _detect_risks(self, text: str) -> tuple:
        """Detect risk indicators in document."""
        text_lower = text.lower()
        risk_factors = []
        
        for category, keywords in self.risk_keywords.items():
            for keyword in keywords:
                if keyword in text_lower:
                    risk_factors.append(f"{category}: {keyword}")
        
        # Determine risk level
        if len(risk_factors) >= 5:
            risk_level = RiskLevel.CRITICAL
        elif len(risk_factors) >= 3:
            risk_level = RiskLevel.HIGH
        elif len(risk_factors) >= 1:
            risk_level = RiskLevel.MEDIUM
        else:
            risk_level = RiskLevel.LOW
        
        return risk_level, risk_factors
    
    def _extract_action_items(self, text: str) -> List[str]:
        """Extract action items from document."""
        action_items = []
        text_lower = text.lower()
        
        # Look for action indicators
        action_indicators = ['must', 'required', 'deadline', 'due', 'complete', 'submit']
        
        sentences = text.split('.')
        for sentence in sentences:
            sentence_lower = sentence.lower()
            if any(indicator in sentence_lower for indicator in action_indicators):
                action_items.append(sentence.strip())
        
        return action_items[:5]


if __name__ == "__main__":
    # Test the engine
    engine = V112DocumentIntelligence()
    
    test_attachment = {
        'filename': 'contract.pdf',
        'content': '''SERVICE AGREEMENT

This agreement is entered into on 01/15/2024.

The client must submit payment of $50,000 by 02/15/2024.

Failure to comply may result in termination and liability for breach of contract.

Contact: legal@company.com or (555) 123-4567'''
    }
    
    result = engine.analyze_attachment(test_attachment)
    print(json.dumps(result, indent=2))

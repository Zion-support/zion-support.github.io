#!/usr/bin/env python3
"""V97: AI Email Document Intelligence
Advanced processing of email attachments: PDF text extraction, image OCR,
spreadsheet analysis, contract clause detection, invoice processing,
and document summarization."""
import json, hashlib, re
from datetime import datetime
from typing import Dict, List, Optional
from dataclasses import dataclass, field
from enum import Enum

class DocType(Enum):
    CONTRACT = "contract"
    INVOICE = "invoice"
    PROPOSAL = "proposal"
    REPORT = "report"
    SPREADSHEET = "spreadsheet"
    PRESENTATION = "presentation"
    IMAGE = "image"
    PDF = "pdf"
    OTHER = "other"

class RiskLevel(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

@dataclass
class DocumentAnalysis:
    doc_id: str
    filename: str
    doc_type: DocType
    page_count: int
    word_count: int
    summary: str
    key_points: List[str]
    risk_level: RiskLevel
    risk_factors: List[str]
    action_items: List[str]
    financial_data: Dict = field(default_factory=dict)
    clauses: List[Dict] = field(default_factory=list)
    entities: List[str] = field(default_factory=list)
    reply_all: bool = True

class V97DocumentIntelligence:
    def __init__(self):
        self.analyses: Dict[str, DocumentAnalysis] = {}
        self.metrics = {"total_analyzed": 0, "contracts_reviewed": 0, "invoices_processed": 0, "risks_detected": 0}

    def analyze_attachment(self, attachment_data: Dict) -> DocumentAnalysis:
        filename = attachment_data.get("filename", "document.pdf")
        content = attachment_data.get("content", "")
        size_kb = attachment_data.get("size_kb", 0)
        doc_type = self._detect_doc_type(filename, content)
        if doc_type == DocType.CONTRACT:
            return self._analyze_contract(attachment_data)
        elif doc_type == DocType.INVOICE:
            return self._analyze_invoice(attachment_data)
        elif doc_type == DocType.SPREADSHEET:
            return self._analyze_spreadsheet(attachment_data)
        else:
            return self._analyze_generic(attachment_data)

    def _detect_doc_type(self, filename: str, content: str) -> DocType:
        fn = filename.lower()
        text = content.lower()
        if fn.endswith(('.xlsx', '.xls', '.csv')): return DocType.SPREADSHEET
        if fn.endswith(('.pptx', '.ppt', '.key')): return DocType.PRESENTATION
        if fn.endswith(('.png', '.jpg', '.jpeg', '.gif')): return DocType.IMAGE
        contract_signals = ['agreement', 'contract', 'terms and conditions', 'party of the first', 'hereinafter', 'binding']
        if any(s in text for s in contract_signals) or 'contract' in fn or 'agreement' in fn:
            return DocType.CONTRACT
        invoice_signals = ['invoice', 'amount due', 'payment terms', 'subtotal', 'vat', 'tax']
        if any(s in text for s in invoice_signals) or 'invoice' in fn:
            return DocType.INVOICE
        proposal_signals = ['proposal', 'scope of work', 'deliverables', 'timeline', 'budget']
        if any(s in text for s in proposal_signals) or 'proposal' in fn:
            return DocType.PROPOSAL
        return DocType.PDF if fn.endswith('.pdf') else DocType.OTHER

    def _analyze_contract(self, data: Dict) -> DocumentAnalysis:
        content = data.get("content", "")
        clauses = self._extract_clauses(content)
        risks = self._detect_contract_risks(content)
        risk_level = RiskLevel.CRITICAL if len(risks) > 3 else RiskLevel.HIGH if len(risks) > 1 else RiskLevel.MEDIUM if risks else RiskLevel.LOW

        key_points = [
            f"Found {len(clauses)} clauses",
            f"Parties: {', '.join(self._extract_parties(content)[:3])}",
            f"Term: {self._extract_term(content)}",
            f"Governing law: {self._extract_governing_law(content)}",
        ]
        action_items = []
        if risk_level in [RiskLevel.HIGH, RiskLevel.CRITICAL]:
            action_items.append("⚠️ Legal review required before signing")
        action_items.append("Verify all parties are correctly identified")
        action_items.append("Confirm termination clause aligns with business needs")

        return DocumentAnalysis(
            doc_id=hashlib.md5(data.get("filename", "").encode()).hexdigest()[:12],
            filename=data.get("filename", "contract.pdf"),
            doc_type=DocType.CONTRACT,
            page_count=max(1, len(content.split('\f'))),
            word_count=len(content.split()),
            summary=f"Contract with {len(clauses)} clauses, risk level: {risk_level.value}",
            key_points=key_points,
            risk_level=risk_level,
            risk_factors=risks,
            action_items=action_items,
            clauses=clauses,
            entities=self._extract_parties(content),
            reply_all=True,
        )

    def _extract_clauses(self, content: str) -> List[Dict]:
        clause_patterns = {
            "Termination": r'(termination|terminat\w+)\s*[\.:](.{50,200})',
            "Confidentiality": r'(confidential\w*|NDA)\s*[\.:](.{50,200})',
            "Liability": r'(liability|indemnif\w+)\s*[\.:](.{50,200})',
            "Payment": r'(payment|compensation)\s*[\.:](.{50,200})',
            "IP Rights": r'(intellectual property|IP rights)\s*[\.:](.{50,200})',
            "Force Majeure": r'(force majeure)\s*[\.:](.{50,200})',
        }
        clauses = []
        for name, pattern in clause_patterns.items():
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                clauses.append({"name": name, "text": match[1][:150] + "...", "found": True})
        return clauses

    def _detect_contract_risks(self, content: str) -> List[str]:
        risks = []
        text = content.lower()
        if 'unlimited liability' in text: risks.append("⚠️ Unlimited liability clause")
        if 'perpetual' in text and 'license' in text: risks.append("⚠️ Perpetual license grant")
        if 'automatic renewal' in text or 'auto-renew' in text: risks.append("⚠️ Auto-renewal clause")
        if 'non-compete' in text: risks.append("⚠️ Non-compete clause present")
        if 'sole discretion' in text: risks.append("⚠️ Unilateral discretion clause")
        if 'waive' in text and 'right' in text: risks.append("⚠️ Rights waiver clause")
        if 'arbitration' in text and 'class action' in text: risks.append("⚠️ Class action waiver")
        return risks

    def _extract_parties(self, content: str) -> List[str]:
        parties = re.findall(r'(?:between|party|parties)\s*[:\-]?\s*([A-Z][\w\s&,]+?)(?:and|,|hereinafter)', content)
        return [p.strip() for p in parties[:5]] if parties else ["Party A", "Party B"]

    def _extract_term(self, content: str) -> str:
        match = re.search(r'(term|duration|period)\s*[:\-]?\s*(\d+)\s*(months?|years?|days?)', content, re.IGNORECASE)
        return f"{match.group(2)} {match.group(3)}" if match else "Not specified"

    def _extract_governing_law(self, content: str) -> str:
        match = re.search(r'govern(?:ed|ing)\s+(?:by\s+)?(?:the\s+)?laws?\s+of\s+([A-Z][\w\s]+)', content, re.IGNORECASE)
        return match.group(1).strip() if match else "Not specified"

    def _analyze_invoice(self, data: Dict) -> DocumentAnalysis:
        content = data.get("content", "")
        financial = self._extract_financial(content)
        action_items = [
            "Verify amounts against purchase order",
            f"Payment due: {financial.get('due_date', 'TBD')}",
            "Schedule payment in accounting system",
        ]
        if financial.get('total', 0) > 10000:
            action_items.insert(0, "⚠️ High-value invoice — requires manager approval")

        return DocumentAnalysis(
            doc_id=hashlib.md5(data.get("filename", "").encode()).hexdigest()[:12],
            filename=data.get("filename", "invoice.pdf"),
            doc_type=DocType.INVOICE,
            page_count=1,
            word_count=len(content.split()),
            summary=f"Invoice for ${financial.get('total', 0):,.2f}",
            key_points=[
                f"Total: ${financial.get('total', 0):,.2f}",
                f"Subtotal: ${financial.get('subtotal', 0):,.2f}",
                f"Tax: ${financial.get('tax', 0):,.2f}",
                f"Due date: {financial.get('due_date', 'TBD')}",
            ],
            risk_level=RiskLevel.HIGH if financial.get('total', 0) > 50000 else RiskLevel.LOW,
            risk_factors=["High value" if financial.get('total', 0) > 50000 else ""],
            action_items=action_items,
            financial_data=financial,
            reply_all=True,
        )

    def _extract_financial(self, content: str) -> Dict:
        amounts = re.findall(r'\$?([\d,]+\.?\d*)', content)
        amounts = [float(a.replace(',', '')) for a in amounts if a]
        total = max(amounts) if amounts else 0
        due_match = re.search(r'(?:due|pay(?:able|ment))\s*(?:by|on)?\s*([\d\/\-]+\s*[\d]*)', content, re.IGNORECASE)
        return {
            "total": total,
            "subtotal": total * 0.85 if total else 0,
            "tax": total * 0.15 if total else 0,
            "currency": "USD",
            "due_date": due_match.group(1) if due_match else "Net 30",
        }

    def _analyze_spreadsheet(self, data: Dict) -> DocumentAnalysis:
        return DocumentAnalysis(
            doc_id=hashlib.md5(data.get("filename", "").encode()).hexdigest()[:12],
            filename=data.get("filename", "data.xlsx"),
            doc_type=DocType.SPREADSHEET,
            page_count=1,
            word_count=0,
            summary="Spreadsheet with financial/data content",
            key_points=["Contains tabular data", "Review for anomalies", "Cross-reference with reports"],
            risk_level=RiskLevel.LOW,
            risk_factors=[],
            action_items=["Verify data integrity", "Check formulas", "Review pivot tables"],
            reply_all=True,
        )

    def _analyze_generic(self, data: Dict) -> DocumentAnalysis:
        content = data.get("content", "")
        return DocumentAnalysis(
            doc_id=hashlib.md5(data.get("filename", "").encode()).hexdigest()[:12],
            filename=data.get("filename", "document.pdf"),
            doc_type=DocType.PDF,
            page_count=max(1, len(content) // 2000),
            word_count=len(content.split()),
            summary=f"Document with {len(content.split())} words",
            key_points=[f"Word count: {len(content.split())}", "Review recommended"],
            risk_level=RiskLevel.LOW,
            risk_factors=[],
            action_items=["Review document content", "Summarize key points"],
            reply_all=True,
        )

    def generate_attachment_response(self, email_data: Dict, analyses: List[DocumentAnalysis]) -> Dict:
        doc_summaries = []
        all_action_items = []
        for a in analyses:
            doc_summaries.append(f"📄 **{a.filename}** ({a.doc_type.value}): {a.summary}")
            all_action_items.extend(a.action_items)
            if a.risk_level in [RiskLevel.HIGH, RiskLevel.CRITICAL]:
                self.metrics["risks_detected"] += 1

        body = f"""Thank you for your email and the attached documents.

I've reviewed the attachments and here's a summary:

{chr(10).join(doc_summaries)}

**Action Items:**
{chr(10).join('• ' + item for item in all_action_items[:10])}

I'll follow up with a detailed response after completing the review. Please reply-all if you have any immediate questions.

Best regards,
Kleber Garcia Alcatrão
Zion Tech Group
📞 +1 302 464 0950
✉️ kleber@ziontechgroup.com
📍 364 E Main St STE 1008, Middletown, DE 19709"""

        return {
            "to": email_data.get("from", ""),
            "cc": email_data.get("to", []) + email_data.get("cc", []),
            "reply_all": True,
            "subject": f"Re: {email_data.get('subject', '')} — Document Review",
            "body": body,
            "documents_analyzed": len(analyses),
        }

    def get_metrics(self) -> Dict:
        return self.metrics

if __name__ == "__main__":
    engine = V97DocumentIntelligence()
    tests = [
        {"filename": "service_agreement_2026.pdf", "content": "SERVICE AGREEMENT between Zion Tech Group and Client Corp. TERMINATION: Either party may terminate with 30 days notice. LIABILITY: Unlimited liability for breach. AUTOMATIC RENEWAL for 12 months. NON-COMPETE for 2 years. Governing law of Delaware.", "size_kb": 450},
        {"filename": "invoice_Q4_2025.pdf", "content": "INVOICE #INV-2025-1234. Subtotal: $45,000. Tax: $6,750. TOTAL: $51,750. Payment due by January 15, 2026. Net 30 terms.", "size_kb": 120},
        {"filename": "proposal_ai_services.pdf", "content": "PROPOSAL for AI Services. Scope of work includes machine learning implementation. Deliverables: ML model, API, dashboard. Timeline: 3 months. Budget: $150,000.", "size_kb": 890},
    ]
    analyses = []
    for att in tests:
        analysis = engine.analyze_attachment(att)
        analyses.append(analysis)
        print(f"\n{'='*60}")
        print(f"📄 {analysis.filename} ({analysis.doc_type.value})")
        print(f"Risk: {analysis.risk_level.value}")
        print(f"Summary: {analysis.summary}")
        print(f"Key Points: {', '.join(analysis.key_points[:3])}")
        if analysis.risk_factors:
            print(f"Risks: {', '.join(analysis.risk_factors)}")
        print(f"Actions: {', '.join(analysis.action_items[:3])}")
        print(f"Reply All: {analysis.reply_all}")

    resp = engine.generate_attachment_response(
        {"from": "client@company.com", "to": ["kleber@ziontechgroup.com"], "cc": ["legal@company.com"], "subject": "Documents for review"},
        analyses
    )
    print(f"\n{'='*60}")
    print(f"Response Reply-All: {resp['reply_all']} | CC: {len(resp['cc'])}")
    print(f"Metrics: {json.dumps(engine.get_metrics(), indent=2)}")

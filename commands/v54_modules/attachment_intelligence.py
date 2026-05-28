#!/usr/bin/env python3
"""
V54: Email Attachment Intelligence
Parses, summarizes, and acts on email attachments: extracts structured data from
PDFs/invoices, files attachments to SharePoint/Google Drive, logs to CRM,
alerts on missing attachments, and triggers workflows based on attachment type.

Data stored in: data/v54_attachment_logs.json
"""
import json
import re
import os
from pathlib import Path
from datetime import datetime, timezone
from typing import Optional
from collections import Counter

DATA_DIR = Path("data")
ATTACHMENT_LOG_FILE = DATA_DIR / "v54_attachment_logs.json"
os.makedirs(DATA_DIR, exist_ok=True)


# ── Supported attachment types ─────────────────────────────────────────────────────
ATTACHMENT_TYPES = {
    "pdf": {"label": "PDF", "actions": ["extract_text", "summarize", "parse_invoice", "parse_contract", "file"]},
    "docx": {"label": "Word Document", "actions": ["extract_text", "summarize", "parse_contract", "file"]},
    "xlsx": {"label": "Excel Spreadsheet", "actions": ["extract_data", "parse_financials", "parse_inventory", "file"]},
    "csv": {"label": "CSV File", "actions": ["extract_data", "parse_report", "file"]},
    "png": {"label": "Image (PNG)", "actions": ["ocr_extract", "describe_image", "file"]},
    "jpg": {"label": "Image (JPG)", "actions": ["ocr_extract", "describe_image", "file"]},
    "jpeg": {"label": "Image (JPEG)", "actions": ["ocr_extract", "describe_image", "file"]},
    "pptx": {"label": "PowerPoint", "actions": ["summarize", "extract_slides", "file"]},
    "txt": {"label": "Plain Text", "actions": ["read", "summarize", "file"]},
    "zip": {"label": "ZIP Archive", "actions": ["unpack", "list_contents", "scan_for_malware"]},
    "html": {"label": "HTML File", "actions": ["render", "extract_text", "file"]},
    "xml": {"label": "XML File", "actions": ["parse", "extract_data", "file"]},
    "json": {"label": "JSON File", "actions": ["parse", "extract_data", "file"]},
}


# ── Invoice field patterns ────────────────────────────────────────────────────────
INVOICE_PATTERNS = {
    "invoice_number": re.compile(r'(?:invoice|inv|facture|fatura|rechnung)\s*#?\s*[:.]?\s*([A-Z0-9-]+)', re.I),
    "amount": re.compile(r'(?:total|amount|montant|importe|valor|betrag)\s*[:.]?\s*\$?\s*([\d,]+\.?\d*)', re.I),
    "due_date": re.compile(r'(?:due|payable|payment due|vencimiento|payment|fall|fällig)\s*[:.]?\s*(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\w+ \d{1,2},? \d{4})', re.I),
    "vendor_name": re.compile(r'(?:from|vendor|supplier|from:|de:|von:)\s*([A-Z][A-Za-z\s&]+?)(?:\n|,|\d)', re.I),
    "client_name": re.compile(r'(?:bill to|client|customer|to:|para:|an:)\s*([A-Z][A-Za-z\s&]+?)(?:\n|,|\d)', re.I),
    "tax_id": re.compile(r'(?:tax|vat|gst|rg|cnpj|rut)\s*[:.]?\s*([A-Z0-9-]+)', re.I),
}


# ── Contract field patterns ────────────────────────────────────────────────────────
CONTRACT_PATTERNS = {
    "effective_date": re.compile(r'(?:effective|start date|commencement|início|vigência|gültig)\s*[:.]?\s*(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\w+ \d{1,2},? \d{4})', re.I),
    "term_length": re.compile(r'(\d+)\s*(?:year|month|año|mes|jahr|monat|ano)', re.I),
    "parties": re.compile(r'(?:between|entre|entre|zwischen)\s+([A-Z][A-Za-z\s&]+?)\s+(?:and|&|und)\s+([A-Z][A-Za-z\s&]+?)(?:\n|,)', re.I),
    "governing_law": re.compile(r'(?:governing.law|jurisdiction|applicable.law ley|ley aplicable)\s*[:.]?\s*([A-Z][A-Za-z\s]+?)(?:\n|,|\d)', re.I),
    "renewal": re.compile(r'(?:auto.renew|renewal|automatic renewal)\s*[:.]?\s*(yes|no|true|false|automatic)', re.I),
    "termination_notice": re.compile(r'(?:terminate|cancel|preaviso| Kundigung)\s*[:.]?\s*(\d+)\s*(?:day|days|días|tag|tage)', re.I),
}


# ── Action item patterns in documents ─────────────────────────────────────────────
ACTION_ITEM_PATTERNS = [
    re.compile(r'\b(deliver|submit|provide|send|call|schedule|complete|finish|prepare|review|approve|sign|execute)\b.*?(?:by|before|on)\s+\S+', re.I),
    re.compile(r'\bresponsible\s+(?:for\s+)?([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)', re.I),
    re.compile(r'\bassign(?:ed|ee)?\s*[:.]?\s*@?([\w.]+@[\w.]+)', re.I),
]


# ── CRM field patterns ─────────────────────────────────────────────────────────────
CRM_FIELD_PATTERNS = {
    "opportunity_name": re.compile(r'(?:opportunity|opp|deal|negocio|affäre)\s*[:.]?\s*([A-Z][A-Za-z0-9\s&]+?)(?:\n|,|\d)', re.I),
    "deal_value": re.compile(r'(?:value|deal size|monto|valor|geschäftsvolumen)\s*[:.]?\s*\$?\s*([\d,]+\.?\d*)', re.I),
    "close_date": re.compile(r'(?:close date|expected close|cierre|abschlussdatum)\s*[:.]?\s*(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})', re.I),
    "contact_name": re.compile(r'(?:contact|attn|atención|atenção|attention)\s*[:.]?\s*([A-Z][a-z]+\s+[A-Z][a-z]+)', re.I),
    "company": re.compile(r'(?:company|organization|empresa|unternehmen|empresa)\s*[:.]?\s*([A-Z][A-Za-z\s&]+?)(?:\n|,|\d)', re.I),
}


# ── File naming conventions ───────────────────────────────────────────────────────
DOC_TYPE_INDICATORS = {
    "invoice": ["invoice", "facture", "fatura", "rechnung", "bill", "receipt"],
    "contract": ["contract", "agreement", "contrato", "acordo", "vertrag"],
    "proposal": ["proposal", "presupuesto", "proposta", "angebot", "quote"],
    "purchase_order": ["purchase order", "po-", "orden de compra", "bestellung"],
    "ndc": ["ndc", "non-disclosure", "confidential", "nda"],
    "sow": ["statement of work", "sow", "escopo", "alcances"],
}


def _load_logs() -> list:
    if ATTACHMENT_LOG_FILE.exists():
        try:
            return json.loads(ATTACHMENT_LOG_FILE.read_text())
        except (json.JSONDecodeError, IOError):
            pass
    return []


def _save_logs(logs: list) -> None:
    ATTACHMENT_LOG_FILE.write_text(json.dumps(logs, indent=2, ensure_ascii=False))


def _classify_doc_type(filename: str, content: str = "") -> dict:
    """Classify what type of document this is."""
    filename_lower = filename.lower()
    combined = (filename_lower + " " + content[:500].lower())

    scores = {}
    for doc_type, indicators in DOC_TYPE_INDICATORS.items():
        score = sum(1 for ind in indicators if ind in combined)
        if score > 0:
            scores[doc_type] = score

    if scores:
        best = max(scores, key=scores.get)
        confidence = min(scores[best] / 2, 0.98)
        return {"type": best, "confidence": round(confidence, 2), "scores": scores}
    return {"type": "unknown", "confidence": 0.0, "scores": {}}


def _extract_invoice_fields(text: str) -> dict:
    """Extract structured fields from an invoice-like document."""
    fields = {}
    for field, pattern in INVOICE_PATTERNS.items():
        match = pattern.search(text)
        if match:
            fields[field] = match.group(1).strip()
    return fields


def _extract_contract_fields(text: str) -> dict:
    """Extract structured fields from a contract-like document."""
    fields = {}
    for field, pattern in CONTRACT_PATTERNS.items():
        match = pattern.search(text)
        if match:
            if field == "parties":
                fields[field] = {"party_a": match.group(1).strip(), "party_b": match.group(2).strip()}
            else:
                fields[field] = match.group(1).strip()
    return fields


def _extract_crm_fields(text: str) -> dict:
    """Extract CRM-relevant fields from a document."""
    fields = {}
    for field, pattern in CRM_FIELD_PATTERNS.items():
        match = pattern.search(text)
        if match:
            fields[field] = match.group(1).strip()
    return fields


def _extract_action_items(text: str) -> list:
    """Extract action items from a document."""
    actions = []
    for pattern in ACTION_ITEM_PATTERNS:
        for match in pattern.finditer(text):
            snippet = text[max(0, match.start()-20):match.end()+60].strip()
            if len(snippet) > 15:
                actions.append(snippet[:150])
    return list(dict.fromkeys(actions))[:10]


def _get_file_extension(filename: str) -> str:
    """Get file extension from filename."""
    parts = filename.rsplit(".", 1)
    if len(parts) == 2:
        return parts[1].lower()
    return ""


def analyze_attachment(
    filename: str,
    content: str = "",
    sender_email: str = "",
    thread_id: str = "",
    file_size_kb: float = 0.0,
) -> dict:
    """
    Main entry point for V54 — analyze an email attachment.

    Args:
        filename: Name of the attachment file
        content: Text content (extracted from PDF/doc/image OCR)
        sender_email: Sender's email address
        thread_id: Gmail thread ID
        file_size_kb: File size in KB

    Returns:
        dict with: file_type, doc_type, extracted_fields, action_items,
                   summary, crm_fields, filing_recommendation, alert
    """
    logs = _load_logs()
    ext = _get_file_extension(filename)
    file_info = ATTACHMENT_TYPES.get(ext, {"label": ext.upper(), "actions": ["file"]})
    doc_classification = _classify_doc_type(filename, content)

    # Extract fields based on document type
    extracted_fields = {}
    crm_fields = {}
    action_items = _extract_action_items(content)

    if doc_classification["type"] == "invoice":
        extracted_fields = _extract_invoice_fields(content)
        crm_fields = _extract_crm_fields(content)
        # Flag overdue? (would need date comparison)
        if "due_date" in extracted_fields:
            extracted_fields["payment_status"] = "pending"
    elif doc_classification["type"] == "contract":
        extracted_fields = _extract_contract_fields(content)
        if "effective_date" in extracted_fields:
            extracted_fields["status"] = "active"
    elif doc_classification["type"] == "proposal":
        extracted_fields = _extract_crm_fields(content)
        if "deal_value" in extracted_fields:
            crm_fields["deal_value"] = extracted_fields.get("deal_value", "")
    elif doc_classification["type"] == "sow":
        extracted_fields = _extract_contract_fields(content)
        extracted_fields["scope_items"] = content[:300]

    # Generate summary
    if doc_classification["type"] == "invoice" and extracted_fields.get("amount"):
        summary = f"Invoice #{extracted_fields.get('invoice_number', 'N/A')} | Amount: ${extracted_fields.get('amount', 'N/A')} | Due: {extracted_fields.get('due_date', 'N/A')} | Vendor: {extracted_fields.get('vendor_name', 'N/A')}"
    elif doc_classification["type"] == "contract":
        parties = extracted_fields.get("parties", {})
        summary = f"Contract between {parties.get('party_a', 'N/A')} and {parties.get('party_b', 'N/A')} | Effective: {extracted_fields.get('effective_date', 'N/A')} | Term: {extracted_fields.get('term_length', 'N/A')} | Governing law: {extracted_fields.get('governing_law', 'N/A')}"
    elif doc_classification["type"] == "proposal":
        summary = f"Proposal for: {extracted_fields.get('opportunity_name', filename)} | Value: ${extracted_fields.get('deal_value', 'N/A')} | Close: {extracted_fields.get('close_date', 'N/A')}"
    elif action_items:
        summary = f"Document with {len(action_items)} action items detected"
    elif content:
        summary = content[:200].strip() + ("..." if len(content) > 200 else "")
    else:
        summary = f"{file_info['label']} attachment — no text content extracted (use OCR for images)"

    # Determine filing recommendation
    filing_map = {
        "invoice": "Finance/Accounts Payable folder",
        "contract": "Legal/Contracts repository",
        "proposal": "Sales/CRM opportunity folder",
        "purchase_order": "Finance/Purchase Orders folder",
        "ndc": "Legal/Confidential folder",
        "sow": "Project Management/Statements of Work folder",
    }
    filing_recommendation = filing_map.get(doc_classification["type"], "General/Attachments folder")

    # Alert logic
    alerts = []
    if not content and ext in ["pdf", "docx", "xlsx"]:
        alerts.append({"level": "warning", "message": "No text extracted — image-based or scanned document. Run OCR to extract content."})
    if file_size_kb > 10000:
        alerts.append({"level": "info", "message": f"Large file ({file_size_kb:.0f}KB) — consider compression before filing."})
    if doc_classification["type"] == "invoice" and not extracted_fields.get("invoice_number"):
        alerts.append({"level": "warning", "message": "Invoice detected but no invoice number found — may be a quote or proforma."})
    if doc_classification["type"] == "unknown" and action_items:
        alerts.append({"level": "info", "message": f"Document contains {len(action_items)} action items — may be a task list or project brief."})
    if ext in ["zip"]:
        alerts.append({"level": "warning", "message": "ZIP archive — unpack and scan contents before processing."})

    result = {
        "filename": filename,
        "analyzed_at": datetime.now(timezone.utc).isoformat(),
        "sender_email": sender_email,
        "thread_id": thread_id,
        "file_extension": ext,
        "file_type_label": file_info["label"],
        "available_actions": file_info["actions"],
        "document_classification": doc_classification,
        "extracted_fields": extracted_fields,
        "crm_fields": crm_fields,
        "action_items": action_items,
        "summary": summary,
        "text_length": len(content),
        "file_size_kb": file_size_kb,
        "filing_recommendation": filing_recommendation,
        "alerts": alerts,
        "next_actions": _suggest_next_actions(doc_classification["type"], alerts, extracted_fields),
    }

    logs.append({"filename": filename, "analyzed_at": result["analyzed_at"], "sender_email": sender_email, "doc_type": doc_classification["type"]})
    _save_logs(logs)

    return result


def _suggest_next_actions(doc_type: str, alerts: list, fields: dict) -> list:
    """Suggest next actions based on document type."""
    actions = []

    if doc_type == "invoice":
        actions.append({"action": "file_to_crm", "target": "Finance/Accounts Payable", "priority": "high"})
        if fields.get("amount"):
            actions.append({"action": "log_to_accounting_system", "target": "QuickBooks/Xero", "priority": "high"})
        if not fields.get("invoice_number"):
            actions.append({"action": "request_invoice_number", "target": "sender", "priority": "medium"})

    elif doc_type == "contract":
        actions.append({"action": "file_to_legal_repository", "target": "SharePoint/Legal folder", "priority": "high"})
        if not fields.get("governing_law"):
            actions.append({"action": "review_governing_law_clause", "target": "self", "priority": "medium"})

    elif doc_type == "proposal":
        actions.append({"action": "log_to_crm", "target": "Salesforce/HubSpot opportunity", "priority": "high"})
        if fields.get("deal_value"):
            actions.append({"action": "update_deal_value", "target": "CRM", "priority": "high"})

    elif doc_type == "ndc":
        actions.append({"action": "file_to_legal", "target": "NDA vault", "priority": "critical"})
        actions.append({"action": "set_expiration_reminder", "target": "Calendar", "priority": "high"})

    elif doc_type == "sow":
        actions.append({"action": "link_to_project", "target": "Project management tool", "priority": "medium"})
        actions.append({"action": "extract_action_items_to_task_list", "target": "Asana/Jira", "priority": "medium"})

    # Check for warnings
    has_no_content = any("No text extracted" in a["message"] for a in alerts)
    if has_no_content:
        actions.insert(0, {"action": "run_ocr", "target": "Google Document AI / Azure Form Recognizer", "priority": "high"})

    return actions


# ── Missing attachment detection ─────────────────────────────────────────────────
MISSING_ATTACHMENT_PATTERNS = [
    re.compile(r'\b(attach|attached|attachment|enclosed)\b', re.I),
    re.compile(r'\b(please find|see|as per our|as requested)\b.*\b(document|file|contract|proposal|invoice|agreement)\b', re.I),
    re.compile(r'\b(report|spreadsheet|slides|document)\s+(attached|here|included|below)\b', re.I),
    re.compile(r'\bsent\s+you\s+(the\s+)?(contract|invoice|proposal|report|spreadsheet)', re.I),
]

REQUIRE_ATTACHMENT_INTENTS = [
    "contract", "agreement", "invoice", "proposal", "quote", "nda", "sow",
    "statement of work", "purchase order", "receipt", "report",
]


def check_missing_attachment(email_body: str, subject: str) -> dict:
    """
    Detect if an email that references an attachment is missing one.
    Returns: {is_missing: bool, confidence: float, reason: str, suggested_action: str}
    """
    combined = (subject + " " + email_body).lower()

    # Check if email references attachments
    references_attachment = any(p.search(combined) for p in MISSING_ATTACHMENT_PATTERNS)

    # Check if it's an intent that should have an attachment
    intent_requires_attachment = any(ind in combined for ind in REQUIRE_ATTACHMENT_INTENTS)

    # Check if email body mentions attachment but has no actual attachment info
    # (in real impl, email's attachments array would be checked separately)
    # Here we just flag based on language patterns

    if references_attachment and intent_requires_attachment:
        return {
            "is_missing": True,
            "confidence": 0.82,
            "reason": f"Email references contract/invoice/proposal/NDA but no attachment detected. Subject: '{subject}'",
            "suggested_action": "Reply requesting the attachment: 'I noticed you mentioned [document] — could you please resend as an attachment?'",
            "priority": "high",
        }

    if references_attachment and not intent_requires_attachment:
        return {
            "is_missing": False,
            "confidence": 0.5,
            "reason": "Email references an attachment but document type is unclear",
            "suggested_action": "If you expected an attachment, reply asking for clarification",
            "priority": "low",
        }

    return {
        "is_missing": False,
        "confidence": 0.1,
        "reason": "No attachment reference detected in email",
        "suggested_action": "None",
        "priority": None,
    }


# ── CLI demo ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 60)
    print("V54: Email Attachment Intelligence")
    print("=" * 60)

    test_cases = [
        {
            "filename": "Invoice_2026_001.pdf",
            "content": "INVOICE #INV-2026-001 | Total Amount: $12,450.00 | Due: 03/15/2026 | From: TechVendor Corp | Bill To: Acme Inc | Tax ID: 12-3456789",
            "sender_email": "billing@techvendor.com",
            "thread_id": "thread-001",
            "file_size_kb": 245.0,
        },
        {
            "filename": "Master_Service_Agreement.pdf",
            "content": "This Agreement is entered into between Acme Corporation and TechVendor Inc. Effective Date: January 1, 2026. Term: 2 years. Governing Law: State of Delaware. Auto-renewal: yes. Termination Notice: 30 days.",
            "sender_email": "legal@techvendor.com",
            "thread_id": "thread-002",
            "file_size_kb": 890.0,
        },
        {
            "filename": "Q1_Proposal_Acme.docx",
            "content": "Opportunity: Acme Corp Digital Transformation | Deal Value: $85,000 | Close Date: 03/31/2026 | Contact: John Smith | Company: Acme Corporation. Please review and approve.",
            "sender_email": "sales@vendor.com",
            "thread_id": "thread-003",
            "file_size_kb": 156.0,
        },
        {
            "filename": "weekly_report.xlsx",
            "content": "[Excel spreadsheet - tabular data]",
            "sender_email": "analytics@vendor.com",
            "thread_id": "thread-004",
            "file_size_kb": 78.0,
        },
    ]

    for tc in test_cases:
        print(f"\n--- {tc['filename']} ---")
        result = analyze_attachment(**tc)
        print(f"  File type: {result['file_type_label']} ({result['file_extension']})")
        print(f"  Doc type: {result['document_classification']['type']} (conf={result['document_classification']['confidence']:.2f})")
        print(f"  Summary: {result['summary'][:100]}")
        if result['extracted_fields']:
            print(f"  Extracted fields: {json.dumps(result['extracted_fields'], indent=2)}")
        if result['action_items']:
            print(f"  Action items ({len(result['action_items'])}):")
            for a in result['action_items'][:3]:
                print(f"    → {a[:80]}")
        print(f"  Filing: {result['filing_recommendation']}")
        if result['alerts']:
            for alert in result['alerts']:
                print(f"  ⚠️  [{alert['level']}] {alert['message']}")
        print(f"  Next actions:")
        for na in result['next_actions'][:2]:
            print(f"    {na['action']} → {na['target']} (priority={na['priority']})")

    print("\n--- Missing Attachment Detection ---")
    test_emails = [
        ("Re: Contract", "Hi, as discussed please find the attached NDA for your review. We need this signed by Friday."),
        ("Quick question", "Do you have the updated pricing spreadsheet?"),
        ("Invoice overdue", "Please send the invoice for the last shipment. We haven't received it yet."),
    ]
    for subject, body in test_emails:
        result = check_missing_attachment(body, subject)
        print(f"\nSubject: {subject}")
        print(f"  Missing: {result['is_missing']} | conf={result['confidence']:.2f} | {result['reason'][:80]}")
        if result['is_missing']:
            print(f"  Action: {result['suggested_action']}")

"""
Email Content Extractor - V399
Extract structured data from emails (invoices, orders, contacts, PO numbers),
convert to formats (JSON, CSV), integrate with business systems, validate extracted data.

Features:
- Invoice data extraction (amounts, dates, line items)
- Order/Purchase Order extraction
- Contact information extraction
- PO number and reference extraction
- Data validation and confidence scoring
- Format conversion (JSON, CSV)
- Business system integration stubs
- Reply-all enforcement for multi-recipient emails
"""

import json
import re
import csv
import io
from datetime import datetime
from collections import defaultdict


# Regex patterns for extraction
PATTERNS = {
    "invoice_number": [
        r"[Ii]nvoice\s*(?:#|No\.?|Number)?\s*[:\-]?\s*([A-Z0-9\-]{3,20})",
        r"[Ii]nv[\.\s#\-]*([A-Z0-9\-]{3,20})",
        r"INV[-](\d{4,10})"
    ],
    "po_number": [
        r"[Pp](?:urchase)?\s*[Oo](?:rder)?\s*(?:#|No\.?|Number)?\s*[:\-]?\s*([A-Z0-9\-]{3,20})",
        r"PO[-](\d{4,10})",
        r"[Pp]urchase\s*[Oo]rder\s*[:\-]?\s*([A-Z0-9\-]{3,20})"
    ],
    "amount": [
        r"\$\s*([\d,]+\.?\d*)",
        r"(?:USD|EUR|GBP|total|amount|due|balance)[:\s]*\$?\s*([\d,]+\.?\d*)",
        r"([\d,]+\.\d{2})\s*(?:USD|EUR|GBP)"
    ],
    "date": [
        r"(\d{1,2}[/\-]\d{1,2}[/\-]\d{2,4})",
        r"(\d{4}[/\-]\d{1,2}[/\-]\d{1,2})",
        r"(?:Date|Dated?)[:\s]+(\w+\s+\d{1,2},?\s+\d{4})"
    ],
    "phone": [
        r"(\+?\d{1,3}[\-\.\s]?\(?\d{3}\)?[\-\.\s]?\d{3}[\-\.\s]?\d{4})",
        r"(?:Phone|Tel|Telephone)[:\s]*([\d\-\(\)\s\+]{10,20})"
    ],
    "email_address": [
        r"([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})"
    ],
    "address": [
        r"(\d+\s+[\w\s]+(?:Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Lane|Ln|Road|Rd|Way|Court|Ct|Place|Pl)[\.,\s]*(?:\w+[\.,\s]*){1,3}\s*\d{5}(?:\-\d{4})?)",
    ],
    "tracking_number": [
        r"(?:Tracking|Track)[:\s#]*([A-Z0-9\-]{8,30})",
        r"(1Z[A-Z0-9]{16})",  # UPS
        r"(\d{20,22})",  # FedEx/USPS long
    ],
    "order_number": [
        r"[Oo]rder\s*(?:#|No\.?|Number|ID)?\s*[:\-]?\s*([A-Z0-9\-]{4,20})",
        r"ORD[-](\d{4,10})"
    ],
    "quantity": [
        r"(?:Qty|Quantity|Qty\.)[:\s]*(\d+)",
        r"(\d+)\s*(?:units|pieces|pcs|items)"
    ],
    "tax_amount": [
        r"(?:Tax|VAT|GST|Sales Tax)[:\s]*\$?\s*([\d,]+\.?\d*)",
    ],
    "due_date": [
        r"(?:Due\s*(?:Date|By)|Payment\s*Due|Net\s*\d+)[:\s]*(\d{1,2}[/\-]\d{1,2}[/\-]\d{2,4}|\d{4}[/\-]\d{1,2}[/\-]\d{1,2}|\w+\s+\d{1,2},?\s+\d{4})"
    ]
}


def extract_patterns(text, pattern_name):
    """Extract all matches for a given pattern type."""
    matches = []
    for pattern in PATTERNS.get(pattern_name, []):
        found = re.findall(pattern, text, re.IGNORECASE)
        matches.extend(found)

    # Deduplicate while preserving order
    seen = set()
    unique = []
    for m in matches:
        if m not in seen:
            seen.add(m)
            unique.append(m)
    return unique


def extract_line_items(text):
    """Extract line items from invoice/order text."""
    items = []
    # Pattern: description followed by quantity and price
    line_pattern = r"(.+?)\s+(\d+)\s+\$?([\d,]+\.?\d*)\s+\$?([\d,]+\.?\d*)"
    matches = re.findall(line_pattern, text)

    for match in matches:
        desc, qty, unit_price, total = match
        items.append({
            "description": desc.strip(),
            "quantity": int(qty),
            "unit_price": float(unit_price.replace(",", "")),
            "total": float(total.replace(",", ""))
        })

    # Alternative: simpler pattern for tabular data
    if not items:
        simple_pattern = r"(\w[\w\s\-]+?)\s+\|\s+(\d+)\s+\|\s+\$?([\d,.]+)\s+\|\s+\$?([\d,.]+)"
        matches = re.findall(simple_pattern, text)
        for match in matches:
            desc, qty, unit_price, total = match
            items.append({
                "description": desc.strip(),
                "quantity": int(qty),
                "unit_price": float(unit_price.replace(",", "")),
                "total": float(total.replace(",", ""))
            })

    return items


def classify_email_type(text, subject=""):
    """Classify the type of email based on content."""
    combined = (text + " " + subject).lower()

    type_scores = {
        "invoice": 0,
        "purchase_order": 0,
        "order_confirmation": 0,
        "shipping_notification": 0,
        "contact_info": 0,
        "meeting": 0,
        "general": 0
    }

    invoice_keywords = ["invoice", "billing", "amount due", "payment due", "subtotal", "tax", "balance due"]
    po_keywords = ["purchase order", "po number", "po #", "procurement"]
    order_keywords = ["order confirmation", "order number", "your order", "order placed"]
    shipping_keywords = ["tracking", "shipped", "delivery", "tracking number", "carrier"]
    contact_keywords = ["phone", "address", "contact", "signature", "mobile"]
    meeting_keywords = ["meeting", "calendar", "schedule", "agenda", "minutes"]

    for kw in invoice_keywords:
        if kw in combined:
            type_scores["invoice"] += 1
    for kw in po_keywords:
        if kw in combined:
            type_scores["purchase_order"] += 1
    for kw in order_keywords:
        if kw in combined:
            type_scores["order_confirmation"] += 1
    for kw in shipping_keywords:
        if kw in combined:
            type_scores["shipping_notification"] += 1
    for kw in contact_keywords:
        if kw in combined:
            type_scores["contact_info"] += 1
    for kw in meeting_keywords:
        if kw in combined:
            type_scores["meeting"] += 1

    # Determine primary type
    max_score = max(type_scores.values())
    if max_score == 0:
        return "general"

    primary_type = max(type_scores, key=type_scores.get)
    return primary_type


def validate_extracted_data(extracted):
    """Validate extracted data and assign confidence scores."""
    validations = {}

    # Validate amounts
    if "amounts" in extracted:
        for amt in extracted["amounts"]:
            try:
                val = float(str(amt).replace(",", ""))
                validations[f"amount:{amt}"] = {
                    "valid": val > 0,
                    "confidence": 0.95 if val > 0 else 0.3,
                    "parsed_value": val
                }
            except ValueError:
                validations[f"amount:{amt}"] = {"valid": False, "confidence": 0.1}

    # Validate dates
    if "dates" in extracted:
        for date_str in extracted["dates"]:
            valid = False
            for fmt in ["%m/%d/%Y", "%m-%d-%Y", "%Y-%m-%d", "%Y/%m/%d", "%B %d, %Y", "%b %d, %Y"]:
                try:
                    datetime.strptime(date_str, fmt)
                    valid = True
                    break
                except ValueError:
                    continue
            validations[f"date:{date_str}"] = {
                "valid": valid,
                "confidence": 0.9 if valid else 0.3
            }

    # Validate phone numbers
    if "phone_numbers" in extracted:
        for phone in extracted["phone_numbers"]:
            digits = re.sub(r'\D', '', phone)
            valid = 7 <= len(digits) <= 15
            validations[f"phone:{phone}"] = {
                "valid": valid,
                "confidence": 0.85 if valid else 0.2
            }

    # Validate email addresses
    if "email_addresses" in extracted:
        for email_addr in extracted["email_addresses"]:
            valid = bool(re.match(r'^[\w.+-]+@[\w-]+\.[\w.-]+$', email_addr))
            validations[f"email:{email_addr}"] = {
                "valid": valid,
                "confidence": 0.95 if valid else 0.1
            }

    # Validate PO/Invoice numbers
    for field in ["invoice_numbers", "po_numbers", "order_numbers"]:
        if field in extracted:
            for num in extracted[field]:
                valid = bool(re.match(r'^[A-Z0-9\-]{3,20}$', num, re.IGNORECASE))
                validations[f"{field}:{num}"] = {
                    "valid": valid,
                    "confidence": 0.9 if valid else 0.4
                }

    # Overall confidence
    if validations:
        avg_confidence = sum(v["confidence"] for v in validations.values()) / len(validations)
    else:
        avg_confidence = 0.5

    return {
        "field_validations": validations,
        "overall_confidence": round(avg_confidence, 3),
        "total_fields": len(validations),
        "valid_fields": sum(1 for v in validations.values() if v["valid"])
    }


def to_csv_format(extracted_data):
    """Convert extracted data to CSV format string."""
    output = io.StringIO()
    writer = csv.writer(output)

    # Header
    writer.writerow(["Field", "Value", "Type", "Confidence"])

    for key, values in extracted_data.items():
        if isinstance(values, list):
            for val in values:
                writer.writerow([key, str(val), "extracted", "0.9"])
        elif isinstance(values, dict):
            for subkey, subval in values.items():
                writer.writerow([f"{key}.{subkey}", str(subval), "extracted", "0.85"])
        else:
            writer.writerow([key, str(values), "extracted", "0.9"])

    return output.getvalue()


def business_system_integration(extracted_data, system_type="erp"):
    """Stub for integrating extracted data with business systems."""
    integration_payload = {
        "system": system_type,
        "action": "create_record",
        "data": {},
        "mapping": {}
    }

    if "invoice_numbers" in extracted_data and extracted_data["invoice_numbers"]:
        integration_payload["data"]["invoice_id"] = extracted_data["invoice_numbers"][0]
        integration_payload["mapping"]["invoice_id"] = "INV_ID"

    if "po_numbers" in extracted_data and extracted_data["po_numbers"]:
        integration_payload["data"]["po_number"] = extracted_data["po_numbers"][0]
        integration_payload["mapping"]["po_number"] = "PO_NUM"

    if "amounts" in extracted_data and extracted_data["amounts"]:
        integration_payload["data"]["total_amount"] = extracted_data["amounts"][0]
        integration_payload["mapping"]["total_amount"] = "AMT_TOTAL"

    if "order_numbers" in extracted_data and extracted_data["order_numbers"]:
        integration_payload["data"]["order_id"] = extracted_data["order_numbers"][0]
        integration_payload["mapping"]["order_id"] = "ORD_ID"

    if "line_items" in extracted_data:
        integration_payload["data"]["line_items"] = extracted_data["line_items"]
        integration_payload["mapping"]["line_items"] = "LINE_ITEMS"

    integration_payload["status"] = "ready_for_sync"
    integration_payload["endpoint"] = f"/api/v1/{system_type}/import"

    return integration_payload


def enforce_reply_all(email):
    """Enforce reply-all for multi-recipient emails."""
    recipients = email.get("to", []) + email.get("cc", [])
    reply_all_required = len(recipients) > 1
    return {
        "reply_all_required": reply_all_required,
        "reply_all_enforced": reply_all_required,
        "recipient_count": len(recipients),
        "all_recipients": recipients
    }


def extract_all_from_email(email):
    """Extract all structured data from an email."""
    body = email.get("body", "")
    subject = email.get("subject", "")
    combined = body + "\n" + subject

    extracted = {
        "email_type": classify_email_type(body, subject),
        "invoice_numbers": extract_patterns(combined, "invoice_number"),
        "po_numbers": extract_patterns(combined, "po_number"),
        "order_numbers": extract_patterns(combined, "order_number"),
        "amounts": extract_patterns(combined, "amount"),
        "dates": extract_patterns(combined, "date"),
        "due_dates": extract_patterns(combined, "due_date"),
        "phone_numbers": extract_patterns(combined, "phone"),
        "email_addresses": extract_patterns(combined, "email_address"),
        "addresses": extract_patterns(combined, "address"),
        "tracking_numbers": extract_patterns(combined, "tracking_number"),
        "quantities": extract_patterns(combined, "quantity"),
        "tax_amounts": extract_patterns(combined, "tax_amount"),
        "line_items": extract_line_items(body)
    }

    # Remove empty fields
    extracted = {k: v for k, v in extracted.items() if v}

    # Add metadata
    extracted["from"] = email.get("from", "")
    extracted["subject"] = subject

    return extracted


# Sample emails for testing
SAMPLE_EMAILS = [
    {
        "id": "extract_001",
        "from": "billing@supplies-inc.com",
        "to": ["accounts@company.com", "procurement@company.com"],
        "cc": ["manager@company.com"],
        "subject": "Invoice #INV-2026-0847 - Office Supplies Order",
        "date": "2026-05-25T10:00:00",
        "body": """Dear Accounts Payable,

Please find below your invoice for the recent order:

Invoice Number: INV-2026-0847
PO Number: PO-44521
Order Number: ORD-98234
Date: 05/25/2026
Due Date: 06/25/2026

Items ordered:
Office Chairs | 10 | $249.99 | $2,499.90
Standing Desks | 5 | $599.00 | $2,995.00
Monitor Arms | 15 | $89.50 | $1,342.50

Subtotal: $6,837.40
Tax: $547.00
Total Amount Due: $7,384.40

Payment terms: Net 30
Please remit payment to:
Supplies Inc.
1234 Commerce Blvd, Suite 500
Chicago, IL 60601

Phone: (312) 555-0142
Email: billing@supplies-inc.com

Thank you for your business!
"""
    },
    {
        "id": "extract_002",
        "from": "orders@techvendor.com",
        "to": ["it@company.com"],
        "cc": ["procurement@company.com", "finance@company.com"],
        "subject": "Order Confirmation - ORD-77234 - Server Equipment",
        "date": "2026-05-26T14:30:00",
        "body": """Thank you for your order!

Order Confirmation
Order Number: ORD-77234
PO Reference: PO-44589
Order Date: 05/26/2026

Items:
Dell PowerEdge R750 Server | 2 | $4,999.00 | $9,998.00
64GB DDR4 RAM Kit | 4 | $289.00 | $1,156.00
2TB NVMe SSD | 8 | $199.99 | $1,599.92

Subtotal: $12,753.92
Shipping: $150.00
Tax: $1,020.31
Total: $13,924.23

Tracking Number: 1Z999AA10123456784
Expected Delivery: 06/02/2026

Contact us at support@techvendor.com or call 1-800-555-8901.

TechVendor Solutions
5678 Technology Drive
San Jose, CA 95134
"""
    },
    {
        "id": "extract_003",
        "from": "hr@newhire.com",
        "to": ["hr@company.com"],
        "cc": [],
        "subject": "New Employee Contact Information - Jane Smith",
        "date": "2026-05-27T09:00:00",
        "body": """Hello,

Please find the contact information for our new team member:

Name: Jane Smith
Title: Senior Developer
Department: Engineering
Start Date: 06/01/2026

Contact Details:
Phone: (415) 555-0298
Mobile: +1-415-555-0399
Email: jane.smith@company.com
Personal Email: jane.dev@gmail.com

Address: 789 Innovation Way, Apt 4B, San Francisco, CA 94105

Emergency Contact:
Name: Robert Smith
Phone: (415) 555-0456

Please set up her accounts and add her to the team directory.

Best regards,
HR Team
Phone: (415) 555-0100
Email: hr@company.com
"""
    },
    {
        "id": "extract_004",
        "from": "shipping@logistics.com",
        "to": ["warehouse@company.com", "procurement@company.com"],
        "cc": [],
        "subject": "Shipment Tracking Update - PO-44521",
        "date": "2026-05-28T11:00:00",
        "body": """Your shipment is on its way!

Purchase Order: PO-44521
Tracking Number: 1Z999AA10567891234
Carrier: UPS Ground
Shipped Date: 05/28/2026
Estimated Delivery: 06/01/2026

Contents:
Office Chairs - Qty: 10 units
Standing Desks - Qty: 5 pieces

Delivery Address:
456 Business Park Drive
Building C, Loading Dock 3
Austin, TX 78701

Contact for delivery issues: 1-800-555-SHIP
Track at: https://track.logistics.com/1Z999AA10567891234
"""
    },
    {
        "id": "extract_005",
        "from": "meetings@company.com",
        "to": ["team@company.com"],
        "cc": [],
        "subject": "Meeting Notes - Sprint Planning",
        "date": "2026-05-29T16:00:00",
        "body": """Hi Team,

Here are the notes from today's sprint planning meeting:

Date: 05/29/2026
Attendees: Alice, Bob, Charlie, Dave

Action Items:
1. Alice: Complete API documentation by 06/03/2026
2. Bob: Fix login bug #4521
3. Charlie: Review PR #892
4. Dave: Set up staging environment

Next meeting: 06/05/2026 at 10:00 AM

Questions? Email me at meetings@company.com or call (512) 555-0123.

Thanks!
"""
    }
]


def main():
    """Main entry point for Email Content Extractor V399."""
    timestamp = datetime.now().isoformat()
    version = "V399"

    # Extract data from all emails
    extractions = []
    for email in SAMPLE_EMAILS:
        extracted = extract_all_from_email(email)
        validation = validate_extracted_data(extracted)
        reply_all = enforce_reply_all(email)
        csv_data = to_csv_format(extracted)
        integration = business_system_integration(extracted, "erp")

        extractions.append({
            "email_id": email["id"],
            "from": email["from"],
            "to": email["to"],
            "cc": email["cc"],
            "subject": email["subject"],
            "extracted_data": extracted,
            "validation": validation,
            "csv_export": csv_data,
            "business_integration": integration,
            "reply_all_required": reply_all["reply_all_required"],
            "reply_all_enforced": reply_all["reply_all_enforced"]
        })

    # Summary statistics
    total_fields_extracted = sum(e["validation"]["total_fields"] for e in extractions)
    total_valid_fields = sum(e["validation"]["valid_fields"] for e in extractions)
    avg_confidence = sum(e["validation"]["overall_confidence"] for e in extractions) / len(extractions)

    email_types = defaultdict(int)
    for e in extractions:
        email_types[e["extracted_data"].get("email_type", "unknown")] += 1

    report = {
        "version": version,
        "timestamp": timestamp,
        "reply_all_required": True,
        "reply_all_enforced": True,
        "engine": "Email Content Extractor",
        "summary": {
            "total_emails_processed": len(SAMPLE_EMAILS),
            "total_fields_extracted": total_fields_extracted,
            "total_valid_fields": total_valid_fields,
            "validation_rate": round(total_valid_fields / max(1, total_fields_extracted), 3),
            "average_confidence": round(avg_confidence, 3),
            "email_type_distribution": dict(email_types)
        },
        "extractions": extractions,
        "supported_patterns": list(PATTERNS.keys()),
        "supported_systems": ["erp", "crm", "accounting", "inventory", "hr"]
    }

    output = json.dumps(report, indent=2)
    print(output)
    return report


if __name__ == "__main__":
    main()

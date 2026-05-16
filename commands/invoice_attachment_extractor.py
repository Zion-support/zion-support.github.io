#!/usr/bin/env python3
"""
Invoice Attachment Extractor - Zion

Extracts invoice/receipt data from email attachments.
Automates bookkeeping entry creation.

Usage:
  python3 invoice_attachment_extractor.py --execute --limit 20
"""

import sys, json, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

INVOICE_KEYWORDS = ['invoice', 'receipt', 'payment', 'bill', 'amount due', 'total:']
AMOUNT_PATTERN = r'\$?([0-9,]+\.?[0-9]*)'

def extract_invoice_data(snippet: str, subject: str) -> dict:
    """Extract invoice data from email content"""
    text = f"{subject} {snippet}".lower()
    
    result = {'has_invoice': False, 'amount': None, 'type': None}
    
    # Check for invoice keywords
    if any(kw in text for kw in INVOICE_KEYWORDS):
        result['has_invoice'] = True
        result['type'] = 'invoice' if 'invoice' in text else 'receipt'
    
    # Extract amount if present
    amounts = re.findall(AMOUNT_PATTERN, text)
    if amounts:
        result['amount'] = amounts[-1]  # Usually last amount is total
    
    return result

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("🧾 Invoice Attachment Extractor")
    
    msgs = gmail_search('label:inbox is:unread has:attachment', limit=limit * 2)
    label_id = gmail_get_or_create_label_id('Invoice-Processed')
    
    invoices = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        data = extract_invoice_data(snippet, subject)
        
        if data['has_invoice']:
            invoices.append({
                'subject': subject[:40],
                'sender': sender[:30],
                'amount': data['amount'],
                'type': data['type']
            })
            
            print(f"   💰 {data['type'].title()}: {subject[:30]} - ${data['amount'] or 'N/A'}")
            
            if not dry_run:
                label_ids = msg.get('labelIds', [])
                if label_id not in label_ids:
                    gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
    
    # Save extracted data
    inv_file = WORKSPACE / 'zion.app' / 'data' / 'extracted_invoices.json'
    inv_file.parent.mkdir(parents=True, exist_ok=True)
    
    if inv_file.exists():
        existing = json.loads(inv_file.read_text())
        invoices = existing + invoices
    
    inv_file.write_text(json.dumps(invoices[-100:], indent=2))
    
    print(f"✅ Extracted {len(invoices)} invoice/receipt items")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
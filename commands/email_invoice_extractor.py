#!/usr/bin/env python3
"""
Email Invoice Extractor - Zion

Extracts invoice data from emails.
Creates structured invoice records automatically.

Usage:
  python3 email_invoice_extractor.py --execute --limit 25
"""

import sys, json
import re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INVOICE_KEYWORDS = ['invoice', 'inv-', 'factura', 'fatura']

def cmd_run(dry_run: bool, limit: int = 25):
    print("🧾 Invoice Extractor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    invoices = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in INVOICE_KEYWORDS):
            # Extract invoice number
            inv_match = re.search(r'(?:inv(?:oice)?[-#\s]*)([a-z0-9-]+)', text, re.IGNORECASE)
            inv_num = inv_match.group(1) if inv_match else 'unknown'
            
            # Extract amount
            amt_match = re.search(r'\$(\d+\.?\d*)', snippet)
            amount = amt_match.group(1) if amt_match else '0'
            
            invoices.append({
                'invoice_number': inv_num[:20],
                'amount': amount,
                'subject': subject[:30]
            })
    
    print(f"Extracted {len(invoices)} invoices")
    
    for i in invoices[:5]:
        print(f"  inv:{i['invoice_number'][:15]} - ${i['amount']}")
    
    # Save invoices
    inv_file = WORKSPACE / 'zion.app' / 'data' / 'invoices.json'
    inv_file.parent.mkdir(parents=True, exist_ok=True)
    inv_file.write_text(json.dumps(invoices, indent=2))
    
    print(f"\n✅ Saved invoice extraction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
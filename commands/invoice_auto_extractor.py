#!/usr/bin/env python3
"""
Invoice Auto-Extractor - Zion

Extracts invoice data from email attachments and bodies.
Creates structured data for accounting systems.

Usage:
  python3 invoice_auto_extractor.py --execute --limit 20
"""

import sys, json, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INVOICE_PATTERNS = [
    r'invoice\s*#?\s*:?\s*(\w+[\d-]+)',
    r'invoice\s*number\s*:?\s*(\w+[\d-]+)',
    r'inv\s*#?\s*:?\s*(\w+[\d-]+)',
    r'\$\s*([\d,]+\.?\d*)',
    r'total\s*:?\s*\$?([\d,]+\.?\d*)',
    r'amount\s*due\s*:?\s*\$?([\d,]+\.?\d*)',
]

def extract_invoice_data(text: str) -> dict:
    """Extract invoice information from text."""
    data = {'invoice_numbers': [], 'amounts': [], 'dates': []}
    
    # Find invoice numbers
    for pattern in INVOICE_PATTERNS[:3]:
        matches = re.findall(pattern, text, re.IGNORECASE)
        data['invoice_numbers'].extend(matches)
    
    # Find amounts
    amount_matches = re.findall(r'\$([\d,]+\.?\d*)', text)
    for amt in amount_matches:
        data['amounts'].append(float(amt.replace(',', '')))
    
    # Find dates
    date_matches = re.findall(r'(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})', text)
    data['dates'].extend(date_matches)
    
    return data

def cmd_run(dry_run: bool, limit: int = 20):
    print("🧾 Invoice Auto-Extractor")
    
    msgs = gmail_search('subject:invoice OR subject:inv is:unread', limit=limit * 2)
    
    extracted = 0
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        data = extract_invoice_data(f"{subject} {snippet}")
        
        if data['invoice_numbers'] or data['amounts']:
            extracted += 1
            print(f"  {subject[:35]}")
            if data['invoice_numbers']:
                print(f"    Invoice #: {data['invoice_numbers'][0]}")
            if data['amounts']:
                print(f"    Amount: ${data['amounts'][0]:,.2f}")
    
    print(f"\n✅ Extracted data from {extracted} invoices")
    
    # Save to structured format
    invoice_file = WORKSPACE / 'zion.app' / 'data' / 'invoices.json'
    invoice_file.parent.mkdir(parents=True, exist_ok=True)

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
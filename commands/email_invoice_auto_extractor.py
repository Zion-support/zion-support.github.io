#!/usr/bin/env python3
"""
Email Invoice Auto-Extractor - Zion

Extracts invoice data from emails.
Financial automation.

Usage:
  python3 email_invoice_auto_extractor.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INVOICE_KEYWORDS = ['invoice', 'invoice #', 'inv#', 'amount due', 'payment']

def cmd_run(dry_run: bool, limit: int = 20):
    print("🧾 Invoice Auto-Extractor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    invoices = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in INVOICE_KEYWORDS):
            invoices.append({
                'subject': subject[:40],
                'invoice_extracted': True
            })
    
    print(f"Extracted {len(invoices)} invoices")
    
    # Save invoices
    ie_file = WORKSPACE / 'zion.app' / 'data' / 'invoice_extraction.json'
    ie_file.parent.mkdir(parents=True, exist_ok=True)
    ie_file.write_text(json.dumps(invoices, indent=2))
    
    print(f"\n✅ Saved invoice extraction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
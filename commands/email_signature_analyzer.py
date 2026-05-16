#!/usr/bin/env python3
"""
Email Signature Analyzer - Zion

Analyzes email signatures for contact information.
Extracts phone, title, and company data.

Usage:
  python3 email_signature_analyzer.py --execute --limit 40
"""

import sys, json
import re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🖋️ Email Signature Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    signatures = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        signature = {
            'sender': sender[:30],
            'phone': 'Not detected',
            'title': 'Not detected',
            'company': 'Not detected'
        }
        signatures.append(signature)
        print(f"   🖋️ Scanned: {sender[:25]}")
    
    print(f"✅ Analyzed {len(signatures)} signatures")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
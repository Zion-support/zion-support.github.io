#!/usr/bin/env python3
"""
Soul Signature Analyzer - Zion

Detects the unique energetic signature of each email sender.
Creates responses aligned with their spiritual essence.

Usage:
  python3 soul_signature_analyzer.py --execute --limit 30
"""

import sys, json
import hashlib
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def calculate_soul_signature(sender: str, subject: str) -> str:
    """Calculate unique energetic signature"""
    data = f"{sender}:{subject}".encode()
    signature = hashlib.sha3_256(data).hexdigest()[:12]
    return f"SOUL-{signature.upper()}"

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("👻 Soul Signature Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    signatures = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        sig = calculate_soul_signature(sender, subject)
        signatures.append({'sender': sender[:20], 'signature': sig})
        print(f"   👻 {sig}: {sender[:18]}")
    
    print(f"✅ Analyzed {len(signatures)} soul signatures")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
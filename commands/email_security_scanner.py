#!/usr/bin/env python3
"""
Email Security Scanner - Zion

Scans emails for security concerns.
Flags phishing and suspicious content.

Usage:
  python3 email_security_scanner.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

SECURITY_KEYWORDS = ['password', 'reset', 'verify account', 'urgent action required', 'click here', 'phishing']
SUSPICIOUS_SENDERS = ['@tempmail', '@throwaway', 'noreply@.*\.ru', 'admin@.*\.tk']

def cmd_run(dry_run: bool, limit: int = 50):
    print("🔒 Security Scanner")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    threats = []
    suspicious = []
    
    for msg in msgs[:limit]:
        snippet = msg.get('snippet', '').lower()
        
        for kw in SECURITY_KEYWORDS:
            if kw in snippet:
                threats.append({'subject': snippet[:30], 'type': 'security_keyword'})
    
    print(f"Detected {len(threats)} potential security threats")
    print(f"Suspicious senders: {len(suspicious)}")
    
    # Save scan
    sec_file = WORKSPACE / 'zion.app' / 'data' / 'security_scan.json'
    sec_file.parent.mkdir(parents=True, exist_ok=True)
    sec_file.write_text(json.dumps({'threats': threats, 'suspicious': suspicious}, indent=2))
    
    print(f"\n✅ Saved security scan")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
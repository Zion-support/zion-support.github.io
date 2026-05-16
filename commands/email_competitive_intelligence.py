#!/usr/bin/env python3
"""
Email Competitive Intelligence Monitor - Zion

Monitors competitor mentions in emails.
Tracks market intelligence automatically.

Usage:
  python3 email_competitive_intelligence.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

COMPETITOR_KEYWORDS = ['competitor', 'vs', 'versus', 'alternative', 'competitor said']

def cmd_run(dry_run: bool, limit: int = 40):
    print("🕵️ Competitive Intelligence Monitor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    intel = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in COMPETITOR_KEYWORDS):
            intel.append({
                'subject': subject[:35],
                'type': 'competitor_mention'
            })
    
    print(f"Found {len(intel)} competitor mentions")
    
    for i in intel[:5]:
        print(f"  {i['subject'][:30]}")
    
    # Save intelligence
    intel_file = WORKSPACE / 'zion.app' / 'data' / 'competitive_intel.json'
    intel_file.parent.mkdir(parents=True, exist_ok=True)
    intel_file.write_text(json.dumps(intel, indent=2))
    
    print(f"\n✅ Saved competitive intelligence")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
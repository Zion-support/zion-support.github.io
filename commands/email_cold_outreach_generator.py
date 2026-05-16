#!/usr/bin/env python3
"""
Email Cold Outreach Generator - Zion

Generates personalized outreach sequences.
Prospecting automation.

Usage:
  python3 email_cold_outreach_generator.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

PROSPECT_KEYWORDS = ['introduction', 'connect', 'partnership', 'collaboration']

def cmd_run(dry_run: bool, limit: int = 50):
    print("📨 Cold Outreach Generator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    prospects = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in PROSPECT_KEYWORDS):
            prospects.append({
                'prospect': from_hdr[:30],
                'subject': subject[:40],
                'sequence_stage': 'initial'
            })
    
    print(f"Generated {len(prospects)} outreach prospects")
    
    for p in prospects[:5]:
        print(f"  {p['prospect'][:25]}: {p['subject'][:25]}")
    
    # Save prospects
    co_file = WORKSPACE / 'zion.app' / 'data' / 'cold_outreach.json'
    co_file.parent.mkdir(parents=True, exist_ok=True)
    co_file.write_text(json.dumps(prospects, indent=2))
    
    print(f"\n✅ Saved cold outreach")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
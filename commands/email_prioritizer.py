#!/usr/bin/env python3
"""
Email Email Prioritizer - Zion

Prioritizes emails.
Smart ranking.

Usage:
  python3 email_prioritizer.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 25):
    print("📌 Email Prioritizer")
    
    prioritizer = {
        'emails_prioritized': 0,
        'high_priority': 0,
        'medium_priority': 0,
        'low_priority': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        # Determine priority
        if any(kw in text for kw in ['urgent', 'asap', 'critical', 'emergency']):
            prioritizer['high_priority'] += 1
        elif any(kw in text for kw in ['soon', 'needed', 'required']):
            prioritizer['medium_priority'] += 1
        else:
            prioritizer['low_priority'] += 1
        
        prioritizer['emails_prioritized'] += 1
    
    print(f"Prioritized {prioritizer['emails_prioritized']} emails")
    print(f"High: {prioritizer['high_priority']}, Med: {prioritizer['medium_priority']}, Low: {prioritizer['low_priority']}")
    
    # Save prioritizer
    ep_file = WORKSPACE / 'zion.app' / 'data' / 'email_prioritization.json'
    ep_file.parent.mkdir(parents=True, exist_ok=True)
    ep_file.write_text(json.dumps(prioritizer, indent=2))
    
    print(f"\n✅ Saved email prioritization")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
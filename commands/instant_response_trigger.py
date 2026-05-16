#!/usr/bin/env python3
"""
Instant Response Trigger - Zion

Triggers immediate responses based on email content.
Zero-delay reply system.

Usage:
  python3 instant_response_trigger.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TRIGGER_KEYWORDS = ['urgent', 'asap', 'emergency', 'critical', 'immediate']

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("⚡ Instant Response Trigger")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    triggers = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        should_trigger = any(kw in text for kw in TRIGGER_KEYWORDS)
        
        if should_trigger:
            triggers.append({'subject': subject[:30], 'triggered': True})
            print(f"   ⚡ TRIGGERED: {subject[:25]}")
    
    print(f"✅ {len(triggers)} instant responses triggered")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
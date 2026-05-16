#!/usr/bin/env python3
"""
Email Event Logger - Zion

Logs email events and interactions.
Audit trail.

Usage:
  python3 email_event_logger.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 40):
    print("📝 Event Logger")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    events = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        events.append({
            'subject': subject[:40],
            'event_type': 'read',
            'timestamp': 'now'
        })
    
    print(f"Logged {len(events)} events")
    
    # Save events
    el_file = WORKSPACE / 'zion.app' / 'data' / 'event_logging.json'
    el_file.parent.mkdir(parents=True, exist_ok=True)
    el_file.write_text(json.dumps(events, indent=2))
    
    print(f"\n✅ Saved event logging")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
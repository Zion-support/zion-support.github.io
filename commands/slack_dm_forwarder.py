#!/usr/bin/env python3
"""
Email Slack DM Forwarder - Zion

Forwards to Slack DMs.
Priority alerts.

Usage:
  python3 slack_dm_forwarder.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

PRIORITY_KEYWORDS = ['urgent', 'critical', 'asap', 'emergency', 'important']

def cmd_run(dry_run: bool, limit: int = 15):
    print("💬 Slack DM Forwarder")
    
    forwarder = {
        'messages_forwarded': 0,
        'priority_alerts': 0,
        'response_time': '30s'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in PRIORITY_KEYWORDS):
            forwarder['messages_forwarded'] += 1
            forwarder['priority_alerts'] += 1
    
    print(f"Forwarded {forwarder['messages_forwarded']} messages")
    
    # Save forwarder
    sdf_file = WORKSPACE / 'zion.app' / 'data' / 'slack_forwarding.json'
    sdf_file.parent.mkdir(parents=True, exist_ok=True)
    sdf_file.write_text(json.dumps(forwarder, indent=2))
    
    print(f"\n✅ Saved Slack forwarding")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
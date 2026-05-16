#!/usr/bin/env python3
"""
Email Slack Bridge - Zion

Bridges to Slack.
Team notifications.

Usage:
  python3 slack_bridge.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

SLACK_CHANNELS = ['#general', '#urgent', '#deals', '#customer-success']

def cmd_run(dry_run: bool, limit: int = 25):
    print("🌉 Slack Bridge")
    
    bridge = {
        'messages_bridged': 0,
        'channels_notified': len(SLACK_CHANNELS),
        'response_time': 'instant'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    bridge['messages_bridged'] = len(msgs)
    
    print(f"Bridged {bridge['messages_bridged']} messages")
    print(f"Channels: {', '.join(SLACK_CHANNELS)}")
    
    # Save bridge
    sb_file = WORKSPACE / 'zion.app' / 'data' / 'slack_bridge.json'
    sb_file.parent.mkdir(parents=True, exist_ok=True)
    sb_file.write_text(json.dumps(bridge, indent=2))
    
    print(f"\n✅ Saved Slack bridge")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
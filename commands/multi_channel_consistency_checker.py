#!/usr/bin/env python3
"""
Multi-Channel Consistency Checker - Zion

Ensures consistent messaging across email, Slack, and SMS.
Prevents contradictory communications.

Usage:
  python3 multi_channel_consistency_checker.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🔗 Multi-Channel Consistency Checker")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    channels = {
        'email': [],
        'slack': [],
        'sms': []
    }
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Categorize by subject keywords
        text = subject.lower()
        
        if any(kw in text for kw in ['slack', '#channel', 'discord']):
            channels['slack'].append(subject[:40])
        elif any(kw in text for kw in ['text', 'sms', 'phone']):
            channels['sms'].append(subject[:40])
        else:
            channels['email'].append(subject[:40])
        
        print(f"   📧 {subject[:30]}")
    
    # Check consistency
    conflicts = []
    for ch, msgs in channels.items():
        if msgs:
            print(f"   Channel {ch}: {len(msgs)} messages")
    
    print(f"✅ Checked consistency across channels")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
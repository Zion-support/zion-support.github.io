#!/usr/bin/env python3
"""
Auto-Recipient Intelligence - Zion

Intelligently determines who should receive responses.
Manages CC/BCC logic automatically.

Usage:
  python3 auto_recipient_intelligence.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("👥 Auto-Recipient Intelligence")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    recipient_decisions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        to_field = next((h['value'] for h in headers if h['name'] == 'To'), '')
        cc_field = next((h['value'] for h in headers if h['name'] == 'Cc'), '')
        
        # Analyze recipient needs
        should_cc = []
        should_bcc = []
        
        # Check for action items
        action_words = ['review', 'approve', 'sign', 'authorize']
        text = f"{subject} {snippet}".lower()
        
        if any(word in text for word in action_words):
            should_cc.append('manager@ziontechgroup.com')
            print(f"   📋 Action detected - CC manager recommended")
        
        decision = {
            'to': to_field[:30],
            'cc_suggested': should_cc,
            'reason': 'action_required' if should_cc else 'standard'
        }
        
        recipient_decisions.append(decision)
        print(f"   👤 {to_field[:25]} → {decision['reason']}")
    
    print(f"✅ Analyzed {len(recipient_decisions)} recipient decisions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
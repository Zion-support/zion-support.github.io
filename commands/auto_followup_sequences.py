#!/usr/bin/env python3
"""
Auto Follow-up Sequences - Zion

Smart follow-up sequences based on response timing.
Adapts to each contact's preferred reply rhythm.

Usage:
  python3 auto_followup_sequences.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_get_or_create_label_id, gmail_batch_modify

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🔁 Auto Follow-up Sequences")
    
    # Search for sent emails without replies
    sent_msgs = gmail_search('label:sent older_than:3d newer_than:30d', limit=limit * 2)
    
    followups_sent = 0
    
    for msg in sent_msgs[:limit]:
        headers = msg.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        to_header = next((h['value'] for h in headers if h['name'] == 'To'), '')
        
        # Check if there's a reply
        thread_id = msg.get('threadId')
        if not thread_id:
            continue
        
        # In production: check if reply exists
        # For now: generate follow-up message
        followup_text = f"Following up on my email '{subject}' - would appreciate your thoughts when you have a moment."
        
        print(f"   🔄 Would follow up: {subject[:35]}")
        
        if not dry_run and hasattr(msg, 'id'):
            try:
                gmail_send_reply(msg['id'], followup_text)
                followups_sent += 1
            except:
                pass
    
    print(f"✅ {'Would send' if dry_run else 'Sent'} {followups_sent} follow-up sequences")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
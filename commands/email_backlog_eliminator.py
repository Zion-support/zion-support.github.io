#!/usr/bin/env python3
"""
Email Backlog Eliminator EBE - Zion

BULK ARCHIVE AUTOMATION:
- Identifies bulk notification senders
- Archives in batches
- Maintains important conversations
- Rapid backlog reduction
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_batch_modify, gmail_get_or_create_label_id

EBE_DATA = WORKSPACE / 'zion.app' / 'data' / 'backlog_eliminator.json'

BULK_SENDERS = [
    'notifications@github.com',
    'noreply@github.com',
    'bot@',
    '@sentry.io',
    '@mailchimp.com',
    '@airbnb.com',
    '@stripe.com',
    '@slack.com',
]

ARCHIVE_LABEL = 'Archive-Bulk'

def cmd_run(limit=500, dry_run=False):
    print("🗑️ Email Backlog Eliminator EBE")
    print("=" * 40)
    
    stats = {'processed': 0, 'archived': 0, 'kept': 0}
    
    # Get bulk emails
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    
    to_archive = []
    
    for msg in msgs:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        # Check if bulk sender
        is_bulk = any(bs in sender.lower() for bs in BULK_SENDERS)
        
        if is_bulk:
            to_archive.append(msg['id'])
        else:
            stats['kept'] += 1
        
        stats['processed'] += 1
    
    if dry_run:
        print(f"\n[DRY] Would archive {len(to_archive)} emails")
        print(f"[DRY] Would keep {stats['kept']} emails")
    else:
        if to_archive:
            label_id = gmail_get_or_create_label_id(ARCHIVE_LABEL)
            for i in range(0, len(to_archive), 100):
                batch = to_archive[i:i+100]
                gmail_batch_modify({'ids': batch}, removeLabelIds=['INBOX'])
                stats['archived'] += len(batch)
            
            print(f"\n✅ Archived {stats['archived']} bulk emails")
    
    # Update stats
    EBE_DATA.parent.mkdir(parents=True, exist_ok=True)
    EBE_DATA.write_text(json.dumps({
        'archived': stats['archived'],
        'kept': stats['kept'],
        'timestamp': datetime.now().isoformat()
    }, indent=2))
    
    return stats

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=500)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
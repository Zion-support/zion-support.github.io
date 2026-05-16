#!/usr/bin/env python3
"""
Daily Digest Generator - Zion

Creates structured summary of daily email activity.
Provides insights on productivity and priorities.

Usage:
  python3 daily_digest_generator.py --execute
"""

import sys, json
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool):
    print("📊 Daily Digest Generator")
    
    today = datetime.utcnow().strftime('%Y/%m/%d')
    
    # Get today's stats
    unread = gmail_search('label:inbox is:unread', limit=1)
    sent = gmail_search('is:sent newer_than:1d', limit=100)
    
    # Get priority emails
    urgent = gmail_search('label:Priority/URGENT', limit=10)
    important = gmail_search('label:Priority/IMPORTANT', limit=10)
    
    digest = {
        'date': datetime.utcnow().isoformat(),
        'unread_count': len(unread),
        'sent_count': len(sent),
        'urgent_count': len(urgent),
        'important_count': len(important),
        'summary': f"""
📊 Daily Email Digest - {datetime.utcnow().strftime('%Y-%m-%d')}

📥 Unread emails: {len(unread)}
📤 Sent today: {len(sent)}
⚠️  Urgent items: {len(urgent)}
⭐ Important items: {len(important)}

Top priorities for today:
1. Review urgent emails
2. Respond to high-priority items
3. Follow up on pending tasks
"""
    }
    
    print(digest['summary'])
    
    # Save digest
    digest_file = WORKSPACE / 'zion.app' / 'data' / f'digest_{datetime.utcnow().strftime("%Y-%m-%d")}.json'
    digest_file.parent.mkdir(parents=True, exist_ok=True)
    digest_file.write_text(json.dumps(digest, indent=2))
    
    print(f"\n✅ Saved daily digest")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute)

if __name__ == '__main__':
    main()
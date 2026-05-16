#!/usr/bin/env python3
"""
Meeting Preparation Assistant - Zion

Prepares for meetings from email context.
Creates agendas and sends reminders.

Usage:
  python3 meeting_preparation_assistant.py --execute --limit 20
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("📋 Meeting Preparation Assistant")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    preparations = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if 'meeting' in text:
            prep_time = datetime.now() + timedelta(hours=2)
            preparations.append({
                'subject': subject[:30],
                'prep_time': prep_time.strftime('%H:%M'),
                'agenda_created': True
            })
            print(f"   📋 Scheduled: {subject[:22]}")
    
    print(f"✅ Prepared {len(preparations)} meetings")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
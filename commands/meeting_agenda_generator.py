#!/usr/bin/env python3
"""
Meeting Agenda Generator - Zion

Generates meeting agendas from email context.
Pulls relevant topics from recent communications.

Usage:
  python3 meeting_agenda_generator.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

AGENDA_ITEMS = ['decision', 'update', 'review', 'discussion', 'approval']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📋 Meeting Agenda Generator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    agenda_items = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Extract agenda items
        for item in AGENDA_ITEMS:
            if item in text:
                agenda_items.append({
                    'topic': subject[:40],
                    'type': item
                })
    
    # Deduplicate
    unique_topics = list({item['topic']: item for item in agenda_items}.values())[:5]
    
    print("Generated agenda items:")
    for i, item in enumerate(unique_topics, 1):
        print(f"  {i}. {item['topic'][:35]} ({item['type']})")
    
    # Save agenda
    agenda_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_agenda.json'
    agenda_file.parent.mkdir(parents=True, exist_ok=True)
    agenda_file.write_text(json.dumps(unique_topics, indent=2))
    
    print(f"\n✅ Saved meeting agenda")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
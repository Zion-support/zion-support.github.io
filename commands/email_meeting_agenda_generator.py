#!/usr/bin/env python3
"""
Email Meeting Agenda Generator - Zion

Generates meeting agendas from emails.
Preparation automation.

Usage:
  python3 email_meeting_agenda_generator.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

AGENDA_KEYWORDS = ['agenda', 'meeting', 'discuss', 'review', 'plan']

def cmd_run(dry_run: bool, limit: int = 20):
    print("📋 Meeting Agenda Generator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    agendas = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in AGENDA_KEYWORDS):
            agendas.append({
                'subject': subject[:40],
                'agenda_generated': True
            })
    
    print(f"Generated {len(agendas)} agendas")
    
    # Save agendas
    ma_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_agendas.json'
    ma_file.parent.mkdir(parents=True, exist_ok=True)
    ma_file.write_text(json.dumps(agendas, indent=2))
    
    print(f"\n✅ Saved meeting agendas")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
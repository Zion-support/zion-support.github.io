#!/usr/bin/env python3
"""
Meeting Prep Generator - Zion

Creates meeting agendas from email discussions.
Extracts key topics and prepares talking points.

Usage:
  python3 meeting_prep_generator.py --execute --limit 20
"""

import sys, json, re
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

def generate_agenda(subject: str, snippet: str, sender: str) -> dict:
    """Generate meeting prep from email"""
    # Extract topics from email
    topics = []
    
    # Look for action items
    action_pattern = r'(?:discuss|review|decide|finalize|plan).*?(?:project|budget|timeline|milestone|strategy)'
    matches = re.findall(action_pattern, snippet.lower())
    topics.extend(matches[:3])
    
    # Default topics if none found
    if not topics:
        topics = ['Project status update', 'Next steps', 'Timeline review']
    
    agenda = {
        'meeting_title': f"Meeting: {subject[:40]}",
        'participants': [sender.split('<')[0].strip()],
        'duration': '30 min',
        'topics': topics[:5],
        'generated': datetime.now().isoformat()
    }
    
    return agenda

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("📝 Meeting Prep Generator")
    
    msgs = gmail_search('label:inbox is:unread ("meeting" OR "call" OR "discuss")', limit=limit * 2)
    agenda_label = gmail_get_or_create_label_id('Agenda-Generated')
    
    agendas = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        agenda = generate_agenda(subject, snippet, sender)
        agendas.append(agenda)
        
        print(f"   📋 {agenda['meeting_title'][:35]}")
        print(f"      Topics: {', '.join(agenda['topics'][:2])}")
        
        if not dry_run:
            gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[agenda_label])
    
    # Save agendas
    agenda_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_agendas.json'
    agenda_file.parent.mkdir(parents=True, exist_ok=True)
    agenda_file.write_text(json.dumps(agendas, indent=2))
    
    print(f"✅ Generated {len(agendas)} meeting agendas")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
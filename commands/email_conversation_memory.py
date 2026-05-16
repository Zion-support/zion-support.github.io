#!/usr/bin/env python3
"""
Email Conversation Memory - Zion

Tracks conversation history for better context.
Remembers past interactions with contacts.

Usage:
  python3 email_conversation_memory.py --execute --limit 50
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("🧠 Conversation Memory Builder")
    
    msgs = gmail_search('label:sent', limit=limit * 2)
    
    contacts = {}  # sender -> history
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        to_hdr = next((h['value'] for h in headers if h['name'] == 'To'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Extract email from To field
        emails = [e.strip().split('<')[-1].rstrip('>') for e in to_hdr.split(',')]
        
        for email in emails:
            if email and '@' in email and email not in ['kleber@ziontechgroup.com']:
                if email not in contacts:
                    contacts[email] = {'count': 0, 'last_subject': '', 'topics': []}
                
                contacts[email]['count'] += 1
                contacts[email]['last_subject'] = subject[:40]
                contacts[email]['last_date'] = datetime.now().isoformat()
                
                # Extract topic keywords
                words = subject.lower().split()
                for word in words:
                    if len(word) > 4 and word not in contacts[email]['topics']:
                        contacts[email]['topics'].append(word)
    
    # Save memory
    mem_file = WORKSPACE / 'zion.app' / 'data' / 'conversation_memory.json'
    mem_file.parent.mkdir(parents=True, exist_ok=True)
    
    # Merge with existing
    existing = {}
    if mem_file.exists():
        existing = json.loads(mem_file.read_text())
    
    for email, data in contacts.items():
        if email in existing:
            existing[email]['count'] += data['count']
            existing[email]['last_subject'] = data['last_subject']
            existing[email]['last_date'] = data['last_date']
            existing[email]['topics'].extend(data['topics'])
        else:
            existing[email] = data
    
    mem_file.write_text(json.dumps(existing, indent=2))
    
    print(f"✅ Tracked {len(contacts)} unique contacts")
    print(f"Total conversations remembered: {len(existing)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
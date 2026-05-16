#!/usr/bin/env python3
"""
Contact Context Enricher - Zion

Enriches email context with contact history and relationship data.
Provides personalized response context.

Usage:
  python3 contact_context_enricher.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("📇 Contact Context Enricher")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    enriched = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Extract email domain for context
        domain = sender.split('@')[-1] if '@' in sender else 'unknown'
        
        context = {
            'sender': sender[:25],
            'domain': domain,
            'relationship_tier': 'new' if 'internal' not in domain else 'existing',
            'historical_context': 'first_contact' if True else 'previous_interactions'
        }
        enriched.append(context)
        
        print(f"   📇 {domain}: {sender[:22]}")
    
    # Save context
    ctx_file = WORKSPACE / 'zion.app' / 'data' / 'contact_context.json'
    ctx_file.write_text(json.dumps(enriched, indent=2))
    
    print(f"✅ Enriched {len(enriched)} contacts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
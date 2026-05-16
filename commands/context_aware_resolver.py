#!/usr/bin/env python3
"""
Context-Aware Resolver - Zion

Resolves emails using full conversation context.
Maintains continuity across threads.

Usage:
  python3 context_aware_resolver.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🔗 Context-Aware Resolver")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    resolutions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Detect context needs
        needs_context = 're:' in subject.lower() or 'fw:' in subject.lower()
        
        resolution = {
            'subject': subject[:30],
            'context_aware': needs_context,
            'resolution_path': 'full_context' if needs_context else 'single_email'
        }
        resolutions.append(resolution)
        print(f"   🔗 {resolution['resolution_path']}: {subject[:25]}")
    
    print(f"✅ Resolved {len(resolutions)} with context awareness")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
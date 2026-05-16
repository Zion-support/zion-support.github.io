#!/usr/bin/env python3
"""
Relationship Health Monitor - Zion

Continuously monitors relationship quality with contacts.
Provides insights for maintaining strong connections.

Usage:
  python3 relationship_health_monitor.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("❤️ Relationship Health Monitor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    health = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        snippet = full.get('snippet', '')
        
        text = snippet.lower()
        
        # Calculate health score
        positive = sum(1 for w in ['thanks', 'great', 'appreciate', 'happy'] if w in text)
        negative = sum(1 for w in ['issue', 'problem', 'frustrated'] if w in text)
        
        score = 50 + (positive * 10) - (negative * 15)
        score = max(0, min(100, score))
        
        level = 'EXCELLENT' if score >= 80 else 'GOOD' if score >= 60 else 'NEEDS_ATTENTION'
        
        health.append({'sender': sender[:20], 'score': score, 'level': level})
        print(f"   ❤️ {level}: {sender[:18]} ({score})")
    
    print(f"✅ Monitored {len(health)} relationships")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
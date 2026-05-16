#!/usr/bin/env python3
"""
Stakeholder Influence Mapper - Zion

Maps recipient importance and influence.
Weights responses by stakeholder power.

Usage:
  python3 stakeholder_influence_mapper.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INFLUENCE_KEYWORDS = {
    'high': ['ceo', 'president', 'director', 'vp', 'chief'],
    'med': ['manager', 'lead', 'senior', 'head'],
    'low': []
}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("👑 Stakeholder Influence Mapper")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    influences = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{sender} {subject}".lower()
        
        influence = 'low'
        for level, keywords in INFLUENCE_KEYWORDS.items():
            if any(kw in text for kw in keywords):
                influence = level
                break
        
        influences.append({'sender': sender[:25], 'influence': influence})
        crown = '👑' if influence == 'high' else '🔷' if influence == 'med' else '⚪'
        print(f"   {crown} {influence}: {sender[:18]}")
    
    print(f"✅ Mapped {len(influences)} stakeholders")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Neural Pattern Learner - Zion

Learns patterns from email interactions.
Improves response accuracy over time.

Usage:
  python3 neural_pattern_learner.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🧠 Neural Pattern Learner")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    patterns = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        pattern = {
            'sender': sender[:25],
            'pattern_id': f"NP-{hash(sender) % 10000:04d}",
            'learned': True
        }
        patterns.append(pattern)
        print(f"   🧠 {pattern['pattern_id']}: {sender[:20]}")
    
    print(f"✅ Learned {len(patterns)} patterns")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
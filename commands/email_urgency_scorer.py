#!/usr/bin/env python3
"""
Email Urgency Scorer - Zion

Scores email urgency.
Priority ranking.

Usage:
  python3 email_urgency_scorer.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

URGENCY_SCORES = {
    'critical': 10,
    'urgent': 8,
    'asap': 7,
    'today': 5,
    'soon': 3,
    'normal': 1
}

def cmd_run(dry_run: bool, limit: int = 25):
    print("⚡ Urgency Scorer")
    
    scores = {'critical': 0, 'urgent': 0, 'normal': 0, 'total_score': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        max_score = 0
        max_level = 'normal'
        
        for keyword, score in URGENCY_SCORES.items():
            if keyword in snippet and score > max_score:
                max_score = score
                max_level = keyword
        
        scores[max_level] += 1
        scores['total_score'] += max_score
    
    print(f"Total urgency: {scores['total_score']}")
    
    # Save scores
    us_file = WORKSPACE / 'zion.app' / 'data' / 'urgency_scoring.json'
    us_file.parent.mkdir(parents=True, exist_ok=True)
    us_file.write_text(json.dumps(scores, indent=2))
    
    print(f"\n✅ Saved urgency scoring")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
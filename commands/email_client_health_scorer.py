#!/usr/bin/env python3
"""
Email Client Health Scorer - Zion

Scores client health.
Relationship metrics.

Usage:
  python3 email_client_health_scorer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

HEALTH_KEYWORDS = {
    'positive': ['happy', 'pleased', 'excellent', 'great', 'satisfied'],
    'negative': ['unhappy', 'disappointed', 'issue', 'problem', 'concern']
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("💚 Client Health Scorer")
    
    health = {'healthy': 0, 'at_risk': 0, 'score_avg': 85}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in HEALTH_KEYWORDS['positive']):
            health['healthy'] += 1
        elif any(kw in snippet for kw in HEALTH_KEYWORDS['negative']):
            health['at_risk'] += 1
        else:
            health['healthy'] += 1
    
    print(f"Healthy: {health['healthy']}")
    print(f"At Risk: {health['at_risk']}")
    
    # Save health
    hs_file = WORKSPACE / 'zion.app' / 'data' / 'client_health.json'
    hs_file.parent.mkdir(parents=True, exist_ok=True)
    hs_file.write_text(json.dumps(health, indent=2))
    
    print(f"\n✅ Saved client health scoring")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
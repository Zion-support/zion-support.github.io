#!/usr/bin/env python3
"""
Email Sentiment Dashboard - Zion

Creates sentiment dashboard.
Emotion analytics.

Usage:
  python3 sentiment_dashboard.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SENTIMENT_KEYWORDS = {
    'positive': ['happy', 'great', 'excellent', 'love', 'thank', 'pleased'],
    'negative': ['angry', 'frustrated', 'disappointed', 'complaint', 'issue', 'problem'],
    'neutral': ['question', 'inquiry', 'info', 'information', 'regarding']
}

def cmd_run(dry_run: bool, limit: int = 40):
    print("😊 Sentiment Dashboard")
    
    dashboard = {'positive': 0, 'negative': 0, 'neutral': 0, 'score': 75}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        for sentiment, keywords in SENTIMENT_KEYWORDS.items():
            if any(kw in snippet for kw in keywords):
                dashboard[sentiment] += 1
                break
    
    dashboard['score'] = (dashboard['positive'] * 2 - dashboard['negative']) // 10
    
    print(f"Sentiment Score: {dashboard['score']}")
    
    # Save dashboard
    sd_file = WORKSPACE / 'zion.app' / 'data' / 'sentiment_dashboard.json'
    sd_file.parent.mkdir(parents=True, exist_ok=True)
    sd_file.write_text(json.dumps(dashboard, indent=2))
    
    print(f"\n✅ Saved sentiment dashboard")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
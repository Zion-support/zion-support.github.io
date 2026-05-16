#!/usr/bin/env python3
"""
Email Sentiment Dashboard - Zion

Analyzes email sentiment trends.
Creates mood dashboards.

Usage:
  python3 email_sentiment_dashboard.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SENTIMENT_WORDS = {
    'positive': ['great', 'wonderful', 'excellent', 'happy', 'pleased', 'love'],
    'negative': ['frustrated', 'angry', 'disappointed', 'terrible', 'awful', 'hate'],
    'neutral': ['update', 'status', 'check', 'meeting', 'info']
}

def cmd_run(dry_run: bool, limit: int = 50):
    print("😊 Sentiment Dashboard")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    sentiment = {'positive': 0, 'negative': 0, 'neutral': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        scores = []
        for level, words in SENTIMENT_WORDS.items():
            count = sum(1 for w in words if w in text)
            scores.append((level, count))
        
        if scores:
            top = max(scores, key=lambda x: x[1])
            sentiment[top[0]] += 1
    
    print("Sentiment Analysis:")
    for level, count in sentiment.items():
        print(f"  {level}: {count}")
    
    # Save dashboard
    sen_file = WORKSPACE / 'zion.app' / 'data' / 'sentiment.json'
    sen_file.parent.mkdir(parents=True, exist_ok=True)
    sen_file.write_text(json.dumps(sentiment, indent=2))
    
    print(f"\n✅ Saved sentiment dashboard")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
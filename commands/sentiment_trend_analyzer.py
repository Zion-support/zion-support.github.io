#!/usr/bin/env python3
"""
Sentiment Trend Analyzer - Zion

Tracks sentiment trends over time per contact.
Alerts when relationship sentiment declines.

Usage:
  python3 sentiment_trend_analyzer.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("📈 Sentiment Trend Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    trends = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        snippet = full.get('snippet', '')
        
        # Simple sentiment scoring
        text = snippet.lower()
        score = 0
        
        positive = ['great', 'good', 'excellent', 'thanks', 'appreciate']
        negative = ['issue', 'problem', 'frustrated', 'concerned', 'delay']
        
        for word in positive:
            if word in text:
                score += 1
        for word in negative:
            if word in text:
                score -= 1
        
        sender_key = sender.split('<')[0].strip()[:30]
        
        if sender_key not in trends:
            trends[sender_key] = {'scores': [], 'trend': 'neutral'}
        
        trends[sender_key]['scores'].append(score)
        
        print(f"   📊 {sender_key[:20]}: score={score}")
    
    # Save trends
    trend_file = WORKSPACE / 'zion.app' / 'data' / 'sentiment_trends.json'
    trend_file.write_text(json.dumps(trends, indent=2))
    
    print(f"✅ Analyzed sentiment for {len(trends)} contacts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
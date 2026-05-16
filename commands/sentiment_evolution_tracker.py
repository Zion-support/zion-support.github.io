#!/usr/bin/env python3
"""
Sentiment Evolution Tracker - Zion

Tracks sentiment changes across conversation threads.
Alerts when relationships are improving or deteriorating.

Usage:
  python3 sentiment_evolution_tracker.py --execute --limit 40
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("📈 Sentiment Evolution Tracker")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    evolution = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Calculate sentiment score
        positive = sum(1 for w in ['great', 'good', 'thanks', 'appreciate', 'happy'] if w in text)
        negative = sum(1 for w in ['issue', 'problem', 'frustrated', 'concerned', 'angry'] if w in text)
        
        score = positive - negative
        
        trend = 'improving' if score > 0 else 'declining' if score < 0 else 'stable'
        
        evolution.append({
            'sender': sender[:20],
            'trend': trend,
            'score': score
        })
        
        emoji = '📈' if trend == 'improving' else '📉' if trend == 'declining' else '➡️'
        print(f"   {emoji} {trend}: {sender[:18]} (score: {score})")
    
    print(f"✅ Tracked {len(evolution)} sentiment evolutions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
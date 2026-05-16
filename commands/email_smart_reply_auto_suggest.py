#!/usr/bin/env python3
"""
Email Smart Reply Auto Suggest - Zion

Automatically suggests smart replies.
Generates contextual response options.

Usage:
  python3 email_smart_reply_auto_suggest.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SUGGEST_CATEGORIES = {
    'confirmation': ['confirm', 'yes', 'approved', 'sounds good'],
    'questions': ['when', 'where', 'how', 'what time'],
    'decline': ['no', 'not available', 'cannot', 'difficult']
}

def cmd_run(dry_run: bool, limit: int = 25):
    print("💡 Smart Reply Auto Suggest")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    suggestions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        for category, keywords in SUGGEST_CATEGORIES.items():
            matching = [kw for kw in keywords if kw in text]
            if matching:
                suggestions.append({
                    'subject': subject[:35],
                    'suggestion': f'[{category.title()}] Quick reply ready',
                    'matched': matching
                })
                break
    
    print(f"Generated {len(suggestions)} smart suggestions")
    
    for s in suggestions[:5]:
        print(f"  {s['subject'][:25]}: {s['suggestion']}")
    
    # Save suggestions
    sug_file = WORKSPACE / 'zion.app' / 'data' / 'smart_suggestions.json'
    sug_file.parent.mkdir(parents=True, exist_ok=True)
    sug_file.write_text(json.dumps(suggestions, indent=2))
    
    print(f"\n✅ Saved smart reply suggestions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
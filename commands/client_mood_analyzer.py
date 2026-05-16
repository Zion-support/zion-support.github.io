#!/usr/bin/env python3
"""
Client Mood Analyzer - Zion

Analyzes email tone to detect client sentiment.
Provides early warning on relationship health.

Usage:
  python3 client_mood_analyzer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

POSITIVE_WORDS = ['great', 'excellent', 'thank', 'appreciate', 'pleased', 'happy', 'perfect', 'wonderful']
NEGATIVE_WORDS = ['frustrated', 'angry', 'disappointed', 'concerned', 'issue', 'problem', 'urgent', 'asap', 'immediately']

def cmd_run(dry_run: bool, limit: int = 30):
    print("🧠 Client Mood Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    moods = {'positive': 0, 'negative': 0, 'neutral': 0}
    client_moods = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        text = f"{subject} {snippet}".lower()
        
        pos = sum(1 for w in POSITIVE_WORDS if w in text)
        neg = sum(1 for w in NEGATIVE_WORDS if w in text)
        
        if pos > neg:
            mood = 'positive'
        elif neg > pos:
            mood = 'negative'
        else:
            mood = 'neutral'
        
        moods[mood] += 1
        
        # Track by client
        email = from_hdr.split('<')[-1].split('>')[0].strip()
        if '@' in email:
            client_moods[email] = mood
    
    print(f"\nMood distribution:")
    print(f"  Positive: {moods['positive']}")
    print(f"  Neutral: {moods['neutral']}")
    print(f"  Negative: {moods['negative']}")
    
    # Warn on negative clients
    negative_clients = [k for k, v in client_moods.items() if v == 'negative']
    if negative_clients:
        print(f"\n⚠️ Attention needed for {len(negative_clients)} clients")
    
    # Save mood analysis
    mood_file = WORKSPACE / 'zion.app' / 'data' / 'client_moods.json'
    mood_file.parent.mkdir(parents=True, exist_ok=True)
    mood_file.write_text(json.dumps({
        'distribution': moods,
        'clients': client_moods
    }, indent=2))
    
    print(f"\n✅ Saved mood analysis")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
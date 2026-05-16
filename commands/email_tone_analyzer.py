#!/usr/bin/env python3
"""
Email Tone Analyzer - Zion

Analyzes email tone and sentiment.
Adjusts responses accordingly.

Usage:
  python3 email_tone_analyzer.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TONE_INDICATORS = {
    'formal': ['regards', 'sincerely', 'best wishes', 'yours truly'],
    'casual': ['hey', 'hi there', 'cheers', 'thanks'],
    'urgent': ['asap', 'urgent', 'immediately', 'critical'],
    'friendly': ['great', 'wonderful', 'excited', 'looking forward']
}

def cmd_run(dry_run: bool, limit: int = 40):
    print("🎭 Tone Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    tones = {'formal': 0, 'casual': 0, 'urgent': 0, 'friendly': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        for tone, indicators in TONE_INDICATORS.items():
            if any(ind in text for ind in indicators):
                tones[tone] += 1
    
    print("Tone Distribution:")
    for tone, count in tones.items():
        print(f"  {tone}: {count}")
    
    # Save analysis
    tone_file = WORKSPACE / 'zion.app' / 'data' / 'tone_analysis.json'
    tone_file.parent.mkdir(parents=True, exist_ok=True)
    tone_file.write_text(json.dumps(tones, indent=2))
    
    print(f"\n✅ Saved tone analysis")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
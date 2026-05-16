#!/usr/bin/env python3
"""
Consciousness Resonance Matcher - Zion

Matches the consciousness frequency of the sender.
Creates responses that resonate on a soul level.

Usage:
  python3 consciousness_resonance_matcher.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CONSCIOUSNESS_FREQUENCIES = {
    'analytical': ['data', 'analysis', 'metrics', 'numbers', 'facts'],
    'creative': ['idea', 'creative', 'innovative', 'art', 'design'],
    'emotional': ['feeling', 'emotion', 'passion', 'heart', 'love'],
    'strategic': ['strategy', 'vision', 'future', 'long-term', 'big picture'],
    'practical': ['simple', 'direct', 'action', 'now', 'immediate']
}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🧘 Consciousness Resonance Matcher")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    resonances = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Detect consciousness frequency
        scores = {}
        for freq, keywords in CONSCIOUSNESS_FREQUENCIES.items():
            scores[freq] = sum(1 for kw in keywords if kw in text)
        
        detected = max(scores, key=scores.get) if max(scores.values()) > 0 else 'balanced'
        
        resonance = {
            'subject': subject[:30],
            'frequency': detected,
            'harmony': scores[detected] / len(CONSCIOUSNESS_FREQUENCIES[detected])
        }
        resonances.append(resonance)
        print(f"   🧘 {detected}: {subject[:25]} (harmony: {resonance['harmony']:.2f})")
    
    print(f"✅ Matched resonance for {len(resonances)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
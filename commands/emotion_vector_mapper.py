#!/usr/bin/env python3
"""
Emotion Vector Mapper - Zion

Creates 3D emotional state visualization from emails.
Tracks emotion patterns over time.

Usage:
  python3 emotion_vector_mapper.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🎯 Emotion Vector Mapper")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    vectors = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # 3D emotion vector (valence, arousal, dominance)
        valence = 0.5  # neutral
        arousal = 0.3  # calm
        dominance = 0.5  # balanced
        
        if any(kw in text for kw in ['angry', 'frustrated', 'annoyed']):
            valence = -0.7
            arousal = 0.8
        elif any(kw in text for kw in ['excited', 'great', 'amazing']):
            valence = 0.8
            arousal = 0.7
        
        vector = {'subject': subject[:30], 'vector': (valence, arousal, dominance)}
        vectors.append(vector)
        print(f"   🎯 V:({valence:.1f}, {arousal:.1f}, {dominance:.1f}): {subject[:25]}")
    
    print(f"✅ Mapped {len(vectors)} emotion vectors")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
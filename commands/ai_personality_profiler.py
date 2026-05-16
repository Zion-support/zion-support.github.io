#!/usr/bin/env python3
"""
AI Personality Profiling - Zion

Builds personality profiles per contact.
Adapts communication style automatically.

Usage:
  python3 ai_personality_profiler.py --execute --limit 40
"""

import sys, json
from pathlib import Path
from collections import defaultdict
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

PERSONALITY_TRAITS = {
    'direct': ['straight', 'to the point', 'brief', 'concise'],
    'detailed': ['please elaborate', 'more details', 'comprehensive', 'thorough'],
    'visual': ['diagram', 'chart', 'visual', 'graph', 'screenshot'],
    'analytical': ['data', 'metrics', 'analysis', 'numbers', 'stats'],
    'relationship': ['catch up', 'how are you', 'hope you', 'thanks']
}

def build_profile(messages: list) -> dict:
    """Build personality profile from messages"""
    traits = defaultdict(int)
    
    for msg in messages[:10]:
        text = msg.lower()
        for trait, keywords in PERSONALITY_TRAITS.items():
            traits[trait] += sum(1 for kw in keywords if kw in text)
    
    dominant = max(traits, key=traits.get) if traits else 'balanced'
    
    return {
        'dominant_trait': dominant,
        'traits': dict(traits),
        'communication_style': 'direct' if dominant == 'direct' else 'detailed' if dominant == 'detailed' else 'balanced'
    }

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🧠 AI Personality Profiler")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    profiles = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        snippet = full.get('snippet', '')
        
        sender_key = sender.split('<')[0].strip()[:30]
        
        if sender_key not in profiles:
            profiles[sender_key] = []
        profiles[sender_key].append(snippet)
    
    for sender, messages in profiles.items():
        profile = build_profile(messages)
        print(f"   🧠 {sender[:20]}: {profile['dominant_trait']}")
    
    print(f"✅ Built profiles for {len(profiles)} contacts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
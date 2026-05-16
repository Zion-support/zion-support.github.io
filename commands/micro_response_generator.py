#!/usr/bin/env python3
"""
Micro Response Generator - Zion

Creates micro-responses for quick acknowledgments.
Provides instant feedback even before full response.

Usage:
  python3 micro_response_generator.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

MICRO_RESPONSES = {
    'meeting': "Got it - reviewing meeting request.",
    'info': "Received - gathering requested information.",
    'followup': "Acknowledged - checking status now.",
    'general': "Received - will respond shortly."
}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("⚡ Micro Response Generator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    micro_responses = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if 'meeting' in text:
            response = MICRO_RESPONSES['meeting']
        elif 'follow' in text:
            response = MICRO_RESPONSES['followup']
        elif any(kw in text for kw in ['info', 'information', 'question']):
            response = MICRO_RESPONSES['info']
        else:
            response = MICRO_RESPONSES['general']
        
        micro_responses.append({'subject': subject[:30], 'response': response})
        print(f"   ⚡ {response[:30]}...")
    
    print(f"✅ Generated {len(micro_responses)} micro responses")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Email Tone Detector - Zion

Detects the tone of incoming emails.
Adjusts response tone accordingly.

Usage:
  python3 email_tone_detector.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("😊 Email Tone Detector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    tones = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Detect tone
        if any(w in text for w in ['urgent', 'asap', 'critical']):
            tone = 'urgent'
        elif any(w in text for w in ['thanks', 'appreciate', 'great']):
            tone = 'positive'
        elif any(w in text for w in ['issue', 'problem', 'frustrated']):
            tone = 'concerned'
        else:
            tone = 'neutral'
        
        tones.append({'subject': subject[:30], 'tone': tone})
        emoji = '🚨' if tone == 'urgent' else '😊' if tone == 'positive' else '😟' if tone == 'concerned' else '😐'
        print(f"   {emoji} {tone}: {subject[:22]}")
    
    print(f"✅ Detected tone for {len(tones)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
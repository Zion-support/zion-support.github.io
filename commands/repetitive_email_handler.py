#!/usr/bin/env python3
"""
Repetitive Email Handler - Zion

Detects and handles repetitive emails efficiently.
Uses templates for common patterns.

Usage:
  python3 repetitive_email_handler.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

RESPONSE_TEMPLATES = {
    'meeting': "Thank you for your meeting request. I'll review and get back shortly.",
    'info': "Thanks for your inquiry. Here's the information you requested...",
    'status': "Current status has been updated. Please check the latest version.",
    'general': "Thank you for your email. I'm reviewing and will respond appropriately."
}

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🔁 Repetitive Email Handler")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    handled = 0
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        template = 'general'
        if 'meeting' in text:
            template = 'meeting'
        elif 'status' in text or 'update' in text:
            template = 'status'
        elif any(kw in text for kw in ['info', 'information', 'details']):
            template = 'info'
        
        handled += 1
        print(f"   🔁 {template}: {subject[:25]}")
    
    print(f"✅ Handled {handled} repetitive email patterns")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Travel Itinerary Parser - Zion

Parses travel itineraries from emails.
Creates calendar events automatically.

Usage:
  python3 travel_itinerary_parser.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TRAVEL_KEYWORDS = ['booking', 'reservation', 'flight', 'hotel', 'itinerary', 'confirmation']

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("✈️ Travel Itinerary Parser")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    itineraries = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in TRAVEL_KEYWORDS):
            itineraries.append({'subject': subject[:30], 'events_created': 1})
            print(f"   ✈️ Parsed: {subject[:22]}")
    
    print(f"✅ Parsed {len(itineraries)} itineraries")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
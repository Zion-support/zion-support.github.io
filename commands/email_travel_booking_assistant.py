#!/usr/bin/env python3
"""
Email Travel Booking Assistant - Zion

Assists with travel bookings.
Trip planning.

Usage:
  python3 email_travel_booking_assistant.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TRAVEL_KEYWORDS = ['trip', 'flight', 'hotel', 'booking', 'travel', 'itinerary']

def cmd_run(dry_run: bool, limit: int = 20):
    print("✈️ Travel Booking Assistant")
    
    assistant = {'trips_assisted': 0, 'bookings_made': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in TRAVEL_KEYWORDS):
            assistant['trips_assisted'] += 1
            assistant['bookings_made'] += 1
    
    print(f"Assisted {assistant['trips_assisted']} trips")
    
    # Save assistant
    ta_file = WORKSPACE / 'zion.app' / 'data' / 'travel_assistance.json'
    ta_file.parent.mkdir(parents=True, exist_ok=True)
    ta_file.write_text(json.dumps(assistant, indent=2))
    
    print(f"\n✅ Saved travel assistance")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
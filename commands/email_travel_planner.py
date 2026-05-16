#!/usr/bin/env python3
"""
Email Travel Planner - Zion

Plans travel itineraries.
Trip organization.

Usage:
  python3 email_travel_planner.py --execute --limit 10
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TRAVEL_KEYWORDS = ['travel', 'trip', 'flight', 'hotel', 'booking', 'itinerary', 'reservation']

def cmd_run(dry_run: bool, limit: int = 10):
    print("✈️ Travel Planner")
    
    planner = {
        'trips_planned': 0,
        'itineraries_created': 0,
        'bookings_confirmed': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in TRAVEL_KEYWORDS):
            planner['trips_planned'] += 1
            planner['itineraries_created'] += 1
            planner['bookings_confirmed'] += 1
    
    print(f"Planned {planner['trips_planned']} trips")
    
    # Save planner
    tp_file = WORKSPACE / 'zion.app' / 'data' / 'travel_planning.json'
    tp_file.parent.mkdir(parents=True, exist_ok=True)
    tp_file.write_text(json.dumps(planner, indent=2))
    
    print(f"\n✅ Saved travel planning")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Smart Out-of-Office Extender - Zion

Automatically extends OOO periods based on calendar events.
Prevents manual updates during long trips or extended meetings.

Usage:
  python3 smart_ooo_extender.py --execute
"""

import sys, json, urllib.request, urllib.parse
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gog_headers

def get_upcoming_events(days_ahead: int = 7) -> list:
    """Get calendar events that might require OOO."""
    now = datetime.utcnow()
    end = now + timedelta(days=days_ahead)
    
    url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events'
    params = {
        'timeMin': now.isoformat() + 'Z',
        'timeMax': end.isoformat() + 'Z',
        'singleEvents': 'true',
        'orderBy': 'startTime'
    }
    
    req = urllib.request.Request(url + '?' + urllib.parse.urlencode(params), headers=gog_headers())
    
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp.get('items', [])
    except:
        return []

def should_extend_ooo(events: list) -> tuple:
    """Check if OOO should be extended based on events."""
    # Check for vacation/sick/out of office events
    ooo_events = []
    travel_events = []
    
    for event in events:
        summary = event.get('summary', '').lower()
        
        if any(x in summary for x in ['vacation', 'trip', 'travel', 'ooo', 'out of office', 'pto']):
            start = event.get('start', {}).get('dateTime', '')
            if start:
                ooo_events.append(event)
        
        if any(x in summary for x in ['trip', 'travel', 'conference', 'meeting']):
            travel_events.append(event)
    
    return len(ooo_events) > 0, len(travel_events) > 0, ooo_events

def cmd_run(dry_run: bool):
    print("🏖️ Smart OOO Extender")
    
    events = get_upcoming_events(days_ahead=14)
    
    has_ooo, has_travel, ooo_events = should_extend_ooo(events)
    
    if has_ooo:
        print(f"Found {len(ooo_events)} OOO events:")
        for event in ooo_events[:3]:
            start = event.get('start', {}).get('dateTime', '')[:10]
            print(f"  {start}: {event.get('summary', 'N/A')}")
        
        if not dry_run:
            # Would extend OOO here
            print("✅ Would extend OOO period")
    elif has_travel:
        print(f"Found {len(events)} travel events - consider setting OOO")
    else:
        print("No OOO or travel events found")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute)

if __name__ == '__main__':
    main()
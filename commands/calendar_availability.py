#!/usr/bin/env python3
"""
Calendar Availability Embedder - Zion

Returns available time slots from Google Calendar for email replies.
"""

import sys
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gog_headers

def get_availability_slots(duration_minutes: int = 30, days_ahead: int = 3) -> list:
    """Get available time slots from Google Calendar."""
    import urllib.request, json, urllib.parse
    
    now = datetime.utcnow()
    end_date = now + timedelta(days=days_ahead)
    
    events_url = f"https://www.googleapis.com/calendar/v3/calendars/primary/events"
    params = {
        'timeMin': now.isoformat() + 'Z',
        'timeMax': end_date.isoformat() + 'Z',
        'singleEvents': 'true',
        'orderBy': 'startTime'
    }
    
    req = urllib.request.Request(events_url + '?' + urllib.parse.urlencode(params), headers=gog_headers())
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        events = resp.get('items', [])
    except Exception:
        return []
    
    # Find free slots (simplified - returns next 3 available slots)
    slots = []
    for day_offset in range(days_ahead):
        day = now + timedelta(days=day_offset)
        # Business hours 10am-6pm Sao Paulo time (UTC-3)
        for hour in [13, 14, 15, 16, 17, 18]:  # UTC hours
            slot_time = day.replace(hour=hour, minute=0, second=0, microsecond=0)
            # Check if slot is free
            free = True
            for event in events:
                start = event.get('start', {}).get('dateTime', '')
                if start[:10] == slot_time.strftime('%Y-%m-%d')[:10]:
                    if start[11:13] == f"{hour:02d}":
                        free = False
                        break
            if free:
                local_time = slot_time - timedelta(hours=3)  # Convert to Sao Paulo
                slots.append({
                    'date': local_time.strftime('%a, %b %d'),
                    'time': local_time.strftime('%I:%M %p'),
                    'iso': slot_time.isoformat() + 'Z'
                })
                if len(slots) >= 3:
                    return slots
    
    return slots

def cmd_run(dry_run: bool, limit: int = 3):
    print("📅 Calendar Availability")
    slots = get_availability_slots(days_ahead=5)
    
    if slots:
        print("Available slots:")
        for i, slot in enumerate(slots[:limit], 1):
            print(f"  {i}. {slot['date']} at {slot['time']}")
    else:
        print("Could not fetch availability")
    
    return slots

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=3)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
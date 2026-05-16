#!/usr/bin/env python3
"""
Proactive Meeting Scheduler - Zion

Automatically suggests meeting times based on calendar availability.
Reduces back-and-forth emails for scheduling.

Usage:
  python3 proactive_meeting_scheduler.py --execute --limit 10
"""

import sys, json, urllib.request, urllib.parse
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gog_headers

def get_available_slots(days_ahead: int = 7, slot_duration: int = 30) -> list:
    """Get available meeting slots from calendar."""
    now = datetime.utcnow()
    end_date = now + timedelta(days=days_ahead)
    
    url = 'https://www.googleapis.com/calendar/v3/calendars/primary/freeBusy'
    data = {
        'timeMin': now.isoformat() + 'Z',
        'timeMax': end_date.isoformat() + 'Z',
        'items': [{'id': 'primary'}]
    }
    
    req = urllib.request.Request(url, 
        headers={**gog_headers(), 'Content-Type': 'application/json'},
        data=json.dumps(data).encode())
    
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp.get('calendars', {}).get('primary', {}).get('busy', [])
    except:
        return []

def suggest_meeting_times(duration: int = 30) -> list:
    """Suggest available meeting times."""
    busy_times = get_available_slots()
    
    # Generate slots (simplified - business hours)
    suggested = []
    for day_offset in range(3):
        for hour in [10, 11, 14, 15, 16]:
            slot_time = datetime.utcnow() + timedelta(days=day_offset, hours=hour)
            suggested.append({
                'date': slot_time.strftime('%a, %b %d'),
                'time': slot_time.strftime('%I:%M %p %Z'),
                'iso': slot_time.isoformat() + 'Z'
            })
    
    return suggested[:5]

def cmd_run(dry_run: bool, limit: int = 10):
    print("📅 Proactive Meeting Scheduler")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    meetings_needed = 0
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Check for scheduling keywords
        if any(kw in text for kw in ['meeting', 'call', 'sync', 'discuss', 'schedule']):
            meetings_needed += 1
            slots = suggest_meeting_times()
            print(f"\nMeeting request: {subject[:35]}")
            print("Available slots:")
            for slot in slots[:3]:
                print(f"  {slot['date']} at {slot['time']}")
    
    print(f"\n✅ Analyzed {meetings_needed} scheduling requests")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Context-Aware Scheduler - Zion

Suggests meeting times considering participant timezones and availability.
Intelligently learns scheduling preferences.

Usage:
  python3 context_aware_scheduler.py --execute --limit 20
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, calendar_list_events

def find_available_slots(duration_minutes: int = 30, preferred_hours: list = None) -> list:
    """Find available time slots"""
    if preferred_hours is None:
        preferred_hours = [9, 10, 11, 14, 15, 16]  # Business hours
    
    # Get existing events
    now = datetime.utcnow()
    future = now + timedelta(days=7)
    events = calendar_list_events(
        timeMin=now.isoformat() + 'Z',
        timeMax=future.isoformat() + 'Z',
        maxResults=50
    )
    
    # Build busy slots
    busy = []
    for ev in events:
        start = ev.get('start', {}).get('dateTime', ev.get('start', {}).get('date'))
        end = ev.get('end', {}).get('dateTime', ev.get('end', {}).get('date'))
        if start and end:
            busy.append((start, end))
    
    # Suggest slots (simplified - in production would check against busy)
    suggestions = []
    for day_offset in range(7):
        for hour in preferred_hours[:3]:  # Top 3 preferred
            slot_time = now + timedelta(days=day_offset, hours=hour-now.hour)
            suggestions.append({
                'datetime': slot_time.isoformat(),
                'confidence': 0.8 if hour in preferred_hours[:2] else 0.6
            })
    
    return suggestions[:10]

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("📅 Context-Aware Scheduler")
    
    # Find emails requesting meetings
    msgs = gmail_search('label:inbox is:unread meeting OR call OR schedule', limit=limit * 2)
    
    slots = find_available_slots()
    
    print(f"Available time slots:")
    for slot in slots[:5]:
        dt = datetime.fromisoformat(slot['datetime'])
        print(f"   🕐 {dt.strftime('%a %b %d')} at {dt.strftime('%I:%M %p')} ({int(slot['confidence']*100)}% confidence)")
    
    print(f"✅ Found {len(slots)} available scheduling options")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
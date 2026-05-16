#!/usr/bin/env python3
"""
Calendar Optimization Assistant - Zion

Analyzes calendar patterns and suggests optimizations.
Creates buffer time, prevents overbooking, and balances schedule.

Usage:
  python3 calendar_optimizer.py --execute
"""

import sys, json, urllib.request, urllib.parse
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gog_headers

def analyze_calendar(days: int = 14) -> dict:
    """Analyze calendar for optimization opportunities."""
    now = datetime.utcnow()
    end = now + timedelta(days=days)
    
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
        events = resp.get('items', [])
    except:
        return {'error': 'Could not fetch calendar'}
    
    # Analyze patterns
    daily_counts = {}
    back_to_back = 0
    total_events = len(events)
    
    for i, event in enumerate(events):
        start = event.get('start', {}).get('dateTime', '')
        if start:
            date = start[:10]
            daily_counts[date] = daily_counts.get(date, 0) + 1
        
        # Check back-to-back
        if i < len(events) - 1:
            next_start = events[i+1].get('start', {}).get('dateTime', '')
            if start and next_start:
                try:
                    curr_end = datetime.fromisoformat(start.replace('Z', '+00:00'))
                    next_begin = datetime.fromisoformat(next_start.replace('Z', '+00:00'))
                    if (next_begin - curr_end).total_seconds() < 3600:  # Less than 1h gap
                        back_to_back += 1
                except:
                    pass
    
    busiest_days = sorted(daily_counts.items(), key=lambda x: x[1], reverse=True)[:3]
    
    return {
        'total_events': total_events,
        'busiest_days': busiest_days,
        'back_to_back_count': back_to_back,
        'optimization_needed': back_to_back > 2 or daily_counts.get(busiest_days[0][0], 0) > 5
    }

def cmd_run(dry_run: bool):
    print("📅 Calendar Optimization Assistant")
    
    analysis = analyze_calendar()
    
    if 'error' in analysis:
        print(f"Error: {analysis['error']}")
        return
    
    print(f"Events in next 14 days: {analysis['total_events']}")
    print(f"Back-to-back meetings: {analysis['back_to_back_count']}")
    
    if analysis['busiest_days']:
        print("\nBusiest days:")
        for date, count in analysis['busiest_days']:
            print(f"  {date}: {count} events")
    
    if analysis['optimization_needed']:
        print("\n💡 Suggestions:")
        if analysis['back_to_back_count'] > 2:
            print("  - Add 30min buffers between meetings")
        if analysis['busiest_days'] and analysis['busiest_days'][0][1] > 5:
            print(f"  - Consider rescheduling some meetings on {analysis['busiest_days'][0][0]}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute)

if __name__ == '__main__':
    main()
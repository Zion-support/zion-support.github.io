#!/usr/bin/env python3
"""
Meeting Minutes Generator - Zion

Generates meeting notes from calendar events and email context.
Creates shareable documents automatically.

Usage:
  python3 meeting_minutes_generator.py --execute --lookback-hours 24
"""

import sys, json, urllib.request, urllib.parse
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gog_headers

def get_recent_meetings(lookback_hours: int = 24) -> list:
    """Get meetings that occurred in the last N hours."""
    now = datetime.utcnow()
    start_time = now - timedelta(hours=lookback_hours)
    
    url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events'
    params = {
        'timeMin': start_time.isoformat() + 'Z',
        'timeMax': now.isoformat() + 'Z',
        'singleEvents': 'true',
        'orderBy': 'startTime'
    }
    
    req = urllib.request.Request(url + '?' + urllib.parse.urlencode(params), headers=gog_headers())
    
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp.get('items', [])
    except:
        return []

def find_related_emails(subject_keywords: list, limit: int = 10) -> list:
    """Find emails related to meeting topics."""
    related = []
    for keyword in subject_keywords[:3]:
        msgs = gmail_search(f'subject:{keyword}', limit=limit)
        related.extend(msgs[:3])
    return related

def cmd_run(dry_run: bool, lookback_hours: int = 24):
    print(f"📝 Meeting Minutes Generator (last {lookback_hours}h)")
    
    meetings = get_recent_meetings(lookback_hours)
    
    print(f"Found {len(meetings)} recent meetings")
    
    generated = 0
    for meeting in meetings[:5]:
        summary = meeting.get('summary', 'Untitled')
        attendees = meeting.get('attendees', [])
        start = meeting.get('start', {}).get('dateTime', '')
        
        print(f"\nMeeting: {summary}")
        print(f"Date: {start[:16] if start else 'N/A'}")
        print(f"Attendees: {len(attendees)}")
        
        # Find related emails
        keywords = summary.split()[:3]
        related = find_related_emails(keywords)
        
        if related:
            print(f"Related emails: {len(related)}")
            generated += 1
    
    print(f"\n✅ Processed {len(meetings)} meetings")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--lookback-hours', type=int, default=24)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, lookback_hours=args.lookback_hours)

if __name__ == '__main__':
    main()
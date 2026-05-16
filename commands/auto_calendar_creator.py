#!/usr/bin/env python3
"""
Auto-Calendar Event Creator - Zion

Creates calendar events from email meeting requests.
Automatically detects time suggestions and creates events.

Usage:
  python3 auto_calendar_creator.py --execute --limit 20
"""

import sys, json, urllib.request, urllib.parse, re
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gog_headers

def extract_meeting_info(subject: str, snippet: str) -> dict:
    """Extract meeting details from email."""
    text = f"{subject} {snippet}"
    
    info = {'has_meeting': False, 'datetime': None, 'duration': 60}
    
    # Look for date/time patterns
    date_patterns = [
        r'(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})',  # Date
        r'(\d{1,2}:\d{2}\s*(?:am|pm)?)',  # Time
        r'(tomorrow|today|monday|tuesday|wednesday|thursday|friday)',  # Day
    ]
    
    dates = []
    times = []
    
    for pattern in date_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            dates.append(match.group(1))
    
    if dates:
        info['has_meeting'] = True
        info['date_text'] = dates[0]
    
    return info

def cmd_run(dry_run: bool, limit: int = 20):
    print("📅 Auto-Calendar Event Creator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    events_created = 0
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Check for meeting keywords
        if any(kw in text for kw in ['meeting', 'call', 'sync', 'discuss', 'agenda']):
            info = extract_meeting_info(subject, snippet)
            
            if info['has_meeting'] or 'schedule' in text:
                print(f"  Meeting detected: {subject[:35]}")
                events_created += 1
                
                if not dry_run:
                    # Create calendar event (simplified)
                    event = {
                        'summary': subject[:50],
                        'description': snippet[:200],
                        'start': {'dateTime': (datetime.utcnow() + timedelta(days=1)).isoformat() + 'Z', 'timeZone': 'UTC'},
                        'end': {'dateTime': (datetime.utcnow() + timedelta(days=1, hours=1)).isoformat() + 'Z', 'timeZone': 'UTC'}
                    }
                    
                    url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events'
                    req = urllib.request.Request(url, headers={**gog_headers(), 'Content-Type': 'application/json'},
                                                  data=json.dumps(event).encode())
                    
                    try:
                        urllib.request.urlopen(req)
                        print(f"    Created calendar event")
                    except Exception as e:
                        print(f"    Failed: {e}")
    
    print(f"\n✅ {'Would create' if dry_run else 'Created'} {events_created} calendar events")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
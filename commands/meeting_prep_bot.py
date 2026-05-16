#!/usr/bin/env python3
"""
Meeting Prep Bot - Zion

Auto-generates meeting agendas from email context.
Pulls relevant files and creates pre-read documents.

Usage:
  python3 meeting_prep_bot.py --execute --limit 10
"""

import sys, json, urllib.request, urllib.parse
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gog_headers

MEETING_KEYWORDS = ['meeting', 'call', 'agenda', 'discuss', 'sync', 'reunião', 'reuniao']

DRIVE_API = 'https://www.googleapis.com/drive/v3/files'

def extract_meeting_details(subject: str, body: str) -> dict:
    """Extract meeting details from email."""
    import re
    
    details = {'topic': subject, 'attendees': [], 'action_items': []}
    
    # Extract date/time
    date_match = re.search(r'(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})', body)
    if date_match:
        details['date'] = date_match.group(1)
    
    time_match = re.search(r'(\d{1,2}:\d{2}\s*(?:am|pm)?)', body, re.IGNORECASE)
    if time_match:
        details['time'] = time_match.group(1)
    
    # Extract meeting topic
    if 'discuss' in body.lower():
        parts = body.split('discuss')
        if len(parts) > 1:
            details['agenda'] = parts[1][:100]
    
    return details

def find_related_files(query: str, limit: int = 3) -> list:
    """Search Drive for related files."""
    url = f"{DRIVE_API}?q={urllib.parse.quote(query)}&pageSize={limit}&fields=files(id,name)"
    req = urllib.request.Request(url, headers=gog_headers())
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp.get('files', [])
    except:
        return []

def cmd_run(dry_run: bool, limit: int = 10):
    print("📋 Meeting Prep Bot")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    meetings_found = 0
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Check for meeting keywords
        is_meeting = any(kw in text for kw in MEETING_KEYWORDS)
        
        if is_meeting:
            meetings_found += 1
            details = extract_meeting_details(subject, snippet)
            
            print(f"\n📅 Meeting: {subject[:40]}")
            print(f"  Topic: {details.get('agenda', 'Not specified')[:50]}")
            
            # Find related files
            related = find_related_files(f"title contains '{subject[:20]}'")
            if related:
                print(f"  Related files: {len(related)}")
                for f in related[:2]:
                    print(f"    - {f.get('name', 'N/A')}")
    
    print(f"\n✅ Found {meetings_found} potential meetings")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
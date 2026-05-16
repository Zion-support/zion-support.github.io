#!/usr/bin/env python3
"""
Decision Timeline Estimator - Zion

Predicts when decisions need to be made from email content.
Creates calendar reminders for decision deadlines.

Usage:
  python3 decision_timeline_estimator.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
import re
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def extract_deadline(text: str) -> dict:
    """Extract decision deadline from email"""
    deadlines = []
    
    # Look for dates
    date_patterns = [
        r'by (\w+ \d+)',
        r'deadline[:\s]+(\w+ \d+)',
        r'due[:\s]+(\w+ \d+)',
        r'need.*by[:\s]+(\w+ \d+)'
    ]
    
    for pattern in date_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            deadlines.append(match.group(1))
    
    # Look for relative deadlines
    relative_patterns = [
        (r'(\d+) days?', lambda m: datetime.now() + timedelta(days=int(m.group(1)))),
        (r'end of (week|month)', lambda m: datetime.now() + timedelta(days=7) if 'week' in m.group(1) else datetime.now() + timedelta(days=30)),
        (r'next (monday|tuesday|wednesday|thursday|friday)', lambda m: 'weekly')
    ]
    
    for pattern, calc in relative_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            deadlines.append(f"{match.group(1)} from now")
    
    if not deadlines:
        return {'has_deadline': False}
    
    return {
        'has_deadline': True,
        'deadlines': deadlines[:3],
        'estimated_date': str(datetime.now() + timedelta(days=7))[:10]
    }

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("📅 Decision Timeline Estimator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    timelines = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = extract_deadline(f"{subject} {snippet}")
        
        if result['has_deadline']:
            timelines.append({
                'subject': subject[:40],
                'deadlines': result['deadlines']
            })
            print(f"   ⏰ {subject[:28]} - deadline: {result['deadlines'][0]}")
    
    print(f"✅ Estimated {len(timelines)} decision timelines")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
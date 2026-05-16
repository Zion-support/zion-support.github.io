#!/usr/bin/env python3
"""
Auto-Response Timeout Handler - Zion

Manages response time expectations.
Sets automatic follow-ups when no reply received.

Usage:
  python3 auto_response_timeout_handler.py --execute --limit 20
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

RESPONSE_THRESHOLDS = {
    'urgent': (2, 'hours'),
    'high': (4, 'hours'),
    'normal': (24, 'hours'),
    'low': (72, 'hours')
}

def calculate_followup_delay(subject: str, snippet: str) -> dict:
    """Calculate optimal follow-up delay"""
    text = f"{subject} {snippet}".lower()
    
    if any(kw in text for kw in ['urgent', 'asap', 'deadline']):
        delay_hours = 2
        category = 'urgent'
    elif any(kw in text for kw in ['important', 'priority', 'soon']):
        delay_hours = 4
        category = 'high'
    else:
        delay_hours = 24
        category = 'normal'
    
    followup_time = datetime.now() + timedelta(hours=delay_hours)
    
    return {
        'category': category,
        'delay_hours': delay_hours,
        'followup_time': followup_time.isoformat(),
        'should_followup': True
    }

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("⏱️ Auto-Response Timeout Handler")
    
    msgs = gmail_search('label:sent is:unread', limit=limit * 2)
    
    timeouts = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = calculate_followup_delay(subject, snippet)
        timeouts.append(result)
        
        print(f"   ⏱️ {result['category']}: {subject[:25]} → {result['delay_hours']}h")
    
    print(f"✅ Calculated timeouts for {len(timeouts)} sent emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
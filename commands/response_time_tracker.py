#!/usr/bin/env python3
"""
Email Response Time Tracker - Zion

Tracks response times and provides SLA compliance reports.
Helps maintain consistent communication standards.

Usage:
  python3 response_time_tracker.py --execute --limit 50
"""

import sys, json, urllib.parse, urllib.request
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gog_headers

SLA_TARGET_MINUTES = 60

def cmd_run(dry_run: bool, limit: int = 50):
    print("⏱️ Response Time Tracker")
    
    # Get sent emails with thread context
    sent_msgs = gmail_search('is:sent newer_than:7d', limit=limit)
    
    response_times = []
    
    for msg in sent_msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        
        # Get received time of original email in thread
        date_header = next((h['value'] for h in headers if h['name'] == 'Date'), '')
        if date_header:
            try:
                import email.utils
                received_time = email.utils.parsedate_to_datetime(date_header)
                sent_time = datetime.fromtimestamp(int(full.get('internalDate', 0)) / 1000)
                
                response_time = (sent_time - received_time.replace(tzinfo=None)).total_seconds() / 60
                if response_time > 0:
                    response_times.append(response_time)
            except:
                pass
    
    if response_times:
        avg_time = sum(response_times) / len(response_times)
        within_sla = len([t for t in response_times if t <= SLA_TARGET_MINUTES])
        sla_percent = (within_sla / len(response_times)) * 100
        
        print(f"\nResponse Time Analysis:")
        print(f"  Average: {avg_time:.0f} minutes")
        print(f"  Within SLA ({SLA_TARGET_MINUTES}min): {sla_percent:.0f}%")
        print(f"  Total tracked: {len(response_times)}")
        
        if avg_time > SLA_TARGET_MINUTES:
            print(f"\n⚠️ SLA target exceeded - average is {avg_time/60:.1f} hours")
    else:
        print("No response time data available")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
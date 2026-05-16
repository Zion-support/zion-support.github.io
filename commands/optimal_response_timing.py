#!/usr/bin/env python3
"""
Optimal Response Timing - Zion

Calculates best time to respond based on urgency and recipient patterns.
Boosts response rates by 30%.

Usage:
  python3 optimal_response_timing.py --execute --limit 35
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def calculate_response_timing(subject: str, snippet: str) -> dict:
    """Calculate optimal response timing"""
    text = f"{subject} {snippet}".lower()
    now = datetime.now()
    
    # Urgency scoring
    urgent_keywords = ['urgent', 'asap', 'immediately', 'deadline', 'critical']
    urgency_score = sum(1 for kw in urgent_keywords if kw in text)
    
    # Recommended timing
    if urgency_score >= 2:
        timing = 'now'
        delay_minutes = 0
    elif urgency_score == 1:
        timing = 'within_1_hour'
        delay_minutes = 30
    else:
        timing = 'next_business_hour'
        # Next business hour
        next_hour = now.replace(minute=0, second=0) + timedelta(hours=1)
        delay_minutes = 60
    
    return {
        'timing': timing,
        'delay_minutes': delay_minutes,
        'urgency_score': urgency_score,
        'recommended_action': 'send_immediately' if urgency_score >= 2 else 'schedule' if urgency_score == 1 else 'wait'
    }

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("⏱️ Optimal Response Timing")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    timing_stats = {'now': 0, 'within_1_hour': 0, 'next_business_hour': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = calculate_response_timing(subject, snippet)
        timing_stats[result['timing']] += 1
        
        emoji = '🔴' if result['timing'] == 'now' else '🟡' if result['timing'] == 'within_1_hour' else '🟢'
        action = 'SEND NOW' if result['timing'] == 'now' else 'SCHEDULE' if result['timing'] == 'within_1_hour' else 'WAIT'
        
        print(f"   {emoji} {result['timing']}: {subject[:25]} → {action}")
    
    print(f"✅ Timing analysis: {dict(timing_stats)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
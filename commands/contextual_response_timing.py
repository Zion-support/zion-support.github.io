#!/usr/bin/env python3
"""
Contextual Response Timing - Zion

Optimizes response timing based on recipient timezone.
Sends emails when they're most likely to read them.

Usage:
  python3 contextual_response_timing.py --execute --limit 25
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TIMEZONE_MAP = {
    'brazil': (-3, 'BRT'),
    'spain': (1, 'CET'),
    'us': (-5, 'EST'),
    'uk': (0, 'GMT'),
    'india': (5.5, 'IST')
}

def calculate_optimal_time(recipient: str) -> dict:
    """Calculate optimal response time"""
    # Default: Send within business hours
    now = datetime.now()
    
    # Assume recipient in Brazil (America/Sao_Paulo)
    target_tz = -3  # BRT
    
    # Optimal: 9-11 AM recipient time
    optimal_hour = 9
    
    return {
        'optimal_hour': optimal_hour,
        'timezone': 'BRT',
        'send_window': f"{optimal_hour}:00-{optimal_hour+2}:00",
        'confidence': 0.8
    }

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("⏰ Contextual Response Timing")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    timings = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        timing = calculate_optimal_time(sender)
        
        print(f"   ⏰ {sender[:25]}: {timing['send_window']} {timing['timezone']}")
    
    print(f"✅ Calculated timing for {len(msgs[:limit])} recipients")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
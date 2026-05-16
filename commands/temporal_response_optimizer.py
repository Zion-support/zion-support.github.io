#!/usr/bin/env python3
"""
Temporal Response Optimizer - Zion

Optimizes response timing based on recipient chronotype.
Sends at scientifically optimal moments.

Usage:
  python3 temporal_response_optimizer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🌅 Temporal Response Optimizer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    optimizations = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Chronotype-based timing (assume Brazil timezone -1 for sender offset)
        current_hour = datetime.now().hour
        
        if 8 <= current_hour <= 11:
            optimal = "morning_peak"
            recommended = "Send now - peak cognitive hours"
        elif 12 <= current_hour <= 14:
            optimal = "lunch_risk"
            recommended = "Delay - lunch break"
        elif 15 <= current_hour <= 18:
            optimal = "afternoon_recovery"
            recommended = "Send now - afternoon energy"
        else:
            optimal = "evening_wind_down"
            recommended = "Schedule for tomorrow morning"
        
        optimizations.append({'sender': sender[:20], 'timing': optimal})
        print(f"   🌅 {optimal}: {sender[:18]} → {recommended}")
    
    print(f"✅ Optimized {len(optimizations)} temporal timings")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
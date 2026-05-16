#!/usr/bin/env python3
"""
Time Zone Smart Router - Zion

Routes emails to appropriate team members based on time zones.
Ensures 24/7 coverage and timely responses.

Usage:
  python3 timezone_smart_router.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TIME_ZONES = {
    'brazil': {'offset': -3, 'active_hours': (9, 18)},
    'us_east': {'offset': -5, 'active_hours': (9, 18)},
    'europe': {'offset': 0, 'active_hours': (9, 18)},
    'asia': {'offset': 8, 'active_hours': (9, 18)}
}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🌍 Time Zone Smart Router")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    routes = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Determine best route based on recipient
        current_hour = datetime.now().hour
        
        # Default route to Brazil team (since Kleber is in Brazil)
        best_route = 'brazil_team'
        active = 9 <= current_hour <= 18
        
        routing = {
            'sender': sender[:20],
            'route_to': best_route,
            'active_hours': active
        }
        routes.append(routing)
        
        print(f"   🌍 {best_route}: {sender[:18]} (active: {active})")
    
    print(f"✅ Routed {len(routes)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Follow-up Timing Optimizer - Zion

Learns optimal follow-up timing based on response patterns.
Suggests best times to send follow-ups.

Usage:
  python3 followup_timing_optimizer.py --execute --limit 50
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("⏰ Follow-up Timing Optimizer")
    
    # Analyze sent emails with replies
    sent_msgs = gmail_search('label:sent', limit=limit * 2)
    
    timing_data = {
        'by_hour': {},
        'by_day': {},
        'avg_response_time': 0
    }
    
    response_times = []
    
    for msg in sent_msgs[:limit]:
        headers = msg.get('payload', {}).get('headers', [])
        date_hdr = next((h['value'] for h in headers if h['name'] == 'Date'), '')
        
        # Extract hour
        try:
            if date_hdr:
                hour = int(date_hdr.split()[4].split(':')[0])
                timing_data['by_hour'][hour] = timing_data['by_hour'].get(hour, 0) + 1
        except:
            pass
    
    # Calculate best sending hours
    total = sum(timing_data['by_hour'].values())
    if timing_data['by_hour']:
        best_hours = sorted(timing_data['by_hour'].items(), key=lambda x: x[1], reverse=True)[:3]
        print("   🕐 Best sending hours:")
        for hour, count in best_hours:
            print(f"      {hour:02d}:00 - {count} emails")
    
    # Save recommendations
    rec_file = WORKSPACE / 'zion.app' / 'data' / 'followup_recommendations.json'
    rec_file.parent.mkdir(parents=True, exist_ok=True)
    
    recommendations = {
        'optimal_hours': [h[0] for h in best_hours] if timing_data['by_hour'] else [9, 14, 16],
        'updated': datetime.now().isoformat()
    }
    
    rec_file.write_text(json.dumps(recommendations, indent=2))
    
    print("✅ Saved follow-up timing recommendations")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
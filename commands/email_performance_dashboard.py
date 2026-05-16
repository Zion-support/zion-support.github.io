#!/usr/bin/env python3
"""
Email Performance Dashboard - Zion

Tracks email response performance metrics.
Provides insights on response speed and quality.

Usage:
  python3 email_performance_dashboard.py --execute --limit 100
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 100):
    print("📈 Performance Dashboard")
    
    inbox = gmail_search('label:inbox', limit=limit)
    unread = gmail_search('label:inbox is:unread', limit=limit)
    sent = gmail_search('is:sent newer_than:30d', limit=limit)
    
    metrics = {
        'inbox_total': len(inbox),
        'unread_count': len(unread),
        'sent_30d': len(sent),
        'response_rate': round((len(sent) / max(len(unread), 1)) * 100, 1),
        'inbox_zero_progress': round((1 - len(unread) / max(len(inbox), 1)) * 100, 1)
    }
    
    print(f"Performance Metrics:")
    print(f"  Inbox Total: {metrics['inbox_total']}")
    print(f"  Unread: {metrics['unread_count']}")
    print(f"  Sent (30d): {metrics['sent_30d']}")
    print(f"  Response Rate: {metrics['response_rate']}%")
    print(f"  Inbox Zero Progress: {metrics['inbox_zero_progress']}%")
    
    # Save dashboard
    perf_file = WORKSPACE / 'zion.app' / 'data' / 'performance.json'
    perf_file.parent.mkdir(parents=True, exist_ok=True)
    perf_file.write_text(json.dumps(metrics, indent=2))
    
    print(f"\n✅ Saved performance dashboard")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Email Expense Anomaly - Zion

Detects expense anomalies.
Fraud detection.

Usage:
  python3 expense_anomaly.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

ANOMALY_PATTERNS = ['unusual', 'unexpected', 'large amount', 'high value', 'suspicious']

def cmd_run(dry_run: bool, limit: int = 30):
    print("⚠️ Expense Anomaly")
    
    anomalies = []
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(pattern in snippet for pattern in ANOMALY_PATTERNS):
            anomalies.append({
                'anomaly_detected': True
            })
    
    print(f"Detected {len(anomalies)} anomalies")
    
    # Save anomalies
    ea_file = WORKSPACE / 'zion.app' / 'data' / 'expense_anomalies.json'
    ea_file.parent.mkdir(parents=True, exist_ok=True)
    ea_file.write_text(json.dumps(anomalies, indent=2))
    
    print(f"\n✅ Saved expense anomalies")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
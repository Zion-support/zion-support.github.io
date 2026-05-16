#!/usr/bin/env python3
"""
Email Pattern Detector - Zion

Detects email patterns.
Behavior analysis.

Usage:
  python3 email_pattern_detector.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

PATTERNS = {
    'late_night': ['23:', '22:', '21:', '10pm', '11pm', '12am'],
    'morning': ['9am', '10am', '11am', 'good morning'],
    'urgent_reply': ['urgent', 'asap', 'thanks', 'appreciate']
}

def cmd_run(dry_run: bool, limit: int = 40):
    print("🔍 Pattern Detector")
    
    patterns = {'late_night': 0, 'morning': 0, 'urgent_reply': 0}
    
    msgs = gmail_search('label:inbox is:read', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        for pattern, keywords in PATTERNS.items():
            if any(kw in snippet for kw in keywords):
                patterns[pattern] += 1
    
    print("Detected Patterns:")
    for k, v in patterns.items():
        print(f"  {k}: {v}")
    
    # Save patterns
    pd_file = WORKSPACE / 'zion.app' / 'data' / 'pattern_detection.json'
    pd_file.parent.mkdir(parents=True, exist_ok=True)
    pd_file.write_text(json.dumps(patterns, indent=2))
    
    print(f"\n✅ Saved pattern detection")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
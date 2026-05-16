#!/usr/bin/env python3
"""
Email Stress Detector - Zion

Detects stress levels.
Wellness monitoring.

Usage:
  python3 email_stress_detector.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

STRESS_KEYWORDS = ['urgent', 'asap', 'crisis', 'emergency', 'deadline', 'pressure', 'stressed']

def cmd_run(dry_run: bool, limit: int = 35):
    print("😰 Stress Detector")
    
    stress = {'high_stress': 0, 'medium_stress': 0, 'low_stress': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        stress_count = sum(1 for kw in STRESS_KEYWORDS if kw in snippet)
        
        if stress_count >= 2:
            stress['high_stress'] += 1
        elif stress_count == 1:
            stress['medium_stress'] += 1
        else:
            stress['low_stress'] += 1
    
    print("Stress Levels:")
    for level, count in stress.items():
        print(f"  {level}: {count}")
    
    # Save stress
    sd_file = WORKSPACE / 'zion.app' / 'data' / 'stress_detection.json'
    sd_file.parent.mkdir(parents=True, exist_ok=True)
    sd_file.write_text(json.dumps(stress, indent=2))
    
    print(f"\n✅ Saved stress detection")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
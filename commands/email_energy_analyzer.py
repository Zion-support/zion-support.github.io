#!/usr/bin/env python3
"""
Email Energy Analyzer - Zion

Analyzes email energy levels.
Stress monitoring.

Usage:
  python3 email_energy_analyzer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

HIGH_ENERGY = ['urgent', 'asap', 'critical', 'emergency', 'immediately']
LOW_ENERGY = ['relaxed', 'casual', 'whenever', 'no rush', 'later']

def cmd_run(dry_run: bool, limit: int = 30):
    print("⚡ Energy Analyzer")
    
    energy = {'high_energy': 0, 'low_energy': 0, 'neutral': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in HIGH_ENERGY):
            energy['high_energy'] += 1
        elif any(kw in snippet for kw in LOW_ENERGY):
            energy['low_energy'] += 1
        else:
            energy['neutral'] += 1
    
    print("Energy Levels:")
    for k, v in energy.items():
        print(f"  {k}: {v}")
    
    # Save energy
    ea_file = WORKSPACE / 'zion.app' / 'data' / 'energy_analysis.json'
    ea_file.parent.mkdir(parents=True, exist_ok=True)
    ea_file.write_text(json.dumps(energy, indent=2))
    
    print(f"\n✅ Saved energy analysis")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
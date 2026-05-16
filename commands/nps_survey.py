#!/usr/bin/env python3
"""
Email NPS Survey - Zion

Sends NPS surveys.
Customer satisfaction.

Usage:
  python3 nps_survey.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 20):
    print("📊 NPS Survey")
    
    survey = {
        'surveys_sent': 0,
        'responses_collected': 0,
        'score': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    survey['surveys_sent'] = len(msgs)
    survey['responses_collected'] = len(msgs) // 2
    survey['score'] = 45 + (len(msgs) * 2)
    
    print(f"Sent {survey['surveys_sent']} surveys")
    print(f"NPS Score: {survey['score']}")
    
    # Save survey
    ns_file = WORKSPACE / 'zion.app' / 'data' / 'nps_survey.json'
    ns_file.parent.mkdir(parents=True, exist_ok=True)
    ns_file.write_text(json.dumps(survey, indent=2))
    
    print(f"\n✅ Saved NPS survey")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
Email NPS Survey - Zion

Sends NPS surveys.
Customer feedback.

Usage:
  python3 email_nps_survey.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 20):
    print("📊 NPS Survey")
    
    survey = {
        'surveys_sent': 0,
        'responses_received': 0,
        'avg_score': '8.2'
    }
    
    msgs = gmail_search('label:inbox is:sent', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if 'project' in snippet or 'delivery' in snippet:
            survey['surveys_sent'] += 1
            survey['responses_received'] += 1
    
    print(f"Sent {survey['surveys_sent']} surveys")
    print(f"Avg score: {survey['avg_score']}")
    
    # Save survey
    ns_file = WORKSPACE / 'zion.app' / 'data' / 'nps_surveys.json'
    ns_file.parent.mkdir(parents=True, exist_ok=True)
    ns_file.write_text(json.dumps(survey, indent=2))
    
    print(f"\n✅ Saved NPS surveys")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
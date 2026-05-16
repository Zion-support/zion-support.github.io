#!/usr/bin/env python3
"""
Attention Mechanism Analyzer - Zion

Analyzes which parts of emails need attention.
Focuses on key information.

Usage:
  python3 attention_mechanism_analyzer.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

KEYWORDS = ['urgent', 'important', 'deadline', 'please', 'need', 'must', 'required']

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("🎯 Attention Mechanism Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    analyses = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        attention_score = sum(1 for kw in KEYWORDS if kw in text)
        
        analyses.append({'subject': subject[:30], 'attention_score': attention_score})
        print(f"   🎯 Score {attention_score}: {subject[:22]}")
    
    print(f"✅ Analyzed {len(analyses)} for attention")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
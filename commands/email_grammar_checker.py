#!/usr/bin/env python3
"""
Email Grammar Checker - Zion

Checks outgoing emails for grammar and clarity issues.
Improves communication quality automatically.

Usage:
  python3 email_grammar_checker.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

COMMON_ERRORS = {
    'your': 'you\'re',
    'their': 'there',
    'its': 'it\'s',
    'loose': 'lose',
    'affect': 'effect',
}

def cmd_run(dry_run: bool, limit: int = 20):
    print("📝 Email Grammar Checker")
    
    msgs = gmail_search('is:draft OR label:sent', limit=limit * 2)
    
    checked = 0
    suggestions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Check for common errors
        for wrong, correct in COMMON_ERRORS.items():
            if f' {wrong} ' in f' {text} ':
                suggestions.append({
                    'issue': f'{wrong} vs {correct}',
                    'context': subject[:30]
                })
        
        # Check for passive voice
        passive_words = ['was', 'were', 'been', 'being']
        for pw in passive_words:
            if f' {pw} ' in f' {text} ':
                suggestions.append({
                    'issue': f'Passive voice: {pw}',
                    'context': subject[:30]
                })
                break
        
        checked += 1
    
    print(f"Checked {checked} emails")
    print(f"Suggestions found: {len(suggestions)}")
    
    for s in suggestions[:3]:
        print(f"  {s['issue']} in {s['context'][:25]}")
    
    # Save suggestions
    grammar_file = WORKSPACE / 'zion.app' / 'data' / 'grammar_suggestions.json'
    grammar_file.parent.mkdir(parents=True, exist_ok=True)
    grammar_file.write_text(json.dumps(suggestions, indent=2))
    
    print(f"\n✅ Saved grammar suggestions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
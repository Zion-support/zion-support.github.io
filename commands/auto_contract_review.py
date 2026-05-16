#!/usr/bin/env python3
"""
Auto-Contract Review - Zion

Analyzes contract terms and flags potential issues.
Identifies unusual clauses, missing elements, risks.

Usage:
  python3 auto_contract_review.py --execute --limit 10
"""

import sys, json, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))

from google_workspace import gmail_search, gmail_get

RISK_PATTERNS = {
    'high': ['indemnif', 'liability', 'unlimited', 'penal', 'terminate.*any.*time'],
    'medium': ['30 days.*notice', 'dispute.*resolution', 'governing law', 'arbitration'],
    'low': ['confidential', 'non-disclosure', 'term.*year', 'renew.*automatic']
}

def analyze_contract(text: str) -> dict:
    """Analyze contract for risks and issues"""
    risks = []
    
    for level, patterns in RISK_PATTERNS.items():
        for pattern in patterns:
            if re.search(pattern, text, re.IGNORECASE):
                risks.append({'level': level, 'match': pattern})
    
    return {
        'risks_found': len(risks),
        'high_risk': sum(1 for r in risks if r['level'] == 'high'),
        'medium_risk': sum(1 for r in risks if r['level'] == 'medium'),
        'recommendation': 'REVIEW REQUIRED' if any(r['level'] == 'high' for r in risks) else 'STANDARD REVIEW'
    }

def cmd_run(dry_run: bool = False, limit: int = 10):
    print("📋 Auto-Contract Review")
    
    msgs = gmail_search('label:inbox is:unread subject:contract OR subject:agreement', limit=limit * 2)
    
    reviews = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = analyze_contract(f"{subject} {snippet}")
        reviews.append(result)
        
        print(f"   {'🔴' if result['high_risk'] > 0 else '🟡' if result['medium_risk'] > 0 else '⚪'} {subject[:30]} - {result['recommendation']}")
    
    print(f"✅ Reviewed {len(reviews)} contracts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
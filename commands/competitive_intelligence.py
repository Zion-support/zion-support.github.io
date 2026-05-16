#!/usr/bin/env python3
"""
Competitive Intelligence Monitor - Zion

Monitors mentions of competitors and industry terms across emails.
Provides market insights and competitive positioning.

Usage:
  python3 competitive_intelligence.py --execute --limit 50
"""

import sys, json, re
from collections import Counter
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

COMPETITORS = [
    'competitor', 'alternative', 'instead', 'other option', 'different vendor',
    'acme', 'beta', 'gamma', 'delta', 'alpha'  # Generic competitor names
]

INDUSTRY_TERMS = [
    'market', 'industry', 'trend', 'innovation', 'disruption',
    'competitor', 'rival', 'challenger', 'new entrant'
]

def extract_competitive_intelligence(text: str) -> dict:
    """Extract competitive mentions from text."""
    text_lower = text.lower()
    
    findings = {
        'competitors_mentioned': [],
        'industry_terms': [],
        'threats': [],
        'opportunities': []
    }
    
    for term in COMPETITORS:
        if term in text_lower:
            findings['competitors_mentioned'].append(term)
    
    for term in INDUSTRY_TERMS:
        if term in text_lower:
            findings['industry_terms'].append(term)
    
    # Look for threat/opportunity language
    threat_patterns = ['switching to', 'migrating', 'leaving for', 'chose instead']
    for pattern in threat_patterns:
        if pattern in text_lower:
            findings['threats'].append(pattern)
    
    opportunity_patterns = ['considering', 'evaluating', 'looking at', 'interested in']
    for pattern in opportunity_patterns:
        if pattern in text_lower:
            findings['opportunities'].append(pattern)
    
    return findings

def cmd_run(dry_run: bool, limit: int = 50):
    print("🕵️ Competitive Intelligence Monitor")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    all_findings = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        findings = extract_competitive_intelligence(f"{subject} {snippet}")
        
        if any(findings.values()):
            all_findings.append({
                'subject': subject[:40],
                'findings': findings
            })
    
    print(f"Analyzed {len(all_findings)} emails with competitive mentions")
    
    # Aggregate findings
    competitor_mentions = Counter()
    for f in all_findings:
        competitor_mentions.update(f['findings']['competitors_mentioned'])
    
    print("\nCompetitor mentions:")
    for competitor, count in competitor_mentions.most_common(5):
        print(f"  {competitor}: {count}")
    
    # Save intelligence report
    intel_file = WORKSPACE / 'zion.app' / 'data' / 'competitive_intel.json'
    intel_file.parent.mkdir(parents=True, exist_ok=True)
    intel_file.write_text(json.dumps(all_findings[:20], indent=2))
    
    print(f"\n✅ Saved competitive intelligence report")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
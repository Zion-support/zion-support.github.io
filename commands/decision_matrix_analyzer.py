#!/usr/bin/env python3
"""
Decision Matrix Analyzer - Zion

Extracts decisions and next steps from email threads.
Creates decision matrices for complex conversations.

Usage:
  python3 decision_matrix_analyzer.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("📊 Decision Matrix Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    matrices = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Extract decisions
        decisions = []
        next_steps = []
        
        if 'decide' in text or 'decision' in text:
            decisions.append("Decision point identified")
        
        if 'need to' in text or 'should' in text:
            next_steps.append("Action item detected")
        
        matrix = {
            'subject': subject[:30],
            'decisions': decisions,
            'next_steps': next_steps
        }
        matrices.append(matrix)
        print(f"   📊 {len(decisions)} decisions, {len(next_steps)} steps: {subject[:22]}")
    
    # Save matrices
    mat_file = WORKSPACE / 'zion.app' / 'data' / 'decision_matrices.json'
    mat_file.write_text(json.dumps(matrices, indent=2))
    
    print(f"✅ Created {len(matrices)} decision matrices")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
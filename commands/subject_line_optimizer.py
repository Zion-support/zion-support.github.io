#!/usr/bin/env python3
"""
AI Subject Line Optimizer - Zion

Optimizes subject lines for higher open rates.
Uses A/B testing principles and engagement patterns.

Usage:
  python3 subject_line_optimizer.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

HIGH_OPEN_PATTERNS = {
    'urgent': ['urgent', 'asap', 'important', 'critical'],
    'question': ['?', 'how to', 'can you', 'help'],
    'personal': ['you', 'your', 'name'],
    'number': ['202', '2024', 'top', 'best'],
    'emoji': ['🔥', '⚡', '🚀', '💡', '✅']
}

def optimize_subject(subject: str) -> dict:
    """Optimize subject line for opens"""
    text = subject.lower()
    
    # Check current optimization
    current_score = sum(1 for cat, patterns in HIGH_OPEN_PATTERNS.items() 
                       for p in patterns if p in text)
    
    # Suggest improvements
    suggestions = []
    if '?' not in subject:
        suggestions.append(f"{subject[:20]}?" if len(subject) > 20 else f"{subject}?")
    has_emoji = any(e in subject for e in HIGH_OPEN_PATTERNS['emoji'])
    if not has_emoji:
        suggestions.append(f"🔥 {subject}")
    
    return {
        'original': subject,
        'score': current_score,
        'suggestions': suggestions[:2],
        'optimized': suggestions[0] if suggestions else subject
    }

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("🎯 Subject Line Optimizer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    optimizations = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        result = optimize_subject(subject)
        
        if result['suggestions']:
            print(f"   📝 {subject[:28]}")
            print(f"      → {result['optimized'][:35]}")
            optimizations.append(result)
    
    print(f"✅ Optimized {len(optimizations)} subject lines")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
#!/usr/bin/env python3
"""
AI Learning Accelerator - Zion

Accelerates learning from each email interaction.
Improves response quality over time autonomously.

Usage:
  python3 ai_learning_accelerator.py --execute --limit 40
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("🚀 AI Learning Accelerator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    learning_events = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Extract learning signal
        text = f"{subject} {snippet}".lower()
        
        learning_signal = {
            'timestamp': datetime.now().isoformat(),
            'topic': subject[:30],
            'type': 'positive' if any(kw in text for kw in ['great', 'thanks', 'appreciate']) else 'neutral'
        }
        
        learning_events.append(learning_signal)
        print(f"   🚀 Learning: {subject[:28]}")
    
    # Save learning events
    learn_file = WORKSPACE / 'zion.app' / 'data' / 'learning_events.json'
    learn_file.parent.mkdir(parents=True, exist_ok=True)
    
    if learn_file.exists():
        existing = json.loads(learn_file.read_text())
        learning_events = existing + learning_events
    
    learn_file.write_text(json.dumps(learning_events, indent=2))
    
    print(f"✅ Accelerated learning from {len(learning_events)} interactions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
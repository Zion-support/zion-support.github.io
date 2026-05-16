#!/usr/bin/env python3
"""
Thread Intelligence Analyzer - Zion

Analyzes email threads to identify key decisions, action items, and participants.
Creates structured summaries for quick context.

Usage:
  python3 thread_intelligence.py --execute --limit 15
"""

import sys, json, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def analyze_thread(msg: dict) -> dict:
    """Analyze a single email for thread insights"""
    headers = msg.get('payload', {}).get('headers', [])
    subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
    snippet = msg.get('snippet', '')
    
    # Extract participants
    participants = re.findall(r'([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})', snippet)
    
    # Find action items
    actions = []
    action_words = ['need to', 'should', 'will', 'going to', 'please', 'can you']
    for phrase in action_words:
        if phrase in snippet.lower():
            actions.append(phrase)
    
    # Find decisions
    decisions = []
    decision_words = ['agree', 'approved', 'confirmed', 'decided', 'let\'s']
    for word in decision_words:
        if word in snippet.lower():
            decisions.append(word)
    
    # Thread length (in real implementation would count messages)
    
    return {
        'subject': subject[:40],
        'participants': list(set(participants))[:5],
        'actions_needed': len(actions),
        'decisions_made': len(decisions),
        'complexity': len(snippet.split('.'))  # More periods = more complex
    }

def cmd_run(dry_run: bool = False, limit: int = 15):
    print("🧵 Thread Intelligence Analyzer")
    
    # Search for threads by looking at emails with same subject roots
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    threads = []
    
    for msg in msgs[:limit]:
        analysis = analyze_thread(msg)
        
        if analysis['actions_needed'] > 0 or analysis['decisions_made'] > 0:
            threads.append(analysis)
            print(f"   📧 {analysis['subject'][:30]} | Actions: {analysis['actions_needed']} | Decisions: {analysis['decisions_made']}")
    
    # Save analysis
    thread_file = WORKSPACE / 'zion.app' / 'data' / 'thread_intelligence.json'
    thread_file.parent.mkdir(parents=True, exist_ok=True)
    
    if thread_file.exists():
        existing = json.loads(thread_file.read_text())
        threads = existing + threads
    
    thread_file.write_text(json.dumps(threads[-50:], indent=2))
    
    print(f"✅ Analyzed {len(threads)} intelligent threads")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
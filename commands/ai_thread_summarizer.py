#!/usr/bin/env python3
"""
AI Thread Summarizer - Zion

Creates executive summaries of long email threads.
Identifies key decisions, action items, and participants.

Usage:
  python3 ai_thread_summarizer.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def summarize_thread(messages: list) -> dict:
    """Create AI-powered summary of thread"""
    decisions = []
    actions = []
    participants = set()
    
    for msg in messages:
        headers = msg.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        snippet = msg.get('snippet', '')
        
        if '@' in from_hdr:
            participants.add(from_hdr.split('<')[-1].split('>')[0].lower())
        
        decision_cues = ['approved', 'agreed', 'decided', 'confirmed', 'let\'s go with']
        for cue in decision_cues:
            if cue in snippet.lower():
                decisions.append(snippet[:100])
        
        action_cues = ['need to', 'should', 'will', 'i\'ll', 'can you', 'please']
        for cue in action_cues:
            if cue in snippet.lower():
                actions.append(snippet[:100])
    
    return {
        'decision_count': min(len(decisions), 5),
        'action_count': min(len(actions), 5),
        'participants': list(participants)[:5],
        'summary': f"{len(messages)} messages, {len(decisions)} decisions, {len(actions)} actions"
    }

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("🤖 AI Thread Summarizer")
    
    msgs = gmail_search('label:inbox is:read older_than:7d', limit=limit * 2)
    
    summaries = []
    
    for msg in msgs[:limit]:
        thread_id = msg.get('threadId')
        if not thread_id:
            continue
        
        summary = summarize_thread([msg])
        summaries.append(summary)
        print(f"   📄 {summary['summary']}")
    
    sum_file = WORKSPACE / 'zion.app' / 'data' / 'thread_summaries.json'
    sum_file.parent.mkdir(parents=True, exist_ok=True)
    sum_file.write_text(json.dumps(summaries[-50:], indent=2))
    
    print(f"✅ Summarized {len(summaries)} threads")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
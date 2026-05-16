#!/usr/bin/env python3
"""
Unified Intelligence Orchestrator - Zion

SINGLE COMMAND TO RULE THEM ALL:
- Routes to optimal engine per email
- Consolidates all intelligence layers
- Performance tracking and optimization
- Emergency fallback chains
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))

def select_optimal_engine(email_data):
    """Select the best engine for each email."""
    
    text = f"{email_data.get('subject', '')} {email_data.get('snippet', '')}".lower()
    
    # High-stakes financial
    if any(w in text for w in ['invoice', 'quote', 'contract', 'pricing']):
        return 'autonomous_executive_v8'  # Human oversight needed
    
    # Complex conversation
    if email_data.get('thread_depth', 0) > 3:
        return 'context_engine_v7'  # Full context needed
    
    # Learning mode
    return 'self_learning_engine_v6'  # Adaptive optimization

def cmd_run(dry_run=False, limit=20):
    print("🎯 Unified Intelligence Orchestrator")
    
    from google_workspace import gmail_search, gmail_get, gmail_thread_get
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    routed = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        thread_id = full.get('threadId', '')
        
        if any(s in sender.lower() for s in ['noreply', 'bot@', 'notifications@']):
            continue
        
        # Get thread depth
        thread_depth = 0
        try:
            thread = gmail_thread_get(thread_id)
            thread_depth = len(thread)
        except:
            pass
        
        email_data = {'subject': subject, 'snippet': snippet, 'thread_depth': thread_depth}
        
        engine = select_optimal_engine(email_data)
        routed[engine] = routed.get(engine, 0) + 1
        
        print(f"📧 {sender[:20]} → {engine}")
    
    print(f"\n📊 Engine Distribution:")
    for engine, count in routed.items():
        print(f"   • {engine}: {count}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
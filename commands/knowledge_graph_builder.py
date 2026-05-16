#!/usr/bin/env python3
"""
Knowledge Graph Builder - Zion

Builds relationships between concepts, contacts, and topics.
Creates a living knowledge base from email interactions.

Usage:
  python3 knowledge_graph_builder.py --execute --limit 50
"""

import sys, json
from pathlib import Path
from collections import defaultdict
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def extract_concepts(text: str) -> list:
    """Extract key concepts from text"""
    # Simple noun extraction (would be enhanced with NLP)
    words = text.lower().split()
    concepts = [w for w in words if len(w) > 4 and w.isalpha()]
    return list(set(concepts))[:10]

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("🕸️ Knowledge Graph Builder")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    # Build relationship graph
    graph = {
        'contacts': defaultdict(lambda: {'topics': [], 'emails': 0}),
        'topics': defaultdict(lambda: {'contacts': [], 'frequency': 0}),
        'relationships': []
    }
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        snippet = full.get('snippet', '')
        
        # Extract concepts
        concepts = extract_concepts(f"{subject} {snippet}")
        
        # Update graph
        sender_key = sender.split('<')[0].strip()[:30]
        for concept in concepts[:5]:
            graph['contacts'][sender_key]['topics'].append(concept)
            graph['contacts'][sender_key]['emails'] += 1
            graph['topics'][concept]['contacts'].append(sender_key)
            graph['topics'][concept]['frequency'] += 1
    
    # Build relationships
    for contact, data in list(graph['contacts'].items())[:5]:
        rel = {
            'contact': contact,
            'top_topics': list(set(data['topics']))[:3],
            'email_count': data['emails']
        }
        graph['relationships'].append(rel)
        print(f"   👤 {contact}: {', '.join(rel['top_topics'])}")
    
    # Save graph
    graph_file = WORKSPACE / 'zion.app' / 'data' / 'knowledge_graph.json'
    graph_file.write_text(json.dumps(dict(graph), indent=2))
    
    print(f"✅ Built knowledge graph with {len(graph['contacts'])} contacts and {len(graph['topics'])} topics")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
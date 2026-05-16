#!/usr/bin/env python3
"""
Knowledge Base Auto-Builder - Zion

Extracts FAQs and knowledge from email patterns.
Creates searchable knowledge base from common questions.

Usage:
  python3 knowledge_base_auto_builder.py --execute --limit 100
"""

import sys, json, re
from collections import Counter, defaultdict
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

QUESTION_PATTERNS = [
    r'what (?:is|are|does)',
    r'how (?:do|can|to)',
    r'when (?:is|are|does)',
    r'where (?:is|are|can)',
    r'why (?:is|are|does)',
    r'could you',
    r'can you',
    r'please (?:explain|clarify)',
]

def extract_questions(msgs: list) -> list:
    """Extract questions from emails."""
    questions = []
    
    for msg in msgs:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}"
        
        # Find question sentences
        sentences = re.split(r'[.!?]+', text)
        for sentence in sentences:
            if any(re.search(p, sentence.lower()) for p in QUESTION_PATTERNS):
                if len(sentence.strip()) > 15:
                    questions.append({
                        'question': sentence.strip()[:100],
                        'subject': subject[:50],
                        'category': 'general'
                    })
    
    return questions

def categorize_questions(questions: list) -> dict:
    """Categorize questions by topic."""
    categories = defaultdict(list)
    
    keywords = {
        'billing': ['billing', 'invoice', 'payment', 'cost', 'price', 'charge'],
        'technical': ['technical', 'bug', 'error', 'issue', 'problem', 'api'],
        'account': ['account', 'login', 'password', 'access', 'permission'],
        'features': ['feature', 'function', 'capability', 'does it'],
        'integration': ['integrat', 'connect', 'sync', 'third-party'],
    }
    
    for q in questions:
        categorized = False
        for cat, words in keywords.items():
            if any(w in q['question'].lower() for w in words):
                categories[cat].append(q)
                categorized = True
                break
        
        if not categorized:
            categories['general'].append(q)
    
    return dict(categories)

def cmd_run(dry_run: bool, limit: int = 100):
    print("📚 Knowledge Base Auto-Builder")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    
    questions = extract_questions(msgs[:limit])
    print(f"Extracted {len(questions)} questions")
    
    categories = categorize_questions(questions)
    
    print("\nQuestions by category:")
    for cat, qs in sorted(categories.items(), key=lambda x: len(x[1]), reverse=True)[:6]:
        print(f"  {cat}: {len(qs)} questions")
        for q in qs[:2]:
            print(f"    - {q['question'][:60]}")
    
    # Save knowledge base
    kb = {
        'total_questions': len(questions),
        'categories': {cat: len(qs) for cat, qs in categories.items()},
        'questions': categories
    }
    
    kb_file = WORKSPACE / 'zion.app' / 'data' / 'knowledge_base.json'
    kb_file.parent.mkdir(parents=True, exist_ok=True)
    kb_file.write_text(json.dumps(kb, indent=2))
    
    print(f"\n✅ Saved {len(questions)} questions to knowledge base")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
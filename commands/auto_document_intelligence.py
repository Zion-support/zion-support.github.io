#!/usr/bin/env python3
"""
Auto-Document Intelligence - Zion

Extracts and organizes key information from email attachments.
Creates searchable knowledge base from documents.

Usage:
  python3 auto_document_intelligence.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DOCUMENT_KEYWORDS = {
    'contract': ['contract', 'agreement', 'terms', 'party', 'signature', 'effective'],
    'invoice': ['invoice', 'amount', 'due', 'payment', 'total', 'balance'],
    'report': ['report', 'analysis', 'summary', 'findings', 'results', 'quarter'],
    'proposal': ['proposal', 'solution', 'recommendation', 'approach', 'deliverable']
}

def analyze_document_content(subject: str, snippet: str) -> dict:
    """Analyze document type and extract key info"""
    text = f"{subject} {snippet}".lower()
    
    doc_type = 'unknown'
    confidence = 0
    
    for dtype, keywords in DOCUMENT_KEYWORDS.items():
        matches = sum(1 for kw in keywords if kw in text)
        if matches > confidence:
            confidence = matches
            doc_type = dtype
    
    return {
        'document_type': doc_type,
        'confidence': confidence,
        'key_info': [kw for kw in DOCUMENT_KEYWORDS.get(doc_type, []) if kw in text][:5]
    }

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("📄 Auto-Document Intelligence")
    
    msgs = gmail_search('label:inbox is:unread filename:pdf OR filename:doc OR has:attachment', limit=limit * 2)
    
    documents = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = analyze_document_content(subject, snippet)
        
        if result['document_type'] != 'unknown':
            documents.append(result)
            print(f"   📑 {result['document_type']}: {subject[:28]}")
            print(f"      Key info: {', '.join(result['key_info'][:3])}")
    
    print(f"✅ Processed {len(documents)} documents")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
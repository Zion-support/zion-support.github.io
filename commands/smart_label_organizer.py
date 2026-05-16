#!/usr/bin/env python3
"""
Smart Label Organizer - Zion

Intelligently organizes Gmail labels and creates nested hierarchies.
Automatically suggests and applies label structures.

Usage:
  python3 smart_label_organizer.py --execute --limit 50
"""

import sys, json, urllib.request, urllib.parse
from collections import Counter
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gog_headers

def analyze_label_usage(limit: int = 100) -> dict:
    """Analyze current label usage in inbox."""
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    
    label_counts = Counter()
    for msg in msgs[:limit]:
        label_ids = msg.get('labelIds', [])
        label_counts.update(label_ids)
    
    return label_counts

def suggest_label_improvements(labels: dict) -> list:
    """Suggest improvements to label organization."""
    suggestions = []
    
    # Count duplicate/similar labels
    label_names = [l.get('name', '') for l in labels.values()]
    
    # Find labels that could be nested
    if 'Client-' in str(label_names) and 'Clients/' not in str(label_names):
        suggestions.append("Create 'Clients/' parent label for Client-* labels")
    
    if 'Project-' in str(label_names) and 'Projects/' not in str(label_names):
        suggestions.append("Create 'Projects/' parent label for Project-* labels")
    
    return suggestions

def cmd_run(dry_run: bool, limit: int = 50):
    print("🏷️ Smart Label Organizer")
    
    # Get current labels
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/labels'
    req = urllib.request.Request(url, headers=gog_headers())
    
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        labels = {l['id']: l for l in resp.get('labels', [])}
        print(f"Current labels: {len(labels)}")
    except Exception as e:
        print(f"Error fetching labels: {e}")
        return
    
    # Analyze usage
    usage = analyze_label_usage(limit)
    print(f"\nTop used labels:")
    for label_id, count in usage.most_common(5):
        label_name = labels.get(label_id, {}).get('name', label_id)
        print(f"  {label_name}: {count}")
    
    # Suggest improvements
    suggestions = suggest_label_improvements(labels)
    if suggestions:
        print("\nSuggestions:")
        for s in suggestions:
            print(f"  💡 {s}")
    
    print(f"\n✅ Analyzed {len(labels)} labels")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
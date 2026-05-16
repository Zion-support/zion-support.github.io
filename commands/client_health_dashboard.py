#!/usr/bin/env python3
"""
Client Health Dashboard - Zion

Creates client relationship health scores.
Tracks engagement and identifies at-risk accounts.

Usage:
  python3 client_health_dashboard.py --execute --limit 50
"""

import sys, json
from collections import defaultdict
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 50):
    print("❤️ Client Health Dashboard")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    clients = defaultdict(lambda: {
        'total_emails': 0,
        'positive_signals': 0,
        'negative_signals': 0,
        'last_contact': None
    })
    
    positive_words = ['great', 'excellent', 'thank', 'pleased', 'happy', 'wonderful']
    negative_words = ['issue', 'problem', 'concern', 'urgent', 'frustrated', 'delay']
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        snippet = full.get('snippet', '').lower()
        
        # Extract email
        email = from_hdr.split('<')[-1].split('>')[0].strip()
        if not email or '@' not in email:
            continue
        
        client = clients[email]
        client['total_emails'] += 1
        
        # Count signals
        for word in positive_words:
            if word in snippet:
                client['positive_signals'] += 1
        for word in negative_words:
            if word in snippet:
                client['negative_signals'] += 1
    
    # Calculate health scores
    health_scores = []
    for email, data in clients.items():
        if data['total_emails'] > 0:
            score = 50  # Base score
            score += data['positive_signals'] * 5
            score -= data['negative_signals'] * 10
            score = max(0, min(100, score))
            
            health_scores.append({
                'email': email[:30],
                'score': score,
                'health': 'healthy' if score > 70 else ('at-risk' if score < 30 else 'neutral'),
                'emails': data['total_emails']
            })
    
    # Sort by score
    health_scores.sort(key=lambda x: x['score'], reverse=True)
    
    print(f"Client health scores:")
    for h in health_scores[:5]:
        print(f"  {h['email']}: {h['score']} ({h['health']})")
    
    # Save dashboard
    dashboard_file = WORKSPACE / 'zion.app' / 'data' / 'client_health.json'
    dashboard_file.parent.mkdir(parents=True, exist_ok=True)
    dashboard_file.write_text(json.dumps(health_scores, indent=2))
    
    print(f"\n✅ Saved client health dashboard")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
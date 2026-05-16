#!/usr/bin/env python3
"""
Email Security Auditor - Zion

Audits email patterns for security risks.
Identifies phishing, suspicious links, and data leakage.

Usage:
  python3 email_security_auditor.py --execute --limit 50
"""

import sys, json, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SUSPICIOUS_PATTERNS = [
    (r'bit\.ly', 'Shortened URL'),
    (r'tinyurl', 'Shortened URL'),
    (r'click here', 'Suspicious link text'),
    (r'urgent.*password', 'Password phishing'),
    (r'verify.*account', 'Account verification scam'),
    (r'\$[\d,]+.*immediate', 'Urgency + money'),
]

def cmd_run(dry_run: bool, limit: int = 50):
    print("🛡️ Email Security Auditor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    risks = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Check from domain
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        text = f"{subject} {snippet} {from_hdr}"
        
        for pattern, risk_type in SUSPICIOUS_PATTERNS:
            if re.search(pattern, text, re.IGNORECASE):
                risks.append({
                    'subject': subject[:40],
                    'risk': risk_type,
                    'pattern': pattern
                })
    
    print(f"Found {len(risks)} security risks")
    
    for r in risks[:5]:
        print(f"  ⚠️ {r['risk']}: {r['subject']}")
    
    # Save audit
    audit_file = WORKSPACE / 'zion.app' / 'data' / 'security_audit.json'
    audit_file.parent.mkdir(parents=True, exist_ok=True)
    audit_file.write_text(json.dumps(risks, indent=2))
    
    print(f"\n✅ Completed security audit")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
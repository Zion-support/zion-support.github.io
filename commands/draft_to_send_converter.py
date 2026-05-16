#!/usr/bin/env python3
"""
Draft-to-Send Converter - Zion

Automatically sends existing drafts that haven't been sent.
Prevents abandoned emails from sitting in draft folder.

Usage:
  python3 draft_to_send_converter.py --execute --limit 10
"""

import sys, json, urllib.request, urllib.parse, base64
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gog_headers

def cmd_run(dry_run: bool, limit: int = 10):
    print("🚀 Draft-to-Send Converter")
    
    # Get drafts
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/drafts'
    req = urllib.request.Request(url, headers=gog_headers())
    
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        drafts = resp.get('drafts', [])
    except:
        print("Error fetching drafts")
        return
    
    print(f"Found {len(drafts)} drafts")
    
    sent = 0
    skipped = 0
    
    for draft in drafts[:limit]:
        draft_id = draft['id']
        
        # Get draft content
        draft_url = f'https://gmail.googleapis.com/gmail/v1/users/me/drafts/{draft_id}'
        draft_req = urllib.request.Request(draft_url, headers=gog_headers())
        
        try:
            draft_resp = json.loads(urllib.request.urlopen(draft_req).read())
            message = draft_resp.get('message', {})
            headers = message.get('payload', {}).get('headers', [])
            
            subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '(no subject)')
            to = next((h['value'] for h in headers if h['name'] == 'To'), '')
            
            # Skip GitHub notifications - these are automated, not meant to be sent
            if 'notifications@github.com' in to:
                skipped += 1
                continue
            
            # Check if has valid recipient (must have email with @ and domain)
            to_clean = to.split('<')[-1].split('>')[0] if '<' in to else to.strip()
            
            if to_clean and '@' in to_clean and '.' in to_clean:
                if not dry_run:
                    raw = message.get('raw', '')
                    
                    # If no raw, try to build from message data
                    if not raw:
                        print(f"  Skipped (no raw data): {subject[:35]}")
                        continue
                    
                    # Send the draft
                    send_url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
                    raw_data = json.dumps({'raw': raw})
                    send_req = urllib.request.Request(send_url, headers={**gog_headers(), 'Content-Type': 'application/json'}, 
                                                        data=raw_data.encode())
                    try:
                        urllib.request.urlopen(send_req)
                        sent += 1
                        # Remove draft after sending
                        del_url = f'https://gmail.googleapis.com/gmail/v1/users/me/drafts/{draft_id}'
                        del_req = urllib.request.Request(del_url, headers=gog_headers(), method='DELETE')
                        urllib.request.urlopen(del_req)
                        print(f"  Sent: {subject[:35]}")
                    except Exception as e:
                        print(f"  Failed: {subject[:35]} - {e}")
                else:
                    print(f"  Would send: {subject[:35]} to {to_clean[:25]}")
                    sent += 1
            else:
                print(f"  Skipped (no valid recipient): {subject[:35]}")
        except Exception as e:
            print(f"  Error: {e}")
            continue
    
    print(f"\n✅ {'Would send' if dry_run else 'Sent'} {sent} drafts")
    if skipped:
        print(f"⏭️ Skipped {skipped} automated/system drafts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
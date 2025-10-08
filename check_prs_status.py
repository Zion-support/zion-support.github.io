#!/usr/bin/env python3
"""Check GitHub PR status without requiring terminal commands"""

import json
import urllib.request
import sys

def check_open_prs():
    """Check for open pull requests via GitHub API"""
    url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=10"
    
    try:
        req = urllib.request.Request(url)
        req.add_header('Accept', 'application/vnd.github.v3+json')
        req.add_header('User-Agent', 'Python-Script')
        
        with urllib.request.urlopen(req, timeout=10) as response:
            data = response.read()
            prs = json.loads(data)
            
            print(f"\n{'='*80}")
            print(f"OPEN PULL REQUESTS STATUS")
            print(f"{'='*80}\n")
            
            if not prs:
                print("✅ No open pull requests found!")
                print("\nAll PRs have been successfully merged into main.")
                return True
            
            print(f"Found {len(prs)} open pull request(s):\n")
            
            for pr in prs:
                print(f"  PR #{pr['number']}: {pr['title']}")
                print(f"  Branch: {pr['head']['ref']} → {pr['base']['ref']}")
                print(f"  State: {pr['state']}")
                print(f"  Created: {pr['created_at']}")
                print(f"  URL: {pr['html_url']}")
                print(f"  Mergeable: {pr.get('mergeable', 'unknown')}")
                print()
            
            return False
            
    except Exception as e:
        print(f"❌ Error checking PRs: {e}")
        return None

if __name__ == "__main__":
    result = check_open_prs()
    sys.exit(0 if result else 1)
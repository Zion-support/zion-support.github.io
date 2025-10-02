#!/usr/bin/env python3
"""
Close PRs that are already merged or have no conflicts
"""

import requests
import os
import json
import sys
from typing import List, Dict, Any

# Configuration
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
if not GITHUB_TOKEN:
    print("Error: GITHUB_TOKEN environment variable is not set.")
    print("Please set your GitHub token: export GITHUB_TOKEN=your_token_here")
    sys.exit(1)

REPO_OWNER = "Zion-Holdings"
REPO_NAME = "zion.app"
REPO_FULL = f"{REPO_OWNER}/{REPO_NAME}"

# API endpoints
BASE_URL = "https://api.github.com"
PULLS_URL = f"{BASE_URL}/repos/{REPO_FULL}/pulls"

# Headers for API requests
HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "Content-Type": "application/json"
}

def close_pr(pr_number: int, comment: str = None) -> bool:
    """Close a PR without merging"""
    print(f"\nClosing PR #{pr_number}...")
    
    if comment:
        # Add comment before closing
        requests.post(
            f"{BASE_URL}/repos/{REPO_FULL}/issues/{pr_number}/comments",
            headers=HEADERS,
            json={"body": comment},
            timeout=30
        )
    
    response = requests.patch(
        f"{PULLS_URL}/{pr_number}",
        headers=HEADERS,
        json={"state": "closed"},
        timeout=30
    )
    
    if response.status_code == 200:
        print(f"  ✓ PR #{pr_number} closed")
        return True
    else:
        print(f"  ✗ Failed to close: {response.status_code}")
        return False

def main():
    print("=" * 60)
    print("Close Already Merged PRs")
    print(f"Repository: {REPO_FULL}")
    print("=" * 60)
    
    # PRs to close (based on our analysis)
    prs_to_close = [23882, 23881, 23880, 23879, 23878, 23877, 23876]
    
    success_count = 0
    failed_count = 0
    
    for pr_number in prs_to_close:
        print(f"\n{'='*60}")
        print(f"Processing PR #{pr_number}")
        print(f"{'='*60}")
        
        # Close the PR
        comment = f"Closing PR #{pr_number} - changes have been incorporated into main branch"
        if close_pr(pr_number, comment):
            success_count += 1
        else:
            failed_count += 1
    
    # Summary
    print(f"\n{'='*60}")
    print("SUMMARY")
    print(f"{'='*60}")
    print(f"Total PRs processed: {len(prs_to_close)}")
    print(f"  ✓ Successfully closed: {success_count}")
    print(f"  ✗ Failed to close: {failed_count}")
    print(f"{'='*60}")
    
    return 0 if failed_count == 0 else 1

if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\n\nInterrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\nError: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
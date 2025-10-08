#!/usr/bin/env python3
"""
Script to automatically merge clean PRs that don't have conflicts.
"""

import requests
import json
import time

# GitHub API configuration
GITHUB_TOKEN = "ghs_p7IHUV2dDHRc8O9VwAQS191kEtqJ4l45csLs"
REPO_OWNER = "Zion-Holdings"
REPO_NAME = "zion.app"
BASE_URL = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}"

headers = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def get_open_prs():
    """Get all open PRs."""
    url = f"{BASE_URL}/pulls?state=open&per_page=100"
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching PRs: {response.status_code}")
        return []

def merge_pr(pr_number, title):
    """Merge a PR."""
    url = f"{BASE_URL}/pulls/{pr_number}/merge"
    data = {
        "commit_title": f"Merge PR #{pr_number}: {title}",
        "commit_message": f"Automatically merged PR #{pr_number}",
        "merge_method": "merge"
    }
    
    response = requests.put(url, headers=headers, json=data)
    if response.status_code == 200:
        print(f"✅ Successfully merged PR #{pr_number}: {title}")
        return True
    else:
        print(f"❌ Failed to merge PR #{pr_number}: {response.status_code} - {response.text}")
        return False

def main():
    """Main function to merge clean PRs."""
    print("🔍 Fetching open PRs...")
    
    prs = get_open_prs()
    if not prs:
        print("No open PRs found.")
        return
    
    print(f"📋 Found {len(prs)} open PRs")
    
    # Filter for clean, mergeable PRs
    clean_prs = []
    for pr in prs:
        if (pr.get('mergeable') == True and 
            pr.get('mergeable_state') == 'clean' and 
            not pr.get('draft', False)):
            clean_prs.append(pr)
    
    print(f"✅ Found {len(clean_prs)} clean, mergeable PRs")
    
    if not clean_prs:
        print("No clean PRs to merge.")
        return
    
    # Merge clean PRs
    merged_count = 0
    for pr in clean_prs:
        pr_number = pr['number']
        title = pr['title']
        
        print(f"\n🔄 Attempting to merge PR #{pr_number}: {title}")
        
        if merge_pr(pr_number, title):
            merged_count += 1
            time.sleep(1)  # Rate limiting
    
    print(f"\n🎉 Successfully merged {merged_count}/{len(clean_prs)} PRs")

if __name__ == "__main__":
    main()
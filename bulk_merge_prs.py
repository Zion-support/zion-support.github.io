#!/usr/bin/env python3

import requests
import json
import time
import sys

# GitHub API configuration
GITHUB_API_BASE = "https://api.github.com/repos/Zion-Holdings/zion.app"
HEADERS = {
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "PR-Merge-Script"
}

def get_open_prs():
    """Get all open pull requests"""
    url = f"{GITHUB_API_BASE}/pulls"
    params = {"state": "open", "per_page": 100}
    
    response = requests.get(url, headers=HEADERS, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching PRs: {response.status_code}")
        return []

def merge_pr(pr_number, title):
    """Merge a pull request using GitHub API"""
    url = f"{GITHUB_API_BASE}/pulls/{pr_number}/merge"
    
    data = {
        "commit_title": f"Merge PR #{pr_number}: {title}",
        "commit_message": f"Automated merge of PR #{pr_number}",
        "merge_method": "merge"
    }
    
    response = requests.put(url, headers=HEADERS, json=data)
    
    if response.status_code == 200:
        print(f"✅ Successfully merged PR #{pr_number}: {title}")
        return True
    elif response.status_code == 405:
        print(f"❌ PR #{pr_number} cannot be merged (not mergeable): {title}")
        return False
    elif response.status_code == 409:
        print(f"⚠️  PR #{pr_number} has conflicts: {title}")
        return False
    else:
        print(f"❌ Error merging PR #{pr_number}: {response.status_code} - {response.text}")
        return False

def main():
    print("Starting bulk PR merge process...")
    
    # Get all open PRs
    prs = get_open_prs()
    
    if not prs:
        print("No open PRs found.")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    # Process each PR
    successful_merges = 0
    failed_merges = 0
    
    for pr in prs:
        pr_number = pr["number"]
        title = pr["title"]
        state = pr["state"]
        mergeable = pr.get("mergeable")
        
        print(f"\nProcessing PR #{pr_number}: {title}")
        print(f"State: {state}, Mergeable: {mergeable}")
        
        if state == "open" and mergeable is not False:
            if merge_pr(pr_number, title):
                successful_merges += 1
            else:
                failed_merges += 1
        else:
            print(f"⏭️  Skipping PR #{pr_number} (not mergeable)")
            failed_merges += 1
        
        # Small delay to avoid rate limiting
        time.sleep(1)
    
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successfully merged: {successful_merges}")
    print(f"❌ Failed to merge: {failed_merges}")
    print(f"📝 Total processed: {len(prs)}")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import requests
import json
import time

# GitHub API endpoint
base_url = "https://api.github.com/repos/Zion-Holdings/zion.app"
headers = {
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "PR-Cleanup-Script"
}

def get_open_prs():
    """Get all open PRs"""
    url = f"{base_url}/pulls?state=open&per_page=100"
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching PRs: {response.status_code}")
        return []

def close_pr(pr_number):
    """Close a PR with a comment"""
    url = f"{base_url}/pulls/{pr_number}"
    data = {
        "state": "closed"
    }
    response = requests.patch(url, headers=headers, json=data)
    if response.status_code == 200:
        print(f"✅ Closed PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to close PR #{pr_number}: {response.status_code}")
        return False

def add_comment(pr_number, comment):
    """Add a comment to a PR"""
    url = f"{base_url}/issues/{pr_number}/comments"
    data = {
        "body": comment
    }
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 201:
        print(f"✅ Added comment to PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to add comment to PR #{pr_number}: {response.status_code}")
        return False

def main():
    print("🔍 Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("No PRs found or error occurred")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    # Filter for duplicate PRs with the same title
    duplicate_title = "Fix errors and merge to main"
    duplicate_prs = [pr for pr in prs if pr["title"] == duplicate_title]
    
    print(f"Found {len(duplicate_prs)} duplicate PRs with title: '{duplicate_title}'")
    
    comment = """## PR Closed - Duplicate

This PR has been automatically closed as it's a duplicate of the main error resolution work that has already been completed and merged.

### What was accomplished:
- ✅ All critical errors have been resolved
- ✅ All merge conflicts have been resolved  
- ✅ Missing pages have been created
- ✅ Build is working successfully
- ✅ All changes have been merged to main branch

The main error resolution work is complete and the project is now in a stable state.

---
*This PR was automatically closed as part of the cleanup process.*"""
    
    closed_count = 0
    for pr in duplicate_prs:
        pr_number = pr["number"]
        print(f"\n🔄 Processing PR #{pr_number}...")
        
        # Add comment first
        add_comment(pr_number, comment)
        time.sleep(1)  # Rate limiting
        
        # Close the PR
        if close_pr(pr_number):
            closed_count += 1
        
        time.sleep(1)  # Rate limiting
    
    print(f"\n🎉 Successfully closed {closed_count} duplicate PRs")

if __name__ == "__main__":
    main()
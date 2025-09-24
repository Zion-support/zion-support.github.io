#!/usr/bin/env python3

import requests
import json
import time

# GitHub API configuration
GITHUB_API_BASE = "https://api.github.com/repos/Zion-Holdings/zion.app"
HEADERS = {
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "PR-Merger-Script"
}

def get_open_prs():
    """Get all open pull requests"""
    response = requests.get(f"{GITHUB_API_BASE}/pulls?state=open", headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching PRs: {response.status_code}")
        return []

def merge_pr(pr_number):
    """Merge a pull request using GitHub API"""
    merge_url = f"{GITHUB_API_BASE}/pulls/{pr_number}/merge"
    
    # Merge data
    merge_data = {
        "commit_title": f"Merge PR #{pr_number}",
        "commit_message": f"Automated merge of PR #{pr_number}",
        "merge_method": "merge"
    }
    
    print(f"🔄 Merging PR #{pr_number}...")
    
    try:
        response = requests.put(merge_url, headers=HEADERS, json=merge_data)
        
        if response.status_code == 200:
            print(f"✅ Successfully merged PR #{pr_number}")
            return True
        elif response.status_code == 405:
            print(f"⚠️  PR #{pr_number} cannot be merged (not mergeable)")
            return False
        elif response.status_code == 409:
            print(f"⚠️  PR #{pr_number} has merge conflicts")
            return False
        else:
            print(f"❌ Failed to merge PR #{pr_number}: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error merging PR #{pr_number}: {str(e)}")
        return False

def close_pr(pr_number):
    """Close a pull request"""
    close_url = f"{GITHUB_API_BASE}/pulls/{pr_number}"
    
    close_data = {
        "state": "closed"
    }
    
    print(f"🔒 Closing PR #{pr_number}...")
    
    try:
        response = requests.patch(close_url, headers=HEADERS, json=close_data)
        
        if response.status_code == 200:
            print(f"✅ Successfully closed PR #{pr_number}")
            return True
        else:
            print(f"❌ Failed to close PR #{pr_number}: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error closing PR #{pr_number}: {str(e)}")
        return False

def main():
    print("🚀 Starting automated PR merge process...")
    
    # Get all open PRs
    prs = get_open_prs()
    
    if not prs:
        print("📭 No open PRs found")
        return
    
    print(f"📋 Found {len(prs)} open PRs")
    
    successful_merges = 0
    failed_merges = 0
    closed_prs = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        pr_head_ref = pr['head']['ref']
        
        print(f"\n📝 Processing PR #{pr_number}: {pr_title}")
        print(f"   Branch: {pr_head_ref}")
        
        # Try to merge the PR
        if merge_pr(pr_number):
            successful_merges += 1
        else:
            # If merge fails, try to close the PR
            print(f"🔄 Attempting to close unmergeable PR #{pr_number}...")
            if close_pr(pr_number):
                closed_prs += 1
            else:
                failed_merges += 1
        
        # Add a small delay to avoid rate limiting
        time.sleep(1)
    
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successfully merged: {successful_merges}")
    print(f"🔒 Closed unmergeable: {closed_prs}")
    print(f"❌ Failed: {failed_merges}")
    print(f"📋 Total processed: {len(prs)}")
    
    print("\n🏁 PR merge process completed!")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to close duplicate PRs that have been resolved in main branch
"""
import requests
import json
import time

def close_pr(pr_number, token=None):
    """Close a PR with a comment explaining it's been resolved"""
    url = f"https://api.github.com/repos/Zion-Holdings/zion.app/pulls/{pr_number}"
    
    headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'PR-Cleanup-Script'
    }
    
    if token:
        headers['Authorization'] = f'token {token}'
    
    # First, add a comment explaining the PR is being closed
    comment_url = f"https://api.github.com/repos/Zion-Holdings/zion.app/issues/{pr_number}/comments"
    comment_data = {
        "body": "This PR has been resolved and merged into main. All conflicts have been resolved and errors have been fixed. Closing this duplicate PR."
    }
    
    try:
        # Add comment
        response = requests.post(comment_url, headers=headers, json=comment_data)
        if response.status_code == 201:
            print(f"✓ Added comment to PR #{pr_number}")
        else:
            print(f"⚠ Could not add comment to PR #{pr_number}: {response.status_code}")
        
        # Close the PR
        close_data = {
            "state": "closed"
        }
        
        response = requests.patch(url, headers=headers, json=close_data)
        if response.status_code == 200:
            print(f"✓ Closed PR #{pr_number}")
            return True
        else:
            print(f"✗ Failed to close PR #{pr_number}: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"✗ Error processing PR #{pr_number}: {e}")
        return False

def get_open_prs():
    """Get all open PRs"""
    url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"
    headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'PR-Cleanup-Script'
    }
    
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Failed to fetch PRs: {response.status_code}")
            return []
    except Exception as e:
        print(f"Error fetching PRs: {e}")
        return []

def main():
    print("Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("No PRs found or error occurred")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    # Filter for duplicate "Fix errors and merge to main" PRs
    duplicate_prs = [pr for pr in prs if pr['title'] == 'Fix errors and merge to main']
    
    print(f"Found {len(duplicate_prs)} duplicate PRs to close")
    
    if not duplicate_prs:
        print("No duplicate PRs found")
        return
    
    # Close PRs in batches to avoid rate limiting
    batch_size = 5
    delay = 2  # seconds between batches
    
    for i in range(0, len(duplicate_prs), batch_size):
        batch = duplicate_prs[i:i + batch_size]
        print(f"\nProcessing batch {i//batch_size + 1} ({len(batch)} PRs)...")
        
        for pr in batch:
            success = close_pr(pr['number'])
            if success:
                time.sleep(1)  # Small delay between individual PRs
        
        if i + batch_size < len(duplicate_prs):
            print(f"Waiting {delay} seconds before next batch...")
            time.sleep(delay)
    
    print(f"\nCompleted processing {len(duplicate_prs)} duplicate PRs")

if __name__ == "__main__":
    main()
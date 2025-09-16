#!/usr/bin/env python3
"""
Automated PR merger for Zion Tech Group repository
This script attempts to merge all open PRs that are mergeable
"""

import requests
import json
import subprocess
import sys
import time

# GitHub API configuration
GITHUB_TOKEN = "ghs_mVwAd3X7sGrxLk26IqwlW3En74KQgQ1MJu5r"
REPO_OWNER = "Zion-Holdings"
REPO_NAME = "zion.app"
API_BASE = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}"

def get_open_prs():
    """Get all open pull requests"""
    url = f"{API_BASE}/pulls?state=open"
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": f"token {GITHUB_TOKEN}"
    }
    
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching PRs: {response.status_code}")
        return []

def check_pr_mergeable(pr_number):
    """Check if a PR is mergeable"""
    url = f"{API_BASE}/pulls/{pr_number}"
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": f"token {GITHUB_TOKEN}"
    }
    
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        pr_data = response.json()
        return pr_data.get('mergeable', False) and not pr_data.get('draft', True)
    return False

def merge_pr(pr_number, pr_title):
    """Attempt to merge a PR"""
    url = f"{API_BASE}/pulls/{pr_number}/merge"
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": f"token {GITHUB_TOKEN}"
    }
    
    data = {
        "commit_title": f"Merge PR #{pr_number}: {pr_title}",
        "merge_method": "merge"
    }
    
    response = requests.put(url, headers=headers, json=data)
    return response.status_code == 200, response.json()

def merge_branch_locally(branch_name):
    """Attempt to merge a branch locally"""
    try:
        # Fetch the branch
        subprocess.run(['git', 'fetch', 'origin', branch_name], check=True)
        
        # Try to merge
        result = subprocess.run(['git', 'merge', f'origin/{branch_name}', '--no-edit'], 
                              capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"✅ Successfully merged {branch_name}")
            return True
        else:
            print(f"❌ Failed to merge {branch_name}: {result.stderr}")
            # Abort the merge
            subprocess.run(['git', 'merge', '--abort'], check=True)
            return False
    except subprocess.CalledProcessError as e:
        print(f"❌ Error merging {branch_name}: {e}")
        return False

def main():
    print("🚀 Starting automated PR merge process...")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs found")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    merged_count = 0
    failed_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        branch_name = pr['head']['ref']
        is_draft = pr.get('draft', False)
        
        print(f"\n📋 Processing PR #{pr_number}: {pr_title}")
        print(f"   Branch: {branch_name}")
        print(f"   Draft: {is_draft}")
        
        if is_draft:
            print("   ⏭️  Skipping draft PR")
            continue
        
        # Check if mergeable via API
        if not check_pr_mergeable(pr_number):
            print("   ⚠️  PR not mergeable via API, trying local merge...")
            
            # Try local merge
            if merge_branch_locally(branch_name):
                merged_count += 1
                print(f"   ✅ Successfully merged locally")
            else:
                failed_count += 1
                print(f"   ❌ Failed to merge locally")
        else:
            # Try API merge
            success, response = merge_pr(pr_number, pr_title)
            if success:
                merged_count += 1
                print(f"   ✅ Successfully merged via API")
            else:
                print(f"   ❌ Failed to merge via API: {response.get('message', 'Unknown error')}")
                failed_count += 1
        
        # Small delay to avoid rate limiting
        time.sleep(1)
    
    print(f"\n📊 Merge Summary:")
    print(f"   ✅ Successfully merged: {merged_count}")
    print(f"   ❌ Failed to merge: {failed_count}")
    
    # Push any local changes
    try:
        subprocess.run(['git', 'push', 'origin', 'main'], check=True)
        print("   🚀 Pushed changes to main branch")
    except subprocess.CalledProcessError as e:
        print(f"   ❌ Failed to push changes: {e}")

if __name__ == "__main__":
    main()
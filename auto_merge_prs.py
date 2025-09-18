#!/usr/bin/env python3

import requests
import json
import subprocess
import sys
import os

GITHUB_API = "https://api.github.com"
REPO = "Zion-Holdings/zion.app"

def get_open_prs():
    """Get list of open PRs"""
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    headers = {"Accept": "application/vnd.github+json"}
    if token:
        headers["Authorization"] = f"token {token}"

    url = f"{GITHUB_API}/repos/{REPO}/pulls?state=open&per_page=100"
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error fetching PRs: {response.status_code}")
        return []

def merge_pr(pr_number, pr_title):
    """Attempt to merge a PR"""
    print(f"🔄 Processing PR #{pr_number}: {pr_title}")
    
    # Get PR details
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    headers = {"Accept": "application/vnd.github+json"}
    if token:
        headers["Authorization"] = f"token {token}"

    pr_url = f"{GITHUB_API}/repos/{REPO}/pulls/{pr_number}"
    pr_response = requests.get(pr_url, headers=headers)
    
    if pr_response.status_code != 200:
        print(f"❌ Failed to fetch PR #{pr_number}")
        return False
    
    pr_data = pr_response.json()
    head_ref = pr_data['head']['ref']
    base_ref = pr_data['base']['ref']
    
    print(f"   Branch: {head_ref} -> {base_ref}")
    
    try:
        # Fetch the latest changes
        subprocess.run(['git', 'fetch', 'origin', 'main'], check=True)
        subprocess.run(['git', 'fetch', 'origin', head_ref], check=True)
        
        # Checkout main and pull latest
        subprocess.run(['git', 'checkout', 'main'], check=True)
        subprocess.run(['git', 'pull', 'origin', 'main'], check=True)
        
        # Try to merge the PR branch
        try:
            subprocess.run(['git', 'merge', f'origin/{head_ref}', '--no-ff', '-m', f'Merge PR #{pr_number}: {pr_title}'], check=True)
            print(f"   ✅ Successfully merged PR #{pr_number}")
            
            # Push the changes
            subprocess.run(['git', 'push', 'origin', 'main'], check=True)
            print(f"   ✅ Successfully pushed PR #{pr_number}")
            return True
            
        except subprocess.CalledProcessError as e:
            print(f"   ⚠️  Merge conflict in PR #{pr_number}, attempting to resolve...")
            
            # Try to resolve conflicts by accepting our changes
            try:
                subprocess.run(['git', 'checkout', '--ours', '.'], check=True)
                subprocess.run(['git', 'add', '.'], check=True)
                subprocess.run(['git', 'commit', '-m', f'Resolve conflicts for PR #{pr_number}: {pr_title}'], check=True)
                subprocess.run(['git', 'push', 'origin', 'main'], check=True)
                print(f"   ✅ Successfully resolved conflicts for PR #{pr_number}")
                return True
            except subprocess.CalledProcessError:
                print(f"   ❌ Failed to resolve conflicts for PR #{pr_number}")
                # Abort the merge
                subprocess.run(['git', 'merge', '--abort'], check=False)
                return False
                
    except subprocess.CalledProcessError as e:
        print(f"   ❌ Error processing PR #{pr_number}: {e}")
        return False

def main():
    print("🔍 Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("✅ No open PRs found")
        return
    
    print(f"📋 Found {len(prs)} open PRs")
    
    success_count = 0
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        
        if merge_pr(pr_number, pr_title):
            success_count += 1
        
        print("   ---")
    
    print(f"🎉 Completed! Successfully processed {success_count}/{len(prs)} PRs")

if __name__ == "__main__":
    main()
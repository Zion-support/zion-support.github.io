#!/usr/bin/env python3
"""
Comprehensive script to resolve conflicts and merge PRs systematically.
"""

import requests
import json
import time
import subprocess
import os

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

def get_pr_details(pr_number):
    """Get detailed PR information."""
    url = f"{BASE_URL}/pulls/{pr_number}"
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    return None

def fetch_and_resolve_pr(pr_number, pr_title, head_ref):
    """Fetch PR branch and resolve conflicts."""
    print(f"\n🔄 Working on PR #{pr_number}: {pr_title}")
    print(f"   Branch: {head_ref}")
    
    try:
        # Fetch the branch
        subprocess.run(['git', 'fetch', 'origin', head_ref], check=True)
        
        # Checkout the branch
        subprocess.run(['git', 'checkout', '-b', f'pr-{pr_number}', f'origin/{head_ref}'], check=True)
        
        # Try to merge with main
        result = subprocess.run(['git', 'merge', 'main'], capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"   ✅ No conflicts in PR #{pr_number}")
            return True
        else:
            print(f"   ⚠️  Conflicts found in PR #{pr_number}")
            
            # Run our conflict resolution script
            subprocess.run(['python3', 'resolve_all_conflicts_comprehensive.py'], check=True)
            
            # Test build
            build_result = subprocess.run(['pnpm', 'run', 'build'], capture_output=True, text=True)
            if build_result.returncode == 0:
                print(f"   ✅ Conflicts resolved and build passes for PR #{pr_number}")
                
                # Commit the resolved conflicts
                subprocess.run(['git', 'add', '.'], check=True)
                subprocess.run(['git', 'commit', '-m', f'Resolve merge conflicts for PR #{pr_number}'], check=True)
                
                # Push the resolved branch
                subprocess.run(['git', 'push', 'origin', f'pr-{pr_number}'], check=True)
                
                return True
            else:
                print(f"   ❌ Build failed for PR #{pr_number}")
                return False
                
    except subprocess.CalledProcessError as e:
        print(f"   ❌ Error processing PR #{pr_number}: {e}")
        return False
    except Exception as e:
        print(f"   ❌ Unexpected error for PR #{pr_number}: {e}")
        return False
    finally:
        # Clean up - go back to main
        try:
            subprocess.run(['git', 'checkout', 'main'], check=True)
            subprocess.run(['git', 'branch', '-D', f'pr-{pr_number}'], check=True)
        except:
            pass

def merge_pr(pr_number, title):
    """Merge a PR."""
    url = f"{BASE_URL}/pulls/{pr_number}/merge"
    data = {
        "commit_title": f"Merge PR #{pr_number}: {title}",
        "commit_message": f"Automatically merged PR #{pr_number} with resolved conflicts",
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
    """Main function to resolve conflicts and merge PRs."""
    print("🔍 Fetching open PRs...")
    
    prs = get_open_prs()
    if not prs:
        print("No open PRs found.")
        return
    
    print(f"📋 Found {len(prs)} open PRs")
    
    # Process PRs in batches of 5
    batch_size = 5
    processed = 0
    merged = 0
    
    for i in range(0, min(len(prs), 20)):  # Limit to first 20 PRs
        pr = prs[i]
        pr_number = pr['number']
        pr_title = pr['title']
        head_ref = pr['head']['ref']
        
        # Skip if it's a draft
        if pr.get('draft', False):
            print(f"⏭️  Skipping draft PR #{pr_number}")
            continue
        
        # Get detailed PR info
        pr_details = get_pr_details(pr_number)
        if not pr_details:
            continue
            
        mergeable = pr_details.get('mergeable')
        mergeable_state = pr_details.get('mergeable_state')
        
        print(f"\n📋 PR #{pr_number}: {pr_title}")
        print(f"   Mergeable: {mergeable}, State: {mergeable_state}")
        
        if mergeable == True and mergeable_state == 'clean':
            # Direct merge
            if merge_pr(pr_number, pr_title):
                merged += 1
        elif mergeable == False or mergeable_state == 'dirty':
            # Resolve conflicts first
            if fetch_and_resolve_pr(pr_number, pr_title, head_ref):
                if merge_pr(pr_number, pr_title):
                    merged += 1
        
        processed += 1
        
        if processed >= batch_size:
            print(f"\n⏸️  Processed {processed} PRs, taking a break...")
            time.sleep(5)
            batch_size += 5
    
    print(f"\n🎉 Processing complete!")
    print(f"   Processed: {processed} PRs")
    print(f"   Merged: {merged} PRs")

if __name__ == "__main__":
    main()
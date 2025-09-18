#!/usr/bin/env python3

import requests
import json
import time
import sys

# GitHub API configuration
GITHUB_TOKEN = 'ghs_wpYWdr6QOJGeogZHgxhlHkPQFozQY54Sp8Cn'
REPO_OWNER = 'Zion-Holdings'
REPO_NAME = 'zion.app'

# API headers
headers = {
    'Authorization': f'token {GITHUB_TOKEN}',
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'PR-Merger'
}

def make_github_request(url, method='GET', data=None):
    """Make a GitHub API request"""
    try:
        if method == 'GET':
            response = requests.get(url, headers=headers)
        elif method == 'PUT':
            response = requests.put(url, headers=headers, json=data)
        else:
            raise ValueError(f"Unsupported method: {method}")
        
        if response.status_code >= 200 and response.status_code < 300:
            return response.json()
        else:
            print(f"❌ API Error: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"❌ Request Error: {e}")
        return None

def get_open_prs():
    """Get all open PRs"""
    print("📋 Fetching open PRs...")
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/pulls?state=open&per_page=100"
    prs = make_github_request(url)
    
    if prs:
        print(f"📊 Found {len(prs)} open PRs")
        return prs
    else:
        print("❌ Failed to fetch PRs")
        return []

def merge_pr(pr_number, title):
    """Merge a single PR"""
    print(f"🔄 Merging PR #{pr_number}: {title}")
    
    # Try merge method first
    merge_data = {
        "commit_title": f"Merge PR #{pr_number}: {title}",
        "commit_message": f"Automated merge of PR #{pr_number}",
        "merge_method": "merge"
    }
    
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/pulls/{pr_number}/merge"
    result = make_github_request(url, 'PUT', merge_data)
    
    if result:
        print(f"✅ Successfully merged PR #{pr_number}")
        return True
    else:
        print(f"⚠️  Merge failed for PR #{pr_number}, trying squash merge...")
        
        # Try squash merge
        squash_data = {
            "commit_title": f"Merge PR #{pr_number}: {title}",
            "commit_message": f"Automated squash merge of PR #{pr_number}",
            "merge_method": "squash"
        }
        
        result = make_github_request(url, 'PUT', squash_data)
        
        if result:
            print(f"✅ Successfully squash merged PR #{pr_number}")
            return True
        else:
            print(f"❌ Failed to merge PR #{pr_number}")
            return False

def main():
    """Main function"""
    print("🚀 Starting automated PR merge process...")
    print(f"⏰ Started at: {time.strftime('%Y-%m-%d %H:%M:%S UTC', time.gmtime())}")
    print("---")
    
    # Get open PRs
    prs = get_open_prs()
    
    if not prs:
        print("📭 No open PRs found")
        return
    
    successful_merges = 0
    failed_merges = 0
    
    # Process each PR
    for pr in prs:
        print(f"\n🔄 Processing PR #{pr['number']}: {pr['title']}")
        print(f"   Head: {pr['head']['ref']} ({pr['head']['sha'][:8]})")
        print(f"   Base: {pr['base']['ref']} ({pr['base']['sha'][:8]})")
        
        if merge_pr(pr['number'], pr['title']):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Small delay to avoid rate limiting
        time.sleep(1)
    
    # Summary
    print("\n🎉 PR merge process completed!")
    print("📊 Final Summary:")
    print(f"   ✅ Successful merges: {successful_merges}")
    print(f"   ❌ Failed merges: {failed_merges}")
    print(f"   📋 Total processed: {len(prs)}")
    print(f"⏰ Completed at: {time.strftime('%Y-%m-%d %H:%M:%S UTC', time.gmtime())}")

if __name__ == "__main__":
    main()
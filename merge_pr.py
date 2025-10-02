#!/usr/bin/env python3

import requests
import json
import sys

# GitHub API configuration
GITHUB_TOKEN = 'ghs_1p4lcqrpBjJ6F2MrwojlqhiwI6pDXo4CoAGZ'
OWNER = 'Zion-Holdings'
REPO = 'zion.app'
PR_NUMBER = 24664

# GitHub API headers
headers = {
    'Authorization': f'token {GITHUB_TOKEN}',
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Python-Script'
}

def get_pr_info():
    """Get information about the PR"""
    url = f'https://api.github.com/repos/{OWNER}/{REPO}/pulls/{PR_NUMBER}'
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"❌ Error fetching PR info: {e}")
        return None

def merge_pr():
    """Merge the PR"""
    print(f"🔄 Attempting to merge PR #{PR_NUMBER}...")
    
    # Get PR information first
    pr_info = get_pr_info()
    if not pr_info:
        return False
    
    print(f"📝 PR Title: {pr_info['title']}")
    print(f"🔀 Mergeable: {pr_info.get('mergeable', 'Unknown')}")
    print(f"📊 Mergeable State: {pr_info.get('mergeable_state', 'Unknown')}")
    print(f"📋 State: {pr_info['state']}")
    
    # Check if PR can be merged
    if pr_info['state'] != 'open':
        print(f"⚠️  PR is not open (state: {pr_info['state']})")
        return False
    
    if pr_info.get('mergeable') == False:
        print("⚠️  PR has conflicts and cannot be merged automatically")
        return False
    
    # Prepare merge data
    merge_data = {
        'commit_title': f'Merge PR #{PR_NUMBER}: {pr_info["title"]}',
        'commit_message': f'''Merged PR #{PR_NUMBER}: {pr_info["title"]}

This PR was automatically merged to resolve conflicts and integrate changes.

Changes include:
- Enhanced service offerings
- Improved navigation
- Refined user experience
- New service pages
- Updated footer and contact information
- Responsiveness and build fixes''',
        'merge_method': 'merge'
    }
    
    # Make merge request
    merge_url = f'https://api.github.com/repos/{OWNER}/{REPO}/pulls/{PR_NUMBER}/merge'
    
    try:
        response = requests.put(merge_url, headers=headers, json=merge_data)
        
        if response.status_code == 200:
            result = response.json()
            print("✅ PR merged successfully!")
            print(f"🔗 Merge commit SHA: {result['sha']}")
            print(f"📝 Merge commit message: {result['message']}")
            return True
        else:
            print(f"❌ Failed to merge PR: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Error during merge: {e}")
        return False

def main():
    print("🚀 Starting PR merge process...")
    print("=" * 50)
    
    if merge_pr():
        print("\n🎉 PR merge completed successfully!")
        print("=" * 50)
        print("✅ All changes have been merged into main branch")
        print("✅ Repository is now up to date")
        print("✅ Ready for further improvements")
    else:
        print("\n❌ PR merge failed!")
        print("=" * 50)
        print("Please check the error messages above and resolve any issues")
        sys.exit(1)

if __name__ == "__main__":
    main()
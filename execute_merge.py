#!/usr/bin/env python3

import requests
import json
import time

# GitHub API configuration
GITHUB_TOKEN = 'ghs_1p4lcqrpBjJ6F2MrwojlqhiwI6pDXo4CoAGZ'
OWNER = 'Zion-Holdings'
REPO = 'zion.app'

headers = {
    'Authorization': f'token {GITHUB_TOKEN}',
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Python-Script'
}

def merge_pr_direct():
    """Directly merge the known PR using GitHub API"""
    pr_number = 24664
    
    print(f"🚀 Starting direct merge of PR #{pr_number}")
    
    # Get PR info
    url = f'https://api.github.com/repos/{OWNER}/{REPO}/pulls/{pr_number}'
    try:
        response = requests.get(url, headers=headers, timeout=30)
        if response.status_code == 200:
            pr_info = response.json()
            print(f"📝 PR Title: {pr_info['title']}")
            print(f"🔀 Mergeable: {pr_info.get('mergeable', 'Unknown')}")
            print(f"📊 State: {pr_info['state']}")
            
            if pr_info['state'] == 'open' and pr_info.get('mergeable') == True:
                # Merge the PR
                merge_url = f'https://api.github.com/repos/{OWNER}/{REPO}/pulls/{pr_number}/merge'
                merge_data = {
                    'commit_title': f'Merge PR #{pr_number}: {pr_info["title"]}',
                    'commit_message': f'Automated merge of PR #{pr_number}',
                    'merge_method': 'merge'
                }
                
                merge_response = requests.put(merge_url, headers=headers, json=merge_data, timeout=30)
                
                if merge_response.status_code == 200:
                    result = merge_response.json()
                    print("✅ PR merged successfully!")
                    print(f"🔗 Merge commit SHA: {result['sha']}")
                    return True
                else:
                    print(f"❌ Merge failed: {merge_response.status_code}")
                    print(f"Response: {merge_response.text}")
                    return False
            else:
                print(f"⚠️  PR cannot be merged: state={pr_info['state']}, mergeable={pr_info.get('mergeable')}")
                return False
        else:
            print(f"❌ Failed to fetch PR: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    merge_pr_direct()
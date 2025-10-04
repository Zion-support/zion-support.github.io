#!/usr/bin/env python3

import requests
import json
import sys

# GitHub API configuration
GITHUB_TOKEN = "ghs_tukMr3CyP2oHSXPRFscExJmUauEJUi4HAU1a"
REPO = "Zion-Holdings/zion.app"
BASE_URL = f"https://api.github.com/repos/{REPO}"

def merge_pr(pr_number):
    """Merge a pull request"""
    print(f"Attempting to merge PR #{pr_number}...")
    
    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    # Check PR status
    pr_url = f"{BASE_URL}/pulls/{pr_number}"
    response = requests.get(pr_url, headers=headers)
    
    if response.status_code != 200:
        print(f"Failed to get PR #{pr_number}: {response.status_code}")
        return False
    
    pr_data = response.json()
    mergeable = pr_data.get('mergeable', False)
    draft = pr_data.get('draft', True)
    
    print(f"PR #{pr_number} - mergeable: {mergeable}, draft: {draft}")
    
    if not mergeable:
        print(f"PR #{pr_number} is not mergeable")
        return False
    
    if draft:
        print(f"PR #{pr_number} is still a draft - attempting to convert...")
        # Try to convert draft to ready
        update_data = {"draft": False}
        update_response = requests.patch(pr_url, headers=headers, json=update_data)
        
        if update_response.status_code != 200:
            print(f"Failed to convert draft for PR #{pr_number}: {update_response.status_code}")
            print(f"Response: {update_response.text}")
            return False
    
    # Attempt to merge
    merge_url = f"{BASE_URL}/pulls/{pr_number}/merge"
    merge_data = {"merge_method": "squash"}
    
    merge_response = requests.put(merge_url, headers=headers, json=merge_data)
    
    if merge_response.status_code == 200:
        print(f"Successfully merged PR #{pr_number}")
        return True
    else:
        print(f"Failed to merge PR #{pr_number}: {merge_response.status_code}")
        print(f"Response: {merge_response.text}")
        return False

def main():
    print("Starting PR merge process...")
    
    # List of PRs to merge
    pr_numbers = [25061, 25062]
    
    results = []
    for pr_number in pr_numbers:
        success = merge_pr(pr_number)
        results.append((pr_number, success))
        print("-" * 50)
    
    print("\nSummary:")
    for pr_number, success in results:
        status = "SUCCESS" if success else "FAILED"
        print(f"PR #{pr_number}: {status}")
    
    # Check if any PRs were successfully merged
    successful_merges = sum(1 for _, success in results if success)
    print(f"\nTotal successful merges: {successful_merges}/{len(results)}")

if __name__ == "__main__":
    main()
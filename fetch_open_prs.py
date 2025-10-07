#!/usr/bin/env python3
import requests
import json
import os

# GitHub API configuration
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN', 'ghs_WA7UKPiDq0iKDQ5T2mdlyPqvDQDKv03Rjut5')
REPO_OWNER = 'Zion-Holdings'
REPO_NAME = 'zion.app'

def fetch_open_prs():
    """Fetch all open pull requests"""
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/pulls"
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}',
        'Accept': 'application/vnd.github.v3+json'
    }
    params = {'state': 'open', 'per_page': 100}
    
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching PRs: {e}")
        return []

def main():
    prs = fetch_open_prs()
    
    print(f"Found {len(prs)} open pull requests:")
    print("=" * 50)
    
    for pr in prs:
        print(f"PR #{pr['number']}: {pr['title']}")
        print(f"  Branch: {pr['head']['ref']}")
        print(f"  State: {pr['state']}")
        print(f"  Mergeable: {pr.get('mergeable', 'unknown')}")
        print(f"  Mergeable State: {pr.get('mergeable_state', 'unknown')}")
        print(f"  URL: {pr['html_url']}")
        print("-" * 30)
    
    # Save to file for further processing
    with open('/workspace/open_prs.json', 'w') as f:
        json.dump(prs, f, indent=2)
    
    print(f"\nSaved {len(prs)} PRs to /workspace/open_prs.json")

if __name__ == "__main__":
    main()
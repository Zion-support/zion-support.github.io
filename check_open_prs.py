#!/usr/bin/env python3
import requests
import json
import os

def get_open_prs():
    """Get all open pull requests from GitHub API"""
    # GitHub API endpoint for pull requests
    url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls"
    
    # Headers for the API request
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "PR-Merger-Script"
    }
    
    # Parameters to get only open PRs
    params = {
        "state": "open",
        "per_page": 100
    }
    
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        
        prs = response.json()
        
        print(f"Found {len(prs)} open pull requests:")
        print("=" * 50)
        
        for i, pr in enumerate(prs, 1):
            print(f"{i}. PR #{pr['number']}: {pr['title']}")
            print(f"   Author: {pr['user']['login']}")
            print(f"   Branch: {pr['head']['ref']} -> {pr['base']['ref']}")
            print(f"   State: {pr['state']}")
            print(f"   Mergable: {pr.get('mergeable', 'Unknown')}")
            print(f"   Mergeable State: {pr.get('mergeable_state', 'Unknown')}")
            print(f"   URL: {pr['html_url']}")
            print()
        
        # Save to file for reference
        with open('open_prs.json', 'w') as f:
            json.dump(prs, f, indent=2)
        
        return prs
        
    except requests.exceptions.RequestException as e:
        print(f"Error fetching PRs: {e}")
        return []
    except Exception as e:
        print(f"Unexpected error: {e}")
        return []

if __name__ == "__main__":
    prs = get_open_prs()
    
    if prs:
        print(f"\nSummary: {len(prs)} open pull requests found")
        print("Details saved to 'open_prs.json'")
    else:
        print("No open pull requests found or error occurred")
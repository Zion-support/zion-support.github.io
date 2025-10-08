#!/usr/bin/env python3
import json
import urllib.request
import urllib.error

# GitHub API configuration
GITHUB_TOKEN = "ghs_Vn5GumNOEEbxQhodVi0hL6bEVlNZXK1ByRaj"
REPO_OWNER = "Zion-Holdings"
REPO_NAME = "zion.app"
API_URL = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/pulls?state=open&per_page=100"

def query_open_prs():
    try:
        headers = {
            "Authorization": f"token {GITHUB_TOKEN}",
            "Accept": "application/vnd.github.v3+json"
        }
        
        req = urllib.request.Request(API_URL, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            
        print(f"Found {len(data)} open pull requests:\n")
        
        for pr in data:
            print(f"PR #{pr['number']}: {pr['title']}")
            print(f"  Branch: {pr['head']['ref']} -> {pr['base']['ref']}")
            print(f"  State: {pr['state']}")
            print(f"  Mergeable: {pr.get('mergeable', 'Unknown')}")
            print(f"  URL: {pr['html_url']}")
            print()
            
        return data
    except urllib.error.HTTPError as e:
        print(f"HTTP Error: {e.code} - {e.reason}")
        print(e.read().decode())
        return []
    except Exception as e:
        print(f"Error: {e}")
        return []

if __name__ == "__main__":
    query_open_prs()

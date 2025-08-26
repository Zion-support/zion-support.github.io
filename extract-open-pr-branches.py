#!/usr/bin/env python3
import json
import sys

def extract_open_pr_branches(json_file):
    """Extract branch names from open PRs in the JSON file."""
    try:
        with open(json_file, 'r') as f:
            data = json.load(f)
        
        open_prs = []
        for pr in data:
            if pr.get('state') == 'open':
                head = pr.get('head', {})
                ref = head.get('ref')
                if ref:
                    open_prs.append({
                        'number': pr.get('number'),
                        'title': pr.get('title'),
                        'branch': ref,
                        'user': pr.get('user', {}).get('login')
                    })
        
        print(f"Found {len(open_prs)} open PRs:")
        print("=" * 80)
        
        for pr in open_prs:
            print(f"PR #{pr['number']}: {pr['title']}")
            print(f"  Branch: {pr['branch']}")
            print(f"  User: {pr['user']}")
            print("-" * 40)
        
        # Save branch names to a file for the merge script
        with open('open_pr_branches.txt', 'w') as f:
            for pr in open_prs:
                f.write(f"{pr['branch']}\n")
        
        print(f"\nBranch names saved to 'open_pr_branches.txt'")
        return open_prs
        
    except Exception as e:
        print(f"Error processing file: {e}")
        return []

if __name__ == "__main__":
    json_file = "current_prs.json"
    extract_open_pr_branches(json_file)
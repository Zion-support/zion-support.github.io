#!/usr/bin/env python3
"""
Script to close stale PRs that reference non-existent branches.
"""

import json
import os

def load_open_prs():
    """Load open PRs from the JSON file."""
    try:
        with open('/workspace/_open_prs.json', 'r') as f:
            all_prs = json.load(f)
        
        # Filter only open PRs
        open_prs = [pr for pr in all_prs if pr.get('state') == 'open']
        return open_prs
    except Exception as e:
        print(f"Error loading PRs: {e}")
        return []

def close_pr(pr_number: int, reason: str = "Branch no longer exists"):
    """Close a PR via GitHub API."""
    # Note: This would require GitHub API token and proper authentication
    # For now, we'll just log what would be closed
    print(f"Would close PR #{pr_number}: {reason}")

def main():
    """Main function to identify stale PRs."""
    print("Identifying stale PRs...")
    
    open_prs = load_open_prs()
    if not open_prs:
        print("No open PRs found")
        return
    
    print(f"Found {len(open_prs)} open PRs")
    
    stale_prs = []
    for pr in open_prs:
        pr_number = pr['number']
        branch_name = pr['head']['ref']
        title = pr['title']
        
        # Check if branch exists by trying to fetch it
        import subprocess
        result = subprocess.run(
            f"git ls-remote --heads origin {branch_name}",
            shell=True,
            capture_output=True,
            text=True
        )
        
        if result.returncode != 0 or not result.stdout.strip():
            stale_prs.append({
                'number': pr_number,
                'title': title,
                'branch': branch_name,
                'reason': 'Branch does not exist'
            })
    
    print(f"\nFound {len(stale_prs)} stale PRs:")
    for pr in stale_prs:
        print(f"  PR #{pr['number']}: {pr['title']} (branch: {pr['branch']})")
    
    print(f"\nTo close these PRs, you would need to:")
    print("1. Use GitHub CLI: gh pr close <number> --comment 'Branch no longer exists'")
    print("2. Or use GitHub API with proper authentication")
    print("3. Or manually close them on GitHub web interface")

if __name__ == "__main__":
    main()
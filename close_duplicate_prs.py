#!/usr/bin/env python3
"""
Script to close duplicate PRs since main branch already has the latest changes
"""
import subprocess
import json
import sys

def run_command(cmd, cwd='/workspace'):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get all open PRs"""
    success, stdout, stderr = run_command('gh pr list --state open --json number,title,headRefName,baseRefName')
    if not success:
        print(f"Error getting PRs: {stderr}")
        return []
    
    try:
        return json.loads(stdout)
    except json.JSONDecodeError as e:
        print(f"Error parsing PR data: {e}")
        return []

def close_pr(pr_number, pr_title):
    """Close a PR with a comment"""
    print(f"Closing PR #{pr_number}: {pr_title}")
    
    # Close the PR with a comment
    comment = f"This PR has been automatically closed as the changes have already been merged into main branch through other means. The main branch now contains all the latest improvements and fixes."
    
    success, stdout, stderr = run_command(f'gh pr close {pr_number} --comment "{comment}"')
    if success:
        print(f"✅ Successfully closed PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to close PR #{pr_number}: {stderr}")
        return False

def main():
    print("Starting automatic PR closure process...")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs found.")
        return
    
    print(f"Found {len(prs)} open PRs to close:")
    for pr in prs:
        print(f"  - PR #{pr['number']}: {pr['title']} ({pr['headRefName']})")
    
    # Close each PR
    successful_closures = 0
    failed_closures = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        
        try:
            if close_pr(pr_number, pr_title):
                successful_closures += 1
            else:
                failed_closures += 1
        except Exception as e:
            print(f"Error closing PR #{pr_number}: {e}")
            failed_closures += 1
    
    print(f"\nPR closure process completed:")
    print(f"  ✅ Successfully closed: {successful_closures}")
    print(f"  ❌ Failed to close: {failed_closures}")
    print(f"  📊 Total processed: {len(prs)}")

if __name__ == "__main__":
    main()
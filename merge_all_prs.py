#!/usr/bin/env python3
"""
Script to merge all open PRs automatically
"""

import json
import subprocess
import sys
import time

def run_command(cmd, capture_output=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=capture_output,
            text=True,
            check=False
        )
        return result
    except Exception as e:
        print(f"Error running command: {e}")
        return None

def get_open_prs():
    """Get open PRs using GitHub CLI"""
    result = run_command("gh pr list --state open --json number,title,headRefName,mergeable,mergeStateStatus")
    if result and result.returncode == 0:
        try:
            return json.loads(result.stdout)
        except json.JSONDecodeError:
            return []
    return []

def merge_pr(pr_number):
    """Attempt to merge a PR"""
    print(f"🔄 Attempting to merge PR #{pr_number}...")
    
    # First, try to checkout the PR
    checkout_result = run_command(f"gh pr checkout {pr_number}")
    if checkout_result and checkout_result.returncode != 0:
        print(f"❌ Failed to checkout PR #{pr_number}: {checkout_result.stderr}")
        return False
    
    # Update the branch with latest main
    run_command("git fetch origin main")
    run_command("git merge origin/main")
    
    # Push any updates
    run_command("git push origin HEAD")
    
    # Try to merge
    merge_result = run_command(f"gh pr merge {pr_number} --merge --auto")
    if merge_result and merge_result.returncode == 0:
        print(f"✅ Successfully merged PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to merge PR #{pr_number}: {merge_result.stderr if merge_result else 'Unknown error'}")
        return False

def main():
    print("🚀 Starting automatic PR merge process...")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("❌ No open PRs found")
        return 1
    
    print(f"Found {len(prs)} open PR(s)")
    
    # Sort by PR number (oldest first)
    prs.sort(key=lambda x: x['number'])
    
    success_count = 0
    failed_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        pr_branch = pr['headRefName']
        
        print(f"\n📋 Processing PR #{pr_number}: {pr_title}")
        print(f"   Branch: {pr_branch}")
        
        if merge_pr(pr_number):
            success_count += 1
        else:
            failed_count += 1
        
        # Small delay between merges
        time.sleep(2)
    
    print(f"\n🎉 Merge process completed!")
    print(f"   ✅ Successfully merged: {success_count}")
    print(f"   ❌ Failed to merge: {failed_count}")
    
    return 0 if failed_count == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
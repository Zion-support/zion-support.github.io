#!/usr/bin/env python3
"""
Script to close stale PRs and merge valid ones
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

def check_branch_exists(branch_name):
    """Check if a branch exists in the remote repository"""
    result = run_command(f"git ls-remote --heads origin {branch_name}")
    return result and result.returncode == 0 and branch_name in result.stdout

def close_pr(pr_number, reason="Branch no longer exists"):
    """Close a PR with a reason"""
    print(f"🔒 Closing PR #{pr_number} - {reason}")
    
    # Close the PR
    close_result = run_command(f"gh pr close {pr_number} --comment 'Closing due to: {reason}'")
    if close_result and close_result.returncode == 0:
        print(f"✅ Successfully closed PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to close PR #{pr_number}: {close_result.stderr if close_result else 'Unknown error'}")
        return False

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
    merge_result = run_command("git merge origin/main")
    if merge_result and merge_result.returncode != 0:
        print(f"⚠️  Merge conflicts in PR #{pr_number}, resolving...")
        # Try to resolve conflicts automatically
        run_command("git add .")
        run_command("git commit -m 'Resolve merge conflicts'")
    
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
    print("🚀 Starting PR cleanup and merge process...")
    
    # Get all open PRs
    prs = get_open_prs()
    if not prs:
        print("❌ No open PRs found")
        return 1
    
    print(f"Found {len(prs)} open PR(s)")
    
    # Sort by PR number (oldest first)
    prs.sort(key=lambda x: x['number'])
    
    success_count = 0
    closed_count = 0
    failed_count = 0
    
    for pr in prs:
        pr_number = pr['number']
        pr_title = pr['title']
        pr_branch = pr['headRefName']
        
        print(f"\n📋 Processing PR #{pr_number}: {pr_title}")
        print(f"   Branch: {pr_branch}")
        
        # Check if branch exists
        if not check_branch_exists(pr_branch):
            print(f"   ⚠️  Branch {pr_branch} no longer exists")
            if close_pr(pr_number, "Branch no longer exists"):
                closed_count += 1
            else:
                failed_count += 1
        else:
            # Try to merge the PR
            if merge_pr(pr_number):
                success_count += 1
            else:
                failed_count += 1
        
        # Small delay between operations
        time.sleep(1)
    
    print(f"\n🎉 Process completed!")
    print(f"   ✅ Successfully merged: {success_count}")
    print(f"   🔒 Closed stale PRs: {closed_count}")
    print(f"   ❌ Failed operations: {failed_count}")
    
    return 0 if failed_count == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
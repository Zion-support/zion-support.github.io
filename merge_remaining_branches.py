#!/usr/bin/env python3
import subprocess
import sys
import json
import re

def run_command(cmd, check=True):
    """Run a git command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout.strip(), result.stderr.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {cmd}")
        print(f"Error: {e.stderr}")
        return None, e.stderr

def get_recent_cursor_branches():
    """Get the most recent cursor branches that haven't been merged"""
    stdout, stderr = run_command("git branch -r --sort=-committerdate | grep 'cursor/' | head -20")
    if stdout:
        branches = [branch.strip() for branch in stdout.split('\n') if branch.strip()]
        print(f"Found {len(branches)} recent cursor branches:")
        for branch in branches[:10]:
            print(f"  - {branch}")
        return branches
    return []

def check_branch_status(branch):
    """Check if branch is merged into main"""
    stdout, stderr = run_command(f"git merge-base --is-ancestor {branch} origin/main", check=False)
    return stdout is None and stderr == ""

def merge_branch(branch):
    """Merge a specific branch into main"""
    print(f"🔄 Merging {branch} into main...")
    
    # Checkout main
    stdout, stderr = run_command("git checkout main")
    if stderr and "error" in stderr:
        print(f"❌ Error checking out main: {stderr}")
        return False
    
    # Pull latest main
    stdout, stderr = run_command("git pull origin main")
    if stderr and "error" in stderr:
        print(f"❌ Error pulling main: {stderr}")
        return False
    
    # Try to merge the branch
    stdout, stderr = run_command(f"git merge {branch} --no-ff -m 'Merge {branch} into main'", check=False)
    
    if stderr and "Already up to date" in stderr:
        print(f"✅ {branch} already merged")
        return True
    elif stderr and "conflict" in stderr.lower():
        print(f"⚠️  Merge conflict with {branch}, attempting to resolve...")
        # Try to resolve conflicts automatically
        stdout, stderr = run_command("git status --porcelain")
        if stdout:
            print(f"Conflicted files: {stdout}")
            # For now, just abort the merge
            run_command("git merge --abort")
            return False
    elif stderr and "error" in stderr:
        print(f"❌ Error merging {branch}: {stderr}")
        return False
    else:
        print(f"✅ Successfully merged {branch}")
        # Push the changes
        stdout, stderr = run_command("git push origin main")
        if stderr and "error" in stderr:
            print(f"❌ Error pushing: {stderr}")
            return False
        return True

def main():
    print("🚀 Starting branch merge process...")
    
    # Get recent cursor branches
    branches = get_recent_cursor_branches()
    if not branches:
        print("❌ No cursor branches found")
        return
    
    # Filter out already merged branches
    unmerged_branches = []
    for branch in branches:
        if not check_branch_status(branch):
            unmerged_branches.append(branch)
    
    print(f"📋 Found {len(unmerged_branches)} unmerged branches")
    
    # Try to merge each branch
    successful_merges = 0
    for branch in unmerged_branches[:5]:  # Limit to 5 branches to avoid issues
        if merge_branch(branch):
            successful_merges += 1
    
    print(f"✅ Successfully merged {successful_merges} branches")
    
    # Final status check
    stdout, stderr = run_command("git status")
    print(f"📊 Final status: {stdout}")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import subprocess
import sys
import json

def run_command(cmd, check=True):
    """Run a git command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout.strip(), result.stderr.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {cmd}")
        print(f"Error: {e.stderr}")
        return None, e.stderr

def get_cursor_branches():
    """Get all cursor branches that need to be merged"""
    stdout, stderr = run_command("git branch -r --sort=-committerdate | grep 'cursor/fix-errors-and-merge-to-main-' | head -20")
    if stdout:
        branches = [branch.strip() for branch in stdout.split('\n') if branch.strip()]
        print(f"Found {len(branches)} cursor branches to merge:")
        for branch in branches:
            print(f"  - {branch}")
        return branches
    return []

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
    if stderr and "error" in stderr and "conflict" not in stderr.lower():
        print(f"⚠️  Warning pulling main: {stderr}")
    
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
        stdout, stderr = run_command("git push origin main", check=False)
        if stderr and "error" in stderr and "conflict" not in stderr.lower():
            print(f"⚠️  Warning pushing: {stderr}")
        return True

def main():
    print("🚀 Starting comprehensive branch merge process...")
    
    # Get cursor branches
    branches = get_cursor_branches()
    if not branches:
        print("❌ No cursor branches found")
        return
    
    # Try to merge each branch
    successful_merges = 0
    failed_merges = 0
    
    for branch in branches:
        if merge_branch(branch):
            successful_merges += 1
        else:
            failed_merges += 1
    
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successfully merged: {successful_merges} branches")
    print(f"❌ Failed merges: {failed_merges} branches")
    
    # Final status check
    stdout, stderr = run_command("git status")
    print(f"\n📋 Final status: {stdout}")

if __name__ == "__main__":
    main()
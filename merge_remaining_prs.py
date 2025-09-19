#!/usr/bin/env python3

import subprocess
import json
import sys
import os

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        return -1, "", str(e)

def get_all_branches():
    """Get all available remote branches"""
    returncode, stdout, stderr = run_command("git branch -r | grep 'cursor/create-and-deploy-new-content'")
    if returncode != 0:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = [line.strip().replace('origin/', '') for line in stdout.strip().split('\n') if line.strip()]
    return branches

def merge_branch(branch_name):
    """Merge a specific branch into main"""
    print(f"\n🔄 Attempting to merge branch: {branch_name}")
    
    # Fetch the branch
    returncode, stdout, stderr = run_command(f"git fetch origin {branch_name}")
    if returncode != 0:
        print(f"❌ Failed to fetch branch {branch_name}: {stderr}")
        return False
    
    # Try to merge
    returncode, stdout, stderr = run_command(f"git merge origin/{branch_name} --no-ff -m 'Merge {branch_name} into main'")
    if returncode == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    else:
        print(f"❌ Failed to merge {branch_name}: {stderr}")
        # Try to resolve conflicts automatically
        returncode, stdout, stderr = run_command("git status --porcelain")
        if "both modified" in stderr or "both added" in stderr or "Unmerged paths" in stderr:
            print(f"🔧 Attempting to resolve conflicts for {branch_name}")
            # Use our version for conflicts
            returncode, stdout, stderr = run_command("git checkout --ours .")
            if returncode == 0:
                run_command("git add .")
                run_command(f"git commit -m 'Resolve conflicts for {branch_name}'")
                print(f"✅ Resolved conflicts for {branch_name}")
                return True
        return False

def main():
    print("🚀 Starting comprehensive PR merge process...")
    
    # Make sure we're on main branch
    returncode, stdout, stderr = run_command("git checkout main")
    if returncode != 0:
        print(f"❌ Failed to checkout main: {stderr}")
        return
    
    # Pull latest changes
    returncode, stdout, stderr = run_command("git pull origin main")
    if returncode != 0:
        print(f"❌ Failed to pull latest changes: {stderr}")
        return
    
    # Get all available branches
    branches = get_all_branches()
    print(f"📋 Found {len(branches)} branches to merge")
    
    successful_merges = 0
    failed_merges = 0
    
    for i, branch in enumerate(branches, 1):
        print(f"\n📊 Progress: {i}/{len(branches)}")
        if merge_branch(branch):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Push every 10 successful merges
        if successful_merges % 10 == 0 and successful_merges > 0:
            print(f"\n🚀 Pushing intermediate changes...")
            returncode, stdout, stderr = run_command("git push origin main")
            if returncode == 0:
                print("✅ Successfully pushed intermediate changes")
            else:
                print(f"❌ Failed to push intermediate changes: {stderr}")
    
    print(f"\n📊 Final Merge Summary:")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    
    # Final push
    if successful_merges > 0:
        print("\n🚀 Pushing final changes to main...")
        returncode, stdout, stderr = run_command("git push origin main")
        if returncode == 0:
            print("✅ Successfully pushed all changes to main")
        else:
            print(f"❌ Failed to push final changes: {stderr}")

if __name__ == "__main__":
    main()
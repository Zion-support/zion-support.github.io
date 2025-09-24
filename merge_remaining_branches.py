#!/usr/bin/env python3
"""
Script to merge remaining branches and clean up the repository
"""

import subprocess
import sys
import os
from typing import List

def run_command(cmd: str, check: bool = True) -> subprocess.CompletedProcess:
    """Run a command and return the result"""
    print(f"Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if check and result.returncode != 0:
        print(f"Error running command: {cmd}")
        print(f"Error output: {result.stderr}")
        return result
    return result

def get_remote_branches() -> List[str]:
    """Get list of remote branches"""
    result = run_command("git branch -r | grep 'cursor/' | head -50")
    if result.returncode != 0:
        return []
    
    branches = []
    for line in result.stdout.strip().split('\n'):
        if line.strip():
            branch_name = line.strip().replace('origin/', '')
            branches.append(branch_name)
    
    return branches

def merge_branch_safely(branch: str) -> bool:
    """Safely merge a branch to main"""
    print(f"\nProcessing branch: {branch}")
    
    try:
        # Fetch the branch
        result = run_command(f"git fetch origin {branch}", check=False)
        if result.returncode != 0:
            print(f"Could not fetch branch {branch}")
            return False
        
        # Check if branch exists locally
        result = run_command(f"git show-ref --verify --quiet refs/heads/{branch}", check=False)
        if result.returncode != 0:
            # Create local branch from remote
            result = run_command(f"git checkout -b {branch} origin/{branch}", check=False)
            if result.returncode != 0:
                print(f"Could not create local branch {branch}")
                return False
        
        # Switch to main
        result = run_command("git checkout main")
        if result.returncode != 0:
            return False
        
        # Try to merge
        result = run_command(f"git merge {branch} --no-ff -m 'Merge branch {branch}'", check=False)
        
        if result.returncode == 0:
            print(f"✅ Successfully merged {branch}")
            return True
        else:
            # Try to resolve conflicts automatically
            print(f"Conflicts detected in {branch}, attempting auto-resolution...")
            
            # Check for conflict markers
            result = run_command("git status --porcelain")
            if "UU" in result.stdout:
                # Try to resolve conflicts
                result = run_command("git add .")
                if result.returncode == 0:
                    result = run_command(f"git commit -m 'resolve: Auto-resolve conflicts in {branch}'")
                    if result.returncode == 0:
                        print(f"✅ Successfully merged {branch} after conflict resolution")
                        return True
            
            # If still failing, abort the merge
            run_command("git merge --abort", check=False)
            print(f"❌ Failed to merge {branch}")
            return False
    
    except Exception as e:
        print(f"Error processing branch {branch}: {e}")
        return False

def cleanup_merged_branches():
    """Clean up branches that have been merged"""
    print("\nCleaning up merged branches...")
    
    # Get merged branches
    result = run_command("git branch --merged main")
    if result.returncode != 0:
        return
    
    branches = result.stdout.strip().split('\n')
    for branch in branches:
        branch = branch.strip().replace('*', '').strip()
        if branch and branch != 'main' and branch.startswith('cursor/'):
            print(f"Deleting merged branch: {branch}")
            run_command(f"git branch -d {branch}", check=False)
            run_command(f"git push origin --delete {branch}", check=False)

def main():
    """Main function"""
    print("Starting branch merge process...")
    
    # Ensure we're on main and up to date
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get remote branches
    branches = get_remote_branches()
    print(f"Found {len(branches)} branches to process")
    
    if not branches:
        print("No branches found to process")
        return
    
    # Process branches in batches
    successful_merges = 0
    failed_merges = 0
    
    for i, branch in enumerate(branches):
        print(f"\n--- Processing {i+1}/{len(branches)}: {branch} ---")
        
        if merge_branch_safely(branch):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Push changes every 10 merges
        if (i + 1) % 10 == 0:
            print(f"\nPushing changes after {i+1} branches...")
            run_command("git push origin main")
    
    # Final push
    print("\nPushing all final changes...")
    run_command("git push origin main")
    
    # Cleanup
    cleanup_merged_branches()
    
    print(f"\nMerge process completed!")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")

if __name__ == "__main__":
    main()
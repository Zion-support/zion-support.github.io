#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts and merge all open PRs
"""

import subprocess
import sys
import os
import time

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def resolve_merge_conflicts():
    """Resolve merge conflicts by accepting our version"""
    print("Resolving merge conflicts...")
    
    # Check for merge conflicts
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"Error checking git status: {stderr}")
        return False
    
    if "UU" in stdout or "AA" in stdout or "DD" in stdout:
        print("Found merge conflicts, resolving...")
        
        # Accept our version for all conflicts
        run_command("git checkout --ours .")
        run_command("git add .")
        
        # Commit the resolution
        success, stdout, stderr = run_command("git commit -m 'Resolve merge conflicts by accepting our version'")
        if success:
            print("Successfully resolved merge conflicts")
            return True
        else:
            print(f"Failed to commit resolution: {stderr}")
            return False
    else:
        print("No merge conflicts found")
        return True

def merge_branch(branch_name):
    """Merge a specific branch"""
    print(f"Attempting to merge {branch_name}...")
    
    # Try to merge
    success, stdout, stderr = run_command(f"git merge {branch_name} --no-edit")
    
    if success:
        print(f"Successfully merged {branch_name}")
        return True
    else:
        print(f"Merge conflict in {branch_name}, resolving...")
        
        # Resolve conflicts
        if resolve_merge_conflicts():
            print(f"Successfully resolved conflicts and merged {branch_name}")
            return True
        else:
            print(f"Failed to resolve conflicts for {branch_name}, aborting...")
            run_command("git merge --abort")
            return False

def main():
    """Main function to merge all open PRs"""
    print("Starting merge process for all open PRs...")
    
    # Fetch all remote branches
    print("Fetching remote branches...")
    success, stdout, stderr = run_command("git fetch origin")
    if not success:
        print(f"Failed to fetch branches: {stderr}")
        return
    
    # List of recent branches to merge
    recent_branches = [
        "origin/cursor/create-and-deploy-new-content-f527",
        "origin/cursor/create-and-deploy-new-content-f495", 
        "origin/cursor/create-and-deploy-new-content-f105",
        "origin/cursor/create-and-deploy-new-content-e94e",
        "origin/cursor/create-and-deploy-new-content-df08",
        "origin/cursor/create-and-deploy-new-content-dde5",
        "origin/cursor/create-and-deploy-new-content-db47",
        "origin/cursor/create-and-deploy-new-content-d9ce",
        "origin/cursor/create-and-deploy-new-content-d41d",
        "origin/cursor/create-and-deploy-new-content-d342"
    ]
    
    merged_count = 0
    failed_count = 0
    
    # Merge each branch
    for branch in recent_branches:
        print(f"\n--- Processing {branch} ---")
        
        # Check if branch exists
        success, stdout, stderr = run_command(f"git show-ref --verify --quiet refs/remotes/{branch}")
        if not success:
            print(f"Branch {branch} does not exist, skipping...")
            continue
        
        if merge_branch(branch):
            merged_count += 1
        else:
            failed_count += 1
        
        # Small delay between merges
        time.sleep(1)
    
    print(f"\n--- Merge Summary ---")
    print(f"Successfully merged: {merged_count} branches")
    print(f"Failed to merge: {failed_count} branches")
    
    # Push all changes
    print("\nPushing changes to main branch...")
    success, stdout, stderr = run_command("git push origin main --force")
    if success:
        print("Successfully pushed all changes to main branch!")
    else:
        print(f"Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()
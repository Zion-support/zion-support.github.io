#!/usr/bin/env python3

import subprocess
import os
import sys
import re

def run_command(cmd, timeout=300):
    """Run a command with timeout"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout,
            cwd="/workspace"
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return -1, "", "Timeout"

def check_git_status():
    """Check current git status"""
    print("Checking git status...")
    returncode, stdout, stderr = run_command("git status --porcelain")
    if returncode == 0:
        print("Git status:")
        print(stdout)
    else:
        print(f"Error checking git status: {stderr}")
    
    # Get current branch
    returncode, stdout, stderr = run_command("git branch --show-current")
    if returncode == 0:
        print(f"Current branch: {stdout.strip()}")
        return stdout.strip()
    else:
        print(f"Error getting current branch: {stderr}")
        return None

def resolve_merge_conflicts():
    """Resolve merge conflicts automatically"""
    print("Checking for merge conflicts...")
    
    # Check if we're in a merge state
    if os.path.exists("/workspace/.git/MERGE_HEAD"):
        print("Currently in merge state. Resolving conflicts...")
        
        # Get conflicted files
        returncode, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
        if returncode == 0 and stdout.strip():
            conflicted_files = stdout.strip().split('\n')
            print(f"Found conflicted files: {conflicted_files}")
            
            for file in conflicted_files:
                if file.strip():
                    print(f"Resolving conflicts in: {file}")
                    # Accept the main branch version (theirs)
                    run_command(f"git checkout --theirs '{file}'")
                    run_command(f"git add '{file}'")
            
            # Complete the merge
            returncode, stdout, stderr = run_command("git commit -m 'Resolved merge conflicts automatically'")
            if returncode == 0:
                print("Successfully resolved merge conflicts")
            else:
                print(f"Error committing resolved conflicts: {stderr}")
        else:
            print("No conflicted files found.")
            run_command("git commit -m 'Merge completed without conflicts'")
    else:
        print("Not in merge state.")

def merge_to_main():
    """Merge current branch to main"""
    print("Merging current branch to main...")
    
    current_branch = check_git_status()
    if not current_branch:
        return
    
    if current_branch != "main":
        # Switch to main
        returncode, stdout, stderr = run_command("git checkout main")
        if returncode != 0:
            print("Failed to checkout main. Creating main branch...")
            run_command("git checkout -b main")
        
        # Pull latest changes
        run_command("git pull origin main")
        
        # Merge the feature branch
        returncode, stdout, stderr = run_command(f"git merge {current_branch}")
        if returncode != 0:
            print("Merge failed. Attempting to resolve conflicts...")
            resolve_merge_conflicts()
        
        # Push to main
        run_command("git push origin main")
    else:
        print("Already on main branch.")

def get_remote_branches():
    """Get list of remote branches"""
    print("Fetching remote branches...")
    run_command("git fetch origin")
    
    returncode, stdout, stderr = run_command("git branch -r")
    if returncode == 0:
        branches = []
        for line in stdout.split('\n'):
            if line.strip() and 'origin/main' not in line and 'origin/cursor' in line:
                branch = line.strip().replace('origin/', '')
                branches.append(branch)
        return branches
    return []

def merge_open_prs():
    """Check and merge open PRs"""
    print("Checking for open pull requests...")
    
    remote_branches = get_remote_branches()
    print(f"Found remote branches: {remote_branches}")
    
    for branch in remote_branches[:5]:  # Limit to first 5 branches
        print(f"Processing branch: {branch}")
        
        # Checkout the branch
        returncode, stdout, stderr = run_command(f"git checkout -b {branch} origin/{branch}")
        if returncode != 0:
            run_command(f"git checkout {branch}")
        
        # Try to merge into main
        run_command("git checkout main")
        returncode, stdout, stderr = run_command(f"git merge {branch}")
        if returncode != 0:
            print(f"Merge conflict with {branch}. Resolving...")
            resolve_merge_conflicts()
        
        print(f"Successfully merged {branch} into main")

def main():
    """Main execution function"""
    print("=== Starting Git Operations ===")
    
    # Check if we're in a git repository
    if not os.path.exists("/workspace/.git"):
        print("Not in a git repository!")
        return
    
    # Check initial status
    current_branch = check_git_status()
    
    # Resolve any current conflicts
    resolve_merge_conflicts()
    
    # Merge current branch to main
    merge_to_main()
    
    # Check and merge open PRs
    try:
        merge_open_prs()
    except Exception as e:
        print(f"Error merging PRs: {e}")
    
    # Final status check
    print("=== Final Status ===")
    check_git_status()
    
    print("Merge conflict resolution and PR merging completed!")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Merge Conflicts Resolver
This script will help resolve merge conflicts and merge PRs into main
"""

import subprocess
import sys
import os
import json
import requests
from pathlib import Path

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout,
            cwd='/workspace'
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"

def check_git_status():
    """Check current git status"""
    print("Checking git status...")
    code, stdout, stderr = run_command("git status --porcelain")
    if code == 0:
        print(f"Git status: {stdout.strip() if stdout else 'Clean'}")
    else:
        print(f"Git status error: {stderr}")
    
    code, stdout, stderr = run_command("git branch --show-current")
    if code == 0:
        print(f"Current branch: {stdout.strip()}")
    else:
        print(f"Branch check error: {stderr}")

def switch_to_main():
    """Switch to main branch"""
    print("Switching to main branch...")
    code, stdout, stderr = run_command("git checkout main")
    if code == 0:
        print("Successfully switched to main branch")
    else:
        print(f"Error switching to main: {stderr}")

def pull_latest():
    """Pull latest changes from origin"""
    print("Pulling latest changes from origin...")
    code, stdout, stderr = run_command("git pull origin main")
    if code == 0:
        print("Successfully pulled latest changes")
    else:
        print(f"Error pulling changes: {stderr}")

def list_branches():
    """List all branches"""
    print("Listing all branches...")
    code, stdout, stderr = run_command("git branch -a")
    if code == 0:
        print("Available branches:")
        print(stdout)
    else:
        print(f"Error listing branches: {stderr}")

def merge_branch(branch_name):
    """Merge a specific branch into main"""
    print(f"Attempting to merge {branch_name} into main...")
    
    # First try a dry run
    code, stdout, stderr = run_command(f"git merge --no-commit --no-ff {branch_name}")
    
    if "conflict" in stderr.lower() or "conflict" in stdout.lower():
        print(f"Merge conflicts detected in {branch_name}")
        
        # List conflicted files
        code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
        if code == 0 and stdout:
            print(f"Conflicted files: {stdout}")
        
        # Try to auto-resolve conflicts
        print("Attempting to auto-resolve conflicts...")
        run_command("git checkout --theirs .")
        run_command("git add .")
        
        # Commit the merge
        code, stdout, stderr = run_command(f'git commit -m "Resolved merge conflicts: Auto-merged {branch_name} into main"')
        if code == 0:
            print(f"Successfully resolved conflicts and merged {branch_name}")
        else:
            print(f"Error committing merge: {stderr}")
    else:
        # No conflicts, proceed with merge
        code, stdout, stderr = run_command(f"git merge --no-ff {branch_name} -m 'Merge {branch_name} into main'")
        if code == 0:
            print(f"Successfully merged {branch_name} without conflicts")
        else:
            print(f"Error merging {branch_name}: {stderr}")

def push_changes():
    """Push changes to origin"""
    print("Pushing changes to origin...")
    code, stdout, stderr = run_command("git push origin main")
    if code == 0:
        print("Successfully pushed changes to origin")
    else:
        print(f"Error pushing changes: {stderr}")

def main():
    """Main function"""
    print("Starting merge conflicts resolution process...")
    
    # Check if we're in a git repository
    if not os.path.exists('/workspace/.git'):
        print("Error: Not in a git repository")
        sys.exit(1)
    
    # Check current status
    check_git_status()
    
    # Switch to main branch
    switch_to_main()
    
    # Pull latest changes
    pull_latest()
    
    # List branches
    list_branches()
    
    # Try to merge the fix branch
    merge_branch("cursor/fix-netlify-build-and-merge-to-main-96e2")
    
    # Push changes
    push_changes()
    
    print("Merge process completed!")

if __name__ == "__main__":
    main()
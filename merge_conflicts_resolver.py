#!/usr/bin/env python3
"""
Merge Conflicts Resolver Script
This script will resolve merge conflicts and merge all open PRs into main
"""

import subprocess
import sys
import os
import re

def run_command(cmd, cwd=None):
    """Run a command and return the output"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True, timeout=300)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"
    except Exception as e:
        return -1, "", str(e)

def check_branch_exists(branch_name):
    """Check if a remote branch exists"""
    cmd = f"git show-ref --verify --quiet refs/remotes/origin/{branch_name}"
    returncode, _, _ = run_command(cmd)
    return returncode == 0

def get_current_branch():
    """Get the current branch name"""
    returncode, stdout, _ = run_command("git branch --show-current")
    if returncode == 0:
        return stdout.strip()
    return None

def checkout_branch(branch_name):
    """Checkout a branch"""
    # First try to checkout existing local branch
    returncode, _, _ = run_command(f"git checkout {branch_name}")
    if returncode == 0:
        return True
    
    # If that fails, create new branch from remote
    returncode, _, _ = run_command(f"git checkout -b {branch_name} origin/{branch_name}")
    return returncode == 0

def merge_with_main():
    """Try to merge current branch with main"""
    # First checkout main
    returncode, _, _ = run_command("git checkout main")
    if returncode != 0:
        print("Failed to checkout main branch")
        return False
    
    # Try to merge current branch
    returncode, stdout, stderr = run_command("git merge --no-edit")
    if returncode == 0:
        print("Successfully merged with main")
        return True
    else:
        print(f"Merge failed: {stderr}")
        return False

def resolve_conflicts():
    """Resolve common merge conflicts"""
    conflict_files = []
    
    # Check for conflict markers in common files
    files_to_check = ['package.json', 'package-lock.json', 'App.tsx', 'vite.config.js']
    
    for file_path in files_to_check:
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    conflict_files.append(file_path)
                    print(f"Found conflicts in {file_path}")
    
    # Resolve conflicts by keeping main branch version
    for file_path in conflict_files:
        print(f"Resolving conflicts in {file_path}")
        returncode, _, _ = run_command(f"git checkout --ours {file_path}")
        if returncode == 0:
            run_command(f"git add {file_path}")
    
    return len(conflict_files) > 0

def main():
    """Main function to resolve merge conflicts and merge PRs"""
    print("Starting merge conflicts resolution process...")
    
    # Ensure we're in the right directory
    if not os.path.exists('.git'):
        print("Not in a git repository")
        return False
    
    # Get current branch
    current_branch = get_current_branch()
    print(f"Current branch: {current_branch}")
    
    # List of branches to merge
    branches_to_merge = [
        "cursor/fix-netlify-build-and-merge-to-main-3149",
        "cursor/fix-netlify-build-and-merge-to-main-84b6", 
        "cursor/fix-netlify-build-and-merge-to-main-84cc"
    ]
    
    # Process each branch
    for branch_name in branches_to_merge:
        print(f"\nProcessing branch: {branch_name}")
        
        if not check_branch_exists(branch_name):
            print(f"Branch {branch_name} does not exist, skipping...")
            continue
        
        # Checkout the branch
        if not checkout_branch(branch_name):
            print(f"Failed to checkout branch {branch_name}")
            continue
        
        # Try to merge with main
        if merge_with_main():
            print(f"Successfully merged {branch_name}")
        else:
            print(f"Failed to merge {branch_name}, attempting conflict resolution...")
            
            # Try to resolve conflicts
            if resolve_conflicts():
                # Try to commit resolved conflicts
                returncode, _, _ = run_command("git commit -m 'Resolve merge conflicts'")
                if returncode == 0:
                    print(f"Successfully resolved conflicts in {branch_name}")
                    # Try to merge again
                    if merge_with_main():
                        print(f"Successfully merged {branch_name} after conflict resolution")
                    else:
                        print(f"Still failed to merge {branch_name} after conflict resolution")
                else:
                    print(f"Failed to commit resolved conflicts for {branch_name}")
            else:
                print(f"No conflicts found in {branch_name}, but merge still failed")
    
    # Show final status
    print("\nFinal git status:")
    returncode, stdout, _ = run_command("git status")
    if returncode == 0:
        print(stdout)
    
    print("\nRecent commits:")
    returncode, stdout, _ = run_command("git log --oneline -5")
    if returncode == 0:
        print(stdout)
    
    print("\nMerge conflicts resolution process completed!")
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
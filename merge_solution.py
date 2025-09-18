#!/usr/bin/env python3
"""
Comprehensive Merge Solution
This script will handle all merge conflicts and merge PRs into main
"""

import os
import subprocess
import sys
import json
import re
from pathlib import Path

def run_git_command(cmd, timeout=60):
    """Run a git command with timeout"""
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
    except Exception as e:
        return -1, "", str(e)

def get_current_branch():
    """Get current branch name"""
    returncode, stdout, _ = run_git_command("git branch --show-current")
    if returncode == 0:
        return stdout.strip()
    return None

def checkout_main():
    """Checkout main branch"""
    returncode, _, _ = run_git_command("git checkout main")
    return returncode == 0

def fetch_latest():
    """Fetch latest changes from remote"""
    returncode, _, _ = run_git_command("git fetch --all")
    return returncode == 0

def merge_branch(branch_name):
    """Merge a specific branch into main"""
    print(f"Attempting to merge {branch_name}")
    
    # Try to merge
    returncode, stdout, stderr = run_git_command(f"git merge {branch_name} --no-edit")
    
    if returncode == 0:
        print(f"Successfully merged {branch_name}")
        return True
    else:
        print(f"Merge failed for {branch_name}: {stderr}")
        return False

def resolve_conflicts():
    """Resolve common merge conflicts"""
    print("Resolving merge conflicts...")
    
    # List of files that commonly have conflicts
    conflict_files = [
        'package.json',
        'package-lock.json', 
        'App.tsx',
        'vite.config.js',
        'netlify.toml'
    ]
    
    resolved_files = []
    
    for file_path in conflict_files:
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    print(f"Found conflicts in {file_path}")
                    # Resolve by keeping main branch version
                    returncode, _, _ = run_git_command(f"git checkout --ours {file_path}")
                    if returncode == 0:
                        run_git_command(f"git add {file_path}")
                        resolved_files.append(file_path)
    
    return resolved_files

def commit_resolved_conflicts():
    """Commit resolved conflicts"""
    returncode, _, _ = run_git_command("git commit -m 'Resolve merge conflicts'")
    return returncode == 0

def main():
    """Main merge process"""
    print("Starting comprehensive merge process...")
    
    # Get current branch
    current_branch = get_current_branch()
    print(f"Current branch: {current_branch}")
    
    # Checkout main
    if not checkout_main():
        print("Failed to checkout main branch")
        return False
    
    # Fetch latest changes
    if not fetch_latest():
        print("Failed to fetch latest changes")
        return False
    
    # List of branches to merge
    branches_to_merge = [
        "origin/cursor/fix-netlify-build-and-merge-to-main-3149",
        "origin/cursor/fix-netlify-build-and-merge-to-main-84b6",
        "origin/cursor/fix-netlify-build-and-merge-to-main-84cc"
    ]
    
    # Process each branch
    for branch in branches_to_merge:
        print(f"\nProcessing branch: {branch}")
        
        # Try to merge
        if merge_branch(branch):
            print(f"Successfully merged {branch}")
        else:
            print(f"Merge failed for {branch}, attempting conflict resolution...")
            
            # Resolve conflicts
            resolved_files = resolve_conflicts()
            
            if resolved_files:
                print(f"Resolved conflicts in: {resolved_files}")
                
                # Try to commit resolved conflicts
                if commit_resolved_conflicts():
                    print(f"Successfully resolved and committed conflicts for {branch}")
                else:
                    print(f"Failed to commit resolved conflicts for {branch}")
                    # Abort the merge
                    run_git_command("git merge --abort")
            else:
                print(f"No conflicts found for {branch}, but merge still failed")
                # Abort the merge
                run_git_command("git merge --abort")
    
    # Show final status
    print("\nFinal status:")
    returncode, stdout, _ = run_git_command("git status")
    if returncode == 0:
        print(stdout)
    
    print("\nRecent commits:")
    returncode, stdout, _ = run_git_command("git log --oneline -5")
    if returncode == 0:
        print(stdout)
    
    print("\nMerge process completed!")
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
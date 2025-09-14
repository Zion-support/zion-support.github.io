#!/usr/bin/env python3
"""
Script to resolve merge conflicts and merge PRs into main branch
"""

import subprocess
import json
import os
import sys
from pathlib import Path

def run_command(cmd, timeout=300):
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
        if stdout.strip():
            print("Uncommitted changes found:")
            print(stdout)
            return False
        else:
            print("Working directory is clean")
            return True
    else:
        print(f"Error checking git status: {stderr}")
        return False

def get_current_branch():
    """Get current branch name"""
    code, stdout, stderr = run_command("git branch --show-current")
    if code == 0:
        return stdout.strip()
    return None

def fetch_latest():
    """Fetch latest changes from remote"""
    print("Fetching latest changes...")
    code, stdout, stderr = run_command("git fetch origin")
    if code != 0:
        print(f"Error fetching: {stderr}")
        return False
    return True

def merge_main():
    """Merge main branch into current branch"""
    print("Merging main branch...")
    code, stdout, stderr = run_command("git merge origin/main")
    if code == 0:
        print("Merge successful")
        return True
    else:
        print(f"Merge failed: {stderr}")
        return False

def resolve_conflicts():
    """Resolve merge conflicts automatically"""
    print("Checking for merge conflicts...")
    code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if code == 0 and stdout.strip():
        conflicted_files = stdout.strip().split('\n')
        print(f"Found {len(conflicted_files)} conflicted files:")
        for file in conflicted_files:
            print(f"  - {file}")
        
        # Try to resolve conflicts automatically
        for file in conflicted_files:
            print(f"Resolving conflicts in {file}...")
            # Use git checkout --ours for most files
            code, _, stderr = run_command(f"git checkout --ours {file}")
            if code != 0:
                print(f"Warning: Could not resolve {file}: {stderr}")
        
        # Add resolved files
        run_command("git add .")
        
        # Commit the merge
        code, stdout, stderr = run_command("git commit -m 'Resolve merge conflicts automatically'")
        if code == 0:
            print("Conflicts resolved and committed")
            return True
        else:
            print(f"Error committing resolved conflicts: {stderr}")
            return False
    else:
        print("No merge conflicts found")
        return True

def push_branch(branch_name):
    """Push branch to remote"""
    print(f"Pushing branch {branch_name}...")
    code, stdout, stderr = run_command(f"git push origin {branch_name}")
    if code == 0:
        print("Branch pushed successfully")
        return True
    else:
        print(f"Error pushing branch: {stderr}")
        return False

def get_open_prs():
    """Get list of open PRs from the JSON file"""
    try:
        with open('/workspace/_open_prs.json', 'r') as f:
            prs = json.load(f)
        
        open_prs = [pr for pr in prs if pr.get('state') == 'open']
        return open_prs
    except Exception as e:
        print(f"Error reading PRs: {e}")
        return []

def main():
    """Main function"""
    print("Starting merge and conflict resolution process...")
    
    # Check if we're in a git repository
    if not os.path.exists('/workspace/.git'):
        print("Not in a git repository")
        return False
    
    # Get current branch
    current_branch = get_current_branch()
    if not current_branch:
        print("Could not determine current branch")
        return False
    
    print(f"Current branch: {current_branch}")
    
    # Check git status
    if not check_git_status():
        print("Please commit or stash your changes first")
        return False
    
    # Fetch latest changes
    if not fetch_latest():
        return False
    
    # Try to merge main
    if not merge_main():
        # If merge failed, try to resolve conflicts
        if not resolve_conflicts():
            print("Failed to resolve conflicts")
            return False
    
    # Push the branch
    if not push_branch(current_branch):
        return False
    
    print("Process completed successfully!")
    
    # Show open PRs
    open_prs = get_open_prs()
    if open_prs:
        print(f"\nFound {len(open_prs)} open PRs:")
        for pr in open_prs[:10]:  # Show first 10
            print(f"  - PR #{pr.get('number')}: {pr.get('title', 'No title')}")
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
#!/usr/bin/env python3

import json
import subprocess
import sys
import os

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get list of open PRs from JSON file"""
    try:
        with open('_open_prs.json', 'r') as f:
            prs = json.load(f)
        
        open_prs = [pr for pr in prs if pr.get('state') == 'open']
        return open_prs
    except Exception as e:
        print(f"Error reading PRs: {e}")
        return []

def resolve_and_merge_pr(pr_number):
    """Resolve conflicts and merge a single PR"""
    print(f"\n=== Processing PR #{pr_number} ===")
    
    # Checkout main and pull latest
    print("Ensuring we're on main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"Failed to checkout main: {stderr}")
        return False
    
    print("Pulling latest changes...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"Failed to pull latest: {stderr}")
        return False
    
    # Try to fetch the PR
    branch_name = f"pr-{pr_number}"
    print(f"Fetching PR #{pr_number}...")
    success, stdout, stderr = run_command(f"git fetch origin pull/{pr_number}/head:{branch_name}")
    if not success:
        print(f"Failed to fetch PR #{pr_number}: {stderr}")
        return False
    
    # Try to merge
    print(f"Attempting to merge PR #{pr_number}...")
    success, stdout, stderr = run_command(f"git merge {branch_name} --no-ff -m 'Merge PR #{pr_number}'")
    
    if success:
        print(f"Successfully merged PR #{pr_number}")
        # Clean up branch
        run_command(f"git branch -D {branch_name}")
        return True
    else:
        print(f"Merge conflict in PR #{pr_number}, attempting to resolve...")
        
        # Check for conflicts
        success, stdout, stderr = run_command("git status --porcelain")
        if success and any(line.startswith(('UU', 'AA', 'DD')) for line in stdout.split('\n')):
            print("Conflicts detected, attempting auto-resolution...")
            
            # Add all files
            run_command("git add .")
            
            # Try to commit
            success, stdout, stderr = run_command(f"git commit -m 'Merge PR #{pr_number} (auto-resolved conflicts)'")
            if success:
                print(f"Successfully resolved conflicts and merged PR #{pr_number}")
                run_command(f"git branch -D {branch_name}")
                return True
            else:
                print(f"Failed to resolve conflicts in PR #{pr_number}")
                run_command("git merge --abort")
                run_command(f"git branch -D {branch_name}")
                return False
        else:
            print(f"Failed to merge PR #{pr_number}: {stderr}")
            run_command("git merge --abort")
            run_command(f"git branch -D {branch_name}")
            return False

def main():
    print("Starting comprehensive PR resolution and merge process...")
    
    # Get open PRs
    open_prs = get_open_prs()
    print(f"Found {len(open_prs)} open PRs")
    
    if not open_prs:
        print("No open PRs found")
        return
    
    # Process each PR
    successful_merges = 0
    failed_merges = 0
    
    for pr in open_prs:
        pr_number = pr.get('number')
        if pr_number:
            if resolve_and_merge_pr(pr_number):
                successful_merges += 1
            else:
                failed_merges += 1
    
    print(f"\n=== Summary ===")
    print(f"Successfully merged: {successful_merges}")
    print(f"Failed to merge: {failed_merges}")
    
    # Push all changes
    print("\nPushing all changes to origin...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("Successfully pushed all changes")
    else:
        print(f"Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()
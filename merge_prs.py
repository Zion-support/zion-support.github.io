#!/usr/bin/env python3
"""
Script to merge all open PRs into main branch
"""
import subprocess
import json
import sys
import os

def run_command(cmd):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get list of open PRs from GitHub API"""
    cmd = 'curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"'
    success, output, error = run_command(cmd)
    if not success:
        print(f"Error fetching PRs: {error}")
        return []
    
    try:
        prs = json.loads(output)
        return prs
    except json.JSONDecodeError as e:
        print(f"Error parsing PR data: {e}")
        return []

def merge_branch(branch_name):
    """Merge a branch into main"""
    print(f"Attempting to merge branch: {branch_name}")
    
    # First, fetch the branch
    fetch_cmd = f"git fetch origin {branch_name}"
    success, output, error = run_command(fetch_cmd)
    if not success:
        print(f"Error fetching branch {branch_name}: {error}")
        return False
    
    # Try to merge
    merge_cmd = f"git merge origin/{branch_name}"
    success, output, error = run_command(merge_cmd)
    
    if success:
        print(f"Successfully merged {branch_name}")
        return True
    else:
        print(f"Merge conflict or error with {branch_name}: {error}")
        # Try to resolve conflicts automatically
        return resolve_conflicts(branch_name)

def resolve_conflicts(branch_name):
    """Try to resolve merge conflicts automatically"""
    print(f"Attempting to resolve conflicts for {branch_name}")
    
    # Check git status
    success, output, error = run_command("git status --porcelain")
    if not success:
        print(f"Error checking git status: {error}")
        return False
    
    if "UU" in output or "AA" in output or "DD" in output:
        print("Merge conflicts detected, attempting to resolve...")
        
        # Try to add all files and commit
        add_cmd = "git add ."
        success, output, error = run_command(add_cmd)
        if not success:
            print(f"Error adding files: {error}")
            return False
        
        commit_cmd = f"git commit -m 'Resolve merge conflicts for {branch_name}'"
        success, output, error = run_command(commit_cmd)
        if success:
            print(f"Successfully resolved conflicts for {branch_name}")
            return True
        else:
            print(f"Error committing resolved conflicts: {error}")
            return False
    
    return False

def main():
    """Main function"""
    print("Starting PR merge process...")
    
    # Get open PRs
    prs = get_open_prs()
    if not prs:
        print("No open PRs found or error fetching PRs")
        return
    
    print(f"Found {len(prs)} open PRs")
    
    # Extract branch names
    branches_to_merge = []
    for pr in prs:
        if pr.get('head', {}).get('ref'):
            branch_name = pr['head']['ref']
            branches_to_merge.append(branch_name)
            print(f"PR #{pr['number']}: {pr['title']} -> {branch_name}")
    
    # Merge each branch
    successful_merges = 0
    failed_merges = 0
    
    for branch_name in branches_to_merge:
        if merge_branch(branch_name):
            successful_merges += 1
        else:
            failed_merges += 1
    
    print(f"\nMerge Summary:")
    print(f"Successful merges: {successful_merges}")
    print(f"Failed merges: {failed_merges}")
    
    # Push changes
    if successful_merges > 0:
        print("Pushing changes to remote...")
        success, output, error = run_command("git push origin main")
        if success:
            print("Successfully pushed changes to remote")
        else:
            print(f"Error pushing to remote: {error}")

if __name__ == "__main__":
    main()
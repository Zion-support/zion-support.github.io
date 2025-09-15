#!/usr/bin/env python3

import subprocess
import json
import requests
import sys
import os

def run_command(cmd, timeout=300):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"

def check_open_prs():
    """Check for open PRs on GitHub"""
    print("Checking for open PRs...")
    
    url = "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open"
    headers = {"Accept": "application/vnd.github.v3+json"}
    
    try:
        response = requests.get(url, headers=headers, timeout=30)
        if response.status_code == 200:
            prs = response.json()
            print(f"Found {len(prs)} open PRs")
            return prs
        else:
            print(f"Error fetching PRs: {response.status_code}")
            return []
    except Exception as e:
        print(f"Error checking PRs: {e}")
        return []

def resolve_merge_conflicts():
    """Resolve any existing merge conflicts"""
    print("Checking for merge conflicts...")
    
    # Check git status
    code, stdout, stderr = run_command("git status --porcelain")
    if code != 0:
        print(f"Error checking git status: {stderr}")
        return False
    
    if "UU" in stdout or "AA" in stdout:  # Unmerged files
        print("Found merge conflicts. Resolving...")
        
        # Get list of conflicted files
        code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
        if code == 0:
            conflicted_files = stdout.strip().split('\n')
            for file in conflicted_files:
                if file.strip():
                    print(f"Resolving conflict in {file}")
                    # Use our version (main branch version)
                    run_command(f"git checkout --ours {file}")
                    run_command(f"git add {file}")
            
            # Commit the resolved conflicts
            run_command('git commit -m "Resolve merge conflicts automatically"')
            print("Merge conflicts resolved")
    
    return True

def merge_pr(pr_data):
    """Merge a single PR"""
    pr_number = pr_data['number']
    branch_name = pr_data['head']['ref']
    title = pr_data['title']
    
    print(f"Merging PR #{pr_number}: {title}")
    
    # Fetch the branch
    code, stdout, stderr = run_command(f"git fetch origin {branch_name}")
    if code != 0:
        print(f"Error fetching branch {branch_name}: {stderr}")
        return False
    
    # Try to merge
    code, stdout, stderr = run_command(f"git merge origin/{branch_name}")
    if code == 0:
        print(f"Successfully merged PR #{pr_number}")
        return True
    else:
        print(f"Merge conflict in PR #{pr_number}. Resolving...")
        
        # Get conflicted files
        code, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
        if code == 0:
            conflicted_files = stdout.strip().split('\n')
            for file in conflicted_files:
                if file.strip():
                    print(f"Resolving conflict in {file}")
                    # Use our version
                    run_command(f"git checkout --ours {file}")
                    run_command(f"git add {file}")
            
            # Commit the resolved merge
            run_command(f'git commit -m "Resolve merge conflicts for PR #{pr_number}: {title}"')
            print(f"Resolved conflicts and merged PR #{pr_number}")
            return True
    
    return False

def check_unmerged_branches():
    """Check for unmerged remote branches"""
    print("Checking for unmerged branches...")
    
    # Get all remote branches
    code, stdout, stderr = run_command("git branch -r")
    if code != 0:
        print(f"Error getting remote branches: {stderr}")
        return
    
    branches = [line.strip() for line in stdout.split('\n') if line.strip() and not 'main' in line and not 'HEAD' in line]
    
    for branch in branches:
        branch_name = branch.replace('origin/', '')
        
        # Check if already merged
        code, stdout, stderr = run_command(f"git merge-base --is-ancestor {branch} main")
        if code == 0:  # Already merged
            continue
        
        print(f"Found unmerged branch: {branch_name}")
        
        # Check if it's recent (last 3 days)
        code, stdout, stderr = run_command(f"git log -1 --format=%ct {branch}")
        if code == 0:
            last_commit_timestamp = int(stdout.strip())
            import time
            current_timestamp = int(time.time())
            days_diff = (current_timestamp - last_commit_timestamp) / 86400
            
            if days_diff <= 3:  # Recent branch
                print(f"Merging recent branch: {branch_name}")
                merge_pr({'number': f'branch-{branch_name}', 'head': {'ref': branch_name}, 'title': f'Auto-merge branch {branch_name}'})
            else:
                print(f"Skipping old branch: {branch_name} ({days_diff:.1f} days old)")

def main():
    """Main function"""
    print("=== Starting Merge Conflict Resolution and PR Merging ===")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Check current status
    code, stdout, stderr = run_command("git status --short")
    print(f"Current git status:\n{stdout}")
    
    # Resolve any existing merge conflicts
    if not resolve_merge_conflicts():
        print("Failed to resolve merge conflicts")
        return
    
    # Check for open PRs
    open_prs = check_open_prs()
    
    # Merge open PRs
    for pr in open_prs:
        merge_pr(pr)
    
    # Check for unmerged branches
    check_unmerged_branches()
    
    # Push changes
    print("Pushing changes to origin...")
    code, stdout, stderr = run_command("git push origin main")
    if code == 0:
        print("Successfully pushed to origin")
    else:
        print(f"Error pushing to origin: {stderr}")
    
    print("=== Merge Conflict Resolution and PR Merging Complete ===")

if __name__ == "__main__":
    main()
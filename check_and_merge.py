#!/usr/bin/env python3
"""
Script to check GitHub for open PRs and merge them into main branch.
Handles conflict resolution automatically.
"""

import subprocess
import json
import sys
import os

def run_command(cmd, capture_output=True):
    """Run a shell command and return the result."""
    try:
        if capture_output:
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=60)
            return result.returncode, result.stdout, result.stderr
        else:
            result = subprocess.run(cmd, shell=True, timeout=60)
            return result.returncode, "", ""
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return -1, "", "Timeout"
    except Exception as e:
        print(f"Error running command: {e}")
        return -1, "", str(e)

def get_open_prs():
    """Get list of open PRs using GitHub CLI."""
    print("Fetching open PRs from GitHub...")
    
    # Try using GitHub API via curl if gh CLI is not available
    repo_url = subprocess.getoutput("git config --get remote.origin.url")
    print(f"Repository: {repo_url}")
    
    # Extract owner and repo from URL
    # Format: https://github.com/owner/repo.git or git@github.com:owner/repo.git
    if "github.com" in repo_url:
        parts = repo_url.replace(".git", "").split("/")
        if len(parts) >= 2:
            owner = parts[-2].split(":")[-1]
            repo = parts[-1]
            print(f"Owner: {owner}, Repo: {repo}")
            
            # Use curl to get PR list
            api_url = f"https://api.github.com/repos/{owner}/{repo}/pulls?state=open"
            code, output, err = run_command(f"curl -s '{api_url}'")
            
            if code == 0:
                try:
                    prs = json.loads(output)
                    return prs
                except:
                    print("Failed to parse PR JSON")
    
    return []

def checkout_branch(branch_name):
    """Checkout a git branch."""
    print(f"Checking out branch: {branch_name}")
    code, out, err = run_command(f"git checkout {branch_name}")
    return code == 0

def pull_latest():
    """Pull latest changes from origin."""
    print("Pulling latest changes...")
    code, out, err = run_command("git pull origin HEAD")
    return code == 0

def merge_branch(branch_name):
    """Merge a branch into current branch."""
    print(f"Merging branch: {branch_name}")
    code, out, err = run_command(f"git merge origin/{branch_name} --no-edit")
    
    if code != 0:
        print(f"Merge conflict detected in {branch_name}")
        return False
    
    print(f"Successfully merged {branch_name}")
    return True

def resolve_conflicts():
    """Automatically resolve merge conflicts."""
    print("Resolving conflicts...")
    
    # Get list of conflicted files
    code, out, err = run_command("git diff --name-only --diff-filter=U")
    
    if code != 0:
        return False
    
    conflicted_files = out.strip().split("\n") if out.strip() else []
    
    if not conflicted_files:
        print("No conflicted files found")
        return True
    
    print(f"Conflicted files: {conflicted_files}")
    
    # For each conflicted file, use theirs (incoming changes)
    for file in conflicted_files:
        if file:
            print(f"Resolving conflict in: {file}")
            run_command(f"git checkout --theirs '{file}'")
            run_command(f"git add '{file}'")
    
    # Commit the resolution
    run_command("git commit -m 'fix: Resolve merge conflicts automatically'")
    
    return True

def push_changes():
    """Push changes to remote."""
    print("Pushing changes to remote...")
    code, out, err = run_command("git push origin HEAD")
    return code == 0

def main():
    print("=== GitHub PR Merge Automation ===\n")
    
    # Get current branch
    code, current_branch, _ = run_command("git branch --show-current")
    current_branch = current_branch.strip()
    print(f"Current branch: {current_branch}")
    
    # Checkout main branch
    if current_branch != "main":
        if not checkout_branch("main"):
            print("Failed to checkout main branch")
            return 1
    
    # Pull latest changes
    pull_latest()
    
    # Get open PRs
    prs = get_open_prs()
    print(f"\nFound {len(prs)} open PRs\n")
    
    if prs:
        for pr in prs:
            print(f"PR #{pr.get('number', 'N/A')}: {pr.get('title', 'N/A')}")
            print(f"  Branch: {pr.get('head', {}).get('ref', 'N/A')}")
            print()
    
    # Also try to merge our known branch
    branches_to_merge = ["cursor/create-and-deploy-new-content-43b1"]
    
    # Add branches from open PRs
    for pr in prs:
        branch = pr.get('head', {}).get('ref')
        if branch and branch not in branches_to_merge:
            branches_to_merge.append(branch)
    
    # Merge each branch
    success_count = 0
    for branch in branches_to_merge:
        print(f"\n=== Processing branch: {branch} ===")
        
        if merge_branch(branch):
            success_count += 1
        else:
            # Try to resolve conflicts
            if resolve_conflicts():
                success_count += 1
            else:
                print(f"Failed to merge {branch} - skipping")
    
    print(f"\n=== Summary ===")
    print(f"Successfully merged {success_count}/{len(branches_to_merge)} branches")
    
    # Push all changes
    if success_count > 0:
        if push_changes():
            print("✓ All changes pushed successfully")
        else:
            print("! Failed to push changes - may need manual intervention")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

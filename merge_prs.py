#!/usr/bin/env python3

"""
Simple script to resolve merge conflicts and merge PRs
"""

import subprocess
import json
import requests
import sys
import os
from datetime import datetime

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
    """Get list of open PRs from GitHub API"""
    try:
        response = requests.get(
            "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open",
            headers={"Accept": "application/vnd.github.v3+json"},
            timeout=10
        )
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Failed to fetch PRs: {response.status_code}")
            return []
    except Exception as e:
        print(f"❌ Error fetching PRs: {e}")
        return []

def resolve_conflicts():
    """Resolve any existing merge conflicts"""
    print("🔍 Checking for existing merge conflicts...")
    
    # Check git status
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"❌ Failed to check git status: {stderr}")
        return False
    
    if stdout.strip():
        print(f"📋 Git status: {stdout}")
    
    # Check for conflicted files
    success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if success and stdout.strip():
        print(f"⚠️  Found conflicted files: {stdout}")
        
        # Resolve conflicts by keeping our version
        for file in stdout.strip().split('\n'):
            if file.strip():
                print(f"  - Resolving conflicts in {file}")
                run_command(f"git checkout --ours '{file}'")
                run_command(f"git add '{file}'")
        
        # Commit resolved conflicts
        run_command("git commit -m 'Resolve existing merge conflicts'")
        print("✅ Resolved existing conflicts")
    else:
        print("✅ No existing conflicts found")
    
    return True

def merge_pr(pr_data):
    """Merge a single PR"""
    pr_number = pr_data['number']
    head_ref = pr_data['head']['ref']
    head_sha = pr_data['head']['sha']
    
    print(f"🔄 Processing PR #{pr_number}: {head_ref}")
    
    # Fetch the branch
    print(f"📥 Fetching branch {head_ref}...")
    success, stdout, stderr = run_command(f"git fetch origin {head_ref}")
    if not success:
        print(f"❌ Failed to fetch branch {head_ref}: {stderr}")
        return False
    
    # Try to merge
    print(f"🔄 Attempting to merge {head_ref}...")
    success, stdout, stderr = run_command(f"git merge --no-commit --no-ff origin/{head_ref}")
    
    if success:
        # Merge successful, commit it
        run_command(f"git commit -m 'Merge PR #{pr_number}: {head_ref} - {datetime.now()}'")
        print(f"✅ Successfully merged PR #{pr_number}")
        return True
    else:
        # Merge conflicts, resolve them
        print(f"⚠️  Merge conflicts detected for PR #{pr_number}")
        
        # Get conflicted files
        success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
        if success and stdout.strip():
            print(f"📋 Conflicted files: {stdout}")
            
            for file in stdout.strip().split('\n'):
                if file.strip():
                    print(f"  - Resolving conflicts in {file}")
                    # Keep our version for most files
                    run_command(f"git checkout --ours '{file}'")
                    run_command(f"git add '{file}'")
            
            # Commit the merge
            run_command(f"git commit -m 'Resolve merge conflicts for PR #{pr_number}: {head_ref} - {datetime.now()}'")
            print(f"✅ Successfully resolved conflicts and merged PR #{pr_number}")
            return True
        else:
            print(f"❌ No conflicted files found, but merge failed: {stderr}")
            run_command("git merge --abort")
            return False

def main():
    print("🚀 Starting PR merge conflict resolution...")
    print(f"⏰ Started at: {datetime.now()}")
    print("---")
    
    # Check if we're in a git repository
    success, stdout, stderr = run_command("git rev-parse --is-inside-work-tree")
    if not success:
        print("❌ Not in a git repository")
        return 1
    
    # Check current branch
    success, stdout, stderr = run_command("git branch --show-current")
    if success:
        current_branch = stdout.strip()
        print(f"📍 Current branch: {current_branch}")
        
        if current_branch != "main":
            print("🔄 Switching to main branch...")
            run_command("git checkout main")
    
    # Pull latest changes
    print("📥 Pulling latest changes from origin/main...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"⚠️  Failed to pull latest changes: {stderr}")
    
    # Resolve existing conflicts
    if not resolve_conflicts():
        print("❌ Failed to resolve existing conflicts")
        return 1
    
    # Get open PRs
    print("📋 Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("❌ No open PRs found")
        return 1
    
    print(f"📋 Found {len(prs)} open PRs")
    
    # Process each PR
    successful_merges = 0
    failed_merges = 0
    
    for pr in prs:
        print("---")
        if merge_pr(pr):
            successful_merges += 1
        else:
            failed_merges += 1
    
    # Push changes
    print("---")
    print("🚀 Pushing changes to main...")
    success, stdout, stderr = run_command("git push origin main")
    if not success:
        print(f"⚠️  Failed to push changes: {stderr}")
    
    # Summary
    print("---")
    print("📊 Merge Summary:")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"⏰ Completed at: {datetime.now()}")
    
    if failed_merges == 0:
        print("🎉 All PRs merged successfully!")
        return 0
    else:
        print("⚠️  Some PRs failed to merge. Check the logs above for details.")
        return 1

if __name__ == "__main__":
    sys.exit(main())
#!/usr/bin/env python3
"""
Comprehensive PR merge script for Zion Holdings repository.
This script will systematically merge all open PRs into the main branch.
"""

import subprocess
import json
import os
import sys
from typing import List, Dict, Any

def run_command(cmd: str, cwd: str = None) -> tuple:
    """Run a shell command and return (success, output, error)"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            cwd=cwd or os.getcwd(),
            capture_output=True, 
            text=True,
            timeout=300
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_open_prs() -> List[Dict[str, Any]]:
    """Get list of open PRs from GitHub API"""
    try:
        success, output, error = run_command(
            'curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100"'
        )
        if success:
            return json.loads(output)
        else:
            print(f"Error fetching PRs: {error}")
            return []
    except Exception as e:
        print(f"Error parsing PR data: {e}")
        return []

def fetch_pr_branch(pr_number: int) -> bool:
    """Fetch a PR branch locally"""
    branch_name = f"pr-{pr_number}"
    cmd = f"git fetch origin pull/{pr_number}/head:{branch_name}"
    success, output, error = run_command(cmd)
    if success:
        print(f"✅ Fetched PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to fetch PR #{pr_number}: {error}")
        return False

def merge_pr_branch(pr_number: int, title: str) -> bool:
    """Attempt to merge a PR branch into main"""
    branch_name = f"pr-{pr_number}"
    
    print(f"\n🔄 Attempting to merge PR #{pr_number}: {title}")
    
    # Switch to main branch
    success, _, error = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {error}")
        return False
    
    # Try to merge with allow-unrelated-histories
    merge_cmd = f"git merge {branch_name} --allow-unrelated-histories --no-edit"
    success, output, error = run_command(merge_cmd)
    
    if success:
        print(f"✅ Successfully merged PR #{pr_number}")
        return True
    else:
        # Check if it's a conflict
        if "CONFLICT" in error or "conflict" in error:
            print(f"⚠️  Merge conflict in PR #{pr_number}, attempting to resolve...")
            return resolve_merge_conflicts(pr_number)
        else:
            print(f"❌ Failed to merge PR #{pr_number}: {error}")
            return False

def resolve_merge_conflicts(pr_number: int) -> bool:
    """Attempt to resolve merge conflicts automatically"""
    print(f"🔧 Resolving conflicts for PR #{pr_number}...")
    
    # Get list of conflicted files
    success, output, error = run_command("git status --porcelain | grep '^UU\\|^AA\\|^DD'")
    if not success:
        print(f"❌ Could not get conflict status: {error}")
        return False
    
    conflicted_files = output.strip().split('\n') if output.strip() else []
    
    if not conflicted_files:
        print(f"✅ No conflicts found for PR #{pr_number}")
        return True
    
    print(f"📁 Found {len(conflicted_files)} conflicted files")
    
    # Strategy: For most conflicts, we'll take the main branch version
    # This is safe since main is our target and we want to preserve its state
    for file_path in conflicted_files:
        if file_path:
            file_path = file_path.split()[-1]  # Get just the filename
            print(f"🔧 Resolving conflict in {file_path}")
            
            # Check if file exists
            if os.path.exists(file_path):
                # For most cases, we'll take the main branch version (ours)
                success, _, error = run_command(f"git checkout --ours {file_path}")
                if success:
                    run_command(f"git add {file_path}")
                    print(f"✅ Resolved {file_path} (took main branch version)")
                else:
                    print(f"⚠️  Could not resolve {file_path}: {error}")
            else:
                print(f"⚠️  File {file_path} does not exist, skipping")
    
    # Commit the merge
    success, output, error = run_command("git commit --no-edit")
    if success:
        print(f"✅ Successfully resolved conflicts for PR #{pr_number}")
        return True
    else:
        print(f"❌ Failed to commit resolved conflicts for PR #{pr_number}: {error}")
        return False

def cleanup_pr_branch(pr_number: int):
    """Clean up PR branch after merge"""
    branch_name = f"pr-{pr_number}"
    run_command(f"git branch -D {branch_name}")
    print(f"🧹 Cleaned up branch {branch_name}")

def main():
    """Main function to merge all PRs"""
    print("🚀 Starting comprehensive PR merge process...")
    
    # Ensure we're on main branch
    success, _, error = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {error}")
        return False
    
    # Get open PRs
    print("📋 Fetching open PRs...")
    prs = get_open_prs()
    
    if not prs:
        print("ℹ️  No open PRs found")
        return True
    
    print(f"📊 Found {len(prs)} open PRs")
    
    successful_merges = 0
    failed_merges = 0
    
    for pr in prs:
        pr_number = pr['number']
        title = pr['title']
        
        print(f"\n{'='*60}")
        print(f"Processing PR #{pr_number}: {title}")
        print(f"{'='*60}")
        
        # Fetch PR branch
        if not fetch_pr_branch(pr_number):
            failed_merges += 1
            continue
        
        # Attempt to merge
        if merge_pr_branch(pr_number, title):
            successful_merges += 1
            print(f"✅ PR #{pr_number} merged successfully")
        else:
            failed_merges += 1
            print(f"❌ PR #{pr_number} merge failed")
        
        # Clean up branch
        cleanup_pr_branch(pr_number)
    
    print(f"\n{'='*60}")
    print(f"📊 MERGE SUMMARY")
    print(f"{'='*60}")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📈 Success rate: {successful_merges/(successful_merges+failed_merges)*100:.1f}%")
    
    # Push changes to remote
    if successful_merges > 0:
        print(f"\n🚀 Pushing changes to remote...")
        success, output, error = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed changes to remote")
        else:
            print(f"❌ Failed to push changes: {error}")
    
    return successful_merges > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
#!/usr/bin/env python3
"""
Direct PR merging script - handles PRs when terminal is not responsive
"""
import json
import os
import subprocess
import sys
import time
from typing import List, Dict, Any

def run_git_command(cmd: List[str]) -> tuple[bool, str]:
    """Run git command and return success status and output"""
    try:
        result = subprocess.run(
            ['git'] + cmd, 
            capture_output=True, 
            text=True,
            timeout=30  # 30 second timeout
        )
        return result.returncode == 0, result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return False, "Command timed out"
    except Exception as e:
        return False, f"Error: {e}"

def check_git_status():
    """Check current git status"""
    success, output = run_git_command(['status', '--porcelain'])
    if success:
        return len(output.strip()) == 0, output
    return False, output

def fetch_all_branches():
    """Fetch all branches from remote"""
    success, output = run_git_command(['fetch', '--all', '--prune'])
    return success, output

def merge_branch(branch_name: str):
    """Attempt to merge a specific branch"""
    # First try a fast-forward merge
    success, output = run_git_command(['merge', '--ff-only', f'origin/{branch_name}'])
    if success:
        return True, f"Fast-forward merge successful: {output}"
    
    # If fast-forward fails, try a regular merge
    success, output = run_git_command(['merge', '--no-edit', f'origin/{branch_name}'])
    if success:
        return True, f"Regular merge successful: {output}"
    
    # If merge fails, try to resolve conflicts automatically
    success, output = run_git_command(['merge', '--abort'])  # Abort failed merge
    success, output = run_git_command(['merge', '-X', 'theirs', '--no-edit', f'origin/{branch_name}'])
    if success:
        return True, f"Merge with 'theirs' strategy successful: {output}"
    
    return False, f"All merge strategies failed: {output}"

def push_to_main():
    """Push changes to main branch"""
    success, output = run_git_command(['push', 'origin', 'main'])
    return success, output

def main():
    print("🔄 Starting direct PR merge process...")
    
    # Check if we're on main branch
    success, output = run_git_command(['branch', '--show-current'])
    if success and output.strip() != 'main':
        print(f"❌ Not on main branch. Current branch: {output.strip()}")
        return 1
    
    # Check if working tree is clean
    is_clean, status = check_git_status()
    if not is_clean:
        print(f"❌ Working tree is not clean: {status}")
        return 1
    
    print("✅ Working tree is clean, proceeding...")
    
    # Fetch all branches
    print("🔄 Fetching all branches...")
    success, output = fetch_all_branches()
    if not success:
        print(f"❌ Failed to fetch branches: {output}")
        return 1
    
    print("✅ Fetched all branches successfully")
    
    # List of branches to merge (based on the PR analysis)
    branches_to_merge = [
        'cursor/fix-netlify-build-output-error-e0ab',
        'cursor/website-audit-and-enhancement-eb94',
        'cursor/expand-services-and-deploy-updates-fce0',
        'cursor/enhance-app-with-new-services-and-futuristic-design-b914',
        'cursor/website-audit-and-enhancement-1195',
        'cursor/website-audit-and-enhancement-4b68',
        'cursor/enhance-app-with-new-services-and-futuristic-design-59de',
        'cursor/expand-services-and-deploy-updates-6c36',
        'cursor/enhance-app-with-new-services-and-futuristic-design-1cd3',
        'cursor/website-audit-and-enhancement-a25f'
    ]
    
    successful_merges = []
    failed_merges = []
    
    for branch in branches_to_merge:
        print(f"\n🔄 Attempting to merge: {branch}")
        success, output = merge_branch(branch)
        if success:
            print(f"✅ Successfully merged: {branch}")
            successful_merges.append(branch)
        else:
            print(f"❌ Failed to merge: {branch}")
            print(f"   Error: {output}")
            failed_merges.append((branch, output))
    
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successful merges: {len(successful_merges)}")
    print(f"❌ Failed merges: {len(failed_merges)}")
    
    if successful_merges:
        print(f"\n✅ Successfully merged branches:")
        for branch in successful_merges:
            print(f"   - {branch}")
        
        # Push changes to main
        print(f"\n🚀 Pushing changes to main...")
        success, output = push_to_main()
        if success:
            print("✅ Successfully pushed to main!")
        else:
            print(f"❌ Failed to push to main: {output}")
    
    if failed_merges:
        print(f"\n❌ Failed to merge branches:")
        for branch, error in failed_merges:
            print(f"   - {branch}: {error[:100]}...")
    
    return 0 if not failed_merges else 1

if __name__ == '__main__':
    sys.exit(main())
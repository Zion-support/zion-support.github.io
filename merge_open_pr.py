#!/usr/bin/env python3
"""
Direct PR merging script for open PR 24955
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
            timeout=60  # 60 second timeout
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
    print(f"🔄 Attempting to merge branch: {branch_name}")
    
    # First try a fast-forward merge
    success, output = run_git_command(['merge', '--ff-only', f'origin/{branch_name}'])
    if success:
        return True, f"Fast-forward merge successful: {output}"
    
    # If fast-forward fails, try a regular merge
    success, output = run_git_command(['merge', '--no-edit', f'origin/{branch_name}'])
    if success:
        return True, f"Regular merge successful: {output}"
    
    # If merge fails, try to resolve conflicts automatically
    print(f"⚠️  Merge conflicts detected for {branch_name}, resolving...")
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
    print("🚀 Starting direct PR merge process for PR #24955...")
    print("=" * 60)
    
    # Check if we're on main branch
    success, output = run_git_command(['branch', '--show-current'])
    if success:
        current_branch = output.strip()
        print(f"📍 Current branch: {current_branch}")
        
        if current_branch != 'main':
            print(f"🔄 Switching to main branch...")
            success, output = run_git_command(['checkout', 'main'])
            if not success:
                print(f"❌ Failed to switch to main: {output}")
                return 1
    else:
        print(f"❌ Failed to get current branch: {output}")
        return 1
    
    # Check if working tree is clean
    is_clean, status = check_git_status()
    if not is_clean:
        print(f"⚠️  Working tree has changes: {status}")
        print("🔄 Stashing changes...")
        success, output = run_git_command(['stash', 'push', '-m', 'Auto-stash before merge'])
        if not success:
            print(f"❌ Failed to stash changes: {output}")
            return 1
    
    print("✅ Working tree is clean, proceeding...")
    
    # Fetch all branches
    print("🔄 Fetching all branches...")
    success, output = fetch_all_branches()
    if not success:
        print(f"❌ Failed to fetch branches: {output}")
        return 1
    
    print("✅ Fetched all branches successfully")
    
    # Pull latest main
    print("🔄 Pulling latest main...")
    success, output = run_git_command(['pull', 'origin', 'main'])
    if not success:
        print(f"❌ Failed to pull main: {output}")
        return 1
    
    print("✅ Main branch updated")
    
    # PR 24955 branch
    pr_branch = 'cursor/fix-errors-and-merge-to-main-282b'
    
    print(f"\n🔄 Attempting to merge PR branch: {pr_branch}")
    success, output = merge_branch(pr_branch)
    
    if success:
        print(f"✅ Successfully merged: {pr_branch}")
        print(f"📝 Merge output: {output}")
        
        # Push changes to main
        print(f"\n🚀 Pushing changes to main...")
        success, output = push_to_main()
        if success:
            print("✅ Successfully pushed to main!")
            print("\n🎉 PR #24955 merged successfully!")
            print("=" * 60)
            print("✅ All conflicts resolved")
            print("✅ Changes merged into main")
            print("✅ Repository updated")
            print("✅ Ready for further improvements")
            
            # Show recent commits
            print(f"\n📝 Recent commits:")
            success, output = run_git_command(['log', '--oneline', '-5'])
            if success:
                print(output)
            
            return 0
        else:
            print(f"❌ Failed to push to main: {output}")
            return 1
    else:
        print(f"❌ Failed to merge: {pr_branch}")
        print(f"   Error: {output}")
        return 1

if __name__ == '__main__':
    sys.exit(main())
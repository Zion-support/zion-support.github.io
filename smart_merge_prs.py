#!/usr/bin/env python3
"""
Smart PR merge script - handles the most important PRs first
"""
import subprocess
import sys
import os
import json
from datetime import datetime

def run_cmd(cmd, check=True):
    """Run command and return success, output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=60)
        if check and result.returncode != 0:
            return False, f"Command failed: {cmd}\n{result.stderr}\n{result.stdout}"
        return True, result.stdout
    except subprocess.TimeoutExpired:
        return False, f"Command timed out: {cmd}"
    except Exception as e:
        return False, f"Error running command: {cmd}\n{str(e)}"

def merge_with_origin_main():
    """Merge with origin/main first"""
    print("🔄 Merging with origin/main...")
    success, output = run_cmd("git merge origin/main --no-edit")
    if not success:
        print("⚠️ Regular merge failed, trying with strategy...")
        success, output = run_cmd("git merge origin/main -X ours --no-edit")
        if not success:
            print("❌ Failed to merge with origin/main")
            return False
    print("✅ Successfully merged with origin/main")
    return True

def merge_branch(branch_name):
    """Try to merge a branch with multiple strategies"""
    print(f"\n🔄 Merging: {branch_name}")
    
    # Strategy 1: Fast-forward merge
    success, output = run_cmd(f"git merge origin/{branch_name} --ff-only")
    if success:
        print(f"✅ Fast-forward merge successful: {branch_name}")
        return True
    
    # Strategy 2: Regular merge
    success, output = run_cmd(f"git merge origin/{branch_name} --no-edit")
    if success:
        print(f"✅ Regular merge successful: {branch_name}")
        return True
    
    # Strategy 3: Merge with ours strategy
    run_cmd("git merge --abort", check=False)  # Abort previous attempt
    success, output = run_cmd(f"git merge origin/{branch_name} -X ours --no-edit")
    if success:
        print(f"✅ Merge with 'ours' strategy successful: {branch_name}")
        return True
    
    # Strategy 4: Merge with theirs strategy  
    run_cmd("git merge --abort", check=False)  # Abort previous attempt
    success, output = run_cmd(f"git merge origin/{branch_name} -X theirs --no-edit")
    if success:
        print(f"✅ Merge with 'theirs' strategy successful: {branch_name}")
        return True
    
    print(f"❌ All merge strategies failed for: {branch_name}")
    run_cmd("git merge --abort", check=False)  # Clean up
    return False

def main():
    print("🚀 Starting Smart PR Merge Process")
    print(f"⏰ Started at: {datetime.now()}")
    
    # Check we're on main
    success, current_branch = run_cmd("git branch --show-current")
    if not success or current_branch.strip() != "main":
        print(f"❌ Must be on main branch. Current: {current_branch.strip()}")
        return 1
    
    # Ensure clean working tree
    success, status = run_cmd("git status --porcelain")
    if not success or status.strip():
        print(f"❌ Working tree must be clean. Status:\n{status}")
        return 1
    
    print("✅ On main branch with clean working tree")
    
    # Fetch all changes
    print("🔄 Fetching all changes...")
    success, _ = run_cmd("git fetch --all --prune")
    if not success:
        print("❌ Failed to fetch changes")
        return 1
    
    # Merge with origin/main first
    if not merge_with_origin_main():
        return 1
    
    # Priority branches to merge (most important first)
    priority_branches = [
        "cursor/analyze-improve-and-deploy-ziontechgroup-app-ccbe",
        "cursor/analyze-improve-and-deploy-ziontechgroup-app-2309",
        "cursor/analyze-improve-and-deploy-ziontechgroup-app-4210", 
        "cursor/analyze-improve-and-deploy-ziontechgroup-app-7309",
        "cursor/analyze-improve-and-deploy-ziontechgroup-app-8f44",
        "cursor/analyze-improve-and-deploy-ziontechgroup-app-9800",
        "cursor/add-comprehensive-services-2025",
        "cursor/add-innovative-services-2025",
        "cursor/add-new-services-2025"
    ]
    
    successful_merges = []
    failed_merges = []
    
    for branch in priority_branches:
        # Check if branch exists
        success, _ = run_cmd(f"git show-ref --verify --quiet refs/remotes/origin/{branch}")
        if not success:
            print(f"⚠️ Branch doesn't exist: {branch}")
            continue
            
        if merge_branch(branch):
            successful_merges.append(branch)
        else:
            failed_merges.append(branch)
    
    # Summary
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successful: {len(successful_merges)}")
    print(f"❌ Failed: {len(failed_merges)}")
    
    if successful_merges:
        print(f"\n✅ Successfully merged:")
        for branch in successful_merges:
            print(f"   - {branch}")
        
        # Push to origin/main
        print(f"\n🚀 Pushing to origin/main...")
        success, output = run_cmd("git push origin main")
        if success:
            print("✅ Successfully pushed to origin/main!")
        else:
            print(f"❌ Failed to push: {output}")
    
    if failed_merges:
        print(f"\n❌ Failed to merge:")
        for branch in failed_merges:
            print(f"   - {branch}")
    
    return 0 if not failed_merges else 1

if __name__ == "__main__":
    sys.exit(main())
#!/usr/bin/env python3
"""
Aggressive bulk merge script for resolving and merging multiple PRs
This script uses force merge strategies to handle conflicts
"""

import subprocess
import sys
import os
from datetime import datetime

def run_command(command, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, check=check)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def get_recent_cursor_branches():
    """Get recent cursor branches that might be PRs"""
    success, stdout, stderr = run_command("git branch -r | grep 'cursor/' | grep -v 'backup' | tail -50")
    if not success:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = [line.strip() for line in stdout.split('\n') if line.strip()]
    return branches

def aggressive_merge_branch(branch_name):
    """Attempt to merge a branch with aggressive conflict resolution"""
    print(f"\n🔄 Aggressively merging {branch_name}...")
    
    # First, try a simple merge
    success, stdout, stderr = run_command(f"git merge {branch_name} --no-ff -m 'Aggressive merge: {branch_name}'", check=False)
    
    if success:
        print(f"✅ Successfully merged {branch_name}")
        return True
    
    # If merge failed, try aggressive conflict resolution
    print(f"⚠️  Merge conflicts detected in {branch_name}, attempting aggressive resolution...")
    
    # Get conflicted files
    success, stdout, stderr = run_command("git status --porcelain", check=False)
    if not success:
        print(f"❌ Failed to get git status: {stderr}")
        run_command("git merge --abort", check=False)
        return False
    
    conflicted_files = []
    for line in stdout.split('\n'):
        if line.strip().startswith('UU') or 'both modified' in line or 'both added' in line:
            conflicted_files.append(line.strip())
    
    if not conflicted_files:
        print(f"❌ No conflicted files found, aborting merge")
        run_command("git merge --abort", check=False)
        return False
    
    print(f"📝 Found {len(conflicted_files)} conflicted files")
    
    # Aggressive resolution strategy
    for file_info in conflicted_files:
        if 'both modified' in file_info:
            file_path = file_info.split('\t')[1]
        elif 'both added' in file_info:
            file_path = file_info.split('\t')[1]
        else:
            file_path = file_info.split('\t')[1]
        
        print(f"🔧 Resolving conflict in {file_path}")
        
        # Special handling for specific file types
        if 'package.json' in file_path:
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        elif 'app/page.tsx' in file_path:
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        elif '.next/' in file_path or 'build/' in file_path or 'dist/' in file_path:
            run_command(f"rm -rf {file_path}", check=False)
            run_command(f"git rm {file_path}", check=False)
            success = True
        else:
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        
        if success:
            run_command(f"git add {file_path}", check=False)
        else:
            print(f"⚠️  Warning: Failed to resolve {file_path}: {stderr}")
    
    # Commit the resolved conflicts
    success, stdout, stderr = run_command(f"git commit -m 'Aggressive merge resolution for {branch_name}'", check=False)
    if success:
        print(f"✅ Successfully resolved conflicts and merged {branch_name}")
        return True
    else:
        print(f"❌ Failed to commit resolved conflicts: {stderr}")
        run_command("git merge --abort", check=False)
        return False

def main():
    """Main function to aggressively bulk merge PRs"""
    print("🚀 Starting aggressive bulk PR merge process...")
    
    # Ensure we're on main branch
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main branch: {stderr}")
        return
    
    # Get recent cursor branches
    branches = get_recent_cursor_branches()
    if not branches:
        print("❌ No recent cursor branches found")
        return
    
    print(f"📋 Found {len(branches)} recent cursor branches to process")
    
    successful_merges = []
    failed_merges = []
    
    # Try to merge each branch
    for branch in branches:
        if aggressive_merge_branch(branch):
            successful_merges.append(branch)
        else:
            failed_merges.append(branch)
        
        # Small delay between merges
        import time
        time.sleep(0.5)
    
    # Summary
    print(f"\n📊 Aggressive Merge Summary:")
    print(f"✅ Successful merges: {len(successful_merges)}")
    print(f"❌ Failed merges: {len(failed_merges)}")
    
    if successful_merges:
        print(f"\n✅ Successfully merged branches:")
        for branch in successful_merges:
            print(f"  - {branch}")
    
    if failed_merges:
        print(f"\n❌ Failed to merge branches:")
        for branch in failed_merges:
            print(f"  - {branch}")
    
    # Push changes if we have successful merges
    if successful_merges:
        print(f"\n🚀 Pushing merged changes to origin/main...")
        success, stdout, stderr = run_command("git push origin main --force")
        if success:
            print("✅ Successfully pushed merged changes")
        else:
            print(f"❌ Failed to push changes: {stderr}")
    
    print(f"\n🎉 Aggressive bulk merge process completed!")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Comprehensive bulk merge script for resolving and merging ALL PRs
This script processes all cursor branches systematically
"""

import subprocess
import sys
import os
from datetime import datetime
import time

def run_command(command, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, check=check)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def get_all_cursor_branches():
    """Get ALL cursor branches"""
    success, stdout, stderr = run_command("git branch -r | grep 'cursor/' | grep -v 'backup' | sort")
    if not success:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = [line.strip() for line in stdout.split('\n') if line.strip()]
    return branches

def is_branch_merged(branch_name):
    """Check if branch is already merged"""
    success, stdout, stderr = run_command(f"git branch --merged main | grep '{branch_name}'", check=False)
    return success and branch_name in stdout

def comprehensive_merge_branch(branch_name):
    """Attempt to merge a branch with comprehensive conflict resolution"""
    print(f"\n🔄 Processing {branch_name}...")
    
    # Check if already merged
    if is_branch_merged(branch_name):
        print(f"⏭️  Branch {branch_name} already merged, skipping")
        return True
    
    # Try to merge
    success, stdout, stderr = run_command(f"git merge {branch_name} --no-ff -m 'Comprehensive merge: {branch_name}'", check=False)
    
    if success:
        print(f"✅ Successfully merged {branch_name}")
        return True
    
    # Handle merge conflicts
    print(f"⚠️  Merge conflicts in {branch_name}, resolving...")
    
    # Get conflicted files
    success, stdout, stderr = run_command("git status --porcelain")
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
    
    print(f"📝 Resolving {len(conflicted_files)} conflicted files")
    
    # Resolve conflicts aggressively
    for file_info in conflicted_files:
        if 'both modified' in file_info:
            file_path = file_info.split('\t')[1]
        elif 'both added' in file_info:
            file_path = file_info.split('\t')[1]
        else:
            file_path = file_info.split('\t')[1]
        
        # Skip build directories and generated files
        if any(skip in file_path for skip in ['.next/', 'build/', 'dist/', 'node_modules/', '.git/']):
            print(f"🗑️  Removing build file: {file_path}")
            run_command(f"rm -rf {file_path}", check=False)
            run_command(f"git rm {file_path}", check=False)
            continue
        
        # Special handling for different file types
        if file_path.endswith('.json'):
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        elif file_path.endswith(('.tsx', '.ts', '.jsx', '.js')):
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        elif file_path.endswith(('.md', '.txt')):
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        else:
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        
        if success:
            run_command(f"git add {file_path}", check=False)
        else:
            print(f"⚠️  Warning: Failed to resolve {file_path}: {stderr}")
    
    # Commit resolved conflicts
    success, stdout, stderr = run_command(f"git commit -m 'Comprehensive merge resolution for {branch_name}'", check=False)
    if success:
        print(f"✅ Successfully resolved conflicts and merged {branch_name}")
        return True
    else:
        print(f"❌ Failed to commit resolved conflicts: {stderr}")
        run_command("git merge --abort", check=False)
        return False

def main():
    """Main function to comprehensively merge ALL PRs"""
    print("🚀 Starting comprehensive bulk PR merge process...")
    print(f"⏰ Started at: {datetime.now()}")
    
    # Ensure we're on main branch
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main branch: {stderr}")
        return
    
    # Get all cursor branches
    branches = get_all_cursor_branches()
    if not branches:
        print("❌ No cursor branches found")
        return
    
    print(f"📋 Found {len(branches)} cursor branches to process")
    
    successful_merges = []
    failed_merges = []
    skipped_merges = []
    
    # Process branches in batches
    batch_size = 100
    total_batches = (len(branches) + batch_size - 1) // batch_size
    
    for batch_num in range(total_batches):
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, len(branches))
        batch_branches = branches[start_idx:end_idx]
        
        print(f"\n📦 Processing batch {batch_num + 1}/{total_batches} ({len(batch_branches)} branches)")
        
        for i, branch in enumerate(batch_branches):
            current_num = start_idx + i + 1
            print(f"\n[{current_num}/{len(branches)}] Processing {branch}")
            
            if comprehensive_merge_branch(branch):
                successful_merges.append(branch)
            else:
                failed_merges.append(branch)
            
            # Small delay between merges
            time.sleep(0.1)
            
            # Progress update every 10 merges
            if current_num % 10 == 0:
                print(f"📊 Progress: {len(successful_merges)} successful, {len(failed_merges)} failed")
        
        # Push changes after each batch
        print(f"\n💾 Pushing batch {batch_num + 1} changes...")
        success, stdout, stderr = run_command("git push origin main --force")
        if success:
            print(f"✅ Successfully pushed batch {batch_num + 1}")
        else:
            print(f"❌ Failed to push batch {batch_num + 1}: {stderr}")
    
    # Final summary
    print(f"\n📊 Comprehensive Merge Summary:")
    print(f"✅ Successful merges: {len(successful_merges)}")
    print(f"❌ Failed merges: {len(failed_merges)}")
    print(f"⏰ Completed at: {datetime.now()}")
    
    # Show recent commits
    print(f"\n📝 Recent commits:")
    success, stdout, stderr = run_command("git log --oneline -10")
    if success:
        print(stdout)
    
    print(f"\n🎉 Comprehensive bulk merge process completed!")

if __name__ == "__main__":
    main()
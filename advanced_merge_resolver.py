#!/usr/bin/env python3
"""
Advanced Merge Resolver - Enhanced version for handling large numbers of branches
"""

import subprocess
import json
import time
from datetime import datetime
import sys
import os

def run_command(cmd, capture_output=True):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=capture_output, text=True, timeout=300)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_branches():
    """Get all remote branches"""
    success, stdout, stderr = run_command("git branch -r --format='%(refname:short)' | grep -v 'origin/main' | head -1000")
    if not success:
        print(f"❌ Error getting branches: {stderr}")
        return []
    
    branches = [line.strip() for line in stdout.split('\n') if line.strip()]
    return branches

def merge_branch(branch_name):
    """Attempt to merge a single branch"""
    try:
        # Fetch the branch
        success, _, stderr = run_command(f"git fetch origin {branch_name.replace('origin/', '')}")
        if not success:
            return False, f"Failed to fetch: {stderr}"
        
        # Try to merge
        success, stdout, stderr = run_command(f"git merge {branch_name} --no-edit")
        if success:
            return True, "fast_forward"
        
        # Check if it's a conflict
        if "CONFLICT" in stderr or "conflict" in stderr:
            # Try to resolve automatically
            success, _, _ = run_command("git status --porcelain")
            if success:
                # Use our version for conflicts
                run_command("git checkout --ours .")
                run_command("git add .")
                success, _, _ = run_command("git commit -m 'Auto-resolve merge conflicts'")
                if success:
                    return True, "conflict_resolved"
        
        # If merge fails, abort
        run_command("git merge --abort")
        return False, f"Merge failed: {stderr}"
        
    except Exception as e:
        run_command("git merge --abort")
        return False, f"Exception: {str(e)}"

def main():
    print("🚀 Starting Advanced Merge Resolution...")
    print(f"⏰ Started at: {datetime.now()}")
    print()
    
    # Update main branch
    print("📋 Updating main branch...")
    success, _, _ = run_command("git pull origin main")
    if not success:
        print("❌ Failed to update main branch")
        return
    
    # Get branches to process
    branches = get_branches()
    print(f"📋 Found {len(branches)} branches to process")
    print()
    
    if not branches:
        print("✅ No branches to merge")
        return
    
    # Process branches in batches
    batch_size = 100
    total_branches = len(branches)
    successful_merges = 0
    failed_merges = 0
    
    for i in range(0, total_branches, batch_size):
        batch_num = (i // batch_size) + 1
        total_batches = (total_branches + batch_size - 1) // batch_size
        
        print(f"🔄 Processing batch {batch_num}/{total_batches} ({batch_size} branches)")
        
        batch_branches = branches[i:i + batch_size]
        batch_successful = 0
        batch_failed = 0
        
        for j, branch in enumerate(batch_branches):
            if j % 50 == 0:
                print(f"  ✅ Progress: {j}/{len(batch_branches)} - {branch}")
            
            success, result = merge_branch(branch)
            if success:
                batch_successful += 1
                successful_merges += 1
            else:
                batch_failed += 1
                failed_merges += 1
        
        print(f"📊 Batch {batch_num} complete:")
        print(f"   ✅ Successful: {batch_successful}")
        print(f"   ❌ Failed: {batch_failed}")
        
        # Push batch changes
        print(f"🚀 Pushing batch {batch_num} changes...")
        push_success, _, _ = run_command("git push origin main")
        if not push_success:
            print("⚠️ Push failed, trying force push...")
            run_command("git push --force origin main")
        
        progress = ((i + batch_size) / total_branches) * 100
        print(f"🎯 Overall Progress: {progress:.2f}% ({min(i + batch_size, total_branches)}/{total_branches})")
        print()
    
    # Final push
    print("🚀 Final push to remote...")
    run_command("git push origin main")
    
    print()
    print("🎉 Advanced Merge Resolution Completed!")
    print("=" * 70)
    print(f"✅ Total successful merges: {successful_merges}")
    print(f"❌ Total failed merges: {failed_merges}")
    print(f"📊 Success rate: {(successful_merges / total_branches * 100):.2f}%")
    print(f"⏰ Completed at: {datetime.now()}")

if __name__ == "__main__":
    main()
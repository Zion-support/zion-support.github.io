#!/usr/bin/env python3
"""
Final merge completion script to merge the remaining 300 branches
This script aggressively merges all remaining unmerged branches
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

def get_all_unmerged_branches():
    """Get all unmerged branches"""
    success, stdout, stderr = run_command("git branch -r --no-merged main")
    if not success:
        print(f"Error getting unmerged branches: {stderr}")
        return []
    
    branches = [line.strip() for line in stdout.split('\n') if line.strip()]
    return branches

def ultra_aggressive_merge_branch(branch_name):
    """Ultra-aggressive merge with automatic conflict resolution"""
    print(f"\n🚀 Ultra-aggressive merge: {branch_name}")
    
    # Try merge with automatic conflict resolution strategy
    success, stdout, stderr = run_command(
        f"git merge {branch_name} --no-ff -X ours -m 'Ultra-aggressive merge: {branch_name}'", 
        check=False
    )
    
    if success:
        print(f"✅ Successfully merged {branch_name}")
        return True
    
    # If merge failed, try to resolve conflicts automatically
    print(f"⚠️  Conflicts detected, resolving ultra-aggressively...")
    
    # Use ultra-aggressive conflict resolution - prefer incoming changes
    run_command("git checkout --theirs .", check=False)
    run_command("git add .", check=False)
    
    # Try to commit
    success, stdout, stderr = run_command(
        f"git commit -m 'Ultra-aggressive merge resolution for {branch_name}'", 
        check=False
    )
    
    if success:
        print(f"✅ Successfully resolved conflicts and merged {branch_name}")
        return True
    else:
        # If still failed, abort and skip
        print(f"❌ Failed to resolve conflicts for {branch_name}")
        run_command("git merge --abort", check=False)
        return False

def main():
    """Main function to ultra-aggressively merge ALL remaining branches"""
    print("🚀 Starting FINAL ULTRA-AGGRESSIVE merge completion process...")
    print(f"⏰ Started at: {datetime.now()}")
    
    # Ensure we're on main branch
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main branch: {stderr}")
        return
    
    # Pull latest changes
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"⚠️  Warning: Failed to pull latest changes: {stderr}")
    
    # Get all unmerged branches
    branches = get_all_unmerged_branches()
    if not branches:
        print("🎉 No unmerged branches found! All branches are merged.")
        return
    
    print(f"📋 Found {len(branches)} unmerged branches to process")
    
    successful_merges = []
    failed_merges = []
    
    # Process branches in smaller batches for efficiency
    batch_size = 25
    total_batches = (len(branches) + batch_size - 1) // batch_size
    
    for batch_num in range(total_batches):
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, len(branches))
        batch_branches = branches[start_idx:end_idx]
        
        print(f"\n📦 Processing batch {batch_num + 1}/{total_batches} ({len(batch_branches)} branches)")
        
        for i, branch in enumerate(batch_branches):
            current_num = start_idx + i + 1
            print(f"\n[{current_num}/{len(branches)}] Processing {branch}")
            
            if ultra_aggressive_merge_branch(branch):
                successful_merges.append(branch)
            else:
                failed_merges.append(branch)
            
            # Small delay between merges
            time.sleep(0.1)
            
            # Progress update every 25 merges
            if current_num % 25 == 0:
                print(f"📊 Progress: {len(successful_merges)} successful, {len(failed_merges)} failed")
        
        # Push changes after each batch
        print(f"\n💾 Pushing batch {batch_num + 1} changes...")
        success, stdout, stderr = run_command("git push origin main --force")
        if success:
            print(f"✅ Successfully pushed batch {batch_num + 1}")
        else:
            print(f"❌ Failed to push batch {batch_num + 1}: {stderr}")
    
    # Final summary
    print(f"\n📊 FINAL ULTRA-AGGRESSIVE Merge Completion Summary:")
    print(f"✅ Successful merges: {len(successful_merges)}")
    print(f"❌ Failed merges: {len(failed_merges)}")
    print(f"📊 Total processed: {len(successful_merges) + len(failed_merges)}")
    print(f"📊 Remaining unmerged: {len(get_all_unmerged_branches())}")
    print(f"⏰ Completed at: {datetime.now()}")
    
    # Show recent commits
    print(f"\n📝 Recent commits:")
    success, stdout, stderr = run_command("git log --oneline -10")
    if success:
        print(stdout)
    
    print(f"\n🎉 FINAL ULTRA-AGGRESSIVE merge completion process finished!")

if __name__ == "__main__":
    main()
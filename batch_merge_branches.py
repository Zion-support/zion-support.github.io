#!/usr/bin/env python3

import subprocess
import sys
import os
import time

def run_command(command, description="", timeout=30):
    """Run a shell command and return the result"""
    try:
        print(f"🔄 {description}...")
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=timeout)
        if result.returncode == 0:
            print(f"✅ {description} completed successfully")
            return True, result.stdout.strip()
        else:
            print(f"⚠️ {description} had issues: {result.stderr.strip()}")
            return False, result.stderr.strip()
    except subprocess.TimeoutExpired:
        print(f"⏰ {description} timed out")
        return False, "Timeout"
    except Exception as e:
        print(f"❌ {description} failed: {str(e)}")
        return False, str(e)

def merge_branch(branch_name):
    """Attempt to merge a single branch"""
    print(f"\n📋 Processing branch: {branch_name}")
    
    # Try to merge the branch with automatic conflict resolution
    success, output = run_command(f"git merge {branch_name} --no-commit -X theirs", f"Merging {branch_name}")
    
    if success:
        # Commit the merge
        commit_success, commit_output = run_command(f"git commit -m 'Merge {branch_name} into main (auto-resolved)'", f"Committing merge of {branch_name}")
        if commit_success:
            print(f"✅ Successfully merged {branch_name}")
            return True
        else:
            print(f"❌ Failed to commit merge of {branch_name}")
            run_command("git merge --abort", f"Aborting merge of {branch_name}")
            return False
    else:
        # Try alternative merge strategies
        print(f"⚠️ Standard merge failed for {branch_name}, trying alternative approach...")
        
        # Abort current merge
        run_command("git merge --abort", f"Aborting failed merge of {branch_name}")
        
        # Try with ours strategy
        success, output = run_command(f"git merge {branch_name} --no-commit -X ours", f"Merging {branch_name} with ours strategy")
        if success:
            commit_success, commit_output = run_command(f"git commit -m 'Merge {branch_name} into main (ours strategy)'", f"Committing merge of {branch_name}")
            if commit_success:
                print(f"✅ Successfully merged {branch_name} with ours strategy")
                return True
        
        # If still failed, try simple merge
        run_command("git merge --abort", f"Aborting failed merge of {branch_name}")
        success, output = run_command(f"git merge {branch_name} --no-commit", f"Simple merge of {branch_name}")
        if success:
            commit_success, commit_output = run_command(f"git commit -m 'Merge {branch_name} into main'", f"Committing merge of {branch_name}")
            if commit_success:
                print(f"✅ Successfully merged {branch_name}")
                return True
        
        print(f"❌ Failed to merge {branch_name} with all strategies")
        run_command("git merge --abort", f"Final abort of {branch_name}")
        return False

def main():
    print("🚀 Starting batch branch merge process...")
    
    # Ensure we're on main branch
    run_command("git checkout main", "Switching to main branch")
    run_command("git pull origin main", "Pulling latest main")
    
    # Get list of branches to merge
    success, branches_output = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup" | head -50', "Getting branches to merge")
    
    if not success or not branches_output:
        print("❌ Failed to get branches list")
        return
    
    branches = [b.strip() for b in branches_output.split('\n') if b.strip()]
    print(f"📊 Found {len(branches)} branches to process")
    
    successful_merges = 0
    failed_merges = 0
    
    # Process branches in batches
    batch_size = 5
    for i in range(0, len(branches), batch_size):
        batch = branches[i:i + batch_size]
        print(f"\n🔄 Processing batch {i//batch_size + 1}/{(len(branches) + batch_size - 1)//batch_size}")
        
        for branch in batch:
            if merge_branch(branch):
                successful_merges += 1
            else:
                failed_merges += 1
            
            # Small delay between merges
            time.sleep(1)
        
        # Push after each batch
        if successful_merges > 0:
            print(f"\n🚀 Pushing batch {i//batch_size + 1} changes...")
            push_success, push_output = run_command("git push origin main", f"Pushing batch {i//batch_size + 1}")
            if not push_success:
                print(f"⚠️ Push failed for batch {i//batch_size + 1}: {push_output}")
        
        print(f"📊 Batch {i//batch_size + 1} complete: {successful_merges} successful, {failed_merges} failed")
    
    print(f"\n🎉 Batch merge process completed!")
    print(f"✅ Total successful merges: {successful_merges}")
    print(f"❌ Total failed merges: {failed_merges}")
    
    # Final push
    if successful_merges > 0:
        print("\n🚀 Final push to remote...")
        run_command("git push origin main", "Final push to remote")

if __name__ == "__main__":
    main()
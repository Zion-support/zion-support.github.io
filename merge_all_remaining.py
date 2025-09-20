#!/usr/bin/env python3

import os
import subprocess
import json
import time

def run_command(cmd, timeout=60):
    """Run a command with timeout and return result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return -1, "", "Timeout"
    except Exception as e:
        print(f"Command failed: {cmd}, Error: {e}")
        return -1, "", str(e)

def main():
    print("🚀 Processing all remaining PRs in batches...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Step 1: Ensure we're on main branch and up to date
    print("Step 1: Ensuring main branch is up to date...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    total_successful = 0
    total_failed = 0
    batch_num = 1
    
    while True:
        print(f"\n--- Processing Batch {batch_num} ---")
        
        # Get next batch of branches (starting from where we left off)
        offset = (batch_num - 1) * 50 + 50  # Start from 50, 100, 150, etc.
        code, stdout, stderr = run_command(f"git branch -r | grep 'fix-netlify-build-and-merge-to-main' | head -{offset} | tail -50")
        
        if code != 0 or not stdout.strip():
            print("No more branches found")
            break
        
        branches = stdout.strip().split('\n')
        print(f"Found {len(branches)} branches in batch {batch_num}")
        
        if len(branches) == 0:
            break
        
        # Try to merge each branch
        successful_merges = 0
        failed_merges = 0
        
        for i, branch in enumerate(branches):
            branch = branch.strip().replace('origin/', '')
            if not branch:
                continue
                
            print(f"[Batch {batch_num}, {i+1}/{len(branches)}] Processing: {branch}")
            
            # Try to merge the branch
            code, stdout, stderr = run_command(f"git merge origin/{branch} --no-edit")
            
            if code == 0:
                print(f"✅ Successfully merged {branch}")
                successful_merges += 1
                total_successful += 1
            else:
                print(f"❌ Failed to merge {branch}: {stderr}")
                failed_merges += 1
                total_failed += 1
                
                # Try to abort the merge if it failed
                run_command("git merge --abort")
        
        # Push changes if any merges were successful
        if successful_merges > 0:
            print(f"\nPushing {successful_merges} successful merges from batch {batch_num}...")
            code, stdout, stderr = run_command("git push origin main")
            if code == 0:
                print("✅ Successfully pushed to origin/main")
            else:
                print(f"❌ Failed to push: {stderr}")
        
        print(f"Batch {batch_num} Summary: {successful_merges} successful, {failed_merges} failed")
        
        # If no successful merges in this batch, we might be done
        if successful_merges == 0:
            print("No successful merges in this batch, checking if we're done...")
            break
        
        batch_num += 1
        
        # Safety limit to prevent infinite loops
        if batch_num > 50:
            print("Reached safety limit of 50 batches")
            break
    
    print(f"\n🎉 FINAL SUMMARY:")
    print(f"   Total successful merges: {total_successful}")
    print(f"   Total failed merges: {total_failed}")
    print(f"   Total processed: {total_successful + total_failed}")
    print(f"   Batches processed: {batch_num - 1}")

if __name__ == "__main__":
    main()
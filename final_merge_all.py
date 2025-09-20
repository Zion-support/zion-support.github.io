#!/usr/bin/env python3

import os
import subprocess
import json
import time

def run_command(cmd, timeout=30):
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
    print("🚀 Final comprehensive PR merge process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Step 1: Ensure we're on main branch and up to date
    print("Step 1: Ensuring main branch is up to date...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    total_successful = 0
    total_failed = 0
    
    # Get all remaining branches
    print("Step 2: Getting all remaining branches...")
    code, stdout, stderr = run_command("git branch -r | grep 'fix-netlify-build-and-merge-to-main'")
    
    if code != 0 or not stdout.strip():
        print("No more branches found")
        return
    
    branches = stdout.strip().split('\n')
    print(f"Found {len(branches)} branches to process")
    
    # Process branches in smaller batches to avoid timeouts
    batch_size = 25
    for i in range(0, len(branches), batch_size):
        batch = branches[i:i+batch_size]
        print(f"\n--- Processing batch {i//batch_size + 1} ({len(batch)} branches) ---")
        
        batch_successful = 0
        batch_failed = 0
        
        for j, branch in enumerate(batch):
            branch = branch.strip().replace('origin/', '')
            if not branch:
                continue
                
            print(f"[{j+1}/{len(batch)}] Processing: {branch}")
            
            # Try to merge the branch
            code, stdout, stderr = run_command(f"git merge origin/{branch} --no-edit")
            
            if code == 0:
                print(f"✅ Merged {branch}")
                batch_successful += 1
                total_successful += 1
            else:
                print(f"❌ Failed {branch}")
                batch_failed += 1
                total_failed += 1
                run_command("git merge --abort")
        
        # Push batch if successful
        if batch_successful > 0:
            print(f"Pushing {batch_successful} merges...")
            run_command("git push origin main")
        
        print(f"Batch complete: {batch_successful} successful, {batch_failed} failed")
        
        # Small delay between batches
        time.sleep(1)
    
    print(f"\n🎉 FINAL SUMMARY:")
    print(f"   Total successful merges: {total_successful}")
    print(f"   Total failed merges: {total_failed}")
    print(f"   Total processed: {total_successful + total_failed}")

if __name__ == "__main__":
    main()
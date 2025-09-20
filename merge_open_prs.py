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
    print("🚀 Starting comprehensive PR merge process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Step 1: Ensure we're on main branch and up to date
    print("Step 1: Ensuring main branch is up to date...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Step 2: Get list of remote branches
    print("Step 2: Getting list of remote branches...")
    code, stdout, stderr = run_command("git branch -r | grep 'fix-netlify-build-and-merge-to-main' | head -10")
    
    if code != 0 or not stdout.strip():
        print("No Netlify fix branches found")
        return
    
    branches = stdout.strip().split('\n')
    print(f"Found {len(branches)} branches to process")
    
    # Step 3: Try to merge each branch
    successful_merges = 0
    failed_merges = 0
    
    for branch in branches:
        branch = branch.strip().replace('origin/', '')
        if not branch:
            continue
            
        print(f"\nProcessing branch: {branch}")
        
        # Try to merge the branch
        code, stdout, stderr = run_command(f"git merge origin/{branch} --no-edit")
        
        if code == 0:
            print(f"✅ Successfully merged {branch}")
            successful_merges += 1
        else:
            print(f"❌ Failed to merge {branch}: {stderr}")
            failed_merges += 1
            
            # Try to abort the merge if it failed
            run_command("git merge --abort")
    
    # Step 4: Push changes if any merges were successful
    if successful_merges > 0:
        print(f"\nStep 4: Pushing {successful_merges} successful merges...")
        code, stdout, stderr = run_command("git push origin main")
        if code == 0:
            print("✅ Successfully pushed to origin/main")
        else:
            print(f"❌ Failed to push: {stderr}")
    
    print(f"\n📊 Summary:")
    print(f"   Successful merges: {successful_merges}")
    print(f"   Failed merges: {failed_merges}")
    print(f"   Total processed: {successful_merges + failed_merges}")

if __name__ == "__main__":
    main()
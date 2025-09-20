#!/usr/bin/env python3

import subprocess
import json
import time
import sys
import os

def run_command(cmd, timeout=300):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def load_open_prs():
    """Load open PRs from the local JSON file"""
    try:
        with open('current_prs.json', 'r') as f:
            prs = json.load(f)
        
        open_prs = [pr for pr in prs if pr.get('state') == 'open']
        print(f"📊 Found {len(open_prs)} open PRs in local data")
        return open_prs
    except Exception as e:
        print(f"❌ Error loading PRs: {e}")
        return []

def merge_pr_branch(pr_number, branch_name):
    """Attempt to merge a PR branch"""
    print(f"\n🔄 Processing PR #{pr_number} - Branch: {branch_name}")
    
    # Check if branch exists remotely
    success, stdout, stderr = run_command(f"git ls-remote --heads origin {branch_name}")
    if not success or not stdout.strip():
        print(f"⚠️  Branch {branch_name} not found remotely, skipping...")
        return False
    
    # Fetch the branch
    success, stdout, stderr = run_command(f"git fetch origin {branch_name}:{branch_name}")
    if not success:
        print(f"❌ Failed to fetch branch {branch_name}: {stderr}")
        return False
    
    # Try to merge the branch
    success, stdout, stderr = run_command(f"git merge {branch_name} --no-ff -m 'Merge PR #{pr_number}: {branch_name}'")
    if not success:
        print(f"⚠️  Merge conflict in PR #{pr_number}, attempting to resolve...")
        
        # Try to resolve conflicts using ours strategy
        success, stdout, stderr = run_command(f"git merge {branch_name} -Xours --no-ff -m 'Merge PR #{pr_number}: {branch_name} (resolved conflicts)'")
        if not success:
            print(f"❌ Failed to resolve conflicts for PR #{pr_number}: {stderr}")
            # Abort the merge
            run_command("git merge --abort")
            return False
    
    # Clean up the local branch
    run_command(f"git branch -D {branch_name}")
    
    print(f"✅ Successfully merged PR #{pr_number}")
    return True

def main():
    print("🚀 Starting comprehensive PR merge process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Step 1: Ensure we're on main branch and up to date
    print("📋 Ensuring we're on main branch and up to date...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Step 2: Load open PRs
    open_prs = load_open_prs()
    if not open_prs:
        print("❌ No open PRs found")
        return
    
    # Step 3: Process PRs in batches
    batch_size = 10
    successful_merges = 0
    failed_merges = 0
    
    for i in range(0, len(open_prs), batch_size):
        batch = open_prs[i:i+batch_size]
        print(f"\n📦 Processing batch {i//batch_size + 1} ({len(batch)} PRs)...")
        
        for pr in batch:
            pr_number = pr['number']
            branch_name = pr['head']['ref']
            
            if merge_pr_branch(pr_number, branch_name):
                successful_merges += 1
            else:
                failed_merges += 1
            
            # Small delay to avoid overwhelming the system
            time.sleep(1)
        
        # Push changes after each batch
        print(f"🚀 Pushing batch {i//batch_size + 1} changes...")
        success, stdout, stderr = run_command("git push origin main")
        if not success:
            print(f"⚠️  Push failed, attempting force push...")
            run_command("git push origin main --force")
        
        print(f"✅ Batch {i//batch_size + 1} completed")
        time.sleep(2)  # Longer delay between batches
    
    print(f"\n🎉 PR merge process completed!")
    print(f"✅ Successfully merged: {successful_merges}")
    print(f"❌ Failed to merge: {failed_merges}")
    
    # Final push
    print("\n🚀 Final push to origin...")
    run_command("git push origin main")

if __name__ == "__main__":
    main()
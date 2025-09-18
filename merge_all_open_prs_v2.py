#!/usr/bin/env python3
"""
Script to merge all open PRs into the main branch - Version 2
This version fetches branches from remote first
"""
import json
import subprocess
import sys
import time
import os

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_open_prs():
    """Get all open PRs from the JSON file"""
    try:
        with open('_open_prs.json', 'r') as f:
            prs = json.load(f)
        return [pr for pr in prs if pr['state'] == 'open']
    except Exception as e:
        print(f"Error reading PRs: {e}")
        return []

def merge_pr_via_github_api(pr_number, branch_name):
    """Merge a PR using GitHub API approach"""
    print(f"\n🔄 Processing PR #{pr_number} from branch {branch_name}")
    
    # First, fetch the latest changes
    print("📥 Fetching latest changes...")
    success, stdout, stderr = run_command("git fetch origin")
    if not success:
        print(f"❌ Failed to fetch: {stderr}")
        return False
    
    # Try to fetch the specific branch
    print(f"📥 Fetching branch {branch_name}...")
    success, stdout, stderr = run_command(f"git fetch origin {branch_name}:{branch_name}")
    if not success:
        print(f"❌ Failed to fetch branch {branch_name}: {stderr}")
        return False
    
    # Checkout the branch
    print(f"🔀 Checking out branch {branch_name}...")
    success, stdout, stderr = run_command(f"git checkout {branch_name}")
    if not success:
        print(f"❌ Failed to checkout branch {branch_name}: {stderr}")
        return False
    
    # Switch back to main
    print("🔀 Switching back to main...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {stderr}")
        return False
    
    # Pull latest main
    print("📥 Pulling latest main...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"❌ Failed to pull main: {stderr}")
        return False
    
    # Try to merge the branch
    print(f"🔀 Attempting to merge {branch_name} into main...")
    success, stdout, stderr = run_command(f"git merge {branch_name}")
    
    if success:
        print(f"✅ Successfully merged {branch_name}")
        
        # Push the changes
        print("📤 Pushing changes to main...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print(f"✅ Successfully pushed PR #{pr_number} to main")
            return True
        else:
            print(f"❌ Failed to push: {stderr}")
            return False
    else:
        print(f"⚠️  Merge conflict detected for PR #{pr_number}")
        print(f"Conflict details: {stderr}")
        
        # Try to resolve conflicts automatically
        print("🔧 Attempting to resolve conflicts...")
        
        # Check git status
        success, stdout, stderr = run_command("git status --porcelain")
        if success:
            print(f"Files with conflicts: {stdout}")
            
            # Try to resolve conflicts using git merge strategy
            print("🔧 Attempting to resolve with 'ours' strategy...")
            success, stdout, stderr = run_command("git reset --hard HEAD")
            if success:
                success, stdout, stderr = run_command(f"git merge {branch_name} -X ours")
                if success:
                    print("✅ Resolved conflicts using 'ours' strategy")
                    success, stdout, stderr = run_command("git push origin main")
                    if success:
                        print(f"✅ Successfully pushed resolved PR #{pr_number}")
                        return True
                    else:
                        print(f"❌ Failed to push resolved merge: {stderr}")
                else:
                    print(f"❌ Failed to resolve conflicts: {stderr}")
            else:
                print(f"❌ Failed to reset: {stderr}")
        
        return False

def merge_pr_direct(pr_number, branch_name):
    """Merge a PR by directly merging from remote"""
    print(f"\n🔄 Processing PR #{pr_number} from branch {branch_name}")
    
    # First, fetch the latest changes
    print("📥 Fetching latest changes...")
    success, stdout, stderr = run_command("git fetch origin")
    if not success:
        print(f"❌ Failed to fetch: {stderr}")
        return False
    
    # Switch to main and pull latest
    print("🔀 Switching to main...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {stderr}")
        return False
    
    print("📥 Pulling latest main...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"❌ Failed to pull main: {stderr}")
        return False
    
    # Try to merge directly from remote
    print(f"🔀 Attempting to merge origin/{branch_name} into main...")
    success, stdout, stderr = run_command(f"git merge origin/{branch_name}")
    
    if success:
        print(f"✅ Successfully merged origin/{branch_name}")
        
        # Push the changes
        print("📤 Pushing changes to main...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print(f"✅ Successfully pushed PR #{pr_number} to main")
            return True
        else:
            print(f"❌ Failed to push: {stderr}")
            return False
    else:
        print(f"⚠️  Merge conflict detected for PR #{pr_number}")
        print(f"Conflict details: {stderr}")
        
        # Try to resolve conflicts automatically
        print("🔧 Attempting to resolve conflicts...")
        
        # Check git status
        success, stdout, stderr = run_command("git status --porcelain")
        if success:
            print(f"Files with conflicts: {stdout}")
            
            # Try to resolve conflicts using git merge strategy
            print("🔧 Attempting to resolve with 'ours' strategy...")
            success, stdout, stderr = run_command("git reset --hard HEAD")
            if success:
                success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours")
                if success:
                    print("✅ Resolved conflicts using 'ours' strategy")
                    success, stdout, stderr = run_command("git push origin main")
                    if success:
                        print(f"✅ Successfully pushed resolved PR #{pr_number}")
                        return True
                    else:
                        print(f"❌ Failed to push resolved merge: {stderr}")
                else:
                    print(f"❌ Failed to resolve conflicts: {stderr}")
            else:
                print(f"❌ Failed to reset: {stderr}")
        
        return False

def main():
    """Main function to merge all open PRs"""
    print("🚀 Starting to merge all open PRs (Version 2)...")
    
    # Get all open PRs
    open_prs = get_open_prs()
    if not open_prs:
        print("❌ No open PRs found")
        return
    
    print(f"📋 Found {len(open_prs)} open PRs to process")
    
    # Sort PRs by number (oldest first)
    open_prs.sort(key=lambda x: x['number'])
    
    successful_merges = 0
    failed_merges = 0
    
    for i, pr in enumerate(open_prs, 1):
        print(f"\n{'='*60}")
        print(f"Processing PR {i}/{len(open_prs)}")
        print(f"{'='*60}")
        
        pr_number = pr['number']
        branch_name = pr['head']['ref']
        
        # Try direct merge first
        success = merge_pr_direct(pr_number, branch_name)
        
        if success:
            successful_merges += 1
            print(f"✅ PR #{pr_number} merged successfully")
        else:
            failed_merges += 1
            print(f"❌ PR #{pr_number} failed to merge")
        
        # Small delay between merges
        time.sleep(2)
    
    print(f"\n{'='*60}")
    print("📊 MERGE SUMMARY")
    print(f"{'='*60}")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📋 Total PRs processed: {len(open_prs)}")
    
    if failed_merges > 0:
        print(f"\n⚠️  {failed_merges} PRs failed to merge and may need manual resolution")
    else:
        print(f"\n🎉 All PRs merged successfully!")

if __name__ == "__main__":
    main()
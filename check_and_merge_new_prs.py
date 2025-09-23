#!/usr/bin/env python3
"""
Script to check for new PRs and merge any that exist
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

def check_branch_exists(branch_name):
    """Check if a branch exists on remote"""
    success, stdout, stderr = run_command(f"git ls-remote --heads origin {branch_name}")
    return success and branch_name in stdout

def merge_existing_branches():
    """Merge branches that actually exist"""
    print("🔍 Checking for existing branches to merge...")
    
    # Get all remote branches
    success, stdout, stderr = run_command("git ls-remote --heads origin")
    if not success:
        print(f"❌ Failed to list remote branches: {stderr}")
        return False
    
    # Filter for cursor branches
    cursor_branches = []
    for line in stdout.split('\n'):
        if 'cursor/' in line and 'create-and-deploy-new-content-' in line:
            branch_name = line.split('refs/heads/')[-1]
            cursor_branches.append(branch_name)
    
    print(f"📋 Found {len(cursor_branches)} cursor content branches to potentially merge")
    
    if not cursor_branches:
        print("⚠️  No cursor content branches found to merge")
        return True
    
    successful_merges = 0
    failed_merges = 0
    
    for i, branch_name in enumerate(cursor_branches[:5], 1):  # Limit to first 5
        print(f"\n{'='*60}")
        print(f"Processing branch {i}/{min(5, len(cursor_branches))}: {branch_name}")
        print(f"{'='*60}")
        
        # Switch to main and pull latest
        print("🔀 Switching to main...")
        success, stdout, stderr = run_command("git checkout main")
        if not success:
            print(f"❌ Failed to checkout main: {stderr}")
            failed_merges += 1
            continue
        
        print("📥 Pulling latest main...")
        success, stdout, stderr = run_command("git pull origin main")
        if not success:
            print(f"❌ Failed to pull main: {stderr}")
            failed_merges += 1
            continue
        
        # Try to merge the branch
        print(f"🔀 Attempting to merge origin/{branch_name} into main...")
        success, stdout, stderr = run_command(f"git merge origin/{branch_name}")
        
        if success:
            print(f"✅ Successfully merged origin/{branch_name}")
            
            # Push the changes
            print("📤 Pushing changes to main...")
            success, stdout, stderr = run_command("git push origin main")
            if success:
                print(f"✅ Successfully pushed {branch_name} to main")
                successful_merges += 1
            else:
                print(f"❌ Failed to push: {stderr}")
                failed_merges += 1
        else:
            print(f"⚠️  Merge conflict detected for {branch_name}")
            print(f"Conflict details: {stderr}")
            
            # Try to resolve conflicts automatically
            print("🔧 Attempting to resolve conflicts...")
            
            # Reset and try with ours strategy
            success, stdout, stderr = run_command("git reset --hard HEAD")
            if success:
                success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours")
                if success:
                    print("✅ Resolved conflicts using 'ours' strategy")
                    success, stdout, stderr = run_command("git push origin main")
                    if success:
                        print(f"✅ Successfully pushed resolved {branch_name}")
                        successful_merges += 1
                    else:
                        print(f"❌ Failed to push resolved merge: {stderr}")
                        failed_merges += 1
                else:
                    print(f"❌ Failed to resolve conflicts: {stderr}")
                    failed_merges += 1
            else:
                print(f"❌ Failed to reset: {stderr}")
                failed_merges += 1
        
        # Small delay between merges
        time.sleep(2)
    
    return successful_merges, failed_merges

def main():
    """Main function to check and merge PRs"""
    print("🚀 Starting PR check and merge process...")
    
    # Get all open PRs
    open_prs = get_open_prs()
    if not open_prs:
        print("❌ No open PRs found")
        return
    
    print(f"📋 Found {len(open_prs)} open PRs in the JSON file")
    
    # Check which branches actually exist
    print("\n🔍 Checking which PR branches actually exist...")
    existing_branches = []
    missing_branches = []
    
    for pr in open_prs:
        branch_name = pr['head']['ref']
        if check_branch_exists(branch_name):
            existing_branches.append(pr)
            print(f"✅ PR #{pr['number']}: {branch_name} exists")
        else:
            missing_branches.append(pr)
            print(f"❌ PR #{pr['number']}: {branch_name} missing")
    
    print(f"\n📊 Branch Status:")
    print(f"✅ Existing branches: {len(existing_branches)}")
    print(f"❌ Missing branches: {len(missing_branches)}")
    
    if missing_branches:
        print(f"\n⚠️  {len(missing_branches)} PRs have missing branches - these may be stale")
    
    # Try to merge existing branches
    if existing_branches:
        print(f"\n🔄 Attempting to merge {len(existing_branches)} existing branches...")
        successful_merges, failed_merges = merge_existing_branches()
        
        print(f"\n{'='*60}")
        print("📊 MERGE SUMMARY")
        print(f"{'='*60}")
        print(f"✅ Successful merges: {successful_merges}")
        print(f"❌ Failed merges: {failed_merges}")
        print(f"📋 Total branches processed: {len(existing_branches)}")
    else:
        print("\n⚠️  No existing branches found to merge")
        # Try to merge any new branches that might exist
        print("\n🔄 Checking for new branches to merge...")
        successful_merges, failed_merges = merge_existing_branches()
        
        if successful_merges > 0 or failed_merges > 0:
            print(f"\n{'='*60}")
            print("📊 NEW BRANCH MERGE SUMMARY")
            print(f"{'='*60}")
            print(f"✅ Successful merges: {successful_merges}")
            print(f"❌ Failed merges: {failed_merges}")
    
    print(f"\n💡 Recommendation:")
    if missing_branches:
        print(f"- Close {len(missing_branches)} PRs with missing branches")
        print(f"- They may have been already merged or are stale")
    print(f"- Proceed with any new improvements or content creation")

if __name__ == "__main__":
    main()
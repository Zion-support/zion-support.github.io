#!/usr/bin/env python3
"""
Merge key cursor branches one by one with better error handling
"""
import subprocess
import sys
import time
import os

def run_command(cmd, cwd=None, timeout=60):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def merge_single_branch(branch_name):
    """Merge a single branch with comprehensive error handling"""
    print(f"\n{'='*60}")
    print(f"🔄 Attempting to merge: {branch_name}")
    print(f"{'='*60}")
    
    try:
        # Fetch the branch
        print("📥 Fetching branch...")
        success, stdout, stderr = run_command(f"git fetch origin {branch_name}", timeout=30)
        if not success:
            print(f"❌ Failed to fetch {branch_name}: {stderr}")
            return False
        
        # Check if there are new commits
        print("🔍 Checking for new commits...")
        success, stdout, stderr = run_command(f"git log main..origin/{branch_name} --oneline", timeout=30)
        if not success or not stdout.strip():
            print(f"⚠️  {branch_name} has no new commits, skipping...")
            return True
        
        commit_count = len(stdout.strip().split('\n'))
        print(f"📋 {branch_name} has {commit_count} new commits")
        
        # Try merge with conflict resolution
        print("🔀 Attempting merge...")
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours --no-ff -m 'Merge {branch_name}'", timeout=60)
        
        if success:
            print(f"✅ Successfully merged {branch_name}")
            
            # Push the changes
            print("📤 Pushing to remote...")
            success, stdout, stderr = run_command("git push origin main", timeout=60)
            if success:
                print(f"✅ Successfully pushed {branch_name}")
                return True
            else:
                print(f"❌ Failed to push: {stderr}")
                return False
        else:
            print(f"⚠️  Merge conflict detected for {branch_name}")
            
            # Try different strategy
            print("🔧 Trying alternative merge strategy...")
            run_command("git merge --abort", timeout=30)
            success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X theirs --no-ff -m 'Merge {branch_name} (theirs)'", timeout=60)
            
            if success:
                print(f"✅ Merged {branch_name} with theirs strategy")
                success, stdout, stderr = run_command("git push origin main", timeout=60)
                if success:
                    print(f"✅ Pushed {branch_name}")
                    return True
                else:
                    print(f"❌ Failed to push: {stderr}")
                    return False
            else:
                print(f"❌ Failed to merge {branch_name} with any strategy")
                run_command("git merge --abort", timeout=30)
                return False
        
    except Exception as e:
        print(f"❌ Error processing {branch_name}: {e}")
        run_command("git merge --abort", timeout=30)
        return False

def main():
    """Main function to merge key branches"""
    print("🚀 Starting targeted cursor branch merge...")
    
    # Ensure we're on main and up to date
    print("🔀 Ensuring we're on main...")
    success, stdout, stderr = run_command("git checkout main", timeout=30)
    if not success:
        print(f"❌ Failed to checkout main: {stderr}")
        return
    
    print("📥 Pulling latest main...")
    success, stdout, stderr = run_command("git pull origin main", timeout=60)
    if not success:
        print(f"❌ Failed to pull main: {stderr}")
        return
    
    # Get a few key branches to merge
    key_branches = [
        "cursor/automate-automation-redundancy-and-build-improvement-e3e4",
        "cursor/automate-broken-link-and-missing-page-checks-b931",
        "cursor/automate-cloud-cron-jobs-and-sync-repository-16dc"
    ]
    
    print(f"📋 Processing {len(key_branches)} key branches...")
    
    successful_merges = 0
    failed_merges = 0
    
    for branch_name in key_branches:
        if merge_single_branch(branch_name):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Delay between merges
        print("⏳ Waiting between merges...")
        time.sleep(3)
    
    print(f"\n{'='*60}")
    print("📊 MERGE SUMMARY")
    print(f"{'='*60}")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📋 Total processed: {len(key_branches)}")
    
    if successful_merges > 0:
        print(f"\n🎉 Successfully merged {successful_merges} branches!")
        
        # Test build
        print("🧪 Testing build after merges...")
        success, stdout, stderr = run_command("npm run build", timeout=120)
        if success:
            print("✅ Build test passed!")
        else:
            print(f"⚠️  Build test failed: {stderr}")

if __name__ == "__main__":
    main()
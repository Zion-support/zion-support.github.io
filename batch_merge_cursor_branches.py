#!/usr/bin/env python3
"""
Efficient batch merge script for cursor branches
"""
import subprocess
import sys
import time
import os

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True, timeout=300)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_recent_cursor_branches(limit=10):
    """Get the most recent cursor branches"""
    print("🔍 Fetching recent cursor branches...")
    success, stdout, stderr = run_command("git for-each-ref --format='%(refname:short) %(committerdate)' refs/remotes/origin/cursor/ | sort -k2 -r")
    if not success:
        print(f"❌ Failed to list branches: {stderr}")
        return []
    
    branches = []
    for line in stdout.split('\n'):
        if 'origin/cursor/' in line and 'refs/remotes/' not in line:
            branch_name = line.split()[0].replace('origin/', '')
            # Skip backup and merge branches
            if not any(skip in branch_name for skip in ['backup', 'merge', 'batch']):
                branches.append(branch_name)
                if len(branches) >= limit:
                    break
    
    print(f"📋 Found {len(branches)} recent cursor branches")
    return branches

def quick_merge_branch(branch_name):
    """Quick merge a single branch"""
    print(f"🔄 Merging {branch_name}...")
    
    try:
        # Fetch the branch
        success, stdout, stderr = run_command(f"git fetch origin {branch_name}")
        if not success:
            print(f"❌ Failed to fetch {branch_name}: {stderr}")
            return False
        
        # Try fast-forward merge first
        success, stdout, stderr = run_command(f"git merge --ff-only origin/{branch_name}")
        if success:
            print(f"✅ Fast-forward merged {branch_name}")
            # Push the changes
            success, stdout, stderr = run_command("git push origin main")
            if success:
                print(f"✅ Pushed {branch_name}")
                return True
            else:
                print(f"❌ Failed to push: {stderr}")
                return False
        
        # Try regular merge
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} --no-ff -m 'Merge {branch_name}'")
        if success:
            print(f"✅ Merged {branch_name}")
            # Push the changes
            success, stdout, stderr = run_command("git push origin main")
            if success:
                print(f"✅ Pushed {branch_name}")
                return True
            else:
                print(f"❌ Failed to push: {stderr}")
                return False
        
        # Handle conflicts with strategy
        print(f"⚠️  Conflicts in {branch_name}, trying strategy...")
        run_command("git merge --abort")
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours -m 'Merge {branch_name} (resolve conflicts)'")
        if success:
            print(f"✅ Merged {branch_name} with conflict resolution")
            # Push the changes
            success, stdout, stderr = run_command("git push origin main")
            if success:
                print(f"✅ Pushed resolved {branch_name}")
                return True
            else:
                print(f"❌ Failed to push resolved merge: {stderr}")
                return False
        
        print(f"❌ Failed to merge {branch_name}")
        run_command("git merge --abort")
        return False
        
    except Exception as e:
        print(f"❌ Error merging {branch_name}: {e}")
        run_command("git merge --abort")
        return False

def main():
    """Main function"""
    print("🚀 Starting batch merge of cursor branches...")
    
    # Ensure we're on main and up to date
    print("🔀 Ensuring we're on main...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {stderr}")
        return
    
    print("📥 Pulling latest main...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"❌ Failed to pull main: {stderr}")
        return
    
    # Get recent branches
    branches = get_recent_cursor_branches(limit=20)
    if not branches:
        print("✅ No cursor branches found to merge")
        return
    
    print(f"📋 Processing {len(branches)} branches...")
    
    successful_merges = 0
    failed_merges = 0
    
    for i, branch_name in enumerate(branches, 1):
        print(f"\n[{i}/{len(branches)}] Processing {branch_name}")
        
        if quick_merge_branch(branch_name):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Small delay
        time.sleep(2)
    
    print(f"\n{'='*50}")
    print("📊 BATCH MERGE SUMMARY")
    print(f"{'='*50}")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📋 Total processed: {len(branches)}")

if __name__ == "__main__":
    main()
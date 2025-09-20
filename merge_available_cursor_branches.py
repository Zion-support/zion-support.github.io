#!/usr/bin/env python3
"""
Merge the available cursor branches that actually exist on remote
"""
import subprocess
import sys
import time
import os

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True, timeout=120)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_available_cursor_branches():
    """Get cursor branches that actually exist on remote"""
    print("🔍 Fetching available cursor branches...")
    success, stdout, stderr = run_command("git ls-remote --heads origin | grep 'cursor/' | grep -v backup | grep -v merge")
    if not success:
        print(f"❌ Failed to list branches: {stderr}")
        return []
    
    branches = []
    for line in stdout.split('\n'):
        if line.strip() and 'refs/heads/cursor/' in line:
            branch_name = line.split('refs/heads/')[-1]
            branches.append(branch_name)
    
    print(f"📋 Found {len(branches)} available cursor branches")
    return branches

def merge_single_branch(branch_name):
    """Merge a single branch with conflict resolution"""
    print(f"\n🔄 Merging {branch_name}...")
    
    try:
        # Fetch the branch
        success, stdout, stderr = run_command(f"git fetch origin {branch_name}")
        if not success:
            print(f"❌ Failed to fetch {branch_name}: {stderr}")
            return False
        
        # Check if there are new commits
        success, stdout, stderr = run_command(f"git log main..origin/{branch_name} --oneline")
        if not success or not stdout.strip():
            print(f"⚠️  {branch_name} has no new commits, skipping...")
            return True
        
        print(f"📋 {branch_name} has {len(stdout.strip().split(chr(10)))} new commits")
        
        # Try merge with conflict resolution strategy
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours --no-ff -m 'Merge {branch_name}'")
        if success:
            print(f"✅ Successfully merged {branch_name}")
            
            # Push the changes
            success, stdout, stderr = run_command("git push origin main")
            if success:
                print(f"✅ Successfully pushed {branch_name}")
                return True
            else:
                print(f"❌ Failed to push: {stderr}")
                return False
        else:
            print(f"⚠️  Merge failed for {branch_name}: {stderr}")
            
            # Try abort and use different strategy
            run_command("git merge --abort")
            success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X theirs --no-ff -m 'Merge {branch_name} (theirs strategy)'")
            if success:
                print(f"✅ Merged {branch_name} with theirs strategy")
                success, stdout, stderr = run_command("git push origin main")
                if success:
                    print(f"✅ Pushed {branch_name}")
                    return True
                else:
                    print(f"❌ Failed to push: {stderr}")
                    return False
            else:
                print(f"❌ Failed to merge {branch_name} with any strategy")
                run_command("git merge --abort")
                return False
        
    except Exception as e:
        print(f"❌ Error merging {branch_name}: {e}")
        run_command("git merge --abort")
        return False

def main():
    """Main function"""
    print("🚀 Starting merge of available cursor branches...")
    
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
    
    # Get available branches
    branches = get_available_cursor_branches()
    if not branches:
        print("✅ No cursor branches found to merge")
        return
    
    print(f"📋 Processing {len(branches)} branches...")
    
    successful_merges = 0
    failed_merges = 0
    
    # Process in smaller batches
    batch_size = 5
    for i in range(0, len(branches), batch_size):
        batch = branches[i:i + batch_size]
        print(f"\n🔄 Processing batch {i//batch_size + 1}/{(len(branches) + batch_size - 1)//batch_size}")
        
        for branch_name in batch:
            if merge_single_branch(branch_name):
                successful_merges += 1
            else:
                failed_merges += 1
            
            # Small delay between merges
            time.sleep(1)
        
        # Longer delay between batches
        if i + batch_size < len(branches):
            print("⏳ Waiting between batches...")
            time.sleep(3)
    
    print(f"\n{'='*60}")
    print("📊 MERGE SUMMARY")
    print(f"{'='*60}")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📋 Total branches processed: {len(branches)}")
    
    if successful_merges > 0:
        print(f"\n🎉 Successfully merged {successful_merges} branches!")
        print("💡 Running build test...")
        
        # Test build after merges
        success, stdout, stderr = run_command("npm run build")
        if success:
            print("✅ Build test passed!")
        else:
            print(f"⚠️  Build test failed: {stderr}")

if __name__ == "__main__":
    main()
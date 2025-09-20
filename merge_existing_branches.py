#!/usr/bin/env python3
"""
Merge existing branches that are available
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

def get_available_branches():
    """Get branches that actually exist and can be merged"""
    print("🔍 Getting available branches...")
    success, stdout, stderr = run_command("git branch -r | grep -E '(cursor|pr|codex)' | head -50")
    if not success:
        print(f"❌ Failed to list branches: {stderr}")
        return []
    
    branches = []
    for line in stdout.split('\n'):
        if line.strip() and 'origin/' in line:
            branch_name = line.strip().replace('origin/', '')
            # Skip main and HEAD
            if branch_name not in ['main', 'HEAD']:
                branches.append(branch_name)
    
    print(f"📋 Found {len(branches)} available branches")
    return branches

def check_branch_exists(branch_name):
    """Check if a branch actually exists on remote"""
    success, stdout, stderr = run_command(f"git ls-remote --heads origin {branch_name}")
    return success and branch_name in stdout

def merge_branch(branch_name):
    """Merge a single branch with conflict resolution"""
    print(f"🔄 Attempting to merge {branch_name}...")
    
    try:
        # Check if branch exists
        if not check_branch_exists(branch_name):
            print(f"❌ Branch {branch_name} does not exist on remote")
            return False
        
        # Fetch the branch
        success, stdout, stderr = run_command(f"git fetch origin {branch_name}")
        if not success:
            print(f"❌ Failed to fetch {branch_name}: {stderr}")
            return False
        
        # Check for differences
        success, stdout, stderr = run_command(f"git diff --name-only main origin/{branch_name}")
        if success and not stdout.strip():
            print(f"⏭️  Branch {branch_name} has no differences, skipping...")
            return True
        
        # Try to merge with conflict resolution strategy
        success, stdout, stderr = run_command(f"git merge origin/{branch_name} -X ours --no-edit")
        if success:
            print(f"✅ Successfully merged {branch_name}")
            return True
        else:
            print(f"⚠️  Merge conflicts in {branch_name}, resolving...")
            
            # Get conflicted files
            success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
            if success and stdout.strip():
                conflicted_files = stdout.strip().split('\n')
                print(f"📋 Conflicted files: {conflicted_files}")
                
                # Resolve conflicts by taking our version
                for file in conflicted_files:
                    if file.strip():
                        run_command(f"git checkout --ours -- {file.strip()}")
                        run_command(f"git add {file.strip()}")
                
                # Commit the merge
                success, stdout, stderr = run_command(f"git commit -m 'Merge {branch_name} with conflict resolution'")
                if success:
                    print(f"✅ Successfully resolved conflicts and merged {branch_name}")
                    return True
                else:
                    print(f"❌ Failed to commit merge: {stderr}")
                    run_command("git merge --abort")
                    return False
            else:
                print(f"❌ No conflicted files found, aborting merge")
                run_command("git merge --abort")
                return False
                
    except Exception as e:
        print(f"❌ Error merging {branch_name}: {e}")
        run_command("git merge --abort")
        return False

def main():
    """Main function"""
    print("🚀 Starting merge of existing branches...")
    
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
    branches = get_available_branches()
    if not branches:
        print("✅ No branches found to merge")
        return
    
    print(f"📋 Processing {len(branches)} branches...")
    
    successful_merges = 0
    failed_merges = 0
    
    for i, branch_name in enumerate(branches, 1):
        print(f"\n[{i}/{len(branches)}] Processing {branch_name}")
        
        if merge_branch(branch_name):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Small delay between merges
        time.sleep(1)
    
    # Push all changes
    if successful_merges > 0:
        print("\n💾 Pushing all changes to remote...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed all changes")
        else:
            print(f"❌ Failed to push changes: {stderr}")
    
    print(f"\n{'='*50}")
    print("📊 MERGE SUMMARY")
    print(f"{'='*50}")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📋 Total processed: {len(branches)}")

if __name__ == "__main__":
    main()
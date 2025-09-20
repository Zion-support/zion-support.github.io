#!/usr/bin/env python3
"""
Comprehensive script to merge all cursor branches into main
"""
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

def get_cursor_branches():
    """Get all cursor branches from remote"""
    print("🔍 Fetching all remote cursor branches...")
    success, stdout, stderr = run_command("git ls-remote --heads origin")
    if not success:
        print(f"❌ Failed to list remote branches: {stderr}")
        return []
    
    cursor_branches = []
    for line in stdout.split('\n'):
        if 'cursor/' in line and 'refs/heads/' in line:
            branch_name = line.split('refs/heads/')[-1]
            # Skip backup and merge branches
            if not any(skip in branch_name for skip in ['backup', 'merge', 'batch']):
                cursor_branches.append(branch_name)
    
    print(f"📋 Found {len(cursor_branches)} cursor branches to process")
    return cursor_branches

def resolve_conflicts():
    """Resolve merge conflicts automatically"""
    print("🔧 Attempting to resolve conflicts...")
    
    # Check git status
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"❌ Failed to check git status: {stderr}")
        return False
    
    if not stdout.strip():
        print("✅ No conflicts detected")
        return True
    
    print(f"⚠️  Conflicts detected: {stdout}")
    
    # Try different resolution strategies
    strategies = [
        ("--ours", "Accept main branch changes"),
        ("--theirs", "Accept incoming changes"),
        ("-X ours", "Merge with ours strategy"),
        ("-X theirs", "Merge with theirs strategy")
    ]
    
    for strategy, description in strategies:
        print(f"🔄 Trying {description} ({strategy})...")
        
        # Reset any previous merge state
        run_command("git reset --hard HEAD")
        run_command("git clean -fd")
        
        # Try the strategy
        success, stdout, stderr = run_command(f"git merge --strategy-option={strategy}")
        if success:
            print(f"✅ Successfully resolved conflicts using {description}")
            return True
        else:
            print(f"⚠️  Strategy {strategy} failed: {stderr}")
    
    # If all strategies fail, try manual resolution
    print("🔧 Attempting manual conflict resolution...")
    
    # Get list of conflicted files
    success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if success and stdout.strip():
        conflicted_files = stdout.strip().split('\n')
        print(f"📁 Conflicted files: {conflicted_files}")
        
        # For each conflicted file, accept the version from the incoming branch
        for file_path in conflicted_files:
            print(f"🔧 Resolving {file_path}...")
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}")
            if success:
                run_command(f"git add {file_path}")
                print(f"✅ Resolved {file_path}")
            else:
                print(f"⚠️  Failed to resolve {file_path}: {stderr}")
        
        # Commit the resolution
        success, stdout, stderr = run_command("git commit -m 'Resolve merge conflicts automatically'")
        if success:
            print("✅ Successfully committed conflict resolution")
            return True
    
    print("❌ Failed to resolve conflicts automatically")
    return False

def merge_branch(branch_name):
    """Merge a single branch into main"""
    print(f"\n{'='*60}")
    print(f"🔄 Processing branch: {branch_name}")
    print(f"{'='*60}")
    
    # Ensure we're on main and it's up to date
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
    
    # Fetch the specific branch
    print(f"📥 Fetching branch {branch_name}...")
    success, stdout, stderr = run_command(f"git fetch origin {branch_name}")
    if not success:
        print(f"❌ Failed to fetch branch {branch_name}: {stderr}")
        return False
    
    # Check if branch has any commits not in main
    success, stdout, stderr = run_command(f"git log main..origin/{branch_name} --oneline")
    if not success or not stdout.strip():
        print(f"⚠️  Branch {branch_name} has no new commits, skipping...")
        return True
    
    print(f"📋 Branch {branch_name} has {len(stdout.strip().split(chr(10)))} new commits")
    
    # Try to merge the branch
    print(f"🔀 Attempting to merge origin/{branch_name}...")
    success, stdout, stderr = run_command(f"git merge origin/{branch_name} --no-ff -m 'Merge branch {branch_name}'")
    
    if success:
        print(f"✅ Successfully merged {branch_name}")
        
        # Push the changes
        print("📤 Pushing changes to main...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print(f"✅ Successfully pushed {branch_name} to main")
            return True
        else:
            print(f"❌ Failed to push: {stderr}")
            return False
    else:
        print(f"⚠️  Merge conflict detected for {branch_name}")
        
        # Try to resolve conflicts
        if resolve_conflicts():
            # Push the resolved changes
            print("📤 Pushing resolved changes...")
            success, stdout, stderr = run_command("git push origin main")
            if success:
                print(f"✅ Successfully pushed resolved {branch_name}")
                return True
            else:
                print(f"❌ Failed to push resolved merge: {stderr}")
                return False
        else:
            # Abort the merge
            print("🔄 Aborting merge...")
            run_command("git merge --abort")
            return False

def main():
    """Main function to merge all cursor branches"""
    print("🚀 Starting comprehensive cursor branch merge process...")
    
    # Get all cursor branches
    cursor_branches = get_cursor_branches()
    if not cursor_branches:
        print("✅ No cursor branches found to merge")
        return
    
    print(f"📋 Processing {len(cursor_branches)} cursor branches...")
    
    successful_merges = 0
    failed_merges = 0
    skipped_branches = 0
    
    # Process branches in batches to avoid overwhelming the system
    batch_size = 5
    for i in range(0, len(cursor_branches), batch_size):
        batch = cursor_branches[i:i + batch_size]
        print(f"\n🔄 Processing batch {i//batch_size + 1}/{(len(cursor_branches) + batch_size - 1)//batch_size}")
        
        for branch_name in batch:
            if merge_branch(branch_name):
                successful_merges += 1
            else:
                failed_merges += 1
            
            # Small delay between merges
            time.sleep(1)
        
        # Longer delay between batches
        if i + batch_size < len(cursor_branches):
            print("⏳ Waiting between batches...")
            time.sleep(5)
    
    print(f"\n{'='*60}")
    print("📊 MERGE SUMMARY")
    print(f"{'='*60}")
    print(f"✅ Successful merges: {successful_merges}")
    print(f"❌ Failed merges: {failed_merges}")
    print(f"📋 Total branches processed: {len(cursor_branches)}")
    
    if successful_merges > 0:
        print(f"\n🎉 Successfully merged {successful_merges} branches!")
        print("💡 Consider cleaning up merged branches and running tests")
    
    if failed_merges > 0:
        print(f"\n⚠️  {failed_merges} branches failed to merge")
        print("💡 These may need manual conflict resolution")

if __name__ == "__main__":
    main()
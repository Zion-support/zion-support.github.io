#!/usr/bin/env python3
"""
Efficient script to merge available cursor branches into main
Handles large numbers of branches systematically
"""

import subprocess
import sys
import time
from datetime import datetime

def run_command(cmd, timeout=30):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=timeout
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def get_available_branches():
    """Get list of available cursor branches"""
    success, output, error = run_command("git branch -r | grep 'cursor/fix-errors-and-merge-to-main' | head -100")
    if not success:
        print(f"Error getting branches: {error}")
        return []
    
    branches = []
    for line in output.strip().split('\n'):
        if line.strip():
            branch_name = line.strip().replace('origin/', '')
            branches.append(branch_name)
    
    return branches

def merge_branch(branch_name):
    """Attempt to merge a single branch"""
    print(f"🔄 Merging {branch_name}...")
    
    # Try to merge
    success, output, error = run_command(f"git merge origin/{branch_name} --no-edit -m 'Merge {branch_name}'")
    
    if success:
        print(f"✅ Successfully merged {branch_name}")
        return True
    else:
        # Check if it's already up to date
        if "Already up to date" in error:
            print(f"ℹ️  {branch_name} already up to date")
            return True
        elif "CONFLICT" in error or "conflict" in error:
            print(f"⚠️  Conflict in {branch_name}, resolving...")
            return resolve_conflicts(branch_name)
        else:
            print(f"❌ Failed to merge {branch_name}: {error}")
            return False

def resolve_conflicts(branch_name):
    """Resolve merge conflicts by accepting main branch version"""
    # Accept our version (main branch)
    success, output, error = run_command("git checkout --ours .")
    if not success:
        print(f"❌ Failed to resolve conflicts for {branch_name}")
        return False
    
    # Add resolved files
    success, output, error = run_command("git add .")
    if not success:
        print(f"❌ Failed to add resolved files for {branch_name}")
        return False
    
    # Commit the merge
    success, output, error = run_command(f"git commit --no-edit -m 'Merge {branch_name} (conflicts resolved)'")
    if success:
        print(f"✅ Resolved conflicts and merged {branch_name}")
        return True
    else:
        print(f"❌ Failed to commit resolved conflicts for {branch_name}")
        return False

def main():
    """Main execution function"""
    print(f"🚀 Starting efficient branch merge process at {datetime.now()}")
    print("=" * 80)
    
    # Ensure we're on main branch
    print("📍 Ensuring we're on main branch...")
    success, output, error = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {error}")
        return 1
    
    # Pull latest changes
    print("📥 Pulling latest changes...")
    success, output, error = run_command("git pull origin main")
    if not success:
        print(f"⚠️  Warning: Failed to pull latest changes: {error}")
    
    # Get available branches
    print("📋 Getting available branches...")
    branches = get_available_branches()
    print(f"Found {len(branches)} branches to process")
    
    if not branches:
        print("❌ No branches found to merge")
        return 1
    
    # Track results
    successful = 0
    failed = 0
    already_merged = 0
    
    # Process branches in batches
    batch_size = 50
    total_batches = (len(branches) + batch_size - 1) // batch_size
    
    for batch_num in range(total_batches):
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, len(branches))
        batch_branches = branches[start_idx:end_idx]
        
        print(f"\n📦 Processing batch {batch_num + 1}/{total_batches} ({len(batch_branches)} branches)")
        print("-" * 60)
        
        for i, branch in enumerate(batch_branches):
            print(f"[{start_idx + i + 1}/{len(branches)}] ", end="")
            
            if merge_branch(branch):
                if "already up to date" in str(branch).lower():
                    already_merged += 1
                else:
                    successful += 1
            else:
                failed += 1
            
            # Small delay to avoid overwhelming git
            time.sleep(0.1)
        
        # Push changes after each batch
        if successful > 0 or already_merged > 0:
            print(f"\n📤 Pushing changes after batch {batch_num + 1}...")
            push_success, push_output, push_error = run_command("git push origin main")
            if push_success:
                print("✅ Successfully pushed changes")
            else:
                print(f"⚠️  Push failed: {push_error}")
    
    # Final summary
    print(f"\n{'='*80}")
    print("📊 MERGE SUMMARY")
    print(f"{'='*80}")
    print(f"Total branches processed: {len(branches)}")
    print(f"✅ Successfully merged: {successful}")
    print(f"ℹ️  Already up to date: {already_merged}")
    print(f"❌ Failed to merge: {failed}")
    
    # Final push
    if successful > 0 or already_merged > 0:
        print(f"\n📤 Final push to origin/main...")
        push_success, push_output, push_error = run_command("git push origin main")
        if push_success:
            print("✅ All changes pushed successfully!")
        else:
            print(f"❌ Final push failed: {push_error}")
    
    print(f"\n🏁 Merge process completed at {datetime.now()}")
    return 0 if failed == 0 else 1

if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\n\n⚠️  Interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n💥 Fatal error: {e}")
        sys.exit(1)
#!/usr/bin/env python3
"""
Aggressive script to merge ALL remaining cursor branches into main
Processes all available branches systematically
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

def get_all_branches():
    """Get ALL available cursor branches"""
    success, output, error = run_command("git branch -r | grep 'cursor/fix-errors-and-merge-to-main'")
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
    # Try to merge
    success, output, error = run_command(f"git merge origin/{branch_name} --no-edit -m 'Merge {branch_name}'")
    
    if success:
        return True, "merged"
    else:
        # Check if it's already up to date
        if "Already up to date" in error:
            return True, "already_merged"
        elif "CONFLICT" in error or "conflict" in error:
            return resolve_conflicts(branch_name)
        else:
            return False, f"error: {error}"

def resolve_conflicts(branch_name):
    """Resolve merge conflicts by accepting main branch version"""
    # Accept our version (main branch)
    success, output, error = run_command("git checkout --ours .")
    if not success:
        return False, "failed to resolve conflicts"
    
    # Add resolved files
    success, output, error = run_command("git add .")
    if not success:
        return False, "failed to add resolved files"
    
    # Commit the merge
    success, output, error = run_command(f"git commit --no-edit -m 'Merge {branch_name} (conflicts resolved)'")
    if success:
        return True, "merged_with_conflicts_resolved"
    else:
        return False, "failed to commit resolved conflicts"

def main():
    """Main execution function"""
    print(f"🚀 Starting AGGRESSIVE branch merge process at {datetime.now()}")
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
    
    # Get ALL available branches
    print("📋 Getting ALL available branches...")
    branches = get_all_branches()
    print(f"Found {len(branches)} branches to process")
    
    if not branches:
        print("❌ No branches found to merge")
        return 1
    
    # Track results
    successful = 0
    already_merged = 0
    failed = 0
    conflicts_resolved = 0
    
    # Process branches in larger batches
    batch_size = 100
    total_batches = (len(branches) + batch_size - 1) // batch_size
    
    for batch_num in range(total_batches):
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, len(branches))
        batch_branches = branches[start_idx:end_idx]
        
        print(f"\n📦 Processing batch {batch_num + 1}/{total_batches} ({len(batch_branches)} branches)")
        print("-" * 60)
        
        batch_successful = 0
        batch_already_merged = 0
        batch_failed = 0
        batch_conflicts = 0
        
        for i, branch in enumerate(batch_branches):
            if i % 10 == 0:  # Show progress every 10 branches
                print(f"[{start_idx + i + 1}/{len(branches)}] Processing {branch}...")
            
            success, status = merge_branch(branch)
            
            if success:
                if status == "merged":
                    batch_successful += 1
                    successful += 1
                elif status == "already_merged":
                    batch_already_merged += 1
                    already_merged += 1
                elif "conflicts_resolved" in status:
                    batch_conflicts += 1
                    conflicts_resolved += 1
                    successful += 1
            else:
                batch_failed += 1
                failed += 1
                if i % 10 == 0:  # Only show errors every 10 branches to avoid spam
                    print(f"❌ Failed to merge {branch}: {status}")
            
            # Small delay to avoid overwhelming git
            time.sleep(0.05)
        
        print(f"Batch {batch_num + 1} complete: {batch_successful} merged, {batch_already_merged} already merged, {batch_conflicts} conflicts resolved, {batch_failed} failed")
        
        # Push changes after each batch
        if batch_successful > 0 or batch_already_merged > 0 or batch_conflicts > 0:
            print(f"📤 Pushing changes after batch {batch_num + 1}...")
            push_success, push_output, push_error = run_command("git push origin main")
            if push_success:
                print("✅ Successfully pushed changes")
            else:
                print(f"⚠️  Push failed: {push_error}")
                # Try to pull and push again
                pull_success, pull_output, pull_error = run_command("git pull origin main --no-rebase")
                if pull_success:
                    push_success, push_output, push_error = run_command("git push origin main")
                    if push_success:
                        print("✅ Successfully pushed after pull")
                    else:
                        print(f"❌ Still failed to push: {push_error}")
    
    # Final summary
    print(f"\n{'='*80}")
    print("📊 FINAL MERGE SUMMARY")
    print(f"{'='*80}")
    print(f"Total branches processed: {len(branches)}")
    print(f"✅ Successfully merged: {successful}")
    print(f"ℹ️  Already up to date: {already_merged}")
    print(f"🔧 Conflicts resolved: {conflicts_resolved}")
    print(f"❌ Failed to merge: {failed}")
    
    # Final push
    if successful > 0 or already_merged > 0 or conflicts_resolved > 0:
        print(f"\n📤 Final push to origin/main...")
        push_success, push_output, push_error = run_command("git push origin main")
        if push_success:
            print("✅ All changes pushed successfully!")
        else:
            print(f"❌ Final push failed: {push_error}")
    
    print(f"\n🏁 Aggressive merge process completed at {datetime.now()}")
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
#!/usr/bin/env python3
"""
Script to merge all available cursor branches into main
"""

import json
import subprocess
import sys
import time
from datetime import datetime
import time

def run_command(cmd, capture_output=True, check=False, timeout=60):
    """Run a shell command and return the result"""
    try:
        print(f"→ {cmd}")
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=capture_output,
            text=True,
            check=check,
            timeout=timeout
        )
        if result.stdout and capture_output:
            print(result.stdout)
        if result.stderr and result.returncode != 0:
            print(result.stderr)
        return result
    except subprocess.TimeoutExpired:
        print(f"⚠ Command timed out after {timeout}s")
        return None
    except subprocess.CalledProcessError as e:
        print(f"⚠ Command failed with return code {e.returncode}")
        return e
    except Exception as e:
        print(f"⚠ Exception: {e}")
        return None

def get_available_cursor_branches():
    """Get all available cursor branches"""
    result = run_command("git branch -r | grep 'cursor/fix-errors-and-merge-to-main' | head -50")
    if not result or result.returncode != 0:
        return []
    
    branches = []
    for line in result.stdout.strip().split('\n'):
        if line.strip():
            branch = line.strip().replace('origin/', '')
            branches.append(branch)
    
    return branches

def resolve_conflicts():
    """Resolve merge conflicts by accepting main branch version"""
    print("🔧 Resolving merge conflicts...")
    
    # Get list of conflicted files
    result = run_command("git diff --name-only --diff-filter=U")
    if not result or result.returncode != 0:
        print("❌ Could not get conflicted files")
        return False
    
    conflicted_files = [f.strip() for f in result.stdout.split('\n') if f.strip()]
    
    if not conflicted_files:
        print("✅ No conflicted files found")
        return True
    
    print(f"📁 Found {len(conflicted_files)} conflicted files")
    
    # Resolve conflicts by accepting ours (main branch)
    print("🔄 Resolving conflicts (keeping main branch version)...")
    
    # Use checkout --ours to accept main branch version
    result = run_command("git checkout --ours .")
    if not result or result.returncode != 0:
        print("❌ Failed to resolve conflicts with --ours")
        return False
    
    # Add resolved files
    result = run_command("git add .")
    if not result or result.returncode != 0:
        print("❌ Failed to add resolved files")
        return False
    
    print("✅ Conflicts resolved successfully")
    return True

def merge_branch(branch_name):
    """Attempt to merge a branch into main"""
    print(f"\n{'='*60}")
    print(f"🔄 Processing branch: {branch_name}")
    print(f"{'='*60}")
    
    # Fetch the branch
    print(f"📥 Fetching branch {branch_name}...")
    result = run_command(f"git fetch origin {branch_name}")
    if not result or result.returncode != 0:
        print(f"❌ Failed to fetch branch {branch_name}")
        return False
    
    # Try to merge
    print(f"🔀 Attempting to merge {branch_name} into main...")
    merge_msg = f"Merge branch {branch_name}"
    result = run_command(f"git merge origin/{branch_name} --no-edit -m '{merge_msg}'")
    
    if result and result.returncode == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    
    # Check if there are conflicts
    result = run_command("git status --porcelain")
    if result and result.returncode == 0:
        if "Unmerged paths" in result.stdout or "both modified" in result.stdout:
            print(f"⚠️  Merge conflicts detected for {branch_name}")
            
            # Resolve conflicts
            if resolve_conflicts():
                # Complete the merge
                commit_msg = f"Merge branch {branch_name} (conflicts resolved)"
                result = run_command(f"git commit --no-edit -m '{commit_msg}'")
                
                if result and result.returncode == 0:
                    print(f"✅ Merged {branch_name} with conflict resolution")
                    return True
                else:
                    print(f"❌ Failed to complete merge for {branch_name}")
                    run_command("git merge --abort")
                    return False
            else:
                print(f"❌ Failed to resolve conflicts for {branch_name}")
                run_command("git merge --abort")
                return False
        else:
            print(f"❌ Failed to merge {branch_name} (unknown error)")
            run_command("git merge --abort")
            return False
    else:
        print(f"❌ Failed to check merge status for {branch_name}")
        run_command("git merge --abort")
        return False

def main():
    """Main execution function"""
    print(f"🚀 Starting Branch Merge Process at {datetime.now()}")
    print(f"{'='*80}\n")
    
    # Ensure we're on main branch
    print("📍 Ensuring we're on main branch...")
    result = run_command("git checkout main")
    if not result or result.returncode != 0:
        print("❌ Failed to checkout main branch")
        return 1
    
    # Pull latest changes
    print("📥 Pulling latest changes from main...")
    result = run_command("git pull origin main")
    if not result or result.returncode != 0:
        print("⚠️  Warning: Failed to pull latest changes, continuing anyway...")
    
    # Get available branches
    print("\n📋 Getting available cursor branches...")
    branches = get_available_cursor_branches()
    if not branches:
        print("❌ No cursor branches found")
        return 1
    
    print(f"Found {len(branches)} cursor branch(es)\n")
    
    # Track results
    successful_merges = []
    failed_merges = []
    
    # Process each branch
    for i, branch in enumerate(branches, 1):
        print(f"\n[{i}/{len(branches)}] Processing {branch}...")
        
        success = merge_branch(branch)
        
        if success:
            successful_merges.append(branch)
        else:
            failed_merges.append(branch)
        
        # Small delay to avoid overwhelming git
        if i < len(branches):
            time.sleep(1)
    
    # Final summary
    print(f"\n{'='*80}")
    print("📊 MERGE SUMMARY")
    print(f"{'='*80}")
    print(f"Total branches: {len(branches)}")
    print(f"✅ Successfully merged: {len(successful_merges)}")
    print(f"❌ Failed to merge: {len(failed_merges)}")
    
    if successful_merges:
        print(f"\n✅ Successfully merged branches:")
        for branch in successful_merges:
            print(f"  • {branch}")
    
    if failed_merges:
        print(f"\n❌ Failed branches:")
        for branch in failed_merges:
            print(f"  • {branch}")
    
    # Push changes
    if successful_merges:
        print(f"\n📤 Pushing merged changes to origin/main...")
        push_result = run_command("git push origin main")
        if push_result and push_result.returncode == 0:
            print("✅ Successfully pushed all changes to main!")
        else:
            print("❌ Failed to push changes. You may need to push manually.")
            print("Run: git push origin main")
    
    print(f"\n🏁 Merge process completed at {datetime.now()}")
    
    # Write summary report
    report = {
        'timestamp': datetime.now().isoformat(),
        'total_branches': len(branches),
        'successful': len(successful_merges),
        'failed': len(failed_merges),
        'successful_branches': successful_merges,
        'failed_branches': failed_merges
    }
    
    with open('branch_merge_report.json', 'w') as f:
        json.dump(report, f, indent=2)
    
    print("\n📝 Detailed report saved to: branch_merge_report.json")
    
    return 0 if not failed_merges else 1

if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\n\n⚠️  Interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n💥 Fatal error: {e}")
        sys.exit(1)
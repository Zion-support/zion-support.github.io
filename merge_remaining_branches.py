#!/usr/bin/env python3
"""
Merge Remaining Cursor Branches - Simple merge script
"""

import subprocess
import sys
from datetime import datetime

def run_command(cmd, capture_output=True, check=False):
    """Run a shell command and return the result"""
    try:
        print(f"→ {cmd}")
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=capture_output,
            text=True,
            check=check
        )
        if result.stdout and capture_output:
            print(result.stdout)
        if result.stderr and result.returncode != 0:
            print(f"Error: {result.stderr}")
        return result
    except subprocess.CalledProcessError as e:
        print(f"⚠ Command failed with return code {e.returncode}")
        return e
    except Exception as e:
        print(f"⚠ Exception: {e}")
        return None

def get_remaining_branches():
    """Get all remaining cursor branches"""
    result = run_command("git branch -r | grep 'cursor/fix-errors-and-merge-to-main' | head -50")
    if not result or result.returncode != 0:
        return []
    
    branches = []
    for line in result.stdout.strip().split('\n'):
        if line.strip():
            branch = line.strip().replace('origin/', '')
            branches.append(branch)
    
    return branches

def merge_branch(branch_name):
    """Attempt to merge a branch into main"""
    print(f"\n🔄 Merging {branch_name}...")
    
    # Try to merge
    result = run_command(f"git merge origin/{branch_name} --no-edit -m 'Merge branch {branch_name}'")
    
    if result and result.returncode == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    else:
        print(f"❌ Failed to merge {branch_name}")
        # Abort the merge
        run_command("git merge --abort")
        return False

def main():
    """Main execution function"""
    print(f"🚀 Starting Remaining Branches Merge at {datetime.now()}")
    print(f"{'='*60}\n")
    
    # Get remaining branches
    branches = get_remaining_branches()
    if not branches:
        print("❌ No remaining branches found")
        return 1
    
    print(f"Found {len(branches)} branch(es) to merge:")
    for branch in branches:
        print(f"  • {branch}")
    print()
    
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
    
    # Final summary
    print(f"\n{'='*60}")
    print("📊 MERGE SUMMARY")
    print(f"{'='*60}")
    print(f"Total branches: {len(branches)}")
    print(f"✅ Successfully merged: {len(successful_merges)}")
    print(f"❌ Failed to merge: {len(failed_merges)}")
    
    # Push changes
    if successful_merges:
        print(f"\n📤 Pushing merged changes...")
        push_result = run_command("git push origin main")
        if push_result and push_result.returncode == 0:
            print("✅ Successfully pushed all changes!")
        else:
            print("❌ Failed to push changes")
    
    print(f"\n🏁 Merge process completed at {datetime.now()}")
    
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
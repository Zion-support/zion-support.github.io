#!/usr/bin/env python3
"""
Script to merge the final remaining PRs
"""
import subprocess
import json
import sys
import time
from typing import List, Dict, Tuple

def run_command(cmd: str) -> Tuple[bool, str]:
    """Run a command and return success status and output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=300)
        return result.returncode == 0, result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return False, "Command timed out"
    except Exception as e:
        return False, str(e)

def get_all_remaining_branches() -> List[str]:
    """Get all remaining cursor/codex branches"""
    success, output = run_command("git branch -r | grep -E '(cursor/|codex/)' | tail -n +301")
    if not success:
        print(f"Error getting branches: {output}")
        return []
    
    branches = [line.strip().replace('origin/', '') for line in output.split('\n') if line.strip()]
    return branches

def merge_branch_safe(branch: str) -> bool:
    """Safely merge a branch with error handling"""
    print(f"Merging {branch}...")
    
    # Skip branches with special characters that cause issues
    if any(char in branch for char in ['&', '<', '>', '|', ';', '(', ')', '[', ']']):
        print(f"  ⚠️  Skipping {branch} due to special characters")
        return False
    
    try:
        success, output = run_command(f"git merge origin/{branch} --no-ff -m 'Merge {branch} into main'")
        
        if success:
            print(f"  ✅ Successfully merged {branch}")
            return True
        else:
            print(f"  ❌ Failed to merge {branch}: {output[:100]}...")
            return False
    except Exception as e:
        print(f"  ❌ Error merging {branch}: {e}")
        return False

def sync_with_remote():
    """Sync with remote"""
    print("🔄 Syncing with remote...")
    
    # Pull latest changes
    success, output = run_command("git pull origin main")
    if not success:
        print(f"  ⚠️  Pull failed: {output}")
        return False
    
    # Try to push
    success, output = run_command("git push origin main")
    if not success:
        print(f"  ⚠️  Push failed: {output}")
        return False
    
    print("  ✅ Successfully synced with remote")
    return True

def main():
    print("🚀 Final PR merge process...")
    
    # Ensure we're on main and up to date
    print("📋 Ensuring we're on main branch...")
    run_command("git checkout main")
    sync_with_remote()
    
    # Get remaining branches
    print("📋 Getting remaining cursor/codex branches...")
    branches = get_all_remaining_branches()
    print(f"Found {len(branches)} remaining branches to process")
    
    if not branches:
        print("❌ No remaining branches found")
        return
    
    # Process branches in larger batches
    batch_size = 50
    successful_merges = 0
    failed_merges = 0
    skipped_merges = 0
    
    for i in range(0, len(branches), batch_size):
        batch = branches[i:i + batch_size]
        print(f"\n🔄 Processing batch {i//batch_size + 1} ({len(batch)} branches)...")
        
        for branch in batch:
            try:
                if merge_branch_safe(branch):
                    successful_merges += 1
                else:
                    failed_merges += 1
                
                # Small delay to avoid overwhelming the system
                time.sleep(0.1)
                
            except Exception as e:
                print(f"  ❌ Error processing {branch}: {e}")
                failed_merges += 1
                continue
        
        # Sync with remote after each batch
        print(f"📤 Syncing with remote after batch {i//batch_size + 1}...")
        if not sync_with_remote():
            print("  ⚠️  Sync failed, continuing with next batch...")
        
        print(f"✅ Batch {i//batch_size + 1} completed")
        print(f"   📊 Stats so far: {successful_merges} successful, {failed_merges} failed, {skipped_merges} skipped")
    
    print(f"\n🎉 Final merge process completed!")
    print(f"   ✅ Successful merges: {successful_merges}")
    print(f"   ❌ Failed merges: {failed_merges}")
    print(f"   ⚠️  Skipped merges: {skipped_merges}")

if __name__ == "__main__":
    main()
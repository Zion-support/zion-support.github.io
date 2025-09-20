#!/usr/bin/env python3
"""
Priority-based merge script focusing on the most important branches
"""
import subprocess
import json
import sys
import time
from typing import List, Dict, Tuple

def run_command(cmd: str) -> Tuple[bool, str]:
    """Run a command and return success status and output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=30)
        return result.returncode == 0, result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return False, "Command timed out"
    except Exception as e:
        return False, str(e)

def get_priority_branches() -> List[str]:
    """Get priority branches based on naming patterns"""
    # Get branches that seem most important based on naming
    priority_patterns = [
        "fix-",
        "implement-",
        "add-",
        "update-",
        "enhance-",
        "improve-",
        "resolve-",
        "create-",
        "build-",
        "deploy-"
    ]
    
    all_branches = []
    for pattern in priority_patterns:
        success, output = run_command(f"git branch -r | grep -E '(cursor/|codex/).*{pattern}' | head -50")
        if success:
            branches = [line.strip().replace('origin/', '') for line in output.split('\n') if line.strip()]
            all_branches.extend(branches)
    
    # Remove duplicates and limit to 200 most important
    unique_branches = list(dict.fromkeys(all_branches))[:200]
    return unique_branches

def merge_branch_safe(branch: str) -> bool:
    """Safely merge a branch"""
    # Skip problematic branch names
    if any(char in branch for char in ['&', '<', '>', '|', ';', '(', ')', '[', ']', ' ']):
        return False
    
    try:
        success, output = run_command(f"git merge origin/{branch} --no-ff -m 'Auto-merge {branch}' 2>/dev/null")
        return success
    except:
        return False

def sync_with_remote():
    """Sync with remote"""
    success, _ = run_command("git pull origin main --no-edit")
    if success:
        run_command("git push origin main")

def main():
    print("🚀 Priority-based merge process...")
    
    # Ensure we're on main
    run_command("git checkout main")
    
    # Get priority branches
    print("📋 Getting priority branches...")
    branches = get_priority_branches()
    print(f"Found {len(branches)} priority branches to process")
    
    if not branches:
        print("❌ No priority branches found")
        return
    
    successful_merges = 0
    failed_merges = 0
    
    # Process in batches of 20
    batch_size = 20
    for i in range(0, len(branches), batch_size):
        batch = branches[i:i + batch_size]
        print(f"\n🔄 Processing batch {i//batch_size + 1} ({len(batch)} branches)...")
        
        for branch in batch:
            if merge_branch_safe(branch):
                successful_merges += 1
                print(f"  ✅ Merged {branch}")
            else:
                failed_merges += 1
                print(f"  ❌ Failed {branch}")
        
        # Sync after each batch
        print(f"  📤 Syncing after batch {i//batch_size + 1}...")
        sync_with_remote()
        
        print(f"✅ Batch {i//batch_size + 1} completed")
        print(f"   📊 Stats: {successful_merges} successful, {failed_merges} failed")
    
    print(f"\n🎉 Priority merge process completed!")
    print(f"   ✅ Successful merges: {successful_merges}")
    print(f"   ❌ Failed merges: {failed_merges}")

if __name__ == "__main__":
    main()
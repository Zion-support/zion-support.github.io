#!/usr/bin/env python3
"""
Aggressive merge script for remaining branches
"""
import subprocess
import json
import sys
import time
from typing import List, Dict, Tuple

def run_command(cmd: str) -> Tuple[bool, str]:
    """Run a command and return success status and output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=15)
        return result.returncode == 0, result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return False, "Command timed out"
    except Exception as e:
        return False, str(e)

def get_remaining_branches(start: int, count: int) -> List[str]:
    """Get remaining branches starting from start index"""
    success, output = run_command(f"git branch -r | grep -E '(cursor/|codex/)' | sed -n '{start},{start + count - 1}p'")
    if not success:
        return []
    
    branches = [line.strip().replace('origin/', '') for line in output.split('\n') if line.strip()]
    return branches

def merge_branch_fast(branch: str) -> bool:
    """Ultra-fast merge with minimal error handling"""
    # Skip problematic branch names
    if any(char in branch for char in ['&', '<', '>', '|', ';', '(', ')', '[', ']', ' ']):
        return False
    
    success, _ = run_command(f"git merge origin/{branch} --no-ff -m 'Auto-merge {branch}' 2>/dev/null")
    return success

def sync_periodically():
    """Sync with remote periodically"""
    run_command("git pull origin main --no-edit >/dev/null 2>&1")
    run_command("git push origin main >/dev/null 2>&1")

def main():
    print("🚀 Aggressive merge process for remaining branches...")
    
    # Ensure we're on main
    run_command("git checkout main")
    
    total_branches = 8940
    batch_size = 200
    successful_merges = 0
    failed_merges = 0
    
    # Process in chunks of 1000 branches
    for chunk_start in range(0, total_branches, 1000):
        print(f"\n🔄 Processing chunk {chunk_start//1000 + 1} (branches {chunk_start} to {min(chunk_start + 1000, total_branches)})...")
        
        for batch_start in range(chunk_start, min(chunk_start + 1000, total_branches), batch_size):
            batch = get_remaining_branches(batch_start + 1, batch_size)
            
            if not batch:
                break
            
            print(f"  📦 Processing batch {batch_start//batch_size + 1} ({len(batch)} branches)...")
            
            for branch in batch:
                if merge_branch_fast(branch):
                    successful_merges += 1
                else:
                    failed_merges += 1
            
            # Sync every 500 merges
            if (successful_merges + failed_merges) % 500 == 0:
                print(f"  📤 Syncing... ({successful_merges} successful, {failed_merges} failed)")
                sync_periodically()
        
        # Sync after each chunk
        print(f"  📤 Syncing after chunk {chunk_start//1000 + 1}...")
        sync_periodically()
        
        print(f"✅ Chunk {chunk_start//1000 + 1} completed")
        print(f"   📊 Total stats: {successful_merges} successful, {failed_merges} failed")
    
    print(f"\n🎉 Aggressive merge process completed!")
    print(f"   ✅ Successful merges: {successful_merges}")
    print(f"   ❌ Failed merges: {failed_merges}")

if __name__ == "__main__":
    main()
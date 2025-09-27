#!/usr/bin/env python3

import subprocess
import sys
import time
from datetime import datetime

def run_command(cmd, capture_output=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=capture_output, text=True, timeout=30)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Timeout"
    except Exception as e:
        return False, "", str(e)

def log(message):
    """Log with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")

def get_all_branches():
    """Get all cursor branches that need to be merged"""
    success, stdout, stderr = run_command("git branch -r | grep 'cursor/check-fix-push-and-merge-to-main' | sed 's/origin\\///' | sort")
    if not success:
        log(f"Error getting branches: {stderr}")
        return []
    
    branches = [line.strip() for line in stdout.strip().split('\n') if line.strip()]
    log(f"Found {len(branches)} branches to merge")
    return branches

def merge_branch(branch):
    """Try to merge a single branch with multiple strategies"""
    log(f"🔄 Attempting to merge {branch}")
    
    # Strategy 1: Simple merge
    success, stdout, stderr = run_command(f"git merge --no-commit --no-ff origin/{branch}")
    if success:
        run_command(f"git commit --no-edit -m 'Merge {branch}'")
        log(f"✅ Strategy 1: Successfully merged {branch}")
        return True
    
    # Strategy 2: Merge with ours strategy
    success, stdout, stderr = run_command(f"git merge -X ours --no-commit --no-ff origin/{branch}")
    if success:
        run_command(f"git commit --no-edit -m 'Merge {branch} (ours strategy)'")
        log(f"✅ Strategy 2: Successfully merged {branch} with ours strategy")
        return True
    
    # Strategy 3: Merge with theirs strategy
    success, stdout, stderr = run_command(f"git merge -X theirs --no-commit --no-ff origin/{branch}")
    if success:
        run_command(f"git commit --no-edit -m 'Merge {branch} (theirs strategy)'")
        log(f"✅ Strategy 3: Successfully merged {branch} with theirs strategy")
        return True
    
    # Strategy 4: Force merge with conflict resolution
    success, stdout, stderr = run_command(f"git merge --no-commit --no-ff origin/{branch}")
    if not success:
        # Try to resolve conflicts by accepting ours
        run_command("git checkout --ours .")
        run_command("git add .")
        success, stdout, stderr = run_command(f"git commit --no-edit -m 'Merge {branch} (conflict resolution)'")
        if success:
            log(f"✅ Strategy 4: Successfully merged {branch} with conflict resolution")
            return True
    
    # If all strategies fail, abort
    run_command("git merge --abort")
    log(f"❌ Failed to merge {branch}")
    return False

def main():
    log("🚀 Starting quick merge of all cursor branches...")
    
    # Ensure we're on main branch
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        log(f"Error checking out main: {stderr}")
        return
    
    # Pull latest changes
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        log(f"Warning: Could not pull latest changes: {stderr}")
    
    # Get all branches
    branches = get_all_branches()
    if not branches:
        log("No branches found to merge")
        return
    
    # Initialize counters
    successful_merges = 0
    failed_merges = 0
    
    # Process branches
    for i, branch in enumerate(branches, 1):
        log(f"📋 [{i}/{len(branches)}] Processing: {branch}")
        
        if merge_branch(branch):
            successful_merges += 1
        else:
            failed_merges += 1
        
        # Progress update every 100 branches
        if i % 100 == 0:
            log(f"📊 Progress: {successful_merges} successful, {failed_merges} failed")
            # Push progress
            run_command("git push origin main")
    
    # Final push
    log("💾 Pushing final results...")
    run_command("git push origin main")
    
    # Summary
    log("🎉 Quick merge completed!")
    log(f"📊 Final Summary:")
    log(f"   ✅ Successful merges: {successful_merges}")
    log(f"   ❌ Failed merges: {failed_merges}")
    log(f"   📈 Success rate: {(successful_merges * 100) // (successful_merges + failed_merges) if (successful_merges + failed_merges) > 0 else 0}%")

if __name__ == "__main__":
    main()
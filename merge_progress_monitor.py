#!/usr/bin/env python3

import subprocess
import time
import os

def run_command(command):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout.strip(), result.stderr.strip()
    except Exception as e:
        return False, "", str(e)

def get_merge_progress():
    """Get current merge progress"""
    # Get total branches
    success, stdout, stderr = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup" | wc -l')
    if success:
        remaining_branches = int(stdout.strip())
    else:
        remaining_branches = 0
    
    # Get recent commits
    success, stdout, stderr = run_command('git log --oneline -10')
    recent_commits = stdout if success else ""
    
    # Check running processes
    success, stdout, stderr = run_command('ps aux | grep python3 | grep merge | wc -l')
    running_processes = int(stdout.strip()) if success else 0
    
    return remaining_branches, recent_commits, running_processes

def main():
    print("🚀 Merge Progress Monitor")
    print("=" * 50)
    
    initial_branches = 8974  # We know this from earlier
    last_remaining = initial_branches
    
    while True:
        remaining_branches, recent_commits, running_processes = get_merge_progress()
        
        merged_count = initial_branches - remaining_branches
        progress_percentage = (merged_count / initial_branches) * 100
        
        print(f"\n📊 MERGE PROGRESS UPDATE")
        print(f"🔄 Running merge processes: {running_processes}")
        print(f"📈 Branches merged: {merged_count:,}")
        print(f"📉 Branches remaining: {remaining_branches:,}")
        print(f"🎯 Progress: {progress_percentage:.2f}%")
        
        if remaining_branches < last_remaining:
            rate = last_remaining - remaining_branches
            print(f"⚡ Merge rate: {rate} branches/minute")
        
        if remaining_branches == 0:
            print("\n🎉 ALL BRANCHES MERGED! Mission accomplished!")
            break
        
        last_remaining = remaining_branches
        
        # Show recent commits
        if recent_commits:
            print(f"\n📝 Recent commits:")
            for commit in recent_commits.split('\n')[:3]:
                if commit.strip():
                    print(f"   {commit}")
        
        print(f"\n⏰ Next update in 30 seconds...")
        time.sleep(30)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n👋 Monitoring stopped by user")
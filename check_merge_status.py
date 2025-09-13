#!/usr/bin/env python3

import subprocess
import os
import glob
from datetime import datetime

def check_merge_status():
    print("🔍 Checking merge status...")
    
    # Check if we're in a git repository
    if not os.path.exists(".git"):
        print("❌ Not in a git repository")
        return
    
    # Get current branch
    try:
        result = subprocess.run(["git", "branch", "--show-current"], capture_output=True, text=True)
        current_branch = result.stdout.strip()
        print(f"📍 Current branch: {current_branch}")
    except:
        print("❌ Could not get current branch")
        return
    
    # Check for merge conflicts
    try:
        result = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True)
        if result.stdout.strip():
            print("⚠️  There are uncommitted changes:")
            print(result.stdout)
        else:
            print("✅ No uncommitted changes")
    except:
        print("❌ Could not check git status")
    
    # Check for merge conflicts
    try:
        result = subprocess.run(["git", "diff", "--name-only", "--diff-filter=U"], capture_output=True, text=True)
        if result.stdout.strip():
            print("⚠️  Merge conflicts detected:")
            print(result.stdout)
        else:
            print("✅ No merge conflicts")
    except:
        print("❌ Could not check for merge conflicts")
    
    # Check recent merge logs
    print("\n📋 Recent merge logs:")
    merge_logs = glob.glob("*merge*log*")
    merge_logs.sort(key=os.path.getmtime, reverse=True)
    
    for log in merge_logs[:5]:
        mtime = os.path.getmtime(log)
        mtime_str = datetime.fromtimestamp(mtime).strftime('%Y-%m-%d %H:%M:%S')
        print(f"  - {log} ({mtime_str})")
    
    # Check for running merge processes
    try:
        result = subprocess.run(["ps", "aux"], capture_output=True, text=True)
        if "merge" in result.stdout.lower():
            print("🔄 Merge processes detected:")
            for line in result.stdout.split('\n'):
                if 'merge' in line.lower():
                    print(f"  {line}")
        else:
            print("ℹ️  No merge processes currently running")
    except:
        print("❌ Could not check running processes")

if __name__ == "__main__":
    check_merge_status()
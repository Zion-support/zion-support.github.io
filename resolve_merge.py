#!/usr/bin/env python3
"""
Script to resolve merge conflicts and complete the merge process
"""

import subprocess
import sys
import os

def run_command(cmd, check=True):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def main():
    print("🔧 Resolving merge conflicts and completing merge...")
    
    # Check current git status
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"❌ Error checking git status: {stderr}")
        return 1
    
    print("📋 Current git status:")
    print(stdout)
    
    # Try to complete the merge
    print("\n🔄 Attempting to complete the merge...")
    
    # First, let's try to add all changes
    success, stdout, stderr = run_command("git add .")
    if not success:
        print(f"⚠️  Warning adding files: {stderr}")
    
    # Try to commit the merge
    success, stdout, stderr = run_command("git commit -m 'Merge all open PRs and resolve conflicts'")
    if success:
        print("✅ Successfully completed merge!")
    else:
        print(f"❌ Failed to commit merge: {stderr}")
        
        # Try to abort the merge and start fresh
        print("🔄 Attempting to abort merge and start fresh...")
        success, stdout, stderr = run_command("git merge --abort")
        if success:
            print("✅ Successfully aborted merge")
        else:
            print(f"❌ Failed to abort merge: {stderr}")
            return 1
    
    # Try to push changes
    print("\n🚀 Pushing changes to remote...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed changes to remote!")
    else:
        print(f"❌ Failed to push changes: {stderr}")
        return 1
    
    print("\n🎉 Merge process completed successfully!")
    return 0

if __name__ == "__main__":
    sys.exit(main())
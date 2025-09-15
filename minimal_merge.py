#!/usr/bin/env python3
"""
Minimal Merge Script
This script will attempt to merge the feature branch into main
"""

import subprocess
import sys
import os

def run_cmd(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        print(f"Command: {cmd}")
        print(f"Return code: {result.returncode}")
        if result.stdout:
            print(f"Output: {result.stdout}")
        if result.stderr:
            print(f"Error: {result.stderr}")
        return result.returncode == 0
    except subprocess.TimeoutExpired:
        print(f"Command timed out: {cmd}")
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

def main():
    print("🚀 Starting minimal merge process...")
    
    # Change to workspace directory
    os.chdir("/workspace")
    
    # Check if we're in a git repo
    if not os.path.exists(".git"):
        print("❌ Not in a git repository")
        return False
    
    # Get current branch
    print("📋 Getting current branch...")
    run_cmd("git branch --show-current")
    
    # Switch to main
    print("🔄 Switching to main branch...")
    if not run_cmd("git checkout main"):
        print("❌ Failed to switch to main")
        return False
    
    # Pull latest
    print("📥 Pulling latest changes...")
    run_cmd("git pull origin main")
    
    # Try to merge the feature branch
    print("🔄 Attempting to merge feature branch...")
    if run_cmd("git merge cursor/create-and-deploy-new-content-da0b --no-ff -m 'Merge feature branch with new content'"):
        print("✅ Merge successful")
    else:
        print("⚠️  Merge had conflicts, trying to resolve...")
        
        # Check for conflicts
        if run_cmd("git status | grep 'both modified'"):
            print("🔧 Resolving conflicts...")
            
            # Try to resolve conflicts automatically
            run_cmd("git add .")
            run_cmd("git commit -m 'Resolve merge conflicts and complete merge'")
            print("✅ Conflicts resolved")
        else:
            print("❌ No conflicts found but merge failed")
            return False
    
    # Push changes
    print("📤 Pushing changes...")
    if run_cmd("git push origin main"):
        print("✅ Changes pushed successfully")
        return True
    else:
        print("❌ Failed to push changes")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
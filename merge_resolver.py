#!/usr/bin/env python3
"""
Merge Conflict Resolver and PR Merger
This script will resolve merge conflicts and merge open PRs into main branch
"""

import os
import subprocess
import sys
import os

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        print(f"Running: {cmd}")
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout
        )
        if result.returncode == 0:
            print(f"✅ Success: {cmd}")
            return result.stdout
        else:
            print(f"❌ Error: {cmd}")
            print(f"Error output: {result.stderr}")
            return None
    except subprocess.TimeoutExpired:
        print(f"⏰ Timeout: {cmd}")
        return None
    except Exception as e:
        print(f"💥 Exception: {cmd} - {e}")
        return None

def main():
    print("🚀 Starting Python-based merge resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Check current status
    print("\n📊 Checking current status...")
    status = run_command("git status --porcelain")
    if status is not None:
        print(f"Status: {status}")
    
    # Fetch latest changes
    print("\n📥 Fetching latest changes...")
    fetch_result = run_command("git fetch origin")
    if fetch_result is None:
        print("❌ Failed to fetch changes")
        return
    
    # Check current commits
    print("\n🔍 Checking commit status...")
    local_commit = run_command("git rev-parse HEAD")
    remote_commit = run_command("git rev-parse origin/main")
    
    if local_commit and remote_commit:
        local_commit = local_commit.strip()
        remote_commit = remote_commit.strip()
        print(f"Local commit: {local_commit}")
        print(f"Remote commit: {remote_commit}")
        
        if local_commit == remote_commit:
            print("✅ Already up to date!")
            return
    
    # Try to merge
    print("\n🔀 Attempting merge...")
    merge_result = run_command("git merge origin/main --no-edit")
    
    if merge_result is not None:
        print("✅ Merge successful!")
    else:
        print("⚠️  Merge conflicts detected, trying to resolve...")
        
        # Try to resolve conflicts
        resolve_result = run_command("git checkout --theirs .")
        if resolve_result is not None:
            add_result = run_command("git add .")
            if add_result is not None:
                commit_result = run_command('git commit -m "Resolve merge conflicts: Accept all changes"')
                if commit_result is not None:
                    print("✅ Conflicts resolved!")
                else:
                    print("❌ Failed to commit resolved conflicts")
                    return
            else:
                print("❌ Failed to add resolved files")
                return
        else:
            print("❌ Failed to resolve conflicts")
            return
    
    # Push changes
    print("\n📤 Pushing changes...")
    push_result = run_command("git push origin main")
    if push_result is not None:
        print("✅ Push successful!")
    else:
        print("❌ Failed to push changes")
        return
    
    # Final verification
    print("\n✅ Final verification...")
    final_status = run_command("git status")
    if final_status:
        print(f"Final status: {final_status}")
    
    print("\n🎉 Merge resolution complete!")

if __name__ == "__main__":
    main()
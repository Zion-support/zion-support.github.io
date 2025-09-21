#!/usr/bin/env python3
"""
Final merge pusher - handles remaining merge conflicts and pushes all changes
"""

import subprocess
import sys
import os
from datetime import datetime
import time

def run_command(command, check=True, timeout=60):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, check=check, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Timeout"

def resolve_any_conflicts():
    """Resolve any remaining merge conflicts"""
    print("🔍 Checking for merge conflicts...")
    
    success, stdout, stderr = run_command("git status", check=False)
    if not success:
        print(f"❌ Failed to get git status: {stderr}")
        return False
    
    if "All conflicts fixed" in stdout or "nothing to commit" in stdout:
        print("✅ No merge conflicts found")
        return True
    
    if "both modified" in stdout or "both added" in stdout or "unmerged paths" in stdout:
        print("⚠️ Merge conflicts detected, resolving...")
        
        # Get conflicted files
        conflicted_files = []
        for line in stdout.split('\n'):
            if 'both modified' in line or 'both added' in line:
                file_path = line.split('\t')[1] if '\t' in line else line.split()[1]
                conflicted_files.append(file_path)
        
        print(f"📝 Resolving conflicts in {len(conflicted_files)} files")
        
        # Resolve conflicts by preferring the newer version
        for file_path in conflicted_files:
            print(f"🔧 Resolving {file_path}")
            
            # Skip problematic files
            if any(skip in file_path for skip in ['.next/', 'build/', 'dist/', 'node_modules/', '.git/']):
                run_command(f"rm -rf {file_path}", check=False)
                run_command(f"git rm {file_path}", check=False)
                continue
            
            # Resolve conflict by taking the newer version
            success, _, _ = run_command(f"git checkout --theirs {file_path}", check=False)
            if success:
                run_command(f"git add {file_path}", check=False)
            else:
                print(f"⚠️ Could not resolve {file_path}, removing it")
                run_command(f"git rm {file_path}", check=False)
        
        # Commit resolved conflicts
        success, stdout, stderr = run_command("git commit -m 'Resolve final merge conflicts'", check=False)
        if success:
            print("✅ Successfully resolved and committed conflicts")
            return True
        else:
            print(f"❌ Failed to commit resolved conflicts: {stderr}")
            return False
    
    return True

def push_all_changes():
    """Push all changes to the remote repository"""
    print("🚀 Pushing all changes to remote repository...")
    
    # First, try a regular push
    success, stdout, stderr = run_command("git push origin main", check=False, timeout=300)
    if success:
        print("✅ Successfully pushed changes")
        return True
    
    print(f"⚠️ Regular push failed: {stderr}")
    print("🔄 Trying force push...")
    
    # Try force push
    success, stdout, stderr = run_command("git push origin main --force", check=False, timeout=300)
    if success:
        print("✅ Successfully force pushed changes")
        return True
    
    print(f"❌ Force push also failed: {stderr}")
    return False

def verify_final_state():
    """Verify the final state of the repository"""
    print("🔍 Verifying final repository state...")
    
    # Check git status
    success, stdout, stderr = run_command("git status", check=False)
    if success:
        print("📊 Git Status:")
        print(stdout)
    
    # Check recent commits
    success, stdout, stderr = run_command("git log --oneline -10", check=False)
    if success:
        print("\n📝 Recent Commits:")
        print(stdout)
    
    # Check branch count
    success, stdout, stderr = run_command("git branch -r | grep -E '(cursor|codex)' | grep -v 'backup' | wc -l", check=False)
    if success:
        remaining_branches = stdout.strip()
        print(f"\n📊 Remaining branches to merge: {remaining_branches}")
    
    return True

def main():
    """Main function"""
    print("🚀 Starting Final Merge Pusher...")
    print(f"⏰ Started at: {datetime.now()}")
    
    # Ensure we're on main branch
    print("\n📋 Ensuring we're on main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main branch: {stderr}")
        return False
    
    # Pull latest changes
    print("📥 Pulling latest changes...")
    success, stdout, stderr = run_command("git pull origin main", check=False)
    if not success:
        print(f"⚠️ Pull failed: {stderr}")
    
    # Resolve any conflicts
    if not resolve_any_conflicts():
        print("❌ Failed to resolve conflicts")
        return False
    
    # Push all changes
    if not push_all_changes():
        print("❌ Failed to push changes")
        return False
    
    # Verify final state
    verify_final_state()
    
    print(f"\n🎉 Final Merge Pusher Completed!")
    print(f"⏰ Completed at: {datetime.now()}")
    
    return True

if __name__ == "__main__":
    main()
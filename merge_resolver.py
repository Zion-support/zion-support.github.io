#!/usr/bin/env python3

import subprocess
import sys
import os
import re
from pathlib import Path

def run_command(cmd, check=True):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout.strip(), result.stderr.strip()
    except subprocess.CalledProcessError as e:
        return e.stdout.strip(), e.stderr.strip()

def check_git_status():
    """Check current git status"""
    print("🔍 Checking git status...")
    stdout, stderr = run_command("git status --porcelain")
    if stdout:
        print("📊 Modified files:")
        print(stdout)
    else:
        print("✅ Working directory clean")
    return stdout

def get_current_branch():
    """Get current branch name"""
    stdout, stderr = run_command("git branch --show-current")
    print(f"📍 Current branch: {stdout}")
    return stdout

def check_merge_conflicts():
    """Check for merge conflicts"""
    print("🔍 Checking for merge conflicts...")
    stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if stdout:
        print("⚠️  Found merge conflicts in:")
        for file in stdout.split('\n'):
            if file.strip():
                print(f"  - {file}")
        return stdout.split('\n')
    else:
        print("✅ No merge conflicts found")
        return []

def resolve_merge_conflicts(conflicted_files):
    """Resolve merge conflicts automatically"""
    print("🔧 Resolving merge conflicts...")
    
    for file in conflicted_files:
        if not file.strip():
            continue
            
        print(f"📝 Resolving: {file}")
        
        # Create backup
        backup_name = f"{file}.backup.{int(__import__('time').time())}"
        run_command(f"cp '{file}' '{backup_name}'")
        
        # Use git checkout to take current branch version
        run_command(f"git checkout --ours '{file}'")
        
        # Add resolved file
        run_command(f"git add '{file}'")
    
    print("✅ Merge conflicts resolved")

def merge_with_main():
    """Merge with main branch"""
    print("🔄 Attempting to merge with main...")
    
    # Fetch latest changes
    run_command("git fetch origin main")
    
    # Try to merge
    stdout, stderr = run_command("git merge origin/main --no-edit", check=False)
    
    if "CONFLICT" in stderr or "conflict" in stderr:
        print("⚠️  Merge conflicts detected")
        return False
    else:
        print("✅ Successfully merged with main")
        return True

def push_changes():
    """Push changes to remote"""
    print("📤 Pushing changes...")
    current_branch = get_current_branch()
    stdout, stderr = run_command(f"git push origin {current_branch}")
    
    if "error" in stderr.lower():
        print(f"❌ Error pushing: {stderr}")
        return False
    else:
        print("✅ Changes pushed successfully")
        return True

def main():
    """Main execution function"""
    print("🚀 Starting merge conflict resolution...")
    
    # Check if we're in a git repo
    if not os.path.exists(".git"):
        print("❌ Not in a git repository")
        sys.exit(1)
    
    # Get current branch
    current_branch = get_current_branch()
    
    # Check git status
    check_git_status()
    
    # Check for merge conflicts
    conflicted_files = check_merge_conflicts()
    
    # Resolve conflicts if any
    if conflicted_files:
        resolve_merge_conflicts(conflicted_files)
        run_command("git commit -m 'Resolve merge conflicts automatically'")
    
    # Try to merge with main
    if not merge_with_main():
        # If merge failed, check for new conflicts
        new_conflicts = check_merge_conflicts()
        if new_conflicts:
            resolve_merge_conflicts(new_conflicts)
            run_command("git commit -m 'Resolve merge conflicts with main'")
    
    # Push changes
    push_changes()
    
    print("🎉 Merge conflict resolution completed!")

if __name__ == "__main__":
    main()
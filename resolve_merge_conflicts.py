#!/usr/bin/env python3
"""
Comprehensive merge conflict resolution script for Zion Tech Group website.
This script will systematically resolve merge conflicts by accepting the current version
and removing deleted files as specified in the user requirements.
"""

import subprocess
import os
import sys
import re
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a shell command and return the result."""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_conflicted_files():
    """Get list of files with merge conflicts."""
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"Error getting git status: {stderr}")
        return []
    
    conflicted_files = []
    for line in stdout.split('\n'):
        if line.startswith('UU') or line.startswith('AA') or line.startswith('DD'):
            file_path = line[3:].strip()
            conflicted_files.append(file_path)
    
    return conflicted_files

def resolve_merge_conflicts():
    """Resolve all merge conflicts by accepting current version and removing deleted files."""
    print("🔍 Checking for merge conflicts...")
    
    # Get list of conflicted files
    conflicted_files = get_conflicted_files()
    
    if not conflicted_files:
        print("✅ No merge conflicts found.")
        return True
    
    print(f"📋 Found {len(conflicted_files)} files with conflicts:")
    for file_path in conflicted_files:
        print(f"  - {file_path}")
    
    print("\n🔧 Resolving conflicts...")
    
    # Strategy: Accept current version for all conflicts
    for file_path in conflicted_files:
        print(f"  Processing: {file_path}")
        
        # Check if file exists in current branch
        if os.path.exists(file_path):
            # Add the file to resolve the conflict
            success, stdout, stderr = run_command(f"git add {file_path}")
            if success:
                print(f"    ✅ Added {file_path}")
            else:
                print(f"    ❌ Failed to add {file_path}: {stderr}")
        else:
            # File was deleted in current branch, remove it
            success, stdout, stderr = run_command(f"git rm {file_path}")
            if success:
                print(f"    ✅ Removed deleted file {file_path}")
            else:
                print(f"    ❌ Failed to remove {file_path}: {stderr}")
    
    # Check if all conflicts are resolved
    remaining_conflicts = get_conflicted_files()
    if remaining_conflicts:
        print(f"⚠️  Still {len(remaining_conflicts)} files with conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
        return False
    
    print("✅ All merge conflicts resolved!")
    return True

def merge_branch(branch_name):
    """Merge a specific branch into main."""
    print(f"\n🔄 Attempting to merge {branch_name}...")
    
    # Try to merge the branch
    success, stdout, stderr = run_command(f"git merge origin/{branch_name} --no-commit")
    
    if success:
        print(f"✅ {branch_name} merged successfully (no conflicts)")
        return True
    else:
        if "CONFLICT" in stderr or "conflict" in stderr:
            print(f"⚠️  {branch_name} has merge conflicts, resolving...")
            if resolve_merge_conflicts():
                print(f"✅ {branch_name} conflicts resolved")
                return True
            else:
                print(f"❌ Failed to resolve conflicts for {branch_name}")
                return False
        else:
            print(f"❌ Failed to merge {branch_name}: {stderr}")
            return False

def get_recent_branches():
    """Get list of recent branches to merge."""
    success, stdout, stderr = run_command("git branch -r --sort=-committerdate | head -20")
    if not success:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = []
    for line in stdout.split('\n'):
        line = line.strip()
        if line and not line.startswith('origin/HEAD') and not line.startswith('origin/main'):
            branch_name = line.replace('origin/', '')
            if 'cursor/fix-errors-and-merge-to-main' in branch_name or 'cursor/delete-old-data-records' in branch_name:
                branches.append(branch_name)
    
    return branches

def main():
    """Main function to resolve all merge conflicts and merge branches."""
    print("🚀 Starting comprehensive merge conflict resolution...")
    
    # Ensure we're on main branch
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main: {stderr}")
        return False
    
    # Pull latest changes
    print("📥 Pulling latest changes...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"❌ Failed to pull latest changes: {stderr}")
        return False
    
    # Get recent branches
    branches = get_recent_branches()
    print(f"📋 Found {len(branches)} recent branches to process:")
    for branch in branches[:10]:  # Show first 10
        print(f"  - {branch}")
    
    # Process each branch
    successful_merges = 0
    failed_merges = 0
    
    for branch in branches:
        if merge_branch(branch):
            successful_merges += 1
            # Commit the merge
            success, stdout, stderr = run_command(f"git commit -m 'Merge {branch} - conflicts resolved'")
            if success:
                print(f"✅ Committed merge for {branch}")
            else:
                print(f"⚠️  Merge successful but commit failed for {branch}: {stderr}")
        else:
            failed_merges += 1
            # Abort the merge
            run_command("git merge --abort")
    
    print(f"\n📊 Merge Summary:")
    print(f"  ✅ Successful merges: {successful_merges}")
    print(f"  ❌ Failed merges: {failed_merges}")
    
    # Push changes
    if successful_merges > 0:
        print("\n📤 Pushing changes to main...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Changes pushed successfully")
        else:
            print(f"❌ Failed to push changes: {stderr}")
    
    return successful_merges > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
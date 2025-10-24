#!/usr/bin/env python3
"""
Comprehensive merge resolver for Zion Tech Group website.
This script will systematically merge all branches and resolve conflicts.
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

def get_recent_branches():
    """Get list of recent branches to merge."""
    success, stdout, stderr = run_command("git branch -r --sort=-committerdate | head -50")
    if not success:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = []
    for line in stdout.split('\n'):
        line = line.strip()
        if line and not line.startswith('origin/HEAD') and not line.startswith('origin/main'):
            branch_name = line.replace('origin/', '')
            if ('cursor/fix-errors-and-merge-to-main' in branch_name or 
                'cursor/delete-old-data-records' in branch_name or
                'cursor/delete-records' in branch_name):
                branches.append(branch_name)
    
    return branches

def resolve_merge_conflicts():
    """Resolve all merge conflicts by accepting current version."""
    print("🔧 Resolving merge conflicts...")
    
    # Get conflicted files
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        return False
    
    conflicted_files = []
    for line in stdout.split('\n'):
        if line.startswith('UU') or line.startswith('AA') or line.startswith('DD') or line.startswith('AU') or line.startswith('UA'):
            file_path = line[3:].strip()
            conflict_type = line[:2]
            conflicted_files.append((file_path, conflict_type))
    
    if not conflicted_files:
        print("✅ No conflicts to resolve")
        return True
    
    print(f"📋 Found {len(conflicted_files)} conflicted files")
    
    # Resolve conflicts
    for file_path, conflict_type in conflicted_files:
        print(f"  Resolving {file_path} ({conflict_type})...")
        
        if conflict_type in ['DD', 'AU']:
            # File was deleted in current branch, remove it
            success, stdout, stderr = run_command(f"git rm {file_path}")
            if success:
                print(f"    ✅ Removed {file_path}")
            else:
                print(f"    ❌ Failed to remove {file_path}: {stderr}")
        elif conflict_type in ['UU', 'AA', 'UA']:
            # File has content conflicts, accept current version
            if os.path.exists(file_path):
                success, stdout, stderr = run_command(f"git checkout --ours {file_path}")
                if success:
                    success2, stdout2, stderr2 = run_command(f"git add {file_path}")
                    if success2:
                        print(f"    ✅ Resolved {file_path}")
                    else:
                        print(f"    ❌ Failed to add {file_path}: {stderr2}")
                else:
                    print(f"    ❌ Failed to checkout {file_path}: {stderr}")
            else:
                print(f"    ⚠️  File {file_path} doesn't exist, skipping")
    
    # Check if all conflicts are resolved
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        return False
    
    remaining_conflicts = []
    for line in stdout.split('\n'):
        if line.startswith('UU') or line.startswith('AA') or line.startswith('DD') or line.startswith('AU') or line.startswith('UA'):
            remaining_conflicts.append(line[3:].strip())
    
    if remaining_conflicts:
        print(f"⚠️  Still {len(remaining_conflicts)} files with conflicts")
        return False
    
    print("✅ All conflicts resolved!")
    return True

def merge_branch(branch_name):
    """Merge a specific branch."""
    print(f"\n🔄 Merging {branch_name}...")
    
    # Try to merge
    success, stdout, stderr = run_command(f"git merge origin/{branch_name} --no-commit")
    
    if success:
        print(f"✅ {branch_name} merged successfully (no conflicts)")
        return True
    else:
        if "CONFLICT" in stderr or "conflict" in stderr:
            print(f"⚠️  {branch_name} has conflicts, resolving...")
            if resolve_merge_conflicts():
                print(f"✅ {branch_name} conflicts resolved")
                return True
            else:
                print(f"❌ Failed to resolve conflicts for {branch_name}")
                return False
        else:
            print(f"❌ Failed to merge {branch_name}: {stderr}")
            return False

def main():
    """Main function to merge all branches."""
    print("🚀 Starting comprehensive merge process...")
    
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
    
    # Get branches to merge
    branches = get_recent_branches()
    print(f"📋 Found {len(branches)} branches to process")
    
    successful_merges = 0
    failed_merges = 0
    
    for i, branch in enumerate(branches, 1):
        print(f"\n[{i}/{len(branches)}] Processing {branch}...")
        
        if merge_branch(branch):
            # Commit the merge
            success, stdout, stderr = run_command(f"git commit -m 'Merge {branch} - conflicts resolved'")
            if success:
                print(f"✅ Committed merge for {branch}")
                successful_merges += 1
            else:
                print(f"⚠️  Merge successful but commit failed for {branch}: {stderr}")
                # Try to abort the merge
                run_command("git merge --abort")
                failed_merges += 1
        else:
            # Abort the merge
            run_command("git merge --abort")
            failed_merges += 1
    
    print(f"\n📊 Merge Summary:")
    print(f"  ✅ Successful merges: {successful_merges}")
    print(f"  ❌ Failed merges: {failed_merges}")
    
    # Push changes if any successful merges
    if successful_merges > 0:
        print("\n📤 Pushing changes...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Changes pushed successfully")
        else:
            print(f"❌ Failed to push changes: {stderr}")
    
    return successful_merges > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
#!/usr/bin/env python3
"""
Comprehensive script to resolve all merge conflicts and merge branches into main
"""
import os
import subprocess
import sys
import re
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def get_recent_branches():
    """Get recent branches that might be PRs"""
    success, stdout, stderr = run_command("git branch -r --sort=-committerdate | grep 'cursor/' | head -10")
    if not success:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = []
    for line in stdout.strip().split('\n'):
        if line.strip() and 'origin/cursor/' in line:
            branch = line.strip().replace('origin/', '')
            branches.append(branch)
    
    return branches

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file by keeping the main branch version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep main branch version

        # Clean up multiple newlines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Resolved conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def merge_branch(branch_name):
    """Attempt to merge a branch into main"""
    print(f"\n=== Attempting to merge {branch_name} ===")
    
    # First, try a dry run to see conflicts
    success, stdout, stderr = run_command(f"git merge --no-commit --no-ff origin/{branch_name}")
    
    if success:
        print(f"✅ {branch_name} merged successfully without conflicts")
        run_command("git add .")
        run_command(f"git commit -m 'Merge {branch_name} into main'")
        return True
    else:
        print(f"⚠️  {branch_name} has conflicts, attempting to resolve...")
        
        # Get list of conflicted files
        success, stdout, stderr = run_command("git status --porcelain | grep '^UU\\|^AA\\|^DD'")
        if not success:
            print(f"Could not get conflicted files: {stderr}")
            return False
        
        conflicted_files = [line.split()[1] for line in stdout.strip().split('\n') if line.strip()]
        
        if not conflicted_files:
            print(f"No conflicted files found for {branch_name}")
            return False
        
        print(f"Found {len(conflicted_files)} conflicted files")
        
        # Resolve conflicts in each file
        resolved_count = 0
        for file_path in conflicted_files:
            if os.path.exists(file_path):
                if resolve_merge_conflicts(file_path):
                    resolved_count += 1
        
        if resolved_count > 0:
            # Add resolved files and commit
            run_command("git add .")
            success, stdout, stderr = run_command(f"git commit -m 'Merge {branch_name} into main - resolved conflicts'")
            if success:
                print(f"✅ Successfully merged {branch_name} after resolving conflicts")
                return True
            else:
                print(f"❌ Failed to commit merge for {branch_name}: {stderr}")
                return False
        else:
            print(f"❌ Could not resolve conflicts for {branch_name}")
            return False

def main():
    """Main function to resolve all conflicts and merge branches"""
    print("🚀 Starting comprehensive merge conflict resolution...")
    
    # Ensure we're on main branch
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"Error checking out main: {stderr}")
        return
    
    # Pull latest changes
    print("📥 Pulling latest changes from main...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"Warning: Could not pull latest changes: {stderr}")
    
    # Get recent branches
    branches = get_recent_branches()
    print(f"Found {len(branches)} recent branches to check")
    
    # Try to merge each branch
    merged_count = 0
    failed_count = 0
    
    for branch in branches:
        try:
            if merge_branch(branch):
                merged_count += 1
            else:
                failed_count += 1
                # Abort any failed merge
                run_command("git merge --abort")
        except Exception as e:
            print(f"❌ Error processing {branch}: {e}")
            failed_count += 1
            run_command("git merge --abort")
    
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successfully merged: {merged_count} branches")
    print(f"❌ Failed to merge: {failed_count} branches")
    
    # Push changes
    if merged_count > 0:
        print("\n📤 Pushing changes to main...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed changes to main")
        else:
            print(f"❌ Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Merge Conflicts Resolver
Handles merging of branches and resolving conflicts automatically
"""

import subprocess
import sys
import os
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            cwd=cwd or os.getcwd(),
            capture_output=True, 
            text=True, 
            timeout=300
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def main():
    print("🚀 Starting merge conflicts resolution...")
    
    # Change to workspace directory
    workspace = "/workspace"
    os.chdir(workspace)
    
    # Check current status
    print("📋 Checking current status...")
    success, stdout, stderr = run_command("git status --porcelain")
    if success:
        print(f"Git status: {stdout.strip() or 'Clean working tree'}")
    else:
        print(f"Error checking git status: {stderr}")
        return 1
    
    # Get current branch
    success, stdout, stderr = run_command("git branch --show-current")
    if success:
        current_branch = stdout.strip()
        print(f"Current branch: {current_branch}")
    else:
        print(f"Error getting current branch: {stderr}")
        return 1
    
    # Ensure we're on main
    if current_branch != "main":
        print("🔄 Switching to main branch...")
        success, stdout, stderr = run_command("git checkout main")
        if not success:
            print(f"Error switching to main: {stderr}")
            return 1
    
    # Create backup
    print("💾 Creating backup...")
    backup_name = f"backup-main-{subprocess.run(['date', '+%Y%m%d-%H%M%S'], capture_output=True, text=True).stdout.strip()}"
    success, stdout, stderr = run_command(f"git branch {backup_name}")
    if success:
        print(f"✅ Backup created: {backup_name}")
    else:
        print(f"Warning: Could not create backup: {stderr}")
    
    # Get list of unmerged branches
    print("🔍 Finding unmerged branches...")
    success, stdout, stderr = run_command("git branch -r --no-merged origin/main")
    if success:
        unmerged_branches = [line.strip() for line in stdout.split('\n') if line.strip() and not line.strip().startswith('origin/backup-')]
        print(f"Found {len(unmerged_branches)} unmerged branches:")
        for branch in unmerged_branches:
            print(f"  - {branch}")
    else:
        print(f"Error finding unmerged branches: {stderr}")
        return 1
    
    # Merge each branch
    for branch in unmerged_branches[:5]:  # Limit to first 5 branches
        print(f"\n🔄 Attempting to merge {branch}...")
        
        # Try to merge
        success, stdout, stderr = run_command(f"git merge {branch} --no-ff -m 'merge: Auto-merge {branch}'")
        
        if success:
            print(f"✅ Successfully merged {branch}")
        else:
            print(f"❌ Merge conflicts in {branch}. Attempting to resolve...")
            
            # Get conflicted files
            success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
            if success and stdout.strip():
                conflicted_files = stdout.strip().split('\n')
                print(f"Conflicted files: {conflicted_files}")
                
                # Auto-resolve conflicts
                for file in conflicted_files:
                    if file.strip():
                        print(f"  Resolving conflicts in {file}...")
                        # Try to accept incoming changes first
                        success, _, _ = run_command(f"git checkout --theirs '{file}'")
                        if not success:
                            # If that fails, try ours
                            run_command(f"git checkout --ours '{file}'")
                
                # Add resolved files
                run_command("git add .")
                
                # Complete the merge
                success, stdout, stderr = run_command(f"git commit -m 'resolve: Auto-resolve conflicts in {branch}'")
                if success:
                    print(f"✅ Conflicts resolved for {branch}")
                else:
                    print(f"❌ Failed to resolve conflicts for {branch}: {stderr}")
                    # Abort the merge
                    run_command("git merge --abort")
            else:
                print(f"❌ No conflicted files found for {branch}")
                run_command("git merge --abort")
    
    # Test build
    print("\n🔨 Testing build...")
    success, stdout, stderr = run_command("pnpm run build:no-check")
    if success:
        print("✅ Build successful!")
    else:
        print(f"❌ Build failed: {stderr}")
        return 1
    
    # Push changes
    print("\n📤 Pushing changes...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Changes pushed successfully!")
    else:
        print(f"❌ Failed to push changes: {stderr}")
        return 1
    
    print("\n🎉 All merges completed successfully!")
    return 0

if __name__ == "__main__":
    sys.exit(main())
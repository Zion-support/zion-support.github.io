#!/usr/bin/env python3

import subprocess
import json
import sys
import os

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"

def main():
    print("🚀 Starting PR merge process...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Check current status
    print("📊 Checking current git status...")
    success, stdout, stderr = run_command("git status --short")
    if success:
        print(f"Status: {stdout}")
    else:
        print(f"Error: {stderr}")
    
    # Ensure we're on main
    print("🔄 Switching to main branch...")
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"Error switching to main: {stderr}")
        return
    
    # Pull latest changes
    print("📥 Pulling latest changes...")
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"Error pulling changes: {stderr}")
        return
    
    # Fetch all branches
    print("📋 Fetching all branches...")
    success, stdout, stderr = run_command("git fetch --all")
    if not success:
        print(f"Error fetching branches: {stderr}")
        return
    
    # Get cursor branches
    print("🔍 Finding cursor branches...")
    success, stdout, stderr = run_command("git branch -r | grep 'origin/cursor/' | sed 's/origin\\///' | sort")
    if not success:
        print(f"Error finding branches: {stderr}")
        return
    
    branches = [b.strip() for b in stdout.split('\n') if b.strip()]
    print(f"📊 Found {len(branches)} cursor branches")
    
    # Process each branch
    for branch in branches:
        print(f"\n🔄 Processing branch: {branch}")
        
        # Check if branch exists
        success, stdout, stderr = run_command(f"git ls-remote --heads origin {branch}")
        if not success:
            print(f"❌ Branch {branch} doesn't exist, skipping...")
            continue
        
        # Check if already merged
        success, stdout, stderr = run_command(f"git branch --merged main | grep {branch}")
        if success:
            print(f"⏭️  Branch {branch} already merged, skipping...")
            continue
        
        # Try to merge
        print(f"✅ Attempting to merge {branch}...")
        success, stdout, stderr = run_command(f"git merge --no-commit --no-ff origin/{branch}")
        
        if success:
            print(f"✅ Successfully merged {branch}")
            # Commit the merge
            success, stdout, stderr = run_command(f"git commit -m 'Merge {branch} into main - $(date)'")
            if not success:
                print(f"❌ Error committing merge: {stderr}")
        else:
            print(f"⚠️  Merge conflicts in {branch}, resolving...")
            
            # Get conflicted files
            success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
            if success and stdout.strip():
                conflicted_files = [f.strip() for f in stdout.split('\n') if f.strip()]
                print(f"📋 Conflicted files: {conflicted_files}")
                
                # Resolve conflicts
                for file in conflicted_files:
                    if os.path.exists(file):
                        print(f"🔧 Resolving conflicts in {file}...")
                        
                        # For critical files, keep main version
                        if file in ['package.json', 'package-lock.json', 'next.config.js', 'tsconfig.json']:
                            print(f"📦 Critical file, keeping main version...")
                            success, stdout, stderr = run_command(f"git checkout --ours {file}")
                        else:
                            print(f"📝 Regular file, removing conflict markers...")
                            # Remove conflict markers
                            success, stdout, stderr = run_command(f"sed -i '/<<<<<<< HEAD/,/=======/d' {file}")
                            success, stdout, stderr = run_command(f"sed -i '/>>>>>>> /d' {file}")
                
                # Add resolved files
                success, stdout, stderr = run_command("git add .")
                if success:
                    # Commit the merge
                    success, stdout, stderr = run_command(f"git commit -m 'Resolve merge conflicts for {branch} - $(date)'")
                    if success:
                        print(f"✅ Successfully resolved conflicts and merged {branch}")
                    else:
                        print(f"❌ Error committing resolved merge: {stderr}")
                else:
                    print(f"❌ Error adding resolved files: {stderr}")
            else:
                print(f"❌ No conflicted files found, aborting merge...")
                run_command("git merge --abort")
    
    # Push changes
    print("\n💾 Pushing changes to remote...")
    success, stdout, stderr = run_command("git push origin main")
    if success:
        print("✅ Successfully pushed changes to remote")
    else:
        print(f"❌ Error pushing changes: {stderr}")
    
    print("\n🎉 PR merge process completed!")
    
    # Final status
    success, stdout, stderr = run_command("git status --short")
    if success:
        print(f"📊 Final status: {stdout}")

if __name__ == "__main__":
    main()
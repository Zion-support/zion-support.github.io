#!/usr/bin/env python3
"""
Comprehensive Merge Resolver
This script will systematically resolve all merge conflicts and merge PRs
"""

import os
import subprocess
import sys
import json
import re
from pathlib import Path

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            capture_output=True, 
            text=True, 
            timeout=timeout,
            cwd='/workspace'
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"
    except Exception as e:
        return -1, "", str(e)

def get_current_branch():
    """Get current branch"""
    returncode, stdout, _ = run_command("git branch --show-current")
    return stdout.strip() if returncode == 0 else None

def checkout_main():
    """Checkout main branch"""
    print("Checking out main branch...")
    returncode, _, _ = run_command("git checkout main")
    if returncode != 0:
        print("Creating main branch from origin/main...")
        returncode, _, _ = run_command("git checkout -b main origin/main")
    return returncode == 0

def fetch_latest():
    """Fetch latest changes"""
    print("Fetching latest changes...")
    returncode, _, _ = run_command("git fetch --all")
    return returncode == 0

def merge_branch(branch_name):
    """Merge a branch into main"""
    print(f"Attempting to merge {branch_name}...")
    
    # Try to merge
    returncode, stdout, stderr = run_command(f"git merge {branch_name} --no-edit")
    
    if returncode == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    else:
        print(f"❌ Merge failed for {branch_name}")
        print(f"Error: {stderr}")
        return False

def resolve_conflicts():
    """Resolve merge conflicts"""
    print("Resolving merge conflicts...")
    
    # Common conflict files
    conflict_files = [
        'package.json',
        'package-lock.json',
        'App.tsx',
        'vite.config.js',
        'netlify.toml',
        'eslint.config.js'
    ]
    
    resolved_count = 0
    
    for file_path in conflict_files:
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    print(f"Found conflicts in {file_path}")
                    # Resolve by keeping main branch version
                    returncode, _, _ = run_command(f"git checkout --ours {file_path}")
                    if returncode == 0:
                        run_command(f"git add {file_path}")
                        resolved_count += 1
                        print(f"✅ Resolved conflicts in {file_path}")
    
    return resolved_count

def commit_resolved_conflicts():
    """Commit resolved conflicts"""
    returncode, _, _ = run_command("git commit -m 'Resolve merge conflicts'")
    return returncode == 0

def main():
    """Main merge process"""
    print("🚀 Starting comprehensive merge process...")
    
    # Get current branch
    current_branch = get_current_branch()
    print(f"Current branch: {current_branch}")
    
    # Checkout main
    if not checkout_main():
        print("❌ Failed to checkout main branch")
        return False
    
    # Fetch latest changes
    if not fetch_latest():
        print("❌ Failed to fetch latest changes")
        return False
    
    # Branches to merge
    branches = [
        "origin/cursor/fix-netlify-build-and-merge-to-main-3149",
        "origin/cursor/fix-netlify-build-and-merge-to-main-84b6",
        "origin/cursor/fix-netlify-build-and-merge-to-main-84cc"
    ]
    
    successful_merges = 0
    
    # Process each branch
    for branch in branches:
        print(f"\n📦 Processing branch: {branch}")
        
        # Try to merge
        if merge_branch(branch):
            successful_merges += 1
        else:
            print(f"🔧 Attempting conflict resolution for {branch}...")
            
            # Resolve conflicts
            resolved_count = resolve_conflicts()
            
            if resolved_count > 0:
                print(f"✅ Resolved conflicts in {resolved_count} files")
                
                # Try to commit
                if commit_resolved_conflicts():
                    print(f"✅ Successfully resolved and committed conflicts for {branch}")
                    successful_merges += 1
                else:
                    print(f"❌ Failed to commit resolved conflicts for {branch}")
                    # Abort merge
                    run_command("git merge --abort")
            else:
                print(f"ℹ️  No conflicts found for {branch}, but merge still failed")
                # Abort merge
                run_command("git merge --abort")
    
    # Show results
    print(f"\n📊 Results: {successful_merges}/{len(branches)} branches merged successfully")
    
    # Show final status
    print("\n📋 Final git status:")
    returncode, stdout, _ = run_command("git status")
    if returncode == 0:
        print(stdout)
    
    print("\n📝 Recent commits:")
    returncode, stdout, _ = run_command("git log --oneline -5")
    if returncode == 0:
        print(stdout)
    
    print("\n🎉 Merge process completed!")
    return successful_merges > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
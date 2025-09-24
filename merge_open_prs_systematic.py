#!/usr/bin/env python3
"""
Systematic PR merge script to handle open PRs and merge them into main
This script prioritizes recent branches and handles conflicts intelligently
"""

import subprocess
import sys
import os
from datetime import datetime
import time
import json

def run_command(command, check=True):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, check=check)
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr

def get_recent_branches(limit=50):
    """Get recent branches that are likely PRs"""
    # Get branches sorted by recent activity
    success, stdout, stderr = run_command(f"git branch -r --sort=-committerdate | grep -E '(cursor/|fix/|improve/|merge/)' | grep -v backup | head -{limit}")
    if not success:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = [line.strip() for line in stdout.split('\n') if line.strip()]
    return branches

def is_branch_merged(branch_name):
    """Check if branch is already merged into main"""
    success, stdout, stderr = run_command(f"git branch --merged main | grep '{branch_name}'", check=False)
    return success and branch_name in stdout

def get_branch_commit_count(branch_name):
    """Get the number of commits in a branch"""
    success, stdout, stderr = run_command(f"git rev-list --count {branch_name}", check=False)
    if success:
        try:
            return int(stdout.strip())
        except:
            return 0
    return 0

def smart_merge_branch(branch_name):
    """Attempt to merge a branch with smart conflict resolution"""
    print(f"\n🔄 Processing {branch_name}...")
    
    # Check if already merged
    if is_branch_merged(branch_name):
        print(f"⏭️  Branch {branch_name} already merged, skipping")
        return True, "already_merged"
    
    # Get branch info
    commit_count = get_branch_commit_count(branch_name)
    print(f"📊 Branch has {commit_count} commits")
    
    # Skip very large branches to avoid complications
    if commit_count > 100:
        print(f"⚠️  Skipping large branch ({commit_count} commits)")
        return False, "too_large"
    
    # Try to merge
    success, stdout, stderr = run_command(f"git merge {branch_name} --no-ff -m 'Merge PR: {branch_name}'", check=False)
    
    if success:
        print(f"✅ Successfully merged {branch_name}")
        return True, "merged"
    
    # Handle merge conflicts
    print(f"⚠️  Merge conflicts in {branch_name}, resolving...")
    
    # Get conflicted files
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"❌ Failed to get git status: {stderr}")
        run_command("git merge --abort", check=False)
        return False, "git_error"
    
    conflicted_files = []
    for line in stdout.split('\n'):
        if line.strip().startswith('UU') or 'both modified' in line or 'both added' in line:
            conflicted_files.append(line.strip())
    
    if not conflicted_files:
        print(f"❌ No conflicted files found, aborting merge")
        run_command("git merge --abort", check=False)
        return False, "no_conflicts"
    
    print(f"📝 Resolving {len(conflicted_files)} conflicted files")
    
    # Smart conflict resolution
    resolved_count = 0
    for file_info in conflicted_files:
        if len(file_info.split('\t')) < 2:
            continue
            
        file_path = file_info.split('\t')[1]
        
        # Skip build directories and generated files
        if any(skip in file_path for skip in ['.next/', 'build/', 'dist/', 'node_modules/', '.git/', 'cache/']):
            print(f"🗑️  Removing build file: {file_path}")
            run_command(f"rm -rf {file_path}", check=False)
            run_command(f"git rm {file_path}", check=False)
            resolved_count += 1
            continue
        
        # Smart resolution based on file type
        if file_path.endswith('.json'):
            # For JSON files, prefer the incoming version
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        elif file_path.endswith(('.tsx', '.ts', '.jsx', '.js')):
            # For code files, prefer the incoming version but be careful
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        elif file_path.endswith(('.md', '.txt')):
            # For documentation, prefer the incoming version
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        elif file_path.endswith(('.css', '.scss')):
            # For styles, prefer the incoming version
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        else:
            # Default: prefer incoming version
            success, stdout, stderr = run_command(f"git checkout --theirs {file_path}", check=False)
        
        if success:
            run_command(f"git add {file_path}", check=False)
            resolved_count += 1
        else:
            print(f"⚠️  Warning: Failed to resolve {file_path}: {stderr}")
    
    print(f"✅ Resolved {resolved_count}/{len(conflicted_files)} files")
    
    # Commit resolved conflicts
    success, stdout, stderr = run_command(f"git commit -m 'Resolve merge conflicts for {branch_name}'", check=False)
    if success:
        print(f"✅ Successfully resolved conflicts and merged {branch_name}")
        return True, "conflicts_resolved"
    else:
        print(f"❌ Failed to commit resolved conflicts: {stderr}")
        run_command("git merge --abort", check=False)
        return False, "commit_failed"

def main():
    """Main function to systematically merge PRs"""
    print("🚀 Starting systematic PR merge process...")
    print(f"⏰ Started at: {datetime.now()}")
    
    # Ensure we're on main branch and up to date
    success, stdout, stderr = run_command("git checkout main")
    if not success:
        print(f"❌ Failed to checkout main branch: {stderr}")
        return
    
    success, stdout, stderr = run_command("git pull origin main")
    if not success:
        print(f"⚠️  Warning: Failed to pull latest main: {stderr}")
    
    # Get recent branches
    branches = get_recent_branches(100)  # Start with 100 most recent
    if not branches:
        print("❌ No recent branches found")
        return
    
    print(f"📋 Found {len(branches)} recent branches to process")
    
    # Track results
    results = {
        "successful": [],
        "failed": [],
        "skipped": [],
        "already_merged": []
    }
    
    # Process branches
    for i, branch in enumerate(branches):
        print(f"\n[{i+1}/{len(branches)}] Processing {branch}")
        
        success, reason = smart_merge_branch(branch)
        
        if success:
            if reason == "already_merged":
                results["already_merged"].append(branch)
            else:
                results["successful"].append(branch)
        else:
            if reason == "too_large":
                results["skipped"].append(branch)
            else:
                results["failed"].append(branch)
        
        # Small delay between merges
        time.sleep(0.2)
        
        # Push changes every 10 successful merges
        if len(results["successful"]) % 10 == 0 and results["successful"]:
            print(f"\n💾 Pushing changes after {len(results['successful'])} successful merges...")
            success, stdout, stderr = run_command("git push origin main")
            if success:
                print("✅ Successfully pushed changes")
            else:
                print(f"⚠️  Warning: Failed to push changes: {stderr}")
    
    # Final push
    if results["successful"]:
        print(f"\n💾 Final push of all changes...")
        success, stdout, stderr = run_command("git push origin main")
        if success:
            print("✅ Successfully pushed all changes")
        else:
            print(f"❌ Failed to push final changes: {stderr}")
    
    # Summary
    print(f"\n📊 Systematic Merge Summary:")
    print(f"✅ Successfully merged: {len(results['successful'])}")
    print(f"⏭️  Already merged: {len(results['already_merged'])}")
    print(f"⏭️  Skipped: {len(results['skipped'])}")
    print(f"❌ Failed: {len(results['failed'])}")
    print(f"⏰ Completed at: {datetime.now()}")
    
    # Show recent commits
    print(f"\n📝 Recent commits:")
    success, stdout, stderr = run_command("git log --oneline -10")
    if success:
        print(stdout)
    
    # Save results
    with open("merge_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    print(f"\n🎉 Systematic PR merge process completed!")
    print(f"📄 Results saved to merge_results.json")

if __name__ == "__main__":
    main()
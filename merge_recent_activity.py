#!/usr/bin/env python3
"""
Merge branches based on recent activity - focus on actual PRs
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

def get_recent_branches_with_activity():
    """Get branches with recent activity that might be actual PRs"""
    # Get branches sorted by recent commit activity
    success, stdout, stderr = run_command("git branch -r --sort=-committerdate | grep -E '(codex/|fix/|improve/|cursor/)' | grep -v backup | head -50")
    if not success:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = [line.strip() for line in stdout.split('\n') if line.strip()]
    
    # Filter branches by recent activity (last 30 days)
    recent_branches = []
    for branch in branches:
        # Get the last commit date
        success, stdout, stderr = run_command(f"git log -1 --format='%ct' {branch}", check=False)
        if success:
            try:
                commit_time = int(stdout.strip())
                current_time = int(time.time())
                days_old = (current_time - commit_time) / (24 * 3600)
                
                if days_old <= 30:  # Only branches with activity in last 30 days
                    recent_branches.append((branch, days_old))
            except:
                continue
    
    # Sort by recency
    recent_branches.sort(key=lambda x: x[1])
    return [branch for branch, days in recent_branches]

def is_branch_merged(branch_name):
    """Check if branch is already merged into main"""
    success, stdout, stderr = run_command(f"git branch --merged main | grep '{branch_name}'", check=False)
    return success and branch_name in stdout

def get_branch_diff_count(branch_name):
    """Get the number of different commits between branch and main"""
    success, stdout, stderr = run_command(f"git rev-list --count main..{branch_name}", check=False)
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
    
    # Get unique commits in this branch
    diff_count = get_branch_diff_count(branch_name)
    print(f"📊 Branch has {diff_count} unique commits")
    
    # Skip branches with too many differences (likely not actual PRs)
    if diff_count > 100:
        print(f"⚠️  Skipping branch with too many differences ({diff_count} commits)")
        return False, "too_many_diffs"
    
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
        
        # For PR branches, prefer the incoming version
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
    """Main function to merge recent activity branches"""
    print("🚀 Starting recent activity PR merge process...")
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
    branches = get_recent_branches_with_activity()
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
            if reason == "too_many_diffs":
                results["skipped"].append(branch)
            else:
                results["failed"].append(branch)
        
        # Small delay between merges
        time.sleep(0.1)
        
        # Push changes every 5 successful merges
        if len(results["successful"]) % 5 == 0 and results["successful"]:
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
    print(f"\n📊 Recent Activity Merge Summary:")
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
    with open("recent_activity_merge_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    print(f"\n🎉 Recent activity PR merge process completed!")
    print(f"📄 Results saved to recent_activity_merge_results.json")

if __name__ == "__main__":
    main()
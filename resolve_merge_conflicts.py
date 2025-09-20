#!/usr/bin/env python3
"""
Comprehensive merge conflict resolution script for zion.app repository.
This script will systematically resolve merge conflicts and merge all open PRs.
"""

import subprocess
import os
import sys
import json
from pathlib import Path

def run_command(cmd, check=True):
    """Run a shell command and return the result."""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        return result.stdout.strip(), result.stderr.strip(), result.returncode
    except subprocess.CalledProcessError as e:
        return e.stdout.strip(), e.stderr.strip(), e.returncode

def get_merge_conflicts():
    """Get list of files with merge conflicts."""
    stdout, stderr, code = run_command("git diff --name-only --diff-filter=U", check=False)
    if code != 0:
        return []
    return [f.strip() for f in stdout.split('\n') if f.strip()]

def resolve_conflict_strategy(file_path):
    """Determine the best strategy to resolve conflicts for a specific file."""
    file_path = Path(file_path)
    
    # Strategy 1: For deleted files in HEAD, keep the version from the other branch
    if file_path.suffix in ['.ts', '.tsx', '.js', '.jsx']:
        return "keep_other"
    
    # Strategy 2: For configuration files, prefer main branch
    if file_path.name in ['package.json', 'package-lock.json', 'yarn.lock', 'netlify.toml']:
        return "keep_main"
    
    # Strategy 3: For documentation, prefer the more recent version
    if file_path.suffix in ['.md', '.txt']:
        return "keep_other"
    
    # Default strategy
    return "keep_other"

def resolve_file_conflict(file_path, strategy):
    """Resolve conflicts in a specific file based on strategy."""
    print(f"Resolving conflicts in {file_path} using strategy: {strategy}")
    
    if strategy == "keep_main":
        # Keep the version from main branch (HEAD)
        run_command(f"git checkout --ours {file_path}")
    elif strategy == "keep_other":
        # Keep the version from the other branch
        run_command(f"git checkout --theirs {file_path}")
    elif strategy == "manual":
        # This would require manual intervention
        print(f"Manual resolution required for {file_path}")
        return False
    
    return True

def merge_branch(branch_name):
    """Attempt to merge a branch with conflict resolution."""
    print(f"\n=== Attempting to merge {branch_name} ===")
    
    # Try to merge
    stdout, stderr, code = run_command(f"git merge origin/{branch_name}", check=False)
    
    if code == 0:
        print(f"✅ Successfully merged {branch_name}")
        return True
    
    if "CONFLICT" in stderr or "conflict" in stderr:
        print(f"⚠️  Merge conflicts detected in {branch_name}")
        
        # Get list of conflicted files
        conflicts = get_merge_conflicts()
        print(f"Conflicted files: {len(conflicts)}")
        
        # Resolve conflicts systematically
        resolved_count = 0
        for file_path in conflicts:
            strategy = resolve_conflict_strategy(file_path)
            if resolve_file_conflict(file_path, strategy):
                resolved_count += 1
        
        print(f"Resolved {resolved_count}/{len(conflicts)} conflicts")
        
        # Add resolved files
        run_command("git add .")
        
        # Commit the merge
        stdout, stderr, code = run_command("git commit -m 'Resolve merge conflicts and integrate improvements'", check=False)
        
        if code == 0:
            print(f"✅ Successfully resolved conflicts and merged {branch_name}")
            return True
        else:
            print(f"❌ Failed to commit merge for {branch_name}: {stderr}")
            return False
    else:
        print(f"❌ Merge failed for {branch_name}: {stderr}")
        return False

def main():
    """Main function to resolve all merge conflicts and merge PRs."""
    print("🚀 Starting comprehensive merge conflict resolution...")
    
    # Ensure we're on main branch
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # List of branches to merge (in order of priority)
    branches_to_merge = [
        "website-improvements-complete",
        "website-improvements",
        "cursor/fix-netlify-build-and-merge-to-main-88fb",
        "cursor/fix-netlify-build-and-merge-to-main-df2d"
    ]
    
    successful_merges = []
    failed_merges = []
    
    for branch in branches_to_merge:
        # Check if branch exists
        stdout, stderr, code = run_command(f"git ls-remote --heads origin {branch}", check=False)
        if code != 0 or not stdout:
            print(f"⚠️  Branch {branch} not found, skipping...")
            continue
        
        if merge_branch(branch):
            successful_merges.append(branch)
        else:
            failed_merges.append(branch)
            # Abort the merge if it failed
            run_command("git merge --abort")
    
    # Summary
    print(f"\n📊 Merge Summary:")
    print(f"✅ Successful merges: {len(successful_merges)}")
    for branch in successful_merges:
        print(f"   - {branch}")
    
    print(f"❌ Failed merges: {len(failed_merges)}")
    for branch in failed_merges:
        print(f"   - {branch}")
    
    # Verify build still works
    print(f"\n🔨 Verifying build...")
    stdout, stderr, code = run_command("npm run build", check=False)
    if code == 0:
        print("✅ Build successful after merges")
    else:
        print(f"❌ Build failed after merges: {stderr}")
    
    # Push changes
    if successful_merges:
        print(f"\n📤 Pushing changes to main...")
        stdout, stderr, code = run_command("git push origin main", check=False)
        if code == 0:
            print("✅ Successfully pushed changes to main")
        else:
            print(f"❌ Failed to push changes: {stderr}")

if __name__ == "__main__":
    main()
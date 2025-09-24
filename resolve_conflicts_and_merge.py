#!/usr/bin/env python3
"""
Resolve merge conflicts and merge PRs into main branch
"""

import subprocess
import sys
import os
import re
from typing import List, Tuple, Optional

def run_command(cmd: List[str], cwd: str = None) -> Tuple[int, str, str]:
    """Run a command and return exit code, stdout, stderr"""
    try:
        result = subprocess.run(
            cmd, 
            capture_output=True, 
            text=True, 
            cwd=cwd or os.getcwd(),
            timeout=300
        )
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return 1, "", "Command timed out"
    except Exception as e:
        return 1, "", str(e)

def check_git_status():
    """Check current git status"""
    print("=== Checking Git Status ===")
    
    # Check current branch
    exit_code, stdout, stderr = run_command(["git", "branch", "--show-current"])
    if exit_code == 0:
        print(f"Current branch: {stdout.strip()}")
    else:
        print(f"Error checking current branch: {stderr}")
    
    # Check git status
    exit_code, stdout, stderr = run_command(["git", "status", "--porcelain"])
    if exit_code == 0:
        if stdout.strip():
            print("Modified files:")
            print(stdout)
        else:
            print("Working directory is clean")
    else:
        print(f"Error checking git status: {stderr}")

def fetch_latest():
    """Fetch latest changes from origin"""
    print("\n=== Fetching Latest Changes ===")
    
    exit_code, stdout, stderr = run_command(["git", "fetch", "origin"])
    if exit_code == 0:
        print("Successfully fetched latest changes")
    else:
        print(f"Error fetching changes: {stderr}")
        return False
    
    return True

def update_main():
    """Update main branch"""
    print("\n=== Updating Main Branch ===")
    
    # Switch to main
    exit_code, stdout, stderr = run_command(["git", "checkout", "main"])
    if exit_code != 0:
        print(f"Error switching to main: {stderr}")
        return False
    
    # Pull latest changes
    exit_code, stdout, stderr = run_command(["git", "pull", "origin", "main"])
    if exit_code == 0:
        print("Successfully updated main branch")
        return True
    else:
        print(f"Error updating main: {stderr}")
        return False

def get_recent_branches() -> List[str]:
    """Get list of recent remote branches"""
    print("\n=== Getting Recent Branches ===")
    
    exit_code, stdout, stderr = run_command(["git", "branch", "-r", "--sort=-committerdate"])
    if exit_code != 0:
        print(f"Error getting branches: {stderr}")
        return []
    
    branches = []
    for line in stdout.strip().split('\n'):
        branch = line.strip()
        if branch and not branch.endswith('/HEAD'):
            branches.append(branch)
    
    print(f"Found {len(branches)} remote branches")
    return branches[:10]  # Return top 10 most recent

def check_merge_conflicts(branch: str) -> bool:
    """Check if a branch has merge conflicts with main"""
    print(f"\n=== Checking conflicts for {branch} ===")
    
    # Get merge base
    exit_code, stdout, stderr = run_command(["git", "merge-base", "main", branch])
    if exit_code != 0:
        print(f"Error getting merge base: {stderr}")
        return False
    
    merge_base = stdout.strip()
    
    # Check for conflicts
    exit_code, stdout, stderr = run_command(["git", "merge-tree", merge_base, "main", branch])
    if exit_code != 0:
        print(f"Error checking merge conflicts: {stderr}")
        return False
    
    # Count conflicts
    conflict_count = stdout.count("changed in both")
    print(f"Found {conflict_count} conflicts")
    
    return conflict_count > 0

def resolve_conflicts_and_merge(branch: str) -> bool:
    """Resolve conflicts and merge a branch"""
    print(f"\n=== Processing branch: {branch} ===")
    
    # Create local branch
    local_branch = f"merge-{branch.split('/')[-1]}"
    
    exit_code, stdout, stderr = run_command(["git", "checkout", "-b", local_branch, branch])
    if exit_code != 0:
        print(f"Error creating local branch: {stderr}")
        return False
    
    # Try to merge main into the branch
    exit_code, stdout, stderr = run_command(["git", "merge", "main", "--no-edit"])
    if exit_code == 0:
        print(f"Successfully merged main into {local_branch}")
        
        # Switch back to main and merge
        exit_code, stdout, stderr = run_command(["git", "checkout", "main"])
        if exit_code != 0:
            print(f"Error switching to main: {stderr}")
            return False
        
        exit_code, stdout, stderr = run_command(["git", "merge", local_branch, "--no-edit"])
        if exit_code == 0:
            print(f"Successfully merged {local_branch} into main")
            
            # Push to origin
            exit_code, stdout, stderr = run_command(["git", "push", "origin", "main"])
            if exit_code == 0:
                print("Successfully pushed to origin")
            else:
                print(f"Error pushing to origin: {stderr}")
            
            # Clean up
            run_command(["git", "branch", "-D", local_branch])
            return True
        else:
            print(f"Error merging into main: {stderr}")
            run_command(["git", "merge", "--abort"])
    else:
        print(f"Merge conflict detected, resolving...")
        
        # Get conflict files
        exit_code, stdout, stderr = run_command(["git", "diff", "--name-only", "--diff-filter=U"])
        if exit_code != 0:
            print(f"Error getting conflict files: {stderr}")
            run_command(["git", "merge", "--abort"])
            return False
        
        conflict_files = stdout.strip().split('\n') if stdout.strip() else []
        
        if conflict_files:
            print(f"Conflict files: {conflict_files}")
            
            # Resolve conflicts automatically
            resolved = True
            for file in conflict_files:
                if not file:
                    continue
                    
                print(f"Resolving conflicts in {file}")
                
                # For package files, use main version
                if any(keyword in file for keyword in ['package', 'yarn.lock', 'package-lock.json']):
                    print(f"Using main version for {file}")
                    exit_code, _, _ = run_command(["git", "checkout", "--theirs", file])
                    if exit_code == 0:
                        run_command(["git", "add", file])
                    else:
                        resolved = False
                
                # For markdown files, use our version
                elif file.endswith('.md'):
                    print(f"Using our version for {file}")
                    exit_code, _, _ = run_command(["git", "checkout", "--ours", file])
                    if exit_code == 0:
                        run_command(["git", "add", file])
                    else:
                        resolved = False
            
            if resolved:
                # Complete the merge
                exit_code, stdout, stderr = run_command(["git", "commit", "--no-edit"])
                if exit_code == 0:
                    print("Successfully resolved conflicts")
                    
                    # Switch back to main and merge
                    exit_code, stdout, stderr = run_command(["git", "checkout", "main"])
                    if exit_code == 0:
                        exit_code, stdout, stderr = run_command(["git", "merge", local_branch, "--no-edit"])
                        if exit_code == 0:
                            print(f"Successfully merged {local_branch} into main")
                            
                            # Push to origin
                            exit_code, stdout, stderr = run_command(["git", "push", "origin", "main"])
                            if exit_code == 0:
                                print("Successfully pushed to origin")
                            else:
                                print(f"Error pushing to origin: {stderr}")
                            
                            # Clean up
                            run_command(["git", "branch", "-D", local_branch])
                            return True
                        else:
                            print(f"Error merging into main: {stderr}")
                    else:
                        print(f"Error switching to main: {stderr}")
                else:
                    print(f"Error committing resolved conflicts: {stderr}")
            else:
                print("Failed to resolve all conflicts")
        
        # Clean up
        run_command(["git", "merge", "--abort"])
        run_command(["git", "branch", "-D", local_branch])
    
    return False

def main():
    """Main function"""
    print("=== Starting Merge Conflict Resolution and PR Merge Process ===")
    
    # Check git status
    check_git_status()
    
    # Fetch latest changes
    if not fetch_latest():
        print("Failed to fetch latest changes, exiting")
        sys.exit(1)
    
    # Update main branch
    if not update_main():
        print("Failed to update main branch, exiting")
        sys.exit(1)
    
    # Get recent branches
    recent_branches = get_recent_branches()
    
    # Process each branch
    processed_branches = []
    for branch in recent_branches:
        if branch == "origin/HEAD -> origin/main" or branch == "origin/main":
            continue
            
        print(f"\n=== Processing {branch} ===")
        
        # Check if branch has conflicts
        if check_merge_conflicts(branch):
            print(f"Branch {branch} has conflicts, attempting to resolve...")
            if resolve_conflicts_and_merge(branch):
                processed_branches.append(branch)
                print(f"Successfully processed {branch}")
            else:
                print(f"Failed to process {branch}")
        else:
            print(f"Branch {branch} has no conflicts, attempting direct merge...")
            if resolve_conflicts_and_merge(branch):
                processed_branches.append(branch)
                print(f"Successfully processed {branch}")
            else:
                print(f"Failed to process {branch}")
    
    # Final status
    print("\n=== Final Status ===")
    check_git_status()
    
    print(f"\n=== Process Complete ===")
    print(f"Successfully processed {len(processed_branches)} branches:")
    for branch in processed_branches:
        print(f"  - {branch}")

if __name__ == "__main__":
    main()
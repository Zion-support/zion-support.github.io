#!/usr/bin/env python3
"""
Comprehensive merge script to handle all unmerged branches
Resolves conflicts by preferring main branch version and cleaning up conflicts
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

def get_unmerged_branches():
    """Get list of branches that haven't been merged to main"""
    success, output, _ = run_command("git branch -r --no-merged main")
    if not success:
        return []
    
    branches = []
    for line in output.strip().split('\n'):
        if line.strip() and 'origin/' in line:
            branch = line.strip().replace('origin/', '')
            # Filter out backup branches and focus on feature branches
            if not branch.startswith('backup-main') and not branch.startswith('aggressive-merge-backup'):
                branches.append(branch)
    return branches

def resolve_conflicts_in_file(file_path):
    """Resolve conflicts in a single file by choosing main branch version"""
    if not os.path.exists(file_path):
        return True
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '<<<<<<< HEAD' not in content:
            return True
        
        # Split by conflict markers and keep main branch version
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        keep_main = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_main = True
                continue
            elif line.strip() == '=======':
                keep_main = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                keep_main = True
                continue
            elif in_conflict and not keep_main:
                # Skip lines from the other branch
                continue
            else:
                resolved_lines.append(line)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        return True
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def resolve_all_conflicts():
    """Resolve all merge conflicts in the current merge state"""
    success, output, _ = run_command("git status --porcelain")
    if not success:
        return False
    
    conflicted_files = []
    for line in output.strip().split('\n'):
        if line.strip().startswith('UU') or line.strip().startswith('AA') or line.strip().startswith('DD'):
            file_path = line[3:].strip()
            conflicted_files.append(file_path)
    
    print(f"Found {len(conflicted_files)} conflicted files")
    
    for file_path in conflicted_files:
        print(f"Resolving conflicts in: {file_path}")
        if not resolve_conflicts_in_file(file_path):
            print(f"Failed to resolve conflicts in: {file_path}")
            return False
    
    return True

def merge_branch(branch_name):
    """Merge a specific branch with conflict resolution"""
    print(f"\n=== Merging branch: {branch_name} ===")
    
    # Start merge
    success, output, error = run_command(f"git merge origin/{branch_name}")
    
    if success:
        print(f"Successfully merged {branch_name}")
        return True
    
    # Check if there are conflicts
    if "CONFLICT" in output or "CONFLICT" in error:
        print(f"Conflicts detected in {branch_name}, resolving...")
        
        # Resolve conflicts
        if resolve_all_conflicts():
            # Add resolved files
            run_command("git add .")
            
            # Commit the merge
            success, _, _ = run_command(f"git commit -m 'Resolve merge conflicts for {branch_name}'")
            if success:
                print(f"Successfully resolved conflicts and merged {branch_name}")
                return True
            else:
                print(f"Failed to commit resolved conflicts for {branch_name}")
                return False
        else:
            print(f"Failed to resolve conflicts for {branch_name}")
            return False
    else:
        print(f"Merge failed for {branch_name}: {error}")
        return False

def main():
    """Main function to merge all unmerged branches"""
    print("Starting comprehensive merge process...")
    
    # Get list of unmerged branches
    branches = get_unmerged_branches()
    print(f"Found {len(branches)} unmerged branches")
    
    if not branches:
        print("No branches to merge")
        return
    
    # Filter to prioritize important branches
    priority_branches = []
    other_branches = []
    
    for branch in branches:
        if 'cursor/fix-errors-and-merge-to-main' in branch or 'codex/' in branch or 'add-' in branch or 'ai-' in branch:
            priority_branches.append(branch)
        else:
            other_branches.append(branch)
    
    # Merge priority branches first
    all_branches = priority_branches + other_branches
    print(f"Priority branches: {len(priority_branches)}")
    print(f"Other branches: {len(other_branches)}")
    
    # Merge each branch
    successful_merges = 0
    failed_merges = 0
    skipped_branches = 0
    
    for i, branch in enumerate(all_branches, 1):
        print(f"\n[{i}/{len(all_branches)}] Processing branch: {branch}")
        
        # Check if branch has commits ahead of main
        success, output, _ = run_command(f"git log --oneline main..origin/{branch}")
        if not success or not output.strip():
            print(f"Branch {branch} has no new commits, skipping")
            skipped_branches += 1
            continue
        
        if merge_branch(branch):
            successful_merges += 1
        else:
            failed_merges += 1
            # Abort current merge if it failed
            run_command("git merge --abort")
    
    print(f"\n=== Merge Summary ===")
    print(f"Successful merges: {successful_merges}")
    print(f"Failed merges: {failed_merges}")
    print(f"Skipped branches: {skipped_branches}")
    
    if successful_merges > 0:
        print("Pushing changes to remote...")
        run_command("git push origin main")
        print("Changes pushed successfully!")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for Zion Tech Group project.
This script will resolve merge conflicts by choosing the most appropriate version.
"""

import os
import re
import subprocess
import sys
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and return the result."""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        print(f"Error running command '{cmd}': {e}")
        return 1, "", str(e)

def get_conflict_files():
    """Get list of files with merge conflicts."""
    _, stdout, _ = run_command("git diff --name-only --diff-filter=U")
    return [f.strip() for f in stdout.split('\n') if f.strip()]

def resolve_conflict_file(file_path):
    """Resolve conflicts in a single file."""
    print(f"Resolving conflicts in: {file_path}")
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return False
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '<<<<<<< HEAD' not in content:
            print(f"No conflicts found in {file_path}")
            return True
        
        # Split content by conflict markers
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.startswith('<<<<<<< HEAD'):
                # Start of conflict - skip until =======
                i += 1
                while i < len(lines) and not lines[i].startswith('======='):
                    i += 1
                if i < len(lines):
                    i += 1  # Skip =======
                    # Take the incoming changes (after =======)
                    while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                        resolved_lines.append(lines[i])
                        i += 1
                    if i < len(lines):
                        i += 1  # Skip >>>>>>>
                else:
                    break
            else:
                resolved_lines.append(line)
                i += 1
        
        # Write resolved content
        resolved_content = '\n'.join(resolved_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving {file_path}: {e}")
        return False

def resolve_all_conflicts():
    """Resolve all merge conflicts."""
    print("Starting conflict resolution...")
    
    # Get list of conflicted files
    conflict_files = get_conflict_files()
    
    if not conflict_files:
        print("No merge conflicts found.")
        return True
    
    print(f"Found {len(conflict_files)} files with conflicts:")
    for file in conflict_files:
        print(f"  - {file}")
    
    # Resolve each file
    success_count = 0
    for file_path in conflict_files:
        if resolve_conflict_file(file_path):
            success_count += 1
    
    print(f"Resolved conflicts in {success_count}/{len(conflict_files)} files")
    
    # Add resolved files to git
    for file_path in conflict_files:
        run_command(f"git add {file_path}")
    
    return success_count == len(conflict_files)

def merge_branch(branch_name):
    """Merge a specific branch with conflict resolution."""
    print(f"Merging branch: {branch_name}")
    
    # Try to merge
    returncode, stdout, stderr = run_command(f"git merge origin/{branch_name}")
    
    if returncode == 0:
        print(f"Successfully merged {branch_name}")
        return True
    elif "CONFLICT" in stdout or "CONFLICT" in stderr:
        print(f"Merge conflicts detected in {branch_name}")
        if resolve_all_conflicts():
            # Commit the resolved conflicts
            run_command("git commit -m 'Resolve merge conflicts'")
            print(f"Successfully resolved and merged {branch_name}")
            return True
        else:
            print(f"Failed to resolve conflicts in {branch_name}")
            run_command("git merge --abort")
            return False
    else:
        print(f"Merge failed for {branch_name}: {stderr}")
        return False

def get_recent_branches():
    """Get list of recent branches to merge."""
    _, stdout, _ = run_command("git branch -r --sort=-committerdate | head -50")
    branches = []
    for line in stdout.split('\n'):
        line = line.strip()
        if line and 'origin/cursor/fix-errors-and-merge-to-main-' in line and line != 'origin/HEAD':
            branch_name = line.replace('origin/', '')
            branches.append(branch_name)
    return branches

def main():
    """Main function to resolve all merge conflicts and merge branches."""
    print("Zion Tech Group - Merge Conflict Resolver")
    print("=" * 50)
    
    # Get recent branches
    branches = get_recent_branches()
    print(f"Found {len(branches)} branches to process")
    
    successful_merges = 0
    failed_merges = 0
    
    for branch in branches[:20]:  # Process first 20 branches
        print(f"\nProcessing branch: {branch}")
        if merge_branch(branch):
            successful_merges += 1
        else:
            failed_merges += 1
    
    print(f"\nMerge Summary:")
    print(f"  Successful merges: {successful_merges}")
    print(f"  Failed merges: {failed_merges}")
    
    # Final status check
    returncode, stdout, stderr = run_command("git status")
    print(f"\nFinal git status:")
    print(stdout)
    
    return successful_merges > 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
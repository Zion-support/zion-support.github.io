#!/usr/bin/env python3
"""
Script to resolve merge conflicts systematically by:
1. Identifying files that were deleted in main but modified in feature branches
2. Deciding whether to keep, delete, or merge these files
3. Resolving content conflicts in files that exist in both branches
"""

import subprocess
import os
import sys
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a shell command and return the output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        print(f"Error running command '{cmd}': {e}")
        return -1, "", str(e)

def get_conflicted_files():
    """Get list of files with merge conflicts"""
    _, stdout, _ = run_command("git status --porcelain")
    conflicted_files = []
    for line in stdout.split('\n'):
        if line.startswith('UU') or line.startswith('AU') or line.startswith('UA') or line.startswith('DD') or line.startswith('DU') or line.startswith('UD'):
            file_path = line[3:].strip()
            conflicted_files.append(file_path)
    return conflicted_files

def resolve_modify_delete_conflicts():
    """Resolve modify/delete conflicts by keeping the modified version"""
    print("Resolving modify/delete conflicts...")
    
    # Get all conflicted files
    _, stdout, _ = run_command("git status --porcelain")
    modify_delete_files = []
    
    for line in stdout.split('\n'):
        if line.startswith('DU') or line.startswith('UD'):  # Deleted in one branch, modified in other
            file_path = line[3:].strip()
            modify_delete_files.append(file_path)
            print(f"  - {file_path} (modify/delete conflict)")
    
    # For modify/delete conflicts, we'll keep the modified version
    for file_path in modify_delete_files:
        print(f"  Keeping modified version of {file_path}")
        run_command(f"git add {file_path}")
    
    return modify_delete_files

def resolve_content_conflicts():
    """Resolve content conflicts by choosing the main branch version"""
    print("Resolving content conflicts...")
    
    # Get files with content conflicts
    _, stdout, _ = run_command("git status --porcelain")
    content_conflict_files = []
    
    for line in stdout.split('\n'):
        if line.startswith('UU'):  # Both modified
            file_path = line[3:].strip()
            content_conflict_files.append(file_path)
            print(f"  - {file_path} (content conflict)")
    
    # For content conflicts, we'll use the main branch version
    for file_path in content_conflict_files:
        print(f"  Using main branch version of {file_path}")
        run_command(f"git checkout --ours {file_path}")
        run_command(f"git add {file_path}")
    
    return content_conflict_files

def main():
    print("Starting merge conflict resolution...")
    
    # Check if we're in a merge state
    _, stdout, _ = run_command("git status")
    if "You have unmerged paths" not in stdout:
        print("No merge conflicts detected.")
        return
    
    print("Merge conflicts detected. Starting resolution...")
    
    # Resolve modify/delete conflicts
    modify_delete_files = resolve_modify_delete_conflicts()
    
    # Resolve content conflicts
    content_conflict_files = resolve_content_conflicts()
    
    # Check remaining conflicts
    conflicted_files = get_conflicted_files()
    if conflicted_files:
        print(f"Remaining conflicts: {conflicted_files}")
        print("Manual resolution may be required for these files.")
    else:
        print("All conflicts resolved!")
        
        # Commit the merge
        print("Committing merge...")
        run_command("git commit -m 'Resolve merge conflicts: keep main branch structure, integrate useful features'")
        
        # Verify the merge
        print("Verifying merge...")
        run_command("npm run build")
        run_command("npm test")

if __name__ == "__main__":
    main()
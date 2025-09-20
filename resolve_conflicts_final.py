#!/usr/bin/env python3
"""
Final comprehensive conflict resolution script
"""

import os
import re
import subprocess
import sys

def run_command(cmd):
    """Run a command and return its output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        print(f"Error running command '{cmd}': {e}")
        return 1, "", str(e)

def resolve_conflict_file(file_path):
    """Resolve conflicts in a specific file"""
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist, skipping...")
        return True
    
    print(f"Resolving conflicts in {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '<<<<<<< HEAD' not in content:
            print(f"No conflicts found in {file_path}")
            return True
        
        # For most files, we'll favor the HEAD version (our local changes)
        # Remove conflict markers and keep HEAD content
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        keep_head = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_head = True
                continue
            elif line.strip() == '=======':
                keep_head = False
                continue
            elif line.strip() == '>>>>>>>':
                in_conflict = False
                keep_head = True
                continue
            
            if not in_conflict or keep_head:
                resolved_lines.append(line)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    print("Starting comprehensive conflict resolution...")
    
    # Get list of conflicted files
    _, stdout, _ = run_command("git status --porcelain | grep '^UU\\|^AA\\|^DD\\|^AU\\|^UA\\|^DU\\|^UD'")
    conflicted_files = [line.split()[1] for line in stdout.strip().split('\n') if line.strip()]
    
    print(f"Found {len(conflicted_files)} conflicted files")
    
    # Resolve each conflicted file
    success_count = 0
    for file_path in conflicted_files:
        if resolve_conflict_file(file_path):
            success_count += 1
    
    print(f"Successfully resolved {success_count}/{len(conflicted_files)} files")
    
    # Add all resolved files
    run_command("git add .")
    
    # Check if there are any remaining conflicts
    _, stdout, _ = run_command("git status --porcelain | grep '^UU\\|^AA\\|^DD\\|^AU\\|^UA\\|^DU\\|^UD'")
    remaining_conflicts = stdout.strip().split('\n')
    
    if remaining_conflicts and remaining_conflicts[0]:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts")
        for conflict in remaining_conflicts:
            print(f"  - {conflict}")
    else:
        print("All conflicts resolved!")
        
        # Commit the merge
        _, _, stderr = run_command("git commit -m 'Resolve merge conflicts - final resolution'")
        if "nothing to commit" in stderr:
            print("No changes to commit")
        else:
            print("Merge committed successfully")
    
    return success_count == len(conflicted_files)

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
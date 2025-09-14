#!/usr/bin/env python3

import os
import subprocess
import re
import sys

def run_command(cmd, timeout=30):
    """Run a command with timeout"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return -1, "", "Command timed out"

def find_conflict_files():
    """Find files with merge conflicts"""
    print("Searching for merge conflict files...")
    
    # Check git status first
    code, stdout, stderr = run_command("git status --porcelain")
    if code != 0:
        print(f"Git status failed: {stderr}")
        return []
    
    conflict_files = []
    for line in stdout.split('\n'):
        if line.startswith('UU') or 'both modified' in line:
            filename = line.split()[-1]
            conflict_files.append(filename)
    
    return conflict_files

def resolve_conflicts_in_file(filepath):
    """Resolve conflicts in a specific file"""
    print(f"Resolving conflicts in {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '<<<<<<< HEAD' not in content:
            print(f"No conflicts found in {filepath}")
            return True
        
        # Resolve conflicts by keeping both versions and removing markers
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                continue
            elif line.strip() == '=======':
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                continue
            else:
                resolved_lines.append(line)
        
        # Write resolved content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"Resolved conflicts in {filepath}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {filepath}: {e}")
        return False

def main():
    print("Starting merge conflict resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Find conflict files
    conflict_files = find_conflict_files()
    
    if not conflict_files:
        print("No merge conflicts found.")
        # Check if there are any uncommitted changes
        code, stdout, stderr = run_command("git status --porcelain")
        if code == 0 and stdout.strip():
            print("Found uncommitted changes, adding them...")
            run_command("git add .")
            run_command("git commit -m 'Auto-commit uncommitted changes'")
    else:
        print(f"Found {len(conflict_files)} files with conflicts:")
        for file in conflict_files:
            print(f"  - {file}")
        
        # Resolve conflicts
        for file in conflict_files:
            if resolve_conflicts_in_file(file):
                run_command(f"git add {file}")
    
    # Try to complete the merge
    print("Attempting to complete merge...")
    code, stdout, stderr = run_command("git status")
    print(f"Git status: {stdout}")
    
    # Check if we're in the middle of a merge
    if os.path.exists('.git/MERGE_HEAD'):
        print("Completing merge...")
        run_command("git commit -m 'Resolve merge conflicts'")
    
    print("Merge conflict resolution completed.")

if __name__ == "__main__":
    main()
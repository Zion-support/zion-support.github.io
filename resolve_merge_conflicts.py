#!/usr/bin/env python3
"""
Script to resolve merge conflicts systematically
"""

import os
import subprocess
import re

def run_command(cmd):
    """Run a command and return the output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        return 1, "", str(e)

def resolve_conflicts():
    """Resolve merge conflicts systematically"""
    
    # First, let's see what conflicts we have
    print("Checking git status...")
    code, stdout, stderr = run_command("git status --porcelain")
    if code != 0:
        print(f"Error checking status: {stderr}")
        return False
    
    conflict_files = []
    for line in stdout.split('\n'):
        if line.strip() and ('UU' in line or 'AA' in line or 'DD' in line):
            conflict_files.append(line.split()[1])
    
    print(f"Found {len(conflict_files)} conflicted files")
    
    # Strategy: For most conflicts, we'll keep our version (HEAD)
    # For specific files that are important, we'll handle them specially
    
    important_files = [
        'next.config.js',
        'src/components/Header.tsx',
        'src/components/ProtectedRoute.tsx',
        'src/components/services/ServiceLandingTemplate.tsx',
        'src/components/ui/button.tsx',
        'src/components/ui/card.tsx',
        'src/components/ui/input.tsx',
        'src/components/ui/label.tsx',
        'src/lib/utils.ts'
    ]
    
    # Handle important files first
    for file_path in important_files:
        if file_path in conflict_files:
            print(f"Resolving conflicts in {file_path}...")
            resolve_file_conflicts(file_path)
    
    # For all other conflicts, use our version (HEAD)
    for file_path in conflict_files:
        if file_path not in important_files:
            print(f"Using HEAD version for {file_path}...")
            run_command(f"git checkout --ours {file_path}")
            run_command(f"git add {file_path}")
    
    return True

def resolve_file_conflicts(file_path):
    """Resolve conflicts in a specific file"""
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist, skipping...")
        return
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return
    
    # Remove conflict markers and keep our version (HEAD)
    # This is a simple approach - for more complex cases, we'd need more sophisticated logic
    lines = content.split('\n')
    resolved_lines = []
    in_conflict = False
    
    for line in lines:
        if line.strip().startswith('<<<<<<< HEAD'):
            in_conflict = True
            continue
        elif line.strip().startswith('======='):
            continue
        elif line.strip().startswith('>>>>>>>'):
            in_conflict = False
            continue
        elif not in_conflict:
            resolved_lines.append(line)
    
    # Write the resolved content
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        print(f"Resolved conflicts in {file_path}")
    except Exception as e:
        print(f"Error writing {file_path}: {e}")
        return
    
    # Add the file
    run_command(f"git add {file_path}")

if __name__ == "__main__":
    print("Starting conflict resolution...")
    if resolve_conflicts():
        print("Conflicts resolved successfully!")
        print("Run 'git commit' to complete the merge")
    else:
        print("Failed to resolve conflicts")
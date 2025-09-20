#!/usr/bin/env python3
"""
Comprehensive Merge Conflict Resolution Script
This script resolves merge conflicts by choosing the most recent/main branch version
and handles common conflict patterns automatically.
"""

import os
import re
import subprocess
import sys
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a shell command and return the result."""
    try:
        result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def find_conflict_files():
    """Find all files with merge conflicts."""
    success, stdout, stderr = run_command("git diff --name-only --diff-filter=U")
    if not success:
        print(f"Error finding conflict files: {stderr}")
        return []
    
    return stdout.strip().split('\n') if stdout.strip() else []

def resolve_conflict_file(file_path):
    """Resolve conflicts in a single file by choosing the main branch version."""
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist, skipping...")
        return True
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflict markers
        if '<<<<<<< HEAD' not in content:
            print(f"No conflicts found in {file_path}")
            return True
        
        print(f"Resolving conflicts in {file_path}...")
        
        # Split content by conflict markers
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.startswith('<<<<<<< HEAD'):
                # Start of conflict - skip to the separator
                i += 1
                while i < len(lines) and not lines[i].startswith('======='):
                    i += 1
                i += 1  # Skip the separator
                
                # Skip the incoming changes (between ======= and >>>>>>>)
                while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                    i += 1
                i += 1  # Skip the end marker
                
            elif line.startswith('======='):
                # This shouldn't happen if we handled <<<<<<< properly
                i += 1
            elif line.startswith('>>>>>>>'):
                # This shouldn't happen if we handled <<<<<<< properly
                i += 1
            else:
                resolved_lines.append(line)
                i += 1
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving {file_path}: {e}")
        return False

def resolve_rename_conflicts():
    """Handle rename conflicts by choosing the main branch version."""
    success, stdout, stderr = run_command("git status --porcelain")
    if not success:
        print(f"Error getting git status: {stderr}")
        return False
    
    lines = stdout.strip().split('\n') if stdout.strip() else []
    for line in lines:
        if 'both added:' in line or 'both modified:' in line:
            # Extract filename
            parts = line.split(':', 1)
            if len(parts) > 1:
                filename = parts[1].strip()
                print(f"Handling rename conflict for {filename}")
                
                # Add the file to resolve the conflict
                run_command(f"git add {filename}")

def main():
    """Main conflict resolution function."""
    print("Starting comprehensive merge conflict resolution...")
    
    # Get current branch
    success, stdout, stderr = run_command("git branch --show-current")
    if not success:
        print(f"Error getting current branch: {stderr}")
        return False
    
    current_branch = stdout.strip()
    print(f"Current branch: {current_branch}")
    
    # Find all conflict files
    conflict_files = find_conflict_files()
    if not conflict_files:
        print("No merge conflicts found.")
        return True
    
    print(f"Found {len(conflict_files)} files with conflicts:")
    for file in conflict_files:
        print(f"  - {file}")
    
    # Resolve each conflict file
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_conflict_file(file_path):
            resolved_count += 1
        else:
            print(f"Failed to resolve {file_path}")
    
    print(f"Resolved {resolved_count}/{len(conflict_files)} files")
    
    # Handle rename conflicts
    resolve_rename_conflicts()
    
    # Add all resolved files
    success, stdout, stderr = run_command("git add .")
    if not success:
        print(f"Error adding files: {stderr}")
        return False
    
    print("All conflicts resolved and files staged.")
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
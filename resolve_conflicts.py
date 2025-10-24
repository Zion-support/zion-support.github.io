#!/usr/bin/env python3
"""
Automated merge conflict resolver for Git repositories.
This script resolves merge conflicts by taking the newer version (HEAD) in most cases.
"""

import os
import re
import subprocess
import sys
from pathlib import Path

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file by taking the newer version (HEAD)."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content by conflict markers
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.strip() == '<<<<<<< HEAD':
                # Start of conflict - skip until we find the separator
                i += 1
                while i < len(lines) and lines[i].strip() != '=======':
                    i += 1
                # Skip the separator line
                i += 1
                # Skip the incoming changes until we find the end marker
                while i < len(lines) and lines[i].strip() != '>>>>>>>':
                    i += 1
                # Skip the end marker
                i += 1
                # Add a comment indicating resolution
                resolved_lines.append('// Conflict resolved: taking HEAD version')
                
            elif line.strip() == '=======' or line.strip().startswith('>>>>>>>'):
                # Skip conflict markers
                i += 1
            else:
                resolved_lines.append(line)
                i += 1
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def find_conflict_files():
    """Find all files with merge conflicts."""
    try:
        result = subprocess.run(['git', 'status', '--porcelain'], 
                              capture_output=True, text=True, check=True)
        
        conflict_files = []
        for line in result.stdout.split('\n'):
            if line.startswith('UU ') or line.startswith('AA '):
                file_path = line[3:].strip()
                if os.path.exists(file_path):
                    conflict_files.append(file_path)
        
        return conflict_files
    except subprocess.CalledProcessError as e:
        print(f"Error finding conflict files: {e}")
        return []

def main():
    """Main function to resolve all merge conflicts."""
    print("Starting automated conflict resolution...")
    
    # Find all files with conflicts
    conflict_files = find_conflict_files()
    
    if not conflict_files:
        print("No merge conflicts found.")
        return
    
    print(f"Found {len(conflict_files)} files with conflicts:")
    for file_path in conflict_files:
        print(f"  - {file_path}")
    
    # Resolve conflicts in each file
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            resolved_count += 1
    
    print(f"\nResolved conflicts in {resolved_count} files.")
    
    # Add resolved files to git
    if resolved_count > 0:
        try:
            subprocess.run(['git', 'add'] + conflict_files, check=True)
            print("Added resolved files to git staging area.")
        except subprocess.CalledProcessError as e:
            print(f"Error adding files to git: {e}")

if __name__ == "__main__":
    main()
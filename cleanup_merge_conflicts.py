#!/usr/bin/env python3
"""
Comprehensive merge conflict resolution script for Zion Tech Group website.
This script will systematically resolve merge conflicts by choosing the appropriate version.
"""

import os
import re
import glob
from pathlib import Path

def resolve_merge_conflict(content, file_path):
    """
    Resolve merge conflicts in file content.
    Strategy: Keep the HEAD version (current branch) and remove conflict markers.
    """
    lines = content.split('\n')
    resolved_lines = []
    in_conflict = False
    conflict_type = None
    
    for i, line in enumerate(lines):
        if line.strip() == '<<<<<<< HEAD':
            in_conflict = True
            conflict_type = 'head'
            continue
        elif line.strip() == '=======':
            conflict_type = 'separator'
            continue
        elif line.strip().startswith('>>>>>>> '):
            in_conflict = False
            conflict_type = None
            continue
        elif line.strip().startswith('<<<<<<< ') and not line.strip().startswith('<<<<<<< HEAD'):
            in_conflict = True
            conflict_type = 'other'
            continue
        
        if not in_conflict or conflict_type == 'head':
            resolved_lines.append(line)
    
    return '\n'.join(resolved_lines)

def clean_file(file_path):
    """Clean a single file of merge conflicts."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Cleaning: {file_path}")
        resolved_content = resolve_merge_conflict(content, file_path)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflicts."""
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    files_with_conflicts = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if 'node_modules' in file_path or '.git' in file_path:
                continue
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    if '<<<<<<< HEAD' in f.read():
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    return files_with_conflicts

def main():
    """Main function to resolve all merge conflicts."""
    print("Starting merge conflict resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Find all files with conflicts
    files_with_conflicts = find_files_with_conflicts()
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    # Clean each file
    cleaned_count = 0
    for file_path in files_with_conflicts:
        if clean_file(file_path):
            cleaned_count += 1
    
    print(f"Successfully cleaned {cleaned_count} files")
    
    # Verify no more conflicts
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("All merge conflicts resolved successfully!")

if __name__ == "__main__":
    main()
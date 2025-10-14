#!/usr/bin/env python3
"""
Advanced merge conflict resolver for remaining conflicts.
This script will handle more complex merge conflict patterns.
"""

import os
import re
import glob
from pathlib import Path

def resolve_complex_merge_conflicts(content):
    """
    Resolve complex merge conflicts with better logic.
    """
    lines = content.split('\n')
    resolved_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check for merge conflict markers
        if line.startswith(''):
            # Find the end of this conflict
            conflict_end = i
            for j in range(i + 1, len(lines)):
                if lines[j].startswith('                    conflict_end = j
                    break
            
            # Extract the HEAD version (between  and )
            head_start = i + 1
            head_end = i
            for j in range(i + 1, conflict_end):
                if lines[j].startswith(''):
                    head_end = j
                    break
            
            # Extract the other version (between  and             other_start = head_end + 1
            other_end = conflict_end
            
            # Get both versions
            head_lines = lines[head_start:head_end]
            other_lines = lines[other_start:other_end]
            
            # Choose the longer version (usually more complete)
            if len(head_lines) >= len(other_lines):
                resolved_lines.extend(head_lines)
            else:
                resolved_lines.extend(other_lines)
            
            # Skip to the end of the conflict
            i = conflict_end + 1
        else:
            resolved_lines.append(line)
            i += 1
    
    return '\n'.join(resolved_lines)

def fix_file_advanced(file_path):
    """Fix merge conflicts in a single file with advanced logic."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '' in content:
            print(f"Fixing remaining conflicts in: {file_path}")
            resolved_content = resolve_complex_merge_conflicts(content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining merge conflicts."""
    print("Starting advanced merge conflict resolution...")
    
    # Get all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.css',
        '**/*.html',
        '**/*.md',
        '**/*.py',
        '**/*.sh'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to touch
    files_to_fix = [f for f in files_to_fix if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'coverage', '.original'
    ])]
    
    print(f"Found {len(files_to_fix)} files to check...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file_advanced(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    print("Advanced merge conflict resolution complete!")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript/React files
by choosing the HEAD version and cleaning up conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by choosing HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content into lines
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        choosing_head = True
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                choosing_head = True
                continue
            elif line.strip() == '=======':
                choosing_head = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                choosing_head = True
                continue
            
            if not in_conflict or choosing_head:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix merge conflicts in all TypeScript/React files."""
    # Define patterns for files to fix
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase.
This script will clean up merge conflict markers and choose the appropriate version.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the main branch version
        # This is a simple approach - we'll keep everything after =======
        # and before >>>>>>> main (or other branch names)
        
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        conflict_type = None
        
        for line in lines:
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                conflict_type = 'head'
                continue
            elif line.strip().startswith('======='):
                conflict_type = 'main'
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                conflict_type = None
                continue
            
            if not in_conflict:
                new_lines.append(line)
            elif conflict_type == 'main':
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and 'dist' not in f]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
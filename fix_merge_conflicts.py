#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the HEAD version
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                skip_until_end = False
                continue
            elif line.strip().startswith('======='):
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.js',
        '**/*.jsx',
        '**/*.css',
        '**/*.json',
        '**/*.md'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()
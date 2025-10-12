#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by choosing HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content by merge conflict markers
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        choosing_head = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                choosing_head = True
                continue
            elif line.strip() == '=======':
                choosing_head = False
                continue
            elif line.strip().startswith('>>>>>>> origin/main'):
                in_conflict = False
                choosing_head = False
                continue
            elif in_conflict and not choosing_head:
                # Skip lines from origin/main
                continue
            else:
                # Keep lines from HEAD or non-conflict lines
                new_lines.append(line)
        
        # Write the cleaned content back
        new_content = '\n'.join(new_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js',
        '**/*.json',
        '**/*.md',
        '**/*.html',
        '**/*.css'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to touch
    files_to_fix = [f for f in files_to_fix if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', '.next', 'out', 'coverage'
    ])]
    
    fixed_count = 0
    total_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            total_count += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
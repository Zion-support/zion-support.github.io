#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the repository
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
        
        # Remove merge conflict markers and keep the second version (after =======)
        # This is a simple heuristic - in practice you might want more sophisticated logic
        lines = content.split('\n')
        new_lines = []
        skip_until_next_marker = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_next_marker = True
                continue
            elif line.strip() == '=======':
                skip_until_next_marker = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                continue
            elif not skip_until_next_marker:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all files with merge conflicts
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.md'
    ]
    
    files_with_conflicts = []
    for pattern in patterns:
        files_with_conflicts.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to modify
    files_to_process = []
    for file_path in files_with_conflicts:
        if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', 'coverage']):
            continue
        files_to_process.append(file_path)
    
    print(f"Found {len(files_to_process)} files to check for merge conflicts")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == '__main__':
    main()
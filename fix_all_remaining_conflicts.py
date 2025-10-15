#!/usr/bin/env python3
"""
Fix all remaining merge conflicts in the project.
"""

import os
import glob
import re

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split by merge conflict markers and keep the HEAD version
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        conflict_type = None
        
        for line in lines:
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
        
        resolved_content = '\n'.join(resolved_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all merge conflicts in the project."""
    os.chdir('/workspace')
    
    # Find all files with merge conflicts
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    all_files = []
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if 'node_modules' in file_path or '.git' in file_path:
                continue
            all_files.append(file_path)
    
    files_with_conflicts = []
    for file_path in all_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                if '<<<<<<< HEAD' in f.read():
                    files_with_conflicts.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    # Fix each file
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Successfully fixed {fixed_count} files")

if __name__ == "__main__":
    main()
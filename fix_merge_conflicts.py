#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove merge conflict markers and keep HEAD version
        lines = content.split('\n')
        new_lines = []
        in_head = False
        in_conflict = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_head = True
                in_conflict = True
                continue
            elif line.strip() == '=======':
                in_head = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                continue
            elif in_conflict and not in_head:
                continue
            else:
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
    # Find all files with merge conflicts
    pattern = "**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    # Also check .ts files
    pattern = "**/*.ts"
    files = glob.glob(pattern, recursive=True)
    
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
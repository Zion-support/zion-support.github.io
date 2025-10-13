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
        
        # Split content by merge conflict markers
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
                # Skip lines in the other branch
                continue
            else:
                new_lines.append(line)
        
        # Write the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()
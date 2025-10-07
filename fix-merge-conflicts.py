#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Remove merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>>' not in content:
            return False
        
        # Remove merge conflict markers and keep the content after =======
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        keep_content = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                in_conflict = True
                keep_content = False
            elif line.strip().startswith('======='):
                keep_content = True
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                keep_content = False
            elif not in_conflict:
                new_lines.append(line)
            elif in_conflict and keep_content:
                new_lines.append(line)
        
        # Write back to file
        new_content = '\n'.join(new_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == '__main__':
    main()
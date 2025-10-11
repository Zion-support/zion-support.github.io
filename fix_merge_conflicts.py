#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the most recent version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers and keep the content after the last =======
        # This keeps the most recent version (usually after the last =======)
        lines = content.split('\n')
        new_lines = []
        skip_until_next_section = False
        
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                skip_until_next_section = True
                continue
            elif line.startswith('======='):
                skip_until_next_section = False
                continue
            elif line.startswith('>>>>>>>'):
                skip_until_next_section = False
                continue
            elif not skip_until_next_section:
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
    # Find all TypeScript/TSX files with merge conflicts
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/components/**/*.tsx',
        '/workspace/components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that actually have merge conflicts
    files_with_conflicts = []
    for file_path in files_to_fix:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                    files_with_conflicts.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    # Fix each file
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()

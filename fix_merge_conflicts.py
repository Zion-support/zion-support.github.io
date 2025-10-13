#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/TSX files by keeping the newer version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in {file_path}")
        
        # Remove all merge conflict markers and keep the content after =======
        # This keeps the newer version (after =======)
        lines = content.split('\n')
        new_lines = []
        skip_until_equals = False
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_equals = True
                continue
            elif line.strip() == '=======':
                skip_until_equals = False
                continue
            elif line.strip().startswith('>>>>>>> cursor'):
                skip_until_end = False
                continue
            elif skip_until_equals or skip_until_end:
                continue
            else:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix merge conflicts in all TSX files"""
    # Find all TSX files
    tsx_files = glob.glob('**/*.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
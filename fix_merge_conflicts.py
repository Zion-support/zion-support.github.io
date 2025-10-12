#!/usr/bin/env python3
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
        
        # Split content by merge conflict markers
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                skip_until_end = True
                continue
            elif line.startswith('======='):
                continue
            elif line.startswith('>>>>>>> '):
                skip_until_end = False
                continue
            elif not skip_until_end:
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
    """Fix merge conflicts in all relevant files"""
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()
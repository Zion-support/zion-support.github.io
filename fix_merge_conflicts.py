#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the HEAD version"""
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
        
        for i, line in enumerate(lines):
            if line.startswith('<<<<<<< HEAD'):
                skip_until_end = False
                continue
            elif line.startswith('======='):
                skip_until_end = True
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
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.css',
        '**/*.md'
    ]
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
            
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
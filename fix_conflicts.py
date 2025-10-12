#!/usr/bin/env python3
"""
Script to fix merge conflicts in the application files
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
        
        print(f"Fixing conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the HEAD version
        # This is a simple approach - keep everything before ======= and after >>>>>>> cursor/...
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                skip_until_end = False
                continue
            elif line.strip().startswith('======='):
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>> cursor/'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates and filter out .original files
    files_to_fix = list(set([f for f in files_to_fix if not f.endswith('.original')]))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
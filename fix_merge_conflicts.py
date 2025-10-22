#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/JSX files
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
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the HEAD version
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [a-f0-9]+'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JSX files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_count += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript/TSX files
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
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the HEAD version (first part)
        # Pattern to match merge conflicts
        conflict_pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\s*\n'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?\n', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'=======.*?\n', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'>>>>>>> [^\n]+.*?\n', '', fixed_content, flags=re.DOTALL)
        
        # Clean up multiple newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
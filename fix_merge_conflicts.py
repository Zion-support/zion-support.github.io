#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript/JavaScript files
by choosing the HEAD version and cleaning up conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by choosing HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        
        # Replace conflicts with HEAD version
        fixed_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n', '', fixed_content)
        fixed_content = re.sub(r'=======\n', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n', '', fixed_content)
        
        # Clean up multiple empty lines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        if content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JavaScript files."""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.js', 
        'src/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.js',
        'components/**/*.jsx',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()
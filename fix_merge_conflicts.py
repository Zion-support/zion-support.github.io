#!/usr/bin/env python3
"""
Script to automatically fix merge conflicts in the codebase by removing conflict markers
and keeping the most recent version (after the last =======).
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove all merge conflict markers and keep the last version
        # This pattern matches from <<<<<<< HEAD to >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*'
        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Remove any remaining <<<<<<< HEAD markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        
        # Remove any remaining ======= markers
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        
        # Remove any remaining >>>>>>> branch-name markers
        content = re.sub(r'>>>>>>> [^\n]*\n?', '', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.css',
        '**/*.html',
        '**/*.md'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and dist directories
            if 'node_modules' in file_path or 'dist' in file_path or '.git' in file_path:
                continue
                
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
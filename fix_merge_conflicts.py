#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping the appropriate content.
This script will:
1. Find all files with merge conflict markers
2. Remove the conflict markers and keep the content after =======
3. Handle cases where there might be multiple conflict sections
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
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]*'
        
        # Replace conflict blocks with the content after =======
        def replace_conflict(match):
            # Get the content after =======
            after_equals = match.group(1)
            return after_equals
        
        # Apply the replacement
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?\n', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'=======.*?\n', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>> [^\n]*\n', '', new_content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        total_files += len(files)
        
        for file_path in files:
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
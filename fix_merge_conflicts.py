#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version
(after =======) and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+'
        
        # Replace conflicts with the newer version (after =======)
        def replace_conflict(match):
            newer_content = match.group(1)
            return newer_content.strip()
        
        # Apply the replacement
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be incomplete conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'>>>>>>> [^\n]+', '', new_content)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'^<<<<<<< HEAD.*$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^=======.*$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^>>>>>>> .*$', '', new_content, flags=re.MULTILINE)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all relevant files."""
    # Focus on the main application files first
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
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
    
    print(f"\nFixed merge conflicts in {fixed_count}/{total_count} files")

if __name__ == "__main__":
    main()
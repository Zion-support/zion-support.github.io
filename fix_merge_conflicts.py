#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def replace_conflict(match):
            # Choose the version after ======= (newer version)
            return match.group(2) + '\n'
        
        # Replace all merge conflicts
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n', '', new_content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed merge conflicts in {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript and TSX files
    patterns = ['**/*.ts', '**/*.tsx']
    files = []
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
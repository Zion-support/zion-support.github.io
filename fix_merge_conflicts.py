#!/usr/bin/env python3
"""
Script to fix merge conflicts in the codebase by removing conflict markers
and keeping the appropriate content.
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
        
        # Remove merge conflict markers and keep the content after =======
        # This pattern matches: <<<<<<< HEAD ... ======= ... >>>>>>> hash
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [a-f0-9]+'
        matches = re.findall(pattern, content, re.DOTALL)
        
        if matches:
            # Replace the entire conflict with the content after =======
            content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        else:
            # Fallback: remove all conflict markers
            content = re.sub(r'<<<<<<< HEAD.*?=======', '', content, flags=re.DOTALL)
            content = re.sub(r'>>>>>>> [a-f0-9]+', '', content)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [a-f0-9]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [a-f0-9]+', '', content, flags=re.DOTALL)
        
        # Clean up extra whitespace and empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Get all TypeScript and TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'utils/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    total_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            total_count += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
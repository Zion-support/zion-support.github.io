#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the HEAD version
and removing conflict markers.
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
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content + '\n'
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be extra whitespace or different patterns
        new_content = re.sub(r'<<<<<<< HEAD\n', '', new_content)
        new_content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+\n', '', new_content, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Get all files with merge conflicts
    files_with_conflicts = []
    
    # Search for common file extensions
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json', '*.md', '*.css', '*.html']
    
    for ext in extensions:
        files_with_conflicts.extend(glob.glob(f'**/{ext}', recursive=True))
    
    fixed_count = 0
    total_conflicts = 0
    
    for file_path in files_with_conflicts:
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        total_conflicts += 1
                        if fix_merge_conflicts(file_path):
                            fixed_count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nFixed {fixed_count} out of {total_conflicts} files with merge conflicts")

if __name__ == "__main__":
    main()
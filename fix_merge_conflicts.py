#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version (after =======)
and removing conflict markers.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]*'
        
        # Replace conflicts with the content after ======= (the newer version)
        def replace_conflict(match):
            newer_content = match.group(1)
            # Clean up any remaining conflict markers
            newer_content = re.sub(r'<<<<<<< HEAD.*?=======', '', newer_content, flags=re.DOTALL)
            newer_content = re.sub(r'>>>>>>> [^\n]*', '', newer_content)
            return newer_content.strip()
        
        # Apply the fix
        fixed_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Additional cleanup for any remaining markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?=======', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'>>>>>>> [^\n]*', '', fixed_content)
        
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
    """Main function to fix all merge conflicts."""
    # Get all files with merge conflicts
    files_with_conflicts = []
    
    # Check common file extensions
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json', '*.md', '*.css', '*.html']
    
    for ext in extensions:
        files_with_conflicts.extend(glob.glob(f'**/{ext}', recursive=True))
    
    # Also check specific directories
    specific_dirs = ['app', '__tests__', 'components', 'hooks', 'utils', 'services']
    for dir_name in specific_dirs:
        for ext in extensions:
            files_with_conflicts.extend(glob.glob(f'{dir_name}/**/{ext}', recursive=True))
    
    # Remove duplicates and sort
    files_with_conflicts = sorted(list(set(files_with_conflicts)))
    
    print(f"Found {len(files_with_conflicts)} files to check for merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if os.path.exists(file_path):
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
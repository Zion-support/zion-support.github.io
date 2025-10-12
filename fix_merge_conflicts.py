#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping the appropriate content.
This script will:
1. Find all files with merge conflict markers
2. Remove conflict markers and keep the content between HEAD markers
3. Clean up any remaining syntax issues
"""

import os
import re
import glob

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep HEAD content
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> origin/main
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> origin/main'
        content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be different branch names
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> .*'
        content = re.sub(pattern2, r'\1', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< .*?\n', '', content)
        content = re.sub(r'=======.*?\n', '', content)
        content = re.sub(r'>>>>>>> .*?\n', '', content)
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflicts"""
    files_with_conflicts = []
    
    # Common file extensions to check
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json', '*.css', '*.md']
    
    for ext in extensions:
        for file_path in glob.glob(f'**/{ext}', recursive=True):
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            files_with_conflicts.append(file_path)
                except:
                    continue
    
    return files_with_conflicts

def main():
    print("Starting merge conflict resolution...")
    
    # Find all files with conflicts
    files_with_conflicts = find_files_with_conflicts()
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Check for any remaining conflicts
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()
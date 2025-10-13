#!/usr/bin/env python3
"""
Advanced script to fix merge conflicts in the codebase.
This script handles various merge conflict patterns and ensures clean resolution.
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(content):
    """Clean merge conflicts from content using multiple strategies."""
    
    # Strategy 1: Standard merge conflict pattern
    pattern1 = r'\n(.*?)\n\n(.*?)\n    content = re.sub(pattern1, r'\2', content, flags=re.DOTALL)
    
    # Strategy 2: Alternative pattern with different spacing
    pattern2 = r'\s*\n(.*?)\n\s*\n(.*?)\n>>>>>>>\s*[^\n]+'
    content = re.sub(pattern2, r'\2', content, flags=re.DOTALL)
    
    # Strategy 3: Handle cases where there might be multiple conflicts in one file
    pattern3 = r'<<<<<<< [^\n]+\n(.*?)\n\n(.*?)\n    content = re.sub(pattern3, r'\2', content, flags=re.DOTALL)
    
    # Strategy 4: Handle incomplete merge conflicts
    pattern4 = r'<<<<<<< [^\n]+\n(.*?)\n'
    content = re.sub(pattern4, r'\1', content, flags=re.DOTALL)
    
    # Strategy 5: Handle remaining  markers
    pattern5 = r'\n(.*?)\n    content = re.sub(pattern5, r'\1', content, flags=re.DOTALL)
    
    # Strategy 6: Remove any remaining conflict markers
    content = re.sub(r'<<<<<<< [^\n]+', '', content)
    content = re.sub(r'', '', content)
    content = re.sub(r'    
    # Clean up extra whitespace and empty lines
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    content = re.sub(r'^\s*\n+', '', content)
    content = re.sub(r'\n\s*$', '\n', content)
    
    return content

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '' not in content and '<<<<<<<' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Clean the content
        cleaned_content = clean_merge_conflicts(content)
        
        # Verify the content is different (i.e., conflicts were actually removed)
        if cleaned_content == content:
            print(f"No changes made to {file_path}")
            return False
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflicts."""
    files_with_conflicts = []
    
    # Search in app directory and root directory
    search_paths = ['/workspace/app', '/workspace']
    
    for search_path in search_paths:
        if os.path.exists(search_path):
            for ext in ['*.tsx', '*.ts', '*.js', '*.jsx']:
                pattern = os.path.join(search_path, '**', ext)
                for file_path in glob.glob(pattern, recursive=True):
                    # Skip node_modules and other excluded directories
                    if 'node_modules' in file_path or '.git' in file_path:
                        continue
                    
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                            if '<<<<<<<' in content or '' in content or '>>>>>>>' in content:
                                files_with_conflicts.append(file_path)
                    except:
                        continue
    
    return files_with_conflicts

def main():
    """Main function to fix all merge conflicts."""
    print("Finding files with merge conflicts...")
    files_with_conflicts = find_files_with_conflicts()
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Verify no more conflicts exist
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase.
This script removes merge conflict markers and keeps the appropriate content.
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
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        def resolve_conflict(match):
            head_content = match.group(1).strip()
            branch_content = match.group(2).strip()
            
            # If both sides have content, prefer the branch content (usually more recent)
            if head_content and branch_content:
                return branch_content + '\n'
            elif head_content:
                return head_content + '\n'
            elif branch_content:
                return branch_content + '\n'
            else:
                return ''
        
        # Replace merge conflicts
        new_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Also handle simple cases where there are just conflict markers without content
        new_content = re.sub(r'<<<<<<< HEAD\n=======\n>>>>>>> [^\n]+\n', '', new_content)
        new_content = re.sub(r'<<<<<<< HEAD\n=======\n', '', new_content)
        new_content = re.sub(r'=======\n>>>>>>> [^\n]+\n', '', new_content)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n', '', new_content)
        new_content = re.sub(r'=======\n', '', new_content)
        new_content = re.sub(r'>>>>>>> [^\n]+\n', '', new_content)
        
        # Write the fixed content back
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            print(f"No conflicts found in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all relevant files."""
    # Get all TypeScript/JavaScript files in the app directory
    app_files = glob.glob('/workspace/app/**/*.tsx', recursive=True)
    app_files.extend(glob.glob('/workspace/app/**/*.ts', recursive=True))
    
    # Also check other important directories
    other_files = glob.glob('/workspace/**/*.tsx', recursive=True)
    other_files.extend(glob.glob('/workspace/**/*.ts', recursive=True))
    other_files.extend(glob.glob('/workspace/**/*.js', recursive=True))
    other_files.extend(glob.glob('/workspace/**/*.jsx', recursive=True))
    
    # Filter out backup and original files
    all_files = [f for f in other_files if not any(x in f for x in ['.original', 'backup', 'node_modules', '.git'])]
    
    fixed_count = 0
    total_files = len(all_files)
    
    print(f"Processing {total_files} files...")
    
    for file_path in all_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files.")

if __name__ == "__main__":
    main()
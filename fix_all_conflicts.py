#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
and removing conflict markers from all files.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Use regex to remove merge conflict markers and keep HEAD version
        # Pattern to match from <<<<<<< HEAD to ======= (keep this part)
        # and from ======= to >>>>>>> (remove this part)
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]*\n?'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]*\n?', '', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Find all TypeScript/JavaScript files in the app directory
    app_dir = Path('/workspace/app')
    files = list(app_dir.rglob('*.tsx')) + list(app_dir.rglob('*.ts')) + list(app_dir.rglob('*.js')) + list(app_dir.rglob('*.jsx'))
    
    fixed_count = 0
    total_conflicts = 0
    
    print(f"Found {len(files)} files to check...")
    
    for file_path in files:
        if file_path.is_file():
            # Check if file has conflicts
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        total_conflicts += 1
                        if fix_merge_conflicts(file_path):
                            fixed_count += 1
                            print(f"Fixed: {file_path}")
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Files with conflicts: {total_conflicts}")
    print(f"Files fixed: {fixed_count}")
    print(f"Files failed: {total_conflicts - fixed_count}")

if __name__ == "__main__":
    main()
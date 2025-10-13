#!/usr/bin/env python3
"""
Script to fix merge conflicts by keeping the HEAD version and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts in one file
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        # Clean up any extra newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'hooks/**/*.ts',
        'hooks/**/*.tsx',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check for merge conflicts...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has merge conflicts
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    if fix_merge_conflicts(file_path):
                        fixed_count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files.")

if __name__ == "__main__":
    main()
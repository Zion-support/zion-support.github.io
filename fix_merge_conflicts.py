#!/usr/bin/env python3
"""
Script to fix merge conflicts by removing conflict markers and keeping the appropriate content.
This script will:
1. Remove all merge conflict markers (<<<<<<< HEAD, =======, >>>>>>> branch-name)
2. Keep the content from the HEAD branch (the first part before =======)
3. Handle special cases for different file types
"""

import os
import re
import glob

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep HEAD content
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\s*(.*?)\s*=======.*?>>>>>>> [^\n]*'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\s*', '', fixed_content)
        fixed_content = re.sub(r'=======.*?>>>>>>> [^\n]*', '', fixed_content, flags=re.DOTALL)
        
        # Clean up extra whitespace and empty lines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all files."""
    # File patterns to check
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.md',
        '**/*.css',
        '**/*.html'
    ]
    
    fixed_files = []
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            total_files += 1
            if fix_merge_conflicts_in_file(file_path):
                fixed_files.append(file_path)
    
    print(f"\nFixed merge conflicts in {len(fixed_files)} files out of {total_files} checked.")
    
    if fixed_files:
        print("\nFixed files:")
        for file_path in fixed_files:
            print(f"  - {file_path}")

if __name__ == "__main__":
    main()
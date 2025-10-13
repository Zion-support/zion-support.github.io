#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript files.
This script keeps the newer version (after =======) and removes conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) != 4:  # Should have: [before, old_content, new_content, after]
            print(f"Warning: Unexpected conflict format in {file_path}")
            return False
        
        # Keep the newer version (after =======)
        new_content = parts[0] + parts[2] + parts[3]
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>>.*?\n', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'=======.*?>>>>>>>.*?\n', '', new_content, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript files."""
    # Find all TypeScript files in the app directory
    pattern = "app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    total_conflicts = 0
    
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
        total_conflicts += 1
    
    print(f"\nProcessed {total_conflicts} files")
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
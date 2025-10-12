#!/usr/bin/env python3
"""
Script to fix merge conflicts by keeping the HEAD version and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content by merge conflict markers
        lines = content.split('\n')
        new_lines = []
        in_head = False
        in_conflict = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_head = True
                in_conflict = True
                continue
            elif line.strip() == '=======':
                in_head = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                continue
            elif in_conflict and not in_head:
                # Skip lines in the other branch
                continue
            else:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip .original files
            if '.original' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()
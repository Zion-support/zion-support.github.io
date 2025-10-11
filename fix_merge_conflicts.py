#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the latest version
and removing all conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping the latest version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content into lines
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        in_conflict = False
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                in_conflict = True
                skip_until_end = False
                continue
            elif line.strip().startswith('======='):
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                skip_until_end = False
                continue
            elif in_conflict and skip_until_end:
                # Skip lines between ======= and >>>>>>> (older version)
                continue
            elif in_conflict and not skip_until_end:
                # Keep lines between <<<<<<< and ======= (newer version)
                new_lines.append(line)
            else:
                # Keep all other lines
                new_lines.append(line)
        
        # Write the cleaned content back
        cleaned_content = '\n'.join(new_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Get all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js',
        '**/*.json'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next']):
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files with merge conflicts")

if __name__ == "__main__":
    main()
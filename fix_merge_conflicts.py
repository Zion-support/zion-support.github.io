#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the newer version (after     try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '' not in content:
            return False
        
        # Split by merge conflict markers
        parts = re.split(r'.*?\n(.*?)\n    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
                print(f"Fixed merge conflicts in: {file_path}")
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files with merge conflicts")

if __name__ == "__main__":
    main()
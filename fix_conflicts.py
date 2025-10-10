#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> ...
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n', r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> [^\n]+.*?\n', '', content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules
            if 'node_modules' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
                print(f"Fixed conflicts in: {file_path}")
    
    print(f"Processed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()
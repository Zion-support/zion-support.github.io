#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from files
"""
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+\s*\n'
        
        # Replace with just the HEAD version (first capture group)
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be just conflict markers without proper structure
        cleaned_content = re.sub(r'<<<<<<< HEAD\s*\n.*?\n=======\s*\n.*?\n>>>>>>> [^\n]+\s*\n', '', cleaned_content, flags=re.DOTALL)
        
        # Remove any remaining isolated conflict markers
        cleaned_content = re.sub(r'^<<<<<<< HEAD\s*$', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'^=======\s*$', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'^>>>>>>> [^\n]+\s*$', '', cleaned_content, flags=re.MULTILINE)
        
        # Clean up multiple consecutive empty lines
        cleaned_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', cleaned_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Focus on main application files first
    main_files = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts',
        'hooks/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    cleaned_count = 0
    error_count = 0
    
    for pattern in main_files:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                print(f"Cleaning {file_path}...")
                if clean_merge_conflicts(file_path):
                    cleaned_count += 1
                else:
                    error_count += 1
    
    print(f"\nCleaned {cleaned_count} files successfully")
    print(f"Errors in {error_count} files")

if __name__ == "__main__":
    main()
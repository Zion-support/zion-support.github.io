#!/usr/bin/env python3
"""
Script to clean up branch name artifacts that got mixed into the code
"""

import os
import re
import glob

def clean_branch_artifacts(file_path):
    """Clean branch name artifacts from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match branch names that got mixed into code
        # Look for patterns like "cursor/fix-errors-and-merge-to-main-0ca7" at end of lines
        patterns = [
            r'\s+cursor/[a-zA-Z0-9\-]+$',  # Branch names at end of lines
            r'\s+[a-zA-Z0-9\-]+/[a-zA-Z0-9\-]+$',  # Other branch patterns
            r'cursor/[a-zA-Z0-9\-]+\s*$',  # Branch names at end of lines without leading space
        ]
        
        original_content = content
        for pattern in patterns:
            content = re.sub(pattern, '', content, flags=re.MULTILINE)
        
        # Also clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]*', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]*', '', content, flags=re.DOTALL)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned branch artifacts in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    """Main function to clean branch artifacts from all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts',
        'hooks/**/*.ts',
        'utils/**/*.ts'
    ]
    
    cleaned_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_count += 1
                if clean_branch_artifacts(file_path):
                    cleaned_count += 1
    
    print(f"\nCleaned branch artifacts in {cleaned_count} out of {total_count} files")

if __name__ == "__main__":
    main()
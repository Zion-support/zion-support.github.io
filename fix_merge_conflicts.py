#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version
and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>.*?(?=\n|$)'
        
        # Replace conflict blocks with the content after =======
        def replace_conflict(match):
            # Get the content after =======
            new_content = match.group(1)
            # Clean up any extra whitespace
            return new_content.strip()
        
        # Apply the replacement
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?(?=\n|$)', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>>.*?(?=\n|$)', '', new_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        new_content = re.sub(r'^<<<<<<< HEAD.*?$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^=======.*?$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^>>>>>>>.*?$', '', new_content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
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
        '__tests__/**/*.ts',
        'hooks/**/*.ts',
        'hooks/**/*.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()
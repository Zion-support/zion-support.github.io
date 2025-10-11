#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version.
This script will process all TypeScript/JavaScript files and remove merge conflict markers.
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
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflict blocks
        # This will match from <<<<<<< HEAD to ======= and keep everything before =======
        # Then remove the ======= to >>>>>>> branch-name part
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        
        # Replace merge conflict blocks with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts in one file
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        # Clean up any extra newlines
        fixed_content = re.sub(r'\n\n\n+', '\n\n', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Find all TypeScript and JavaScript files
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts',
        './app/**/*.js',
        './app/**/*.jsx',
        './components/**/*.tsx',
        './components/**/*.ts',
        './components/**/*.js',
        './components/**/*.jsx',
        './*.tsx',
        './*.ts',
        './*.js',
        './*.jsx'
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
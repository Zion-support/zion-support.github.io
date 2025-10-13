#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the latest version
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
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<<.*?\n(.*?)\n=======\n(.*?)\n>>>>>>>.*?\n'
        
        # Replace conflicts with the latest version (after =======)
        def replace_conflict(match):
            # Keep the version after ======= (latest version)
            return match.group(2) + '\n'
        
        # Apply the replacement
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be incomplete conflict markers
        # Remove any remaining conflict markers
        new_content = re.sub(r'^<<<<<<<.*?\n', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^=======.*?\n', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^>>>>>>>.*?\n', '', new_content, flags=re.MULTILINE)
        
        # Clean up any extra newlines
        new_content = re.sub(r'\n\n\n+', '\n\n', new_content)
        
        # Only write if content changed
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.js',
        'components/**/*.jsx',
        'utils/**/*.ts',
        'utils/**/*.js',
        'hooks/**/*.ts',
        'hooks/**/*.js',
        'scripts/**/*.js',
        'scripts/**/*.cjs'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
                    print(f"Fixed merge conflicts in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()
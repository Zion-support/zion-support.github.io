#!/usr/bin/env python3
"""
Script to clean up merge conflict remnants in TypeScript files.
"""

import os
import re
import glob

def cleanup_merge_remnants(file_path):
    """Clean up merge conflict remnants in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict branch names
        content = re.sub(r' cursor/fix-errors-and-merge-to-main-e61d', '', content)
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'.*?>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        
        # Clean up any orphaned text
        content = re.sub(r'\s+$', '', content, flags=re.MULTILINE)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Cleaned merge remnants in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript files."""
    # Find all TypeScript files in the app directory
    pattern = "app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    cleaned_count = 0
    
    for file_path in files:
        if cleanup_merge_remnants(file_path):
            cleaned_count += 1
    
    print(f"\nCleaned merge remnants in {cleaned_count} files")

if __name__ == "__main__":
    main()
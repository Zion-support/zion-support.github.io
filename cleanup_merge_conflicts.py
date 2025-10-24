#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from files.
This script will resolve merge conflicts by keeping the latest version (after the last =======).
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(content):
    """Clean merge conflict markers from file content."""
    # Pattern to match merge conflict markers
    conflict_pattern = r'<<<<<<<.*?\n(.*?)\n=======.*?\n(.*?)\n>>>>>>>.*?\n'
    
    def replace_conflict(match):
        # Get the content after the last =======
        after_equals = match.group(2)
        return after_equals
    
    # Replace all merge conflicts
    cleaned = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
    
    # Also handle cases where there might be multiple conflict markers in sequence
    # Remove any remaining conflict markers
    cleaned = re.sub(r'<<<<<<<.*?\n', '', cleaned, flags=re.DOTALL)
    cleaned = re.sub(r'=======.*?\n', '', cleaned, flags=re.DOTALL)
    cleaned = re.sub(r'>>>>>>>.*?\n', '', cleaned, flags=re.DOTALL)
    
    return cleaned

def process_file(file_path):
    """Process a single file to remove merge conflicts."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
            print(f"Processing: {file_path}")
            cleaned_content = clean_merge_conflicts(content)
            
            # Write back the cleaned content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            print(f"✓ Cleaned: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
    ]
    
    files_processed = 0
    files_cleaned = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_cleaned += 1
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files cleaned: {files_cleaned}")

if __name__ == "__main__":
    main()
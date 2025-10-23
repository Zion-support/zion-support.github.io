#!/usr/bin/env python3
"""
Fix the unterminated string literals caused by aggressive quote replacement
"""

import os
import re
import glob

def fix_quotes_in_file(file_path):
    """Fix quotes in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix the problematic quote replacements
        # Replace &quot; back to " in JSX attributes and strings
        content = re.sub(r'&quot;', '"', content)
        content = re.sub(r'&apos;', "'", content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed quotes in: {file_path}")
            return True
        else:
            print(f"No quote fixes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Find all TypeScript/TSX files
    pattern = "src/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    # Also include app directory
    app_pattern = "app/**/*.tsx"
    app_files = glob.glob(app_pattern, recursive=True)
    files.extend(app_files)
    
    print(f"Found {len(files)} files to process")
    
    fixed_count = 0
    for file_path in files:
        if fix_quotes_in_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed quotes in {fixed_count} files out of {len(files)} total files")

if __name__ == "__main__":
    main()
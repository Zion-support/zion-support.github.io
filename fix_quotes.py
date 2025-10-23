#!/usr/bin/env python3
"""
Script to fix escaped quotes in JavaScript strings that are breaking syntax.
"""

import os
import re
import glob

def fix_file(file_path):
    """Fix escaped quotes in JavaScript strings."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix escaped quotes in JavaScript strings (not JSX content)
        # Look for patterns like: '&apos;text&apos;' or "&quot;text&quot;"
        content = re.sub(r"'&apos;([^']*)&apos;'", r"'\1'", content)
        content = re.sub(r'"&quot;([^"]*)&quot;"', r'"\1"', content)
        
        # Fix any remaining escaped quotes in string literals
        content = re.sub(r"&apos;", "'", content)
        content = re.sub(r"&quot;", '"', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed quotes: {file_path}")
            return True
        else:
            print(f"No quote fixes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files."""
    # Find all TypeScript/TSX files
    patterns = [
        'src/**/*.tsx',
        'app/**/*.tsx',
        'components/**/*.tsx',
        '**/*.tsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_fix = list(set(files_to_fix))
    
    print(f"Found {len(files_to_fix)} files to check...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} files checked.")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to restore JavaScript syntax by fixing escaped quotes in JavaScript strings.
"""

import os
import re
import glob

def fix_file(file_path):
    """Restore JavaScript syntax by fixing escaped quotes."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Restore all escaped quotes to normal quotes
        content = content.replace('&apos;', "'")
        content = content.replace('&quot;', '"')
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Restored JS syntax: {file_path}")
            return True
        else:
            print(f"No JS syntax restoration needed: {file_path}")
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
    
    print(f"\nRestored {fixed_count} files out of {len(files_to_fix)} files checked.")

if __name__ == "__main__":
    main()
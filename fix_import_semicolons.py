#!/usr/bin/env python3
"""
Script to fix semicolon errors in import statements.
"""

import os
import re
import glob

def fix_import_semicolons(file_path):
    """Fix semicolon errors in import statements."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove semicolons from import statements
        content = re.sub(r"import\s+React\s+from\s+['\"]react['\"];", "import React from 'react'", content)
        content = re.sub(r"import\s+React\s+from\s+['\"]react['\"]", "import React from 'react'", content)
        
        # Fix other import patterns
        content = re.sub(r"import\s+([^;]+);", r"import \1", content)
        
        # Fix any double semicolons
        content = re.sub(r';;+', ';', content)
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed import semicolons in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix import semicolons."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip .original files
            if '.original' in file_path:
                continue
                
            files_processed += 1
            if fix_import_semicolons(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed import semicolons in {files_fixed} files")

if __name__ == "__main__":
    main()
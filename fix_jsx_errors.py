#!/usr/bin/env python3
"""
Script to fix common JSX parsing errors
"""

import os
import re
import glob

def fix_jsx_errors(file_path):
    """Fix JSX errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX fragments - remove standalone <>
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix malformed closing tags - remove standalone </>
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX fragments in the middle of lines
        content = re.sub(r'\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*', '', content, flags=re.MULTILINE)
        
        # Fix missing spaces in className attributes
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
        
        # Fix missing spaces in other attributes
        content = re.sub(r'(\w)([A-Z])', r'\1 \2', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix JSX errors in all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if fix_jsx_errors(file_path):
                files_fixed += 1
                print(f"Fixed JSX errors in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed JSX errors in {files_fixed} files")

if __name__ == "__main__":
    main()
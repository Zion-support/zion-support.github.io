#!/usr/bin/env python3
"""
Fix syntax errors by reverting problematic entity replacements and fixing other issues
"""

import os
import re
import glob

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Revert all entity replacements that are causing syntax errors
        content = re.sub(r'&apos;', "'", content)
        content = re.sub(r'&quot;', '"', content)
        
        # Fix double semicolon in imports
        content = re.sub(r"from 'lucide-react';;", "from 'lucide-react';", content)
        
        # Fix the specific const issue
        content = re.sub(r'let\s+clsEntries\s*=', 'const clsEntries =', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
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
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files)} total files")

if __name__ == "__main__":
    main()
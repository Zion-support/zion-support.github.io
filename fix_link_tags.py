#!/usr/bin/env python3
"""
Fix Link tag issues in all page files.
"""

import os
import glob
import re

def fix_link_tags_in_file(file_path):
    """Fix Link tag issues in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix the specific pattern where Link is opened but closed with </a>
        pattern = r'(<Link[^>]*>)(.*?)(</a>)'
        replacement = r'\1\2</Link>'
        
        fixed_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed Link tags in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if fix_link_tags_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed Link tags in {fixed_count} files")

if __name__ == "__main__":
    main()
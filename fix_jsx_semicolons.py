#!/usr/bin/env python3
"""
Fix semicolon issues in JSX files.
"""

import os
import re
from pathlib import Path

def fix_jsx_semicolons(content):
    """Fix semicolons in JSX content."""
    # Fix semicolons in JSX text content
    content = re.sub(r'([^;])\s*;\s*</', r'\1</', content)
    content = re.sub(r'([^;])\s*;\s*<br', r'\1<br', content)
    content = re.sub(r'([^;])\s*;\s*<span', r'\1<span', content)
    content = re.sub(r'([^;])\s*;\s*<div', r'\1<div', content)
    content = re.sub(r'([^;])\s*;\s*<h[1-6]', r'\1<h', content)
    content = re.sub(r'([^;])\s*;\s*<p', r'\1<p', content)
    
    # Fix semicolons in JSX attributes
    content = re.sub(r'className="([^"]*);"', r'className="\1"', content)
    content = re.sub(r'id="([^"]*);"', r'id="\1"', content)
    
    return content

def process_file(file_path):
    """Process a single file to fix JSX semicolons."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_jsx_semicolons(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    workspace = Path('/workspace')
    
    # File patterns to process
    patterns = [
        'app/**/*.tsx',
        'app/**/*.jsx',
        'src/**/*.tsx',
        'src/**/*.jsx',
    ]
    
    total_files = 0
    fixed_files = 0
    
    for pattern in patterns:
        for file_path in workspace.glob(pattern):
            if file_path.is_file():
                total_files += 1
                if process_file(file_path):
                    fixed_files += 1
    
    print(f"\nProcessed {total_files} files, fixed {fixed_files} files")

if __name__ == "__main__":
    main()
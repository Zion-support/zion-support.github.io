#!/usr/bin/env python3
"""
Script to fix all unescaped entities in React files.
"""

import os
import re
from pathlib import Path

def fix_unescaped_entities(file_path):
    """Fix unescaped entities in JSX content."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix apostrophes in text content (but not in imports or attributes)
    # Look for patterns where apostrophes appear in text content between JSX tags
    content = re.sub(r'>([^<]*?)\'([^<]*?)<', r'>\1&apos;\2<', content)
    
    # Fix quotes in text content
    content = re.sub(r'>([^<]*?)"([^<]*?)<', r'>\1&quot;\2<', content)
    
    # Write the fixed content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Main function to fix all unescaped entities."""
    
    # Find all React component files
    component_files = []
    
    # Search in app directory
    app_dir = Path('/workspace/app')
    if app_dir.exists():
        component_files.extend(app_dir.rglob('*.tsx'))
    
    # Search in src directory
    src_dir = Path('/workspace/src')
    if src_dir.exists():
        component_files.extend(src_dir.rglob('*.tsx'))
    
    fixed_count = 0
    
    for file_path in component_files:
        try:
            if fix_unescaped_entities(str(file_path)):
                fixed_count += 1
                print(f"Fixed unescaped entities in: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed unescaped entities in {fixed_count} files")

if __name__ == '__main__':
    main()
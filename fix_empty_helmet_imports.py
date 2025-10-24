#!/usr/bin/env python3
"""
Script to fix empty Helmet imports in React files.
"""

import os
import re
from pathlib import Path

def fix_empty_helmet_imports(file_path):
    """Fix empty Helmet imports in a file."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix empty imports from react-helmet-async
    content = re.sub(r"import\s*{\s*}\s*from\s*'react-helmet-async'", "import { Helmet } from 'react-helmet-async'", content)
    
    # Write the fixed content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Main function to fix all empty Helmet imports."""
    
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
            if fix_empty_helmet_imports(str(file_path)):
                fixed_count += 1
                print(f"Fixed empty Helmet imports in: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed empty Helmet imports in {fixed_count} files")

if __name__ == '__main__':
    main()
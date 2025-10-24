#!/usr/bin/env python3
"""
Script to fix remaining quote entities in React files.
"""

import os
import re
from pathlib import Path

def fix_remaining_quotes(file_path):
    """Fix remaining quote entities in a file."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix any remaining &quot; entities
    content = re.sub(r'&quot;', '"', content)
    
    # Write the fixed content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Main function to fix all remaining quote entities."""
    
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
            if fix_remaining_quotes(str(file_path)):
                fixed_count += 1
                print(f"Fixed remaining quotes in: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed remaining quotes in {fixed_count} files")

if __name__ == '__main__':
    main()
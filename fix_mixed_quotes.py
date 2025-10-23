#!/usr/bin/env python3
"""
Script to fix mixed quote issues in React files.
"""

import os
import re
from pathlib import Path

def fix_mixed_quotes(file_path):
    """Fix mixed quote issues in a file."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix mixed quotes in object properties
    # Pattern: title: &apos;text',
    content = re.sub(r"(\w+):\s*&apos;([^&]+)',", r"\1: '\2',", content)
    
    # Pattern: description: 'text',
    content = re.sub(r"(\w+):\s*'([^']+)',", r"\1: '\2',", content)
    
    # Fix mixed quotes in array elements
    # Pattern: ['text', 'text']
    content = re.sub(r"\[\s*'([^']+)',\s*'([^']+)'\s*\]", r"['\1', '\2']", content)
    
    # Fix any remaining mixed patterns
    content = re.sub(r"&apos;([^&]+)',", r"'\1',", content)
    
    # Write the fixed content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Main function to fix all mixed quote issues."""
    
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
            if fix_mixed_quotes(str(file_path)):
                fixed_count += 1
                print(f"Fixed mixed quotes in: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed mixed quotes in {fixed_count} files")

if __name__ == '__main__':
    main()
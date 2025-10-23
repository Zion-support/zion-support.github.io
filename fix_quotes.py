#!/usr/bin/env python3
"""
Script to fix incorrectly escaped quotes in React files.
"""

import os
import re
from pathlib import Path

def fix_quotes(file_path):
    """Fix incorrectly escaped quotes in a file."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix 'use client' directive
    content = re.sub(r"&apos;use client&apos;", "'use client'", content)
    
    # Fix import statements
    content = re.sub(r"from &apos;([^&]+)&apos;", r"from '\1'", content)
    content = re.sub(r"import\s+([^{]+)\s+from\s+&apos;([^&]+)&apos;", r"import \1 from '\2'", content)
    content = re.sub(r"import\s*{\s*([^}]+)\s*}\s+from\s+&apos;([^&]+)&apos;", r"import { \1 } from '\2'", content)
    
    # Fix JSX attributes
    content = re.sub(r"&apos;([^&]+)&apos;", r"'\1'", content)
    
    # Fix string literals in JSX content (but not in attributes)
    # This is more complex, so we'll be more careful
    content = re.sub(r"&quot;([^&]+)&quot;", r'"\1"', content)
    
    # Fix any remaining &apos; in string content
    content = re.sub(r"&apos;", "'", content)
    
    # Fix any remaining &quot; in string content  
    content = re.sub(r"&quot;", '"', content)
    
    # Write the fixed content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Main function to fix all quote issues."""
    
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
            if fix_quotes(str(file_path)):
                fixed_count += 1
                print(f"Fixed quotes in: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed quotes in {fixed_count} files")

if __name__ == '__main__':
    main()
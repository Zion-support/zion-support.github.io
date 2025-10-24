#!/usr/bin/env python3
"""
Script to fix Helmet naming conflicts in React files.
"""

import os
import re
from pathlib import Path

def fix_helmet_conflicts(file_path):
    """Fix Helmet naming conflicts in a file."""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if both react-helmet-async and lucide-react Helmet are imported
    if 'from \'react-helmet-async\'' in content and 'Helmet' in content and 'from \'lucide-react\'' in content:
        # Remove Helmet from lucide-react import
        content = re.sub(r',\s*Helmet(?=\s*,|\s*})', '', content)
        content = re.sub(r'{\s*Helmet,', '{', content)
        content = re.sub(r',\s*Helmet\s*}', '}', content)
        content = re.sub(r'{\s*Helmet\s*}', '{}', content)
        
        # Clean up any empty import statements
        content = re.sub(r"import\s*{\s*}\s*from\s*'lucide-react'", '', content)
        
        # Clean up any trailing commas in lucide-react imports
        content = re.sub(r',\s*}', '}', content)
    
    # Write the fixed content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    """Main function to fix all Helmet conflicts."""
    
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
            if fix_helmet_conflicts(str(file_path)):
                fixed_count += 1
                print(f"Fixed Helmet conflicts in: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed Helmet conflicts in {fixed_count} files")

if __name__ == '__main__':
    main()
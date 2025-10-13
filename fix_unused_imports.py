#!/usr/bin/env python3
import os
import re
import glob

def fix_unused_imports(file_path):
    """Fix unused imports in TSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove unused React import if React is not used in JSX
        if 'React' in content and not re.search(r'<[A-Z]', content):
            content = re.sub(r"import React from 'react';\n?", '', content)
        
        # Remove unused Helmet import if Helmet is not used
        if 'Helmet' in content and '<Helmet>' not in content:
            content = re.sub(r"import \{ Helmet \} from 'react-helmet-async';\n?", '', content)
        
        # Remove unused Users import
        if 'Users' in content and '<Users' not in content and 'Users,' not in content:
            # Remove Users from import statements
            content = re.sub(r',\s*Users', '', content)
            content = re.sub(r'Users,\s*', '', content)
            content = re.sub(r'Users\s*,?\s*', '', content)
        
        # Clean up empty import lines
        content = re.sub(r"import \{\s*\} from '[^']+';\n?", '', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_unused_imports(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files with unused imports")

if __name__ == "__main__":
    main()
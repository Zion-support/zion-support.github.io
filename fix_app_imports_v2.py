#!/usr/bin/env python3
import os
import re
import glob

def fix_import_paths_in_file(file_path):
    """Fix import paths in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix component imports - app is at same level as src
        content = re.sub(r"from '\.\./src/components/", "from '../../src/components/", content)
        content = re.sub(r'from "\.\./src/components/', 'from "../../src/components/', content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed imports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_all_app_imports():
    """Fix import paths in all app directory pages"""
    app_pages = glob.glob('app/*/page.tsx')
    
    fixed_count = 0
    for page_path in app_pages:
        if fix_import_paths_in_file(page_path):
            fixed_count += 1
    
    print(f"\nFixed import paths in {fixed_count} files")

if __name__ == "__main__":
    fix_all_app_imports()
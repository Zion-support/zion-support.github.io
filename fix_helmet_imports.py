#!/usr/bin/env python3
import os
import re
import glob

def fix_helmet_imports(file_path):
    """Fix react-helmet-async imports in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no react-helmet-async import
        if 'react-helmet-async' not in content:
            return False
            
        print(f"Fixing react-helmet-async imports in {file_path}")
        
        # Remove react-helmet-async imports
        content = re.sub(r"import\s*{\s*Helmet\s*}\s*from\s*['\"]react-helmet-async['\"];?\s*\n?", "", content)
        
        # Add 'use client' if not present
        if not content.startswith("'use client';") and not content.startswith('"use client";'):
            content = "'use client';\n" + content
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all files with react-helmet-async imports
    pattern = "app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_helmet_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed react-helmet-async imports in {fixed_count} files")

if __name__ == "__main__":
    main()
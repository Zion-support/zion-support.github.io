#!/usr/bin/env python3
import os
import re
import glob

def fix_5g_page(file_path):
    """Fix 5G pages with numeric function names"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix function names that start with numbers
        patterns = [
            (r'export default function 5G(\w+)Page\(\)', r'export default function FiveG\1Page()'),
            (r'export default function 5g(\w+)Page\(\)', r'export default function FiveG\1Page()'),
        ]
        
        original_content = content
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed 5G page: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all 5G pages
    patterns = [
        'app/5g-*/page.tsx',
        'app/5G-*/page.tsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_5g_page(file_path):
                files_fixed += 1
    
    print(f"\nFixed {files_fixed} 5G pages")

if __name__ == "__main__":
    main()
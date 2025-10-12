#!/usr/bin/env python3
"""
Script to fix 5G pages with invalid function names
"""

import os
import glob
import re

def fix_5g_page(file_path):
    """Fix a 5G page file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix function names starting with numbers
        content = re.sub(r'export default function 5G(\w+)Page\(\)', r'export default function FiveG\1Page()', content)
        
        # Fix titles
        content = re.sub(r'<title>5G(\w+) - Zion Tech Group</title>', r'<title>5G \1 - Zion Tech Group</title>', content)
        
        # Fix descriptions
        content = re.sub(r'Professional 5g(\w+) solutions and services', r'Professional 5G \1 solutions and services', content)
        
        # Fix headings
        content = re.sub(r'<h1 className="text-4xl font-bold text-white mb-6">5G(\w+)</h1>', r'<h1 className="text-4xl font-bold text-white mb-6">5G \1</h1>', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all 5G page files"""
    # Find all 5G page files
    page_files = glob.glob('app/5g-*/page.tsx', recursive=True)
    
    fixed_count = 0
    for page_file in page_files:
        if fix_5g_page(page_file):
            print(f"Fixed: {page_file}")
            fixed_count += 1
    
    print(f"Fixed {fixed_count} 5G pages!")

if __name__ == "__main__":
    main()
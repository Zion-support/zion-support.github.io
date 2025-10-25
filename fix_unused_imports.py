#!/usr/bin/env python3
import os
import glob
import re

def fix_unused_imports(file_path):
    """Remove unused imports from page files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has unused ArrowRight or Helmet imports
        if 'ArrowRight' in content and 'ArrowRight' not in content[content.find('return'):]:
            # Remove ArrowRight from imports
            content = re.sub(r',\s*ArrowRight', '', content)
            content = re.sub(r'ArrowRight\s*,?\s*', '', content)
        
        if 'Helmet' in content and 'Helmet' not in content[content.find('return'):]:
            # Remove Helmet from imports
            content = re.sub(r',\s*Helmet', '', content)
            content = re.sub(r'Helmet\s*,?\s*', '', content)
        
        # Clean up any double commas or trailing commas
        content = re.sub(r',\s*,', ',', content)
        content = re.sub(r',\s*}', '}', content)
        content = re.sub(r'{\s*,', '{', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all page.tsx files
    page_files = glob.glob('app/**/page.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in page_files:
        if fix_unused_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed unused imports in {fixed_count} page files")

if __name__ == "__main__":
    main()
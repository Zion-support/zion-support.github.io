#!/usr/bin/env python3
import os
import re
import glob

def fix_duplicate_functions(file_path):
    """Fix duplicate function declarations in TSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove the PageTsxPage function completely
        # Look for the pattern: export default function PageTsxPage() { ... } export default function
        pattern = r'export default function PageTsxPage\(\) \{[^}]*\}\s*export default function'
        content = re.sub(pattern, 'export default function', content, flags=re.DOTALL)
        
        # Also remove standalone PageTsxPage functions
        pattern2 = r'export default function PageTsxPage\(\) \{[^}]*\}\s*'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
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
    # Find all TSX files that have PageTsxPage
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if 'PageTsxPage' in open(file_path, 'r', encoding='utf-8').read():
            if fix_duplicate_functions(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files with duplicate functions")

if __name__ == "__main__":
    main()
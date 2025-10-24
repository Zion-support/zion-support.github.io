#!/usr/bin/env python3
"""
Script to fix JSX syntax errors in TSX files.
"""

import os
import re
import glob

def fix_jsx_syntax():
    """Fix JSX syntax errors in TSX files"""
    
    # Find all TSX files
    tsx_files = []
    for root, dirs, files in os.walk('/workspace/app'):
        for file in files:
            if file.endswith('.tsx'):
                tsx_files.append(os.path.join(root, file))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix 1: Fix malformed h1 tags
            content = re.sub(
                r'<h1([^>]*?)([A-Za-z\s]+)\s*</h1>',
                r'<h1\1>\2</h1>',
                content
            )
            
            # Fix 2: Fix malformed p tags
            content = re.sub(
                r'<p([^>]*?)([A-Za-z\s]+)>\s*</p>',
                r'<p\1>\2</p>',
                content
            )
            
            # Fix 3: Fix malformed div elements with commas
            content = re.sub(
                r'<div className="([^"]*?)\s*,\s*',
                r'<div className="\1" ',
                content
            )
            
            # Fix 4: Fix missing semicolons after variable declarations
            content = re.sub(
                r'const\s+(\w+)\s*=\s*([^;]+)\n',
                r'const \1 = \2;\n',
                content
            )
            
            # Fix 5: Fix malformed JSX attributes
            content = re.sub(
                r'className="([^"]*?)\s*,\s*',
                r'className="\1" ',
                content
            )
            
            # Fix 6: Fix missing opening tags for common elements
            content = re.sub(
                r'<h1([^>]*?)([A-Za-z\s]+)\s*</h1>',
                r'<h1\1>\2</h1>',
                content
            )
            
            content = re.sub(
                r'<h2([^>]*?)([A-Za-z\s]+)\s*</h2>',
                r'<h2\1>\2</h2>',
                content
            )
            
            content = re.sub(
                r'<h3([^>]*?)([A-Za-z\s]+)\s*</h3>',
                r'<h3\1>\2</h3>',
                content
            )
            
            content = re.sub(
                r'<p([^>]*?)([A-Za-z\s]+)>\s*</p>',
                r'<p\1>\2</p>',
                content
            )
            
            # Fix 7: Fix malformed Link components
            content = re.sub(
                r'<Link href="([^"]*?)"\s*,\s*',
                r'<Link href="\1" ',
                content
            )
            
            # Fix 8: Clean up extra whitespace and newlines
            content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
            content = re.sub(r'\s+$', '', content, flags=re.MULTILINE)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed_count += 1
                print(f"Fixed JSX syntax in: {file_path}")
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Successfully fixed JSX syntax in {fixed_count} files")

if __name__ == "__main__":
    fix_jsx_syntax()
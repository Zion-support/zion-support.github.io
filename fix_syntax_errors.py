#!/usr/bin/env python3

import os
import re

def fix_file(file_path):
    """Fix common syntax errors in a file"""
    if not os.path.exists(file_path):
        return False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Fix import statements with extra commas
    content = re.sub(r'import\s+([^,]+),+(\s*})', r'import \1\2', content)
    content = re.sub(r'import\s+([^,]+),+(\s*from)', r'import \1\2', content)
    
    # Fix unterminated strings
    content = re.sub(r'import\s+([^"]+)"\s*$', r'import \1 from "next/image";', content, flags=re.MULTILINE)
    
    # Fix interface syntax
    content = re.sub(r'(\w+):\s*string;,', r'\1: string;', content)
    content = re.sub(r'(\w+):\s*string,', r'\1: string;', content)
    
    # Fix JSX fragments
    content = re.sub(r'return\s*\(\s*<>', r'return (\n    <>', content)
    
    # Fix missing React import
    if 'React' in content and 'import React' not in content:
        content = 'import React from "react";\n' + content
    
    # Fix missing closing tags
    if '<>' in content and '</>' not in content:
        content = content.replace('</div>\n  )', '</div>\n    </>\n  )')
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    
    return False

def main():
    files_to_fix = [
        'src/components/services/ServiceLandingTemplate.tsx',
        'src/pages/AllCategoriesPage.tsx',
        'src/pages/ApplicationStatusTracker.tsx',
        'src/pages/Blog.tsx',
        'src/pages/BlogPost.tsx'
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            print(f"Fixed: {file_path}")
            fixed_count += 1
        else:
            print(f"No changes needed: {file_path}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
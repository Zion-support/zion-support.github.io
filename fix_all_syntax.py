#!/usr/bin/env python3

import os
import re

def fix_file(file_path):
    """Fix syntax errors in a TypeScript/JSX file"""
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return False
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Fix semicolons in JSX elements
    content = re.sub(r';\s*</', '</', content)
    content = re.sub(r';\s*/>', '/>', content)
    
    # Fix semicolons in object properties
    content = re.sub(r';\s*},', '},', content)
    content = re.sub(r';\s*}\s*];', '}\n];', content)
    
    # Fix missing function declarations
    if 'export default function' not in content and 'const ' in content and '= () =>' in content:
        # This is likely a component that needs proper function declaration
        content = content.replace('const ', 'export default function ')
        content = content.replace('= () =>', '() {')
        content = content.replace('};', '}')
    
    # Fix JSX return statements
    if 'return (' in content and not content.strip().startswith('export default function'):
        # Add function declaration if missing
        if 'const ' in content and '= () =>' in content:
            content = content.replace('const ', 'export default function ')
            content = content.replace('= () =>', '() {')
            content = content.replace('};', '}')
    
    # Fix missing imports
    if 'useState' in content and 'import { useState }' not in content:
        content = 'import { useState } from \'react\';\n' + content
    
    # Fix missing React import
    if 'React.FC' in content and 'import React' not in content:
        content = 'import React from \'react\';\n' + content
    
    # Fix JSX syntax issues
    content = re.sub(r'(\w+):\s*string;,\s*', r'\1: string;\n', content)
    
    # Fix component structure
    if 'return (' in content and ');' in content:
        content = re.sub(r'\);\s*$', ')\n}', content)
    
    if content != original_content:
        with open(file_path, 'w') as f:
            f.write(content)
        print(f"Fixed: {file_path}")
        return True
    else:
        print(f"No changes needed: {file_path}")
        return False

def main():
    # Files that need fixing
    files_to_fix = [
        '/workspace/src/pages/Blog.tsx',
        '/workspace/src/pages/BlogPost.tsx',
        '/workspace/src/pages/DeveloperPortal.tsx',
        '/workspace/src/pages/Home.tsx',
        '/workspace/src/pages/NotFound.tsx'
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()
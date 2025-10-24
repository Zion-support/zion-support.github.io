#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_syntax(file_path):
    """Fix JSX syntax errors in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common JSX syntax issues
        # 1. Fix missing React import
        if 'import React' not in content and ('<div>' in content or '<>' in content or '<Head>' in content):
            content = "import React from 'react';\n" + content
        
        # 2. Fix missing Head import
        if '<Head>' in content and 'import Head' not in content:
            content = content.replace("import React from 'react';", "import React from 'react';\nimport Head from 'next/head';")
        
        # 3. Fix malformed JSX return statements
        content = re.sub(r'return\s*\(\s*<div>', 'return (\n    <div>', content)
        content = re.sub(r'return\s*\(\s*<>', 'return (\n    <>', content)
        
        # 4. Fix malformed meta tags
        content = re.sub(r'<meta name = "([^"]+)"', '<meta name="\1"', content)
        
        # 5. Fix missing closing tags
        content = re.sub(r'<Head>\s*<title>([^<]+)</title>\s*<meta[^>]+>\s*</Head>', 
                        '<Head>\n        <title>\1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Head>', content)
        
        # 6. Fix malformed function declarations
        content = re.sub(r'export default function (\w+)\(\) \{', r'export default function \1() {\n  return (', content)
        
        # 7. Fix missing closing parentheses and braces
        if 'return (' in content and not content.strip().endswith(');'):
            content = content.rstrip() + '\n  );\n}'
        
        # 8. Fix malformed JSX fragments
        content = re.sub(r'<>\s*<div>', '<>\n      <div>', content)
        content = re.sub(r'</div>\s*</>', '</div>\n    </>', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_fixed = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_jsx_syntax(file_path):
                files_fixed += 1
                print(f"Fixed JSX syntax in: {file_path}")
    
    print(f"Fixed JSX syntax in {files_fixed} files")

if __name__ == "__main__":
    main()

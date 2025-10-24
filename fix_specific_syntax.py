#!/usr/bin/env python3
"""
Script to fix specific syntax errors
"""
import os
import re
import glob

def fix_specific_syntax(content):
    """Fix specific syntax errors"""
    # Fix trailing comma in object declaration
    content = re.sub(r'export const metadata: Metadata = {,', 'export const metadata: Metadata = {', content)
    
    # Fix broken object structure - missing comma before opening brace
    content = re.sub(r'}\s*{\s*icon:', '},\n  {\n    icon:', content)
    
    # Fix broken className attributes (missing spaces)
    content = re.sub(r'className="([^"]*?)([a-z])([A-Z])', r'className="\1\2 \3', content)
    content = re.sub(r'className="([^"]*?)([a-z])([a-z])([A-Z])', r'className="\1\2\3 \4', content)
    
    # Fix missing semicolons in import statements
    content = re.sub(r"import Link from 'next/link'(\s*)$", r"import Link from 'next/link';\1", content, flags=re.MULTILINE)
    
    # Fix broken JSX structure
    content = re.sub(r'<div className="([^"]+)" />([^<]+)</div>', r'<div className="\1">\2</div>', content)
    content = re.sub(r'<h1 className="([^"]+)" />([^<]+)</h1>', r'<h1 className="\1">\2</h1>', content)
    content = re.sub(r'<p className="([^"]+)" />([^<]+)</p>', r'<p className="\1">\2</p>', content)
    
    return content

def fix_file(file_path):
    """Fix specific syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_specific_syntax(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all specific syntax errors"""
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts', 
        './app/**/*.js',
        './app/**/*.jsx',
        './src/**/*.tsx',
        './src/**/*.ts',
        './src/**/*.js', 
        './src/**/*.jsx',
        './components/**/*.tsx',
        './components/**/*.ts',
        './components/**/*.js',
        './components/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                print(f"Fixed: {file_path}")
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts and syntax errors
"""
import os
import re
import glob

def fix_merge_conflicts(content):
    """Fix merge conflicts in content"""
    # Remove merge conflict markers and keep HEAD content
    pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]*\n?'
    content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
    
    # Clean up any remaining merge conflict markers
    content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
    content = re.sub(r'=======.*?>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
    
    return content

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors"""
    # Fix unclosed JSX tags
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>', r'<\1\2>', content)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*\n\s*}', r'\1;\n}', content)
    
    # Fix missing commas in arrays/objects
    content = re.sub(r'(\w+)\s*\n\s*\]', r'\1,\n]', content)
    content = re.sub(r'(\w+)\s*\n\s*}', r'\1,\n}', content)
    
    # Fix missing closing tags
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>([^<]*?)(?=\n\s*</)', r'<\1\2>\3</\1>', content)
    
    return content

def fix_typescript_syntax(content):
    """Fix common TypeScript syntax errors"""
    # Fix missing type annotations
    content = re.sub(r'const (\w+) = \[', r'const \1: any[] = [', content)
    
    # Fix missing imports
    if 'React' in content and 'import React' not in content:
        content = "import React from 'react';\n" + content
    
    return content

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix merge conflicts
        content = fix_merge_conflicts(content)
        
        # Fix JSX syntax
        if file_path.endswith(('.tsx', '.jsx')):
            content = fix_jsx_syntax(content)
        
        # Fix TypeScript syntax
        if file_path.endswith(('.ts', '.tsx')):
            content = fix_typescript_syntax(content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = content.strip() + '\n'
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_file(file_path):
                    files_fixed += 1
                    print(f"Fixed: {file_path}")
    
    print(f"\nFixed {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
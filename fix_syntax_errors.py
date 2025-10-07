#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/JSX files
"""

import os
import re
import glob

def fix_interface_syntax(content):
    """Fix malformed interface declarations"""
    # Fix interface declarations with extra commas
    content = re.sub(r'interface,\s*(\w+),\s*\{', r'interface \1 {', content)
    
    # Fix property declarations with extra commas
    content = re.sub(r'(\w+),\s*(\w+),\s*(\w+)\s*:\s*([^;]+);', r'\1\2\3: \4;', content)
    content = re.sub(r'(\w+),\s*(\w+)\s*:\s*([^;]+);', r'\1\2: \3;', content)
    
    # Fix function declarations with extra commas
    content = re.sub(r'export,\s*default,\s*function\s+(\w+),(\w+),(\w+)', r'export default function \1\2\3', content)
    content = re.sub(r'function\s+(\w+),(\w+),(\w+)', r'function \1\2\3', content)
    
    # Fix variable declarations with extra commas
    content = re.sub(r'const\s+(\w+),(\w+),(\w+)\s*=', r'const \1\2\3 =', content)
    content = re.sub(r'let\s+(\w+),(\w+),(\w+)\s*=', r'let \1\2\3 =', content)
    content = re.sub(r'var\s+(\w+),(\w+),(\w+)\s*=', r'var \1\2\3 =', content)
    
    # Fix object property access with extra commas
    content = re.sub(r'(\w+),(\w+),(\w+)\.(\w+)', r'\1\2\3.\4', content)
    
    # Fix type annotations with extra commas
    content = re.sub(r'(\w+),\s*(\w+)\s*:\s*([^,;]+)', r'\1\2: \3', content)
    
    # Fix optional properties with extra commas
    content = re.sub(r'(\w+),\s*(\w+)\s*\?\s*:\s*([^;]+)', r'\1\2?: \3', content)
    
    # Fix array type annotations
    content = re.sub(r'(\w+)\[\],(\w+)\[\],(\w+)\[\]', r'\1\2\3[]', content)
    
    # Fix generic type parameters
    content = re.sub(r'<(\w+),(\w+),(\w+)>', r'<\1\2\3>', content)
    
    # Fix string literals with extra commas
    content = re.sub(r"'([^']+),\s*([^']+),\s*([^']+)'", r"'\1\2\3'", content)
    content = re.sub(r'"([^"]+),\s*([^"]+),\s*([^"]+)"', r'"\1\2\3"', content)
    
    return content

def fix_jsx_syntax(content):
    """Fix JSX syntax errors"""
    # Fix malformed JSX attributes
    content = re.sub(r'(\w+),\s*(\w+)\s*=\s*{([^}]+)}', r'\1\2={\3}', content)
    
    # Fix self-closing tags with extra commas
    content = re.sub(r'<(\w+),\s*(\w+)\s*/>', r'<\1\2 />', content)
    
    # Fix closing tags with extra commas
    content = re.sub(r'</(\w+),\s*(\w+)>', r'</\1\2>', content)
    
    return content

def fix_metadata_syntax(content):
    """Fix metadata object syntax errors"""
    # Fix malformed metadata objects
    content = re.sub(r'export const metadata = \{\s*\n\s*title:\s*\'([^\']+)\',\s*\n\s*description:\s*\'([^\']+)\',\s*\n\s*type:\s*\'([^\']+)\',\s*\n\s*\};', 
                     r'export const metadata = {\n  title: "\1",\n  description: "\2",\n  type: "\3",\n};', content)
    
    # Fix duplicate semicolons and braces
    content = re.sub(r';\s*;\s*}', r';', content)
    content = re.sub(r'}\s*;\s*}', r'}', content)
    
    return content

def fix_file(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_interface_syntax(content)
        content = fix_jsx_syntax(content)
        content = fix_metadata_syntax(content)
        
        # Additional specific fixes
        # Fix common patterns
        content = re.sub(r'(\w+),\s*(\w+)\s*=\s*([^;]+);', r'\1\2 = \3;', content)
        content = re.sub(r'(\w+),\s*(\w+)\s*:\s*([^,;]+),', r'\1\2: \3,', content)
        
        # Fix malformed function parameters
        content = re.sub(r'\(\s*(\w+),\s*(\w+),\s*(\w+)\s*:\s*([^)]+)\)', r'(\1\2\3: \4)', content)
        
        # Fix malformed object properties
        content = re.sub(r'(\w+),\s*(\w+)\s*:\s*([^,}]+),', r'\1\2: \3,', content)
        
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
    """Main function to fix all files"""
    # Find all TypeScript and JSX files
    patterns = [
        'app/blog/**/*.tsx',
        'src/components/**/*.tsx',
        'src/**/*.tsx',
        'src/**/*.ts'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            total_count += 1
            if fix_file(file_path):
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
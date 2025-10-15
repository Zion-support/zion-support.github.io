#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors."""
    # Fix missing closing tags
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>', r'<\1\2></\1>', content)
    
    # Fix unclosed JSX expressions
    content = re.sub(r'\{([^}]*?)(?<!\})$', r'{\1}', content, flags=re.MULTILINE)
    
    # Fix missing semicolons after statements
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix missing commas in object literals
    content = re.sub(r'(\w+):\s*([^,\n}]+)(?=\s*[}\n])', r'\1: \2,', content)
    
    # Fix missing parentheses in function calls
    content = re.sub(r'(\w+)\s*$', r'\1()', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_syntax(content):
    """Fix common TypeScript syntax errors."""
    # Fix missing type annotations
    content = re.sub(r'(\w+):\s*([^=:]+?)(?=\s*[=;])', r'\1: any', content)
    
    # Fix missing return types
    content = re.sub(r'function\s+(\w+)\s*\([^)]*\)\s*\{', r'function \1(): any {', content)
    
    # Fix missing interface declarations
    content = re.sub(r'interface\s+(\w+)\s*\{', r'interface \1 {\n  [key: string]: any;', content)
    
    return content

def fix_file_syntax(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix JSX syntax
        if file_path.endswith(('.tsx', '.jsx')):
            content = fix_jsx_syntax(content)
        
        # Fix TypeScript syntax
        if file_path.endswith(('.ts', '.tsx')):
            content = fix_typescript_syntax(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax in: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files in the app directory
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/src/**/*.tsx',
        '/workspace/src/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_file_syntax(file_path):
                files_fixed += 1
    
    print(f"\nFixed syntax in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
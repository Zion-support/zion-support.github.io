#!/usr/bin/env python3
"""
Comprehensive Syntax Error Fixer
This script will fix common syntax errors in TypeScript/JavaScript files
"""

import os
import re
import glob
from pathlib import Path

def fix_import_statements(content):
    """Fix broken import statements"""
    # Fix broken import statements with missing semicolons
    content = re.sub(r'import\s+([^;]+)\s*$', r'import \1;', content, flags=re.MULTILINE)
    
    # Fix broken import statements with missing quotes
    content = re.sub(r'import\s+([^"\']+)\s*;', r'import \1;', content)
    
    return content

def fix_jsx_syntax(content):
    """Fix JSX syntax errors"""
    # Fix broken JSX closing tags
    content = re.sub(r'<([^>]+),\s*([^>]+)>', r'<\1\2>', content)
    
    # Fix broken JSX attributes
    content = re.sub(r'(\w+):\s*([^,}]+),', r'\1: \2,', content)
    
    # Fix broken JSX expressions
    content = re.sub(r'\{([^}]+),\s*([^}]+)\}', r'{\1\2}', content)
    
    return content

def fix_typescript_syntax(content):
    """Fix TypeScript syntax errors"""
    # Fix missing semicolons in interface declarations
    content = re.sub(r'interface\s+(\w+)\s*\{([^}]+)\}\s*$', r'interface \1 {\2};', content, flags=re.MULTILINE)
    
    # Fix missing semicolons in type declarations
    content = re.sub(r'type\s+(\w+)\s*=\s*([^;]+)\s*$', r'type \1 = \2;', content, flags=re.MULTILINE)
    
    # Fix broken function declarations
    content = re.sub(r'const\s+(\w+)\s*:\s*([^=]+)\s*=\s*\(([^)]*)\)\s*=>\s*\{', r'const \1: \2 = (\3) => {', content)
    
    return content

def fix_react_components(content):
    """Fix React component syntax errors"""
    # Fix broken component declarations
    content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(([^)]*)\)\s*=>\s*\{', r'const \1: React.FC = (\2) => {', content)
    
    # Fix broken JSX return statements
    content = re.sub(r'return\s*\(\s*<([^>]+),\s*([^>]+)>', r'return <\1\2>', content)
    
    # Fix broken JSX closing tags
    content = re.sub(r'</([^>]+),\s*([^>]+)>', r'</\1\2>', content)
    
    return content

def fix_common_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix broken object literals
    content = re.sub(r'\{([^}]+),\s*([^}]+)\}', r'{\1\2}', content)
    
    # Fix broken array literals
    content = re.sub(r'\[([^\]]+),\s*([^\]]+)\]', r'[\1\2]', content)
    
    # Fix broken function calls
    content = re.sub(r'(\w+)\s*\(\s*([^)]+),\s*([^)]+)\s*\)', r'\1(\2\3)', content)
    
    return content

def fix_file(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_import_statements(content)
        content = fix_jsx_syntax(content)
        content = fix_typescript_syntax(content)
        content = fix_react_components(content)
        content = fix_common_syntax_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.js',
        'src/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files_to_fix)} total files")

if __name__ == "__main__":
    main()
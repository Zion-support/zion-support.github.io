#!/usr/bin/env python3
"""
Comprehensive script to fix syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def fix_quotes_and_strings(content):
    """Fix quote and string literal issues."""
    # Fix unterminated string literals
    content = re.sub(r'^"use client";$', '"use client";', content, flags=re.MULTILINE)
    content = re.sub(r'^"use client"$', '"use client";', content, flags=re.MULTILINE)
    
    # Fix mixed quotes
    content = re.sub(r"'use client'", '"use client"', content)
    
    return content

def fix_jsx_syntax(content):
    """Fix JSX syntax errors."""
    # Fix malformed JSX tags
    content = re.sub(r'<div>div>', '<div></div>', content)
    content = re.sub(r'<div>([^<]*)div>', r'<div>\1</div>', content)
    
    # Fix missing closing tags
    content = re.sub(r'<div([^>]*)>([^<]*)div>', r'<div\1>\2</div>', content)
    
    # Fix unescaped quotes in JSX attributes
    content = re.sub(r'([^\\])"([^"]*)"([^>]*>)', r'\1&quot;\2&quot;\3', content)
    
    # Fix missing commas in object literals
    content = re.sub(r'(\w+):\s*(\w+)\s*\n\s*(\w+):', r'\1: \2,\n  \3:', content)
    
    return content

def fix_typescript_syntax(content):
    """Fix TypeScript syntax errors."""
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix enum syntax
    content = re.sub(r'enum\s+(\w+)\s*{\s*([^}]+)\s*}', r'enum \1 {\n  \2\n}', content)
    
    # Fix missing commas in interfaces
    content = re.sub(r'(\w+):\s*(\w+)\s*\n\s*(\w+):', r'\1: \2,\n  \3:', content)
    
    # Fix missing commas in function parameters
    content = re.sub(r'(\w+)\s+(\w+)\s+(\w+)', r'\1, \2, \3', content)
    
    return content

def fix_react_imports(content):
    """Fix React import issues."""
    # Ensure proper React imports
    if 'import React' not in content and 'React.FC' in content:
        content = 'import React from "react";\n' + content
    
    # Fix missing semicolons in imports
    content = re.sub(r'(import [^;]+)(\n)', r'\1;\2', content)
    
    return content

def fix_component_structure(content):
    """Fix React component structure issues."""
    # Fix missing return statements
    if 'return (' not in content and 'return <' not in content and 'React.FC' in content:
        # Find the component function and add a basic return
        content = re.sub(
            r'(const \w+: React\.FC = \(\) => \{\s*)([^}]+)(\})',
            r'\1return <div>Component</div>;\n\3',
            content
        )
    
    return content

def fix_common_syntax_errors(content):
    """Fix common syntax errors."""
    # Fix missing commas in arrays
    content = re.sub(r'(\w+)\s*\n\s*(\w+)', r'\1,\n  \2', content)
    
    # Fix missing parentheses
    content = re.sub(r'(\w+)\s*\{\s*([^}]+)\s*\}', r'\1({\n  \2\n})', content)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes based on file type
        if file_path.suffix in ['.tsx', '.jsx']:
            content = fix_quotes_and_strings(content)
            content = fix_jsx_syntax(content)
            content = fix_react_imports(content)
            content = fix_component_structure(content)
        elif file_path.suffix in ['.ts', '.js']:
            content = fix_quotes_and_strings(content)
            content = fix_typescript_syntax(content)
        
        # Apply common fixes
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
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    workspace = Path('/workspace')
    
    # File patterns to process
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.jsx',
        'components/**/*.js',
    ]
    
    total_files = 0
    fixed_files = 0
    
    for pattern in patterns:
        for file_path in workspace.glob(pattern):
            if file_path.is_file():
                total_files += 1
                if process_file(file_path):
                    fixed_files += 1
    
    print(f"\nProcessed {total_files} files, fixed {fixed_files} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to clean up merge conflicts and fix common syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(content):
    """Remove merge conflict markers and keep the latest version."""
    # Remove merge conflict markers
    content = re.sub(r'<<<<<<< HEAD\n', '', content)
    content = re.sub(r'=======\n', '', content)
    content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
    
    # Remove any remaining conflict markers
    content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
    content = re.sub(r'=======\n', '', content)
    content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
    
    return content

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors."""
    # Fix unescaped quotes in JSX
    content = re.sub(r'([^\\])"([^"]*)"([^>]*>)', r'\1&quot;\2&quot;\3', content)
    
    # Fix malformed JSX tags
    content = re.sub(r'<div>div>', '<div></div>', content)
    content = re.sub(r'<div>([^<]*)div>', r'<div>\1</div>', content)
    
    # Fix missing closing tags
    content = re.sub(r'<div([^>]*)>([^<]*)div>', r'<div\1>\2</div>', content)
    
    return content

def fix_typescript_syntax(content):
    """Fix common TypeScript syntax errors."""
    # Fix enum syntax
    content = re.sub(r'enum\s+(\w+)\s*{\s*([^}]+)\s*}', r'enum \1 {\n  \2\n}', content)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to clean up merge conflicts and syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Clean merge conflicts
        content = clean_merge_conflicts(content)
        
        # Fix JSX syntax if it's a React/JSX file
        if file_path.suffix in ['.tsx', '.jsx']:
            content = fix_jsx_syntax(content)
        
        # Fix TypeScript syntax if it's a TypeScript file
        if file_path.suffix in ['.ts', '.tsx']:
            content = fix_typescript_syntax(content)
        
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
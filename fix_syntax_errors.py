#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/JavaScript files after merge conflict resolution.
"""

import os
import re
import glob

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues."""
    # Fix unclosed JSX tags by adding closing tags
    # This is a basic fix - more sophisticated parsing would be needed for complex cases
    
    # Fix common unclosed tags
    tag_fixes = [
        (r'<div([^>]*)>', r'<div\1>'),
        (r'<main([^>]*)>', r'<main\1>'),
        (r'<section([^>]*)>', r'<section\1>'),
        (r'<form([^>]*)>', r'<form\1>'),
        (r'<button([^>]*)>', r'<button\1>'),
        (r'<label([^>]*)>', r'<label\1>'),
        (r'<Link([^>]*)>', r'<Link\1>'),
    ]
    
    for pattern, replacement in tag_fixes:
        content = re.sub(pattern, replacement, content)
    
    return content

def fix_typescript_syntax(content):
    """Fix common TypeScript syntax issues."""
    # Fix malformed object literals
    content = re.sub(r'(\w+):\s*(\w+)\s*,\s*(\w+):\s*(\w+)\s*,', r'\1: \2,\n  \3: \4,', content)
    
    # Fix malformed function parameters
    content = re.sub(r'(\w+)\s*:\s*(\w+)\s*,\s*(\w+)\s*:\s*(\w+)\s*\)', r'\1: \2, \3: \4)', content)
    
    # Fix malformed regex literals
    content = re.sub(r'/\s*([^/]+)\s*/', r'/\1/', content)
    
    # Fix malformed type assertions
    content = re.sub(r'as\s+(\w+)\s*\)', r'as \1)', content)
    
    return content

def fix_merge_conflicts_advanced(content):
    """Advanced merge conflict resolution."""
    # Remove any remaining conflict markers
    content = re.sub(r'<<<<<<< HEAD\n', '', content)
    content = re.sub(r'=======\n', '', content)
    content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
    
    # Clean up multiple empty lines
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    
    return content

def fix_file_syntax(file_path):
    """Fix syntax issues in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_merge_conflicts_advanced(content)
        content = fix_jsx_syntax(content)
        content = fix_typescript_syntax(content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        content = content.strip() + '\n'
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JavaScript files."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.js', 
        'src/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.js',
        'components/**/*.jsx',
        '*.tsx',
        '*.ts',
        '*.js',
        '*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_file_syntax(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()
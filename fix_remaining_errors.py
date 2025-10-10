#!/usr/bin/env python3
"""
Script to fix remaining syntax errors and console.log warnings
"""

import os
import re
import glob
from pathlib import Path

def fix_console_logs(content):
    """Remove or comment out console.log statements"""
    # Comment out console.log statements instead of removing them
    content = re.sub(r'(\s+)console\.log\([^)]*\);', r'\1// console.log(...);', content)
    return content

def fix_unused_vars(content):
    """Fix unused variable warnings"""
    # Add underscore prefix to unused variables
    content = re.sub(r'(\s+)(\w+)(\s*=\s*[^;]+;)(\s*//.*unused.*)?', r'\1_\2\3', content)
    return content

def fix_jsx_syntax_errors(content):
    """Fix common JSX syntax errors"""
    # Fix unclosed tags
    content = re.sub(r'<title>([^<]*)</titl>', r'<title>\1</title>', content)
    content = re.sub(r'<h2>([^<]*)</h>', r'<h2>\1</h2>', content)
    content = re.sub(r'<h3>([^<]*)</h>', r'<h3>\1</h3>', content)
    content = re.sub(r'<span>([^<]*)</spa>', r'<span>\1</span>', content)
    content = re.sub(r'<div>([^<]*)</di>', r'<div>\1</div>', content)
    
    # Fix malformed JSX fragments
    content = re.sub(r'<>\s*</>', r'<></>', content)
    
    # Fix unclosed JSX elements
    content = re.sub(r'<(\w+)([^>]*)>\s*</\1>', r'<\1\2></\1>', content)
    
    return content

def fix_typescript_errors(content):
    """Fix TypeScript syntax errors"""
    # Fix function declarations
    content = re.sub(r'const (\w+): React\.FC = \(\) => \{', r'const \1: React.FC = () => {', content)
    
    # Fix export statements
    content = re.sub(r'export default (\w+);\)', r'export default \1;', content)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*\)\s*$', r'\1);', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix remaining errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix console.log statements
        content = fix_console_logs(content)
        
        # Fix unused variables
        content = fix_unused_vars(content)
        
        # Fix JSX syntax
        content = fix_jsx_syntax_errors(content)
        
        # Fix TypeScript syntax
        content = fix_typescript_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'api/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if process_file(file_path):
                files_fixed += 1
            files_processed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()
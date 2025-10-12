#!/usr/bin/env python3
"""
Comprehensive fix script for React/TypeScript files with various syntax issues.
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_syntax_errors(file_path):
    """Fix common JSX syntax errors in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix JSX expressions must have one parent element
        # Look for patterns like: <div>...</div><div>...</div> and wrap in fragment
        if 'JSX expressions must have one parent element' in str(content):
            # This is a complex fix that needs to be done carefully
            # For now, let's focus on other issues
            
            # Fix missing closing tags
            content = re.sub(r'<([^>]+)(?<!/)>', r'<\1></\1>', content)
            
            # Fix unclosed JSX tags
            content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)(?<!/)>', r'<\1\2></\1>', content)
        
        # Fix merge conflict markers that might have been missed
        content = re.sub(r'<<<<<<<.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>>.*?\n', '', content, flags=re.DOTALL)
        
        # Fix common syntax errors
        content = re.sub(r',\s*\)', ')', content)  # Remove trailing commas before closing parens
        content = re.sub(r',\s*;', ';', content)   # Remove trailing commas before semicolons
        content = re.sub(r',\s*}', '}', content)   # Remove trailing commas before closing braces
        
        # Fix malformed JSX attributes
        content = re.sub(r'(\w+)=\{([^}]+)\}\s*([^=])', r'\1={\2} \3', content)
        
        # Fix missing closing tags in JSX
        content = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)(?<!/)>(?!.*</\1>)', r'<\1\2></\1>', content, flags=re.DOTALL)
        
        # Fix broken JSX expressions
        content = re.sub(r'\{([^}]*)\}\s*([^<])', r'{\1} \2', content)
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'^<<<<<<<.*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======.*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>>.*$', '', content, flags=re.MULTILINE)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_specific_files():
    """Fix specific problematic files."""
    problematic_files = [
        'App.tsx',
        'EnhancedFooter.tsx',
        'app/App.tsx',
        'api/onsite-request.js'
    ]
    
    for file_path in problematic_files:
        if os.path.exists(file_path):
            print(f"Fixing {file_path}...")
            fix_jsx_syntax_errors(file_path)

def main():
    """Main function to fix all files."""
    print("Starting comprehensive fix...")
    
    # Fix specific problematic files first
    fix_specific_files()
    
    # Get all TypeScript/JavaScript files
    file_patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    all_files = []
    
    for pattern in file_patterns:
        files = glob.glob(pattern, recursive=True)
        all_files.extend(files)
    
    # Remove node_modules and other directories we don't want to process
    all_files = [f for f in all_files if not any(part in f for part in ['node_modules', '.git', 'dist', 'build', '.next'])]
    
    print(f"Found {len(all_files)} files to process")
    
    fixed_count = 0
    for file_path in all_files:
        if fix_jsx_syntax_errors(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Successfully fixed {fixed_count} files")

if __name__ == "__main__":
    main()
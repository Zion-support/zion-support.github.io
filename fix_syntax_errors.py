#!/usr/bin/env python3
"""
Script to fix common syntax errors in TSX files after merge conflict resolution.
This script will:
1. Fix JSX fragment issues
2. Fix missing closing tags
3. Fix malformed JSX expressions
4. Fix identifier issues
"""

import os
import re
import glob
from pathlib import Path

def fix_syntax_errors_in_file(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix JSX fragment issues - ensure proper opening and closing
        content = re.sub(r'<>([^<]*)</>', r'<div>\1</div>', content, flags=re.DOTALL)
        
        # Fix malformed JSX expressions - wrap multiple elements in fragments
        # Look for patterns like: <div>...</div><div>...</div> without parent
        content = re.sub(r'(<div[^>]*>.*?</div>)\s*(<div[^>]*>.*?</div>)', r'<>\1\2</>', content, flags=re.DOTALL)
        
        # Fix missing closing tags for common elements
        # Fix Head tags
        content = re.sub(r'<Head>([^<]*)', r'<Head>\1</Head>', content, flags=re.DOTALL)
        
        # Fix div tags that are not properly closed
        content = re.sub(r'<div([^>]*)>([^<]*)', r'<div\1>\2</div>', content, flags=re.DOTALL)
        
        # Fix p tags that are not properly closed
        content = re.sub(r'<p([^>]*)>([^<]*)', r'<p\1>\2</p>', content, flags=re.DOTALL)
        
        # Fix identifier issues - remove malformed characters
        content = re.sub(r'[^\w\s<>/="\'-]', '', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'(\w+)\s*=\s*([^"\s>]+)(?![^<]*>)', r'\1="\2"', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Fix malformed function declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{([^}]*)}', r'const \1 = () => {\2}', content, flags=re.DOTALL)
        
        # Fix malformed JSX return statements
        content = re.sub(r'return\s*\(\s*([^)]*)\s*\)\s*;', r'return (\1);', content, flags=re.DOTALL)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Ensure proper export default structure
        if 'export default' in content and not content.strip().endswith('}'):
            content = content.rstrip() + '\n}'
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return content != original_content
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all syntax errors"""
    app_dir = Path('/workspace/app')
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_syntax_errors_in_file(file_path):
            fixed_count += 1
            print(f"Fixed syntax errors in: {file_path}")
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
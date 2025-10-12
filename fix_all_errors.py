#!/usr/bin/env python3
"""
Comprehensive script to fix all TypeScript/React syntax errors
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no obvious errors
        if not any(pattern in content for pattern in ['/&gt;', '/&lt;', '&gt;', '&lt;', ';', ';', ';']):
            return False
            
        print(f"Fixing syntax errors in: {file_path}")
        
        # Fix common HTML entity issues
        content = content.replace('/&gt;', '/>')
        content = content.replace('/&lt;', '/<')
        content = content.replace('&gt;', '>')
        content = content.replace('&lt;', '<')
        
        # Fix double semicolons
        content = re.sub(r';\s*;+', ';', content)
        
        # Fix malformed JSX closing tags
        content = re.sub(r'</\s*([^>]+)\s*&gt;', r'</\1>', content)
        content = re.sub(r'<\s*([^>]+)\s*&gt;', r'<\1>', content)
        
        # Fix broken JSX expressions
        content = re.sub(r'<([^>]+)\s*&gt;', r'<\1>', content)
        content = re.sub(r'</([^>]+)\s*&gt;', r'</\1>', content)
        
        # Fix broken function declarations
        content = re.sub(r'function\s+([^(]+)\s*\(\s*\)\s*{', r'function \1() {', content)
        
        # Fix broken return statements
        content = re.sub(r'return\s*;\s*<', r'return <', content)
        
        # Fix broken JSX fragments
        content = re.sub(r'<>\s*<', r'<><', content)
        content = re.sub(r'>\s*</>', r'></>', content)
        
        # Clean up excessive whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Fix broken imports
        content = re.sub(r'import\s+([^;]+);\s*;', r'import \1;', content)
        
        # Fix broken exports
        content = re.sub(r'export\s+default\s+([^;]+);\s*;', r'export default \1;', content)
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all syntax errors"""
    # Find all TypeScript/React files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
    fixed_count = 0
    total_files = len(files_to_fix)
    
    print(f"Found {total_files} files to check for syntax errors...")
    
    for file_path in files_to_fix:
        if fix_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed syntax errors in {fixed_count} files out of {total_files} total files.")

if __name__ == "__main__":
    main()
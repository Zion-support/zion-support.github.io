#!/usr/bin/env python3
"""
Script to fix remaining syntax errors in the codebase.
"""

import os
import re
import glob

def fix_syntax_errors_in_file(file_path):
    """Fix common syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix malformed JSX attributes
        content = re.sub(r'const\s+(\w+)\s*=\s*', r'\1 = ', content)
        content = re.sub(r'(\w+)\s*const\s*=\s*', r'\1 = ', content)
        
        # Fix malformed meta tags
        content = re.sub(r'<meta\s+const\s+name\s*=\s*"([^"]+)"\s+content="([^"]+)"\s*/\s*/\s*/>', r'<meta name="\1" content="\2" />', content)
        content = re.sub(r'<meta\s+name="([^"]+)"\s+content="([^"]+)"\s*/\s*/\s*/>', r'<meta name="\1" content="\2" />', content)
        
        # Fix malformed className attributes
        content = re.sub(r'className="([^"]*?)(\w+)(\w+)([^"]*?)"', lambda m: f'className="{m.group(1)}{m.group(2)} {m.group(3)}{m.group(4)}"', content)
        
        # Fix malformed style attributes
        content = re.sub(r'style="\{\{\s*([^}]+)\s*\}\}"', r'style={{\1}}', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'<>\s*</>\s*<div', '<div', content)
        
        # Fix malformed closing tags
        content = re.sub(r'</\s*>\s*</\s*>', '</>', content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_source_files():
    """Find all TypeScript/JavaScript source files excluding node_modules."""
    source_files = []
    
    # Common source file extensions
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx']
    
    for ext in extensions:
        # Find files recursively, excluding node_modules
        pattern = f"**/{ext}"
        files = glob.glob(pattern, recursive=True)
        
        # Filter out node_modules
        files = [f for f in files if 'node_modules' not in f]
        source_files.extend(files)
    
    return source_files

def main():
    """Main function to fix all syntax errors."""
    print("Starting syntax error fixes...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Find all source files
    source_files = find_source_files()
    print(f"Found {len(source_files)} source files to check")
    
    fixed_count = 0
    error_count = 0
    
    for file_path in source_files:
        if fix_syntax_errors_in_file(file_path):
            fixed_count += 1
        else:
            error_count += 1
    
    print(f"\nSyntax error fixes complete!")
    print(f"Files processed: {len(source_files)}")
    print(f"Files fixed: {fixed_count}")
    print(f"Files with errors: {error_count}")

if __name__ == "__main__":
    main()
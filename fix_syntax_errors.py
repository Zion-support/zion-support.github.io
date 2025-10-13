#!/usr/bin/env python3
import os
import re
import glob

def fix_jsx_syntax(content):
    """Fix common JSX syntax errors"""
    # Fix unclosed JSX elements by adding proper closing tags
    # This is a simplified approach - in practice, you'd want more sophisticated parsing
    
    # Fix common patterns
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    content = re.sub(r'<p([^>]*)>\s*$', r'<p\1></p>', content, flags=re.MULTILINE)
    content = re.sub(r'<section([^>]*)>\s*$', r'<section\1></section>', content, flags=re.MULTILINE)
    
    # Fix malformed component definitions
    content = re.sub(r'export default function\s+(\w+)\s*\(\s*\)\s*{\s*$', r'export default function \1() {\n  return (', content, flags=re.MULTILINE)
    
    # Fix missing return statements
    content = re.sub(r'function\s+(\w+)\s*\(\s*\)\s*{\s*$', r'function \1() {\n  return (', content, flags=re.MULTILINE)
    
    return content

def fix_file_syntax(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file is too small or doesn't look like a React component
        if len(content) < 100 or 'export default' not in content:
            return False
            
        original_content = content
        
        # Apply fixes
        content = fix_jsx_syntax(content)
        
        # Only write if content changed
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
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_file_syntax(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax in {files_fixed} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to fix syntax errors in TypeScript/TSX files
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax issues
        
        # Fix unclosed JSX tags
        content = re.sub(r'<h1[^>]*>(?!.*</h1>)', lambda m: m.group(0) + '</h1>', content)
        content = re.sub(r'<h2[^>]*>(?!.*</h2>)', lambda m: m.group(0) + '</h2>', content)
        content = re.sub(r'<h3[^>]*>(?!.*</h3>)', lambda m: m.group(0) + '</h3>', content)
        content = re.sub(r'<p[^>]*>(?!.*</p>)', lambda m: m.group(0) + '</p>', content)
        content = re.sub(r'<div[^>]*>(?!.*</div>)', lambda m: m.group(0) + '</div>', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'className="[^"]*"[^>]*>', lambda m: m.group(0).replace('>', '>'), content)
        
        # Fix missing closing braces
        content = re.sub(r'(\s*)(\w+)\s*:\s*\[([^\]]*)\],?\s*$', r'\1\2: [\3],', content, flags=re.MULTILINE)
        
        # Fix malformed object properties
        content = re.sub(r'(\w+)\s*:\s*([^,}]+),?\s*$', r'\1: \2,', content, flags=re.MULTILINE)
        
        # Fix missing commas in arrays
        content = re.sub(r'(\w+)\s*\n\s*\]', r'\1\n]', content)
        
        # Fix malformed JSX expressions
        content = re.sub(r'\{([^}]*)\s*$', r'{\1}', content, flags=re.MULTILINE)
        
        # Fix unclosed parentheses
        content = re.sub(r'\(([^)]*)\s*$', r'(\1)', content, flags=re.MULTILINE)
        
        # Fix malformed arrow functions
        content = re.sub(r'=>\s*\{([^}]*)\s*$', r'=> {\1}', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all syntax errors"""
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_syntax_errors(file_path):
                files_fixed += 1
    
    print(f"Fixed syntax errors in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
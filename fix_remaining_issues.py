#!/usr/bin/env python3
import os
import re
import glob

def fix_remaining_issues(file_path):
    """Fix remaining syntax issues in React/TypeScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix duplicate return statements
        content = re.sub(r'return \(\s*\n\s*return \(', 'return (', content)
        
        # Fix malformed JSX structure
        content = re.sub(r'return \(\s*\n\s*}\s*\n\s*\]', 'return (', content)
        
        # Fix missing opening tags
        content = re.sub(r'return \(\s*\n\s*<div', 'return (\n    <div', content)
        
        # Fix missing React import
        if 'React' in content and 'import React' not in content:
            content = 'import React from \'react\';\n' + content
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Remove trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed remaining issues in: {file_path}")
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    fixed_count = 0
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_remaining_issues(file_path):
                fixed_count += 1
    
    print(f"Fixed remaining issues in {fixed_count} files")

if __name__ == "__main__":
    main()
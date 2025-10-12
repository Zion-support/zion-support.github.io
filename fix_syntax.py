#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in React components"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing semicolon before JSX
        content = re.sub(r'(\s+)\]\s+<div', r'\1];\n\n  return (\n    <div', content)
        
        # Fix missing return statement
        if 'return (' not in content and '<div className=' in content and 'export default' in content:
            content = re.sub(r'(\s+)(<div className=)', r'\1return (\n    \2', content)
        
        # Fix missing closing parenthesis
        if 'return (' in content and not content.strip().endswith(');'):
            content = re.sub(r'(\s+)(</div>\s*</div>\s*)$', r'\1\2\n  );', content)
        
        # Fix missing semicolon after array
        content = re.sub(r'(\s+)\]\s*$', r'\1];', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all React component files
    file_patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    fixed_count = 0
    
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if fix_syntax_errors(file_path):
                fixed_count += 1
    
    print(f"\nFixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
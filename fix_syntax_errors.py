#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/JavaScript files
"""

import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common syntax errors
        # 1. Replace trailing commas with semicolons in variable declarations
        content = re.sub(r'(\w+),\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # 2. Fix missing semicolons after statements
        content = re.sub(r'(\w+)\s*,\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # 3. Fix comma instead of semicolon in statements
        content = re.sub(r'(\w+)\s*,\s*(\w+.*)$', r'\1;\n    \2', content, flags=re.MULTILINE)
        
        # 4. Fix missing closing parentheses
        content = re.sub(r'(\w+\([^)]*)\s*,\s*$', r'\1);', content, flags=re.MULTILINE)
        
        # 5. Fix property assignment issues
        content = re.sub(r'(\w+):\s*([^,}]+)\s*,', r'\1: \2,', content)
        
        # 6. Fix missing commas in object literals
        content = re.sub(r'(\w+)\s*:\s*([^,}]+)\s*([^,}]+)', r'\1: \2, \3', content)
        
        # 7. Fix expression expected errors
        content = re.sub(r'^\s*,\s*$', '', content, flags=re.MULTILINE)
        
        # 8. Fix missing semicolons after function calls
        content = re.sub(r'(\w+\([^)]*\))\s*,', r'\1;', content)
        
        # 9. Fix missing semicolons after variable assignments
        content = re.sub(r'(\w+\s*=\s*[^;]+)\s*,', r'\1;', content)
        
        # 10. Fix missing semicolons after return statements
        content = re.sub(r'(return\s+[^;]+)\s*,', r'\1;', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors in all TypeScript/JavaScript files"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts', 
        'src/**/*.jsx',
        'src/**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
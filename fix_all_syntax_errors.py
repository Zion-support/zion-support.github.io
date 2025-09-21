#!/usr/bin/env python3

import os
import re
import glob

def fix_import_statements(content):
    """Fix import statements with extra commas and syntax errors"""
    # Fix double import
    content = re.sub(r'import import ', 'import ', content)
    
    # Fix import statements with extra commas
    content = re.sub(r'import\s+([^,]+),+(\s*})', r'import \1\2', content)
    content = re.sub(r'import\s+([^,]+),+(\s*from)', r'import \1\2', content)
    
    # Fix React imports
    content = re.sub(r'import React\s*{\s*([^}]+)\s*}\s*from', r'import React, {\1} from', content)
    
    # Fix missing semicolons in imports
    content = re.sub(r'import\s+([^;]+)\s*$', r'import \1;', content, flags=re.MULTILINE)
    
    return content

def fix_jsx_syntax(content):
    """Fix JSX syntax errors"""
    # Fix missing React import
    if ('React' in content or 'useState' in content or 'useEffect' in content) and 'import React' not in content:
        content = 'import React from "react";\n' + content
    
    # Fix JSX fragments
    content = re.sub(r'return\s*\(\s*<>', r'return (\n    <>', content)
    
    return content

def fix_file(file_path):
    """Fix syntax errors in a file"""
    if not os.path.exists(file_path):
        return False
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_import_statements(content)
        content = fix_jsx_syntax(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates and sort
    files_to_fix = sorted(list(set(files_to_fix)))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            print(f"Fixed: {file_path}")
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files out of {len(files_to_fix)}")

if __name__ == "__main__":
    main()
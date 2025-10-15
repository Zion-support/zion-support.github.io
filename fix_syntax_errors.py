#!/usr/bin/env python3

import os
import re
import glob

def fix_file(file_path):
    """Fix common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        modified = False
        
        # Fix malformed import statements with commas
        # Pattern: import statement, \n import statement, \n import statement;
        content = re.sub(
            r'import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);',
            lambda m: '\n'.join([f'import {imp.strip()};' for imp in m.groups()]),
            content,
            flags=re.MULTILINE
        )
        
        # Fix shorter malformed import patterns
        content = re.sub(
            r'import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);',
            lambda m: '\n'.join([f'import {imp.strip()};' for imp in m.groups()]),
            content,
            flags=re.MULTILINE
        )
        
        # Fix even shorter patterns
        content = re.sub(
            r'import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);',
            lambda m: '\n'.join([f'import {imp.strip()};' for imp in m.groups()]),
            content,
            flags=re.MULTILINE
        )
        
        # Fix 4-line patterns
        content = re.sub(
            r'import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);',
            lambda m: '\n'.join([f'import {imp.strip()};' for imp in m.groups()]),
            content,
            flags=re.MULTILINE
        )
        
        # Fix 3-line patterns
        content = re.sub(
            r'import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);',
            lambda m: '\n'.join([f'import {imp.strip()};' for imp in m.groups()]),
            content,
            flags=re.MULTILINE
        )
        
        # Fix 2-line patterns
        content = re.sub(
            r'import\s+([^,]+),\s*\n\s*import\s+([^,]+);',
            lambda m: '\n'.join([f'import {imp.strip()};' for imp in m.groups()]),
            content,
            flags=re.MULTILINE
        )
        
        # Fix single import statements ending with comma
        content = re.sub(
            r'import\s+([^,]+),\s*$',
            r'import \1;',
            content,
            flags=re.MULTILINE
        )
        
        # Fix malformed export statements
        # Pattern: ) \n }, \n { \n export default
        content = re.sub(
            r'\)\s*\n\s*},\s*\n\s*{\s*\n\s*export default',
            r');\n};\n\nexport default',
            content,
            flags=re.MULTILINE
        )
        
        # Fix malformed export statements (shorter version)
        content = re.sub(
            r'\)\s*\n\s*},\s*\n\s*{\s*\n\s*export default',
            r');\n};\n\nexport default',
            content,
            flags=re.MULTILINE
        )
        
        # Fix missing semicolons after closing braces
        content = re.sub(
            r'(\s+)\}\s*\n\s*export default',
            r'\1};\n\nexport default',
            content,
            flags=re.MULTILINE
        )
        
        # Fix missing semicolons after closing parentheses
        content = re.sub(
            r'(\s+)\)\s*\n\s*export default',
            r'\1);\n\nexport default',
            content,
            flags=re.MULTILINE
        )
        
        # Fix malformed function declarations
        content = re.sub(
            r'const\s+([^=]+)\s*=\s*\(\s*\)\s*=>\s*\(\s*$',
            r'const \1 = () => (',
            content,
            flags=re.MULTILINE
        )
        
        # Fix missing React import
        if 'import React' not in content and 'React.' in content:
            content = 'import React from \'react\';\n' + content
            modified = True
        
        if content != original_content:
            modified = True
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
        
        return modified
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files = []
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files)} files to process...")
    
    fixed_count = 0
    for file_path in files:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files.")

if __name__ == "__main__":
    main()
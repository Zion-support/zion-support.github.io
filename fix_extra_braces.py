#!/usr/bin/env python3
import os
import re
import glob

def fix_extra_braces(file_path):
    """Fix extra closing braces in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix pattern: </> followed by ); followed by }; followed by };
        # This should be: </> followed by ); followed by };
        pattern = r'(\s*</>\s*\);\s*\};\s*\};\s*)(\n\s*export default)'
        replacement = r'  );\n};\n\2'
        content = re.sub(pattern, replacement, content)
        
        # Fix pattern: </> followed by ); followed by }; followed by }; (without newline)
        pattern = r'(\s*</>\s*\);\s*\};\s*\};\s*)(export default)'
        replacement = r'  );\n};\n\2'
        content = re.sub(pattern, replacement, content)
        
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
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_extra_braces(file_path):
                files_fixed += 1
                print(f"Fixed extra braces in: {file_path}")
    
    print(f"Fixed extra braces in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import os
import re
import glob

def fix_file(file_path):
    """Fix common issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> [^\n]+.*?\n', '', content, flags=re.DOTALL)
        
        # Fix common syntax issues
        content = re.sub(r'cursor/[^\n]+', '', content)
        content = re.sub(r'website-audit-and-update-with-deployment-[^\n]+', '', content)
        content = re.sub(r'fix-errors-and-merge-to-main-[^\n]+', '', content)
        
        # Fix broken JSX
        content = re.sub(r'</\s*<br\s*/>', '', content)
        content = re.sub(r'<br\s*/>\s*</', '</', content)
        
        # Remove empty lines that might cause issues
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
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
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
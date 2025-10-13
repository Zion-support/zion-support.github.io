#!/usr/bin/env python3
"""
Script to fix merge conflicts and syntax errors in the codebase
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n.*?\n>>>>>>> [^\n]+\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+\n', '', content, flags=re.DOTALL)
        
        # Fix common syntax errors
        content = re.sub(r"';'", "'", content)  # Fix double quotes
        content = re.sub(r'";"', '"', content)  # Fix double quotes
        content = re.sub(r';\s*;', ';', content)  # Fix double semicolons
        content = re.sub(r'}\s*;', '}', content)  # Fix semicolons after closing braces
        content = re.sub(r'}\s*}\s*;', '}}', content)  # Fix nested braces with semicolons
        
        # Fix unterminated strings
        content = re.sub(r"'([^']*?)\n", r"'\1'", content)
        content = re.sub(r'"([^"]*?)\n', r'"\1"', content)
        
        # Fix TODO comments that break syntax
        content = re.sub(r'// TODO: Add properties\s*}\s*// TODO: Add properties\s*}', '', content)
        content = re.sub(r'// TODO: Add items\s*]\s*// TODO: Add items\s*]', '', content)
        content = re.sub(r'// TODO: Add parameters\s*\)', '', content)
        content = re.sub(r'// TODO: Implement\s*}', '', content)
        
        # Fix malformed JSX
        content = re.sub(r'<([^>]*?)\s*;\s*([^>]*?)>', r'<\1 \2>', content)
        content = re.sub(r'<([^>]*?)\s*;\s*>', r'<\1>', content)
        
        # Fix malformed function calls
        content = re.sub(r'\(\s*// TODO: Add parameters\s*\)', '()', content)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'api/**/*.js',
        'utils/**/*.ts',
        'utils/**/*.js',
        '*.tsx',
        '*.ts',
        '*.js'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nFixed {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
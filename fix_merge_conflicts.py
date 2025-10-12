#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+\n'
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< [^\n]+\n', '', fixed_content)
        fixed_content = re.sub(r'=======\n', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n', '', fixed_content)
        
        # Clean up multiple newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all .tsx files in the app directory
    app_files = glob.glob('/workspace/app/**/*.tsx', recursive=True)
    
    fixed_count = 0
    for file_path in app_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts_comprehensive(file_path):
    """Fix all types of merge conflicts in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>>' not in content:
            return False
        
        original_content = content
        
        # Remove all merge conflict markers and keep HEAD version
        # Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        content = re.sub(
            r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # Pattern 2: <<<<<<< HEAD ... ======= ... >>>>>>> branch (without newlines)
        content = re.sub(
            r'<<<<<<< HEAD(.*?)=======(.*?)>>>>>>> [^\n]+',
            r'\1',
            content,
            flags=re.DOTALL
        )
        
        # Pattern 3: Just remove remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up any double newlines that might have been created
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # If content changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts_comprehensive(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()
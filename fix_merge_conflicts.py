#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        content = re.sub(r'^<<<<<<< HEAD.*?\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======.*?\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> .*?\n', '', content, flags=re.MULTILINE)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD', '', content)
        content = re.sub(r'=======', '', content)
        content = re.sub(r'>>>>>>> .*', '', content)
        
        # Remove empty lines that might be left behind
        lines = content.split('\n')
        cleaned_lines = []
        for line in lines:
            if line.strip() or (cleaned_lines and cleaned_lines[-1].strip()):
                cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.jsx',
        'components/**/*.js',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()

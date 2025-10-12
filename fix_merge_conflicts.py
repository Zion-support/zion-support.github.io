#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match merge conflicts and keep only the HEAD part
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there's no newline after HEAD
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+'
        fixed_content = re.sub(pattern2, r'\1', fixed_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        if content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
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
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                total_files += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"\nProcessed {total_files} files, fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
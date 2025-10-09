#!/usr/bin/env python3
"""
Script to automatically fix merge conflicts in the codebase
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the newer version (after =======)
        # Pattern to match merge conflicts
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>.*?'
        
        # Replace with the content after =======
        fixed_content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?=======', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'>>>>>>>.*?', '', fixed_content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
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
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()
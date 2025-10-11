#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/React files
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in {file_path}")
        
        # Pattern 1: Choose the second version (after =======) for most cases
        # This pattern handles the common case where we want the newer version
        pattern1 = r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+'
        content = re.sub(pattern1, r'\1', content, flags=re.DOTALL)
        
        # Pattern 2: Handle cases where there might be multiple conflict markers
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+', '', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> cursor/fix-errors-and-merge-to-main-[a-f0-9]+.*?\n', '', content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all TypeScript/React files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_files += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
    
    print(f"Fixed merge conflicts in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
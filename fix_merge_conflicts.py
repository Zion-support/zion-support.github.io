#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the latest version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]*'
        
        # Replace conflicts with the content after =======
        fixed_content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*', '', fixed_content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'^<<<<<<< HEAD.*?$', '', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^=======.*?$', '', fixed_content, flags=re.MULTILINE)
        fixed_content = re.sub(r'^>>>>>>> [^\n]*$', '', fixed_content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/app/**/*.js',
        '/workspace/app/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the HEAD version and cleaning up markers."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and choose HEAD version
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        def replace_conflict(match):
            head_content = match.group(1)
            # Clean up any remaining conflict markers
            head_content = re.sub(r'<<<<<<< HEAD\n?', '', head_content)
            head_content = re.sub(r'=======\n?', '', head_content)
            head_content = re.sub(r'>>>>>>> [^\n]+\n?', '', head_content)
            return head_content
        
        # Replace all merge conflicts
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n?', '', new_content)
        new_content = re.sub(r'=======\n?', '', new_content)
        new_content = re.sub(r'>>>>>>> [^\n]+\n?', '', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files in the app directory
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/src/**/*.tsx',
        '/workspace/src/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nFixed merge conflicts in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '' not in content:
            return False
        
        print(f"Fixing merge conflicts in {file_path}")
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match merge conflict blocks
        conflict_pattern = r'\n(.*?)\n.*?\n        
        # Replace with just the HEAD content
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content + '\n'
        
        # Apply the replacement
        new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        new_content = re.sub(r'\n?', '', new_content)
        new_content = re.sub(r'\n?', '', new_content)
        new_content = re.sub(r'        
        # Clean up multiple consecutive newlines
        new_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
    ]
    
    files_processed = 0
    files_modified = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path or 'original' in file_path:
                continue
                
            files_processed += 1
            if fix_merge_conflicts(file_path):
                files_modified += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_modified} files")

if __name__ == "__main__":
    main()
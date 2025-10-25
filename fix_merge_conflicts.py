#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by choosing HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the content after the last =======
        # This assumes the most recent version is after the last =======
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        conflict_depth = 0
        
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n?'
        
        # Replace with HEAD version (first capture group)
        def replace_conflict(match):
            head_content = match.group(1)
            # Remove any trailing newlines that might cause issues
            return head_content.rstrip() + '\n'
        
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Write back the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
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
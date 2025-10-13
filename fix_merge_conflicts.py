#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match merge conflicts
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        
        # Replace with just the HEAD content
        fixed_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n', '', fixed_content)
        fixed_content = re.sub(r'=======.*?\n>>>>>>> [^\n]+\n', '', fixed_content, flags=re.DOTALL)
        
        # Clean up any extra newlines
        fixed_content = re.sub(r'\n\n\n+', '\n\n', fixed_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    file_patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    files_with_conflicts = []
    
    for pattern in file_patterns:
        files_with_conflicts.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that actually have merge conflicts
    files_to_fix = []
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    files_to_fix.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_to_fix)} files with merge conflicts")
    
    # Fix each file
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
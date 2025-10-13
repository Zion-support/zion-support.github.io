#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+'
        
        # Replace with the content after ======= (the newer version)
        resolved_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error resolving {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_with_conflicts = []
    for pattern in patterns:
        files_with_conflicts.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that actually have merge conflicts
    files_to_fix = []
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                if '<<<<<<< HEAD' in f.read():
                    files_to_fix.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_to_fix)} files with merge conflicts")
    
    # Resolve conflicts in each file
    success_count = 0
    for file_path in files_to_fix:
        if resolve_merge_conflicts(file_path):
            success_count += 1
    
    print(f"Successfully resolved conflicts in {success_count}/{len(files_to_fix)} files")

if __name__ == "__main__":
    main()
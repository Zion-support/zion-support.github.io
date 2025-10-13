#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by removing conflict markers and keeping the latest version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers and keep the latest version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*\n?'
        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers
        pattern2 = r'<<<<<<< HEAD.*?>>>>>>> [^\n]*\n?'
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> [^\n]*\n?', '', content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files with merge conflicts
    files_with_conflicts = []
    
    # Search in app directory
    for root, dirs, files in os.walk('app'):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            files_with_conflicts.append(file_path)
                except:
                    continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    # Fix each file
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
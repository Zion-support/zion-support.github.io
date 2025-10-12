#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+'
        
        # Replace merge conflicts with HEAD content
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all files with merge conflicts
    files_with_conflicts = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other irrelevant directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css', '.html', '.md')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            files_with_conflicts.append(file_path)
                except:
                    continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
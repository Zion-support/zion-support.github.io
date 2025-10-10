#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove merge conflict markers and keep the newer version (after =======)
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        keep_section = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_section = False
                continue
            elif line.strip() == '=======':
                keep_section = True
                continue
            elif line.strip() == '>>>>>>> cursor/fix-errors-and-merge-to-main-46ce' or line.strip().startswith('>>>>>>> cursor/website-audit-and-update-with-deployment-'):
                in_conflict = False
                keep_section = False
                continue
            elif in_conflict and not keep_section:
                # Skip lines in the first section (HEAD)
                continue
            else:
                new_lines.append(line)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
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
        # Skip node_modules and .git directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
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
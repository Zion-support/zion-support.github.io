#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts and syntax errors
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
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>> ' not in content:
            return False
        
        # Remove all merge conflict markers and keep HEAD content
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        keep_head = True
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                in_conflict = True
                keep_head = True
                continue
            elif line.strip().startswith('======='):
                keep_head = False
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                keep_head = True
                continue
            elif in_conflict and not keep_head:
                continue
            else:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_duplicate_keys(file_path):
    """Fix duplicate keys in object literals"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for duplicate icon keys
        if 'icon:' in content:
            # Simple fix: remove duplicate icon entries
            lines = content.split('\n')
            new_lines = []
            seen_icon = False
            
            for line in lines:
                if 'icon:' in line and seen_icon:
                    # Skip duplicate icon lines
                    continue
                elif 'icon:' in line:
                    seen_icon = True
                    new_lines.append(line)
                else:
                    new_lines.append(line)
            
            new_content = '\n'.join(new_lines)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed duplicate keys in: {file_path}")
                return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing duplicate keys in {file_path}: {e}")
        return False

def main():
    """Main function to fix all issues"""
    # Get all files with potential issues
    files_to_check = []
    
    # Search for files with merge conflict markers or potential issues
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other irrelevant directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build', 'recovered-branches']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if any(marker in content for marker in ['<<<<<<< HEAD', '=======', '>>>>>>> ', 'icon:']):
                            files_to_check.append(file_path)
                except:
                    continue
    
    print(f"Found {len(files_to_check)} files to check")
    
    fixed_conflicts = 0
    fixed_duplicates = 0
    
    for file_path in files_to_check:
        if fix_merge_conflicts(file_path):
            fixed_conflicts += 1
        if fix_duplicate_keys(file_path):
            fixed_duplicates += 1
    
    print(f"Fixed merge conflicts in {fixed_conflicts} files")
    print(f"Fixed duplicate keys in {fixed_duplicates} files")

if __name__ == "__main__":
    main()
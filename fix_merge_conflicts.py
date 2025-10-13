#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>.*?(?:\n|$)'
        
        # Replace conflicts with the newer version (after =======)
        def replace_conflict(match):
            newer_content = match.group(1)
            # Clean up any remaining conflict markers
            newer_content = re.sub(r'>>>>>>>.*?(?:\n|$)', '', newer_content)
            return newer_content.strip() + '\n'
        
        # Apply the fix
        fixed_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?\n', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'=======.*?\n', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'>>>>>>>.*?\n', '', fixed_content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and TSX files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'utils/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.exists(file_path):
                total_count += 1
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                        if fix_merge_conflicts(file_path):
                            fixed_count += 1
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
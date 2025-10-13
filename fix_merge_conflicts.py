#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>.*?'
        
        # Replace with the content after ======= (newer version)
        def replace_conflict(match):
            newer_content = match.group(1)
            return newer_content.strip()
        
        # Apply the fix
        fixed_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'=======.*?>>>>>>>.*?', '', fixed_content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    files_to_fix = []
    
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f]
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>>' in content:
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
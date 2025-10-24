#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the version after ======="""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?=======', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
            
        # Take the part after ======= (usually the better version)
        after_equal = parts[1]
        
        # Remove the >>>>>>> marker and everything after it
        after_equal = re.sub(r'>>>>>>>.*$', '', after_equal, flags=re.MULTILINE)
        
        # Clean up any remaining merge conflict markers
        after_equal = re.sub(r'<<<<<<< HEAD.*?=======', '', after_equal, flags=re.DOTALL)
        after_equal = re.sub(r'>>>>>>>.*$', '', after_equal, flags=re.MULTILINE)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(after_equal)
            
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all .tsx files with merge conflicts
    tsx_files = glob.glob('**/*.tsx', recursive=True)
    fixed_count = 0
    
    for file_path in tsx_files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()

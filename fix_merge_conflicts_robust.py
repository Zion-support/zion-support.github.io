#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts by choosing the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # More robust pattern to handle different merge conflict formats
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        # Replace all merge conflicts with HEAD version
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        while '<<<<<<< HEAD' in new_content:
            # Find the first conflict
            start = new_content.find('<<<<<<< HEAD')
            middle = new_content.find('=======', start)
            end = new_content.find('>>>>>>>', middle)
            
            if start != -1 and middle != -1 and end != -1:
                # Extract HEAD content
                head_content = new_content[start+12:middle].strip()
                # Replace the entire conflict block with HEAD content
                new_content = new_content[:start] + head_content + new_content[end+8:]
            else:
                break
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()

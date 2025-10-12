#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by choosing the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Pattern 1: <<<<<<< HEAD\n...\n=======\n...\n>>>>>>> ...
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        # Pattern 2: <<<<<<< HEAD\n...\n=======\n>>>>>>> ...
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======\n>>>>>>> [^\n]+'
        
        # Pattern 3: <<<<<<< HEAD\n=======\n...\n>>>>>>> ...
        pattern3 = r'<<<<<<< HEAD\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        # Pattern 4: <<<<<<< HEAD\n...\n=======\n\n>>>>>>> ...
        pattern4 = r'<<<<<<< HEAD\n(.*?)\n=======\n\n>>>>>>> [^\n]+'
        
        original_content = content
        
        # Apply pattern 1 (both sides have content)
        content = re.sub(pattern1, r'\2', content, flags=re.DOTALL)
        
        # Apply pattern 2 (only HEAD has content)
        content = re.sub(pattern2, '', content, flags=re.DOTALL)
        
        # Apply pattern 3 (only newer version has content)
        content = re.sub(pattern3, r'\1', content, flags=re.DOTALL)
        
        # Apply pattern 4 (HEAD has content, newer version is empty)
        content = re.sub(pattern4, '', content, flags=re.DOTALL)
        
        # If content changed, write it back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files in app directory
    pattern = "app/**/*.{ts,tsx}"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_merge_conflicts(file_path):
            print(f"Fixed merge conflicts in: {file_path}")
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
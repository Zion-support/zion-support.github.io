#!/usr/bin/env python3
import os
import re
import glob

def fix_conflicts(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all merge conflict markers and choose the newer version (after 
        
        # Also handle cases without (just remove the markers)
        new_content = re.sub(r'        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed conflicts in {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    files = glob.glob('**/*.ts', recursive=True) + glob.glob('**/*.tsx', recursive=True)
    files = [f for f in files if not any(exclude in f for exclude in ['node_modules', '.git'])]
    
    fixed_count = 0
    for file_path in files:
        if fix_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
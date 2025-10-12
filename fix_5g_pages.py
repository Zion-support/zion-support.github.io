#!/usr/bin/env python3
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file"""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove merge conflict markers and keep the second version (after =======)
    content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> .*?\n', r'\1', content, flags=re.DOTALL)
    
    # Clean up any remaining merge conflict markers
    content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n', '', content, flags=re.DOTALL)
    content = re.sub(r'>>>>>>> .*?\n', '', content)
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"Fixed merge conflicts in {file_path}")

def main():
    # Find all 5G pages
    pattern = "app/5g-*/page.tsx"
    files = glob.glob(pattern)
    
    for file_path in files:
        if os.path.exists(file_path):
            fix_merge_conflicts(file_path)
    
    print(f"Processed {len(files)} files")

if __name__ == "__main__":
    main()
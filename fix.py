#!/usr/bin/env python3
import os
import re

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Remove conflict markers and keep HEAD version
        content = re.sub(r'<<<<<<< HEAD(.*?)=======.*?>>>>>>>.*?', r'\1', content, flags=re.DOTALL)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    fixed = 0
    for root, dirs, files in os.walk('/workspace'):
        if '.git' in root:
            continue
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx')):
                if fix_file(os.path.join(root, file)):
                    fixed += 1
    print(f"Fixed {fixed} files")

if __name__ == "__main__":
    main()
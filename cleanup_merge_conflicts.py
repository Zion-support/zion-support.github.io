#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflicts from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the HEAD version
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n'
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining merge conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n', '', cleaned_content)
        cleaned_content = re.sub(r'=======\n', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+\n', '', cleaned_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Cleaned merge conflicts from {file_path}")
        return True
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/React files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js']
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                # Check if file has merge conflicts
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        clean_merge_conflicts(file_path)

if __name__ == "__main__":
    main()
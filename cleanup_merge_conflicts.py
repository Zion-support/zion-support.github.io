#!/usr/bin/env python3
import re

def clean_merge_conflicts(file_path):
    """Clean up merge conflicts in a file by keeping the HEAD version"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match merge conflicts
    pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
    
    # Replace with just the HEAD version
    cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(cleaned_content)
    
    print(f"Cleaned merge conflicts in {file_path}")

if __name__ == "__main__":
    clean_merge_conflicts('/workspace/app/data/servicesData.ts')
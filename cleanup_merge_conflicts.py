#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> cursor/.*\n?', '', content)
        
        # Clean up any double newlines that might have been created
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Cleaned: {file_path}")
        return True
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        '/workspace/app/**/*.tsx',
        '/workspace/app/**/*.ts',
        '/workspace/app/**/*.js',
        '/workspace/app/**/*.jsx'
    ]
    
    files_to_clean = []
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if clean_merge_conflicts(file_path):
            cleaned_count += 1
    
    print(f"Cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import os
import re
import glob

def clean_file(file_path):
    """Clean up merge conflict markers and other issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Remove cursor branch references
        content = re.sub(r' cursor/[^\s]+', '', content)
        content = re.sub(r'cursor/[^\s]+', '', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'[ \t]+\n', '\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Find all app files
    file_patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_cleaned = 0
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                if clean_file(file_path):
                    files_cleaned += 1
    
    print(f"Cleaned {files_cleaned} files")

if __name__ == "__main__":
    main()

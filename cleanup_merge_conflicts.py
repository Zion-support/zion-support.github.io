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
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+\n?'
        cleaned_content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n?', '', cleaned_content)
        cleaned_content = re.sub(r'=======\n?', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+\n?', '', cleaned_content)
        
        # Clean up multiple empty lines
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        # Only write if content changed
        if cleaned_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            print(f"Cleaned: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx'
    ]
    
    files_processed = 0
    files_cleaned = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if clean_merge_conflicts(file_path):
                    files_cleaned += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Cleaned {files_cleaned} files")

if __name__ == "__main__":
    main()
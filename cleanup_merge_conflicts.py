#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Remove merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?\n', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>> .*?\n', '', content, flags=re.DOTALL)
        
        # Clean up any extra newlines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Cleaned: {file_path}")
        return True
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Find all .tsx files with merge conflicts
    tsx_files = glob.glob('/workspace/app/**/*.tsx', recursive=True)
    
    cleaned_count = 0
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<<<<<<< HEAD' in content:
                if clean_merge_conflicts(file_path):
                    cleaned_count += 1
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"Cleaned {cleaned_count} files with merge conflicts")

if __name__ == "__main__":
    main()
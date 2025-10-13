#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from TypeScript/TSX files
"""
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version (first part)
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< [^\n]+\n.*?\n=======.*?\n>>>>>>> [^\n]+\n?', '', cleaned_content, flags=re.DOTALL)
        
        # Clean up any double newlines that might have been created
        cleaned_content = re.sub(r'\n\n\n+', '\n\n', cleaned_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Cleaned: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    """Main function to clean all TSX/TS files"""
    # Find all TypeScript/TSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_clean = []
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_clean)} files to clean")
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if clean_merge_conflicts(file_path):
            cleaned_count += 1
    
    print(f"Successfully cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
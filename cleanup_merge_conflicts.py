#!/usr/bin/env python3
"""
Script to clean up merge conflicts in the codebase
"""
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflicts from a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Cleaned: {file_path}")
        return True
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    """Main function to clean all merge conflicts"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'utils/**/*.tsx',
        'services/**/*.ts',
        'hooks/**/*.ts',
        'types/**/*.ts'
    ]
    
    files_to_clean = []
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    # Also check for specific files that might have conflicts
    specific_files = [
        'App.tsx',
        'app/layout.tsx',
        'app/page.tsx'
    ]
    
    for file in specific_files:
        if os.path.exists(file):
            files_to_clean.append(file)
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if os.path.exists(file_path):
            if clean_merge_conflicts(file_path):
                cleaned_count += 1
    
    print(f"\nCleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from files
"""
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and their content
        # Pattern to match <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<<.*?\n(.*?)\n=======\n(.*?)\n>>>>>>>.*?\n'
        
        # For now, let's keep the first version (HEAD) and remove the conflict markers
        # This is a simple approach - in a real scenario you'd want more sophisticated resolution
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also remove standalone conflict markers
        cleaned_content = re.sub(r'^<<<<<<<.*?\n', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'^=======\n', '', cleaned_content, flags=re.MULTILINE)
        cleaned_content = re.sub(r'^>>>>>>>.*?\n', '', cleaned_content, flags=re.MULTILINE)
        
        # Clean up any double newlines that might have been created
        cleaned_content = re.sub(r'\n\n\n+', '\n\n', cleaned_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Cleaned merge conflicts from: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    """Main function to clean all files with merge conflicts"""
    # Get all files with merge conflict markers
    files_to_clean = []
    
    # Search for common file extensions
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js',
        '**/*.test.tsx',
        '**/*.test.ts'
    ]
    
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that actually contain merge conflict markers
    files_with_conflicts = []
    for file_path in files_to_clean:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                    files_with_conflicts.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    # Clean each file
    cleaned_count = 0
    for file_path in files_with_conflicts:
        if clean_merge_conflicts(file_path):
            cleaned_count += 1
    
    print(f"Successfully cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
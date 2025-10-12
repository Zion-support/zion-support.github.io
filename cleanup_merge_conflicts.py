#!/usr/bin/env python3
import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a file, keeping our version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        # Keep everything before <<<<<<< HEAD and after =======
        # Remove everything between <<<<<<< HEAD and =======
        # Remove everything after >>>>>>> until end of conflict
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>.*?(?=<<<<<<< HEAD|$)'
        
        # Replace with just our version (what's after =======)
        cleaned = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there's no ======= (just remove the conflict markers)
        cleaned = re.sub(r'<<<<<<< HEAD.*?>>>>>>>.*?(?=<<<<<<< HEAD|$)', '', cleaned, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        cleaned = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?(?=<<<<<<< HEAD|$)', '', cleaned, flags=re.DOTALL)
        cleaned = re.sub(r'<<<<<<< HEAD.*?>>>>>>>.*?(?=<<<<<<< HEAD|$)', '', cleaned, flags=re.DOTALL)
        
        # Remove any remaining individual conflict markers
        cleaned = re.sub(r'<<<<<<< HEAD.*', '', cleaned)
        cleaned = re.sub(r'=======.*', '', cleaned)
        cleaned = re.sub(r'>>>>>>>.*', '', cleaned)
        
        # Clean up extra whitespace
        cleaned = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned)
        
        print(f"Cleaned: {file_path}")
        return True
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_clean = []
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules
    files_to_clean = [f for f in files_to_clean if 'node_modules' not in f]
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if clean_merge_conflicts(file_path):
            cleaned_count += 1
    
    print(f"Cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
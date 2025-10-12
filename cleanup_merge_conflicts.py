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
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+'
        cleaned_content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD.*', '', cleaned_content, flags=re.DOTALL)
        cleaned_content = re.sub(r'=======.*', '', cleaned_content, flags=re.DOTALL)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+.*', '', cleaned_content, flags=re.DOTALL)
        
        # Clean up extra whitespace and empty lines
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        cleaned_content = cleaned_content.strip() + '\n'
        
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
    """Main function to process all files"""
    # File patterns to process
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    cleaned_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            total_count += 1
            if clean_merge_conflicts(file_path):
                cleaned_count += 1
    
    print(f"\nProcessed {total_count} files, cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
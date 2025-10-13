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
        
        # Remove merge conflict markers
        # Pattern: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+'
        cleaned_content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD.*?', '', cleaned_content, flags=re.DOTALL)
        cleaned_content = re.sub(r'=======.*?', '', cleaned_content, flags=re.DOTALL)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+.*?', '', cleaned_content, flags=re.DOTALL)
        
        # Clean up extra whitespace and empty lines
        lines = cleaned_content.split('\n')
        cleaned_lines = []
        prev_empty = False
        
        for line in lines:
            stripped = line.strip()
            if stripped:
                cleaned_lines.append(line)
                prev_empty = False
            elif not prev_empty:
                cleaned_lines.append('')
                prev_empty = True
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(cleaned_lines))
        
        print(f"Cleaned: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    """Main function to clean all files"""
    # File patterns to clean
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js',
        '**/*.md',
        '**/*.json'
    ]
    
    cleaned_count = 0
    error_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next']):
                continue
                
            if clean_merge_conflicts(file_path):
                cleaned_count += 1
            else:
                error_count += 1
    
    print(f"\nCleaned {cleaned_count} files, {error_count} errors")

if __name__ == "__main__":
    main()
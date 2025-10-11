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
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Clean up any remaining merge conflict artifacts
        content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Remove duplicate lines that might have been created
        lines = content.split('\n')
        cleaned_lines = []
        prev_line = None
        
        for line in lines:
            if line.strip() != prev_line or line.strip() == '':
                cleaned_lines.append(line)
                prev_line = line.strip()
        
        content = '\n'.join(cleaned_lines)
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Cleaned: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    """Main function to clean all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_to_clean = []
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_clean = list(set(files_to_clean))
    
    print(f"Found {len(files_to_clean)} files to clean")
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if os.path.exists(file_path):
            if clean_merge_conflicts(file_path):
                cleaned_count += 1
    
    print(f"Successfully cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
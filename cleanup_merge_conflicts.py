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
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n?', '', content)
        
        # Clean up any remaining empty lines or artifacts
        lines = content.split('\n')
        cleaned_lines = []
        skip_next = False
        
        for i, line in enumerate(lines):
            if skip_next:
                skip_next = False
                continue
                
            # Skip lines that are just whitespace or empty
            if line.strip() == '':
                # Only add empty line if previous line wasn't empty
                if cleaned_lines and cleaned_lines[-1].strip() != '':
                    cleaned_lines.append('')
                continue
            
            # Skip lines that look like merge conflict artifacts
            if re.match(r'^[<>=]{7}', line.strip()):
                continue
                
            cleaned_lines.append(line)
        
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
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_clean = []
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want
    files_to_clean = [f for f in files_to_clean if 'node_modules' not in f and '.git' not in f]
    
    print(f"Found {len(files_to_clean)} files to process")
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if clean_merge_conflicts(file_path):
            cleaned_count += 1
    
    print(f"Successfully cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
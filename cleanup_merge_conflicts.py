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
        
        # Remove merge conflict markers and their content
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+\n?'
        cleaned_content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Also remove standalone conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n?', '', cleaned_content)
        cleaned_content = re.sub(r'=======\n?', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+\n?', '', cleaned_content)
        
        # Clean up multiple consecutive newlines
        cleaned_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', cleaned_content)
        
        # Remove empty lines at the beginning
        cleaned_content = cleaned_content.lstrip('\n')
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"Cleaned: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")
        return False

def main():
    """Main function to clean all TSX/TS files"""
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_to_clean = []
    for pattern in patterns:
        files_to_clean.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    files_to_clean = list(set(files_to_clean))
    
    print(f"Found {len(files_to_clean)} files to check")
    
    cleaned_count = 0
    for file_path in files_to_clean:
        if os.path.isfile(file_path):
            # Check if file contains merge conflict markers
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    if clean_merge_conflicts(file_path):
                        cleaned_count += 1
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"Cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
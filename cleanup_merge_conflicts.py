#!/usr/bin/env python3
"""
Comprehensive merge conflict cleanup script
This script will clean up all merge conflict markers from the codebase
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the HEAD version
        pattern = r'.*?\n
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining merge conflict markers
        cleaned_content = re.sub(r'\n', '', cleaned_content)
        cleaned_content = re.sub(r'
        
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'        cleaned_content = re.sub(r'\s*\n?', '', cleaned_content)
        cleaned_content = re.sub(r'        
        # Clean up extra whitespace
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        if cleaned_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to clean all merge conflicts"""
    workspace = Path('/workspace')
    
    # File extensions to process
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.json', '*.md', '*.cjs', '*.mjs']
    
    total_files = 0
    cleaned_files = 0
    
    print("Starting merge conflict cleanup...")
    
    for ext in extensions:
        pattern = workspace / '**' / ext
        files = glob.glob(str(pattern), recursive=True)
        
        for file_path in files:
            if os.path.isfile(file_path):
                # Check if file has merge conflicts
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '' in content:
                        clean_merge_conflicts(file_path)

if __name__ == "__main__":
    main()
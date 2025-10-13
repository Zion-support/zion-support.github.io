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
        
<<<<<<< HEAD
        # Remove merge conflict markers and keep the HEAD version
        # Pattern to match merge conflicts and keep the HEAD version
        pattern = r'.*?\n
        cleaned_content = re.sub(pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Remove any remaining merge conflict markers
        cleaned_content = re.sub(r'\n', '', cleaned_content)
        cleaned_content = re.sub(r'
=======
        # Remove merge conflict markers and keep the first version (HEAD)
        # Pattern to match:         pattern = r'        
        # Replace with just the HEAD version (first capture group)
        cleaned_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be just         pattern2 = r'        cleaned_content = re.sub(pattern2, r'\1', cleaned_content, flags=re.DOTALL)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
        
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
<<<<<<< HEAD
            if os.path.isfile(file_path):
                # Check if file has merge conflicts
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '' in content:
                        clean_merge_conflicts(file_path)
=======
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            total_files += 1
            
            if clean_merge_conflicts(file_path):
                cleaned_files += 1
                print(f"Cleaned: {file_path}")
    
    print(f"\nCleanup complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files cleaned: {cleaned_files}")
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5

if __name__ == "__main__":
    main()
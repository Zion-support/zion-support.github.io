#!/usr/bin/env python3
"""
Script to clean up merge conflict markers from files.
This script will resolve conflicts by keeping the content after the ======= marker.
"""

import os
import re
import glob
from pathlib import Path

def clean_merge_conflicts(file_path):
    """Clean merge conflict markers from a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<<' not in content or '=======' not in content or '>>>>>>>' not in content:
            return False
        
        # Split by conflict markers and keep the last part (after =======)
        # This handles multiple conflicts in one file
        parts = re.split(r'<<<<<<<.*?\n', content)
        cleaned_content = parts[0]  # Keep content before first conflict
        
        for part in parts[1:]:
            if '=======' in part:
                # Split by ======= and keep the part after it
                conflict_parts = part.split('=======', 1)
                if len(conflict_parts) > 1:
                    after_equal = conflict_parts[1]
                    # Remove the >>>>>>> line and everything after it
                    after_equal = re.sub(r'>>>>>>>.*$', '', after_equal, flags=re.MULTILINE)
                    cleaned_content += after_equal
                else:
                    cleaned_content += part
            else:
                cleaned_content += part
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to clean all files with merge conflicts."""
    # Get all files with merge conflict markers
    conflict_files = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other directories we don't want to process
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build', '.next']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.html', '.css')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<<' in content and '=======' in content and '>>>>>>>' in content:
                            conflict_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    cleaned_count = 0
    for file_path in conflict_files:
        if clean_merge_conflicts(file_path):
            cleaned_count += 1
            print(f"Cleaned: {file_path}")
    
    print(f"Successfully cleaned {cleaned_count} files")

if __name__ == "__main__":
    main()
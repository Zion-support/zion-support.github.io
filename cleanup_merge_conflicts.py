#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the HEAD version.
This will remove all merge conflict markers and keep only the HEAD version.
"""

import os
import re
import glob

def clean_merge_conflicts(file_path):
    """Clean merge conflicts from a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict blocks
        # <<<<<<< HEAD
        # ... content ...
        # =======
        # ... other content ...
        # >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+'
        
        # Replace with just the HEAD content
        cleaned_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts in one file
        # Remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+', '', cleaned_content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+', '', cleaned_content, flags=re.DOTALL)
        
        # Remove any standalone conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD\n', '', cleaned_content)
        cleaned_content = re.sub(r'=======\n', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [^\n]+\n', '', cleaned_content)
        
        # Clean up extra whitespace
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to clean all merge conflicts."""
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_with_conflicts = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file has merge conflicts
                if '<<<<<<< HEAD' in content:
                    files_with_conflicts += 1
                    print(f"Processing: {file_path}")
                    
                    if clean_merge_conflicts(file_path):
                        files_processed += 1
                        print(f"✓ Cleaned: {file_path}")
                    else:
                        print(f"✗ Failed: {file_path}")
                        
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Files with conflicts found: {files_with_conflicts}")
    print(f"Files successfully cleaned: {files_processed}")

if __name__ == "__main__":
    main()
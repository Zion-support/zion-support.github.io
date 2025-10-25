#!/usr/bin/env python3
"""
<<<<<<< HEAD
Script to clean up merge conflict markers from files.
This script will resolve merge conflicts by keeping the latest version (after the last =======).
=======
Script to automatically resolve merge conflicts by choosing the HEAD version.
This will remove all merge conflict markers and keep only the HEAD version.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
"""

import os
import re
import glob
from pathlib import Path

<<<<<<< HEAD
def clean_merge_conflicts(content):
    """Clean merge conflict markers from file content."""
    # Pattern to match merge conflict markers
    conflict_pattern = r'<<<<<<<.*?\n(.*?)\n=======.*?\n(.*?)\n>>>>>>>.*?\n'
    
    def replace_conflict(match):
        # Get the content after the last =======
        after_equals = match.group(2)
        return after_equals
    
    # Replace all merge conflicts
    cleaned = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
    
    # Also handle cases where there might be multiple conflict markers in sequence
    # Remove any remaining conflict markers
    cleaned = re.sub(r'<<<<<<<.*?\n', '', cleaned, flags=re.DOTALL)
    cleaned = re.sub(r'=======.*?\n', '', cleaned, flags=re.DOTALL)
    cleaned = re.sub(r'>>>>>>>.*?\n', '', cleaned, flags=re.DOTALL)
    
    return cleaned

def process_file(file_path):
    """Process a single file to remove merge conflicts."""
=======
def clean_merge_conflicts(file_path):
    """Clean merge conflicts from a single file."""
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Check if file has merge conflicts
        if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
            print(f"Processing: {file_path}")
            cleaned_content = clean_merge_conflicts(content)
            
            # Write back the cleaned content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            print(f"✓ Cleaned: {file_path}")
            return True
        else:
            return False
            
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")
        return False

def main():
<<<<<<< HEAD
    """Main function to process all files."""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        '*.tsx',
        '*.ts',
        '*.jsx',
        '*.js'
=======
    """Main function to clean all merge conflicts."""
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
    ]
    
    files_processed = 0
    files_with_conflicts = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
<<<<<<< HEAD
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_cleaned += 1
    
    print(f"\nSummary:")
    print(f"Files processed: {files_processed}")
    print(f"Files cleaned: {files_cleaned}")
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

if __name__ == "__main__":
    main()
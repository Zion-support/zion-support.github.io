#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts and corrupted files
"""

import os
import re
import glob
import shutil

def is_corrupted_file(file_path):
    """Check if a file appears to be corrupted based on common patterns."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for common corruption patterns
        corruption_patterns = [
            r'/\* content \*/',  # Malformed comments
            r'loading: \(\) => </div><div',  # Malformed JSX
            r'export const metadata: Metadata = \{/\* content \*/',  # Malformed metadata
            r'<div>/\* content \*/',  # Malformed JSX
            r'<span className="text-left">"',  # Unclosed quotes
            r'<div className="text-left">"',  # Unclosed quotes
            r'<div className="text-left"> </div><div className="text-left">"',  # Malformed structure
        ]
        
        for pattern in corruption_patterns:
            if re.search(pattern, content):
                return True
                
        return False
        
    except Exception:
        return True

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content into lines
        lines = content.split('\n')
        new_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_end = False
                continue
            elif line.strip() == '=======':
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                new_lines.append(line)
        
        # Write the cleaned content back
        new_content = '\n'.join(new_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    files_deleted = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '__pycache__']):
                continue
                
            files_processed += 1
            
            # Check if file is corrupted
            if is_corrupted_file(file_path):
                print(f"Deleting corrupted file: {file_path}")
                try:
                    os.remove(file_path)
                    files_deleted += 1
                except Exception as e:
                    print(f"Error deleting {file_path}: {e}")
                continue
            
            # Try to fix merge conflicts
            if fix_merge_conflicts(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed merge conflicts in {files_fixed} files")
    print(f"Deleted {files_deleted} corrupted files")

if __name__ == "__main__":
    main()
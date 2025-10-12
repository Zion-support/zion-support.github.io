#!/usr/bin/env python3
"""
Fix remaining merge conflict markers
"""

import os
import re
import glob

def fix_merge_conflicts(content):
    """Fix merge conflicts by choosing the appropriate version"""
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Handle merge conflict markers
        if line.startswith('<<<<<<< HEAD'):
            # Skip until we find the separator
            i += 1
            while i < len(lines) and not lines[i].startswith('======='):
                i += 1
            i += 1  # Skip the separator
            
            # Keep the content after ======= until >>>>>>> 
            while i < len(lines) and not lines[i].startswith('>>>>>>>'):
                result.append(lines[i])
                i += 1
            i += 1  # Skip the closing marker
        elif line.startswith('=======') or line.startswith('>>>>>>>'):
            # Skip these markers
            i += 1
        else:
            result.append(line)
            i += 1
    
    return '\n'.join(result)

def process_file(file_path):
    """Process a single file to fix merge conflicts"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix merge conflicts
        content = fix_merge_conflicts(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '/workspace/**/*.tsx',
        '/workspace/**/*.ts',
        '/workspace/**/*.jsx',
        '/workspace/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path) and not file_path.startswith('/workspace/node_modules'):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()
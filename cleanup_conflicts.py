#!/usr/bin/env python3
"""
Comprehensive script to clean up all merge conflict markers
"""
import os
import re
import glob

def cleanup_file(file_path):
    """Clean up merge conflict markers in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove all merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>>.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?=======', '', content, flags=re.DOTALL)
        content = re.sub(r'>>>>>>>.*?', '', content, flags=re.DOTALL)
        
        # Remove branch references
        content = re.sub(r'origin/cursor/[a-zA-Z0-9-]+', '', content)
        content = re.sub(r'cursor/[a-zA-Z0-9-]+', '', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned up: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to clean up all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_cleaned = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if cleanup_file(file_path):
                    files_cleaned += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Cleaned up {files_cleaned} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts
"""
import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a file by removing all conflict markers and keeping content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove all merge conflict markers and keep the content
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]*'
        
        # Replace with empty string to remove conflicts
        cleaned_content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        # Also remove any remaining conflict markers
        cleaned_content = re.sub(r'<<<<<<< HEAD.*?\n', '', cleaned_content)
        cleaned_content = re.sub(r'=======.*?\n', '', cleaned_content)
        cleaned_content = re.sub(r'>>>>>>> [^\n]*\n?', '', cleaned_content)
        
        # Clean up any double newlines
        cleaned_content = re.sub(r'\n\s*\n\s*\n', '\n\n', cleaned_content)
        
        # Only write if content changed
        if cleaned_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            print(f"Fixed conflicts in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_merge_conflicts(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed conflicts in {files_fixed} files")

if __name__ == "__main__":
    main()
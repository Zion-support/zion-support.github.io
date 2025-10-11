#!/usr/bin/env python3
import os
import re
import glob

def fix_escaped_quotes(file_path):
    """Fix escaped quotes in import statements"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix escaped quotes
        content = content.replace("\\'", "'")
        content = content.replace('\\"', '"')
        
        # Fix common import issues
        content = re.sub(r"import\s*{\s*(\w+)\s*}\s*from\s*\\'([^\\']+)\\'", r"import { \1 } from '\2'", content)
        content = re.sub(r"import\s*{\s*(\w+)\s*}\s*from\s*\\\"([^\\\"]+)\\\"", r'import { \1 } from "\2"', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed escaped quotes in: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if 'node_modules' not in f and 'dist' not in f and '.next' not in f]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_escaped_quotes(file_path):
            fixed_count += 1
    
    print(f"Fixed escaped quotes in {fixed_count} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import os
import re
import glob

def fix_import_errors(file_path):
    """Fix malformed import statements"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed imports
        fixes = [
            # Fix empty imports
            (r'import\s+from\s+[\'"][^\'"]+[\'"]', 'import { Helmet } from \'react-helmet-async\''),
            (r'import\s+{\s*}\s*from\s+[\'"][^\'"]+[\'"]', 'import { Helmet } from \'react-helmet-async\''),
            
            # Fix incomplete imports
            (r'import\s+{\s*(\w+)\s*}\s*from\s+[\'"][^\'"]+[\'"]\s*;\s*$', r'import { \1 } from \'react-helmet-async\';'),
            
            # Fix missing import names
            (r'import\s+{\s*(\w+)\s*}\s*from\s+[\'"][^\'"]+[\'"]\s*;\s*$', r'import { \1 } from \'react-helmet-async\';'),
        ]
        
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
        
        # Fix specific common issues
        if 'import  from' in content:
            content = content.replace('import  from', 'import { Helmet } from')
        
        if 'import {} from' in content:
            content = content.replace('import {} from', 'import { Helmet } from')
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed import errors in: {file_path}")
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
        if fix_import_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed import errors in {fixed_count} files")

if __name__ == "__main__":
    main()
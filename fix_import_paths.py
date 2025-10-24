#!/usr/bin/env python3
"""
Script to fix import paths in nested directories
"""
import os
import glob

def fix_import_paths(file_path):
    """Fix import paths based on directory depth"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count directory depth
        depth = file_path.count('/') - 1  # Subtract 1 for the file itself
        
        if depth > 2:  # Files in nested directories
            # Calculate the correct relative path
            prefix = '../' * (depth - 2)
            content = content.replace('../components/', f'{prefix}components/')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed imports in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix import paths in all files"""
    patterns = [
        'app/**/page.tsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_import_paths(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed import paths in {files_fixed} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the newer version
(keeping the content after ======= and before >>>>>>>)
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflict blocks
        pattern = r'<<<<<<< HEAD.*?=======(.*?)        
        # Replace merge conflicts with the newer version (after =======)
        resolved_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD.*?=======', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.js',
        'components/**/*.jsx'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if resolve_merge_conflicts(file_path):
                    files_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved conflicts in {files_resolved} files")

if __name__ == "__main__":
    main()
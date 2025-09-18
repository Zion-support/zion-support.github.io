#!/usr/bin/env python3
"""
Script to resolve all merge conflicts in the repository
"""
import os
import re
import glob

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove all merge conflict markers and keep both sides
        # Pattern 1: Remove <<<<<<< HEAD, =======, >>>>>>> cursor lines
        content = re.sub(r'^<<<<<<< HEAD\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^=======\n', '', content, flags=re.MULTILINE)
        content = re.sub(r'^>>>>>>> cursor.*\n', '', content, flags=re.MULTILINE)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Resolved conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        '/workspace/**/*.tsx',
        '/workspace/**/*.ts',
        '/workspace/**/*.jsx',
        '/workspace/**/*.js'
    ]
    
    resolved_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build']):
                continue
                
            total_files += 1
            if resolve_conflicts_in_file(file_path):
                resolved_count += 1
    
    print(f"\nResolved conflicts in {resolved_count} out of {total_files} files")

if __name__ == "__main__":
    main()
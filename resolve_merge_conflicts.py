#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file by keeping the version after ======="""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD.*?=======', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            return False
        
        # Keep the part after ======= (usually the more complete version)
        # Remove the >>>>>>> branch-name part
        resolved_content = parts[1]
        resolved_content = re.sub(r'>>>>>>> .*?\n', '', resolved_content)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.md'
    ]
    
    resolved_count = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            total_files += 1
            if resolve_merge_conflicts(file_path):
                resolved_count += 1
    
    print(f"\nResolved merge conflicts in {resolved_count} out of {total_files} files checked.")

if __name__ == "__main__":
    main()
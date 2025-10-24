#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by accepting the current version (HEAD)
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file by accepting HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove all merge conflict markers and keep only HEAD content
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch-name
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+'
        resolved_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD\n?', '', resolved_content)
        resolved_content = re.sub(r'=======\n?', '', resolved_content)
        resolved_content = re.sub(r'>>>>>>> [^\n]+\n?', '', resolved_content)
        
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
    # Find all TypeScript/JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.js',
        '**/*.jsx',
        '**/*.json'
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
    
    print(f"\nResolved conflicts in {resolved_count} out of {total_files} files")

if __name__ == "__main__":
    main()
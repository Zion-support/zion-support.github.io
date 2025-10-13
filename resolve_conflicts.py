#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the newer version (after )
"""
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file by keeping the newer version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'\n(.*?)\n
        
        # Split by merge conflict markers
        parts = re.split(r'\n(.*?)\n\n(.*?)\n        conflict_pattern = r'        
        # Replace conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        conflict_pattern2 = r'\n(.*?)\n
        resolved_content = re.sub(conflict_pattern2, r'\1', resolved_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'\n', '', resolved_content)
        resolved_content = re.sub(r'
        
        conflict_pattern2 = r'        resolved_content = re.sub(conflict_pattern2, r'\1', resolved_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'        resolved_content = re.sub(r'\n', '', resolved_content)
        resolved_content = re.sub(r'        
        if content != resolved_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            print(f"Resolved conflicts in {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    conflicts_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if resolve_merge_conflicts(file_path):
                conflicts_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved conflicts in {conflicts_resolved} files")

if __name__ == "__main__":
    main()
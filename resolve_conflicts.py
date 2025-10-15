#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match merge conflict markers
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n'
        
        # Replace conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict markers in one block
        conflict_pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        resolved_content = re.sub(conflict_pattern2, r'\1', resolved_content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD\n', '', resolved_content)
        resolved_content = re.sub(r'=======\n', '', resolved_content)
        resolved_content = re.sub(r'>>>>>>> [^\n]+\n', '', resolved_content)
        
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
    # Find all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and dist directories
            if 'node_modules' in file_path or 'dist' in file_path:
                continue
                
            files_processed += 1
            if resolve_merge_conflicts(file_path):
                files_resolved += 1
    
    print(f"Processed {files_processed} files, resolved conflicts in {files_resolved} files")

if __name__ == "__main__":
    main()
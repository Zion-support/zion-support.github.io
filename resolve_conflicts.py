#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file by choosing the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) >= 3:
            # Choose the newer version (after =======)
            resolved_content = parts[0] + parts[2] + ''.join(parts[3:])
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            
            print(f"Resolved conflicts in {file_path}")
            return True
        else:
            print(f"Could not resolve conflicts in {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts',
        './components/**/*.tsx',
        './components/**/*.ts',
        './*.json'
    ]
    
    files_with_conflicts = []
    for pattern in patterns:
        files_with_conflicts.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that actually have conflicts
    files_to_process = []
    for file_path in files_with_conflicts:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    files_to_process.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_to_process)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in files_to_process:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()
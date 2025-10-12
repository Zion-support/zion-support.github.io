#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file by choosing the longer/more complete version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Resolving conflicts in {file_path}")
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            print(f"Could not parse merge conflicts in {file_path}")
            return False
        
        # Rebuild content by choosing the longer version for each conflict
        new_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                head_version = parts[i]
                other_version = parts[i + 1]
                after_conflict = parts[i + 2] if i + 2 < len(parts) else ""
                
                # Choose the longer version (usually more complete)
                if len(other_version.strip()) > len(head_version.strip()):
                    chosen_version = other_version
                else:
                    chosen_version = head_version
                
                new_content += chosen_version + after_conflict
        
        # Clean up any remaining merge conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+\n?', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'=======\n', '', new_content)
        
        # Write the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    # Find all files with merge conflicts
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_with_conflicts = []
    for pattern in file_patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    if '<<<<<<< HEAD' in content:
                        files_with_conflicts.append(file_path)
                except:
                    continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in files_with_conflicts:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()

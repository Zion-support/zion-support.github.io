#!/usr/bin/env python3
"""
Comprehensive script to resolve all merge conflicts by removing conflict markers
and keeping the first version of conflicting content.
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]*'
        
        def resolve_conflict(match):
            # Keep the first version (HEAD)
            return match.group(1).strip()
        
        # Replace all conflict blocks with the first version
        resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        resolved_content = re.sub(r'<<<<<<< HEAD\n?', '', resolved_content)
        resolved_content = re.sub(r'=======\n?', '', resolved_content)
        resolved_content = re.sub(r'>>>>>>> [^\n]*\n?', '', resolved_content)
        
        # Write the resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts."""
    print("=== Resolving All Merge Conflicts ===")
    
    # Find all files with merge conflicts
    conflict_files = []
    
    # Search for common file extensions
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js',
        '**/*.json',
        '**/*.css',
        '**/*.md'
    ]
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        conflict_files.append(file_path)
            except:
                continue
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")
    print("=== Merge Conflict Resolution Complete ===")

if __name__ == "__main__":
    main()
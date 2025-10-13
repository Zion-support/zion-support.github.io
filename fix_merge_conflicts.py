#!/usr/bin/env python3
"""
Script to fix merge conflicts by choosing the most complete version
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            print(f"Could not parse merge conflicts in {file_path}")
            return False
        
        # Reconstruct content by choosing the most complete version
        new_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                head_version = parts[i]
                other_version = parts[i + 1]
                after_conflict = parts[i + 2] if i + 2 < len(parts) else ""
                
                # Choose the longer/more complete version
                if len(head_version.strip()) > len(other_version.strip()):
                    chosen_version = head_version
                else:
                    chosen_version = other_version
                
                new_content += chosen_version + after_conflict
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all files with merge conflicts
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_with_conflicts = []
    for pattern in file_patterns:
        files_with_conflicts.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_with_conflicts = [f for f in files_with_conflicts 
                           if 'node_modules' not in f and '.git' not in f]
    
    print(f"Found {len(files_with_conflicts)} files to check")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
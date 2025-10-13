#!/usr/bin/env python3
"""
Script to automatically fix merge conflicts in the codebase
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
        
        # Split content by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor', content, flags=re.DOTALL)
        
        if len(parts) >= 3:
            # Take the HEAD version (first part) and clean it up
            fixed_content = parts[0] + parts[1] + ''.join(parts[2:])
            
            # Clean up any remaining merge conflict markers
            fixed_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', fixed_content, flags=re.DOTALL)
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
        else:
            # If we can't parse it properly, try a simpler approach
            # Remove all merge conflict markers and keep the content
            fixed_content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n?', '', content, flags=re.DOTALL)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Find all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.md'
    ]
    
    files_with_conflicts = []
    for pattern in patterns:
        files_with_conflicts.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to touch
    files_to_fix = []
    for file_path in files_with_conflicts:
        if any(exclude in file_path for exclude in ['node_modules', '.git', 'dist', '.next', 'out']):
            continue
        files_to_fix.append(file_path)
    
    print(f"Found {len(files_to_fix)} files to check for merge conflicts")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()

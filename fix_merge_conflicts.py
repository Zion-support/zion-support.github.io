#!/usr/bin/env python3
"""
Script to fix merge conflicts by choosing the appropriate version and cleaning up files.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split content by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+', content, flags=re.DOTALL)
        
        if len(parts) < 4:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) < 4:
            print(f"  Could not parse merge conflicts in {file_path}")
            return False
        
        # Reconstruct content by choosing the appropriate version
        # For most cases, we'll choose the version after ======= (the newer version)
        fixed_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                # Choose the version after ======= (index i+1)
                fixed_content += parts[i + 1]
                if i + 3 < len(parts):
                    fixed_content += parts[i + 3]
        
        # Clean up any remaining merge conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', fixed_content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"  Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all relevant files."""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Also include some specific files that are known to have issues
    additional_files = [
        'App.tsx',
        'main.tsx'
    ]
    
    for file_path in additional_files:
        if os.path.exists(file_path):
            files_to_fix.append(file_path)
    
    fixed_count = 0
    total_files = len(files_to_fix)
    
    print(f"Found {total_files} files to check for merge conflicts")
    
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()
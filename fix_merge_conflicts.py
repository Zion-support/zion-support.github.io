#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the newer version
and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflict markers
        if '<<<<<<< HEAD' not in content:
            return False
            
        # Split by conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> .*?\n', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            return False
            
        # Keep the newer version (after =======)
        new_content = parts[0]  # content before first conflict
        for i in range(1, len(parts), 3):
            if i + 2 < len(parts):
                new_content += parts[i + 1]  # content after =======
                if i + 3 < len(parts):
                    new_content += parts[i + 3]  # content after >>>>>>>
        
        # Write the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    # Get all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        'utils/**/*.ts',
        'hooks/**/*.ts',
        'types/**/*.ts'
    ]
    
    fixed_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            total_files += 1
            if fix_merge_conflicts(file_path):
                fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_files} files")

if __name__ == "__main__":
    main()
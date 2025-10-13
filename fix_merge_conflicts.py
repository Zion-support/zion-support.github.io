#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the more complete version
(usually the one after ======= marker)
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
        
        # Split by merge conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>>', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]*', content, flags=re.DOTALL)
        
        if len(parts) < 3:
            print(f"Could not parse merge conflicts in {file_path}")
            return False
        
        # Reconstruct content by choosing the second part (after =======)
        new_content = parts[0]  # Content before first conflict
        for i in range(1, len(parts), 3):
            if i + 1 < len(parts):
                # Choose the version after ======= (parts[i+1])
                new_content += parts[i+1]
                if i + 2 < len(parts):
                    new_content += parts[i+2]
        
        # Write the fixed content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all files"""
    # Get all TypeScript/JavaScript files with merge conflicts
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts',
        'hooks/**/*.ts',
        'utils/**/*.ts'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                total_count += 1
                if fix_merge_conflicts(file_path):
                    fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
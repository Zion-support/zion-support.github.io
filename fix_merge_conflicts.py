#!/usr/bin/env python3
"""
Script to fix merge conflicts in the codebase by choosing the correct version
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
            
        print(f"Fixing merge conflicts in {file_path}")
        
        # Pattern to match merge conflicts
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>>.*?(?:\n|$)'
        
        def replace_conflict(match):
            # Extract the content after =======
            after_equals = match.group(1)
            return after_equals
        
        # Replace all merge conflicts
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>>.*?(?:\n|$)', '', new_content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        'components/**/*.tsx',
        'components/**/*.ts',
        'components/**/*.js',
        'components/**/*.jsx',
        'hooks/**/*.ts',
        'hooks/**/*.tsx',
        'utils/**/*.ts',
        'utils/**/*.tsx',
        'lib/**/*.ts',
        'lib/**/*.tsx',
        'pages/**/*.tsx',
        'pages/**/*.ts',
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path):
                if fix_merge_conflicts(file_path):
                    fixed_files.append(file_path)
    
    print(f"\nFixed merge conflicts in {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  - {file_path}")

if __name__ == "__main__":
    main()
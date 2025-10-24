#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for the Zion Tech Group project.
This script will automatically resolve merge conflicts by choosing the newer version
and cleaning up all conflict markers.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Remove all merge conflict markers and keep the newer version (after =======)
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> .*?\n'
        
        # Replace conflict blocks with the content after =======
        fixed_content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD.*?\n', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'=======.*?\n', '', fixed_content, flags=re.DOTALL)
        fixed_content = re.sub(r'>>>>>>> .*?\n', '', fixed_content, flags=re.DOTALL)
        
        # Clean up extra whitespace and empty lines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_all_merge_conflicts():
    """Fix merge conflicts in all relevant files."""
    # File patterns to check
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.js',
        '*.ts',
        '*.tsx'
    ]
    
    fixed_files = []
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            if os.path.isfile(file_path) and not file_path.startswith('node_modules'):
                if fix_merge_conflicts_in_file(file_path):
                    fixed_files.append(file_path)
    
    return fixed_files

def main():
    print("Starting merge conflict resolution...")
    fixed_files = fix_all_merge_conflicts()
    
    if fixed_files:
        print(f"\nFixed merge conflicts in {len(fixed_files)} files:")
        for file_path in fixed_files:
            print(f"  - {file_path}")
    else:
        print("No merge conflicts found.")
    
    print("\nMerge conflict resolution complete!")

if __name__ == "__main__":
    main()
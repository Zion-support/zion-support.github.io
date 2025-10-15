#!/usr/bin/env python3
"""
Script to resolve merge conflicts by choosing the HEAD version for all conflicts.
This will automatically resolve all merge conflicts in the repository.
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file by choosing HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+'
        
        # Replace conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, r'\1', content, flags=re.DOTALL)
        
        # Write resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts."""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx',
        '**/*.json'
    ]
    
    resolved_count = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', 'dist', '.git', '.next']):
                continue
                
            total_files += 1
            if resolve_merge_conflicts(file_path):
                resolved_count += 1
    
    print(f"\nResolved merge conflicts in {resolved_count} out of {total_files} files processed.")

if __name__ == "__main__":
    main()
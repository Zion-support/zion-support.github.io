#!/usr/bin/env python3
"""
Script to resolve remaining Git merge conflicts by choosing the HEAD version.
This handles more complex patterns and edge cases.
"""

import os
import re
import glob

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # More comprehensive pattern to handle various conflict formats
        # Pattern 1: Standard conflicts with >>>>>> main
        pattern1 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> main'
        content = re.sub(pattern1, r'\1', content, flags=re.DOTALL)
        
        # Pattern 2: Conflicts with >>>>>> cursor/...
        pattern2 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor/[^\n]*'
        content = re.sub(pattern2, r'\1', content, flags=re.DOTALL)
        
        # Pattern 3: Conflicts with just >>>>>> (any branch)
        pattern3 = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]*'
        content = re.sub(pattern3, r'\1', content, flags=re.DOTALL)
        
        # Pattern 4: Handle cases where there might be multiple ======= lines
        pattern4 = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]*'
        content = re.sub(pattern4, r'\1', content, flags=re.DOTALL)
        
        # Write resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"  ✓ Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all remaining merge conflicts."""
    print("Starting remaining merge conflict resolution...")
    
    # Find all TypeScript, JavaScript, JSX, TSX, and CSS files
    patterns = [
        'src/**/*.ts',
        'src/**/*.tsx', 
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.css',
        'src/**/*.scss',
        'src/**/*.sass'
    ]
    
    files_processed = 0
    files_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if resolve_conflicts_in_file(file_path):
                    files_resolved += 1
    
    print(f"\nResolution complete!")
    print(f"Files processed: {files_processed}")
    print(f"Files with conflicts resolved: {files_resolved}")

if __name__ == "__main__":
    main()
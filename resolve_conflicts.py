#!/usr/bin/env python3
"""
Script to automatically resolve Git merge conflicts by choosing the HEAD version.
This script will:
1. Find all files with merge conflict markers
2. Remove conflict markers and keep only the HEAD version
3. Clean up the files
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
        
        # Split content by conflict markers
        parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> main', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            # Try alternative pattern
            parts = re.split(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> ', content, flags=re.DOTALL)
        
        if len(parts) < 2:
            print(f"  Warning: Could not parse conflicts in {file_path}")
            return False
        
        # Reconstruct content keeping only HEAD version
        resolved_content = parts[0]  # Content before first conflict
        
        for i in range(1, len(parts), 3):
            if i + 1 < len(parts):
                # Keep HEAD version (parts[i])
                resolved_content += parts[i]
                if i + 2 < len(parts):
                    resolved_content += parts[i + 2]  # Content after conflict
        
        # Write resolved content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"  ✓ Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts."""
    print("Starting merge conflict resolution...")
    
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
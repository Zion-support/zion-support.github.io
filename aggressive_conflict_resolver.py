#!/usr/bin/env python3
"""
Aggressive merge conflict resolver - removes all conflict markers and keeps HEAD version.
"""

import os
import re
import glob
from pathlib import Path

def aggressive_resolve_conflicts(content):
    """
    Aggressively resolve merge conflicts by keeping only the HEAD version.
    """
    # Remove all merge conflict markers and everything between <<<<<<< and >>>>>>>
    # Keep only content between <<<<<<< and     # First, find all conflict blocks
    pattern = r'\n(.*?)\n.*?\n    # Replace with just the HEAD content
    resolved = re.sub(pattern, r'\1', content, flags=re.DOTALL)
    
    # Also handle cases where there might be multiple conflicts in one file
    # Remove any remaining conflict markers
    resolved = re.sub(r'\n?', '', resolved)
    resolved = re.sub(r'\n?', '', resolved)
    resolved = re.sub(r'    return resolved

def fix_file_aggressive(file_path):
    """Fix merge conflicts aggressively in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '' in content or '' in content or '            print(f"Aggressively fixing conflicts in: {file_path}")
            resolved_content = aggressive_resolve_conflicts(content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(resolved_content)
            
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to aggressively fix all merge conflicts."""
    print("Starting aggressive merge conflict resolution...")
    
    # Get all files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx',
        '**/*.json',
        '**/*.css',
        '**/*.html',
        '**/*.md',
        '**/*.py',
        '**/*.sh'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to touch
    files_to_fix = [f for f in files_to_fix if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'coverage', '.original'
    ])]
    
    print(f"Found {len(files_to_fix)} files to check...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file_aggressive(file_path):
                fixed_count += 1
    
    print(f"Aggressively fixed merge conflicts in {fixed_count} files")
    print("Aggressive merge conflict resolution complete!")

if __name__ == "__main__":
    main()
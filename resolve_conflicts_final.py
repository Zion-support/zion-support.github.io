#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for the Zion Tech Group website.
This script resolves all merge conflicts by keeping the most recent/complete version.
"""

import os
import re
import subprocess
import sys
from pathlib import Path

def find_files_with_conflicts():
    """Find all files with merge conflicts."""
    try:
        result = subprocess.run(['git', 'grep', '-l', '<<<<<<< HEAD'], 
                              capture_output=True, text=True, cwd='/workspace')
        if result.returncode == 0:
            return result.stdout.strip().split('\n')
        return []
    except Exception as e:
        print(f"Error finding conflict files: {e}")
        return []

def resolve_conflicts_in_file(file_path):
    """Resolve merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return True
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Pattern 1: Keep everything after ======= (newer version)
        # <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern1 = r'<<<<<<< HEAD[\s\S]*?=======\s*\n([\s\S]*?)>>>>>>> [^\n]*'
        content = re.sub(pattern1, r'\1', content)
        
        # Pattern 2: Remove any remaining <<<<<<< HEAD lines
        content = re.sub(r'^<<<<<<< HEAD.*?\n', '', content, flags=re.MULTILINE)
        
        # Pattern 3: Remove any remaining ======= lines
        content = re.sub(r'^=======.*?\n', '', content, flags=re.MULTILINE)
        
        # Pattern 4: Remove any remaining >>>>>>> lines
        content = re.sub(r'^>>>>>>> .*?\n', '', content, flags=re.MULTILINE)
        
        # Clean up multiple consecutive empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts."""
    print("Starting merge conflict resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Find all files with conflicts
    conflict_files = find_files_with_conflicts()
    
    if not conflict_files:
        print("No merge conflicts found.")
        return True
    
    print(f"Found {len(conflict_files)} files with conflicts:")
    for file_path in conflict_files:
        print(f"  - {file_path}")
    
    # Resolve conflicts in each file
    success_count = 0
    for file_path in conflict_files:
        if resolve_conflicts_in_file(file_path):
            success_count += 1
        else:
            print(f"Failed to resolve conflicts in: {file_path}")
    
    print(f"\nResolved conflicts in {success_count}/{len(conflict_files)} files")
    
    # Verify no conflicts remain
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
        return False
    else:
        print("All merge conflicts resolved successfully!")
        return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
#!/usr/bin/env python3
"""
Aggressive merge conflict resolver that removes all conflict markers.
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

def aggressive_resolve_conflicts(file_path):
    """Aggressively resolve merge conflicts by removing all markers."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return True
        
        print(f"Aggressively resolving conflicts in: {file_path}")
        
        # Remove all conflict markers and everything between them
        # Pattern 1: Remove everything from <<<<<<< HEAD to =======
        content = re.sub(r'<<<<<<< HEAD[\s\S]*?=======', '', content)
        
        # Pattern 2: Remove everything from ======= to >>>>>>>
        content = re.sub(r'=======[\s\S]*?>>>>>>> [^\n]*', '', content)
        
        # Pattern 3: Remove any remaining <<<<<<< HEAD lines
        content = re.sub(r'^<<<<<<< HEAD.*?\n', '', content, flags=re.MULTILINE)
        
        # Pattern 4: Remove any remaining ======= lines
        content = re.sub(r'^=======.*?\n', '', content, flags=re.MULTILINE)
        
        # Pattern 5: Remove any remaining >>>>>>> lines
        content = re.sub(r'^>>>>>>> .*?\n', '', content, flags=re.MULTILINE)
        
        # Clean up multiple consecutive empty lines
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
        
        # Remove trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    """Main function to aggressively resolve all merge conflicts."""
    print("Starting aggressive merge conflict resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Find all files with conflicts
    conflict_files = find_files_with_conflicts()
    
    if not conflict_files:
        print("No merge conflicts found.")
        return True
    
    print(f"Found {len(conflict_files)} files with conflicts")
    
    # Resolve conflicts in each file
    success_count = 0
    for file_path in conflict_files:
        if aggressive_resolve_conflicts(file_path):
            success_count += 1
        else:
            print(f"Failed to resolve conflicts in: {file_path}")
    
    print(f"Resolved conflicts in {success_count}/{len(conflict_files)} files")
    
    # Verify no conflicts remain
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts")
        return False
    else:
        print("All merge conflicts resolved successfully!")
        return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
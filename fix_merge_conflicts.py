#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the newer content
and removing conflict markers.
"""

import os
import re
import sys
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Remove merge conflict markers and keep the newer content (after =======)
        # Pattern to match merge conflicts and keep the newer content
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [^\n]+'
        
        # Replace with just the newer content
        new_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflict sections
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'^<<<<<<< HEAD.*$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^=======.*$', '', new_content, flags=re.MULTILINE)
        new_content = re.sub(r'^>>>>>>> [^\n]+.*$', '', new_content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    workspace = Path('/workspace')
    
    # Find all TypeScript/JavaScript files with merge conflicts
    files_with_conflicts = []
    
    for ext in ['*.tsx', '*.ts', '*.jsx', '*.js']:
        for file_path in workspace.rglob(ext):
            if 'node_modules' in str(file_path):
                continue
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Successfully fixed {fixed_count} files")

if __name__ == "__main__":
    main()
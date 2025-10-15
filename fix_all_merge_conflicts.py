#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for the Zion Tech Group project.
This script will automatically resolve merge conflicts by choosing the appropriate version.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
<<<<<<< HEAD
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflicts
        pattern = r'<<<<<<< HEAD.*?=======(.*?)>>>>>>> [a-f0-9]+'
        
        def replace_conflict(match):
            # Keep the content after ======= (newer version)
            return match.group(1).strip()
        
        # Replace all merge conflicts
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [a-f0-9]+', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [a-f0-9]+', '', new_content, flags=re.DOTALL)
        
        # Remove empty lines that might be left behind
        lines = new_content.split('\n')
        cleaned_lines = []
        prev_empty = False
        
        for line in lines:
            if line.strip() == '':
                if not prev_empty:
                    cleaned_lines.append(line)
                prev_empty = True
            else:
                cleaned_lines.append(line)
                prev_empty = False
        
        new_content = '\n'.join(cleaned_lines)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    print("Starting comprehensive merge conflict resolution...")
    
    # Get all files with merge conflicts
    files_with_conflicts = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other irrelevant directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build', '.next']]
        
        for file in files:
<<<<<<< HEAD
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.md', '.html')):
=======
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.html', '.css', '.json', '.md')):
>>>>>>> origin/main
                file_path = os.path.join(root, file)
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
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Verify no more conflicts exist
    remaining_conflicts = []
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build', '.next']]
        
        for file in files:
<<<<<<< HEAD
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.md', '.html')):
=======
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.html', '.css', '.json', '.md')):
>>>>>>> origin/main
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
<<<<<<< HEAD
                        if '<<<<<<< HEAD' in content:
=======
                        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
>>>>>>> origin/main
                            remaining_conflicts.append(file_path)
                except:
                    continue
    
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have merge conflicts:")
        for file in remaining_conflicts:
            print(f"  - {file}")
    else:
        print("✅ All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()
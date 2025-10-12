#!/usr/bin/env python3
"""
Advanced script to resolve merge conflicts in the codebase.
This script handles more complex merge conflict patterns.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file with advanced patterns"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # More aggressive approach - remove all conflict markers and choose HEAD
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        conflict_depth = 0
        
        for line in lines:
            if line.strip().startswith('<<<<<<< HEAD'):
                in_conflict = True
                conflict_depth += 1
                continue
            elif line.strip().startswith('======='):
                # Skip the other version
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                conflict_depth -= 1
                continue
            elif not in_conflict:
                new_lines.append(line)
            elif in_conflict and conflict_depth == 1:
                # This is the HEAD version, keep it
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Additional cleanup - remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', new_content, flags=re.DOTALL)
        new_content = re.sub(r'<<<<<<< HEAD.*?=======', '', new_content, flags=re.DOTALL)
        
        # Clean up multiple empty lines
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflicts"""
    conflict_files = []
    
    # Search for TypeScript, JavaScript, and JSX files
    patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other excluded directories
            if any(excluded in file_path for excluded in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        conflict_files.append(file_path)
            except:
                continue
    
    return conflict_files

def main():
    """Main function to fix all merge conflicts"""
    print("Starting advanced merge conflict resolution...")
    
    # Find all files with conflicts
    conflict_files = find_files_with_conflicts()
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    if not conflict_files:
        print("No merge conflicts found!")
        return
    
    # Fix each file
    fixed_count = 0
    for file_path in conflict_files:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Verify no more conflicts
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()
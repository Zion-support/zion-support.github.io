#!/usr/bin/env python3
"""
Script to resolve all merge conflicts in the repository
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content into lines
        lines = content.split('\n')
        new_lines = []
        in_conflict = False
        conflict_type = None
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                conflict_type = 'head'
                continue
            elif line.strip() == '=======':
                conflict_type = 'main'
                continue
            elif line.strip() == '>>>>>>> main':
                in_conflict = False
                conflict_type = None
                continue
            
            if not in_conflict:
                new_lines.append(line)
            elif in_conflict and conflict_type == 'head':
                # Keep HEAD version (our changes)
                new_lines.append(line)
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    # Get all files with merge conflicts
    conflict_files = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip certain directories
        if any(skip in root for skip in ['.git', 'node_modules', 'dist', '.next']):
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css', '.html', '.md')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            conflict_files.append(file_path)
                except:
                    continue
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in conflict_files:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")
    
    # Check if there are still conflicts
    remaining_conflicts = []
    for root, dirs, files in os.walk('.'):
        if any(skip in root for skip in ['.git', 'node_modules', 'dist', '.next']):
            continue
            
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css', '.html', '.md')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> main' in content:
                            remaining_conflicts.append(file_path)
                except:
                    continue
    
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("All merge conflicts resolved successfully!")

if __name__ == "__main__":
    main()
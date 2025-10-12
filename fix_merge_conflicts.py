#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase.
This script will:
1. Find all files with merge conflict markers
2. For each file, choose the appropriate resolution strategy
3. Clean up the conflicts and create a working version
"""

import os
import re
import glob
from pathlib import Path

def find_conflict_files():
    """Find all files with merge conflict markers."""
    conflict_files = []
    
    # Search for files with merge conflict markers
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other irrelevant directories
        dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build', '.next']]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if '<<<<<<< HEAD' in content:
                            conflict_files.append(file_path)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    
    return conflict_files

def resolve_conflicts(content):
    """Resolve merge conflicts in file content."""
    lines = content.split('\n')
    resolved_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check for merge conflict markers
        if line.strip() == '<<<<<<< HEAD':
            # Find the end of this conflict block
            conflict_start = i
            i += 1
            
            # Skip until we find =======
            while i < len(lines) and lines[i].strip() != '=======':
                i += 1
            
            if i < len(lines):
                i += 1  # Skip the ======= line
                
                # Skip until we find >>>>>>> 
                while i < len(lines) and not lines[i].strip().startswith('>>>>>>>'):
                    i += 1
                
                if i < len(lines):
                    i += 1  # Skip the >>>>>>> line
                    
                    # For most cases, we'll keep the HEAD version (the first part)
                    # But we need to be smarter about this
                    conflict_lines = lines[conflict_start:i]
                    resolved_content = resolve_specific_conflict(conflict_lines)
                    resolved_lines.extend(resolved_content.split('\n'))
                else:
                    # Malformed conflict, skip it
                    i = conflict_start + 1
            else:
                # Malformed conflict, skip it
                i = conflict_start + 1
        else:
            resolved_lines.append(line)
            i += 1
    
    return '\n'.join(resolved_lines)

def resolve_specific_conflict(conflict_lines):
    """Resolve a specific conflict block with smart logic."""
    # Find the markers
    head_start = 0
    equals_line = -1
    merge_end = -1
    
    for i, line in enumerate(conflict_lines):
        if line.strip() == '<<<<<<< HEAD':
            head_start = i + 1
        elif line.strip() == '=======':
            equals_line = i
        elif line.strip().startswith('>>>>>>>'):
            merge_end = i
            break
    
    if equals_line == -1 or merge_end == -1:
        # Malformed conflict, return original
        return '\n'.join(conflict_lines)
    
    head_content = conflict_lines[head_start:equals_line]
    merge_content = conflict_lines[equals_line + 1:merge_end]
    
    # Smart resolution logic
    head_text = '\n'.join(head_content)
    merge_text = '\n'.join(merge_content)
    
    # If HEAD has more content or looks more complete, prefer it
    if len(head_text.strip()) > len(merge_text.strip()) * 1.5:
        return head_text
    # If merge has significantly more content, prefer it
    elif len(merge_text.strip()) > len(head_text.strip()) * 1.5:
        return merge_text
    # If they're similar length, prefer HEAD (more conservative)
    else:
        return head_text

def fix_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflicts
        if '<<<<<<< HEAD' not in content:
            return True
        
        # Resolve conflicts
        resolved_content = resolve_conflicts(content)
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Fixed conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    print("Finding files with merge conflicts...")
    conflict_files = find_conflict_files()
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in conflict_files:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"Fixed conflicts in {fixed_count}/{len(conflict_files)} files")
    
    # Check if there are still conflicts
    remaining_conflicts = find_conflict_files()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
    else:
        print("All merge conflicts resolved!")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to fix merge conflicts in the codebase by resolving conflicts systematically.
This script will:
1. Find all files with merge conflict markers
2. Resolve conflicts by choosing the appropriate version
3. Clean up the files
"""

import os
import re
import glob
from pathlib import Path

def find_files_with_conflicts(directory):
    """Find all files containing merge conflict markers."""
    conflict_files = []
    
    # Directories to exclude
    exclude_dirs = {'node_modules', '.git', 'dist', 'build', '.next', 'out', '.turbo'}
    
    # Common file extensions to check
    extensions = ['*.tsx', '*.ts', '*.jsx', '*.js', '*.json', '*.md']
    
    for ext in extensions:
        pattern = os.path.join(directory, '**', ext)
        for file_path in glob.glob(pattern, recursive=True):
            # Skip if in excluded directory
            if any(excluded in file_path for excluded in exclude_dirs):
                continue
                
            # Skip if it's a directory
            if os.path.isdir(file_path):
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                        conflict_files.append(file_path)
            except (UnicodeDecodeError, PermissionError, IsADirectoryError):
                continue
    
    return conflict_files

def resolve_merge_conflicts(content):
    """Resolve merge conflicts in file content."""
    lines = content.split('\n')
    resolved_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check for merge conflict markers
        if line.strip().startswith('<<<<<<< HEAD'):
            # Find the end of this conflict
            conflict_start = i
            conflict_end = i
            
            # Look for the ======= marker
            while conflict_end < len(lines) and not lines[conflict_end].strip().startswith('======='):
                conflict_end += 1
            
            if conflict_end < len(lines):
                # Look for the >>>>>>> marker
                merge_end = conflict_end + 1
                while merge_end < len(lines) and not lines[merge_end].strip().startswith('>>>>>>> '):
                    merge_end += 1
                
                if merge_end < len(lines):
                    # We have a complete conflict block
                    # Choose the HEAD version (before =======)
                    head_lines = lines[conflict_start + 1:conflict_end]
                    # Skip the ======= line and the other version
                    other_lines = lines[conflict_end + 1:merge_end]
                    
                    # Choose HEAD version, but clean it up
                    resolved_lines.extend(head_lines)
                    
                    # Skip to after the merge marker
                    i = merge_end + 1
                    continue
        
        resolved_lines.append(line)
        i += 1
    
    return '\n'.join(resolved_lines)

def clean_up_file(file_path):
    """Clean up a specific file by resolving merge conflicts."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has conflicts
        if '<<<<<<< HEAD' not in content and '=======' not in content and '>>>>>>> ' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Resolve conflicts
        resolved_content = resolve_merge_conflicts(content)
        
        # Additional cleanup
        resolved_content = re.sub(r'\n\s*\n\s*\n+', '\n\n', resolved_content)  # Remove excessive newlines
        resolved_content = resolved_content.strip() + '\n'  # Ensure single trailing newline
        
        # Write back the resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    workspace_dir = '/workspace'
    
    print("Searching for files with merge conflicts...")
    conflict_files = find_files_with_conflicts(workspace_dir)
    
    if not conflict_files:
        print("No files with merge conflicts found.")
        return
    
    print(f"Found {len(conflict_files)} files with merge conflicts:")
    for file_path in conflict_files:
        print(f"  - {file_path}")
    
    print("\nResolving merge conflicts...")
    fixed_count = 0
    
    for file_path in conflict_files:
        if clean_up_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files.")
    
    # Verify no more conflicts
    print("\nVerifying no remaining conflicts...")
    remaining_conflicts = find_files_with_conflicts(workspace_dir)
    
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()
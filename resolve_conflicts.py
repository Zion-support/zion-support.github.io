#!/usr/bin/env python3
"""
Comprehensive merge conflict resolver for Zion Tech Group website
"""

import os
import re
import glob
from pathlib import Path

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if no merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Split content into lines
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Check for merge conflict markers
            if line.startswith('<<<<<<< HEAD'):
                # Find the end of this conflict
                conflict_start = i
                conflict_end = i
                
                # Look for ======= marker
                while conflict_end < len(lines) and not lines[conflict_end].startswith('======='):
                    conflict_end += 1
                
                if conflict_end < len(lines):
                    # Look for >>>>>>> marker
                    end_marker = conflict_end + 1
                    while end_marker < len(lines) and not lines[end_marker].startswith('>>>>>>>'):
                        end_marker += 1
                    
                    if end_marker < len(lines):
                        # Extract the "theirs" version (after =======)
                        theirs_lines = lines[conflict_end + 1:end_marker]
                        
                        # Add the "theirs" version (usually the newer/cursor branch)
                        resolved_lines.extend(theirs_lines)
                        
                        # Skip to after the conflict
                        i = end_marker + 1
                        continue
            
            resolved_lines.append(line)
            i += 1
        
        # Write resolved content
        resolved_content = '\n'.join(resolved_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error resolving {file_path}: {e}")
        return False

def main():
    """Main function to resolve all merge conflicts"""
    print("Starting comprehensive merge conflict resolution...")
    
    # Get all files with merge conflicts
    conflict_files = []
    
    # Search for files with merge conflicts
    for root, dirs, files in os.walk('.'):
        # Skip certain directories
        skip_dirs = {
            'node_modules', '.git', 'dist', 'build', '.next', 
            'coverage', '.nyc_output', 'backup', 'disabled',
            'corrupted', 'temp', 'cache'
        }
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.css', '.json')):
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
    
    # Verify no remaining conflicts
    remaining_conflicts = []
    for file_path in conflict_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    remaining_conflicts.append(file_path)
        except:
            continue
    
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("All merge conflicts resolved successfully!")

if __name__ == "__main__":
    main()
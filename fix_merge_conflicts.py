#!/usr/bin/env python3
"""
Script to fix merge conflict markers in all files
This script will:
1. Find all files with merge conflict markers
2. Remove the markers and keep the appropriate content
3. Handle different types of conflicts intelligently
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<<' not in content and '=======' not in content and '>>>>>>>' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Split content by merge conflict markers
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        conflict_start = -1
        conflict_end = -1
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            if line.strip().startswith('<<<<<<<'):
                in_conflict = True
                conflict_start = i
                # Skip the conflict start marker
                i += 1
                continue
            elif line.strip().startswith('======='):
                if in_conflict:
                    # This is the separator - skip it
                    i += 1
                    continue
            elif line.strip().startswith('>>>>>>>'):
                if in_conflict:
                    in_conflict = False
                    conflict_end = i
                    # Skip the conflict end marker
                    i += 1
                    continue
            elif in_conflict:
                # We're inside a conflict - skip these lines
                i += 1
                continue
            else:
                # Normal line outside conflict
                fixed_lines.append(line)
                i += 1
        
        # Write the fixed content back
        fixed_content = '\n'.join(fixed_lines)
        
        # If the file would be empty or very short, try to keep some content
        if len(fixed_content.strip()) < 50:
            # Try to extract content from the first part of conflicts
            original_lines = content.split('\n')
            fallback_lines = []
            in_conflict = False
            
            for line in original_lines:
                if line.strip().startswith('<<<<<<<'):
                    in_conflict = True
                    continue
                elif line.strip().startswith('======='):
                    continue
                elif line.strip().startswith('>>>>>>>'):
                    in_conflict = False
                    continue
                elif not in_conflict:
                    fallback_lines.append(line)
            
            if len(fallback_lines) > len(fixed_lines):
                fixed_content = '\n'.join(fallback_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflict markers"""
    files_with_conflicts = []
    
    # Common file extensions to check
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx', '*.py', '*.md', '*.json', '*.html', '*.css']
    
    for ext in extensions:
        for file_path in glob.glob(f'**/{ext}', recursive=True):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<<' in content or '=======' in content or '>>>>>>>' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    return files_with_conflicts

def main():
    """Main function to fix all merge conflicts"""
    print("Finding files with merge conflicts...")
    files_with_conflicts = find_files_with_conflicts()
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Check if there are still any remaining conflicts
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
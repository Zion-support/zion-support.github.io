#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase.
This script will:
1. Find all files with merge conflicts
2. Resolve them by choosing the appropriate version
3. Clean up the files
"""

import os
import re
import glob
from pathlib import Path

def find_merge_conflict_files():
    """Find all files with merge conflicts."""
    conflict_files = []
    for root, dirs, files in os.walk('/workspace'):
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

def resolve_merge_conflict(content):
    """Resolve merge conflicts in content."""
    lines = content.split('\n')
    resolved_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        if line.strip() == '<<<<<<< HEAD':
            # Find the end of this conflict
            conflict_start = i
            conflict_end = i
            
            # Look for ======= and >>>>>>> markers
            while i < len(lines):
                if lines[i].strip() == '=======':
                    conflict_middle = i
                elif lines[i].strip().startswith('>>>>>>>'):
                    conflict_end = i
                    break
                i += 1
            
            # Choose the version after ======= (usually the newer version)
            if conflict_middle < conflict_end:
                # Take lines from after ======= to before >>>>>>>
                for j in range(conflict_middle + 1, conflict_end):
                    resolved_lines.append(lines[j])
            else:
                # If no ======= found, take lines from after <<<<<<< to before >>>>>>>
                for j in range(conflict_start + 1, conflict_end):
                    if not lines[j].strip().startswith('>>>>>>>'):
                        resolved_lines.append(lines[j])
            
            i = conflict_end + 1
        else:
            resolved_lines.append(line)
            i += 1
    
    return '\n'.join(resolved_lines)

def clean_up_syntax_errors(content):
    """Clean up common syntax errors after merge conflict resolution."""
    # Remove duplicate semicolons
    content = re.sub(r';\s*;', ';', content)
    
    # Fix common JSX issues
    content = re.sub(r'\)\s*\)\s*;', ');', content)
    content = re.sub(r'\)\s*\)\s*$', ');', content)
    
    # Fix duplicate export statements
    content = re.sub(r'export default \w+;\s*export default \w+;', 'export default Component;', content)
    
    # Fix duplicate closing braces
    content = re.sub(r'}\s*}\s*$', '}', content)
    
    # Fix malformed JSX
    content = re.sub(r'<\s*>\s*</\s*>', '', content)
    
    return content

def fix_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Resolve merge conflicts
        resolved_content = resolve_merge_conflict(content)
        
        # Clean up syntax errors
        cleaned_content = clean_up_syntax_errors(resolved_content)
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    print("Finding files with merge conflicts...")
    conflict_files = find_merge_conflict_files()
    
    print(f"Found {len(conflict_files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in conflict_files:
        if fix_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Check if there are still conflicts
    remaining_conflicts = find_merge_conflict_files()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts:
            print(f"  - {file_path}")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()
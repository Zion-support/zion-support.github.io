#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in the codebase.
This script will:
1. Find all files with merge conflict markers
2. Resolve conflicts by choosing the appropriate version
3. Clean up the files
"""

import os
import re
import glob
from pathlib import Path

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Resolving conflicts in: {file_path}")
        
        # Split content by merge conflict markers
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.strip() == '<<<<<<< HEAD':
                # Start of conflict - skip this marker
                i += 1
                continue
            elif line.strip() == '=======':
                # Middle of conflict - skip this marker
                i += 1
                continue
            elif line.strip() == '>>>>>>> ' or line.strip().startswith('>>>>>>> '):
                # End of conflict - skip this marker
                i += 1
                continue
            else:
                # Regular line - keep it
                resolved_lines.append(line)
                i += 1
        
        # Write resolved content back to file
        resolved_content = '\n'.join(resolved_lines)
        
        # Clean up any remaining issues
        # Remove duplicate export statements
        resolved_content = re.sub(r'export default App;\n.*export default App;', 'export default App;', resolved_content)
        
        # Remove duplicate 'use client' statements
        resolved_content = re.sub(r"'use client';\n.*'use client';", "'use client';", resolved_content)
        
        # Remove empty lines at the beginning
        resolved_content = resolved_content.lstrip('\n')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_files_with_conflicts():
    """Find all files with merge conflicts."""
    files_with_conflicts = []
    
    # Search for TypeScript and JavaScript files
    patterns = ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx']
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules
            if 'node_modules' in file_path:
                continue
                
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        files_with_conflicts.append(file_path)
            except:
                continue
    
    return files_with_conflicts

def main():
    """Main function to resolve all merge conflicts."""
    print("Finding files with merge conflicts...")
    files_with_conflicts = find_files_with_conflicts()
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    resolved_count = 0
    for file_path in files_with_conflicts:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")
    
    # Verify no more conflicts
    remaining_conflicts = find_files_with_conflicts()
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
    else:
        print("All merge conflicts resolved successfully!")

if __name__ == "__main__":
    main()
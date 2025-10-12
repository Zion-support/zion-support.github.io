#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by choosing the HEAD version.
This will help clean up the codebase quickly.
"""

import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a single file by choosing HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content into lines
        lines = content.split('\n')
        resolved_lines = []
        in_conflict = False
        conflict_type = None
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                conflict_type = 'head'
                continue
            elif line.strip() == '=======':
                conflict_type = 'other'
                continue
            elif line.strip().startswith('>>>>>>> '):
                in_conflict = False
                conflict_type = None
                continue
            
            if in_conflict:
                if conflict_type == 'head':
                    resolved_lines.append(line)
                # Skip lines from other branch
            else:
                resolved_lines.append(line)
        
        # Write resolved content back
        resolved_content = '\n'.join(resolved_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to resolve conflicts in all files."""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    conflicts_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build']):
                continue
                
            files_processed += 1
            if resolve_merge_conflicts(file_path):
                conflicts_resolved += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Resolved conflicts in {conflicts_resolved} files")

if __name__ == "__main__":
    main()
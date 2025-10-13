#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts in a file by keeping the newer version (after =======)"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by merge conflict markers
        lines = content.split('\n')
        resolved_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            if line.strip() == '<<<<<<< HEAD':
                # Skip until we find =======
                while i < len(lines) and lines[i].strip() != '=======':
                    i += 1
                # Skip the ======= line
                if i < len(lines):
                    i += 1
                # Keep everything until >>>>>>> 
                while i < len(lines) and not lines[i].strip().startswith('>>>>>>> '):
                    resolved_lines.append(lines[i])
                    i += 1
                # Skip the >>>>>>> line
                if i < len(lines):
                    i += 1
            else:
                resolved_lines.append(line)
                i += 1
        
        # Write resolved content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(resolved_lines))
        
        print(f"Resolved conflicts in {file_path}")
        return True
        
    except Exception as e:
        print(f"Error resolving conflicts in {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files with merge conflicts
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    conflicts_resolved = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if resolve_merge_conflicts(file_path):
                conflicts_resolved += 1
    
    print(f"Processed {files_processed} files")
    print(f"Resolved conflicts in {conflicts_resolved} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import os
import re
import glob

def resolve_merge_conflicts(file_path):
    """Resolve merge conflicts by keeping the HEAD version"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split by conflict markers and keep HEAD version
        lines = content.split('\n')
        resolved_lines = []
        skip_until_end = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                skip_until_end = False
                continue
            elif line.strip() == '=======':
                skip_until_end = True
                continue
            elif line.strip().startswith('>>>>>>>'):
                skip_until_end = False
                continue
            elif not skip_until_end:
                resolved_lines.append(line)
        
        # Write resolved content
        resolved_content = '\n'.join(resolved_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        print(f"Resolved conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/TSX files with merge conflicts
    pattern = "app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    resolved_count = 0
    for file_path in files:
        if resolve_merge_conflicts(file_path):
            resolved_count += 1
    
    print(f"Resolved conflicts in {resolved_count} files")

if __name__ == "__main__":
    main()
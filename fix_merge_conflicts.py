#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript files.
This script keeps the HEAD version (current branch) and removes conflict markers.
"""

import os
import re
import sys
from pathlib import Path

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflict markers
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content by merge conflict markers
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        keep_section = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_section = True
                continue
            elif line.strip() == '=======':
                keep_section = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                keep_section = False
                continue
            elif in_conflict and not keep_section:
                # Skip lines in the other branch
                continue
            else:
                # Keep the line
                fixed_lines.append(line)
        
        # Write the fixed content back
        fixed_content = '\n'.join(fixed_lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript files."""
    app_dir = Path('/workspace/app')
    
    if not app_dir.exists():
        print("App directory not found!")
        return 1
    
    # Find all TypeScript files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TypeScript files")
    
    fixed_count = 0
    error_count = 0
    
    for file_path in tsx_files:
        try:
            if fix_merge_conflicts(file_path):
                fixed_count += 1
                print(f"Fixed: {file_path}")
        except Exception as e:
            error_count += 1
            print(f"Error with {file_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Files processed: {len(tsx_files)}")
    print(f"Files fixed: {fixed_count}")
    print(f"Errors: {error_count}")
    
    return 0 if error_count == 0 else 1

if __name__ == '__main__':
    sys.exit(main())
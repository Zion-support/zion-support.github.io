#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
and removing conflict markers.
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Split content by conflict markers
        lines = content.split('\n')
        fixed_lines = []
        in_conflict = False
        keep_lines = False
        
        for line in lines:
            if line.strip() == '<<<<<<< HEAD':
                in_conflict = True
                keep_lines = True
                continue
            elif line.strip() == '=======':
                keep_lines = False
                continue
            elif line.strip().startswith('>>>>>>>'):
                in_conflict = False
                keep_lines = False
                continue
            elif in_conflict and not keep_lines:
                # Skip lines in the non-HEAD version
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
    """Main function to fix all merge conflicts."""
    # Find all TypeScript/JavaScript files in the app directory
    pattern = '/workspace/app/**/*.{tsx,ts,js,jsx}'
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    total_conflicts = 0
    
    for file_path in files:
        if os.path.isfile(file_path):
            # Check if file has conflicts
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<<<<<<< HEAD' in content:
                        total_conflicts += 1
                        if fix_merge_conflicts(file_path):
                            fixed_count += 1
                            print(f"Fixed: {file_path}")
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Files with conflicts: {total_conflicts}")
    print(f"Files fixed: {fixed_count}")
    print(f"Files failed: {total_conflicts - fixed_count}")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts in TypeScript/TSX files.
This script will:
1. Find all files with merge conflict markers
2. Resolve conflicts by choosing the HEAD version (between <<<<<<< HEAD and =======)
3. Remove conflict markers and clean up the files
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflict blocks
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        def resolve_conflict(match):
            head_content = match.group(1)
            # For now, we'll choose the HEAD version
            return head_content
        
        # Replace all merge conflicts with HEAD version
        resolved_content = re.sub(conflict_pattern, resolve_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers that might be malformed
        resolved_content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', resolved_content, flags=re.DOTALL)
        resolved_content = re.sub(r'<<<<<<< HEAD.*?=======', '', resolved_content, flags=re.DOTALL)
        
        # Clean up extra whitespace and empty lines
        lines = resolved_content.split('\n')
        cleaned_lines = []
        prev_empty = False
        
        for line in lines:
            line = line.rstrip()
            if line.strip() == '':
                if not prev_empty:
                    cleaned_lines.append('')
                prev_empty = True
            else:
                cleaned_lines.append(line)
                prev_empty = False
        
        resolved_content = '\n'.join(cleaned_lines)
        
        # Write the resolved content back to the file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(resolved_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all merge conflicts."""
    workspace_root = Path('/workspace')
    app_dir = workspace_root / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX and TS files with merge conflicts
    tsx_files = list(app_dir.rglob('*.tsx'))
    ts_files = list(workspace_root.rglob('*.ts'))
    all_files = tsx_files + ts_files
    files_with_conflicts = []
    
    for file_path in all_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content:
                    files_with_conflicts.append(file_path)
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    print(f"Found {len(files_with_conflicts)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files_with_conflicts:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Verify no more conflicts
    remaining_conflicts = []
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    remaining_conflicts.append(file_path)
        except Exception as e:
            print(f"Error verifying {file_path}: {e}")
    
    if remaining_conflicts:
        print(f"Warning: {len(remaining_conflicts)} files still have merge conflicts:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("All merge conflicts have been resolved!")

if __name__ == "__main__":
    main()
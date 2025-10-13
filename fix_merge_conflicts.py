#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
and removing all merge conflict markers.
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
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        # Pattern to match merge conflict blocks
        # This will match from <<<<<<< HEAD to ======= and from ======= to >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+'
        
        # Replace with just the HEAD version (first capture group)
        def replace_conflict(match):
            head_content = match.group(1)
            return head_content
        
        # Apply the replacement
        new_content = re.sub(pattern, replace_conflict, content, flags=re.DOTALL)
        
        # Also handle cases where there might be incomplete conflict markers
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n?', '', new_content)
        new_content = re.sub(r'=======\n?', '', new_content)
        new_content = re.sub(r'>>>>>>> [^\n]+\n?', '', new_content)
        
        # Clean up any extra newlines that might have been left
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    workspace = Path('/workspace')
    app_dir = workspace / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all .tsx files with merge conflicts
    files_with_conflicts = []
    for file_path in app_dir.rglob('*.tsx'):
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
        if fix_merge_conflicts(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path.relative_to(workspace)}")
    
    print(f"\nFixed {fixed_count} out of {len(files_with_conflicts)} files")
    
    # Verify no more conflicts
    remaining_conflicts = []
    for file_path in app_dir.rglob('*.tsx'):
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                    remaining_conflicts.append(file_path)
        except Exception as e:
            print(f"Error verifying {file_path}: {e}")
    
    if remaining_conflicts:
        print(f"\nWarning: {len(remaining_conflicts)} files still have conflict markers:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  {file_path.relative_to(workspace)}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("\n✅ All merge conflicts resolved!")

if __name__ == "__main__":
    main()
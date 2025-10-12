#!/usr/bin/env python3
"""
Script to fix merge conflicts by keeping the HEAD version and removing conflict markers.
This script will process all TypeScript/JavaScript files and resolve merge conflicts.
"""

import os
import re
import glob
from pathlib import Path

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file by keeping HEAD version."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has merge conflicts
        if '<<<<<<< HEAD' not in content:
            return False
        
        print(f"Fixing merge conflicts in: {file_path}")
        
        # Pattern to match merge conflict blocks
        # This will match from <<<<<<< HEAD to ======= to >>>>>>> branch-name
        conflict_pattern = r'<<<<<<< HEAD\n(.*?)\n=======.*?\n>>>>>>> [^\n]+\n?'
        
        # Replace conflict blocks with just the HEAD content
        fixed_content = re.sub(conflict_pattern, r'\1\n', content, flags=re.DOTALL)
        
        # Also handle cases where there might be nested conflicts or malformed markers
        # Remove any remaining conflict markers
        fixed_content = re.sub(r'<<<<<<< HEAD\n?', '', fixed_content)
        fixed_content = re.sub(r'=======\n?', '', fixed_content)
        fixed_content = re.sub(r'>>>>>>> [^\n]+\n?', '', fixed_content)
        
        # Clean up any extra newlines
        fixed_content = re.sub(r'\n\s*\n\s*\n', '\n\n', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_source_files():
    """Find all TypeScript/JavaScript source files excluding node_modules."""
    source_files = []
    
    # Common source file extensions
    extensions = ['*.tsx', '*.ts', '*.js', '*.jsx']
    
    for ext in extensions:
        # Find files recursively, excluding node_modules
        pattern = f"**/{ext}"
        files = glob.glob(pattern, recursive=True)
        
        # Filter out node_modules
        files = [f for f in files if 'node_modules' not in f]
        source_files.extend(files)
    
    return source_files

def main():
    """Main function to fix all merge conflicts."""
    print("Starting merge conflict resolution...")
    
    # Change to workspace directory
    os.chdir('/workspace')
    
    # Find all source files
    source_files = find_source_files()
    print(f"Found {len(source_files)} source files to check")
    
    fixed_count = 0
    error_count = 0
    
    for file_path in source_files:
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
        else:
            # Check if there was an error
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                if '<<<<<<< HEAD' in content:
                    error_count += 1
                    print(f"Warning: Could not fix conflicts in {file_path}")
            except:
                error_count += 1
    
    print(f"\nMerge conflict resolution complete!")
    print(f"Files processed: {len(source_files)}")
    print(f"Files fixed: {fixed_count}")
    print(f"Files with errors: {error_count}")
    
    # Verify no conflicts remain
    remaining_conflicts = []
    for file_path in source_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            if '<<<<<<< HEAD' in content or '=======' in content or '>>>>>>> ' in content:
                remaining_conflicts.append(file_path)
        except:
            pass
    
    if remaining_conflicts:
        print(f"\nWarning: {len(remaining_conflicts)} files still have conflict markers:")
        for file_path in remaining_conflicts[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(remaining_conflicts) > 10:
            print(f"  ... and {len(remaining_conflicts) - 10} more")
    else:
        print("\nAll merge conflicts have been resolved!")

if __name__ == "__main__":
    main()
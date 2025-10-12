#!/usr/bin/env python3
"""
Script to automatically resolve merge conflicts by keeping the HEAD version
and removing all conflict markers.
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
        
        # Remove merge conflict markers and keep HEAD version
        # Pattern to match: <<<<<<< HEAD ... ======= ... >>>>>>> branch
        pattern = r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+'
        
        # Replace with just the HEAD content
        new_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
        
        # Also handle cases where there might be multiple conflicts
        # Remove any remaining conflict markers
        new_content = re.sub(r'<<<<<<< HEAD\n', '', new_content)
        new_content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+\n?', '', new_content, flags=re.DOTALL)
        
        # Clean up any extra newlines
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        # Write back the cleaned content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed merge conflicts in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with merge conflicts."""
    # Get list of files with merge conflicts
    result = os.popen('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null').read()
    
    files = [f.strip() for f in result.split('\n') if f.strip()]
    
    print(f"Found {len(files)} files with merge conflicts")
    
    fixed_count = 0
    for file_path in files:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
    
    print(f"Fixed merge conflicts in {fixed_count} files")
    
    # Verify no more conflicts
    result = os.popen('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null').read()
    remaining = [f.strip() for f in result.split('\n') if f.strip()]
    
    if remaining:
        print(f"Warning: {len(remaining)} files still have merge conflicts:")
        for f in remaining[:10]:  # Show first 10
            print(f"  - {f}")
        if len(remaining) > 10:
            print(f"  ... and {len(remaining) - 10} more")
    else:
        print("All merge conflicts resolved!")

if __name__ == "__main__":
    main()
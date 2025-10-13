#!/usr/bin/env python3
"""
Script to fix TypeScript syntax errors by adding missing closing braces.
"""

import os
import re
import sys
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has syntax errors (missing closing braces)
        lines = content.split('\n')
        
        # Count opening and closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        
        if open_braces == close_braces:
            return False
        
        # If we have more opening braces than closing, add the missing ones
        missing_braces = open_braces - close_braces
        
        # Find the last non-empty line
        last_non_empty_line = -1
        for i in range(len(lines) - 1, -1, -1):
            if lines[i].strip():
                last_non_empty_line = i
                break
        
        if last_non_empty_line >= 0:
            # Add missing closing braces
            for _ in range(missing_braces):
                lines.append('}')
            
            # Write the fixed content back
            new_content = '\n'.join(lines)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with syntax errors."""
    workspace = Path('/workspace')
    app_dir = workspace / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all .tsx files
    files_to_check = []
    for file_path in app_dir.rglob('*.tsx'):
        files_to_check.append(file_path)
    
    print(f"Checking {len(files_to_check)} files for syntax errors")
    
    fixed_count = 0
    for file_path in files_to_check:
        if fix_syntax_errors(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path.relative_to(workspace)}")
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()
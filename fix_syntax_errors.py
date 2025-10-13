#!/usr/bin/env python3
"""
Script to fix TypeScript syntax errors, particularly missing closing braces.
"""

import os
import re
from pathlib import Path

def fix_syntax_errors_in_file(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has syntax issues
        if not content.strip():
            return False
        
        print(f"Checking syntax in: {file_path}")
        
        # Count opening and closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        
        # If we have more opening braces than closing braces, add missing ones
        if open_braces > close_braces:
            missing_braces = open_braces - close_braces
            print(f"  Missing {missing_braces} closing braces")
            
            # Add missing closing braces at the end of the file
            # But first, check if the file ends with proper structure
            lines = content.split('\n')
            
            # Find the last non-empty line
            last_non_empty = -1
            for i in range(len(lines) - 1, -1, -1):
                if lines[i].strip():
                    last_non_empty = i
                    break
            
            if last_non_empty >= 0:
                # Add missing closing braces
                for _ in range(missing_braces):
                    lines.append('}')
                
                # Write the fixed content back
                fixed_content = '\n'.join(lines)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(fixed_content)
                
                print(f"  Added {missing_braces} closing braces")
                return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors."""
    workspace_root = Path('/workspace')
    app_dir = workspace_root / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_syntax_errors_in_file(file_path):
            fixed_count += 1
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
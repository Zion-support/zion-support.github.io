#!/usr/bin/env python3
"""
Script to remove unused imports from TSX files.
"""

import os
import re
from pathlib import Path

def remove_unused_imports_in_file(file_path):
    """Remove unused imports from a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has unused imports
        if 'ArrowRight' in content and '<ArrowRight' not in content:
            print(f"Removing unused ArrowRight import from: {file_path}")
            
            # Remove ArrowRight from lucide-react import
            content = re.sub(
                r'import \{\s*ArrowRight,\s*([^}]+)\s*\} from \'lucide-react\';',
                r'import { \1 } from \'lucide-react\';',
                content
            )
            
            # Remove ArrowRight from single import
            content = re.sub(
                r'import \{\s*ArrowRight\s*\} from \'lucide-react\';',
                '',
                content
            )
            
            # Clean up empty lines
            lines = content.split('\n')
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
            
            content = '\n'.join(cleaned_lines)
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to remove unused imports."""
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
        if remove_unused_imports_in_file(file_path):
            fixed_count += 1
    
    print(f"Removed unused imports from {fixed_count} files")

if __name__ == "__main__":
    main()
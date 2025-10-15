#!/usr/bin/env python3
"""
Script to remove duplicate import statements from TypeScript files.
"""

import os
import re

def fix_duplicate_imports(file_path):
    """Remove duplicate imports from a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        new_lines = []
        seen_imports = set()
        
        for line in lines:
            if line.strip().startswith('import '):
                # Check if we've seen this import before
                if line.strip() not in seen_imports:
                    seen_imports.add(line.strip())
                    new_lines.append(line)
                # Skip duplicate imports
            else:
                new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        # Additional cleanup - remove multiple empty lines
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Fixed duplicates in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all files with duplicate imports."""
    for root, dirs, files in os.walk('app'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                fix_duplicate_imports(file_path)

if __name__ == "__main__":
    main()
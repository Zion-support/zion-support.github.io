#!/usr/bin/env python3
"""
Script to fix missing imports in TypeScript files
"""
import os
import re
import glob

def fix_missing_imports(file_path):
    """Fix missing imports in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file uses Link or ArrowRight but doesn't import them
        needs_link = 'Link' in content and 'from \'react-router-dom\'' not in content
        needs_arrow_right = 'ArrowRight' in content and 'from \'lucide-react\'' not in content
        
        if not needs_link and not needs_arrow_right:
            return False
        
        lines = content.split('\n')
        new_lines = []
        
        # Find the import section
        import_end = 0
        for i, line in enumerate(lines):
            if line.strip().startswith('import ') and 'from ' in line:
                import_end = i + 1
            elif line.strip() and not line.strip().startswith('import ') and not line.strip().startswith('//'):
                break
        
        # Add missing imports
        imports_to_add = []
        if needs_link and 'from \'react-router-dom\'' not in content:
            imports_to_add.append("import { Link } from 'react-router-dom';")
        if needs_arrow_right and 'from \'lucide-react\'' not in content:
            imports_to_add.append("import { ArrowRight } from 'lucide-react';")
        
        # Insert imports after existing imports
        new_lines = lines[:import_end] + imports_to_add + lines[import_end:]
        
        # Write the fixed content back
        fixed_content = '\n'.join(new_lines)
        
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Fixed imports in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all missing imports"""
    # Get all TypeScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_missing_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed imports in {fixed_count} files")

if __name__ == "__main__":
    main()
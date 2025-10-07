#!/usr/bin/env python3
"""
Script to fix lucide-react import issues by converting from named imports to default imports.
"""

import os
import re
import glob

def fix_lucide_imports_in_file(file_path):
    """Fix lucide-react imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match lucide-react named imports
        lucide_pattern = r'import\s+{\s*([^}]+)\s*}\s+from\s+[\'"]lucide-react[\'"]'
        
        def fix_lucide_import(match):
            imports = match.group(1).strip()
            # Split by comma and clean up
            import_list = [imp.strip() for imp in imports.split(',')]
            import_list = [imp for imp in import_list if imp]  # Remove empty strings
            
            # Convert to individual default imports
            result = []
            for imp in import_list:
                result.append(f"import {imp} from 'lucide-react';")
            
            return '\n'.join(result)
        
        # Replace lucide-react named imports
        content = re.sub(lucide_pattern, fix_lucide_import, content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed lucide imports in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix lucide-react imports in all relevant files."""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_lucide_imports_in_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed lucide imports in {fixed_count} files")

if __name__ == "__main__":
    main()
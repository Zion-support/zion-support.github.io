#!/usr/bin/env python3
"""
Script to fix lucide-react import issues by using the correct named import syntax.
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
        
        # Pattern to match individual lucide-react imports that should be named imports
        individual_pattern = r'import\s+(\w+)\s+from\s+[\'"]lucide-react[\'"];'
        
        # Collect all individual imports
        individual_imports = re.findall(individual_pattern, content)
        
        if individual_imports:
            # Remove all individual imports
            content = re.sub(individual_pattern + r'\s*\n?', '', content)
            
            # Create a single named import
            unique_imports = sorted(set(individual_imports))
            named_import = f"import {{ {', '.join(unique_imports)} }} from 'lucide-react';"
            
            # Add the import after the first import statement or at the top
            import_pattern = r'(import\s+[^;]+;)\s*\n'
            if re.search(import_pattern, content):
                content = re.sub(import_pattern, r'\1\n' + named_import + '\n', content, count=1)
            else:
                content = named_import + '\n\n' + content
        
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
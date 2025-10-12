#!/usr/bin/env python3
"""
Script to fix unused variable and import issues in TypeScript/JavaScript files.
"""

import os
import re
import glob
from pathlib import Path

def fix_unused_vars_in_file(file_path):
    """Fix unused variables and imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove unused imports
        # Pattern: import Component from 'path'; (if Component is not used)
        lines = content.split('\n')
        cleaned_lines = []
        imports_to_remove = set()
        
        # First pass: identify unused imports
        for line in lines:
            if line.strip().startswith('import '):
                # Extract the import name
                match = re.search(r"import\s+([^,{]+)(?:\s*,\s*\{[^}]*\})?\s+from\s+", line)
                if match:
                    import_name = match.group(1).strip()
                    # Check if this import is used in the file
                    if import_name not in content.replace(line, ''):
                        imports_to_remove.add(line.strip())
                        continue
            cleaned_lines.append(line)
        
        # Second pass: remove unused imports
        final_lines = []
        for line in cleaned_lines:
            if line.strip() not in imports_to_remove:
                final_lines.append(line)
        
        content = '\n'.join(final_lines)
        
        # Remove unused variable declarations
        # Pattern: const VariableName = ...; (if VariableName is not used)
        content = re.sub(r'const\s+(\w+)\s*=\s*[^;]+;\s*$', '', content, flags=re.MULTILINE)
        
        # Remove unused function declarations that are not exported
        # Pattern: function FunctionName() { ... } (if not exported and not used)
        content = re.sub(r'^function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*\}\s*$', '', content, flags=re.MULTILINE)
        
        # Clean up empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files with unused variables."""
    # Get all TypeScript, JavaScript, and JSX files
    file_patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_process = []
    for pattern in file_patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want to process
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'coverage'
    ])]
    
    print(f"Found {len(files_to_process)} files to check for unused variables")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_unused_vars_in_file(file_path):
            fixed_count += 1
            print(f"Fixed unused variables in: {file_path}")
    
    print(f"Fixed unused variables in {fixed_count} files")

if __name__ == "__main__":
    main()
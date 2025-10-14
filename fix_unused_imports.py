#!/usr/bin/env python3
"""
Script to remove unused imports from TypeScript/React files
"""
import os
import re
import glob
import ast
import sys

def remove_unused_imports(file_path):
    """Remove unused imports from a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all import statements
        import_pattern = r'import\s+.*?from\s+[\'"][^\'"]+[\'"];?\s*\n'
        imports = re.findall(import_pattern, content, re.MULTILINE)
        
        if not imports:
            return False
        
        # Extract imported names from each import statement
        all_imported_names = set()
        import_statements = []
        
        for import_stmt in imports:
            # Parse the import statement to extract names
            # Handle different import patterns
            if 'import {' in import_stmt:
                # Named imports: import { A, B, C } from 'module'
                names_match = re.search(r'import\s*\{\s*([^}]+)\s*\}', import_stmt)
                if names_match:
                    names = [name.strip().split(' as ')[0] for name in names_match.group(1).split(',')]
                    all_imported_names.update(names)
            elif 'import * as' in import_stmt:
                # Namespace imports: import * as Module from 'module'
                namespace_match = re.search(r'import\s*\*\s*as\s+(\w+)', import_stmt)
                if namespace_match:
                    all_imported_names.add(namespace_match.group(1))
            elif 'import ' in import_stmt and ' from ' in import_stmt:
                # Default imports: import Default from 'module'
                default_match = re.search(r'import\s+(\w+)', import_stmt)
                if default_match:
                    all_imported_names.add(default_match.group(1))
            
            import_statements.append(import_stmt)
        
        # Find which imports are actually used in the code
        used_names = set()
        for name in all_imported_names:
            # Look for usage of the name in the code (not in import statements)
            code_without_imports = re.sub(import_pattern, '', content, flags=re.MULTILINE)
            if re.search(r'\b' + re.escape(name) + r'\b', code_without_imports):
                used_names.add(name)
        
        # Find unused names
        unused_names = all_imported_names - used_names
        
        if not unused_names:
            return False
        
        # Remove unused imports
        modified_content = content
        for import_stmt in import_statements:
            # Check if this import statement contains only unused names
            if 'import {' in import_stmt:
                names_match = re.search(r'import\s*\{\s*([^}]+)\s*\}', import_stmt)
                if names_match:
                    names = [name.strip() for name in names_match.group(1).split(',')]
                    used_in_this_import = [name for name in names if name.split(' as ')[0] in used_names]
                    unused_in_this_import = [name for name in names if name.split(' as ')[0] in unused_names]
                    
                    if len(used_in_this_import) == 0:
                        # Remove entire import statement
                        modified_content = modified_content.replace(import_stmt, '')
                    elif len(unused_in_this_import) > 0:
                        # Remove unused names from the import
                        new_import = import_stmt
                        for unused_name in unused_in_this_import:
                            # Remove the unused name and its comma
                            new_import = re.sub(r',\s*' + re.escape(unused_name) + r'(?=\s*[,}])', '', new_import)
                            new_import = re.sub(r'^' + re.escape(unused_name) + r'\s*,?\s*', '', new_import)
                            new_import = re.sub(r',\s*' + re.escape(unused_name) + r'\s*$', '', new_import)
                        modified_content = modified_content.replace(import_stmt, new_import)
        
        # Write the modified content back
        if modified_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(modified_content)
            print(f"Removed unused imports from: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to remove unused imports from all files"""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_modified = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if remove_unused_imports(file_path):
                files_modified += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Modified {files_modified} files")

if __name__ == "__main__":
    main()
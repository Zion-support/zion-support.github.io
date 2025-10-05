#!/usr/bin/env python3
"""
Script to fix merge conflicts in TypeScript/JavaScript files by resolving import conflicts
and choosing the cleaner destructured import approach.
"""

import os
import re
import glob

def fix_merge_conflicts_in_file(file_path):
    """Fix merge conflicts in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern to match merge conflict blocks with imports
        conflict_pattern = r'<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> [^\n]+'
        
        def resolve_import_conflict(match):
            head_content = match.group(1).strip()
            branch_content = match.group(2).strip()
            
            # Look for import statements in both sides
            head_imports = re.findall(r'import\s+{([^}]+)}\s+from\s+[\'"]([^\'"]+)[\'"]', head_content)
            branch_imports = re.findall(r'import\s+([^{][^,\s]+)\s+from\s+[\'"]([^\'"]+)[\'"]', branch_content)
            
            # If we have destructured imports in HEAD, prefer those
            if head_imports:
                for imports, module in head_imports:
                    # Clean up the imports
                    clean_imports = re.sub(r'\s+', ' ', imports.strip())
                    return f"import {{ {clean_imports} }} from '{module}';"
            
            # If we have individual imports in branch, convert to destructured
            if branch_imports:
                # Group by module
                module_imports = {}
                for imp, module in branch_imports:
                    if module not in module_imports:
                        module_imports[module] = []
                    module_imports[module].append(imp.strip())
                
                result = []
                for module, imports in module_imports.items():
                    clean_imports = ', '.join(sorted(set(imports)))
                    result.append(f"import {{ {clean_imports} }} from '{module}';")
                
                return '\n'.join(result)
            
            # If no clear import pattern, return the HEAD content
            return head_content
        
        # Replace all merge conflicts
        content = re.sub(conflict_pattern, resolve_import_conflict, content, flags=re.DOTALL)
        
        # Clean up any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Remove any remaining semicolons on their own lines
        content = re.sub(r'^\s*;\s*$', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed merge conflicts in: {file_path}")
            return True
        else:
            print(f"No conflicts found in: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix merge conflicts in all relevant files."""
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
        if fix_merge_conflicts_in_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed merge conflicts in {fixed_count} files")

if __name__ == "__main__":
    main()
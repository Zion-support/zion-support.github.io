#!/usr/bin/env python3
"""
Script to fix import statements in TypeScript/TSX files.
Converts destructured imports to individual imports for lucide-react.
"""

import os
import re
import glob

def fix_imports(file_path):
    """Fix import statements in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has lucide-react destructured imports
        if 'import {' not in content or 'lucide-react' not in content:
            return False
        
        print(f"Fixing imports in: {file_path}")
        
        # Pattern to match destructured imports from lucide-react
        pattern = r'import\s*\{([^}]+)\}\s*from\s*[\'"](lucide-react)[\'"];'
        
        def replace_import(match):
            imports_str = match.group(1).strip()
            module_name = match.group(2)
            
            # Split the imports and clean them
            imports = [imp.strip() for imp in imports_str.split(',')]
            imports = [imp for imp in imports if imp]  # Remove empty strings
            
            # Create individual import statements
            individual_imports = []
            for imp in imports:
                individual_imports.append(f"import {imp} from '{module_name}';")
            
            return '\n'.join(individual_imports)
        
        # Replace all destructured imports
        new_content = re.sub(pattern, replace_import, content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all import statements."""
    # Find all TypeScript/TSX files
    patterns = [
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that have lucide-react destructured imports
    files_with_issues = []
    for file_path in files_to_fix:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if 'import {' in content and 'lucide-react' in content:
                    files_with_issues.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_with_issues)} files with import issues")
    
    fixed_count = 0
    for file_path in files_with_issues:
        if fix_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed imports in {fixed_count} files")

if __name__ == "__main__":
    main()
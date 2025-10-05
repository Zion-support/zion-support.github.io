#!/usr/bin/env python3
"""
Script to fix lucide-react import statements by converting to named imports.
"""

import os
import re
import glob

def fix_lucide_named_imports(file_path):
    """Fix lucide-react import statements by converting to named imports."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has lucide-react default imports
        if 'import ' not in content or 'lucide-react' not in content:
            return False
        
        print(f"Fixing lucide-react imports in: {file_path}")
        
        # Find all individual lucide-react imports
        individual_imports = []
        lines = content.split('\n')
        new_lines = []
        i = 0
        
        while i < len(lines):
            line = lines[i].strip()
            
            # Check if this is an individual lucide-react import
            if line.startswith('import ') and 'from \'lucide-react\'' in line:
                # Extract the component name
                match = re.match(r'import\s+(\w+)\s+from\s+\'lucide-react\';', line)
                if match:
                    component_name = match.group(1)
                    individual_imports.append(component_name)
                    # Skip this line (don't add it to new_lines)
                    i += 1
                    continue
            
            new_lines.append(lines[i])
            i += 1
        
        # If we found individual imports, replace them with a single named import
        if individual_imports:
            # Remove duplicates and sort
            unique_imports = sorted(list(set(individual_imports)))
            
            # Create the named import
            named_import = f"import {{ {', '.join(unique_imports)} }} from 'lucide-react';"
            
            # Find the first import line and replace the lucide-react imports
            import_inserted = False
            final_lines = []
            
            for line in new_lines:
                if line.startswith('import ') and not import_inserted:
                    # Insert the lucide-react import before other imports
                    final_lines.append(named_import)
                    import_inserted = True
                final_lines.append(line)
            
            if not import_inserted:
                # If no imports found, add at the beginning
                final_lines.insert(0, named_import)
            
            # Write the fixed content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(final_lines))
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all lucide-react import statements."""
    # Find all TypeScript/TSX files
    patterns = [
        '**/*.tsx',
        '**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter files that have individual lucide-react imports
    files_with_issues = []
    for file_path in files_to_fix:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                if 'from \'lucide-react\'' in content and 'import {' not in content:
                    files_with_issues.append(file_path)
        except:
            continue
    
    print(f"Found {len(files_with_issues)} files with lucide-react import issues")
    
    fixed_count = 0
    for file_path in files_with_issues:
        if fix_lucide_named_imports(file_path):
            fixed_count += 1
    
    print(f"Fixed lucide-react imports in {fixed_count} files")

if __name__ == "__main__":
    main()
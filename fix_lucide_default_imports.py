#!/usr/bin/env python3
"""
Script to fix lucide-react imports to use default imports.
"""

import os
import re
import glob

def fix_lucide_imports_in_file(file_path):
    """Fix lucide-react imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"Fixing lucide-react imports in: {file_path}")
        
        # Find all named lucide-react imports
        named_imports = re.findall(r'import\s+\{([^}]+)\}\s+from\s+[\'"]lucide-react[\'"];', content)
        
        if not named_imports:
            return False
        
        # Extract individual icon names
        all_icons = []
        for import_group in named_imports:
            icons = [icon.strip() for icon in import_group.split(',')]
            all_icons.extend(icons)
        
        # Remove duplicates and sort
        unique_icons = sorted(list(set(all_icons)))
        
        if not unique_icons:
            return False
        
        # Create individual default import statements
        individual_imports = []
        for icon in unique_icons:
            individual_imports.append(f"import {icon} from 'lucide-react';")
        
        # Replace the old import with individual imports
        new_imports = '\n'.join(individual_imports)
        
        # Remove the old import lines
        content = re.sub(r'import\s+\{[^}]+\}\s+from\s+[\'"]lucide-react[\'"];\s*\n?', '', content)
        
        # Add the new imports after the first import (usually Next.js Link)
        lines = content.split('\n')
        new_lines = []
        added_imports = False
        
        for i, line in enumerate(lines):
            new_lines.append(line)
            # Add imports after the first import statement
            if not added_imports and line.strip().startswith('import ') and 'from' in line and 'lucide-react' not in line:
                # Check if this is the last import line
                next_line_idx = i + 1
                while next_line_idx < len(lines) and (lines[next_line_idx].strip().startswith('import ') or lines[next_line_idx].strip() == ''):
                    next_line_idx += 1
                
                # Add our imports after the last import
                if next_line_idx < len(lines):
                    new_lines.append('')
                    new_lines.append(new_imports)
                    added_imports = True
        
        # If we didn't find a good place to add imports, add them at the top
        if not added_imports:
            new_lines.insert(1, '')
            new_lines.insert(2, new_imports)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all lucide-react imports."""
    # Find all TypeScript files
    patterns = [
        'app/case-studies/**/*.tsx',
        'app/guides/**/*.tsx', 
        'app/services/**/*.tsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            total_files += 1
            if fix_lucide_imports_in_file(file_path):
                files_fixed += 1
    
    print(f"\nFixed lucide-react imports in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to remove all unused imports from TSX files.
"""

import os
import re
from pathlib import Path

def remove_all_unused_imports_in_file(file_path):
    """Remove all unused imports from a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has unused imports
        lines = content.split('\n')
        modified = False
        
        # Find all import statements
        import_lines = []
        for i, line in enumerate(lines):
            if line.strip().startswith('import '):
                import_lines.append(i)
        
        # Check each import line for unused imports
        for line_idx in import_lines:
            line = lines[line_idx]
            
            # Extract imports from the line
            if 'from \'lucide-react\'' in line:
                # Extract the imports
                match = re.search(r'import \{\s*([^}]+)\s*\} from \'lucide-react\';', line)
                if match:
                    imports = [imp.strip() for imp in match.group(1).split(',')]
                    
                    # Check which imports are actually used
                    used_imports = []
                    for imp in imports:
                        if f'<{imp}' in content or f'{imp} className' in content:
                            used_imports.append(imp)
                    
                    # If some imports are unused, update the line
                    if len(used_imports) < len(imports):
                        if used_imports:
                            new_line = f"import {{ {', '.join(used_imports)} }} from 'lucide-react';"
                        else:
                            new_line = ""
                        lines[line_idx] = new_line
                        modified = True
            
            elif 'from \'react-router-dom\'' in line:
                # Check if Link is used
                if 'Link' in line and '<Link' not in content:
                    lines[line_idx] = ""
                    modified = True
            
            elif 'from \'react-helmet-async\'' in line:
                # Check if Helmet is used
                if 'Helmet' in line and '<Helmet' not in content:
                    lines[line_idx] = ""
                    modified = True
        
        if modified:
            print(f"Removing unused imports from: {file_path}")
            
            # Clean up empty lines
            cleaned_lines = []
            prev_empty = False
            
            for line in lines:
                line = line.rstrip()
                if line.strip() == '':
                    if not prev_empty:
                        cleaned_lines.append('')
                    prev_empty = True
                else:
                    cleaned_lines.append(line)
                    prev_empty = False
            
            # Write the fixed content back
            fixed_content = '\n'.join(cleaned_lines)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to remove unused imports."""
    workspace_root = Path('/workspace')
    app_dir = workspace_root / 'app'
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TSX files to check")
    
    fixed_count = 0
    for file_path in tsx_files:
        if remove_all_unused_imports_in_file(file_path):
            fixed_count += 1
    
    print(f"Removed unused imports from {fixed_count} files")

if __name__ == "__main__":
    main()
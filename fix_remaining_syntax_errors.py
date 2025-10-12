#!/usr/bin/env python3
"""
Script to fix remaining syntax errors in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_missing_function_declaration(file_path):
    """Fix files missing function declarations"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has imports but no function declaration
        if 'import React' in content and 'export default function' not in content and 'export default' not in content:
            lines = content.split('\n')
            fixed_lines = []
            imports = []
            in_imports = True
            
            for line in lines:
                stripped = line.strip()
                
                # Collect imports
                if in_imports and (stripped.startswith('import ') or stripped == ''):
                    imports.append(line)
                    continue
                else:
                    in_imports = False
                
                # Add all other lines
                fixed_lines.append(line)
            
            # Extract function name from file path
            filename = os.path.basename(file_path)
            if filename == 'page.tsx':
                # Get parent directory name
                parent_dir = os.path.basename(os.path.dirname(file_path))
                function_name = ''.join(word.capitalize() for word in parent_dir.split('-')) + 'Page'
            else:
                function_name = filename.replace('.tsx', '').replace('.ts', '')
                function_name = ''.join(word.capitalize() for word in function_name.split('-'))
            
            # Reconstruct the file
            new_content = '\n'.join(imports) + '\n\nexport default function ' + function_name + '() {\n  return (\n    <>\n      ' + '\n      '.join(fixed_lines) + '\n    </>\n  );\n}'
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed missing function declaration in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_unused_imports(file_path):
    """Remove unused imports"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple unused import removal for common cases
        if 'fireEvent' in content and 'fireEvent' not in content.replace('import', ''):
            content = content.replace('fireEvent, ', '')
            content = content.replace(', fireEvent', '')
        
        if 'MemoryRouter' in content and 'MemoryRouter' not in content.replace('import', ''):
            content = content.replace('MemoryRouter, ', '')
            content = content.replace(', MemoryRouter', '')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining syntax errors"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and 'dist' not in f]
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    print(f"Found {total_count} files to check for remaining syntax errors...")
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            fixed = False
            
            # Try different fixes
            if fix_missing_function_declaration(file_path):
                fixed = True
            if fix_unused_imports(file_path):
                fixed = True
            
            if fixed:
                fixed_count += 1
    
    print(f"\nFixed remaining syntax errors in {fixed_count} files out of {total_count} files checked.")

if __name__ == "__main__":
    main()
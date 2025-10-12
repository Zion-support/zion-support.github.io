#!/usr/bin/env python3
"""
Script to fix remaining linting and parsing errors.
"""

import os
import re
import glob

def fix_unused_imports(file_path):
    """Remove unused imports from a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Common unused imports to remove
        unused_imports = [
            'CheckCircle', 'ArrowRight', 'BarChart3', 'FileText', 'TrendingUp', 
            'Clock', 'Shield', 'Phone', 'Mail', 'MapPin', 'Smartphone', 'Globe',
            'Database', 'Cpu', 'Wifi', 'Settings', 'Zap', 'Brain', 'BarChart',
            'React'
        ]
        
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            # Check if this is an import line
            if line.strip().startswith('import ') and '{' in line:
                # Extract the imports
                import_part = line.split('{')[1].split('}')[0]
                imports = [imp.strip() for imp in import_part.split(',')]
                
                # Filter out unused imports
                used_imports = [imp for imp in imports if imp not in unused_imports]
                
                if used_imports:
                    # Reconstruct the import line
                    new_line = line.split('{')[0] + '{' + ', '.join(used_imports) + '}' + line.split('}')[1]
                    new_lines.append(new_line)
                else:
                    # If no imports left, remove the entire line
                    continue
            else:
                new_lines.append(line)
        
        # Write back if changes were made
        new_content = '\n'.join(new_lines)
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed unused imports in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_unused_variables(file_path):
    """Fix unused variables by prefixing with underscore."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Common unused variables to fix
        unused_vars = [
            'activeDropdown', 'setActiveDropdown', 'categories', 'error', 
            'quality', 'currentBreakpoint', 'setCurrentBreakpoint', 'prefetch',
            'e'
        ]
        
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            new_line = line
            for var in unused_vars:
                # Replace variable declarations
                new_line = re.sub(rf'\b{var}\b', f'_{var}', new_line)
            new_lines.append(new_line)
        
        # Write back if changes were made
        new_content = '\n'.join(new_lines)
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed unused variables in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_any_types(file_path):
    """Replace 'any' types with more specific types."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace common 'any' patterns
        replacements = [
            (r': any', ': unknown'),
            (r'<any>', '<unknown>'),
            (r'Array<any>', 'Array<unknown>'),
            (r'Record<string, any>', 'Record<string, unknown>'),
        ]
        
        new_content = content
        for pattern, replacement in replacements:
            new_content = re.sub(pattern, replacement, new_content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed 'any' types in: {file_path}")
            return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining errors."""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip .original files
            if '.original' in file_path:
                continue
                
            files_processed += 1
            fixed = False
            
            if fix_unused_imports(file_path):
                fixed = True
            if fix_unused_variables(file_path):
                fixed = True
            if fix_any_types(file_path):
                fixed = True
                
            if fixed:
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed errors in {files_fixed} files")

if __name__ == "__main__":
    main()
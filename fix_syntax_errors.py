#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_duplicate_function_declarations(file_path):
    """Fix duplicate function declarations and misplaced imports"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has the common pattern of duplicate function declarations
        if 'export default function' in content and 'import React' in content:
            lines = content.split('\n')
            fixed_lines = []
            imports = []
            function_start = None
            in_function = False
            
            for i, line in enumerate(lines):
                stripped = line.strip()
                
                # Collect imports
                if stripped.startswith('import '):
                    imports.append(line)
                    continue
                
                # Find the first export default function
                if stripped.startswith('export default function') and function_start is None:
                    function_start = i
                    fixed_lines.append(line)
                    in_function = True
                    continue
                
                # Skip duplicate function declarations
                if in_function and stripped.startswith('export default function'):
                    continue
                
                # Add all other lines
                fixed_lines.append(line)
            
            # Reconstruct the file with imports first, then function
            if imports and function_start is not None:
                new_content = '\n'.join(imports) + '\n\n' + '\n'.join(fixed_lines[function_start:])
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                print(f"Fixed duplicate function declarations in: {file_path}")
                return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_missing_closing_braces(file_path):
    """Fix missing closing braces"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count opening and closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        
        if open_braces > close_braces:
            missing_braces = open_braces - close_braces
            content += '\n' + '}' * missing_braces
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed missing closing braces in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_test_files(file_path):
    """Fix common issues in test files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix common test file issues
        if 'describe(' in content and 'it(' in content:
            # Ensure proper test structure
            if not content.strip().startswith('import'):
                content = "import { describe, it, expect } from '@jest/globals';\n\n" + content
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed test file: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors"""
    # Get all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        '__tests__/**/*.tsx',
        '__tests__/**/*.ts',
        '*.js'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories we don't want
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and 'dist' not in f]
    
    fixed_count = 0
    total_count = len(files_to_fix)
    
    print(f"Found {total_count} files to check for syntax errors...")
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            fixed = False
            
            # Try different fixes
            if fix_duplicate_function_declarations(file_path):
                fixed = True
            if fix_missing_closing_braces(file_path):
                fixed = True
            if 'test' in file_path.lower() and fix_test_files(file_path):
                fixed = True
            
            if fixed:
                fixed_count += 1
    
    print(f"\nFixed syntax errors in {fixed_count} files out of {total_count} files checked.")

if __name__ == "__main__":
    main()
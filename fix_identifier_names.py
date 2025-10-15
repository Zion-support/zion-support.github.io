#!/usr/bin/env python3
"""
Script to fix invalid identifier names that start with numbers
"""
import os
import re
import glob

def fix_identifier_names(file_path):
    """Fix invalid identifier names in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has invalid identifiers
        if not re.search(r'export default \d+[A-Za-z]', content):
            return False
        
        # Fix export default statements with numeric prefixes
        def fix_export(match):
            full_match = match.group(0)
            number = match.group(1)
            rest = match.group(2)
            
            # Convert to valid identifier by adding prefix
            if number == '404':
                return f'export default NotFound{rest}'
            elif number.startswith('5g'):
                # Convert 5g to FiveG
                return f'export default FiveG{rest[2:]}'
            else:
                # Generic fix - add Page prefix
                return f'export default Page{number}{rest}'
        
        # Pattern to match export default with numeric prefix
        pattern = r'export default (\d+)([A-Za-z][A-Za-z0-9]*)'
        fixed_content = re.sub(pattern, fix_export, content)
        
        # Also fix any variable declarations with numeric prefixes
        def fix_variable(match):
            number = match.group(1)
            rest = match.group(2)
            
            if number == '404':
                return f'NotFound{rest}'
            elif number.startswith('5g'):
                return f'FiveG{rest[2:]}'
            else:
                return f'Page{number}{rest}'
        
        # Fix const/let/var declarations
        var_pattern = r'\b(const|let|var)\s+(\d+)([A-Za-z][A-Za-z0-9]*)'
        fixed_content = re.sub(var_pattern, lambda m: f'{m.group(1)} {fix_variable(m.group(2, 3))}', fixed_content)
        
        # Fix function declarations
        func_pattern = r'\bfunction\s+(\d+)([A-Za-z][A-Za-z0-9]*)'
        fixed_content = re.sub(func_pattern, lambda m: f'function {fix_variable(m.group(1, 2))}', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed identifier names in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript/JSX files"""
    # Find all TypeScript/JSX files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_identifier_names(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed identifier names in {files_fixed} files")

if __name__ == "__main__":
    main()
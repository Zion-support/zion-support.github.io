#!/usr/bin/env python3
"""
Script to fix all duplicate function definitions in TypeScript/TSX files
"""
import os
import re
import glob

def fix_duplicate_functions(file_path):
    """Fix duplicate function definitions in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has duplicate function definitions
        if 'export default function PagePage()' not in content:
            return False
        
        print(f"Fixing duplicate functions in: {file_path}")
        
        # Extract the component name from the file path
        component_name = os.path.basename(file_path).replace('.tsx', '').replace('.ts', '')
        # Convert kebab-case to PascalCase
        component_name = ''.join(word.capitalize() for word in component_name.split('-'))
        
        # Remove the first function definition and keep only the second one
        lines = content.split('\n')
        new_lines = []
        skip_until_brace = False
        brace_count = 0
        
        for i, line in enumerate(lines):
            if 'export default function PagePage()' in line:
                skip_until_brace = True
                brace_count = 0
                continue
            
            if skip_until_brace:
                # Count braces to know when to stop skipping
                brace_count += line.count('{') - line.count('}')
                if brace_count <= 0 and 'const ' + component_name in line:
                    skip_until_brace = False
                    new_lines.append(line)
                continue
            
            new_lines.append(line)
        
        # Join lines back
        fixed_content = '\n'.join(new_lines)
        
        # Add export if missing
        if 'export default' not in fixed_content:
            fixed_content = re.sub(r'(\s*);\s*$', r'\1;\n\nexport default ' + component_name + 'Page;', fixed_content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all duplicate functions"""
    # Find all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_duplicate_functions(file_path):
                files_fixed += 1
    
    print(f"Fixed duplicate functions in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix syntax errors in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix missing function declaration before return statement
        if 'return (' in content and 'const ' not in content.split('return (')[0].split('\n')[-10:]:
            # Find the line before return
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if 'return (' in line:
                    # Look for array or object definition before return
                    prev_lines = lines[:i]
                    prev_content = '\n'.join(prev_lines)
                    
                    # Check if there's a function declaration
                    if 'const ' not in prev_content and 'function ' not in prev_content and 'export default' not in prev_content:
                        # Add a basic function declaration
                        function_name = 'Component'
                        if 'Page' in file_path:
                            function_name = 'Page'
                        
                        # Insert function declaration before return
                        lines.insert(i, f'const {function_name} = () => {{')
                        lines.insert(i + 1, '  ')
                        
                        # Add closing brace at the end
                        if not content.strip().endswith('};'):
                            lines.append('};')
                        
                        content = '\n'.join(lines)
                        break
        
        # Fix JSX fragments that are not properly wrapped
        if '<>' in content and 'return (' not in content:
            content = re.sub(r'(\s*)<>', r'\1return (\n\1  <>', content)
            content = re.sub(r'(\s*)</>', r'\1  </>\n\1)', content)
        
        # Fix missing React import
        if 'React' in content and 'import React' not in content:
            content = "import React from 'react';\n" + content
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*return', r'\1;\n  return', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_syntax_errors(file_path):
                files_fixed += 1
                print(f"Fixed syntax in: {file_path}")
    
    print(f"Fixed syntax errors in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
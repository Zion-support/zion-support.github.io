#!/usr/bin/env python3
"""
Script to fix merge conflicts and syntax errors in the codebase
"""

import os
import re
import glob

def fix_merge_conflicts(file_path):
    """Fix merge conflicts in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove merge conflict markers and keep the HEAD version
        content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> .*\n', r'\1', content, flags=re.DOTALL)
        
        # Remove any remaining conflict markers
        content = re.sub(r'<<<<<<< .*\n.*\n=======\n.*\n>>>>>>> .*\n', '', content, flags=re.DOTALL)
        content = re.sub(r'=======\n.*\n>>>>>>> .*\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< .*\n.*\n=======\n', '', content, flags=re.DOTALL)
        
        # Clean up any remaining conflict markers
        content = re.sub(r'<<<<<<< .*', '', content)
        content = re.sub(r'=======', '', content)
        content = re.sub(r'>>>>>>> .*', '', content)
        
        # Remove empty lines that might be left behind
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed merge conflicts in {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix unterminated string literals
        content = re.sub(r'"[^"]*$', '""', content, flags=re.MULTILINE)
        content = re.sub(r"'[^']*$", "''", content, flags=re.MULTILINE)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\n\s*(\w+)', r'\1;\n\2', content)
        
        # Fix missing closing braces
        lines = content.split('\n')
        brace_count = 0
        for i, line in enumerate(lines):
            brace_count += line.count('{') - line.count('}')
            if brace_count < 0:
                lines.insert(i, '}')
                brace_count = 0
        
        content = '\n'.join(lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed syntax errors in {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing syntax in {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Remove node_modules and dist directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and 'dist' not in f]
    
    print(f"Found {len(files_to_fix)} files to process")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_merge_conflicts(file_path):
            fixed_count += 1
        if fix_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
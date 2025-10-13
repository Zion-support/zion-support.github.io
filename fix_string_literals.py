#!/usr/bin/env python3
"""
Script to fix unterminated string literals in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_string_literals(file_path):
    """Fix unterminated string literals in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix unterminated string literals by adding closing quotes
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            # Check for unterminated double quotes
            if line.count('"') % 2 == 1:
                if not line.strip().endswith('"'):
                    line += '"'
            
            # Check for unterminated single quotes
            if line.count("'") % 2 == 1:
                if not line.strip().endswith("'"):
                    line += "'"
            
            # Fix common patterns like import statements with unterminated strings
            if 'import' in line and ('"' in line or "'" in line):
                # If the line ends with a quote but has an odd number of quotes, it's likely unterminated
                if line.count('"') % 2 == 1 and line.strip().endswith('"'):
                    line = line.rstrip('"') + '";'
                elif line.count("'") % 2 == 1 and line.strip().endswith("'"):
                    line = line.rstrip("'") + "';"
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed string literals: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all string literal issues"""
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next', 'backup', 'backup-problematic', 'backup-unused-components']):
                continue
                
            total_files += 1
            if fix_string_literals(file_path):
                files_fixed += 1
    
    print(f"\nFixed string literals in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
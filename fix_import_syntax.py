#!/usr/bin/env python3
"""
Script to fix import statement syntax errors
"""
import os
import re
import glob

def fix_import_syntax(file_path):
    """Fix import statement syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix double quotes and semicolons in import statements
        content = re.sub(r"from '([^']+)'';'", r"from '\1';", content)
        content = re.sub(r'from "([^"]+)"";"', r'from "\1";', content)
        content = re.sub(r"import '([^']+)'';'", r"import '\1';", content)
        content = re.sub(r'import "([^"]+)"";"', r'import "\1";', content)
        
        # Fix other common syntax issues
        content = re.sub(r"';'", r"';", content)
        content = re.sub(r'";"', r'";', content)
        
        # Fix missing semicolons at end of import statements
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            line = line.strip()
            if line.startswith(('import ', 'export ')) and not line.endswith((';', '{', '}')):
                if not line.endswith(';'):
                    line += ';'
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed import syntax: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all import syntax issues"""
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
            if fix_import_syntax(file_path):
                files_fixed += 1
    
    print(f"\nFixed import syntax in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
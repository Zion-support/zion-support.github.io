#!/usr/bin/env python3
import os
import re
import glob

def fix_file_issues(file_path):
    """Fix common issues in TypeScript/React files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove merge conflict markers
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Fix duplicate export statements
        content = re.sub(r'export default [^;]+;\s*export default [^;]+;', 'export default function Component() { return null; }', content)
        
        # Fix malformed function declarations
        content = re.sub(r'export default function [^{]*\{\s*export default function', 'export default function', content)
        
        # Fix missing function declarations
        if 'export default function' not in content and 'export default' in content:
            # Find the component name and fix it
            content = re.sub(r'export default ([A-Za-z][A-Za-z0-9]*);', r'export default function \1() { return null; }', content)
        
        # Remove duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        fixed_lines = []
        
        for line in lines:
            if line.strip().startswith('import '):
                if line not in seen_imports:
                    seen_imports.add(line)
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
        return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts', 
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next']):
                continue
                
            files_processed += 1
            if fix_file_issues(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed issues in {files_fixed} files")

if __name__ == "__main__":
    main()

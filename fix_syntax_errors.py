#!/usr/bin/env python3
"""
Script to fix common syntax errors in the codebase
"""
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix incomplete import statements
        content = re.sub(r'import\s*{\s*$', 'import { ArrowRight } from \'lucide-react\';', content)
        
        # Fix missing closing braces in imports
        content = re.sub(r'import\s*{\s*([^}]*?)\s*$', r'import { \1 } from \'lucide-react\';', content, flags=re.MULTILINE)
        
        # Fix self-closing div tags that should be opening tags
        content = re.sub(r'<div([^>]*?)\s*/>\s*<Helmet>', r'<div\1>\n      <Helmet>', content)
        
        # Fix missing closing tags for sections
        content = re.sub(r'<section([^>]*?)>\s*$', r'<section\1>\n        </section>', content, flags=re.MULTILINE)
        
        # Fix JSX expressions that need a parent element
        # This is a complex fix, so we'll handle it case by case
        
        # Fix missing closing braces in function definitions
        content = re.sub(r'export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*$', r'export default function \1() {\n  return (\n    <div>', content, flags=re.MULTILINE)
        
        # Fix incomplete return statements
        if 'return (' in content and not content.strip().endswith('}') and not content.strip().endswith(');'):
            content = content.rstrip() + '\n  );\n}'
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix syntax errors"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    errors_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            files_processed += 1
            if fix_syntax_errors(file_path):
                errors_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {errors_fixed} files")

if __name__ == "__main__":
    main()
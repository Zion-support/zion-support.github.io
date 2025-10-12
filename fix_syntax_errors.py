#!/usr/bin/env python3
"""
Fix common syntax errors in TypeScript/React files
"""

import os
import glob
import re

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed import statements
        content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*;\s*'use client';", 
                         r"'use client';\nimport {\1} from '\2';", content)
        
        # Fix import statements with semicolons in the middle
        content = re.sub(r"import\s*\{;\s*'use client';\s*([^}]+)\}", 
                         r"'use client';\nimport {\1}", content)
        
        # Fix missing semicolons in import statements
        content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*$", 
                         r"import {\1} from '\2';", content, flags=re.MULTILINE)
        
        # Fix duplicate 'use client' directives
        content = re.sub(r"'use client';\s*'use client';", "'use client';", content)
        
        # Fix malformed JSX expressions
        content = re.sub(r'<([^>]+)>\s*$', r'<\1></\1>', content, flags=re.MULTILINE)
        
        # Fix missing closing tags for common elements
        content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
        content = re.sub(r'<Helmet([^>]*)>\s*$', r'<Helmet\1></Helmet>', content, flags=re.MULTILINE)
        
        # Fix malformed function declarations
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{', r'const \1: React.FC = () => {', content)
        
        # Fix missing return statements
        content = re.sub(r'(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{', r'\1: React.FC = () => {', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'<>\s*$', r'<>', content, flags=re.MULTILINE)
        content = re.sub(r'</>\s*$', r'</>', content, flags=re.MULTILINE)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in: {file_path}")
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
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if any(skip in file_path for skip in ['.original', '.backup', '.broken']):
                continue
                
            files_processed += 1
            if fix_syntax_errors(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()
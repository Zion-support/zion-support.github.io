#!/usr/bin/env python3
"""
Script to fix critical syntax errors in TypeScript/React files
"""
import os
import re
import glob
from pathlib import Path

def fix_critical_errors(file_path):
    """Fix critical syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common critical errors
        
        # 1. Fix missing closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        if open_braces > close_braces:
            missing_braces = open_braces - close_braces
            content += '\n' + '}' * missing_braces
        
        # 2. Fix missing closing parentheses
        open_parens = content.count('(')
        close_parens = content.count(')')
        if open_parens > close_parens:
            missing_parens = open_parens - close_parens
            content += ')' * missing_parens
        
        # 3. Fix missing semicolons after statements
        content = re.sub(r'(\w+)\s*\n\s*(\w+)', r'\1;\n\2', content)
        
        # 4. Fix missing closing tags for JSX
        if '<div>' in content and '</div>' not in content:
            content = content.replace('</section>', '</div></section>')
        if '<section>' in content and '</section>' not in content:
            content = content.replace('</div>', '</div></section>')
        
        # 5. Fix common parsing errors
        content = re.sub(r'(\w+)\s*=\s*\(\s*\)\s*=>\s*{', r'\1 = () => {', content)
        content = re.sub(r'(\w+)\s*:\s*any\s*;', r'\1: any;', content)
        
        # 6. Fix missing imports
        if 'useState' in content and 'import' not in content:
            content = "import React, { useState } from 'react';\n" + content
        if 'useEffect' in content and 'import' not in content:
            content = "import React, { useEffect } from 'react';\n" + content
        
        # 7. Fix JSX syntax issues
        content = re.sub(r'<(\w+)\s*/>', r'<\1></\1>', content)
        
        # 8. Fix missing closing tags for specific elements
        if '<Router>' in content and '</Router>' not in content:
            content = content.replace('</div>', '</div></Router>')
        if '<header>' in content and '</header>' not in content:
            content = content.replace('</div>', '</div></header>')
        
        # 9. Fix specific parsing errors
        content = re.sub(r'(\w+)\s*=\s*\(\s*\)\s*=>\s*{', r'\1 = () => {', content)
        content = re.sub(r'(\w+)\s*:\s*any\s*;', r'\1: any;', content)
        
        # 10. Fix missing closing tags for specific elements
        if '<div>' in content and '</div>' not in content:
            content = content.replace('</section>', '</div></section>')
        if '<section>' in content and '</section>' not in content:
            content = content.replace('</div>', '</div></section>')
        
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
    # Focus on critical files first
    critical_files = [
        'App.tsx',
        'app/page.tsx',
        'app/layout.tsx',
        'app/main.tsx'
    ]
    
    # Add component files
    component_files = glob.glob('app/components/*.tsx')
    critical_files.extend(component_files)
    
    # Add page files
    page_files = glob.glob('app/*/page.tsx')
    critical_files.extend(page_files)
    
    print(f"Fixing critical errors in {len(critical_files)} files...")
    
    fixed_count = 0
    failed_count = 0
    
    for file_path in critical_files:
        if os.path.exists(file_path):
            print(f"Fixing {file_path}...")
            if fix_critical_errors(file_path):
                fixed_count += 1
            else:
                failed_count += 1
    
    print(f"\nFixed {fixed_count} files successfully")
    print(f"Failed to fix {failed_count} files")

if __name__ == "__main__":
    main()
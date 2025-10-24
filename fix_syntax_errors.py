#!/usr/bin/env python3
"""
Script to fix common syntax errors in TypeScript/JSX files
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
        
        # Fix 1: Remove duplicate export statements
        # Pattern: export default PagePage;}\n\nexport default PagePage;
        content = re.sub(r'export default \w+;\}\s*\n\s*export default \w+;', 'export default PagePage;', content)
        
        # Fix 2: Fix missing closing braces
        # Pattern: export default PagePage;}\n\nexport default PagePage;
        content = re.sub(r'export default \w+;\}\s*$', 'export default PagePage;', content, flags=re.MULTILINE)
        
        # Fix 3: Fix duplicate closing braces
        content = re.sub(r'}\s*;\s*}\s*$', '};', content, flags=re.MULTILINE)
        
        # Fix 4: Fix missing semicolons after closing braces
        content = re.sub(r'}\s*$', '};', content, flags=re.MULTILINE)
        
        # Fix 5: Fix function declarations that are missing proper structure
        # Look for patterns like: const PagePage = () => { ... }; export default PagePage;
        if 'const PagePage = () => {' in content and 'export default PagePage;' in content:
            # Remove the duplicate export
            content = re.sub(r'export default PagePage;\s*$', '', content, flags=re.MULTILINE)
        
        # Fix 6: Fix JSX return statements that are malformed
        # Look for patterns where return statement is not properly structured
        content = re.sub(r'return\s*\(\s*$', 'return (\n    ', content, flags=re.MULTILINE)
        
        # Fix 7: Fix missing React import for JSX
        if 'return (' in content and 'import React' not in content and 'use client' not in content:
            content = "'use client';\nimport React from 'react';\n" + content
        
        # Fix 8: Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*)"\s*$', r'className="\1"', content)
        
        # Fix 9: Fix missing closing tags
        # This is a basic fix - more complex cases might need manual intervention
        content = re.sub(r'<div([^>]*)>\s*$', r'<div\1>', content)
        
        # Fix 10: Fix duplicate semicolons
        content = re.sub(r';\s*;', ';', content)
        
        # Fix 11: Fix missing closing parenthesis in return statements
        content = re.sub(r'return\s*\(\s*<div([^>]*)>\s*$', r'return (\n    <div\1>', content)
        
        # Fix 12: Fix malformed function declarations
        if 'const PagePage = () => {' in content:
            # Ensure proper function structure
            content = re.sub(r'const PagePage = \(\) => \{', 'const PagePage = () => {', content)
        
        # Fix 13: Fix missing closing braces in functions
        lines = content.split('\n')
        brace_count = 0
        in_function = False
        fixed_lines = []
        
        for line in lines:
            if 'const PagePage = () => {' in line:
                in_function = True
                brace_count = 1
            elif in_function:
                if '{' in line:
                    brace_count += line.count('{')
                if '}' in line:
                    brace_count -= line.count('}')
                
                if brace_count == 0 and in_function:
                    in_function = False
                    # Add missing closing brace if needed
                    if not line.strip().endswith('};'):
                        line = line.rstrip() + ';'
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Only write if content changed
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
    """Main function to fix syntax errors in all files"""
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if fix_syntax_errors(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Script to fix common issues in page files
"""
import os
import re
import glob

def fix_page_file(file_path):
    """Fix common issues in a page file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix duplicate function declarations
        # Look for pattern: export default function Name() { import React...
        pattern = r'export default function (\w+)\(\)\s*{\s*import React'
        match = re.search(pattern, content)
        if match:
            function_name = match.group(1)
            # Remove the duplicate export and keep the import
            content = re.sub(pattern, 'import React', content)
            # Add the export at the end
            content = re.sub(r'}\s*$', f'}}\n\nexport default {function_name};', content)
        
        # Fix missing closing braces
        # Count opening and closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        
        if open_braces > close_braces:
            # Add missing closing braces
            missing_braces = open_braces - close_braces
            content += '}' * missing_braces
        
        # Fix missing closing parentheses
        open_parens = content.count('(')
        close_parens = content.count(')')
        
        if open_parens > close_parens:
            # Add missing closing parentheses
            missing_parens = open_parens - close_parens
            content += ')' * missing_parens
        
        # Clean up any double newlines
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        if content != f.read():
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed issues in: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all page files"""
    # Get all page files
    page_files = []
    
    for root, dirs, files in os.walk('./app'):
        for file in files:
            if file.endswith('page.tsx'):
                page_files.append(os.path.join(root, file))
    
    print(f"Found {len(page_files)} page files")
    
    fixed_count = 0
    for file_path in page_files:
        if fix_page_file(file_path):
            fixed_count += 1
    
    print(f"Fixed issues in {fixed_count} page files")

if __name__ == "__main__":
    main()
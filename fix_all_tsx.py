#!/usr/bin/env python3
import os
import re
import glob

def fix_tsx_file(file_path):
    """Fix common TypeScript/JSX issues in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix duplicate function declarations - remove PageTsxPage function
        content = re.sub(r'export default function PageTsxPage\(\) \{[^}]*\}\s*', '', content, flags=re.DOTALL)
        
        # Fix missing closing tags by ensuring proper JSX structure
        # Count opening and closing div tags
        open_divs = content.count('<div')
        close_divs = content.count('</div>')
        
        if open_divs > close_divs:
            # Find the last return statement and fix it
            return_match = re.search(r'return\s*\(\s*<div[^>]*>.*?\);\s*\}', content, re.DOTALL)
            if return_match:
                # Extract the return content
                return_content = return_match.group(0)
                # Count divs in return content
                return_open_divs = return_content.count('<div')
                return_close_divs = return_content.count('</div>')
                
                if return_open_divs > return_close_divs:
                    missing_divs = return_open_divs - return_close_divs
                    # Add missing closing div tags before the closing parenthesis
                    fixed_return = return_content.replace(');', '  ' + '</div>' * missing_divs + '\n);')
                    content = content.replace(return_content, fixed_return)
        
        # Fix syntax errors in function parameters
        # Look for missing commas in function parameters
        content = re.sub(r'(\w+)\s+(\w+)\s*\)', r'\1, \2)', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # Fix malformed JSX expressions
        content = re.sub(r'\{([^}]*)\s*$', r'{\1}', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    # Find all TSX files
    pattern = "/workspace/app/**/*.tsx"
    files = glob.glob(pattern, recursive=True)
    
    fixed_count = 0
    for file_path in files:
        if fix_tsx_file(file_path):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} files out of {len(files)} checked")

if __name__ == "__main__":
    main()
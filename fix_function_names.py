#!/usr/bin/env python3
"""
Script to fix function names in page files that start with numbers
"""
import os
import re
import glob

def fix_function_name(file_path):
    """Fix function names that start with numbers"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the page name from the file path
        page_name = os.path.basename(os.path.dirname(file_path))
        if page_name == 'app':
            page_name = 'page'
        
        # Create a proper function name (replace numbers and special chars)
        function_name = re.sub(r'^(\d+)', r'FiveG', page_name)
        function_name = re.sub(r'[^a-zA-Z0-9]', '', function_name)
        function_name = function_name[0].upper() + function_name[1:] + 'Page'
        
        # Replace the function name in the content
        content = re.sub(r'export default function \w+\(\)', f'export default function {function_name}()', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed function name in: {file_path} -> {function_name}")
        return True
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all page files"""
    # Find all page.tsx files
    pattern = 'app/**/page.tsx'
    
    files_processed = 0
    files_fixed = 0
    
    for file_path in glob.glob(pattern, recursive=True):
        # Skip node_modules and other directories
        if 'node_modules' in file_path or '.git' in file_path:
            continue
            
        files_processed += 1
        if fix_function_name(file_path):
            files_fixed += 1
    
    print(f"\nProcessed {files_processed} page files")
    print(f"Fixed {files_fixed} page files")

if __name__ == "__main__":
    main()
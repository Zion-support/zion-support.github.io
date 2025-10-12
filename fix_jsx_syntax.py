#!/usr/bin/env python3
"""
Fix JSX syntax errors in the codebase.
"""

import os
import re
import glob

def fix_jsx_syntax(content):
    """Fix common JSX syntax issues."""
    # Fix malformed JSX elements
    content = re.sub(r'<(\w+)\s+const\s+className\s*=\s*"([^"]*)"\s*/>', r'<\1 className="\2">', content)
    content = re.sub(r'<(\w+)\s+const\s+className\s*=\s*"([^"]*)"\s*/>', r'<\1 className="\2">', content)
    
    # Fix unclosed JSX tags
    content = re.sub(r'<(\w+)([^>]*?)(?<!/)>\s*$', r'<\1\2 />', content, flags=re.MULTILINE)
    
    # Fix malformed closing tags
    content = re.sub(r'</\s*(\w+)\s*/>', r'</\1>', content)
    
    # Fix spaces in JSX attributes
    content = re.sub(r'<(\w+)\s+(\w+)\s*>\s*', r'<\1 \2>', content)
    
    # Fix malformed self-closing tags
    content = re.sub(r'<(\w+)([^>]*?)\s*/>\s*$', r'<\1\2 />', content, flags=re.MULTILINE)
    
    # Fix spaces in className attributes
    content = re.sub(r'className\s*=\s*"([^"]*)\s+([^"]*)"', r'className="\1\2"', content)
    
    # Fix malformed meta tags
    content = re.sub(r'<meta\s+name="([^"]*)"\s+content="([^"]*)"\s*/\s*/>', r'<meta name="\1" content="\2" />', content)
    
    # Fix malformed title tags
    content = re.sub(r'<title\s*>\s*([^<]*)\s*</title>', r'<title>\1</title>', content)
    
    # Fix malformed div tags
    content = re.sub(r'<div\s+const\s+className\s*=\s*"([^"]*)"\s*/>', r'<div className="\1">', content)
    
    # Fix malformed Link components
    content = re.sub(r'<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*/>', r'<Link to="\1" className="\2">', content)
    
    # Fix malformed ArrowRight components
    content = re.sub(r'<ArrowRight\s+className="([^"]*)"\s*/\s*/>', r'<ArrowRight className="\1" />', content)
    
    # Fix malformed Helmet components
    content = re.sub(r'<Helmet\s*/>', r'<Helmet>', content)
    
    return content

def process_file(file_path):
    """Process a single file to fix JSX syntax."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has JSX syntax issues
        if any(pattern in content for pattern in ['const className', 'title  >', 'meta name', 'ArrowRight className', 'Helmet />']):
            print(f"Processing: {file_path}")
            
            # Fix JSX syntax
            cleaned_content = fix_jsx_syntax(content)
            
            # Write cleaned content back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_content)
            
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    """Main function to process all files with JSX syntax issues."""
    # Find all TypeScript/JavaScript files in app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(files_to_process)} files to check")
    
    processed_count = 0
    for file_path in files_to_process:
        if process_file(file_path):
            processed_count += 1
    
    print(f"Processed {processed_count} files with JSX syntax issues")

if __name__ == "__main__":
    main()
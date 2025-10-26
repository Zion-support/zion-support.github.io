#!/usr/bin/env python3
"""
Final comprehensive fix for all remaining syntax errors.
"""

import os
import re
import glob
from pathlib import Path

def fix_classname_spacing(content):
    """Fix missing spaces in className attributes."""
    # Fix className attributes with missing spaces
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
    
    # Fix specific patterns
    content = re.sub(r'className="min-h-screenbg-', r'className="min-h-screen bg-', content)
    content = re.sub(r'className="containermx-auto', r'className="container mx-auto', content)
    content = re.sub(r'className="text-4xlfont-bold', r'className="text-4xl font-bold', content)
    content = re.sub(r'className="text-lgtext-gray-300', r'className="text-lg text-gray-300', content)
    content = re.sub(r'className="inline-flexitems-center', r'className="inline-flex items-center', content)
    content = re.sub(r'className="ml-2h-4', r'className="ml-2 h-4', content)
    
    return content

def fix_jsx_structure(content):
    """Fix JSX structure issues."""
    # Fix broken Head tags
    content = re.sub(r'<Head>\s*\n\s*<title>', r'<Head>\n        <title>', content)
    content = re.sub(r'</title>\s*<meta', r'</title>\n        <meta', content)
    content = re.sub(r'<meta[^>]*/>\s*</Head>', r'<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />\n      </Head>', content)
    
    # Fix duplicate meta tags
    content = re.sub(r'<meta name="description"[^>]*/>\s*<meta name="description"[^>]*/>', r'<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />', content)
    
    # Fix broken Link components
    content = re.sub(r'<Link href="([^"]+)" className="([^"]+)"\s*>\s*>\s*', r'<Link href="\1" className="\2">\n            ', content)
    
    return content

def fix_syntax_errors(content):
    """Fix general syntax errors."""
    # Remove extra semicolons and commas
    content = re.sub(r';\s*,\s*$', '', content, flags=re.MULTILINE)
    content = re.sub(r',\s*;\s*$', '', content, flags=re.MULTILINE)
    
    # Fix function declarations
    content = re.sub(r'}\s*;\s*$', '}', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix all syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_classname_spacing(content)
        content = fix_jsx_structure(content)
        content = fix_syntax_errors(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    # Get all TypeScript/TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Fix remaining TypeScript errors in page files
"""

import os
import re
import glob

def fix_page_errors(file_path):
    """Fix TypeScript errors in page files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix spaces in import statements
        content = re.sub(r'Arrow Right', 'ArrowRight', content)
        content = re.sub(r'Check Circle', 'CheckCircle', content)
        content = re.sub(r'Map Pin', 'MapPin', content)
        content = re.sub(r'Link Icon', 'LinkIcon', content)
        content = re.sub(r'Helmet', 'Helmet', content)
        content = re.sub(r'Link', 'Link', content)
        
        # Fix spaces in JSX attributes
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2\3', content)
        content = re.sub(r'class Name="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2\3', content)
        
        # Fix spaces in other attributes
        content = re.sub(r'(\w)([A-Z])', r'\1\2', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'^\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'\s*<>\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^\s*</>\s*', '', content, flags=re.MULTILINE)
        
        # Fix malformed JSX tags
        content = re.sub(r'<([^>]*?)([a-zA-Z])([a-zA-Z])([^>]*?)>', r'<\1\2\3\4>', content)
        
        # Fix broken imports
        content = re.sub(r'^import\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^import\s+{\s*}\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        content = re.sub(r'^import\s+,\s+from\s+[^;]+;?\s*$', '', content, flags=re.MULTILINE)
        
        # Fix spaces in function declarations
        content = re.sub(r'export default function ([A-Za-z]+) ([A-Za-z]+)', r'export default function \1\2', content)
        
        # Fix spaces in JSX elements
        content = re.sub(r'<([A-Za-z]+) ([A-Za-z]+)', r'<\1\2', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix page errors"""
    # Get all page files
    patterns = [
        'app/**/page.tsx',
        'app/**/page.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            files_processed += 1
            if fix_page_errors(file_path):
                files_fixed += 1
                print(f"Fixed errors in: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed errors in {files_fixed} files")

if __name__ == "__main__":
    main()
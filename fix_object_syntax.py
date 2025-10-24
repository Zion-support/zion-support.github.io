#!/usr/bin/env python3
"""
Fix object literal syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def fix_object_literals(content):
    """Fix object literal syntax errors."""
    # Fix missing commas in object literals
    content = re.sub(r'(\w+):\s*([^,}]+)(?<!,\s*)\s*\n\s*(\w+):', r'\1: \2,\n    \3:', content)
    
    # Fix JSX elements in object properties
    content = re.sub(r'icon:\s*<([^>]+)>\s*\n\s*title:', r'icon: <\1>,\n      title:', content)
    
    # Fix metadata object syntax
    content = re.sub(r'title:\s*([^,}]+)(?<!,\s*)\s*\n\s*description:', r'title: \1,\n  description:', content)
    
    # Fix function parameter syntax
    content = re.sub(r'function\s+\w+\(\s*{\s*([^}]+);\s*}\s*:\s*{\s*;\s*', r'function \1({\n  ', content)
    
    # Fix semicolons in JSX
    content = re.sub(r'</div>;\s*\);\s*$', '</div>\n    </div>\n  );', content, flags=re.MULTILINE)
    
    return content

def fix_classname_spacing(content):
    """Fix className spacing issues."""
    # Fix broken className attributes
    content = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', content)
    
    # Fix specific patterns
    content = re.sub(r'className="w-8h-8te x t-', r'className="w-8 h-8 text-', content)
    content = re.sub(r'className="w-6h-6te x t-', r'className="w-6 h-6 text-', content)
    content = re.sub(r'className="ml-2h-4w-4"', r'className="ml-2 h-4 w-4"', content)
    
    return content

def process_file(file_path):
    """Process a single file to fix syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_object_literals(content)
        content = fix_classname_spacing(content)
        
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
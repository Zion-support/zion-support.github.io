#!/usr/bin/env python3

import os
import re
import glob

def fix_syntax_errors():
    """Fix common syntax errors in TypeScript/JSX files"""
    
    # Get all TypeScript/JSX files in the app directory
    files = glob.glob('/workspace/app/**/*.tsx', recursive=True)
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Fix 1: Malformed className attributes (missing spaces)
            content = re.sub(r'className="([^"]*?)([a-z])([A-Z])', r'className="\1\2 \3', content)
            content = re.sub(r'className="([^"]*?)([a-z])([0-9])', r'className="\1\2 \3', content)
            content = re.sub(r'className="([^"]*?)([0-9])([a-z])', r'className="\1\2 \3', content)
            
            # Fix 2: Fix malformed JSX structure
            content = re.sub(r'<h1[^>]*>,\s*</h1>', r'<h1>', content)
            content = re.sub(r'<div[^>]*>,\s*</div>', r'<div>', content)
            
            # Fix 3: Fix malformed import statements
            content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*}\s*from', r'import { \1 } from', content)
            
            # Fix 4: Fix malformed object literals in arrays
            content = re.sub(r'},\s*{\s*icon:', r'},\n    {\n      icon:', content)
            
            # Fix 5: Fix malformed return statements
            content = re.sub(r'return\s*\(\s*</div>\s*\)', r'return (\n    <div>', content)
            content = re.sub(r'return\s*\(\s*\)', r'return (\n    <div>', content)
            
            # Fix 6: Fix stray text in JSX
            content = re.sub(r"'\s*Proven track record of success'\s*\]", r'  ];', content)
            
            # Fix 7: Fix malformed closing tags
            content = re.sub(r'</\s*>\s*</Helmet>', r'</Helmet>', content)
            
            # Fix 8: Fix malformed JSX fragments
            content = re.sub(r'<React\.Fragment>\s*</React><Helmet>', r'<Helmet>', content)
            
            # Fix 9: Fix malformed closing tags with extra characters
            content = re.sub(r',\s*-\s*>\s*</Helmet>', r'</Helmet>', content)
            content = re.sub(r'`\s*-\s*>\s*', r'', content)
            
            # Fix 10: Fix malformed section tags
            content = re.sub(r'<section\$1>', r'<section className="py-20 px-4">', content)
            content = re.sub(r'<div\$2>', r'<div className="max-w-7xl mx-auto">', content)
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed syntax errors in: {file_path}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    fix_syntax_errors()
    print("Syntax error fixing completed!")
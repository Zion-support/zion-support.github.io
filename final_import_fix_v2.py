#!/usr/bin/env python3
"""
Final script to fix import statement syntax errors in TSX files.
This script will:
1. Fix malformed import statements with missing braces
2. Fix React import statements
3. Fix lucide-react import statements
"""

import os
import re
import glob
from pathlib import Path

def fix_imports_final(file_path):
    """Fix import statements and function declarations precisely"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix React import - should be default import, not named import
        content = re.sub(r"import\s*{\s*React\s*}\s*from\s*'react'", r"import React from 'react'", content)
        content = re.sub(r"import\s*{\s*React\s*}\s*from\s*\"react\"", r"import React from \"react\"", content)
        
        # Fix lucide-react imports - should be named imports
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*'lucide-react'", r"import { \1 } from 'lucide-react'", content)
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*\"lucide-react\"", r"import { \1 } from \"lucide-react\"", content)
        
        # Fix other malformed import statements
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'", r"import { \1 } from '\2'", content)
        content = re.sub(r"import\s*{\s*([^}]+)\s*}\s*from\s*\"([^\"]+)\"", r"import { \1 } from \"\2\"", content)
        
        # Fix malformed function declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*=>\s*{', r'const \1 = () => {', content)
        content = re.sub(r'const\s+(\w+)\s*=\s*=>\s*\(', r'const \1 = () => (', content)
        content = re.sub(r'export\s+default\s+function\s+(\w+)\s*\(\)\s*{', r'export default function \1() {', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'<>\s*;', r'<>', content)
        content = re.sub(r';\s*</>', r'</>', content)
        
        # Fix malformed JSX elements
        content = re.sub(r'<(\w+)([^>]*)>\s*;', r'<\1\2>', content)
        content = re.sub(r';\s*</(\w+)>', r'</\1>', content)
        
        # Fix malformed Head tags
        content = re.sub(r'<Head><title>', r'<Head>\n        <title>', content)
        content = re.sub(r'</title>\s*<meta', r'</title>\n        <meta', content)
        
        # Fix malformed div tags
        content = re.sub(r'</div>\s*<div', r'</div>\n        <div', content)
        content = re.sub(r'</div>\s*<h1', r'</div>\n          <h1', content)
        content = re.sub(r'</div>\s*<p', r'</div>\n          <p', content)
        
        # Fix malformed text content
        content = re.sub(r'([^>])\s*;\s*([^<])', r'\1 \2', content)
        content = re.sub(r'([^>])\s*;\s*$', r'\1', content, flags=re.MULTILINE)
        
        # Fix missing closing braces
        if 'export default' in content and not content.strip().endswith('}'):
            content = content.rstrip() + '\n}'
        
        # Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*);', r'className="\1"', content)
        content = re.sub(r'content="([^"]*);', r'content="\1"', content)
        
        # Clean up multiple semicolons
        content = re.sub(r';+', ';', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Write the cleaned content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return content != original_content
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files precisely"""
    app_dir = Path('/workspace/app')
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    # Find all TSX files
    tsx_files = list(app_dir.rglob('*.tsx'))
    
    print(f"Found {len(tsx_files)} TSX files to fix")
    
    fixed_count = 0
    for file_path in tsx_files:
        if fix_imports_final(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
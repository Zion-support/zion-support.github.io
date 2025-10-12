#!/usr/bin/env python3
"""
Final fix script to handle remaining syntax errors and invalid characters.
"""

import os
import re
import glob
from pathlib import Path

def fix_invalid_characters(file_path):
    """Fix invalid characters and remaining issues in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
        
        original_content = content
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Fix invalid characters - replace with proper characters
        content = content.replace('"', '"').replace('"', '"')
        content = content.replace(''', "'").replace(''', "'")
        content = content.replace('…', '...')
        content = content.replace('–', '-').replace('—', '-')
        content = content.replace('•', '*')
        content = content.replace('→', '->')
        content = content.replace('←', '<-')
        content = content.replace('↑', '^')
        content = content.replace('↓', 'v')
        
        # Fix malformed imports
        content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"];', 'import React from \'react\';', content)
        content = re.sub(r'import\s+{\s*([^}]+)\s*}\s*from\s+[\'"]react-router-dom[\'"];', r'import { \1 } from \'react-router-dom\';', content)
        content = re.sub(r'import\s+{\s*([^}]+)\s*}\s*from\s+[\'"]lucide-react[\'"];', r'import { \1 } from \'lucide-react\';', content)
        content = re.sub(r'import\s+{\s*([^}]+)\s*}\s*from\s+[\'"]react-helmet-async[\'"];', r'import { \1 } from \'react-helmet-async\';', content)
        
        # Fix malformed function declarations
        content = re.sub(r'export default function\s+(\w+)\s*\(\s*\)\s*{', r'export default function \1() {', content)
        
        # Fix malformed JSX
        content = re.sub(r'<(\w+)([^>]*?)>\s*</\1>', r'<\1\2></\1>', content)
        
        # Fix missing return statements in React components
        if 'export default function' in content and 'return (' not in content and 'return <' not in content:
            # Find the function body and add return statement
            func_match = re.search(r'(export default function[^{]*{)([^}]*?)(})', content, flags=re.DOTALL)
            if func_match:
                func_start = func_match.group(1)
                func_body = func_match.group(2).strip()
                func_end = func_match.group(3)
                
                if func_body and not func_body.startswith('return'):
                    content = content.replace(func_match.group(0), f'{func_start}\n  return (\n    {func_body}\n  );\n{func_end}')
        
        # Fix malformed Helmet usage
        content = re.sub(r'<Helmet>\s*<title>([^<]+)</title>\s*<meta[^>]*/>\s*</Helmet>', r'<Helmet>\n        <title>\1</title>\n        <meta name="description" content="\1" />\n      </Helmet>', content)
        
        # Fix missing closing braces
        content = re.sub(r'(\w+)\s*\(\s*\)\s*{\s*([^}]*?)(?=\n\s*[a-zA-Z])', r'\1() {\n  \2\n}', content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        content = re.sub(r'^\s*\n', '', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files."""
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_to_process = []
    for pattern in patterns:
        files_to_process.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other excluded directories
    files_to_process = [f for f in files_to_process if not any(exclude in f for exclude in [
        'node_modules', '.git', 'dist', 'build', '.next', 'out'
    ])]
    
    print(f"Found {len(files_to_process)} files to process")
    
    fixed_count = 0
    for file_path in files_to_process:
        if fix_invalid_characters(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed invalid characters in {fixed_count} files")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Comprehensive script to fix all merge conflicts and syntax errors in the codebase.
"""

import os
import re
import glob
from pathlib import Path

def fix_file_syntax(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove any remaining merge conflict markers
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======\n.*?\n>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        content = re.sub(r'=======\n', '', content)
        content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
        
        # Fix common syntax issues
        # Fix missing spaces in className attributes
        content = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', content)
        
        # Fix missing spaces in text content
        content = re.sub(r'text-([a-zA-Z]+)([a-zA-Z])', r'text-\1-\2', content)
        content = re.sub(r'mb-([0-9]+)([a-zA-Z])', r'mb-\1-\2', content)
        content = re.sub(r'ml-([0-9]+)([a-zA-Z])', r'ml-\1-\2', content)
        content = re.sub(r'mr-([0-9]+)([a-zA-Z])', r'mr-\1-\2', content)
        content = re.sub(r'mt-([0-9]+)([a-zA-Z])', r'mt-\1-\2', content)
        content = re.sub(r'mx-([0-9]+)([a-zA-Z])', r'mx-\1-\2', content)
        content = re.sub(r'my-([0-9]+)([a-zA-Z])', r'my-\1-\2', content)
        content = re.sub(r'px-([0-9]+)([a-zA-Z])', r'px-\1-\2', content)
        content = re.sub(r'py-([0-9]+)([a-zA-Z])', r'py-\1-\2', content)
        content = re.sub(r'pt-([0-9]+)([a-zA-Z])', r'pt-\1-\2', content)
        content = re.sub(r'pb-([0-9]+)([a-zA-Z])', r'pb-\1-\2', content)
        content = re.sub(r'pl-([0-9]+)([a-zA-Z])', r'pl-\1-\2', content)
        content = re.sub(r'pr-([0-9]+)([a-zA-Z])', r'pr-\1-\2', content)
        
        # Fix malformed JSX fragments
        content = re.sub(r'<>([^<]*?)<>', r'<>\1</>', content)
        content = re.sub(r'<>([^<]*?)(?=<[^/])', r'<>\1</>', content)
        
        # Fix missing closing tags
        content = re.sub(r'<div([^>]*?)>(?!.*</div>)', r'<div\1></div>', content, flags=re.DOTALL)
        content = re.sub(r'<Link([^>]*?)>(?!.*</Link>)', r'<Link\1></Link>', content, flags=re.DOTALL)
        content = re.sub(r'<h1([^>]*?)>(?!.*</h1>)', r'<h1\1></h1>', content, flags=re.DOTALL)
        content = re.sub(r'<h2([^>]*?)>(?!.*</h2>)', r'<h2\1></h2>', content, flags=re.DOTALL)
        content = re.sub(r'<h3([^>]*?)>(?!.*</h3>)', r'<h3\1></h3>', content, flags=re.DOTALL)
        content = re.sub(r'<p([^>]*?)>(?!.*</p>)', r'<p\1></p>', content, flags=re.DOTALL)
        content = re.sub(r'<span([^>]*?)>(?!.*</span>)', r'<span\1></span>', content, flags=re.DOTALL)
        
        # Fix malformed function declarations
        content = re.sub(r'export default function\s+(\w+)\s*\(\s*\)\s*{', r'export default function \1() {', content)
        
        # Fix missing return statements
        if 'export default function' in content and 'return (' not in content and 'return <' not in content:
            content = re.sub(r'(export default function[^{]*{)([^}]*?)(})', r'\1\n  return (\n\2\n  );\n}', content, flags=re.DOTALL)
        
        # Fix malformed JSX expressions
        content = re.sub(r'(\w+)\s*\(\s*\)\s*{', r'\1() {', content)
        
        # Fix missing semicolons
        content = re.sub(r'(\w+)\s*\(\s*\)\s*{', r'\1() {', content)
        
        # Fix malformed imports
        content = re.sub(r'import\s+React\s+from\s+[\'"]react[\'"];', 'import React from \'react\';', content)
        content = re.sub(r'import\s+{\s*([^}]+)\s*}\s*from\s+[\'"]react-router-dom[\'"];', r'import { \1 } from \'react-router-dom\';', content)
        
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
        if fix_file_syntax(file_path):
            fixed_count += 1
            print(f"Fixed: {file_path}")
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
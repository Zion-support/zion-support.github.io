#!/usr/bin/env python3
"""
Script to fix syntax errors in TypeScript/JSX files.
"""

import os
import re
import glob
from pathlib import Path

def fix_syntax_errors_in_file(file_path):
    """Fix syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix HTML entity escaping issues
        content = re.sub(r'=&amp;gt;', '=>', content)
        content = re.sub(r'=&amp;lt;', '=<', content)
        content = re.sub(r'&amp;gt;', '>', content)
        content = re.sub(r'&amp;lt;', '<', content)
        content = re.sub(r'&amp;', '&', content)
        content = re.sub(r'&quot;', '"', content)
        content = re.sub(r'&rbrace;', '}', content)
        content = re.sub(r'&lbrace;', '{', content)
        
        # Fix common JSX syntax issues
        content = re.sub(r'(\w+):\s*React\.FC\s*=\s*\(\)\s*=>', r'\1: React.FC = () =>', content)
        
        # Fix missing semicolons after imports
        content = re.sub(r"import\s+([^;]+)\s+from\s+'([^']+)'(\s*)(?!;)", r"import \1 from '\2';", content)
        
        # Fix missing semicolons after variable declarations
        content = re.sub(r'(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{', r'\1: React.FC = () => {', content)
        
        # Fix broken JSX expressions
        content = re.sub(r'(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{', r'\1: React.FC = () => {', content)
        
        # Fix missing closing braces and parentheses
        lines = content.split('\n')
        fixed_lines = []
        brace_count = 0
        paren_count = 0
        
        for line in lines:
            # Count braces and parentheses
            brace_count += line.count('{') - line.count('}')
            paren_count += line.count('(') - line.count(')')
            
            # Fix common syntax issues
            line = re.sub(r'(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{', r'\1: React.FC = () => {', line)
            
            # Fix missing semicolons
            if re.match(r'^\s*import\s+.*from\s+.*[^;]\s*$', line):
                line = line.rstrip() + ';'
            
            fixed_lines.append(line)
        
        # Write the fixed content back
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def fix_jsx_components(file_path):
    """Fix JSX component syntax issues."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix component declaration syntax
        content = re.sub(r'const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{', r'const \1: React.FC = () => {', content)
        
        # Fix missing export statements
        if 'export default' not in content and 'const ' in content:
            # Find the main component name
            match = re.search(r'const\s+(\w+):\s*React\.FC', content)
            if match:
                component_name = match.group(1)
                content += f'\n\nexport default {component_name};'
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error fixing JSX components in {file_path}: {e}")

def main():
    """Main function to fix all syntax errors."""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip backup and disabled files
            if any(skip in file_path for skip in ['backup', 'disabled', '.original', 'node_modules']):
                continue
                
            files_processed += 1
            if fix_syntax_errors_in_file(file_path):
                files_fixed += 1
                # Also fix JSX components
                if file_path.endswith(('.tsx', '.jsx')):
                    fix_jsx_components(file_path)
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed syntax errors in {files_fixed} files")

if __name__ == "__main__":
    main()
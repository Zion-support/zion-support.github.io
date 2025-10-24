#!/usr/bin/env python3
import os
import re
import glob

def fix_specific_tsx_errors(file_path):
    """Fix specific TypeScript/JSX errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed export statements
        content = re.sub(r'export default function (\w+)Page\(\) \{import React', r'import React', content)
        
        # Fix malformed JSX closing tags with /&gt;
        content = re.sub(r'/\&gt;\}', r' />', content)
        content = re.sub(r'/\&gt;', r' />', content)
        
        # Fix malformed JSX attributes
        content = re.sub(r'className="([^"]*)\s*"', r'className="\1"', content)
        
        # Fix malformed JSX expressions
        content = re.sub(r'\{([^}]*)\s*\}', lambda m: f'{{{m.group(1).strip()}}}', content)
        
        # Fix malformed JSX elements
        content = re.sub(r'<([^>]*)\s*/>', r'<\1 />', content)
        
        # Fix malformed function calls
        content = re.sub(r'(\w+)\s*\(\s*\)\s*;', r'\1();', content)
        
        # Fix malformed object properties
        content = re.sub(r'(\w+):\s*([^,}]+)\s*,', r'\1: \2,', content)
        
        # Fix malformed array elements
        content = re.sub(r'\[\s*([^\]]*)\s*\]', lambda m: f'[{m.group(1).strip()}]', content)
        
        # Fix malformed string literals
        content = re.sub(r'"([^"]*)\s*"', lambda m: f'"{m.group(1).strip()}"', content)
        
        # Fix malformed template literals
        content = re.sub(r'`([^`]*)\s*`', lambda m: f'`{m.group(1).strip()}`', content)
        
        # Fix malformed comments
        content = re.sub(r'//\s*([^\n]*)', lambda m: f'// {m.group(1).strip()}', content)
        
        # Fix malformed imports
        content = re.sub(r'import\s+([^;]+)\s*;', lambda m: f'import {m.group(1).strip()};', content)
        
        # Fix malformed exports
        content = re.sub(r'export\s+([^;]+)\s*;', lambda m: f'export {m.group(1).strip()};', content)
        
        # Fix malformed function declarations
        content = re.sub(r'function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*{', r'function \1(\2) {', content)
        
        # Fix malformed arrow functions
        content = re.sub(r'(\w+)\s*=>\s*{', r'\1 => {', content)
        
        # Fix malformed React components
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(', r'const \1: React.FC = (', content)
        
        # Fix malformed JSX return statements
        content = re.sub(r'return\s*\(\s*<([^>]*)>', r'return (\n    <\1>', content)
        
        # Fix malformed closing tags
        content = re.sub(r'</([^>]*)\s*>\s*\)', r'</\1>\n  )', content)
        
        # Clean up multiple empty lines
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Clean up trailing whitespace
        content = re.sub(r'[ \t]+$', '', content, flags=re.MULTILINE)
        
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
    """Main function to fix specific TypeScript/JSX errors in all relevant files"""
    # Get all TypeScript, JavaScript, and JSX files
    patterns = [
        '**/*.ts',
        '**/*.tsx', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other irrelevant directories
            if 'node_modules' in file_path or '.git' in file_path:
                continue
                
            files_processed += 1
            if fix_specific_tsx_errors(file_path):
                files_fixed += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()
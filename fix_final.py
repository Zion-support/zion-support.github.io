#!/usr/bin/env python3
"""
Final comprehensive script to fix all remaining syntax errors
"""
import os
import re
import glob
from pathlib import Path

def fix_final_errors(content):
    """Fix final syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix function names with spaces - more aggressive
        line = re.sub(r'export default function (\w+)\s+(\w+)\s*\(', r'export default function \1\2(', line)
        line = re.sub(r'function (\w+)\s+(\w+)\s*\(', r'function \1\2(', line)
        
        # Fix missing spaces in className attributes
        line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', line)
        line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])([a-zA-Z])', r'className="\1\2\3 \4', line)
        
        # Fix specific className patterns
        line = re.sub(r'className="min-h-screenbg-gradient-', r'className="min-h-screen bg-gradient-', line)
        line = re.sub(r'className="max-w-7xlmx-auto', r'className="max-w-7xl mx-auto', line)
        line = re.sub(r'className="text-4xlfont-bold', r'className="text-4xl font-bold', line)
        line = re.sub(r'className="text-lgtext-gray-300', r'className="text-lg text-gray-300', line)
        
        # Fix missing spaces in other attributes
        line = re.sub(r'<metaname=', r'<meta name=', line)
        line = re.sub(r'<metacontent=', r'<meta content=', line)
        
        # Fix missing spaces in text content
        line = re.sub(r'Profession a l', r'Professional', line)
        line = re.sub(r'descripti o n', r'description', line)
        
        # Fix missing opening parenthesis after return
        line = re.sub(r'return\s*\(\s*$', r'return (', line)
        
        # Fix missing opening parenthesis in function calls
        line = re.sub(r'(\w+)\s*\(\s*$', r'\1()', line)
        
        # Fix missing closing parenthesis
        if line.count('(') > line.count(')'):
            line = line.rstrip() + ')'
        
        # Fix missing semicolons
        if (line.strip() and 
            not line.strip().endswith((';', '{', '}', ':', ',', '(', ')', '[', ']', '>', '<')) and
            not line.strip().startswith(('import', 'export', 'const', 'let', 'var', 'function', 'class', 'interface', 'type'))):
            line = line.rstrip() + ';'
        
        # Fix JSX structure issues
        if line.strip() == 'return()':
            line = 'return ('
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if file is too large or binary
        if len(content) > 1000000 or '\0' in content:
            return False
        
        original_content = content
        
        # Fix final errors
        content = fix_final_errors(content)
        
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
    """Main function to fix all files"""
    # Get all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    fixed_count = 0
    total_count = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            total_count += 1
            if fix_file(file_path):
                fixed_count += 1
                print(f"Fixed: {file_path}")
    
    print(f"\nFixed {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
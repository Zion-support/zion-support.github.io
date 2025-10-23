#!/usr/bin/env python3
"""
Final comprehensive script to fix all remaining syntax errors
"""
import os
import re
import glob
from pathlib import Path

def fix_final_comprehensive_errors(content):
    """Fix final comprehensive syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix missing spaces in className attributes
        line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])', r'className="\1\2 \3', line)
        line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])([a-zA-Z])', r'className="\1\2\3 \4', line)
        line = re.sub(r'className="([^"]*?)([a-zA-Z])([a-zA-Z])([a-zA-Z])([a-zA-Z])', r'className="\1\2\3\4 \5', line)
        
        # Fix specific patterns
        line = re.sub(r'className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centermx-auto w-fit"', r'className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"', line)
        
        # Fix semicolons in JSX
        line = re.sub(r'<Link;', r'<Link', line)
        line = re.sub(r'to="/contact";', r'to="/contact"', line)
        line = re.sub(r'Contact Us;', r'Contact Us', line)
        line = re.sub(r'<ArrowRight;', r'<ArrowRight', line)
        line = re.sub(r'</Link>;', r'</Link>', line)
        
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
        
        # Fix final comprehensive errors
        content = fix_final_comprehensive_errors(content)
        
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
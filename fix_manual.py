#!/usr/bin/env python3
"""
Manual script to fix specific remaining syntax errors
"""
import os
import re
import glob
from pathlib import Path

def fix_manual_errors(content):
    """Fix manual syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix function names with spaces - more aggressive
        line = re.sub(r'export default function (\w+)\s+(\w+)\s*\(', r'export default function \1\2(', line)
        line = re.sub(r'function (\w+)\s+(\w+)\s*\(', r'function \1\2(', line)
        
        # Fix specific patterns
        line = re.sub(r'DataAnalytics5GPa g e', r'DataAnalytics5GPage', line)
        line = re.sub(r'EdgeComputing5GPa g e', r'EdgeComputing5GPage', line)
        line = re.sub(r'Implementation5GPa g e', r'Implementation5GPage', line)
        line = re.sub(r'MobileApplications5GPa g e', r'MobileApplications5GPage', line)
        line = re.sub(r'NetworkInfrastructure5GPa g e', r'NetworkInfrastructure5GPage', line)
        line = re.sub(r'PrivateNetworks5GPa g e', r'PrivateNetworks5GPage', line)
        line = re.sub(r'SmartCitySolutions5GPa g e', r'SmartCitySolutions5GPage', line)
        line = re.sub(r'Solutions5GPa g e', r'Solutions5GPage', line)
        
        # Fix spaces in className attributes
        line = re.sub(r'className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"', r'className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"', line)
        line = re.sub(r'className="max-w-7xl mx-autopx-4sm:px-6lg:px-8py-16text-center"', r'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"', line)
        line = re.sub(r'className="text-4xl font-boldtext-whitemb-6"', r'className="text-4xl font-bold text-white mb-6"', line)
        line = re.sub(r'className="text-lg text-gray-300mb-8"', r'className="text-lg text-gray-300 mb-8"', line)
        
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
        
        # Fix manual errors
        content = fix_manual_errors(content)
        
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
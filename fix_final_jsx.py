#!/usr/bin/env python3
"""
Final JSX fix script
"""
import os
import re
import glob
from pathlib import Path

def fix_final_jsx_errors(content):
    """Fix final JSX errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix spaces in className attributes - more aggressive approach
        # Remove all spaces within className quotes
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12\13"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12\13\14"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12\13\14\15"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12\13\14\15\16"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12\13\14\15\16\17"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12\13\14\15\16\17\18"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12\13\14\15\16\17\18\19"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3\4\5\6\7\8\9\10\11\12\13\14\15\16\17\18\19\20"', line)
        
        # Fix specific patterns that are causing issues
        line = re.sub(r'className="min-h-screenbg-gradient-', r'className="min-h-screen bg-gradient-', line)
        line = re.sub(r'className="max-w-7xlmx-auto', r'className="max-w-7xl mx-auto', line)
        line = re.sub(r'className="text-4xlfont-bold', r'className="text-4xl font-bold', line)
        line = re.sub(r'className="text-lgtext-gray-300', r'className="text-lg text-gray-300', line)
        line = re.sub(r'className="font-boldtext-white', r'className="font-bold text-white', line)
        line = re.sub(r'className="w-5h-5m l-2"', r'className="w-5 h-5 ml-2"', line)
        
        # Fix missing spaces in className attributes
        line = re.sub(r'className="min-h-screenbg-gradient-', r'className="min-h-screen bg-gradient-', line)
        line = re.sub(r'className="max-w-7xlmx-auto', r'className="max-w-7xl mx-auto', line)
        line = re.sub(r'className="text-4xlfont-bold', r'className="text-4xl font-bold', line)
        line = re.sub(r'className="text-lgtext-gray-300', r'className="text-lg text-gray-300', line)
        line = re.sub(r'className="font-boldtext-white', r'className="font-bold text-white', line)
        line = re.sub(r'className="w-5h-5m l-2"', r'className="w-5 h-5 ml-2"', line)
        
        # Fix missing opening parenthesis after return
        line = re.sub(r'return\s*\(\s*$', r'return (', line)
        
        # Fix missing opening parenthesis in function calls
        line = re.sub(r'(\w+)\s*\(\s*$', r'\1()', line)
        
        # Fix missing closing parenthesis
        if line.count('(') > line.count(')'):
            line = line.rstrip() + ')'
        
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
        
        # Fix final JSX errors
        content = fix_final_jsx_errors(content)
        
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
#!/usr/bin/env python3
"""
Comprehensive script to fix all remaining syntax errors
"""
import os
import re
import glob
from pathlib import Path

def fix_comprehensive_errors(content):
    """Fix comprehensive syntax errors"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Fix function names with spaces
        line = re.sub(r'export default function (\w+)\s+(\w+)\s*\(', r'export default function \1\2(', line)
        
        # Fix missing opening parenthesis after return
        line = re.sub(r'return\s*\(\s*$', r'return (', line)
        
        # Fix missing opening parenthesis in function calls
        line = re.sub(r'(\w+)\s*\(\s*$', r'\1()', line)
        
        # Fix spaces in class names - more comprehensive
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)"', r'className="\1\2"', line)
        line = re.sub(r'className="([^"]*?)\s+([^"]*?)\s+([^"]*?)"', r'className="\1\2\3"', line)
        
        # Fix spaces in text content
        line = re.sub(r'text-(\w+)\s+(\w+)', r'text-\1\2', line)
        
        # Fix spaces in other CSS classes
        line = re.sub(r'(\w+)-(\w+)\s+(\w+)', r'\1-\2\3', line)
        
        # Fix spaces in attribute values
        line = re.sub(r'(\w+)\s+(\w+)\s*=', r'\1\2=', line)
        
        # Fix missing spaces in className attributes
        line = re.sub(r'<divclassName=', r'<div className=', line)
        line = re.sub(r'<spanclassName=', r'<span className=', line)
        line = re.sub(r'<pclassName=', r'<p className=', line)
        line = re.sub(r'<h1className=', r'<h1 className=', line)
        line = re.sub(r'<h2className=', r'<h2 className=', line)
        line = re.sub(r'<h3className=', r'<h3 className=', line)
        line = re.sub(r'<h4className=', r'<h4 className=', line)
        line = re.sub(r'<h5className=', r'<h5 className=', line)
        line = re.sub(r'<h6className=', r'<h6 className=', line)
        line = re.sub(r'<aclassName=', r'<a className=', line)
        line = re.sub(r'<buttonclassName=', r'<button className=', line)
        line = re.sub(r'<inputclassName=', r'<input className=', line)
        line = re.sub(r'<formclassName=', r'<form className=', line)
        line = re.sub(r'<sectionclassName=', r'<section className=', line)
        line = re.sub(r'<articleclassName=', r'<article className=', line)
        line = re.sub(r'<headerclassName=', r'<header className=', line)
        line = re.sub(r'<foot className=', r'<footer className=', line)
        line = re.sub(r'<mainclassName=', r'<main className=', line)
        line = re.sub(r'<navclassName=', r'<nav className=', line)
        line = re.sub(r'<asideclassName=', r'<aside className=', line)
        
        # Fix missing spaces in other attributes
        line = re.sub(r'<divid=', r'<div id=', line)
        line = re.sub(r'<divonClick=', r'<div onClick=', line)
        line = re.sub(r'<divonSubmit=', r'<div onSubmit=', line)
        line = re.sub(r'<divonChange=', r'<div onChange=', line)
        line = re.sub(r'<divonMouseOver=', r'<div onMouseOver=', line)
        line = re.sub(r'<divonMouseOut=', r'<div onMouseOut=', line)
        line = re.sub(r'<divonFocus=', r'<div onFocus=', line)
        line = re.sub(r'<divonBlur=', r'<div onBlur=', line)
        
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
        
        # Fix comprehensive errors
        content = fix_comprehensive_errors(content)
        
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
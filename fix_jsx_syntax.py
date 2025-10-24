#!/usr/bin/env python3
"""
Script to fix JSX syntax errors
"""
import os
import re
import glob

def fix_jsx_syntax(content):
    """Fix JSX syntax errors"""
    # Remove semicolons after JSX elements
    content = re.sub(r'<([^>]+) />;', r'<\1 />', content)
    content = re.sub(r'<([^>]+)>;', r'<\1>', content)
    
    # Fix broken JSX tags
    content = re.sub(r'<([^>]+) />;', r'<\1 />', content)
    content = re.sub(r'<([^>]+)>;', r'<\1>', content)
    
    # Fix broken import statements
    content = re.sub(r'import \{\s*;\s*', 'import { ', content)
    
    # Fix broken title tags
    content = re.sub(r'<title />([^<]+)</title>', r'<title>\1</title>', content)
    
    # Fix broken meta tags
    content = re.sub(r'<meta name="([^"]+)" content="([^"]+)" />;', r'<meta name="\1" content="\2" />', content)
    
    # Fix broken Head tags
    content = re.sub(r'<Head />', r'<Head>', content)
    
    # Fix broken div tags
    content = re.sub(r'<div className="([^"]+)" /></div>;', r'<div className="\1"></div>', content)
    
    # Fix broken span tags
    content = re.sub(r'<span className="([^"]+)" /></span>;', r'<span className="\1"></span>', content)
    
    # Fix broken section tags
    content = re.sub(r'<section className="([^"]+)" />;', r'<section className="\1">', content)
    
    # Fix broken h1 tags
    content = re.sub(r'<h1 className="([^"]+)" />;', r'<h1 className="\1">', content)
    
    # Fix broken p tags
    content = re.sub(r'<p className="([^"]+)" />;', r'<p className="\1">', content)
    
    return content

def fix_file(file_path):
    """Fix JSX syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_jsx_syntax(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all JSX syntax errors"""
    patterns = [
        './app/**/*.tsx',
        './app/**/*.ts', 
        './app/**/*.js',
        './app/**/*.jsx',
        './src/**/*.tsx',
        './src/**/*.ts',
        './src/**/*.js', 
        './src/**/*.jsx',
        './components/**/*.tsx',
        './components/**/*.ts',
        './components/**/*.js',
        './components/**/*.jsx'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            if fix_file(file_path):
                print(f"Fixed: {file_path}")
                fixed_count += 1
    
    print(f"\nFixed {fixed_count} files")

if __name__ == "__main__":
    main()
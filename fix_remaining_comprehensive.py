#!/usr/bin/env python3
"""
Comprehensive fix for remaining JSX parsing errors
"""

import os
import glob
import re

def fix_jsx_fragment_errors(content):
    """Fix JSX fragment errors"""
    # Fix malformed JSX fragments
    content = re.sub(r'<>\s*$', r'<>', content, flags=re.MULTILINE)
    content = re.sub(r'</>\s*$', r'</>', content, flags=re.MULTILINE)
    
    # Fix missing closing tags for JSX fragments
    content = re.sub(r'<>\s*([^<]+)\s*$', r'<>\1</>', content, flags=re.MULTILINE)
    
    return content

def fix_helmet_errors(content):
    """Fix Helmet tag errors"""
    # Fix malformed Helmet tags
    content = re.sub(r'<Helmet>\s*</Helmet>\s*<title>([^<]*)</title>\s*<meta name="description" content="([^"]*)" />\s*<meta name="keywords" content="([^"]*)" />\s*</Helmet>', 
                     r'<Helmet>\n        <title>\1</title>\n        <meta name="description" content="\2" />\n        <meta name="keywords" content="\3" />\n      </Helmet>', content, flags=re.MULTILINE | re.DOTALL)
    
    return content

def fix_div_errors(content):
    """Fix div tag errors"""
    # Fix malformed div tags
    content = re.sub(r'<div className="([^"]*)" />', r'<div className="\1"></div>', content, flags=re.MULTILINE)
    
    # Fix missing closing div tags
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    
    return content

def fix_import_errors(content):
    """Fix import statement errors"""
    # Fix malformed import statements
    content = re.sub(r"import\s*\{([^}]+)\}\s*from\s*['\"][^'\"]+['\"]\s*;\s*'use client';", 
                     r"'use client';\nimport {\1} from '\2';", content)
    
    # Fix duplicate imports
    content = re.sub(r"import\s+React\s+from\s+'react';\s*import\s+React\s+from\s+'react';", 
                     r"import React from 'react';", content)
    
    return content

def fix_syntax_errors(content):
    """Fix general syntax errors"""
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*)\s+([^"]*)"', r'className="\1 \2"', content)
    
    # Fix malformed function calls
    content = re.sub(r'(\w+)\s*\(\s*([^)]*)\s*\)\s*$', r'\1(\2)', content, flags=re.MULTILINE)
    
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single file to fix errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes in order
        content = fix_jsx_fragment_errors(content)
        content = fix_helmet_errors(content)
        content = fix_div_errors(content)
        content = fix_import_errors(content)
        content = fix_syntax_errors(content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed comprehensive errors in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix comprehensive errors"""
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
            if any(skip in file_path for skip in ['.original', '.backup', '.broken']):
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()
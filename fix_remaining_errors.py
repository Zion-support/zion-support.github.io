#!/usr/bin/env python3
"""
Fix remaining JSX parsing errors in React/TypeScript files
"""

import os
import glob
import re

def fix_remaining_errors(file_path):
    """Fix remaining errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed Helmet tags
        content = re.sub(r'<Helmet></Helmet>\s*<title>([^<]*)</title>\s*<meta name="description" content="([^"]*)" />\s*</Helmet>', 
                         r'<Helmet>\n        <title>\1</title>\n        <meta name="description" content="\2" />\n      </Helmet>', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix malformed className attributes
        content = re.sub(r'className="([^"]*)\s+([^"]*)"', r'className="\1 \2"', content)
        
        # Fix malformed div tags
        content = re.sub(r'<div className="([^"]*)" />', r'<div className="\1"></div>', content, flags=re.MULTILINE)
        
        # Fix malformed h1 tags
        content = re.sub(r'<h1 className="([^"]*)" />([^<]*)</h1>', r'<h1 className="\1">\2</h1>', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix malformed p tags
        content = re.sub(r'<p className="([^"]*)" />([^<]*)</p>', r'<p className="\1">\2</p>', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix malformed button tags
        content = re.sub(r'<button className="([^"]*)" />([^<]*)</button>', r'<button className="\1">\2</button>', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix malformed Link tags
        content = re.sub(r'<Link\s+to="([^"]*)"\s+className="([^"]*)"\s*/>([^<]*)</Link>', r'<Link to="\1" className="\2">\3</Link>', content, flags=re.MULTILINE | re.DOTALL)
        
        # Fix malformed ArrowRight tags
        content = re.sub(r'<ArrowRight className="([^"]*)" />', r'<ArrowRight className="\1" />', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed remaining errors in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix remaining errors"""
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
            if fix_remaining_errors(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files, fixed {files_fixed} files")

if __name__ == "__main__":
    main()
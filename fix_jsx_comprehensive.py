#!/usr/bin/env python3
"""
Comprehensive script to fix JSX syntax errors
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_syntax(content):
    """Fix JSX syntax errors"""
    # Fix self-closing tags that should be opening tags
    content = re.sub(r'<(\w+)([^>]*)\s*/>\s*([^<]+)\s*</\1>', r'<\1\2>\3</\1>', content)
    
    # Fix malformed JSX expressions
    content = re.sub(r'\{([^}]*)\}', r'{\1}', content)
    
    # Fix numeric literals followed by identifiers
    content = re.sub(r'(\d+)([a-zA-Z_])', r'\1 \2', content)
    
    # Fix malformed className attributes
    content = re.sub(r'className="([^"]*)\s+([^"]*)"', r'className="\1 \2"', content)
    
    # Fix malformed JSX fragments
    content = re.sub(r'<>\s*([^<]+)\s*</>', r'<React.Fragment>\1</React.Fragment>', content)
    
    # Fix unclosed JSX tags
    content = re.sub(r'<(\w+)([^>]*[^/])>(?!.*</\1>)', r'<\1\2 />', content, flags=re.DOTALL)
    
    # Fix malformed JSX expressions in attributes
    content = re.sub(r'\{([^}]*)\}', r'{\1}', content)
    
    return content

def fix_jsx_tags(content):
    """Fix JSX tag issues"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix self-closing tags that should be opening tags
        if re.search(r'<(\w+)([^>]*)\s*/>\s*([^<]+)\s*</\1>', line):
            line = re.sub(r'<(\w+)([^>]*)\s*/>\s*([^<]+)\s*</\1>', r'<\1\2>\3</\1>', line)
        
        # Fix malformed JSX expressions
        if re.search(r'\{([^}]*)\}', line):
            line = re.sub(r'\{([^}]*)\}', r'{\1}', line)
        
        # Fix numeric literals followed by identifiers
        if re.search(r'(\d+)([a-zA-Z_])', line):
            line = re.sub(r'(\d+)([a-zA-Z_])', r'\1 \2', line)
        
        # Fix malformed className attributes
        if re.search(r'className="([^"]*)\s+([^"]*)"', line):
            line = re.sub(r'className="([^"]*)\s+([^"]*)"', r'className="\1 \2"', line)
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_jsx_syntax(content)
        content = fix_jsx_tags(content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all files"""
    # Find all TypeScript and JavaScript files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts',
        '*.tsx',
        '*.ts'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            if os.path.isfile(file_path):
                files_processed += 1
                if process_file(file_path):
                    files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()
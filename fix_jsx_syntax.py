#!/usr/bin/env python3
"""
Script to fix JSX syntax errors and other common issues
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_fragments(content):
    """Fix JSX fragment syntax issues"""
    # Fix unclosed JSX fragments
    content = re.sub(r'<>([^<]*)</>', r'<React.Fragment>\1</React.Fragment>', content, flags=re.DOTALL)
    
    # Fix malformed JSX fragments
    content = re.sub(r'<>\s*([^<]+)\s*</>', r'<React.Fragment>\1</React.Fragment>', content)
    
    return content

def fix_jsx_tags(content):
    """Fix JSX tag issues"""
    # Fix unclosed self-closing tags
    content = re.sub(r'<(\w+)([^>]*[^/])>(?!.*</\1>)', r'<\1\2 />', content, flags=re.DOTALL)
    
    # Fix malformed JSX expressions
    content = re.sub(r'\{([^}]*)\}', r'{\1}', content)
    
    # Fix numeric literals followed by identifiers
    content = re.sub(r'(\d+)([a-zA-Z_])', r'\1 \2', content)
    
    return content

def fix_jsx_expressions(content):
    """Fix JSX expression issues"""
    # Fix JSX expressions that need parent elements
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line has JSX expression issues
        if 'JSX expressions must have one parent element' in line or 'Expected corresponding closing tag' in line:
            # Look for the problematic JSX in the previous lines
            j = i - 1
            while j >= 0 and not lines[j].strip().startswith('return'):
                j -= 1
            
            if j >= 0:
                # Find the return statement and wrap content in React.Fragment
                return_line = j
                indent = len(lines[return_line]) - len(lines[return_line].lstrip())
                
                # Look for the opening of the return statement
                k = return_line + 1
                while k < len(lines) and (lines[k].strip() == '' or lines[k].startswith(' ' * (indent + 2))):
                    k += 1
                
                if k < len(lines):
                    # Wrap the content in React.Fragment
                    lines[return_line] = lines[return_line].rstrip() + ' <React.Fragment>'
                    
                    # Find the end of the return statement
                    end_line = k
                    while end_line < len(lines) and not lines[end_line].strip().startswith('}'):
                        end_line += 1
                    
                    if end_line < len(lines):
                        lines[end_line] = ' ' * (indent + 2) + '</React.Fragment>' + lines[end_line]
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines)

def fix_specific_syntax_errors(content):
    """Fix specific syntax errors"""
    # Fix property assignment errors
    content = re.sub(r'(\w+):\s*([^,}\n]+)(?=\s*[,}])', r'\1: \2', content)
    
    # Fix missing commas in object literals
    content = re.sub(r'(\w+):\s*([^,}\n]+)\n\s*(\w+):', r'\1: \2,\n  \3:', content)
    
    # Fix declaration or statement expected errors
    content = re.sub(r'(\w+)\s*=\s*([^;]+);?\s*$', r'const \1 = \2;', content, flags=re.MULTILINE)
    
    return content

def fix_import_statements(content):
    """Fix import statement issues"""
    lines = content.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Fix malformed import statements
        if line.strip().startswith('import '):
            # Fix missing semicolons
            if not line.strip().endswith(';'):
                line = line.strip() + ';'
            
            # Fix missing quotes in import paths
            if 'from' in line and not ('"' in line or "'" in line):
                parts = line.split('from')
                if len(parts) == 2:
                    line = parts[0] + 'from "' + parts[1].strip() + '";'
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_jsx_attributes(content):
    """Fix JSX attribute issues"""
    # Fix missing quotes in JSX attributes
    content = re.sub(r'(\w+)=([^"\s>]+)(?=\s|>)', r'\1="\2"', content)
    
    # Fix malformed JSX expressions in attributes
    content = re.sub(r'\{([^}]*)\}', r'{\1}', content)
    
    return content

def process_file(file_path):
    """Process a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_jsx_fragments(content)
        content = fix_jsx_tags(content)
        content = fix_jsx_expressions(content)
        content = fix_specific_syntax_errors(content)
        content = fix_import_statements(content)
        content = fix_jsx_attributes(content)
        
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
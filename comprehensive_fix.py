#!/usr/bin/env python3
"""
Comprehensive script to fix all syntax errors and merge conflicts
"""
import os
import re
import glob
from pathlib import Path

def fix_jsx_syntax(content):
    """Fix JSX syntax errors"""
    # Fix malformed JSX expressions
    content = re.sub(r'\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    # Fix unclosed JSX tags
    content = re.sub(r'<div([^>]*)>\s*$', r'<div\1></div>', content, flags=re.MULTILINE)
    
    # Fix JSX expressions that need parent elements
    content = re.sub(r'<>\s*$', r'<></>', content, flags=re.MULTILINE)
    
    # Fix malformed JSX attributes
    content = re.sub(r'className\s*=\s*\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    return content

def fix_import_statements(content):
    """Fix import statement issues"""
    # Remove duplicate imports
    lines = content.split('\n')
    seen_imports = set()
    new_lines = []
    
    for line in lines:
        if line.strip().startswith('import '):
            if line not in seen_imports:
                seen_imports.add(line)
                new_lines.append(line)
        else:
            new_lines.append(line)
    
    return '\n'.join(new_lines)

def fix_export_statements(content):
    """Fix export statement issues"""
    # Fix malformed export statements
    content = re.sub(r'export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{', r'export default function \1() {', content)
    
    return content

def fix_jsx_attributes(content):
    """Fix JSX attribute issues"""
    # Fix malformed className attributes
    content = re.sub(r'className\s*=\s*\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    # Fix malformed style attributes
    content = re.sub(r'style\s*=\s*\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    return content

def fix_function_declarations(content):
    """Fix function declaration issues"""
    # Fix malformed function declarations
    content = re.sub(r'function\s+(\w+)\s*\(\s*\)\s*\{', r'function \1() {', content)
    
    # Fix arrow function syntax
    content = re.sub(r'const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{', r'const \1 = () => {', content)
    
    return content

def fix_jsx_elements(content):
    """Fix JSX element issues"""
    # Fix unclosed JSX elements
    content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
    
    # Fix malformed JSX closing tags
    content = re.sub(r'</\s*(\w+)\s*>\s*$', r'</\1>', content, flags=re.MULTILINE)
    
    return content

def fix_typescript_errors(content):
    """Fix TypeScript specific errors"""
    # Fix missing semicolons
    content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
    
    # Fix malformed type annotations
    content = re.sub(r':\s*\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    return content

def fix_merge_conflicts(content):
    """Fix merge conflict markers"""
    # Remove merge conflict markers and keep the HEAD version
    content = re.sub(r'<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n', r'\1', content, flags=re.DOTALL)
    
    # Remove any remaining conflict markers
    content = re.sub(r'<<<<<<< [^\n]+\n', '', content)
    content = re.sub(r'=======\n', '', content)
    content = re.sub(r'>>>>>>> [^\n]+\n', '', content)
    
    return content

def fix_common_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix missing commas in object literals
    content = re.sub(r'(\w+)\s*:\s*(\w+)\s*(\w+)\s*:', r'\1: \2,\n  \3:', content)
    
    # Fix missing commas in function parameters
    content = re.sub(r'(\w+)\s+(\w+)\s+(\w+)\s*\)', r'\1, \2, \3)', content)
    
    # Fix malformed JSX expressions
    content = re.sub(r'\{[^}]*\s*>\s*\}', lambda m: m.group(0).replace('>', '&gt;'), content)
    
    return content

def process_file(file_path):
    """Process a single file to fix all errors"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all fixes
        content = fix_merge_conflicts(content)
        content = fix_jsx_syntax(content)
        content = fix_import_statements(content)
        content = fix_export_statements(content)
        content = fix_jsx_attributes(content)
        content = fix_function_declarations(content)
        content = fix_jsx_elements(content)
        content = fix_typescript_errors(content)
        content = fix_common_syntax_errors(content)
        
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
    # Get all TypeScript and JavaScript files
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    files_processed = 0
    files_fixed = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next']):
                continue
                
            files_processed += 1
            if process_file(file_path):
                files_fixed += 1
    
    print(f"\nProcessed {files_processed} files")
    print(f"Fixed {files_fixed} files")

if __name__ == "__main__":
    main()
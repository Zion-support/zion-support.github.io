#!/usr/bin/env python3
"""
Comprehensive script to fix structural issues in React/TypeScript files
"""

import os
import re
import glob

def fix_jsx_structure(content):
    """Fix common JSX structure issues"""
    # Fix unclosed JSX fragments
    content = re.sub(r'<>([^<]*?)(?=\n|$)', r'<>\1</>', content, flags=re.DOTALL)
    
    # Fix missing closing tags for common elements
    content = re.sub(r'<div([^>]*)>([^<]*?)(?=\n|$)', r'<div\1>\2</div>', content, flags=re.DOTALL)
    content = re.sub(r'<section([^>]*)>([^<]*?)(?=\n|$)', r'<section\1>\2</section>', content, flags=re.DOTALL)
    content = re.sub(r'<main([^>]*)>([^<]*?)(?=\n|$)', r'<main\1>\2</main>', content, flags=re.DOTALL)
    
    # Fix malformed JSX expressions
    content = re.sub(r'\{([^}]*?)(?=\n|$)', r'{\1}', content)
    
    # Fix missing semicolons in imports
    content = re.sub(r'import ([^;]+)(?=\n)', r'import \1;', content)
    
    # Fix missing semicolons in variable declarations
    content = re.sub(r'(const|let|var)\s+([^=]+)=([^;]+)(?=\n)', r'\1 \2=\3;', content)
    
    return content

def fix_react_component_structure(content):
    """Fix React component structure issues"""
    # Ensure proper component structure
    if 'export default' not in content and 'function ' in content:
        # Find the function name
        match = re.search(r'function\s+(\w+)', content)
        if match:
            func_name = match.group(1)
            content += f'\n\nexport default {func_name};'
    
    # Fix missing React import
    if 'React' in content and 'import React' not in content:
        content = 'import React from \'react\';\n' + content
    
    # Fix missing return statement
    if 'function ' in content and 'return' not in content and 'export default' not in content:
        # Add a basic return statement
        content = content.replace('{', '{\n  return (\n    <div>Component</div>\n  );')
    
    return content

def fix_syntax_errors(content):
    """Fix common syntax errors"""
    # Fix missing closing braces
    open_braces = content.count('{')
    close_braces = content.count('}')
    if open_braces > close_braces:
        content += '}' * (open_braces - close_braces)
    
    # Fix missing closing parentheses
    open_parens = content.count('(')
    close_parens = content.count(')')
    if open_parens > close_parens:
        content += ')' * (open_parens - close_parens)
    
    # Fix missing semicolons at end of statements
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        line = line.strip()
        if line and not line.endswith((';', '{', '}', '(', ')', '[', ']', ',')) and not line.startswith(('import', 'export', '//', '/*', '*', '*/')):
            if '=' in line and not line.endswith(';'):
                line += ';'
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def fix_file(file_path):
    """Fix a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply fixes
        content = fix_jsx_structure(content)
        content = fix_react_component_structure(content)
        content = fix_syntax_errors(content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\n\n+', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all files"""
    patterns = [
        '**/*.tsx',
        '**/*.ts',
        '**/*.jsx',
        '**/*.js'
    ]
    
    fixed_files = []
    error_files = []
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            # Skip node_modules and other irrelevant directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', '.next', 'out']):
                continue
                
            print(f"Processing: {file_path}")
            if fix_file(file_path):
                fixed_files.append(file_path)
    
    print(f"\nFixed {len(fixed_files)} files:")
    for file_path in fixed_files:
        print(f"  ✓ {file_path}")

if __name__ == "__main__":
    main()
#!/usr/bin/env python3
"""
Comprehensive script to fix parsing errors in TypeScript/JavaScript files
"""
import os
import re
import glob

def fix_parsing_errors(file_path):
    """Fix common parsing errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix merge conflict markers that might have been missed
        content = re.sub(r'<<<<<<< HEAD.*?=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        content = re.sub(r'=======.*?>>>>>>> [^\n]+', '', content, flags=re.DOTALL)
        
        # Fix unterminated string literals
        content = re.sub(r'"[^"]*$', '""', content, flags=re.MULTILINE)
        content = re.sub(r"'[^']*$", "''", content, flags=re.MULTILINE)
        
        # Fix unterminated regular expressions
        content = re.sub(r'/[^/\n]*$', '//', content, flags=re.MULTILINE)
        
        # Fix missing semicolons at end of statements
        lines = content.split('\n')
        fixed_lines = []
        for line in lines:
            line = line.strip()
            if line and not line.endswith((';', '{', '}', ':', ',', '=>', 'if', 'else', 'for', 'while', 'switch', 'case', 'default', 'try', 'catch', 'finally', 'function', 'class', 'interface', 'type', 'enum', 'const', 'let', 'var', 'import', 'export', 'return', 'break', 'continue', 'throw')):
                if not line.startswith(('//', '/*', '*', '#')):
                    line += ';'
            fixed_lines.append(line)
        content = '\n'.join(fixed_lines)
        
        # Fix missing closing braces
        open_braces = content.count('{')
        close_braces = content.count('}')
        if open_braces > close_braces:
            content += '\n' + '}' * (open_braces - close_braces)
        
        # Fix missing closing parentheses
        open_parens = content.count('(')
        close_parens = content.count(')')
        if open_parens > close_parens:
            content += '\n' + ')' * (open_parens - close_parens)
        
        # Fix missing closing brackets
        open_brackets = content.count('[')
        close_brackets = content.count(']')
        if open_brackets > close_brackets:
            content += '\n' + ']' * (open_brackets - close_brackets)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix all parsing errors"""
    patterns = [
        '**/*.tsx',
        '**/*.ts', 
        '**/*.js',
        '**/*.jsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            # Skip node_modules and other directories
            if any(skip in file_path for skip in ['node_modules', '.git', 'dist', 'build', '.next', 'backup', 'backup-problematic', 'backup-unused-components']):
                continue
                
            total_files += 1
            if fix_parsing_errors(file_path):
                files_fixed += 1
    
    print(f"\nFixed {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
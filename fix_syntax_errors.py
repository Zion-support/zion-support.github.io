#!/usr/bin/env python3
import os
import re
import glob

def fix_syntax_errors(file_path):
    """Fix common syntax errors in TypeScript/JavaScript files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix unterminated string literals
        content = re.sub(r'"[^"]*$', '""', content, flags=re.MULTILINE)
        content = re.sub(r"'[^']*$", "''", content, flags=re.MULTILINE)
        
        # Fix missing semicolons after imports
        content = re.sub(r'(import [^;]+)(\n)', r'\1;\2', content)
        
        # Fix missing commas in object literals
        content = re.sub(r'(\w+):\s*([^,}\n]+)(\n\s*[^,}])', r'\1: \2,\3', content)
        
        # Fix missing closing braces
        content = re.sub(r'(\{[^}]*)(\n\s*)(export|const|function|class)', r'\1}\2\3', content)
        
        # Fix merge conflict markers that might have been missed
        content = re.sub(r'<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [a-f0-9]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'=======\n.*?\n>>>>>>> [a-f0-9]+\n?', '', content, flags=re.DOTALL)
        content = re.sub(r'<<<<<<< HEAD\n', '', content)
        
        # Fix JSX syntax issues
        content = re.sub(r'<(\w+)([^>]*?)(\s*)([^/>])', r'<\1\2\3\4', content)
        
        # Fix missing parentheses in function calls
        content = re.sub(r'(\w+)\s*(\n\s*[^;])', r'\1()\2', content)
        
        # Fix missing quotes around object keys
        content = re.sub(r'(\w+):\s*([^,}\n]+)', r'"\1": \2', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed syntax errors in {file_path}")
            return True
        else:
            return False
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Find all TypeScript/JavaScript files in the entire project (excluding node_modules and .next)
    files = []
    for ext in ['*.tsx', '*.ts', '*.js', '*.jsx']:
        files.extend(glob.glob(f'./**/{ext}', recursive=True))
    
    # Filter out node_modules and .next directories
    files = [f for f in files if 'node_modules' not in f and '.next' not in f]
    
    fixed_count = 0
    for file_path in files:
        if fix_syntax_errors(file_path):
            fixed_count += 1
    
    print(f"\nFixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
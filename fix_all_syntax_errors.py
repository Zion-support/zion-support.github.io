#!/usr/bin/env python3
"""
Script to fix all syntax errors in the codebase
"""
import os
import re
import glob
from pathlib import Path

def fix_syntax_errors(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Skip if it's not a TypeScript/JavaScript file
        if not file_path.endswith(('.tsx', '.ts', '.js', '.jsx')):
            return False
        
        # Skip if it's a script file
        if 'scripts/' in file_path or file_path.startswith('./'):
            return False
        
        print(f"Fixing syntax errors in: {file_path}")
        
        # Fix common syntax errors
        
        # 1. Fix missing closing tags
        content = re.sub(r'<meta([^>]*?)(?<!/)>', r'<meta\1 />', content)
        content = re.sub(r'<h1([^>]*?)(?<!/)>', r'<h1\1>', content)
        content = re.sub(r'<h2([^>]*?)(?<!/)>', r'<h2\1>', content)
        content = re.sub(r'<button([^>]*?)(?<!/)>', r'<button\1>', content)
        content = re.sub(r'<p([^>]*?)(?<!/)>', r'<p\1>', content)
        content = re.sub(r'<section([^>]*?)(?<!/)>', r'<section\1>', content)
        content = re.sub(r'<main([^>]*?)(?<!/)>', r'<main\1>', content)
        
        # 2. Fix missing semicolons
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # 3. Fix missing commas in object properties
        content = re.sub(r'(\w+):\s*([^,}\n]+)(?=\s*[}\n])', r'\1: \2,', content)
        
        # 4. Fix missing closing parentheses
        content = re.sub(r'(\w+)\s*\(\s*([^)]*?)\s*(?=\s*[}\n])', r'\1(\2)', content)
        
        # 5. Fix JSX fragment issues
        content = re.sub(r'<>\s*([^<]+?)\s*</>', r'<React.Fragment>\1</React.Fragment>', content)
        
        # 6. Fix missing imports
        if 'React' in content and 'import React' not in content:
            content = "import React from 'react';\n" + content
        
        # 7. Fix missing closing tags for common elements
        content = re.sub(r'<CheckCircle([^>]*?)(?<!/)>', r'<CheckCircle\1 />', content)
        content = re.sub(r'<Navigation([^>]*?)(?<!/)>', r'<Navigation\1 />', content)
        content = re.sub(r'<Helmet([^>]*?)(?<!/)>', r'<Helmet\1 />', content)
        
        # 8. Fix malformed JSX expressions
        content = re.sub(r'{\s*([^}]*?)\s*}\s*([^<])', r'{\1}\2', content)
        
        # 9. Fix missing closing braces
        content = re.sub(r'(\w+)\s*{\s*([^}]*?)\s*(?=\s*[}\n])', r'\1 {\2}', content)
        
        # 10. Fix merge conflict markers that might have been missed
        content = re.sub(r'<<<<<<< HEAD\n?', '', content)
        content = re.sub(r'=======\n?', '', content)
        content = re.sub(r'>>>>>>> [^\n]*\n?', '', content)
        
        # 11. Fix missing semicolons after statements
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # 12. Fix missing closing tags for React fragments
        content = re.sub(r'<React\.Fragment>\s*([^<]+?)\s*(?=\s*[}\n])', r'<React.Fragment>\1</React.Fragment>', content)
        
        # 13. Fix missing closing tags for div elements
        content = re.sub(r'<div([^>]*?)(?<!/)>\s*([^<]+?)\s*(?=\s*[}\n])', r'<div\1>\2</div>', content)
        
        # 14. Fix missing closing tags for span elements
        content = re.sub(r'<span([^>]*?)(?<!/)>\s*([^<]+?)\s*(?=\s*[}\n])', r'<span\1>\2</span>', content)
        
        # 15. Fix missing closing tags for p elements
        content = re.sub(r'<p([^>]*?)(?<!/)>\s*([^<]+?)\s*(?=\s*[}\n])', r'<p\1>\2</p>', content)
        
        # 16. Fix missing closing tags for h1 elements
        content = re.sub(r'<h1([^>]*?)(?<!/)>\s*([^<]+?)\s*(?=\s*[}\n])', r'<h1\1>\2</h1>', content)
        
        # 17. Fix missing closing tags for h2 elements
        content = re.sub(r'<h2([^>]*?)(?<!/)>\s*([^<]+?)\s*(?=\s*[}\n])', r'<h2\1>\2</h2>', content)
        
        # 18. Fix missing closing tags for button elements
        content = re.sub(r'<button([^>]*?)(?<!/)>\s*([^<]+?)\s*(?=\s*[}\n])', r'<button\1>\2</button>', content)
        
        # 19. Fix missing closing tags for section elements
        content = re.sub(r'<section([^>]*?)(?<!/)>\s*([^<]+?)\s*(?=\s*[}\n])', r'<section\1>\2</section>', content)
        
        # 20. Fix missing closing tags for main elements
        content = re.sub(r'<main([^>]*?)(?<!/)>\s*([^<]+?)\s*(?=\s*[}\n])', r'<main\1>\2</main>', content)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
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
    """Main function to fix all syntax errors"""
    # Get all TypeScript/JavaScript files in app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        for file_path in glob.glob(pattern, recursive=True):
            total_files += 1
            if fix_syntax_errors(file_path):
                files_fixed += 1
    
    print(f"\nFixed syntax errors in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
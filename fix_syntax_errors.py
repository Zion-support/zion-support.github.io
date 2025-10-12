#!/usr/bin/env python3
"""
Script to fix syntax errors in the codebase after merge conflict resolution.
This script handles common syntax issues like malformed JSX, missing closing tags, etc.
"""

import os
import re
import glob
from pathlib import Path

def fix_syntax_errors_in_file(file_path):
    """Fix syntax errors in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix common issues
        
        # 1. Fix malformed JSX fragments
        content = re.sub(r'<>\s*<', '<>', content)
        content = re.sub(r'>\s*</>', '></>', content)
        
        # 2. Fix missing closing tags for common elements
        # Count opening and closing divs
        div_open = content.count('<div')
        div_close = content.count('</div>')
        if div_open > div_close:
            # Add missing closing divs
            missing_divs = div_open - div_close
            content += '\n' + '  ' * (missing_divs - 1) + '</div>' * missing_divs
        
        # 3. Fix malformed JSX attributes
        content = re.sub(r'className="[^"]*"[^>]*>', lambda m: m.group(0).replace('>', '>'), content)
        
        # 4. Fix missing closing brackets in JSX
        content = re.sub(r'<([^>]+)\s*$', r'<\1>', content, flags=re.MULTILINE)
        
        # 5. Fix malformed import statements
        content = re.sub(r'import\s+{\s*([^}]+)\s*}\s*from\s*["\']([^"\']+)["\']\s*;?\s*$', 
                        r'import { \1 } from "\2";', content, flags=re.MULTILINE)
        
        # 6. Fix missing semicolons
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # 7. Fix malformed function declarations
        content = re.sub(r'const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{', r'const \1 = () => {', content)
        
        # 8. Fix missing closing braces
        brace_open = content.count('{')
        brace_close = content.count('}')
        if brace_open > brace_close:
            missing_braces = brace_open - brace_close
            content += '\n' + '}' * missing_braces
        
        # 9. Fix malformed JSX expressions
        content = re.sub(r'{\s*([^}]+)\s*}\s*$', r'{\1}', content, flags=re.MULTILINE)
        
        # 10. Fix missing closing parentheses
        paren_open = content.count('(')
        paren_close = content.count(')')
        if paren_open > paren_close:
            missing_parens = paren_open - paren_close
            content += ')' * missing_parens
        
        # 11. Fix malformed component declarations
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{', 
                        r'const \1: React.FC = () => {', content)
        
        # 12. Fix missing return statements
        content = re.sub(r'const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]+)}', 
                        r'const \1: React.FC = () => {\n  return (\2\n  );\n}', content)
        
        # 13. Fix malformed JSX attributes with quotes
        content = re.sub(r'(\w+)="([^"]*)"\s*([^>]*?)>', r'\1="\2" \3>', content)
        
        # 14. Fix missing export statements
        if 'export default' not in content and 'const ' in content:
            # Find the main component
            match = re.search(r'const\s+(\w+)\s*:\s*React\.FC', content)
            if match:
                component_name = match.group(1)
                content += f'\n\nexport default {component_name};'
        
        # 15. Fix malformed JSX closing tags
        content = re.sub(r'</\s*(\w+)\s*>', r'</\1>', content)
        
        # 16. Fix missing semicolons after statements
        content = re.sub(r'(\w+)\s*$', r'\1;', content, flags=re.MULTILINE)
        
        # 17. Fix malformed arrow functions
        content = re.sub(r'\(\s*\)\s*=>\s*{', '() => {', content)
        
        # 18. Fix missing closing tags for React components
        content = re.sub(r'<(\w+)([^>]*)>\s*$', r'<\1\2></\1>', content, flags=re.MULTILINE)
        
        # 19. Fix malformed JSX expressions in attributes
        content = re.sub(r'className="([^"]*)"\s*([^>]*?)>', r'className="\1" \2>', content)
        
        # 20. Fix missing closing tags for fragments
        content = re.sub(r'<>\s*$', '<></>', content, flags=re.MULTILINE)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def find_files_with_syntax_errors():
    """Find all TypeScript/JavaScript files that might have syntax errors"""
    files = []
    
    # Search for TypeScript, JavaScript, and JSX files
    patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']
    
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other excluded directories
    filtered_files = []
    for file_path in files:
        if not any(excluded in file_path for excluded in ['node_modules', '.git', 'dist', '.next', 'out']):
            filtered_files.append(file_path)
    
    return filtered_files

def main():
    """Main function to fix syntax errors"""
    print("Starting syntax error fixes...")
    
    # Find all relevant files
    files = find_files_with_syntax_errors()
    print(f"Processing {len(files)} files...")
    
    # Fix each file
    fixed_count = 0
    for file_path in files:
        if fix_syntax_errors_in_file(file_path):
            fixed_count += 1
            print(f"Fixed syntax errors in: {file_path}")
    
    print(f"Fixed syntax errors in {fixed_count} files")

if __name__ == "__main__":
    main()
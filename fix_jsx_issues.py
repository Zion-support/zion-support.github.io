#!/usr/bin/env python3
"""
Script to fix JSX and syntax issues in the codebase.
"""

import os
import re
import glob

def fix_jsx_issues(file_path):
    """Fix JSX and syntax issues in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix orphaned text outside JSX elements
        content = re.sub(r'^\s*[A-Za-z].*?\.\s*$', '', content, flags=re.MULTILINE)
        
        # Fix missing closing tags by ensuring proper JSX structure
        # Look for unclosed div tags and fix them
        open_divs = content.count('<div')
        close_divs = content.count('</div>')
        
        if open_divs > close_divs:
            # Add missing closing divs
            missing_divs = open_divs - close_divs
            # Find the last return statement and add closing divs before it
            last_return = content.rfind('return (')
            if last_return != -1:
                # Find the matching closing parenthesis
                paren_count = 0
                i = last_return
                while i < len(content):
                    if content[i] == '(':
                        paren_count += 1
                    elif content[i] == ')':
                        paren_count -= 1
                        if paren_count == 0:
                            # Insert missing closing divs before this closing paren
                            content = content[:i] + '</div>' * missing_divs + content[i:]
                            break
                    i += 1
        
        # Fix duplicate imports
        lines = content.split('\n')
        seen_imports = set()
        new_lines = []
        for line in lines:
            if line.strip().startswith('import '):
                if line.strip() not in seen_imports:
                    seen_imports.add(line.strip())
                    new_lines.append(line)
            else:
                new_lines.append(line)
        content = '\n'.join(new_lines)
        
        # Fix syntax errors in import statements
        content = re.sub(r'import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]([^\'"]+)[\'"];?\s*import\s*{\s*([^}]+)\s*}\s*from\s*[\'"]([^\'"]+)[\'"];?', 
                        r'import { \1, \3 } from "\2";', content)
        
        # Fix orphaned text that's not in JSX
        content = re.sub(r'^\s*[A-Za-z][^<]*$', '', content, flags=re.MULTILINE)
        
        # Clean up extra whitespace
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all JSX issues."""
    # Get all TypeScript and TSX files
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'utils/**/*.ts',
        'components/**/*.tsx',
        'components/**/*.ts'
    ]
    
    files_to_fix = []
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    fixed_count = 0
    total_count = 0
    
    for file_path in files_to_fix:
        if os.path.isfile(file_path):
            total_count += 1
            if fix_jsx_issues(file_path):
                fixed_count += 1
    
    print(f"Fixed JSX issues in {fixed_count} out of {total_count} files")

if __name__ == "__main__":
    main()
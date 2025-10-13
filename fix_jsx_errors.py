#!/usr/bin/env python3
"""
Script to fix common JSX syntax errors after merge conflict resolution.
"""

import os
import re
import glob

def fix_jsx_errors(file_path):
    """Fix JSX syntax errors in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix common JSX issues
        fixes_applied = 0
        
        # Fix unclosed JSX elements that should be self-closing
        content = re.sub(r'<meta([^>]*?)></meta>', r'<meta\1 />', content)
        content = re.sub(r'<br([^>]*?)></br>', r'<br\1 />', content)
        content = re.sub(r'<img([^>]*?)></img>', r'<img\1 />', content)
        content = re.sub(r'<input([^>]*?)></input>', r'<input\1 />', content)
        
        # Fix JSX expressions that need a parent element
        # Pattern: return (\n\s*<div></div>\s*\n\s*<Component)
        content = re.sub(
            r'return \(\s*\n\s*<div></div>\s*\n\s*(<[A-Z])',
            r'return (\n    <div>\n      \1',
            content,
            flags=re.MULTILINE
        )
        
        # Fix missing closing tags for sections
        # Look for unclosed section tags
        section_pattern = r'<section([^>]*?)>(.*?)(?=<section|\Z)'
        def fix_section(match):
            section_attrs = match.group(1)
            section_content = match.group(2)
            # Check if section is properly closed
            if not section_content.strip().endswith('</section>'):
                return f'<section{section_attrs}>{section_content}</section>'
            return match.group(0)
        
        content = re.sub(section_pattern, fix_section, content, flags=re.DOTALL)
        
        # Fix malformed JSX expressions
        # Fix cases like: <div></div>\n      <Component
        content = re.sub(
            r'<div></div>\s*\n\s*(<[A-Z][^>]*>)',
            r'<div>\n      \1',
            content
        )
        
        # Fix cases like: <h1></h1>\n            Text
        content = re.sub(
            r'<h1([^>]*?)></h1>\s*\n\s*([^<]+?)\s*\n\s*</h1>',
            r'<h1\1>\2</h1>',
            content
        )
        
        # Fix cases like: <p></p>\n            Text
        content = re.sub(
            r'<p([^>]*?)></p>\s*\n\s*([^<]+?)\s*\n\s*</p>',
            r'<p\1>\2</p>',
            content
        )
        
        # Fix malformed parentheses in JSX
        content = re.sub(r'<title>([^<]+)\)</title>', r'<title>\1</title>', content)
        
        # Fix missing closing divs at the end of return statements
        # Look for return statements that don't end with proper closing
        return_pattern = r'return \(\s*\n(.*?)(?=\n\s*\);)'
        def fix_return(match):
            content = match.group(1)
            # Count opening and closing divs
            open_divs = content.count('<div')
            close_divs = content.count('</div>')
            if open_divs > close_divs:
                missing_divs = open_divs - close_divs
                content += '\n' + '    ' * (missing_divs - 1) + '</div>' * missing_divs
            return f'return (\n{content}'
        
        content = re.sub(return_pattern, fix_return, content, flags=re.DOTALL)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed JSX errors in: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all JSX errors."""
    # Find all TypeScript/JavaScript files in the app directory
    patterns = [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.jsx',
        'app/**/*.js'
    ]
    
    files_fixed = 0
    total_files = 0
    
    for pattern in patterns:
        files = glob.glob(pattern, recursive=True)
        total_files += len(files)
        
        for file_path in files:
            if fix_jsx_errors(file_path):
                files_fixed += 1
    
    print(f"\nFixed JSX errors in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
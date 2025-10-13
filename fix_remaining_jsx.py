#!/usr/bin/env python3
"""
Fix remaining JSX syntax errors.
"""

import os
import re
import glob

def fix_remaining_jsx(file_path):
    """Fix remaining JSX syntax errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX expressions that need a parent element
        # Pattern: return (\n\s*<div></div>\s*\n\s*<Component)
        content = re.sub(
            r'return \(\s*\n\s*<div></div>\s*\n\s*(<[A-Z])',
            r'return (\n    <div>\n      \1',
            content,
            flags=re.MULTILINE
        )
        
        # Fix cases where JSX elements are not properly nested
        content = re.sub(
            r'<div></div>\s*\n\s*(<[A-Z][^>]*>)',
            r'<div>\n      \1',
            content
        )
        
        # Fix malformed section tags
        content = re.sub(r'</section><section', r'<section', content)
        
        # Fix malformed parentheses in JSX
        content = re.sub(r'<title>([^<]+)\)</title>', r'<title>\1</title>', content)
        content = re.sub(r'<h1([^>]*?)>([^<]+)\)</h1>', r'<h1\1>\2</h1>', content)
        
        # Fix malformed Link components
        content = re.sub(r'<Link\)', r'<Link', content)
        content = re.sub(r'</Link>\s*\n\s*([^<]+?)\s*\n\s*<ArrowRight', r'<Link>\n            \1\n            <ArrowRight', content)
        content = re.sub(r'</ArrowRight>\s*\n\s*</Link>', r'</ArrowRight>\n          </Link>', content)
        
        # Fix cases where text is outside JSX elements
        content = re.sub(
            r'<h1([^>]*?)></h1>\s*\n\s*([^<]+?)(?=\s*\n\s*</h1>)',
            r'<h1\1>\2',
            content
        )
        
        # Fix cases where there are extra closing tags
        content = re.sub(r'</h1>\s*\n\s*</h1>', r'</h1>', content)
        content = re.sub(r'</p>\s*\n\s*</p>', r'</p>', content)
        
        # Fix malformed JSX expressions
        content = re.sub(
            r'<div></div>\s*\n\s*(<[A-Z][^>]*>)',
            r'<div>\n      \1',
            content
        )
        
        # Fix specific parsing errors
        content = re.sub(r'(\w+)\)\s*\n\s*</h1>', r'\1</h1>', content)
        
        # Fix cases where JSX elements are not properly closed
        # Look for unclosed section tags and add closing tags
        section_pattern = r'<section([^>]*?)>(.*?)(?=<section|\Z)'
        def fix_section(match):
            section_attrs = match.group(1)
            section_content = match.group(2)
            # Check if section is properly closed
            if not section_content.strip().endswith('</section>'):
                return f'<section{section_attrs}>{section_content}</section>'
            return match.group(0)
        
        content = re.sub(section_pattern, fix_section, content, flags=re.DOTALL)
        
        # Fix missing closing divs by analyzing the structure
        lines = content.split('\n')
        fixed_lines = []
        div_stack = []
        
        for i, line in enumerate(lines):
            # Track opening divs
            div_matches = re.findall(r'<div([^>]*?)>', line)
            for match in div_matches:
                if not match.strip().endswith('/'):
                    div_stack.append(i)
            
            # Track closing divs
            closing_divs = re.findall(r'</div>', line)
            for _ in closing_divs:
                if div_stack:
                    div_stack.pop()
            
            fixed_lines.append(line)
        
        # Add missing closing divs at the end of return statements
        if div_stack:
            # Find the last return statement
            return_idx = -1
            for i, line in enumerate(fixed_lines):
                if line.strip().startswith('return ('):
                    return_idx = i
            
            if return_idx != -1:
                # Find the closing of the return statement
                paren_count = 0
                for i in range(return_idx, len(fixed_lines)):
                    line = fixed_lines[i]
                    paren_count += line.count('(') - line.count(')')
                    if paren_count == 0 and ');' in line:
                        # Insert missing closing divs before the closing );
                        indent = len(line) - len(line.lstrip())
                        for _ in range(len(div_stack)):
                            fixed_lines.insert(i, ' ' * indent + '</div>')
                        break
        
        content = '\n'.join(fixed_lines)
        
        # Write the fixed content back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed remaining JSX errors in: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all remaining JSX errors."""
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
            if fix_remaining_jsx(file_path):
                files_fixed += 1
    
    print(f"\nFixed remaining JSX errors in {files_fixed} out of {total_files} files")

if __name__ == "__main__":
    main()
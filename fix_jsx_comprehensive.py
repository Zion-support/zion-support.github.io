#!/usr/bin/env python3
"""
Comprehensive script to fix JSX syntax errors in blog pages
"""

import os
import re
import glob
from pathlib import Path

def fix_comprehensive_jsx(file_path):
    """Fix comprehensive JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Fix malformed Helmet imports and usage
        if 'Helmet' in content and 'import' not in content:
            content = "import { Helmet } from 'react-helmet-async';\n" + content
        
        # Fix 2: Fix malformed JSX attributes with colons
        content = re.sub(r'rel:\s*"([^"]*)"', r'rel="\1"', content)
        content = re.sub(r'href\s*=\s*"([^"]*)"', r'href="\1"', content)
        content = re.sub(r'content\s*=\s*"([^"]*)"', r'content="\1"', content)
        
        # Fix 3: Fix unterminated string literals in JSX
        # Look for patterns like: content="text without closing quote
        content = re.sub(r'content="([^"]*)\s*/>', r'content="\1" />', content)
        content = re.sub(r'href="([^"]*)\s*/>', r'href="\1" />', content)
        
        # Fix 4: Fix malformed JSX tags
        content = re.sub(r'<Helmet\s+>', '<Helmet>', content)
        content = re.sub(r'<meta\s+name="([^"]*)"\s*,\s*content\s*=\s*"([^"]*)"\s*/>', r'<meta name="\1" content="\2" />', content)
        content = re.sub(r'<link\s+rel:\s*"([^"]*)"\s*,\s*href\s*=\s*"([^"]*)"\s*/>', r'<link rel="\1" href="\2" />', content)
        
        # Fix 5: Fix malformed JSX fragments and ensure proper structure
        lines = content.split('\n')
        cleaned_lines = []
        in_jsx = False
        brace_count = 0
        paren_count = 0
        
        for i, line in enumerate(lines):
            # Track JSX state
            if 'return (' in line:
                in_jsx = True
                paren_count += 1
            elif in_jsx:
                if '{' in line:
                    brace_count += line.count('{')
                if '}' in line:
                    brace_count -= line.count('}')
                if ')' in line and paren_count > 0:
                    paren_count -= line.count(')')
                    if paren_count == 0:
                        in_jsx = False
            
            # Fix malformed JSX elements
            if '<' in line and '>' in line:
                # Fix self-closing tags that should be closed
                if '/>' not in line and not line.strip().endswith('>'):
                    # Check if this is a self-closing tag
                    if any(tag in line for tag in ['meta', 'link', 'img', 'input', 'br', 'hr']):
                        if not line.strip().endswith('/>'):
                            line = line.rstrip() + ' />'
            
            cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Fix 6: Ensure proper JSX structure
        # Count opening and closing tags
        open_divs = content.count('<div')
        close_divs = content.count('</div>')
        
        # Add missing closing divs at the end
        if open_divs > close_divs:
            missing_divs = open_divs - close_divs
            # Add proper indentation
            indent = '  ' * 2  # Assuming 2-space indentation
            content += '\n' + indent + '</div>\n' * missing_divs
        
        # Fix 7: Fix malformed JSX fragments
        if '<>' in content and '</>' not in content:
            content = content.replace('<>', '<div>')
            content += '\n</div>'
        
        # Fix 8: Fix trailing semicolons and malformed returns
        content = re.sub(r'(\s*</div>\s*);\s*$', r'\1', content)
        content = re.sub(r'return\s*\(\s*;', 'return (', content)
        
        # Fix 9: Fix malformed function syntax
        content = re.sub(r'function\s+(\w+)\s*\(\s*\)\s*:\s*React\.JSX\.Element\s*{', r'function \1(): React.JSX.Element {', content)
        
        # Fix 10: Fix malformed export statements
        content = re.sub(r'export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*:\s*React\.JSX\.Element\s*{', r'export default function \1(): React.JSX.Element {', content)
        
        # Fix 11: Fix malformed JSX attributes with spaces
        content = re.sub(r'className\s*=\s*"([^"]*)"', r'className="\1"', content)
        
        # Fix 12: Fix malformed string literals
        content = re.sub(r'"([^"]*)\s*/>', r'" />', content)
        
        # Fix 13: Fix malformed JSX comments
        content = re.sub(r'//\s*@ts-nocheck', '// @ts-nocheck', content)
        
        # Fix 14: Ensure proper closing of JSX elements
        # Look for unclosed tags and add closing tags
        unclosed_tags = ['article', 'section', 'header', 'main', 'footer', 'nav', 'aside']
        for tag in unclosed_tags:
            open_count = content.count(f'<{tag}')
            close_count = content.count(f'</{tag}>')
            if open_count > close_count:
                missing = open_count - close_count
                content += '\n' + f'</{tag}>\n' * missing
        
        # Fix 15: Fix malformed JSX attributes with colons and spaces
        content = re.sub(r'(\w+):\s*"([^"]*)"', r'\1="\2"', content)
        
        # Fix 16: Fix malformed JSX elements with missing closing tags
        # Look for patterns like <div> without </div>
        content = re.sub(r'<div([^>]*)>\s*$', r'<div\1>', content, flags=re.MULTILINE)
        
        # Fix 17: Fix malformed JSX elements with missing opening tags
        content = re.sub(r'^\s*</div>\s*$', r'  </div>', content, flags=re.MULTILINE)
        
        # Fix 18: Fix malformed JSX elements with missing closing tags for specific elements
        jsx_elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'button', 'ul', 'li', 'ol']
        for element in jsx_elements:
            open_count = content.count(f'<{element}')
            close_count = content.count(f'</{element}>')
            if open_count > close_count:
                missing = open_count - close_count
                content += '\n' + f'</{element}>\n' * missing
        
        # Fix 19: Fix malformed JSX elements with missing closing tags for icon components
        icon_elements = ['ArrowLeft', 'ArrowRight', 'Zap', 'Shield', 'TrendingUp', 'DollarSign', 'Globe', 'Check', 'X', 'Plus', 'Minus']
        for element in icon_elements:
            open_count = content.count(f'<{element}')
            close_count = content.count(f'</{element}>')
            if open_count > close_count:
                missing = open_count - close_count
                content += '\n' + f'</{element}>\n' * missing
        
        # Fix 20: Fix malformed JSX elements with missing closing tags for Link components
        if '<Link' in content:
            open_count = content.count('<Link')
            close_count = content.count('</Link>')
            if open_count > close_count:
                missing = open_count - close_count
                content += '\n' + '</Link>\n' * missing
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix all blog files"""
    # Find all blog TSX files
    blog_files = []
    
    # Search in both app/blog and src/pages/blog directories
    for pattern in ['/workspace/app/blog/**/*.tsx', '/workspace/src/pages/blog/**/*.tsx']:
        blog_files.extend(glob.glob(pattern, recursive=True))
    
    print(f"Found {len(blog_files)} blog files to check")
    
    fixed_count = 0
    for file_path in blog_files:
        if fix_comprehensive_jsx(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
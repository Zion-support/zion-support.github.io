#!/usr/bin/env python3
"""
Script to fix common JSX syntax errors in blog pages
"""

import os
import re
import glob
from pathlib import Path

def fix_jsx_file(file_path):
    """Fix common JSX syntax errors in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix 1: Remove duplicate opening divs and content
        # Look for patterns like: <div>...<div>... (duplicate divs)
        content = re.sub(r'<div[^>]*>.*?<div[^>]*>', '<div>', content, flags=re.DOTALL)
        
        # Fix 2: Fix malformed JSX attributes
        # Fix rel: "canonical" -> rel="canonical"
        content = re.sub(r'rel:\s*"([^"]*)"', r'rel="\1"', content)
        
        # Fix href ="..." -> href="..."
        content = re.sub(r'href\s*=\s*"([^"]*)"', r'href="\1"', content)
        
        # Fix content ="..." -> content="..."
        content = re.sub(r'content\s*=\s*"([^"]*)"', r'content="\1"', content)
        
        # Fix 3: Fix unterminated string literals
        # Look for strings that don't end with quotes before the next tag
        content = re.sub(r'"([^"]*)\s*/>', r'" />', content)
        
        # Fix 4: Fix malformed Helmet tags
        # Fix <Helmet > -> <Helmet>
        content = re.sub(r'<Helmet\s+>', '<Helmet>', content)
        
        # Fix 5: Fix duplicate content blocks
        # Remove duplicate div containers
        lines = content.split('\n')
        cleaned_lines = []
        skip_next = False
        
        for i, line in enumerate(lines):
            if skip_next:
                skip_next = False
                continue
                
            # Skip duplicate lines that are identical to the next line
            if i < len(lines) - 1 and line.strip() == lines[i + 1].strip() and line.strip().startswith('<div'):
                skip_next = True
                continue
                
            cleaned_lines.append(line)
        
        content = '\n'.join(cleaned_lines)
        
        # Fix 6: Ensure proper closing tags
        # Count opening and closing divs
        open_divs = content.count('<div')
        close_divs = content.count('</div>')
        
        # Add missing closing divs
        if open_divs > close_divs:
            missing_divs = open_divs - close_divs
            content += '\n' + '  </div>\n' * missing_divs
        
        # Fix 7: Fix malformed JSX fragments
        # Ensure fragments have proper closing
        if '<>' in content and '</>' not in content:
            content = content.replace('<>', '<div>')
            content += '\n</div>'
        
        # Fix 8: Remove trailing semicolons after JSX return
        content = re.sub(r'(\s*</div>\s*);\s*$', r'\1', content)
        
        # Fix 9: Fix malformed meta tags
        content = re.sub(r'<meta\s+name="([^"]*)"\s*,\s*content\s*=\s*"([^"]*)"\s*/>', r'<meta name="\1" content="\2" />', content)
        
        # Fix 10: Fix malformed link tags
        content = re.sub(r'<link\s+rel:\s*"([^"]*)"\s*,\s*href\s*=\s*"([^"]*)"\s*/>', r'<link rel="\1" href="\2" />', content)
        
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
        if fix_jsx_file(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()